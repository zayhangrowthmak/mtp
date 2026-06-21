import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { INDUSTRIES } from '@/lib/site'
import { INDUSTRY_ICON } from '@/lib/industryIcons'
import Reveal from '@/components/Reveal'

export default function HomeIndustries() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-px bg-[#00B4C8]" />
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Industries</span>
              </div>
              <h2 className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold tracking-tight">
                Built for the Gulf&apos;s critical sectors
              </h2>
            </div>
            <Link
              href="/industries"
              className="flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
            >
              View all industries <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = INDUSTRY_ICON[ind.slug]
            return (
              <Reveal key={ind.slug} delay={(i % 5) * 0.04}>
                <Link
                  href={`/industries/${ind.slug}`}
                  className="group flex flex-col gap-3 bg-white border border-[#E2ECF8] rounded-xl p-5 h-full hover:border-[#00B4C8]/50 hover:shadow-[0_12px_36px_-16px_rgba(13,27,62,0.18)] transition-all"
                >
                  <span className="w-10 h-10 rounded-lg bg-[#F4F8FF] flex items-center justify-center group-hover:bg-[#00B4C8]/10 transition-colors">
                    {Icon && <Icon size={19} className="text-[#00B4C8]" />}
                  </span>
                  <span className="text-[#0D1B3E] text-sm font-medium leading-tight">{ind.name}</span>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
