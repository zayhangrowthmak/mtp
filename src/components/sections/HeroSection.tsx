'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Great Place To Work badge. Shows the official asset if dropped at
// /public/great-place-to-work.png, otherwise a clean recreation of the
// certification mark MTP holds (Feb 2026–Feb 2027, UAE).
function GptwBadge() {
  const [imgOk, setImgOk] = useState(false)
  const src = '/great-place-to-work.png'

  useEffect(() => {
    let active = true
    const probe = new window.Image()
    probe.onload = () => active && setImgOk(true)
    probe.onerror = () => active && setImgOk(false)
    probe.src = src
    return () => {
      active = false
    }
  }, [])

  if (imgOk) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={src}
        alt="Great Place To Work Certified — UAE, Feb 2026 to Feb 2027"
        className="w-[128px] h-auto drop-shadow-2xl"
      />
    )
  }

  return (
    <div
      className="w-[124px] drop-shadow-2xl select-none"
      aria-label="Great Place To Work Certified — UAE, Feb 2026 to Feb 2027"
    >
      <div className="bg-[#E4002B] px-3.5 pt-3 pb-2.5">
        <p className="text-white font-extrabold leading-[1.02] text-[20px] tracking-tight">
          Great
          <br />
          Place
          <br />
          To
          <br />
          Work<span className="align-top text-[9px]">®</span>
        </p>
      </div>
      <div
        className="bg-[#1B2A56] px-3 pt-2.5 pb-6 text-center"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)' }}
      >
        <p className="text-white font-bold text-[18px] leading-none mb-2">Certified</p>
        <p className="text-white/85 text-[8px] font-medium tracking-wide">FEB 2026-FEB 2027</p>
        <p className="text-white text-[11px] font-bold mt-1">UAE</p>
      </div>
    </div>
  )
}

const TICKER_ITEMS = [
  'Fire Alarm Systems',
  'IP CCTV & Video Analytics',
  'Access Control',
  'PA & Conference',
  'Networking & Storage',
  'Building Management',
  'Power & UPS',
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0D1B3E] flex flex-col overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Circuit-trace SVG — the Signal Path signature element */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="traceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B4C8" stopOpacity="0" />
            <stop offset="50%" stopColor="#00B4C8" stopOpacity="1" />
            <stop offset="100%" stopColor="#00B4C8" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M -20 200 H 100 V 120 H 300 V 200 H 500 V 80 H 700 V 300 H 900 V 180 H 1100 V 350"
          stroke="url(#traceGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M 200 600 V 450 H 400 V 380 H 600 V 500 H 800 V 300"
          stroke="url(#traceGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Nodes at trace junctions */}
        {[
          [100, 200], [300, 120], [500, 200], [700, 80], [900, 300],
          [400, 450], [600, 380], [800, 500],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#00B4C8" />
        ))}
      </svg>

      {/* Accent blob top-right */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #00B4C8 0%, transparent 70%)',
        }}
      />

      {/* Great Place To Work badge */}
      <div className="absolute top-24 right-6 lg:right-10 z-20 hidden md:block">
        <GptwBadge />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center max-w-7xl mx-auto w-full px-6 pt-32 pb-16">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2.5 mb-6"
            >
              <span className="w-8 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">
                Value Added Distributor · UAE & Oman
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-6"
            >
              The Gulf&apos;s Trusted
              <br />
              <span className="text-[#00B4C8]">Security &amp; Infrastructure</span>
              <br />
              Distributor
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/60 text-lg leading-relaxed max-w-xl mb-10"
            >
              30+ global security brands, in-stock and supported across UAE and Oman —
              fire, CCTV, access control, networking, and beyond.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/solutions"
                className="flex items-center gap-2 bg-[#00B4C8] hover:bg-[#00C9DF] text-white font-semibold px-7 py-3.5 rounded-sm transition-all duration-200 group"
              >
                Explore Solutions
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#contact"
                className="flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/80 hover:text-white font-medium px-7 py-3.5 rounded-sm transition-all duration-200"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Solutions ticker */}
        <div className="border-t border-white/10">
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 px-8 text-white/40 text-sm font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-24 left-6 flex items-center gap-2 text-white/30"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={14} />
        <span className="text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
      `}</style>
    </section>
  )
}
