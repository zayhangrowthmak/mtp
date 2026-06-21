import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your enquiry has been received.',
  robots: { index: false, follow: false },
  alternates: { canonical: '/thank-you' },
}

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0D1B3E] flex items-center">
      <div className="max-w-2xl mx-auto px-6 pt-44 pb-28 text-center">
        <div className="w-16 h-16 rounded-full bg-[#00B4C8]/15 flex items-center justify-center mx-auto mb-7">
          <CheckCircle2 size={32} className="text-[#00B4C8]" />
        </div>
        <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
          Thank you — we&apos;ve got it
        </h1>
        <p className="text-white/55 text-base leading-relaxed mb-10">
          Your enquiry has reached the right MTP team in the UAE or Oman. We typically respond within one
          business day. In the meantime, explore what we distribute.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/solutions"
            className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
          >
            Explore Solutions <ArrowRight size={16} />
          </Link>
          <Link
            href="/projects"
            className="text-white/80 hover:text-white border border-white/20 hover:border-white/40 font-medium px-6 py-3 rounded-sm transition-colors"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  )
}
