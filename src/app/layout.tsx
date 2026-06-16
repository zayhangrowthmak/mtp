import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import Navbar from '@/components/Navbar'

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-sora',
})

export const metadata: Metadata = {
  title: 'MTP Distribution | Security & Infrastructure VAD — UAE & Oman',
  description:
    'Value Added Distributor of 30+ global security and IT infrastructure brands across UAE and Oman. Fire, CCTV, access control, networking, UPS and more.',
  keywords: ['security distributor UAE', 'CCTV distributor Oman', 'Bosch distributor UAE', 'VAD Middle East'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sora.variable} data-scroll-behavior="smooth">
      <body>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
