'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { NEWS } from '@/lib/data'
import { ArrowUpRight } from 'lucide-react'

export default function NewsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="news" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-2.5 mb-4"
            >
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">News & Events</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Latest Updates
            </motion.h2>
          </div>
        </div>

        {/* News cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {NEWS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="group border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/40 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Brand tag + date */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-semibold tracking-widest uppercase text-[#00B4C8] bg-[#EFF9FC] border border-[#B0E5EE] px-2.5 py-1 rounded-full">
                  {item.brand}
                </span>
                <span className="text-[#94A3B8] text-xs">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="text-[#0D1B3E] font-semibold text-base leading-snug mb-3 group-hover:text-[#00B4C8] transition-colors">
                {item.title}
              </h3>

              {/* Excerpt */}
              <p className="text-[#4A5568] text-sm leading-relaxed flex-1">{item.excerpt}</p>

              {/* Read more */}
              <div className="flex items-center gap-1.5 mt-5 text-[#00B4C8] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Read more
                <ArrowUpRight size={12} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
