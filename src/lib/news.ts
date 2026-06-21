// ─── News / announcements ────────────────────────────────────────────────────
// Short, original factual summaries. Headlines reflect real vendor/company news;
// bodies are written for this site. Replace/extend via CMS.

export type Article = {
  slug: string
  title: string
  date: string
  iso: string
  brand?: string // brand slug
  excerpt: string
  body: string[]
}

export const NEWS: Article[] = [
  {
    slug: 'digifort-deployed-at-business-park',
    title: 'Digifort video management deployed at a major business park',
    date: 'Oct 2024',
    iso: '2024-10-01',
    brand: 'digifort',
    excerpt:
      'The flexibility of the Digifort VMS has been adopted for an intelligent video deployment at a large business park.',
    body: [
      'Digifort’s open-platform video management software has been selected for an intelligent surveillance deployment at a major business park, underlining its operational versatility across large, multi-camera environments.',
      'As an MTP-distributed brand, Digifort pairs with the cameras and storage in our CCTV line to deliver a complete, integrator-ready video solution.',
    ],
  },
  {
    slug: 'digifort-7-3-release',
    title: 'Digifort releases VMS version 7.3',
    date: 'Sep 2024',
    iso: '2024-09-01',
    brand: 'digifort',
    excerpt:
      'New camera models, expanded integrations and a redesigned interface built for large-scale enterprise surveillance.',
    body: [
      'The 7.3 release of the Digifort VMS adds new camera-model support and broader device integrations, with an interface refresh aimed at large-scale enterprise surveillance environments.',
      'MTP partners can request the latest release notes and licensing details for project specification.',
    ],
  },
  {
    slug: 'bosch-5g-local-networks',
    title: 'Bosch advances 5G local networks for connected security',
    date: 'Aug 2024',
    iso: '2024-08-01',
    brand: 'bosch',
    excerpt:
      'Bosch views 5G local-area networks as the way forward for industrial security and automation.',
    body: [
      'Bosch continues to invest in 5G local-area networking as a foundation for its next generation of connected security and automation devices.',
      'For integrators, this signals deeper IP-native capability across the Bosch ranges MTP distributes — from video to access and public address.',
    ],
  },
]

export const NEWS_SLUGS = NEWS.map((n) => n.slug)
export const articleBySlug = (slug: string) => NEWS.find((n) => n.slug === slug)
