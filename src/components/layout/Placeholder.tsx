import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Temporary, on-brand placeholder for routes being built in a later phase.
// Keeps the whole site navigable while each section is delivered one at a time.
export default function Placeholder({
  eyebrow,
  title,
  description,
  phase,
}: {
  eyebrow: string
  title: string
  description: string
  phase?: string
}) {
  return (
    <main className="min-h-screen bg-[#0D1B3E] flex items-center">
      <div className="max-w-3xl mx-auto px-6 pt-44 pb-28 text-center">
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <span className="w-6 h-px bg-[#00B4C8]" />
          <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">{eyebrow}</span>
          <span className="w-6 h-px bg-[#00B4C8]" />
        </div>
        <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-tight mb-6">{title}</h1>
        <p className="text-white/55 text-base leading-relaxed mb-3">{description}</p>
        {phase && (
          <p className="text-white/35 text-sm mb-10">
            This section is in the build queue{phase ? ` (${phase})` : ''} — full page coming soon.
          </p>
        )}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link
            href="/solutions"
            className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            Explore Solutions <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium px-6 py-3 rounded-sm transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
