import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star } from 'lucide-react'
import { SOLUTION_NAV } from '@/lib/site'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import { BRANDS_24, brandsForSolution, brandBySlug } from '@/lib/brands'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import BrandDirectory from '@/components/brands/BrandDirectory'

export const metadata: Metadata = {
  title: 'Brands — 30+ Global Security, AI & Power Vendors',
  description:
    'Browse the 24+ vendors MTP distributes across the UAE and Oman — Bosch and the surrounding ecosystem of CCTV, access, fire, PA, networking, PSIM and power brands. A dedicated page per brand.',
  alternates: { canonical: '/brands' },
}

const filters = [
  { id: 'all', label: 'All brands' },
  ...SOLUTION_NAV.map((s) => ({ id: s.id, label: s.short })),
]

const emergingSlugs = ['safr', 'oosto', 'ooda-world', 'planar', 'weytec']

export default function BrandsHubPage() {
  const bosch = brandBySlug('bosch')!
  const emerging = emergingSlugs.map(brandBySlug).filter(Boolean) as NonNullable<ReturnType<typeof brandBySlug>>[]

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-44 pb-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-px bg-[#00B4C8]" />
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Brands</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            30+ global brands, one trusted partner
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
            Our multi-vendor portfolio is MTP&apos;s competitive moat — Bosch plus the surrounding ecosystem of
            video, access, AI, control-room, storage and power. Every vendor gets a dedicated page.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/85 hover:text-white font-medium px-7 py-3.5 rounded-sm transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-2">Brand directory</h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-10">
              Filter by solution category or browse A–Z. Click any brand for its dedicated page.
            </p>
          </Reveal>
          <BrandDirectory brands={BRANDS_24} filters={filters} />
        </div>
      </section>

      {/* Brands by solution */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-10">
              Brands by solution line
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {SOLUTION_NAV.map((s) => {
              const Icon = SOLUTION_ICON[s.id]
              const list = brandsForSolution(s.id)
              return (
                <div key={s.id} className="border-b border-[#E2ECF8] pb-6">
                  <Link href={`/solutions/${s.slug}`} className="flex items-center gap-2.5 mb-4 group">
                    {Icon && <Icon size={18} className="text-[#00B4C8]" />}
                    <span className="text-[#0D1B3E] font-semibold group-hover:text-[#00B4C8] transition-colors">
                      {s.name}
                    </span>
                  </Link>
                  <div className="flex flex-wrap gap-2">
                    {list.map((b) => (
                      <Link
                        key={b.slug}
                        href={`/brands/${b.slug}`}
                        className="bg-white border border-[#E2ECF8] rounded-full px-3.5 py-1.5 text-sm text-[#4A5568] hover:text-[#0D1B3E] hover:border-[#00B4C8]/50 transition-colors"
                      >
                        {b.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Anchor + emerging */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="h-full bg-[#0D1B3E] rounded-2xl p-8 lg:p-10 relative overflow-hidden">
              <Star size={18} className="text-[#00B4C8] mb-4" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Anchor brand</span>
              <h3 className="text-white text-2xl font-semibold tracking-tight mt-3 mb-3">Bosch</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-md">{bosch.blurb}</p>
              <Link
                href="/brands/bosch"
                className="inline-flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore Bosch <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full border border-[#E2ECF8] rounded-2xl p-8 lg:p-10">
              <Sparkles size={18} className="text-[#00B4C8] mb-4" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Up the stack</span>
              <h3 className="text-[#0D1B3E] text-2xl font-semibold tracking-tight mt-3 mb-3">Premium & AI lines</h3>
              <p className="text-[#4A5568] text-sm leading-relaxed mb-6">
                Our move into higher-margin AI, PSIM and control-room technologies.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {emerging.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/brands/${b.slug}`}
                    className="bg-[#F4F8FF] border border-[#E2ECF8] rounded-full px-4 py-2 text-sm text-[#0D1B3E] hover:border-[#00B4C8]/50 transition-colors"
                  >
                    {b.name}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Looking for a specific brand?"
        text="Tell us what you need to source. MTP gives you one multi-brand point of contact with project pricing and pre-sales design."
        primaryLabel="Request a Quote"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </main>
  )
}
