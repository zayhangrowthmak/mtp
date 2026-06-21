'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '@/lib/projects'

type Opt = { id: string; label: string }

// All projects stay in the DOM (SEO-safe). Filters by solution (chips) and by
// industry (from the ?industry= query, e.g. linked from an industry page).
export default function ProjectGrid({
  projects,
  solutionFilters,
  industryNames,
}: {
  projects: Project[]
  solutionFilters: Opt[]
  industryNames: Record<string, string>
}) {
  const [solution, setSolution] = useState('all')
  const [industry, setIndustry] = useState<string | null>(null)

  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const ind = q.get('industry')
    const sol = q.get('solution')
    if (ind && industryNames[ind]) setIndustry(ind)
    if (sol && solutionFilters.some((f) => f.id === sol)) setSolution(sol)
  }, [industryNames, solutionFilters])

  function chooseSolution(id: string) {
    setSolution(id)
    const url = new URL(window.location.href)
    if (id === 'all') url.searchParams.delete('solution')
    else url.searchParams.set('solution', id)
    window.history.replaceState(null, '', url)
  }

  function clearIndustry() {
    setIndustry(null)
    const url = new URL(window.location.href)
    url.searchParams.delete('industry')
    window.history.replaceState(null, '', url)
  }

  const matches = (p: Project) =>
    (solution === 'all' || p.solutions.includes(solution)) && (!industry || p.industry === industry)
  const count = projects.filter(matches).length

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {solutionFilters.map((f) => (
          <button
            key={f.id}
            onClick={() => chooseSolution(f.id)}
            className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
              solution === f.id
                ? 'bg-[#0D1B3E] border-[#0D1B3E] text-white'
                : 'bg-white border-[#E2ECF8] text-[#4A5568] hover:border-[#00B4C8]/50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 mb-8">
        <p className="text-[#94A3B8] text-sm">
          Showing <span className="text-[#0D1B3E] font-semibold">{count}</span> projects
        </p>
        {industry && (
          <button
            onClick={clearIndustry}
            className="flex items-center gap-1.5 text-xs bg-[#00B4C8]/10 text-[#0D1B3E] border border-[#00B4C8]/30 rounded-full px-3 py-1 font-medium"
          >
            {industryNames[industry]} <X size={12} />
          </button>
        )}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className={`group bg-white border border-[#E2ECF8] rounded-xl overflow-hidden hover:border-[#00B4C8]/50 hover:shadow-[0_14px_40px_-16px_rgba(13,27,62,0.22)] transition-all flex flex-col ${
              matches(p) ? '' : 'hidden'
            }`}
          >
            <div className="h-36 bg-[#0D1B3E] relative flex items-end p-5">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <span className="relative text-[#00B4C8] text-[10px] font-semibold tracking-widest uppercase">
                {industryNames[p.industry]}
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-[#0D1B3E] font-semibold text-base leading-tight mb-2">{p.title}</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed flex-1">{p.summary}</p>
              <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold mt-4 group-hover:gap-2 transition-all">
                Read case study <ArrowUpRight size={13} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
