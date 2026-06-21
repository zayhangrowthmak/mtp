'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FileText, Download, ArrowRight } from 'lucide-react'
import type { Resource, ResourceType } from '@/lib/resources'

type Filter = { id: ResourceType | 'all'; label: string }

export default function ResourceLibrary({
  resources,
  filters,
}: {
  resources: Resource[]
  filters: Filter[]
}) {
  const [active, setActive] = useState<string>('all')

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('type')
    if (t && filters.some((f) => f.id === t)) setActive(t)
  }, [filters])

  function choose(id: string) {
    setActive(id)
    const url = new URL(window.location.href)
    if (id === 'all') url.searchParams.delete('type')
    else url.searchParams.set('type', id)
    window.history.replaceState(null, '', url)
  }

  const count = active === 'all' ? resources.length : resources.filter((r) => r.type === active).length

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
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
        Showing <span className="text-[#0D1B3E] font-semibold">{count}</span> resources
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((r) => {
          const match = active === 'all' || r.type === active
          const external = r.href && r.href.startsWith('http')
          return (
            <div
              key={r.title}
              className={`group bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 hover:shadow-[0_10px_30px_-14px_rgba(13,27,62,0.18)] transition-all flex flex-col ${
                match ? '' : 'hidden'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="w-10 h-10 rounded-lg bg-[#F4F8FF] flex items-center justify-center">
                  <FileText size={18} className="text-[#00B4C8]" />
                </span>
                <span className="text-[#94A3B8] text-[10px] font-semibold tracking-widest uppercase">{r.type}</span>
              </div>
              <h3 className="text-[#0D1B3E] font-semibold text-sm leading-tight flex-1 mb-4">{r.title}</h3>

              {r.href && !r.onRequest ? (
                <a
                  href={r.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center gap-1.5 text-[#00B4C8] text-xs font-semibold group-hover:gap-2.5 transition-all"
                >
                  <Download size={14} /> Download
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 text-[#4A5568] text-xs font-semibold hover:text-[#00B4C8] transition-colors"
                >
                  Request <ArrowRight size={13} />
                </Link>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
