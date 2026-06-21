import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Calendar, Video, GraduationCap, MapPin, Presentation } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { upcomingEvents, pastEvents } from '@/lib/events'
import { NEWS } from '@/lib/news'
import Reveal from '@/components/Reveal'
import NewsletterForm from '@/components/layout/NewsletterForm'

export const metadata: Metadata = {
  title: 'Events & News',
  description:
    'MTP exhibitions, webinars, training and roadshows across the UAE and Oman, plus the latest company and vendor news. Register for upcoming events.',
  alternates: { canonical: '/events-news' },
}

const EVENT_ICON: Record<string, LucideIcon> = {
  exhibition: Presentation,
  webinar: Video,
  training: GraduationCap,
  roadshow: MapPin,
}

export default function EventsNewsHubPage() {
  const upcoming = upcomingEvents()
  const past = pastEvents()

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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Events &amp; News</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-4xl mb-6">
            Where MTP shows up in the industry
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Exhibitions, webinars, training and roadshows across the Gulf — plus the latest company and
            vendor news.
          </p>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-10">Upcoming events</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcoming.map((e, i) => {
              const Icon = EVENT_ICON[e.type] ?? Calendar
              return (
                <Reveal key={e.slug} delay={(i % 3) * 0.06}>
                  <Link
                    href={`/events/${e.slug}`}
                    className="group block h-full bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 hover:shadow-[0_14px_40px_-16px_rgba(13,27,62,0.2)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="flex items-center gap-2 bg-[#F4F8FF] rounded-full px-3 py-1.5">
                        <Icon size={14} className="text-[#00B4C8]" />
                        <span className="text-[#0D1B3E] text-[11px] font-semibold uppercase tracking-wide">{e.type}</span>
                      </span>
                      <span className="text-[#94A3B8] text-xs font-medium">{e.date}</span>
                    </div>
                    <h3 className="text-[#0D1B3E] text-lg font-semibold leading-tight mb-2">{e.title}</h3>
                    <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{e.summary}</p>
                    <p className="flex items-center gap-1.5 text-[#94A3B8] text-xs mb-4">
                      <MapPin size={13} className="text-[#00B4C8]" /> {e.location}
                    </p>
                    <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold group-hover:gap-2 transition-all">
                      Register <ArrowUpRight size={13} />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Past events */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-10">Past events</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {past.map((e) => {
              const Icon = EVENT_ICON[e.type] ?? Calendar
              return (
                <Link
                  key={e.slug}
                  href={`/events/${e.slug}`}
                  className="group flex items-center gap-5 bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 transition-all"
                >
                  <span className="w-12 h-12 rounded-xl bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-[#00B4C8]" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-[#0D1B3E] font-semibold">{e.title}</span>
                    <span className="block text-[#94A3B8] text-xs mt-0.5">{e.date} · {e.location}</span>
                  </span>
                  <ArrowUpRight size={18} className="text-[#CBD5E1] group-hover:text-[#00B4C8] transition-colors" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-10">News &amp; announcements</h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {NEWS.map((n, i) => (
              <Reveal key={n.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/news/${n.slug}`}
                  className="group block h-full bg-white border border-[#E2ECF8] rounded-xl p-6 hover:border-[#00B4C8]/50 hover:shadow-[0_14px_40px_-16px_rgba(13,27,62,0.2)] transition-all"
                >
                  <p className="text-[#94A3B8] text-xs font-medium mb-3">{n.date}</p>
                  <h3 className="text-[#0D1B3E] font-semibold leading-tight mb-3">{n.title}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed mb-4">{n.excerpt}</p>
                  <span className="flex items-center gap-1 text-[#00B4C8] text-xs font-semibold group-hover:gap-2 transition-all">
                    Read more <ArrowUpRight size={13} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-[#0D1B3E] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-tight mb-3">
            Stay in the loop
          </h2>
          <p className="text-white/55 text-base mb-8">
            Event invites, training dates and brand launches — to your inbox.
          </p>
          <div className="flex justify-center">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  )
}
