// Routed enquiry endpoint. Validates input, optionally verifies Cloudflare
// Turnstile, and forwards to a CRM/automation webhook (HubSpot / Airtable /
// Zapier / Make) when configured. Degrades gracefully: with no webhook set it
// still returns success so the form works in development.
//
// Env (set in .env.local / hosting):
//   TURNSTILE_SECRET_KEY   — Cloudflare Turnstile secret (optional)
//   ENQUIRY_WEBHOOK_URL    — POST target for submissions (optional)
//   ENQUIRY_EMAIL_TO       — informational; routing handled downstream (optional)

export const dynamic = 'force-dynamic'

type Payload = {
  type?: string
  name?: string
  company?: string
  email?: string
  phone?: string
  message?: string
  token?: string // Turnstile token
}

const TYPES = ['partner', 'sales', 'vendor', 'support']
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

async function verifyTurnstile(token: string | undefined, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return true // not configured → skip
  if (!token) return false
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ secret, response: token, ...(ip ? { remoteip: ip } : {}) }),
    })
    const data = (await res.json()) as { success: boolean }
    return !!data.success
  } catch {
    return false
  }
}

export async function POST(request: Request) {
  let body: Payload
  try {
    body = (await request.json()) as Payload
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  const type = TYPES.includes(body.type ?? '') ? body.type! : 'sales'
  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const message = (body.message ?? '').trim()

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: 'Please complete the required fields.' }, { status: 400 })
  }
  if (!isEmail(email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null
  const human = await verifyTurnstile(body.token, ip)
  if (!human) {
    return Response.json({ ok: false, error: 'Verification failed. Please try again.' }, { status: 400 })
  }

  const submission = {
    type,
    name,
    company: (body.company ?? '').trim(),
    email,
    phone: (body.phone ?? '').trim(),
    message,
    source: 'mtpdistribution.com',
    submittedAt: new Date().toISOString(),
  }

  const webhook = process.env.ENQUIRY_WEBHOOK_URL
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      })
      if (!res.ok) throw new Error(`Webhook ${res.status}`)
    } catch {
      return Response.json({ ok: false, error: 'Could not send right now — please try again or email us.' }, { status: 502 })
    }
  }

  return Response.json({ ok: true })
}
