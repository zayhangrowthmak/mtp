import type { Metadata } from 'next'
import Placeholder from '@/components/layout/Placeholder'

export const metadata: Metadata = {
  title: 'Careers at MTP Distribution',
  description: 'Join a young, dynamic Value-Added Distributor. Explore culture, growth and open roles at MTP across the UAE and Oman.',
  alternates: { canonical: '/careers' },
}

export default function CareersPage() {
  return (
    <Placeholder
      eyebrow="Careers"
      title="Build the Gulf's leading security VAD"
      description="Culture, why work here, current openings and how to apply."
      phase="Phase 4"
    />
  )
}
