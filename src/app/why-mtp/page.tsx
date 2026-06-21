import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  DraftingCompass,
  ListChecks,
  Gauge,
  FileSignature,
  Network,
  GraduationCap,
  Truck,
  LifeBuoy,
} from 'lucide-react'
import { SOLUTION_NAV } from '@/lib/site'
import { SOLUTION_ICON } from '@/lib/solutionIcons'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'Why MTP — Value-Added Services',
  description:
    'Engineering-led distribution: pre-sales & design, bill of materials, storage and power sizing, spec/bid support, integration, training & certification, logistics and after-sales — the MTP difference.',
  alternates: { canonical: '/why-mtp' },
}

const SERVICES = [
  { icon: DraftingCompass, title: 'Pre-Sales & Design', text: 'System design and architecture support from concept to specification.' },
  { icon: ListChecks, title: 'Bill of Materials', text: 'Accurate, project-ready BoMs across every brand we carry.' },
  { icon: Gauge, title: 'Storage & Power Sizing', text: 'Right-sized surveillance storage and UPS for the load.' },
  { icon: FileSignature, title: 'Spec & Bid Support', text: 'Tender-ready specifications and competitive bid assistance.' },
  { icon: Network, title: 'Integration', text: 'Cross-system integration across CCTV, access, fire, PA, IBMS and PSIM.' },
  { icon: GraduationCap, title: 'Training & Certification', text: 'Partner enablement that lifts tender-eligibility.' },
  { icon: Truck, title: 'Logistics', text: 'In-stock availability and reliable delivery across the UAE and Oman.' },
  { icon: LifeBuoy, title: 'After-Sales & RMA', text: 'Responsive support and streamlined returns.' },
]

export default function WhyMtpPage() {
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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Why MTP — Value-Added Services</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            Engineering-led, not box-moving
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
            Anyone can ship a product. MTP adds the engineering — design, sizing, integration, training and
            support — that turns a parts list into a system that works, and an integrator into a winner.
          </p>
          <Link
            href="/partners"
            className="inline-flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            Become a Partner <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-12">
              The value we add at every step
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05}>
                <div className="bg-white border border-[#E2ECF8] rounded-xl p-6 h-full hover:border-[#00B4C8]/50 hover:shadow-[0_12px_36px_-16px_rgba(13,27,62,0.18)] transition-all">
                  <span className="w-11 h-11 rounded-lg bg-[#F4F8FF] flex items-center justify-center mb-4">
                    <s.icon size={20} className="text-[#00B4C8]" />
                  </span>
                  <h3 className="text-[#0D1B3E] font-semibold text-sm mb-1.5">{s.title}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Integration capability */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Integration capability</span>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mt-3 mb-5">
              We make the systems talk to each other
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-4">
              The hard part isn&apos;t any single product — it&apos;s making CCTV, access control, fire, public
              address, networking and PSIM cooperate as one. That cross-system integration is MTP&apos;s core
              competence.
            </p>
            <Link href="/solutions" className="inline-flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all">
              Explore the solution lines <ArrowRight size={15} />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white border border-[#E2ECF8] rounded-2xl p-8 grid grid-cols-2 gap-3">
              {SOLUTION_NAV.map((s) => {
                const Icon = SOLUTION_ICON[s.id]
                return (
                  <Link
                    key={s.id}
                    href={`/solutions/${s.slug}`}
                    className="flex items-center gap-2.5 bg-[#F4F8FF] border border-[#E2ECF8] rounded-lg px-3.5 py-3 hover:border-[#00B4C8]/50 transition-colors"
                  >
                    {Icon && <Icon size={16} className="text-[#00B4C8] flex-shrink-0" />}
                    <span className="text-[#0D1B3E] text-xs font-medium leading-tight">{s.short}</span>
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Proof */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="bg-[#0D1B3E] rounded-2xl px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Proof</span>
                <h2 className="text-white text-2xl font-semibold tracking-tight mt-2">
                  Backed by real deployments
                </h2>
                <p className="text-white/55 text-sm mt-2 max-w-xl">
                  Our value-added approach is proven across government, energy and critical infrastructure
                  projects in the region.
                </p>
              </div>
              <Link
                href="/projects"
                className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-6 py-3 rounded-sm transition-colors flex-shrink-0"
              >
                View Projects <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Ready to tender with confidence?"
        text="Bring us the project. MTP pre-sales will design it, size it and quote it — so you bid to win."
        primaryLabel="Become a Partner"
        primaryHref="/partners"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  )
}
