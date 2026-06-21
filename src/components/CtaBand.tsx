import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

// Conversion band — the brief requires one on every page. Defaults to the
// solution/brand "Request a Quote" pairing; override for channel pages.
export default function CtaBand({
  title = 'Ready to spec your next project?',
  text = 'Talk to MTP pre-sales for sizing, a bill of materials, and project pricing across every brand we carry.',
  primaryLabel = 'Request a Quote',
  primaryHref = '/contact',
  secondaryLabel = 'Download Brochure',
  secondaryHref = '/resources',
}: {
  title?: string
  text?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}) {
  return (
    <section className="bg-[#0D1B3E] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight mb-3">{title}</h2>
          <p className="text-white/55 text-base leading-relaxed">{text}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
          <Link
            href={primaryHref}
            className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-colors"
          >
            {primaryLabel} <ArrowRight size={16} />
          </Link>
          {secondaryLabel && (
            <Link
              href={secondaryHref}
              className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium px-7 py-3.5 rounded-sm transition-colors"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
