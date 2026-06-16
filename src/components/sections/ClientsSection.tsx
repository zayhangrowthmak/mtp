'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { CLIENTS } from '@/lib/data'

const VERTICALS = [
  { label: 'Government', color: '#0D1B3E' },
  { label: 'Oil & Gas', color: '#F59E0B' },
  { label: 'Healthcare', color: '#16A34A' },
  { label: 'Hospitality', color: '#DB2777' },
  { label: 'Commercial', color: '#7C3AED' },
]

type Client = (typeof CLIENTS)[number]

function ClientLogo({ client }: { client: Client }) {
  // Default to the name; only swap to a logo that actually loads, so a missing
  // /public/clients file never shows a broken-image icon.
  const [logoOk, setLogoOk] = useState(false)
  const src = client.logo

  useEffect(() => {
    let active = true
    const probe = new window.Image()
    probe.onload = () => active && setLogoOk(true)
    probe.onerror = () => active && setLogoOk(false)
    probe.src = src
    return () => {
      active = false
    }
  }, [src])

  return (
    <div
      title={client.name}
      className="mx-3 flex h-48 w-96 flex-shrink-0 items-center justify-center rounded-2xl border border-[#E2ECF8] bg-white px-10"
    >
      {logoOk ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={`${client.name} logo`}
          loading="lazy"
          className="max-h-28 max-w-[85%] w-auto object-contain mix-blend-multiply"
        />
      ) : (
        <span className="text-center text-base font-medium text-[#0D1B3E]">{client.name}</span>
      )}
    </div>
  )
}

export default function ClientsSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  // Two identical copies → a -50% translate loops seamlessly.
  const track = [...CLIENTS, ...CLIENTS]

  return (
    <section id="clients" ref={ref} className="py-24 lg:py-32 bg-[#F4F8FF] overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2.5 mb-4"
        >
          <span className="w-6 h-px bg-[#00B4C8]" />
          <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Our Clients</span>
          <span className="w-6 h-px bg-[#00B4C8]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#0D1B3E] text-4xl lg:text-5xl font-semibold leading-tight tracking-tight mb-5"
        >
          Trusted by the Gulf&apos;s Most Critical Institutions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#4A5568] text-base leading-relaxed mb-7"
        >
          From government ministries to Oman&apos;s oil infrastructure — our integrator partners have
          deployed MTP-distributed systems in some of the most demanding environments across the region.
        </motion.p>

        {/* Verticals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-2"
        >
          {VERTICALS.map((v) => (
            <span
              key={v.label}
              className="text-xs font-medium px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${v.color}30`, color: v.color, background: `${v.color}08` }}
            >
              {v.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Continuous sliding logo marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="client-marquee relative mt-16"
      >
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F4F8FF] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F4F8FF] to-transparent" />

        <div className="client-marquee-track flex w-max">
          {track.map((client, i) => (
            <ClientLogo key={`${client.slug}-${i}`} client={client} />
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes client-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .client-marquee-track {
          animation: client-marquee-scroll 45s linear infinite;
          will-change: transform;
        }
        .client-marquee:hover .client-marquee-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .client-marquee-track { animation: none; }
        }
      `}</style>
    </section>
  )
}
