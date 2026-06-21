'use client'

import { useEffect, useRef } from 'react'

// Cloudflare Turnstile widget. Renders only when NEXT_PUBLIC_TURNSTILE_SITE_KEY
// is set; otherwise nothing renders and the form submits without a token.

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: { sitekey: string; callback: (token: string) => void; 'expired-callback'?: () => void }) => string
      remove: (id: string) => void
    }
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export const turnstileEnabled = !!SITE_KEY

export default function Turnstile({ onVerify }: { onVerify: (token: string) => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)

  useEffect(() => {
    if (!SITE_KEY || !ref.current) return
    const SCRIPT = 'https://challenges.cloudflare.com/turnstile/v0/api.js'

    function render() {
      if (!window.turnstile || !ref.current || widgetId.current) return
      widgetId.current = window.turnstile.render(ref.current, {
        sitekey: SITE_KEY!,
        callback: (token) => onVerify(token),
        'expired-callback': () => onVerify(''),
      })
    }

    if (window.turnstile) {
      render()
    } else if (!document.querySelector(`script[src="${SCRIPT}"]`)) {
      const s = document.createElement('script')
      s.src = SCRIPT
      s.async = true
      s.defer = true
      s.onload = render
      document.head.appendChild(s)
    } else {
      const t = setInterval(() => {
        if (window.turnstile) {
          clearInterval(t)
          render()
        }
      }, 200)
      return () => clearInterval(t)
    }

    const id = widgetId.current
    return () => {
      if (id && window.turnstile) window.turnstile.remove(id)
      widgetId.current = null
    }
  }, [onVerify])

  if (!SITE_KEY) return null
  return <div ref={ref} className="my-4" />
}
