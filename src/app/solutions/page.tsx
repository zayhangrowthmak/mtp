import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Layers } from 'lucide-react'
import { SOLUTION_NAV, INDUSTRIES } from '@/lib/site'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import { BRANDS_24 } from '@/lib/brands'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Solutions — Seven End-to-End Security & Infrastructure Lines',
  description:
    'Explore MTP’s seven end-to-end solution lines: CCTV & video, access control, fire & life safety, public address, networking & storage, IBMS/PSIM and power — engineered to work as one.',
  alternates: { canonical: '/solutions' },
}

const CARD_TEXT: Record<string, string> = {
  cctv: 'IP cameras, VMS, ANPR, analytics and surveillance-grade storage.',
  access: 'Smart, biometric and AI face-recognition access with intrusion.',
  fire: 'Addressable fire detection, FACP and life-safety devices.',
  pa: 'IP public address, voice evacuation and conferencing.',
  networking: 'Surveillance storage, switching, fibre and structured cabling.',
  ibms: 'Unified command & control, PSIM, video walls and consoles.',
  ups: 'UPS, batteries, solar and critical data-centre power.',
}

const logoBrands = BRANDS_24.filter((b) => b.logo).slice(0, 14)

// Four real product shots that signal the breadth of the seven lines.
const HERO_MONTAGE = [
  { id: 'cctv', alt: 'IP surveillance camera' },
  { id: 'access', alt: 'Access control reader' },
  { id: 'ups', alt: 'UPS power system' },
  { id: 'ibms', alt: 'Control-room video wall' },
]

export default function SolutionsHubPage() {
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
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Solutions</span>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
              Seven end-to-end lines, engineered to work as one
            </h1>
            <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
              From a single camera to a unified control room, MTP distributes complete, brand-agnostic
              security and infrastructure solutions — designed, sized and supported across the UAE and Oman.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
              >
                Contact Us <ArrowRight size={16} />
              </Link>
              <Link
                href="/brands"
                className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/85 hover:text-white font-medium px-7 py-3.5 rounded-sm transition-colors"
              >
                View Brands
              </Link>
            </div>
          </div>

          {/* Product montage — real manufacturer shots (background removed) */}
          <div className="relative hidden lg:grid grid-cols-2 gap-4 max-w-md ml-auto">
            {HERO_MONTAGE.map((m) => (
              <div
                key={m.id}
                className="rounded-xl overflow-hidden border border-white/10 aspect-square flex items-center justify-center p-5"
                style={{
                  background:
                    'radial-gradient(60% 55% at 50% 45%, rgba(255,255,255,0.12), rgba(0,180,200,0.05) 45%, rgba(13,27,62,0) 72%)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/products/hero-${m.id}.png`}
                  alt={m.alt}
                  className="max-w-[88%] max-h-[88%] w-auto h-auto object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.5)]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution lines grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-3">
              Seven solution lines
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-12">
              Self-route to the line you need to spec. Each combines categories with featured products
              and the brands behind them.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOLUTION_NAV.map((s, i) => {
              const Icon = SOLUTION_ICON[s.id]
              return (
                <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/solutions/${s.slug}`}
                    className="group block h-full bg-white border border-[#E2ECF8] rounded-xl p-7 hover:border-[#00B4C8]/50 hover:shadow-[0_14px_40px_-16px_rgba(13,27,62,0.22)] transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-12 h-12 rounded-xl bg-[#F4F8FF] flex items-center justify-center group-hover:bg-[#00B4C8]/10 transition-colors">
                        {Icon && <Icon size={22} className="text-[#00B4C8]" />}
                      </span>
                      <ArrowUpRight size={20} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors" />
                    </div>
                    <h3 className="text-[#0D1B3E] text-lg font-semibold mb-2">{s.name}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed">{CARD_TEXT[s.id]}</p>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Integrated approach */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">The MTP edge</span>
            </div>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
              Separate lines, one managed system
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-4">
              MTP&apos;s difference is integration. Video talks to access control; access releases on a fire
              event; PA carries the evacuation message; storage and power keep it all running; and a PSIM
              control room sees everything at once.
            </p>
            <p className="text-[#4A5568] text-base leading-relaxed">
              We design and size that integration end-to-end — so your systems don&apos;t just coexist, they
              cooperate.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white border border-[#E2ECF8] rounded-2xl p-8 flex items-center justify-center">
              <div className="flex flex-wrap items-center justify-center gap-3 max-w-md">
                {SOLUTION_NAV.map((s) => {
                  const Icon = SOLUTION_ICON[s.id]
                  return (
                    <span
                      key={s.id}
                      className="flex items-center gap-2 bg-[#F4F8FF] border border-[#E2ECF8] rounded-full px-4 py-2 text-sm text-[#0D1B3E]"
                    >
                      {Icon && <Icon size={15} className="text-[#00B4C8]" />}
                      {s.short}
                    </span>
                  )
                })}
                <span className="flex items-center gap-2 bg-[#0D1B3E] text-white rounded-full px-4 py-2 text-sm font-medium">
                  <Layers size={15} className="text-[#00B4C8]" /> Unified
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brands behind the solutions */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-2">
                  The brands behind the solutions
                </h2>
                <p className="text-[#4A5568] text-base max-w-xl">
                  30+ global vendors power these lines — each with a dedicated page.
                </p>
              </div>
              <Link
                href="/brands"
                className="flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
              >
                View all brands <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {logoBrands.map((b) => (
              <Link
                key={b.slug}
                href={`/brands/${b.slug}`}
                title={b.name}
                className="flex items-center justify-center h-20 bg-white border border-[#E2ECF8] rounded-lg px-4 hover:border-[#00B4C8]/50 transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.logo} alt={`${b.name} logo`} className="max-h-9 max-w-[80%] w-auto object-contain mix-blend-multiply" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry applications */}
      <section className="bg-[#0D1B3E] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Where they deploy</span>
                <h2 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight mt-3">
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
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group bg-white/5 border border-white/10 rounded-lg px-4 py-4 text-white/75 hover:text-white hover:border-[#00B4C8]/40 hover:bg-white/[0.07] transition-colors text-sm"
              >
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which line you need?"
        text="Tell us the project. MTP pre-sales will map the right solutions, brands and products — and quote it."
        primaryLabel="Request a Quote"
        secondaryLabel="Download Brochure"
      />
    </main>
  )
}
