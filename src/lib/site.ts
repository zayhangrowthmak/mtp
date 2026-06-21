// ─── Global site configuration (content-as-code, CMS-ready) ──────────────────
// Single source of truth for contact, social, navigation and taxonomy. Mirrors
// the schema a headless CMS would hold so it can be swapped in later (Phase 2).

export const SITE = {
  name: 'MTP Distribution',
  legalName: 'MTP Distribution Trading LLC',
  tagline: 'Powered by Technology, Secure by Solution',
  // Production domain (rebuild). Used for canonicals, OG and sitemap.
  baseUrl: 'https://mtpdistribution.com',
  description:
    'MTP Distribution is a Dubai-headquartered Value-Added Distributor of 30+ global security, safety, IT, AI and power brands across seven solution lines in the UAE and Oman.',
}

// CONFIRM-BEFORE-PUBLISH: self-reported metrics (client appendix).
export const STATS = [
  { value: 5, suffix: '+', label: 'Years in Business' },
  { value: 12, suffix: '', label: 'Regions Served' },
  { value: 30, suffix: '+', label: 'Global Brands' },
  { value: 100, suffix: '+', label: 'Projects Delivered' },
]

// CONFIRM: WhatsApp number + that these office details/emails are current.
export const CONTACT = {
  email: 'sales@mtpdistribution.com',
  whatsapp: '971547499407', // wa.me digits — CONFIRM
  brochureUrl: '/downloads/mtp-company-profile.pdf', // CONFIRM / supply PDF
  offices: [
    {
      label: 'UAE Office',
      country: 'United Arab Emirates',
      address: 'Al Mozna Building, Office No.315, Al Nahda Street, Al Qusais 1, PO Box 238958, Dubai',
      phone: '+971 54 749 9407',
      email: 'sales@mtpdistribution.com',
      maps: 'https://maps.google.com/?q=Al+Mozna+Building+Al+Nahda+Al+Qusais+Dubai',
    },
    {
      label: 'Oman Office',
      country: 'Sultanate of Oman',
      address: 'Way No: 4924, Block No: 149, Building: 1/A/2155, Ruwi, Muscat',
      phone: '+968 9545 5970',
      email: 'sales@mtpdistribution.com',
      maps: 'https://maps.google.com/?q=Ruwi+Muscat+Oman',
    },
  ],
}

// CONFIRM: social URLs (LinkedIn is the primary B2B channel).
export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/mtpdistribution/',
  facebook: 'https://www.facebook.com/mtpdistribution/',
  instagram: 'https://www.instagram.com/mtpdistribution/',
}

// ─── Taxonomy: 7 Solutions (official names + slugs per the sitemap) ───────────
// `id` matches the existing SOLUTIONS data (heptagon, catalogs); `slug` is the
// canonical route at /solutions/{slug}. Nav order follows the brief.
export const SOLUTION_NAV = [
  { id: 'cctv', slug: 'cctv-video-surveillance', name: 'CCTV & Video Surveillance', short: 'CCTV & VMS' },
  { id: 'access', slug: 'access-control-intrusion', name: 'Access Control & Intrusion', short: 'Access Control' },
  { id: 'fire', slug: 'fire-alarm-systems', name: 'Fire Alarm & Life Safety', short: 'Fire & Life Safety' },
  { id: 'pa', slug: 'public-address-conference', name: 'Public Address & Conference', short: 'PA / PAVA' },
  { id: 'networking', slug: 'networking-server-storage', name: 'Networking, Server & Storage', short: 'Networking & Storage' },
  { id: 'ibms', slug: 'ibms-psim-control-room', name: 'IBMS, PSIM & Control Room', short: 'IBMS / PSIM' },
  { id: 'ups', slug: 'power-solutions', name: 'Power Solutions', short: 'Power / UPS' },
] as const

export const slugForSolution = (id: string) =>
  SOLUTION_NAV.find((s) => s.id === id)?.slug ?? id

// ─── Taxonomy: 10 Industries ─────────────────────────────────────────────────
export const INDUSTRIES = [
  { slug: 'oil-gas-energy', name: 'Oil, Gas & Energy' },
  { slug: 'government-public-sector', name: 'Government & Public Sector' },
  { slug: 'law-enforcement-defence', name: 'Law Enforcement & Defence' },
  { slug: 'healthcare', name: 'Healthcare' },
  { slug: 'hospitality', name: 'Hospitality' },
  { slug: 'retail', name: 'Retail' },
  { slug: 'transport-infrastructure', name: 'Transport & Infrastructure' },
  { slug: 'banking-finance', name: 'Banking & Finance' },
  { slug: 'data-centres', name: 'Data Centres' },
  { slug: 'education', name: 'Education' },
] as const

// ─── Primary navigation (7 slots + 2 CTA buttons) ────────────────────────────
export const PRIMARY_NAV = [
  {
    label: 'Solutions',
    href: '/solutions',
    children: SOLUTION_NAV.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  { label: 'Brands', href: '/brands' },
  {
    label: 'Industries',
    href: '/industries',
    children: INDUSTRIES.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Events & News', href: '/events-news' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About MTP', href: '/about' },
      { label: 'Why MTP — Value-Added Services', href: '/why-mtp' },
      { label: 'Become a Partner', href: '/partners' },
      { label: 'Resources & Downloads', href: '/resources' },
      { label: 'Careers', href: '/careers' },
    ],
  },
] as const

// Footer column structure.
export const FOOTER_NAV = [
  {
    title: 'Solutions',
    links: SOLUTION_NAV.map((s) => ({ label: s.name, href: `/solutions/${s.slug}` })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About MTP', href: '/about' },
      { label: 'Why MTP', href: '/why-mtp' },
      { label: 'Brands', href: '/brands' },
      { label: 'Industries', href: '/industries' },
      { label: 'Projects', href: '/projects' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Engage',
    links: [
      { label: 'Become a Partner', href: '/partners' },
      { label: 'Events & News', href: '/events-news' },
      { label: 'Resources & Downloads', href: '/resources' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
]

export const waLink = (text?: string) =>
  `https://wa.me/${CONTACT.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`
