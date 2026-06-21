import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ChevronRight, Calendar, MapPin, CheckCircle2, Info } from 'lucide-react'
import { EVENTS, EVENT_SLUGS, eventBySlug } from '@/lib/events'
import { SITE } from '@/lib/site'
import Reveal from '@/components/Reveal'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return EVENT_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const e = eventBySlug(slug)
  if (!e) return {}
  return {
    title: `${e.title} — Events`,
    description: e.summary,
    alternates: { canonical: `/events/${e.slug}` },
    openGraph: { title: `${e.title} | MTP Distribution`, description: e.summary, url: `${SITE.baseUrl}/events/${e.slug}` },
  }
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const e = eventBySlug(slug)
  if (!e) notFound()

  const related = EVENTS.filter((o) => o.slug !== e.slug).slice(0, 2)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.title,
    startDate: e.iso,
    eventStatus: 'https://schema.org/EventScheduled',
    location: { '@type': 'Place', name: e.location },
    description: e.summary,
    organizer: { '@type': 'Organization', name: SITE.legalName, url: SITE.baseUrl },
  }

  return (
    <main className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-40 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-7xl mx-auto">
          <nav className="flex items-center gap-1.5 text-xs text-white/45 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/events-news" className="hover:text-white transition-colors">Events &amp; News</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">{e.title}</span>
          </nav>
          <span className="inline-block text-[#00B4C8] text-xs font-semibold tracking-widest uppercase mb-3">{e.type}</span>
          <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] max-w-3xl mb-6">{e.title}</h1>
          <div className="flex flex-wrap gap-5 text-white/60 text-sm">
            <span className="flex items-center gap-2"><Calendar size={15} className="text-[#00B4C8]" /> {e.date}</span>
            <span className="flex items-center gap-2"><MapPin size={15} className="text-[#00B4C8]" /> {e.location}</span>
          </div>
        </div>
      </section>

      {/* Sample notice */}
      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="flex items-start gap-3 bg-[#FFF7ED] border border-[#FED7AA] rounded-lg px-5 py-3.5">
          <Info size={18} className="text-[#EA580C] flex-shrink-0 mt-0.5" />
          <p className="text-[#9A3412] text-sm">
            <span className="font-semibold">Illustrative sample.</span> Placeholder event — replace with MTP&apos;s
            confirmed schedule and registration link.
          </p>
        </div>
      </div>

      {/* Body */}
      <section className="py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <h2 className="text-[#0D1B3E] text-2xl font-semibold tracking-tight mb-4">About this event</h2>
              <p className="text-[#4A5568] text-base leading-relaxed mb-8">{e.body}</p>
              {e.agenda && (
                <>
                  <h3 className="text-[#0D1B3E] text-sm font-semibold tracking-widest uppercase mb-4">What to expect</h3>
                  <ul className="space-y-3">
                    {e.agenda.map((a) => (
                      <li key={a} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0D1B3E] text-sm">{a}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </Reveal>
          </div>

          {/* Register card */}
          <Reveal delay={0.1}>
            <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded-2xl p-7 sticky top-28">
              <h3 className="text-[#0D1B3E] font-semibold text-lg mb-2">
                {e.status === 'upcoming' ? 'Register your interest' : 'Missed it?'}
              </h3>
              <p className="text-[#4A5568] text-sm mb-6">
                {e.status === 'upcoming'
                  ? 'Reserve your place or book a one-to-one with the MTP team.'
                  : 'Get in touch to see what we showcased and discuss your project.'}
              </p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-6 py-3 rounded-sm transition-colors"
              >
                {e.status === 'upcoming' ? 'Register' : 'Contact Us'} <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-[#F4F8FF] border-t border-[#E2ECF8] py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-[#0D1B3E] text-2xl font-semibold tracking-tight mb-8">More events</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/events/${r.slug}`}
                  className="group flex items-center justify-between gap-4 bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 transition-all"
                >
                  <span>
                    <span className="block text-[#0D1B3E] font-semibold">{r.title}</span>
                    <span className="block text-[#94A3B8] text-xs mt-0.5">{r.date} · {r.location}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
