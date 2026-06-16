'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { BRANDS } from '@/lib/data'

type Brand = (typeof BRANDS)[number]

function BrandCard({ brand, inView, index }: { brand: Brand; inView: boolean; index: number }) {
  // Default to the name fallback; only swap to a logo that actually loads, so a
  // missing /public/brands file never shows a broken-image icon.
  const [logoOk, setLogoOk] = useState(false)
  const src = brand.logo

  useEffect(() => {
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
      transition={{ duration: 0.4, delay: 0.05 * index }}
      title={`${brand.name} — ${brand.category}`}
      className="group flex items-center justify-center bg-white border border-[#E2ECF8] rounded-lg p-5 h-24 hover:border-[#00B4C8]/50 hover:shadow-[0_4px_20px_-6px_rgba(13,27,62,0.12)] transition-all duration-200 cursor-default"
    >
      {logoOk ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={`${brand.name} logo`}
          loading="lazy"
          className="max-h-12 max-w-[82%] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="text-center">
          <p className="text-[#0D1B3E] font-semibold text-sm leading-tight">{brand.name}</p>
          <p className="text-[#94A3B8] text-xs leading-snug mt-0.5">{brand.category}</p>
        </div>
      )}
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

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {BRANDS.map((brand, i) => (
            <BrandCard key={brand.name} brand={brand} inView={inView} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-[#94A3B8] text-sm mt-8"
        >
          Authorised distribution across UAE &amp; Oman · Pre-sales support included
        </motion.p>
      </div>
    </section>
  )
}
