import type { Metadata } from 'next'
import { ArrowRight, Boxes, Tag, DraftingCompass, Sparkles, BadgeCheck, ShieldCheck } from 'lucide-react'
import Reveal from '@/components/Reveal'
import EnquiryForm from '@/components/forms/EnquiryForm'

export const metadata: Metadata = {
  title: 'Become a Partner — Partner Program',
  description:
    'Partner with MTP: multi-brand sourcing, project pricing, pre-sales & design, training and certification. Built for system integrators and resellers across the UAE and Oman.',
  alternates: { canonical: '/partners' },
}

const REASONS = [
  { icon: Boxes, title: 'One multi-brand source', text: '30+ brands across seven lines from a single, neutral distributor.' },
  { icon: Tag, title: 'Project pricing', text: 'Competitive, deal-registered pricing that protects your margin.' },
  { icon: DraftingCompass, title: 'Pre-sales & design', text: 'Engineering support to design, size and spec the system.' },
  { icon: Sparkles, title: 'Premium & AI lines', text: 'Access higher-margin AI, PSIM and control-room technologies.' },
]

const TIERS = [
  { name: 'Registered', text: 'Entry tier — catalogue access, standard pricing and pre-sales support.', features: ['Brand & solution access', 'Standard project pricing', 'Pre-sales support'] },
  { name: 'Certified', text: 'For active integrators — deal registration, training and priority support.', features: ['Deal registration', 'Training & certification', 'Priority pre-sales SLAs'], featured: true },
  { name: 'Premier', text: 'Strategic partners — best pricing, demo support and joint go-to-market.', features: ['Best-tier pricing', 'Demo & loan equipment', 'Joint go-to-market'] },
]

export default function PartnersPage() {
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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Become a Partner</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            One source for every system you spec
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl mb-10">
            MTP is built for system integrators and resellers — multi-brand sourcing, project pricing, and the
            pre-sales engineering that helps you win and deliver.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            Apply to Partner <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-12">Why partner with MTP</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={(i % 4) * 0.05}>
                <div className="bg-white border border-[#E2ECF8] rounded-xl p-6 h-full">
                  <span className="w-11 h-11 rounded-lg bg-[#F4F8FF] flex items-center justify-center mb-4">
                    <r.icon size={20} className="text-[#00B4C8]" />
                  </span>
                  <h3 className="text-[#0D1B3E] font-semibold text-sm mb-1.5">{r.title}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-3">Partner tiers &amp; benefits</h2>
            <p className="text-[#4A5568] text-base max-w-2xl mb-12">
              Grow with MTP — from catalogue access to deal registration, certification and joint go-to-market.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TIERS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.08}>
                <div
                  className={`rounded-2xl p-7 h-full border ${
                    t.featured ? 'bg-[#0D1B3E] border-[#0D1B3E]' : 'bg-white border-[#E2ECF8]'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BadgeCheck size={18} className="text-[#00B4C8]" />
                    <h3 className={`font-semibold text-lg ${t.featured ? 'text-white' : 'text-[#0D1B3E]'}`}>{t.name}</h3>
                  </div>
                  <p className={`text-sm leading-relaxed mb-6 ${t.featured ? 'text-white/60' : 'text-[#4A5568]'}`}>{t.text}</p>
                  <ul className="space-y-2.5">
                    {t.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm ${t.featured ? 'text-white/85' : 'text-[#0D1B3E]'}`}>
                        <ShieldCheck size={15} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[#94A3B8] text-xs mt-6">
            A partner portal with deal registration and resource access is reserved for a future phase.
          </p>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-20 lg:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-10">
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Partner application</span>
              <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mt-3 mb-3">
                Apply to become a partner
              </h2>
              <p className="text-[#4A5568] text-base">
                Tell us about your business and we&apos;ll route you to the right channel manager in the UAE or Oman.
              </p>
            </div>
          </Reveal>
          <EnquiryForm defaultType="partner" types={['partner', 'sales']} />
        </div>
      </section>
    </main>
  )
}
