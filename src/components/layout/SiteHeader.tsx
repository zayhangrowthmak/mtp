'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Cctv,
  DoorOpen,
  Flame,
  Volume2,
  Wifi,
  Building2,
  Zap,
  Phone,
  MessageCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { PRIMARY_NAV, SOLUTION_NAV, INDUSTRIES, CONTACT, waLink } from '@/lib/site'

const SOLUTION_ICON: Record<string, LucideIcon> = {
  cctv: Cctv,
  access: DoorOpen,
  fire: Flame,
  pa: Volume2,
  networking: Wifi,
  ibms: Building2,
  ups: Zap,
}

export default function SiteHeader({ utilityBar }: { utilityBar: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="fixed top-0 inset-x-0 z-50" onMouseLeave={() => setOpenMenu(null)}>
      {/* Utility bar — collapses on scroll */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'
        }`}
      >
        {utilityBar}
      </div>

      {/* Main bar */}
      <div
        className={`transition-colors duration-300 ${
          scrolled || openMenu
            ? 'bg-[#0D1B3E]/95 backdrop-blur-sm shadow-lg shadow-black/20'
            : 'bg-[#0D1B3E]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mtp-logo.png" alt="MTP" className="h-9 w-auto transition-transform group-hover:scale-105" />
            <span className="text-[#00B4C8] text-base font-medium hidden sm:block">Distribution</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {PRIMARY_NAV.map((item) => {
              const hasMenu = 'children' in item && item.children
              return (
                <div key={item.label} onMouseEnter={() => setOpenMenu(hasMenu ? item.label : null)}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-white/75 hover:text-white text-sm font-medium transition-colors py-2"
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${openMenu === item.label ? 'rotate-180' : ''}`}
                      />
                    )}
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <Link
              href="/contact"
              className="text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-sm border border-white/15 hover:border-white/40 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/partners"
              className="flex items-center gap-1.5 bg-[#00B4C8] hover:bg-[#00C9DF] text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors"
            >
              Become a Partner
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-white p-1"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Desktop mega-menu panels */}
        <AnimatePresence>
          {openMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 top-full border-t border-white/10 bg-[#0D1B3E]/98 backdrop-blur-sm shadow-2xl shadow-black/40"
            >
              <div className="max-w-7xl mx-auto px-6 py-7">
                {openMenu === 'Solutions' && (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
                    {SOLUTION_NAV.map((s) => {
                      const Icon = SOLUTION_ICON[s.id] ?? Cctv
                      return (
                        <Link
                          key={s.slug}
                          href={`/solutions/${s.slug}`}
                          className="group flex items-center gap-3.5 rounded-lg p-3 hover:bg-white/5 transition-colors"
                        >
                          <span className="w-10 h-10 rounded-lg bg-[#00B4C8]/12 flex items-center justify-center flex-shrink-0">
                            <Icon size={18} className="text-[#00B4C8]" />
                          </span>
                          <span>
                            <span className="block text-white text-sm font-medium leading-tight">{s.name}</span>
                            <span className="block text-white/40 text-xs mt-0.5">{s.short}</span>
                          </span>
                        </Link>
                      )
                    })}
                    <Link
                      href="/solutions"
                      className="flex items-center gap-2 rounded-lg p-3 text-[#00B4C8] hover:bg-white/5 text-sm font-semibold transition-colors"
                    >
                      View all solutions <ArrowRight size={15} />
                    </Link>
                  </div>
                )}

                {openMenu === 'Industries' && (
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1">
                    {INDUSTRIES.map((i) => (
                      <Link
                        key={i.slug}
                        href={`/industries/${i.slug}`}
                        className="rounded-md px-3 py-2.5 text-white/75 hover:text-white hover:bg-white/5 text-sm transition-colors"
                      >
                        {i.name}
                      </Link>
                    ))}
                  </div>
                )}

                {openMenu === 'About' && (
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-1 max-w-3xl">
                    {PRIMARY_NAV.find((n) => n.label === 'About')?.children?.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="rounded-md px-3 py-2.5 text-white/75 hover:text-white hover:bg-white/5 text-sm transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-[#0D1B3E] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/10 flex-shrink-0">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mtp-logo.png" alt="MTP" className="h-9 w-auto" />
                <span className="text-[#00B4C8] text-base font-medium">Distribution</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-white p-1" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4">
              {PRIMARY_NAV.map((item) => {
                const children = 'children' in item ? item.children : undefined
                const open = mobileSection === item.label
                return (
                  <div key={item.label} className="border-b border-white/10">
                    {children ? (
                      <>
                        <button
                          onClick={() => setMobileSection(open ? null : item.label)}
                          className="w-full flex items-center justify-between py-4 text-white font-medium"
                        >
                          {item.label}
                          <ChevronDown size={18} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {open && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 flex flex-col">
                                <Link
                                  href={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="py-2 text-[#00B4C8] text-sm font-medium"
                                >
                                  View all {item.label}
                                </Link>
                                {children.map((c) => (
                                  <Link
                                    key={c.href}
                                    href={c.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="py-2 text-white/65 hover:text-white text-sm"
                                  >
                                    {c.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-4 text-white font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="px-6 py-5 border-t border-white/10 flex-shrink-0 space-y-3">
              <Link
                href="/partners"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-1.5 bg-[#00B4C8] text-white font-semibold px-4 py-3 rounded-sm"
              >
                Become a Partner <ArrowRight size={16} />
              </Link>
              <div className="flex gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 text-center text-white border border-white/20 font-medium px-4 py-3 rounded-sm"
                >
                  Contact
                </Link>
                <a
                  href={waLink('Hello MTP, I have an enquiry.')}
                  className="flex items-center justify-center gap-1.5 text-white border border-white/20 font-medium px-4 py-3 rounded-sm"
                >
                  <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp
                </a>
              </div>
              <a
                href={`tel:${CONTACT.offices[0].phone.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-2 text-white/55 text-sm pt-1"
              >
                <Phone size={14} className="text-[#00B4C8]" /> {CONTACT.offices[0].phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
