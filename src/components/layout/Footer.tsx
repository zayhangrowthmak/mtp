import Link from 'next/link'
import { MapPin, Mail, Phone, Download, MessageCircle } from 'lucide-react'
import { SITE, CONTACT, SOCIAL, FOOTER_NAV, waLink } from '@/lib/site'
import NewsletterForm from './NewsletterForm'

const SOCIALS = [
  { label: 'in', href: SOCIAL.linkedin },
  { label: 'fb', href: SOCIAL.facebook },
  { label: 'ig', href: SOCIAL.instagram },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0D1B3E] text-white/70">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mtp-logo.png" alt="MTP Distribution" className="h-10 w-auto" />
              <span className="text-[#00B4C8] text-lg font-medium">Distribution</span>
            </Link>
            <p className="text-sm leading-relaxed text-white/55 max-w-sm mb-6">
              {SITE.description}
            </p>
            <p className="text-[#00B4C8] text-sm font-medium mb-6">{SITE.tagline}</p>

            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-white/55 hover:text-[#00B4C8] hover:border-[#00B4C8]/50 transition-colors text-xs font-bold"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">Newsletter</h4>
            <p className="text-sm text-white/55 mb-4">
              Brand launches, projects and events — to your inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Offices */}
        <div className="grid md:grid-cols-2 gap-6 mt-14 pt-10 border-t border-white/10">
          {CONTACT.offices.map((o) => (
            <div key={o.label}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8]" />
                <span className="text-white font-semibold text-sm">{o.label}</span>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex gap-2.5 text-white/55">
                  <MapPin size={15} className="text-[#00B4C8] mt-0.5 flex-shrink-0" />
                  {o.address}
                </p>
                <a href={`mailto:${o.email}`} className="flex gap-2.5 text-white/55 hover:text-white transition-colors">
                  <Mail size={15} className="text-[#00B4C8] flex-shrink-0" />
                  {o.email}
                </a>
                <a
                  href={`tel:${o.phone.replace(/\s/g, '')}`}
                  className="flex gap-2.5 text-white/55 hover:text-white transition-colors"
                >
                  <Phone size={15} className="text-[#00B4C8] flex-shrink-0" />
                  {o.phone}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Downloads / WhatsApp row */}
        <div className="flex flex-wrap gap-3 mt-10">
          <a
            href={CONTACT.brochureUrl}
            className="flex items-center gap-2 text-sm text-white border border-white/15 hover:border-[#00B4C8]/50 rounded-sm px-4 py-2.5 transition-colors"
          >
            <Download size={15} className="text-[#00B4C8]" /> Company Brochure
          </a>
          <a
            href={waLink('Hello MTP, I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white border border-white/15 hover:border-[#25D366]/50 rounded-sm px-4 py-2.5 transition-colors"
          >
            <MessageCircle size={15} className="text-[#25D366]" /> WhatsApp Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} {SITE.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
