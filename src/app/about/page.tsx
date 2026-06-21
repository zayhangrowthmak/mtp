import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Target, Eye, Factory, Truck, Wrench, Building2 } from 'lucide-react'
import { SITE, STATS, CONTACT } from '@/lib/site'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'

export const metadata: Metadata = {
  title: 'About MTP — Dubai-HQ Value-Added Distributor',
  description:
    'MTP Distribution is a Dubai-headquartered Value-Added Distributor of 30+ security, safety, IT, AI and power brands, serving system integrators across the UAE and Oman.',
  alternates: { canonical: '/about' },
}

const CHAIN = [
  { icon: Factory, label: 'Manufacturer (OEM)', text: 'Global brands we represent' },
  { icon: Building2, label: 'MTP (VAD)', text: 'Design, sizing, integration, support' },
  { icon: Wrench, label: 'System Integrator', text: 'Our channel partners' },
  { icon: Truck, label: 'End-User', text: 'Government & enterprise' },
]

export default function AboutPage() {
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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">About MTP</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            The Middle East&apos;s security &amp; IT distributor
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            {SITE.legalName} is a Dubai-headquartered Value-Added Distributor, connecting global security and
            infrastructure manufacturers to system integrators across the UAE and Oman.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <p className="text-[#4A5568] text-lg leading-relaxed mb-6">
              MTP is a well-established Value-Added Distribution company in the Middle East, headquartered in
              Dubai with regional operations in both the UAE and Oman. Our portfolio spans physical security,
              data networking and storage, safety systems, AI-based recognition and power.
            </p>
            <p className="text-[#4A5568] text-lg leading-relaxed">
              We&apos;re a young, dynamic company led by market veterans and supported by a team of engineers
              at the edge of today&apos;s technology — focused on supporting our system integrator and reseller
              customers with superior service across the Enterprise and SME segments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white border border-[#E2ECF8] rounded-2xl p-8 h-full">
              <span className="w-12 h-12 rounded-xl bg-[#00B4C8]/12 flex items-center justify-center mb-5">
                <Target size={22} className="text-[#00B4C8]" />
              </span>
              <h2 className="text-[#0D1B3E] text-xl font-semibold mb-3">Mission</h2>
              <p className="text-[#4A5568] leading-relaxed">
                Contribution to partners through the introduction of innovative products and provide quality
                services.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-white border border-[#E2ECF8] rounded-2xl p-8 h-full">
              <span className="w-12 h-12 rounded-xl bg-[#00B4C8]/12 flex items-center justify-center mb-5">
                <Eye size={22} className="text-[#00B4C8]" />
              </span>
              <h2 className="text-[#0D1B3E] text-xl font-semibold mb-3">Vision</h2>
              <p className="text-[#4A5568] leading-relaxed">
                To be one of the renowned Value-Added distribution houses in the global market.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Business model — VAD two-tier */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Our model</span>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mt-3 mb-3">
              The value-added distribution chain
            </h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-12">
              MTP sits between the manufacturer and the integrator — adding engineering, sizing and support at
              every step, not just moving boxes.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHAIN.map((c, i) => (
              <Reveal key={c.label} delay={(i % 4) * 0.06}>
                <div className="relative bg-white border border-[#E2ECF8] rounded-xl p-6 h-full">
                  <span className="w-11 h-11 rounded-lg bg-[#F4F8FF] flex items-center justify-center mb-4">
                    <c.icon size={20} className="text-[#00B4C8]" />
                  </span>
                  <h3 className="text-[#0D1B3E] font-semibold text-sm mb-1.5">{c.label}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{c.text}</p>
                  {i < CHAIN.length - 1 && (
                    <span className="hidden lg:block absolute top-1/2 -right-3 text-[#CBD5E1] z-10">
                      <ArrowRight size={18} />
                    </span>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers */}
      <section className="bg-[#0D1B3E] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-white text-4xl lg:text-5xl font-semibold tracking-tight">
                  {s.value}
                  <span className="text-[#00B4C8]">{s.suffix}</span>
                </p>
                <p className="text-white/50 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footprint */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-3">Our footprint</h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-10">
              Twin offices in the UAE and Oman, serving the wider GCC — with KSA and Qatar reserved for the
              next phase of growth.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {CONTACT.offices.map((o) => (
              <div key={o.label} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded-2xl p-7">
                <h3 className="text-[#0D1B3E] font-semibold mb-2">{o.label}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{o.address}</p>
                <a
                  href={o.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00B4C8] text-sm font-semibold hover:underline"
                >
                  Open in Maps →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Work with an engineering-led VAD"
        text="From multi-brand sourcing to pre-sales design and after-sales support — MTP is built to make integrators win."
        primaryLabel="Become a Partner"
        primaryHref="/partners"
        secondaryLabel="Why MTP"
        secondaryHref="/why-mtp"
      />
    </main>
  )
}
