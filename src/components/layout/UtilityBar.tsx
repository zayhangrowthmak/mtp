import Link from 'next/link'
import { Phone, MessageCircle, Download, Search } from 'lucide-react'
import { CONTACT, waLink } from '@/lib/site'

// Global utility bar — fast contact for time-poor integrators. Reserves an
// Arabic language slot for the future routing layer.
export default function UtilityBar() {
  return (
    <div className="hidden md:block bg-[#091227] text-white/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between text-[12px]">
        <div className="flex items-center gap-5">
          <span className="text-white/45">Value-Added Distributor · UAE &amp; Oman</span>
        </div>

        <div className="flex items-center gap-5">
          {CONTACT.offices.map((o) => (
            <a
              key={o.label}
              href={`tel:${o.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-[#00B4C8]" />
              <span className="text-white/45">{o.country === 'United Arab Emirates' ? 'UAE' : 'Oman'}</span>
              <span>{o.phone}</span>
            </a>
          ))}

          <span className="w-px h-3.5 bg-white/10" />

          <a
            href={waLink('Hello MTP, I have an enquiry.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MessageCircle size={13} className="text-[#25D366]" />
            WhatsApp
          </a>

          <a
            href={CONTACT.brochureUrl}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Download size={13} />
            Brochure
          </a>

          <Link href="/search" className="flex items-center gap-1.5 hover:text-white transition-colors">
            <Search size={13} />
            Search
          </Link>

          {/* Reserved Arabic language slot (future /ar routing) */}
          <span className="flex items-center gap-1 text-white/40">
            <span className="text-white font-medium">EN</span>
            <span aria-hidden>·</span>
            <span className="cursor-default" title="Arabic coming soon">AR</span>
          </span>
        </div>
      </div>
    </div>
  )
}
