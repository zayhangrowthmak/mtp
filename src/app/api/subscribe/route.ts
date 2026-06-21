// Newsletter subscribe endpoint. Forwards to a Mailchimp/Brevo automation
// webhook when configured; otherwise returns success so the form works in dev.
//
// Env:
//   NEWSLETTER_WEBHOOK_URL — POST target for new subscribers (optional)

export const dynamic = 'force-dynamic'

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export async function POST(request: Request) {
  let email = ''
  try {
    const body = (await request.json()) as { email?: string }
    email = (body.email ?? '').trim()
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  if (!isEmail(email)) {
    return Response.json({ ok: false, error: 'Please enter a valid email.' }, { status: 400 })
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'mtpdistribution.com', subscribedAt: new Date().toISOString() }),
      })
      if (!res.ok) throw new Error(`Webhook ${res.status}`)
    } catch {
      return Response.json({ ok: false, error: 'Could not subscribe right now — please try again.' }, { status: 502 })
    }
  }

  return Response.json({ ok: true })
}
