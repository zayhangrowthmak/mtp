'use client'

import { motion } from 'framer-motion'
import { Cctv, ExternalLink } from 'lucide-react'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import ProductImage from '@/components/ProductImage'
import { productUrl } from '@/lib/productLinks'
import type { CatalogMeta } from '@/lib/data'

// Featured-products catalog with headline spec tables, grouped by family/brand.
export default function SolutionCatalog({ meta, categoryId }: { meta: CatalogMeta; categoryId: string }) {
  const Icon = SOLUTION_ICON[categoryId] ?? Cctv
  const groups = Array.from(new Set(meta.items.map((it) => it.group)))

  return (
    <div>
      {groups.map((group) => {
        const items = meta.items.filter((it) => it.group === group)
        return (
          <div key={group} className="mb-12 last:mb-0">
            <div className="flex items-center gap-4 mb-5">
              <h3 className="text-[#0D1B3E] font-semibold text-lg tracking-tight">{group}</h3>
              <span className="h-px flex-1 bg-[#E2ECF8]" />
              <span className="text-[#94A3B8] text-xs font-medium">
                {items.length} {items.length === 1 ? 'product' : 'products'}
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {items.map((item, i) => {
                const href = productUrl(item.name)
                const Card = href ? motion.a : motion.div
                return (
                <Card
                  key={item.name}
                  {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                  className="relative block bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 hover:shadow-[0_8px_28px_-10px_rgba(13,27,62,0.18)] transition-all duration-200"
                >
                  {href && (
                    <span className="absolute top-3 right-3 z-10 text-[#94A3B8] group-hover:text-[#00B4C8]" title="View on manufacturer site">
                      <ExternalLink size={13} />
                    </span>
                  )}
                  {/* Real product photo when /public/products/<slug>.jpg exists */}
                  <ProductImage
                    name={item.name}
                    categoryId={categoryId}
                    hideIfMissing
                    className="w-full h-32 mb-4 rounded-lg border border-[#F0F5FB] p-2"
                  />
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h4 className="text-[#0D1B3E] font-semibold text-sm leading-tight">{item.name}</h4>
                      <p className="text-[#94A3B8] text-[11px] mt-0.5">{item.form}</p>
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-[#0D1B3E]" />
                    </span>
                  </div>
                  <table className="w-full">
                    <tbody>
                      {item.specs.map((s) => (
                        <tr key={s.label} className="border-t border-[#F0F5FB]">
                          <td className="py-1.5 pr-3 text-[#94A3B8] text-[11px] whitespace-nowrap align-top">
                            {s.label}
                          </td>
                          <td className="py-1.5 text-[#0D1B3E] text-[11px] font-medium text-right">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Card>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
