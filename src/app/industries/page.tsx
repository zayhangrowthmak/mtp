import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { INDUSTRIES } from '@/lib/site'
import { getIndustry } from '@/lib/industries'
import { INDUSTRY_ICON } from '@/lib/industryIcons'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Security and infrastructure solutions tailored to ten Gulf verticals — energy, government, law enforcement, healthcare, hospitality, retail, transport, banking, data centres and education.',
  alternates: { canonical: '/industries' },
}

export default function IndustriesHubPage() {
  const items = INDUSTRIES.map((i) => getIndustry(i.slug)!).filter(Boolean)

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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Industries</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            Built for the Gulf&apos;s most demanding sectors
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
            Every vertical has its own security and safety challenge. MTP maps the right solutions and
            brands to each — from oil &amp; gas to data centres — and proves it with reference deployments.
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

      {/* Industry grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-12">
              Ten verticals, mapped to the right systems
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((ind, i) => {
              const Icon = INDUSTRY_ICON[ind.slug]
              return (
                <Reveal key={ind.slug} delay={(i % 3) * 0.05}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group block h-full bg-white border border-[#E2ECF8] rounded-xl p-7 hover:border-[#00B4C8]/50 hover:shadow-[0_14px_40px_-16px_rgba(13,27,62,0.22)] transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-12 h-12 rounded-xl bg-[#F4F8FF] flex items-center justify-center group-hover:bg-[#00B4C8]/10 transition-colors">
                        {Icon && <Icon size={22} className="text-[#00B4C8]" />}
                      </span>
                      <ArrowUpRight size={20} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors" />
                    </div>
                    <h3 className="text-[#0D1B3E] text-lg font-semibold mb-2">{ind.name}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{ind.tagline}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Proof by industry */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Proof by industry</span>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mt-3 mb-5">
              Track record where it matters
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-8">
              MTP-distributed systems run in some of the region&apos;s most demanding environments — across
              government, energy and critical infrastructure. Each industry page links to its reference
              deployments.
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#0D1B3E] hover:bg-[#162040] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
            >
              View Projects <ArrowRight size={16} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3">
              {items.slice(0, 6).map((ind) => {
                const Icon = INDUSTRY_ICON[ind.slug]
                return (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="flex items-center gap-3 bg-white border border-[#E2ECF8] rounded-lg px-4 py-3.5 hover:border-[#00B4C8]/50 transition-colors"
                  >
                    {Icon && <Icon size={18} className="text-[#00B4C8] flex-shrink-0" />}
                    <span className="text-[#0D1B3E] text-sm font-medium leading-tight">{ind.name}</span>
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Which sector are you securing?"
        text="Tell us the environment and compliance needs. MTP will recommend the right solution mix and prove it with references."
        primaryLabel="Request a Quote"
        secondaryLabel="View Solutions"
        secondaryHref="/solutions"
      />
    </main>
  )
}
