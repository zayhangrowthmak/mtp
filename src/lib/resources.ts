// ─── Resources / Downloads library ───────────────────────────────────────────
// CMS-ready. Items with a real `href` open/download directly; others are
// marked on-request (route to Contact). `file` flags a downloadable asset.
// Some entries are placeholders pending the brand's official PDFs.

export type ResourceType = 'brochure' | 'datasheet' | 'catalog' | 'whitepaper'

export type Resource = {
  title: string
  type: ResourceType
  solution?: string // solution id
  brand?: string // brand slug
  href?: string // direct URL (external datasheet / internal file)
  onRequest?: boolean
}

export const RESOURCE_TYPES: { id: ResourceType | 'all'; label: string }[] = [
  { id: 'all', label: 'All resources' },
  { id: 'brochure', label: 'Brochures' },
  { id: 'datasheet', label: 'Datasheets' },
  { id: 'catalog', label: 'Catalogs' },
  { id: 'whitepaper', label: 'Whitepapers' },
]

export const RESOURCES: Resource[] = [
  { title: 'MTP Company Profile', type: 'brochure', href: '/downloads/mtp-company-profile.pdf', onRequest: true },
  { title: 'Solutions Overview Brochure', type: 'brochure', onRequest: true },
  {
    title: 'Milesight AI Pro Bullet — Datasheet',
    type: 'datasheet',
    solution: 'cctv',
    brand: 'milesight',
    href: 'https://resource.milesight.com/milesight/security/document/datasheet/ipc/series-e/milesight-ai-motorized-pro-bullet-network-camera-ndaa-e-datasheet-en.pdf',
  },
  {
    title: 'Bosch FLEXIDOME 5100i — Product Info',
    type: 'datasheet',
    solution: 'cctv',
    brand: 'bosch',
    href: 'https://www.boschsecurity.com/xm/en/news/product-news/flexidome-5100i/',
  },
  { title: 'CCTV & Video Surveillance — Line Card', type: 'catalog', solution: 'cctv', onRequest: true },
  { title: 'Access Control & Intrusion — Line Card', type: 'catalog', solution: 'access', onRequest: true },
  { title: 'Fire Alarm & Life Safety — Line Card', type: 'catalog', solution: 'fire', onRequest: true },
  { title: 'Networking, Server & Storage — Line Card', type: 'catalog', solution: 'networking', onRequest: true },
  { title: 'IBMS, PSIM & Control Room — Line Card', type: 'catalog', solution: 'ibms', onRequest: true },
  { title: 'Power Solutions (UPS) — Line Card', type: 'catalog', solution: 'ups', onRequest: true },
  { title: 'Public Address & Conference — Line Card', type: 'catalog', solution: 'pa', onRequest: true },
  { title: 'Integrated Security: A Value-Added Approach', type: 'whitepaper', onRequest: true },
]
