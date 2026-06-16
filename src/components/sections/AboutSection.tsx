'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  Cctv,
  Flame,
  Wifi,
  Zap,
  Lock,
  ShieldCheck,
  Server,
  Volume2,
  Building2,
  Network,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { COMPANY } from '@/lib/data'

// Decorative icons that float slowly in the section margins (infographic feel).
type Floater = {
  Icon: LucideIcon
  pos: string
  size: number
  dur: number
  delay: number
  color: string
}

const FLOATERS: Floater[] = [
  { Icon: Cctv, pos: 'left-[6%] top-[14%]', size: 34, dur: 7.5, delay: 0, color: '#00B4C8' },
  { Icon: Flame, pos: 'left-[10%] top-[33%]', size: 26, dur: 8.5, delay: 1.2, color: '#0D1B3E' },
  { Icon: Wifi, pos: 'left-[4%] top-[52%]', size: 30, dur: 6.8, delay: 0.6, color: '#00B4C8' },
  { Icon: Zap, pos: 'left-[9%] top-[71%]', size: 26, dur: 7.8, delay: 1.9, color: '#0D1B3E' },
  { Icon: Lock, pos: 'left-[6%] top-[88%]', size: 24, dur: 9.2, delay: 0.3, color: '#00B4C8' },
  { Icon: ShieldCheck, pos: 'right-[6%] top-[12%]', size: 30, dur: 8, delay: 0.9, color: '#0D1B3E' },
  { Icon: Server, pos: 'right-[4%] top-[31%]', size: 28, dur: 6.6, delay: 1.5, color: '#00B4C8' },
  { Icon: Volume2, pos: 'right-[9%] top-[50%]', size: 26, dur: 8.8, delay: 0.4, color: '#0D1B3E' },
  { Icon: Building2, pos: 'right-[5%] top-[70%]', size: 32, dur: 7.2, delay: 1.1, color: '#00B4C8' },
  { Icon: Network, pos: 'right-[9%] top-[88%]', size: 26, dur: 9.6, delay: 2, color: '#0D1B3E' },
]

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduce = useReducedMotion()

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-32 bg-white"
    >
      {/* Floating infographic icons (decorative) */}
      {FLOATERS.map((f, i) => (
        <motion.div
          key={i}
          aria-hidden
          className={`pointer-events-none absolute ${f.pos} hidden lg:block`}
          style={{ color: f.color }}
          initial={{ opacity: 0, y: 0 }}
          animate={
            reduce
              ? { opacity: 0.3 }
              : { opacity: [0.22, 0.42, 0.22], y: [0, -18, 0], rotate: [0, 5, 0] }
          }
          transition={{
            duration: f.dur,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: f.delay,
          }}
        >
          <f.Icon size={f.size} strokeWidth={1.4} />
        </motion.div>
      ))}

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2.5 mb-5"
        >
          <span className="w-6 h-px bg-[#00B4C8]" />
          <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">About MTP</span>
          <span className="w-6 h-px bg-[#00B4C8]" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6"
        >
          The Middle East&apos;s
          <br />
          Security &amp; IT{' '}
          <span className="relative inline-block">
            Distributor
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00B4C8]" />
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#4A5568] text-base leading-relaxed mb-5"
        >
          {COMPANY.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-[#4A5568] text-base leading-relaxed"
        >
          Lead by market veterans and a team of field engineers, we support system integrators
          and resellers with pre-sales design, technical advice, and post-sale assistance —
          across Enterprise and SME segments in the Gulf.
        </motion.p>
      </div>

      {/* Mission & Vision */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative max-w-3xl mx-auto px-6 mt-12"
      >
        <div className="grid sm:grid-cols-2 gap-8 text-left">
          <div className="sm:pr-8 sm:border-r sm:border-[#E2ECF8]">
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase block mb-2">
              Mission
            </span>
            <p className="text-[#0D1B3E] text-sm leading-relaxed">{COMPANY.mission}</p>
          </div>
          <div className="sm:pl-8">
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase block mb-2">
              Vision
            </span>
            <p className="text-[#0D1B3E] text-sm leading-relaxed">{COMPANY.vision}</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
