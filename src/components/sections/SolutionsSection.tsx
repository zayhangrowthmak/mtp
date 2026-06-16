'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeptagonDiagram from '@/components/HeptagonDiagram'

export default function SolutionsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="solutions" ref={ref} className="py-24 lg:py-32 bg-[#F4F8FF]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — intro */}
          <div className="lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-5"
            >
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">
                End-to-End Solutions
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6"
            >
              Seven Pillars of a
              <br />
              Secure Building
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4A5568] text-base leading-relaxed mb-8"
            >
              From fire detection to video analytics, access control to power backup — MTP
              distributes complete, brand-agnostic security and infrastructure solutions
              to integrators across UAE and Oman.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#4A5568] text-sm leading-relaxed mb-10 border-l-2 border-[#00B4C8] pl-4"
            >
              Hover any segment of the wheel to understand what each category covers —
              and which global brands MTP carries for it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 bg-[#0D1B3E] hover:bg-[#162040] text-white font-semibold text-sm px-6 py-3 rounded-sm transition-colors group"
              >
                View All Solutions
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Right — heptagon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <HeptagonDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
