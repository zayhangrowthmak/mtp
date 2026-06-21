'use client'

import { useState } from 'react'

// Real manufacturer product shot for a solution hero, background removed so the
// object floats directly on the navy. A soft radial "spotlight" + contact
// shadow keep even dark products legible without a white card.
// Assets live at /products/hero-<id>.png (transparent). If a file is missing the
// component removes itself and the hero falls back to its glow.
export default function HeroProductImage({ id, alt }: { id: string; alt: string }) {
  const [ok, setOk] = useState(true)
  if (!ok) return null

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[4/3] flex items-center justify-center">
      {/* spotlight stage */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 45%, rgba(255,255,255,0.14), rgba(0,180,200,0.06) 45%, transparent 72%)',
        }}
      />
      {/* contact shadow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[12%] w-[62%] h-5 rounded-[100%] blur-md"
        style={{ background: 'rgba(0,0,0,0.45)' }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/products/hero-${id}.png`}
        alt={alt}
        onError={() => setOk(false)}
        className="relative max-w-[82%] max-h-[82%] w-auto h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.55)]"
      />
    </div>
  )
}
