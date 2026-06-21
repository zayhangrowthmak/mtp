'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import ProductImage from '@/components/ProductImage'
import { productUrl } from '@/lib/productLinks'

// Flagship products across brands. Names match the solution catalogs, so a
// single image at /public/products/<slug>.jpg serves both the homepage and the
// solution pages. Until a photo is dropped in, a clean category icon shows.
const FEATURED = [
  { name: 'FLEXIDOME IP 5100i IR', brand: 'Bosch', brandSlug: 'bosch', category: 'cctv', spec: 'Fixed dome · up to 5 MP · starlight' },
  { name: 'AUTODOME IP starlight 7000i', brand: 'Bosch', brandSlug: 'bosch', category: 'cctv', spec: 'PTZ · 30× optical zoom' },
  { name: 'AI Pro Bullet Camera', brand: 'Milesight', brandSlug: 'milesight', category: 'cctv', spec: '4K AI motorized bullet' },
  { name: 'Ethos Reader', brand: 'Wavelynx', brandSlug: 'wavelynx', category: 'access', spec: 'Multi-tech mobile reader' },
  { name: 'PRAESENSA System Controller', brand: 'Bosch', brandSlug: 'bosch', category: 'pa', spec: 'IP voice-alarm · EN 54-16' },
  { name: 'EonStor GS', brand: 'Infortrend', brandSlug: 'infortrend', category: 'networking', spec: 'Unified SAN + NAS' },
  { name: 'Atenco Rack / Tower UPS', brand: 'Atenco', brandSlug: 'atenco', category: 'ups', spec: 'Online · 1–10 kVA' },
  { name: 'Effekta MH Series', brand: 'Effekta', brandSlug: 'effekta', category: 'ups', spec: 'Online UPS · 1–3 kVA' },
]

export default function FeaturedProductsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Featured Products</span>
            </div>
            <h2 className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold tracking-tight">
              Real products, in stock
            </h2>
          </div>
          <Link
            href="/solutions"
            className="flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
          >
            Browse all solutions <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * (i % 4) }}
            >
              {(() => {
                const ext = productUrl(p.name)
                const cls =
                  'group block h-full bg-white border border-[#E2ECF8] rounded-xl overflow-hidden hover:border-[#00B4C8]/50 hover:shadow-[0_14px_40px_-16px_rgba(13,27,62,0.2)] transition-all'
                const inner = (
                  <>
                    <ProductImage name={p.name} categoryId={p.category} className="w-full h-40 p-4" />
                    <div className="p-5 border-t border-[#F0F5FB]">
                      <p className="text-[#00B4C8] text-[10px] font-semibold tracking-widest uppercase mb-1.5">{p.brand}</p>
                      <h3 className="text-[#0D1B3E] font-semibold text-sm leading-tight mb-1">{p.name}</h3>
                      <p className="text-[#94A3B8] text-xs">{p.spec}</p>
                      <span className="flex items-center gap-1 text-[#0D1B3E] text-xs font-semibold mt-3 group-hover:text-[#00B4C8] transition-colors">
                        {ext ? (
                          <>
                            View on {p.brand} <ExternalLink size={12} />
                          </>
                        ) : (
                          <>
                            View brand <ArrowUpRight size={13} />
                          </>
                        )}
                      </span>
                    </div>
                  </>
                )
                return ext ? (
                  <a href={ext} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link href={`/brands/${p.brandSlug}`} className={cls}>
                    {inner}
                  </Link>
                )
              })()}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#94A3B8] text-sm mt-10"
        >
          A selection of the 30+ brands and hundreds of products MTP distributes across the UAE &amp; Oman.
        </motion.p>
      </div>
    </section>
  )
}
