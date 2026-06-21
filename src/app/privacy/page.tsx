import type { Metadata } from 'next'
import { SITE, CONTACT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MTP Distribution collects, uses and protects your information.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-[#0D1B3E] text-4xl font-semibold tracking-tight mb-3">Privacy Policy</h1>
        <p className="text-[#94A3B8] text-sm mb-10">Draft for legal review — to be finalised before launch.</p>

        <div className="prose-mtp space-y-6 text-[#4A5568] text-[15px] leading-relaxed">
          <p>
            {SITE.legalName} (&ldquo;MTP&rdquo;, &ldquo;we&rdquo;) respects your privacy. This policy explains
            what information we collect through this website and how we use it.
          </p>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Information we collect</h2>
            <p>Details you submit through enquiry, partner, vendor and newsletter forms — such as your name, company, email, phone and message — and standard analytics data (pages viewed, device, approximate location).</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">How we use it</h2>
            <p>To respond to enquiries and route them to the correct UAE or Oman team, to provide requested resources, to send communications you opt into, and to improve the site.</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Sharing</h2>
            <p>We do not sell your data. We share it only with service providers that help us operate this site and our CRM, under appropriate safeguards.</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Your choices</h2>
            <p>You can unsubscribe from communications at any time and request access to or deletion of your data by contacting us.</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Contact</h2>
            <p>
              Questions about this policy? Email{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-[#00B4C8] hover:underline">{CONTACT.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
