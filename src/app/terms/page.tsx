import type { Metadata } from 'next'
import { SITE, CONTACT } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms governing your use of the MTP Distribution website.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 pt-40 pb-24">
        <h1 className="text-[#0D1B3E] text-4xl font-semibold tracking-tight mb-3">Terms of Use</h1>
        <p className="text-[#94A3B8] text-sm mb-10">Draft for legal review — to be finalised before launch.</p>

        <div className="space-y-6 text-[#4A5568] text-[15px] leading-relaxed">
          <p>
            By using this website you agree to these terms. The site is operated by {SITE.legalName} and is
            provided for general information about our products and services.
          </p>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Content</h2>
            <p>Product names, brand marks and logos are the property of their respective owners. Specifications are indicative and may change without notice; confirm current details before specifying or ordering.</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Acceptable use</h2>
            <p>You agree not to misuse the site, attempt to disrupt it, or use it for any unlawful purpose.</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Liability</h2>
            <p>The site is provided &ldquo;as is&rdquo;. To the extent permitted by law, MTP is not liable for any loss arising from use of the site or reliance on its content.</p>
          </div>
          <div>
            <h2 className="text-[#0D1B3E] text-lg font-semibold mb-2">Contact</h2>
            <p>
              Questions? Email{' '}
              <a href={`mailto:${CONTACT.email}`} className="text-[#00B4C8] hover:underline">{CONTACT.email}</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
