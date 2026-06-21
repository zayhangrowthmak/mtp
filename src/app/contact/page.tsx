import type { Metadata } from 'next'
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react'
import { CONTACT, SITE, waLink } from '@/lib/site'
import EnquiryForm from '@/components/forms/EnquiryForm'

export const metadata: Metadata = {
  title: 'Contact MTP Distribution',
  description:
    'Talk to MTP. Routed enquiries for partners, sales, vendors and support, plus direct email, UAE & Oman phone, WhatsApp and our office locations.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1B3E] pt-44 pb-16 px-6 relative overflow-hidden">
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
            <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Contact Us</span>
          </div>
          <h1 className="text-white text-4xl lg:text-6xl font-semibold tracking-tight leading-[1.08] max-w-3xl mb-6">
            Let&apos;s talk
          </h1>
          <p className="text-white/55 text-lg leading-relaxed max-w-2xl">
            Whether you&apos;re an integrator, an end-user or a vendor, send us your enquiry and we&apos;ll route it
            to the right team in the UAE or Oman.
          </p>
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            <EnquiryForm defaultType="sales" />
          </div>

          {/* Direct contact */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Prefer to talk directly?</h2>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 transition-colors"
            >
              <span className="w-11 h-11 rounded-lg bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                <Mail size={18} className="text-[#00B4C8]" />
              </span>
              <span>
                <span className="block text-[#94A3B8] text-xs">Email</span>
                <span className="block text-[#0D1B3E] font-medium text-sm">{CONTACT.email}</span>
              </span>
            </a>
            <a
              href={waLink('Hello MTP, I have an enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#25D366]/50 transition-colors"
            >
              <span className="w-11 h-11 rounded-lg bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={18} className="text-[#25D366]" />
              </span>
              <span>
                <span className="block text-[#94A3B8] text-xs">WhatsApp</span>
                <span className="block text-[#0D1B3E] font-medium text-sm">Chat with us now</span>
              </span>
            </a>
            {CONTACT.offices.map((o) => (
              <a
                key={o.label}
                href={`tel:${o.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 transition-colors"
              >
                <span className="w-11 h-11 rounded-lg bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#00B4C8]" />
                </span>
                <span>
                  <span className="block text-[#94A3B8] text-xs">{o.country}</span>
                  <span className="block text-[#0D1B3E] font-medium text-sm">{o.phone}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="bg-[#F4F8FF] border-y border-[#E2ECF8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight mb-10">Our offices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CONTACT.offices.map((o) => (
              <div key={o.label} className="bg-white border border-[#E2ECF8] rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00B4C8]" />
                  <span className="text-[#0D1B3E] font-semibold">{o.label}</span>
                </div>
                <p className="flex gap-3 text-[#4A5568] text-sm leading-relaxed mb-4">
                  <MapPin size={16} className="text-[#00B4C8] mt-0.5 flex-shrink-0" />
                  {o.address}
                </p>
                <div className="flex flex-col gap-1.5 text-sm mb-5">
                  <a href={`mailto:${o.email}`} className="text-[#00B4C8] hover:underline">{o.email}</a>
                  <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-[#4A5568] hover:text-[#0D1B3E] transition-colors">{o.phone}</a>
                </div>
                <a
                  href={o.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#0D1B3E] font-semibold border border-[#E2ECF8] rounded-sm px-4 py-2.5 hover:border-[#00B4C8]/50 transition-colors"
                >
                  <MapPin size={15} className="text-[#00B4C8]" /> Open in Maps
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vendor enquiry */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0D1B3E] rounded-2xl px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">For vendors &amp; OEMs</span>
              <h2 className="text-white text-2xl font-semibold tracking-tight mt-2">Seeking regional distribution?</h2>
              <p className="text-white/55 text-sm mt-2 max-w-xl">
                {SITE.name} represents leading manufacturers across the UAE and Oman. Use the form above and
                select &ldquo;Vendor / OEM&rdquo; to start the conversation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
