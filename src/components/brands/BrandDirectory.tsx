'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Brand } from '@/lib/brands'

type Filter = { id: string; label: string }

// All brands stay in the DOM (SEO-safe); filtering toggles visibility and
// reflects the active solution in the URL query string.
export default function BrandDirectory({ brands, filters }: { brands: Brand[]; filters: Filter[] }) {
  const [active, setActive] = useState<string>('all')

  // Read initial filter from the query string (client-only — keeps page static).
  useEffect(() => {
    const sol = new URLSearchParams(window.location.search).get('solution')
    if (sol && filters.some((f) => f.id === sol)) setActive(sol)
  }, [filters])

  function choose(id: string) {
    setActive(id)
    const url = new URL(window.location.href)
    if (id === 'all') url.searchParams.delete('solution')
    else url.searchParams.set('solution', id)
    window.history.replaceState(null, '', url)
  }

  const sorted = [...brands].sort((a, b) => a.name.localeCompare(b.name))
  const visibleCount = active === 'all' ? brands.length : brands.filter((b) => b.solutions.includes(active)).length

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => choose(f.id)}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
              active === f.id
                ? 'bg-[#0D1B3E] border-[#0D1B3E] text-white'
                : 'bg-white border-[#E2ECF8] text-[#4A5568] hover:border-[#00B4C8]/50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-[#94A3B8] text-sm mb-6">
        Showing <span className="text-[#0D1B3E] font-semibold">{visibleCount}</span> brands
      </p>

      {/* Grid — all brands rendered; non-matching hidden */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {sorted.map((b) => {
          const match = active === 'all' || b.solutions.includes(active)
          return (
            <Link
              key={b.slug}
              href={`/brands/${b.slug}`}
              data-solutions={b.solutions.join(' ')}
              className={`group bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 hover:shadow-[0_10px_30px_-14px_rgba(13,27,62,0.2)] transition-all flex flex-col ${
                match ? '' : 'hidden'
              }`}
            >
              <div className="h-11 flex items-center mb-3">
                {b.logo ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={b.logo} alt={`${b.name} logo`} className="max-h-9 max-w-[72%] w-auto object-contain mix-blend-multiply" />
                ) : (
                  <span className="text-[#0D1B3E] font-semibold text-lg">{b.name}</span>
                )}
              </div>
              <p className="text-[#4A5568] text-xs leading-relaxed flex-1">{b.blurb}</p>
              <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                View brand <ArrowUpRight size={13} />
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
