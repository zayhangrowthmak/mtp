// ─── Canonical brand registry (24 vendors per the sitemap) ───────────────────
// content-as-code, CMS-ready. `logo` is set only where a file exists in
// /public/brands (others fall back to the brand name). `country` is included
// only where confidently known; '' otherwise (CONFIRM in CMS). `solutions`
// references solution ids and drives the "Brands in this solution" links.

export type Brand = {
  name: string
  slug: string
  logo?: string
  country?: string
  solutions: string[]
  blurb: string
}

export const BRANDS_24: Brand[] = [
  {
    name: 'Bosch',
    slug: 'bosch',
    logo: '/brands/bosch.png',
    country: 'Germany',
    solutions: ['cctv', 'fire', 'pa', 'access'],
    blurb:
      'The anchor of the MTP portfolio — engineering-grade video, fire detection, public address and access control from a global leader.',
  },
  {
    name: 'Mobotix',
    slug: 'mobotix',
    country: 'Germany',
    solutions: ['cctv'],
    blurb: 'Decentralised, cyber-secure IP video systems engineered in Germany for demanding environments.',
  },
  {
    name: 'Milesight',
    slug: 'milesight',
    logo: '/brands/milesight.png',
    country: 'China',
    solutions: ['cctv'],
    blurb: 'AI-driven IP cameras, NVRs and IoT sensing for intelligent surveillance.',
  },
  {
    name: 'Lilin',
    slug: 'lilin',
    logo: '/brands/lilin.png',
    country: 'Taiwan',
    solutions: ['cctv', 'networking'],
    blurb: 'IP cameras, recorders and AI video management with built-in edge storage.',
  },
  {
    name: 'IQSight',
    slug: 'iqsight',
    logo: '/brands/iqsight.jpg',
    solutions: ['cctv'],
    blurb: 'Intelligent video analytics and surveillance software.',
  },
  {
    name: 'Redvision',
    slug: 'redvision',
    logo: '/brands/redvision.jpg',
    country: 'United Kingdom',
    solutions: ['cctv'],
    blurb: 'British-built ruggedised PTZ and specialist cameras for the harshest environments.',
  },
  {
    name: 'Digifort',
    slug: 'digifort',
    logo: '/brands/digifort.jpg',
    country: 'Brazil',
    solutions: ['cctv'],
    blurb: 'Open-platform video management software (VMS) with analytics and ANPR.',
  },
  {
    name: 'Infortrend',
    slug: 'infortrend',
    logo: '/brands/infortrend.png',
    country: 'Taiwan',
    solutions: ['networking'],
    blurb: 'Enterprise SAN/NAS and surveillance-grade storage systems.',
  },
  {
    name: 'V',
    slug: 'v',
    solutions: ['networking'],
    blurb: 'Embedded storage and surveillance recording appliances.',
  },
  {
    name: 'Premiumline',
    slug: 'premiumline',
    logo: '/brands/premiumline.jpg',
    solutions: ['networking'],
    blurb: 'Structured cabling, fibre and networking infrastructure for security and IT.',
  },
  {
    name: 'Atenco',
    slug: 'atenco',
    logo: '/brands/atenco.webp',
    solutions: ['ups'],
    blurb: 'UPS systems, batteries and critical power solutions.',
  },
  {
    name: 'Effekta',
    slug: 'effekta',
    logo: '/brands/effekta.png',
    country: 'Germany',
    solutions: ['ups'],
    blurb: 'UPS, inverters and solar/hybrid power systems from desktop to data centre.',
  },
  {
    name: 'STid',
    slug: 'stid',
    logo: '/brands/stid.png',
    country: 'France',
    solutions: ['access'],
    blurb: 'Secure RFID, NFC and mobile-credential access readers.',
  },
  {
    name: 'Allegion',
    slug: 'allegion',
    logo: '/brands/allegion.svg',
    country: 'Ireland',
    solutions: ['access'],
    blurb: 'Security and access hardware — electronic locks, exit devices and door controls.',
  },
  {
    name: 'Quanika',
    slug: 'quanika',
    logo: '/brands/quanika.png',
    solutions: ['access'],
    blurb: 'Access control and integration software for enterprise security.',
  },
  {
    name: 'XPR',
    slug: 'xpr',
    country: 'Belgium',
    solutions: ['access'],
    blurb: 'Access control readers, controllers and biometric devices.',
  },
  {
    name: 'Wavelynx',
    slug: 'wavelynx',
    logo: '/brands/wavelynx.png',
    country: 'United States',
    solutions: ['access'],
    blurb: 'Multi-technology and mobile-credential access readers.',
  },
  {
    name: 'SAFR',
    slug: 'safr',
    logo: '/brands/safr.png',
    country: 'United States',
    solutions: ['access'],
    blurb: 'AI facial recognition for frictionless, secure access.',
  },
  {
    name: 'Oosto',
    slug: 'oosto',
    logo: '/brands/oosto.png',
    country: 'Israel',
    solutions: ['access'],
    blurb: 'AI vision and facial recognition for access and watchlist security.',
  },
  {
    name: 'OODA World',
    slug: 'ooda-world',
    logo: '/brands/ooda-world.png',
    solutions: ['ibms'],
    blurb: 'PSIM and unified command-and-control software for security operations.',
  },
  {
    name: 'CTF',
    slug: 'ctf',
    logo: '/brands/ctf.jpg',
    solutions: ['ibms'],
    blurb: 'Control-room consoles and technical operator furniture.',
  },
  {
    name: 'WEYTEC',
    slug: 'weytec',
    logo: '/brands/weytec.png',
    country: 'Switzerland',
    solutions: ['ibms'],
    blurb: 'Swiss control-room solutions — KVM, video walls and operator desks.',
  },
  {
    name: 'Technology Desking',
    slug: 'technology-desking',
    solutions: ['ibms'],
    blurb: 'Control-room consoles and ergonomic operator desking.',
  },
  {
    name: 'Planar',
    slug: 'planar',
    logo: '/brands/planar.png',
    country: 'United States',
    solutions: ['ibms'],
    blurb: 'Video walls and visualisation displays for control rooms.',
  },
]

export const brandBySlug = (slug: string) => BRANDS_24.find((b) => b.slug === slug)
export const brandsForSolution = (solutionId: string) =>
  BRANDS_24.filter((b) => b.solutions.includes(solutionId))
