import type { Metadata } from 'next'
import Placeholder from '@/components/layout/Placeholder'

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search MTP solutions, brands, projects and resources.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/search' },
}

export default function SearchPage() {
  return (
    <Placeholder
      eyebrow="Search"
      title="Find solutions, brands & projects"
      description="Sitewide search across solutions, brands, industries, projects and resources."
      phase="Phase 5"
    />
  )
}
