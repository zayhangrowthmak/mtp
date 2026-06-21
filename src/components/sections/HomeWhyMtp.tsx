import Link from 'next/link'
import { ArrowRight, DraftingCompass, Network, GraduationCap, LifeBuoy } from 'lucide-react'
import Reveal from '@/components/Reveal'

const POINTS = [
  { icon: DraftingCompass, title: 'Pre-sales & design', text: 'We design and size the system, not just supply the parts.' },
  { icon: Network, title: 'Cross-system integration', text: 'CCTV, access, fire, PA, IBMS and power — working as one.' },
  { icon: GraduationCap, title: 'Training & certification', text: 'Partner enablement that lifts your tender-eligibility.' },
  { icon: LifeBuoy, title: 'After-sales support', text: 'Responsive support and streamlined RMA across the Gulf.' },
]

export default function HomeWhyMtp() {
  return (
    <section className="py-24 lg:py-32 bg-[#F4F8FF] border-y border-[#E2ECF8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Why MTP</span>
            </div>
            <h2 className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-6">
              Engineering-led, not box-moving
            </h2>
            <p className="text-[#4A5568] text-base leading-relaxed mb-8">
              Anyone can ship a product. MTP adds the engineering — design, sizing, integration, training and
              support — that turns a parts list into a system that works, and an integrator into a winner.
            </p>
            <Link
              href="/why-mtp"
              className="inline-flex items-center gap-2 bg-[#0D1B3E] hover:bg-[#162040] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
            >
              Our value-added services <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-4">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="bg-white border border-[#E2ECF8] rounded-xl p-6 h-full">
                  <span className="w-11 h-11 rounded-lg bg-[#00B4C8]/10 flex items-center justify-center mb-4">
                    <p.icon size={20} className="text-[#00B4C8]" />
                  </span>
                  <h3 className="text-[#0D1B3E] font-semibold text-sm mb-1.5">{p.title}</h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
