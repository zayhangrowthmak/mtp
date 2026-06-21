import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Calendar, Video, GraduationCap, MapPin, Presentation } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { upcomingEvents } from '@/lib/events'
import Reveal from '@/components/Reveal'

const EVENT_ICON: Record<string, LucideIcon> = {
  exhibition: Presentation,
  webinar: Video,
  training: GraduationCap,
  roadshow: MapPin,
}

export default function HomeEvents() {
  const events = upcomingEvents().slice(0, 3)
  if (events.length === 0) return null

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-px bg-[#00B4C8]" />
                <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Events &amp; Activities</span>
              </div>
              <h2 className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold tracking-tight">
                Meet us in the field
              </h2>
            </div>
            <Link
              href="/events-news"
              className="flex items-center gap-2 text-[#00B4C8] font-semibold text-sm hover:gap-3 transition-all"
            >
              All events &amp; news <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((e, i) => {
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
                  <p className="text-[#94A3B8] text-sm flex items-center gap-1.5 mb-4">
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
  )
}
