'use client'

import { useState, useCallback } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Turnstile, { turnstileEnabled } from './Turnstile'

// Routed enquiry form. Routes by type to the right MTP desk.
// Local success state only for now — wire to CRM/Airtable + email + autoresponder
// (and Cloudflare Turnstile) in the integrations phase.

export type EnquiryType = 'partner' | 'sales' | 'vendor' | 'support'

const TYPE_LABELS: Record<EnquiryType, string> = {
  partner: 'Become a Partner',
  sales: 'Sales / Quote',
  vendor: 'Vendor / OEM',
  support: 'Support',
}

export default function EnquiryForm({
  defaultType = 'sales',
  types = ['partner', 'sales', 'vendor', 'support'],
}: {
  defaultType?: EnquiryType
  types?: EnquiryType[]
}) {
  const [type, setType] = useState<EnquiryType>(defaultType)
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [token, setToken] = useState('')
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  function set(k: keyof typeof form, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  const onVerify = useCallback((t: string) => setToken(t), [])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (turnstileEnabled && !token) {
      setError('Please complete the verification.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, ...form, token }),
      })
      const data = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong.')
      setDone(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="bg-white border border-[#E2ECF8] rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-[#00B4C8]/15 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 size={28} className="text-[#00B4C8]" />
        </div>
        <h3 className="text-[#0D1B3E] text-xl font-semibold mb-2">Thank you — message received</h3>
        <p className="text-[#4A5568] text-sm">
          Your <span className="font-medium">{TYPE_LABELS[type].toLowerCase()}</span> enquiry has been routed to
          the right MTP team. We typically respond within one business day.
        </p>
      </div>
    )
  }

  const input =
    'w-full bg-white border border-[#E2ECF8] rounded-lg px-4 py-3 text-sm text-[#0D1B3E] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#00B4C8] transition-colors'

  return (
    <form onSubmit={onSubmit} className="bg-white border border-[#E2ECF8] rounded-2xl p-6 lg:p-8">
      {/* Type selector */}
      <label className="block text-[#0D1B3E] text-xs font-semibold tracking-widest uppercase mb-3">I&apos;m enquiring as</label>
      <div className="flex flex-wrap gap-2 mb-6">
        {types.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
              type === t
                ? 'bg-[#0D1B3E] border-[#0D1B3E] text-white'
                : 'bg-white border-[#E2ECF8] text-[#4A5568] hover:border-[#00B4C8]/50'
            }`}
          >
            {TYPE_LABELS[t]}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <input className={input} placeholder="Full name *" required value={form.name} onChange={(e) => set('name', e.target.value)} />
        <input className={input} placeholder="Company" value={form.company} onChange={(e) => set('company', e.target.value)} />
        <input className={input} type="email" placeholder="Work email *" required value={form.email} onChange={(e) => set('email', e.target.value)} />
        <input className={input} placeholder="Phone" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
      </div>
      <textarea
        className={`${input} mb-5 resize-none`}
        rows={4}
        placeholder="How can we help? *"
        required
        value={form.message}
        onChange={(e) => set('message', e.target.value)}
      />

      <Turnstile onVerify={onVerify} />

      {error && (
        <p className="text-[#DC2626] text-sm text-center mb-3" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="flex items-center justify-center gap-2 w-full bg-[#00B4C8] hover:bg-[#00C9DF] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-sm transition-colors"
      >
        {submitting ? 'Sending…' : (<>Send Enquiry <ArrowRight size={16} /></>)}
      </button>
      <p className="text-[#94A3B8] text-xs text-center mt-3">
        Routed to the right MTP desk in the UAE or Oman. We reply within one business day.
      </p>
    </form>
  )
}
