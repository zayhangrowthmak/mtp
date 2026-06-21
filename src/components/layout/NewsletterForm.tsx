'use client'

import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

// Newsletter capture → /api/subscribe (forwards to Mailchimp/Brevo when the
// NEWSLETTER_WEBHOOK_URL env is set; succeeds locally otherwise).
export default function NewsletterForm({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = (await res.json()) as { ok: boolean; error?: string }
      if (!res.ok || !data.ok) throw new Error(data.error || 'Please try again.')
      setDone(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const light = variant === 'light'

  if (done) {
    return (
      <p className={`flex items-center gap-2 text-sm ${light ? 'text-[#4A5568]' : 'text-white/70'}`}>
        <Check size={16} className="text-[#00B4C8]" />
        Thanks — you&apos;re on the list.
      </p>
    )
  }

  const inputCls = light
    ? 'bg-white border-[#E2ECF8] text-[#0D1B3E] placeholder:text-[#94A3B8]'
    : 'bg-white/5 border-white/15 text-white placeholder:text-white/35'

  return (
    <div>
      <form onSubmit={onSubmit} className="flex items-center gap-2 max-w-sm">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          aria-label="Email address"
          className={`flex-1 min-w-0 border rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#00B4C8] transition-colors ${inputCls}`}
        />
        <button
          type="submit"
          disabled={submitting}
          aria-label="Subscribe"
          className="flex items-center justify-center bg-[#00B4C8] hover:bg-[#00C9DF] disabled:opacity-60 text-white rounded-sm w-10 h-10 flex-shrink-0 transition-colors"
        >
          <ArrowRight size={16} />
        </button>
      </form>
      {error && <p className="text-[#DC2626] text-xs mt-2">{error}</p>}
    </div>
  )
}
