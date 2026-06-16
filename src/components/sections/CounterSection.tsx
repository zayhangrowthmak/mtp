'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import { COMPANY } from '@/lib/data'

function useCount(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.floor(eased * target))
      if (p < 1) requestAnimationFrame(tick)
      else setCount(target)
    }
    requestAnimationFrame(tick)
  }, [active, target, duration])
  return count
}

function Counter({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useCount(value, inView, 1600 + delay)

  return (
    <div ref={ref} className="text-center px-6">
      <div className="text-white text-5xl lg:text-6xl font-semibold tracking-tight mb-2 tabular-nums">
        {count}
        <span className="text-[#00B4C8]">{suffix}</span>
      </div>
      <div className="text-white/50 text-sm font-medium tracking-wide">{label}</div>
    </div>
  )
}

export default function CounterSection() {
  return (
    <section id="stats" className="py-24 bg-[#0D1B3E] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #00B4C8 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-[#00B4C8]/60 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 divide-x divide-white/10">
          {COMPANY.stats.map((stat, i) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
