import type { Metadata, Viewport } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import UtilityBar from '@/components/layout/UtilityBar'
import SiteHeader from '@/components/layout/SiteHeader'
import Footer from '@/components/layout/Footer'
import Analytics from '@/components/Analytics'
import { SITE, CONTACT, SOCIAL } from '@/lib/site'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sora',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: 'MTP Distribution | Security & Infrastructure VAD — UAE & Oman',
    template: '%s | MTP Distribution',
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'security distributor UAE',
    'CCTV distributor Oman',
    'value added distributor Middle East',
    'access control distributor UAE',
    'fire alarm distributor',
    'PSIM control room',
    'Bosch distributor UAE',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: 'MTP Distribution — Security & Infrastructure VAD, UAE & Oman',
    description: SITE.description,
    url: SITE.baseUrl,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MTP Distribution — Security & Infrastructure VAD',
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  themeColor: '#0D1B3E',
  width: 'device-width',
  initialScale: 1,
}

// Organization structured data (sitewide SEO).
const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.legalName,
  alternateName: SITE.name,
  url: SITE.baseUrl,
  logo: `${SITE.baseUrl}/mtp-logo.png`,
  description: SITE.description,
  slogan: SITE.tagline,
  sameAs: [SOCIAL.linkedin, SOCIAL.facebook, SOCIAL.instagram],
  address: CONTACT.offices.map((o) => ({
    '@type': 'PostalAddress',
    streetAddress: o.address,
    addressCountry: o.country === 'United Arab Emirates' ? 'AE' : 'OM',
  })),
  contactPoint: CONTACT.offices.map((o) => ({
    '@type': 'ContactPoint',
    telephone: o.phone,
    email: o.email,
    contactType: 'sales',
    areaServed: o.country === 'United Arab Emirates' ? 'AE' : 'OM',
  })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable} data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <SmoothScroll>
          <SiteHeader utilityBar={<UtilityBar />} />
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
