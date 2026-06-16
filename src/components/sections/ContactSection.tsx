'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { COMPANY } from '@/lib/data'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-[#0D1B3E] relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#00B4C8 1px, transparent 1px), linear-gradient(90deg, #00B4C8 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B4C8]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center justify-center gap-2.5 mb-4"
          >
            <span className="w-6 h-px bg-[#00B4C8]" />
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Contact Us</span>
            <span className="w-6 h-px bg-[#00B4C8]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl lg:text-5xl font-semibold tracking-tight mb-4"
          >
            Let&apos;s Talk
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-lg mx-auto text-base"
          >
            Reach our team in Dubai or Muscat for product enquiries, technical pre-sales support, or pricing.
          </motion.p>
        </div>

        {/* Office cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-14">
          {[COMPANY.contacts.uae, COMPANY.contacts.oman].map((office, i) => (
            <motion.div
              key={office.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-xl p-7 hover:border-[#00B4C8]/40 transition-colors"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8]" />
                <span className="text-white font-semibold">{office.label}</span>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={15} className="text-[#00B4C8] mt-0.5 flex-shrink-0" />
                  <p className="text-white/60 text-sm leading-relaxed">{office.address}</p>
                </div>
                <div className="flex gap-3">
                  <Mail size={15} className="text-[#00B4C8] flex-shrink-0" />
                  <a href={`mailto:${office.email}`} className="text-white/60 text-sm hover:text-white transition-colors">
                    {office.email}
                  </a>
                </div>
                <div className="flex gap-3">
                  <Phone size={15} className="text-[#00B4C8] flex-shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-white/60 text-sm hover:text-white transition-colors">
                    {office.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 pt-8 border-t border-white/10 max-w-4xl mx-auto"
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            </div>
            <span className="text-white font-semibold text-sm">MTP Distribution</span>
          </div>

          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} MTP Distribution. All rights reserved.
          </p>

          {/* Social */}
          <div className="flex gap-4">
            {[
              { href: COMPANY.social.linkedin, label: 'in' },
              { href: COMPANY.social.facebook, label: 'fb' },
              { href: COMPANY.social.instagram, label: 'ig' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-[#00B4C8] hover:border-[#00B4C8]/40 transition-colors text-xs font-bold"
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
