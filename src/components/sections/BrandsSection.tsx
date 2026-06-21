'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { BRANDS_24, type Brand } from '@/lib/brands'

function BrandCard({ brand, inView, index }: { brand: Brand; inView: boolean; index: number }) {
  // Only swap to a logo that actually loads, so a missing file never shows a
  // broken-image icon. Every card links to the brand's dedicated page.
  const [logoOk, setLogoOk] = useState(false)
  const src = brand.logo

  useEffect(() => {
    if (!src) return
    let active = true
    const probe = new window.Image()
    probe.onload = () => active && setLogoOk(true)
    probe.onerror = () => active && setLogoOk(false)
    probe.src = src
    return () => {
      active = false
    }
  }, [src])

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.04 * index }}
    >
      <Link
        href={`/brands/${brand.slug}`}
        title={brand.name}
        className="group flex items-center justify-center bg-white border border-[#E2ECF8] rounded-lg p-5 h-24 hover:border-[#00B4C8]/50 hover:shadow-[0_4px_20px_-6px_rgba(13,27,62,0.12)] transition-all duration-200"
      >
        {logoOk && src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={src}
            alt={`${brand.name} logo`}
            loading="lazy"
            className="max-h-12 max-w-[82%] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-[#0D1B3E] font-semibold text-sm text-center group-hover:text-[#00B4C8] transition-colors">
            {brand.name}
          </span>
        )}
      </Link>
    </motion.div>
  )
}

export default function BrandsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="brands" ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2.5 mb-4"
          >
            <span className="w-6 h-px bg-[#00B4C8]" />
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Our Brands</span>
            <span className="w-6 h-px bg-[#00B4C8]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            30+ Global Brands,
            <br />
            <span className="text-[#00B4C8]">Stocked in the Gulf</span>
          </motion.h2>
        </div>

        {/* Brand grid — links to dedicated brand pages */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {BRANDS_24.map((brand, i) => (
            <BrandCard key={brand.slug} brand={brand} inView={inView} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
          >
            Explore all brands →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
