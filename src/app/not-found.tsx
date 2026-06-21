import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
}

const LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Brands', href: '/brands' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0D1B3E] flex items-center">
      <div className="max-w-2xl mx-auto px-6 pt-44 pb-28 text-center">
        <p className="text-[#00B4C8] text-7xl font-bold tracking-tight mb-4">404</p>
        <h1 className="text-white text-3xl lg:text-4xl font-semibold tracking-tight mb-5">
          We couldn&apos;t find that page
        </h1>
        <p className="text-white/55 text-base leading-relaxed mb-10">
          The page may have moved during our site rebuild. Try one of these instead.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/80 hover:text-white border border-white/15 hover:border-[#00B4C8]/50 font-medium px-5 py-2.5 rounded-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
        >
          Go Home <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  )
}
