// ─── Projects / case studies (ILLUSTRATIVE SAMPLES) ──────────────────────────
// These are placeholder, illustrative case studies — NOT real client claims.
// Replace each with an approved, permission-cleared case study before launch
// (client appendix: confirm which logos/projects may be published).

export type Project = {
  slug: string
  title: string
  client: string // generic / sector descriptor — no real client claims
  industry: string // industry slug
  solutions: string[] // solution ids
  brands: string[] // brand slugs
  summary: string
  challenge: string
  solution: string
  result: string[]
  sample: true
}

export const PROJECTS: Project[] = [
  {
    slug: 'city-wide-surveillance-program',
    title: 'City-Wide Surveillance Program',
    client: 'Confidential — Government Sector',
    industry: 'government-public-sector',
    solutions: ['cctv', 'ibms', 'networking'],
    brands: ['bosch', 'digifort', 'infortrend'],
    summary: 'A multi-district IP surveillance and command-and-control rollout unifying thousands of cameras under one operating picture.',
    challenge:
      'Disparate legacy systems across districts with no unified view, limited analytics and fragmented storage made coordinated response slow.',
    solution:
      'MTP-distributed IP cameras and an open VMS were deployed over a resilient network, with analytics and ANPR, surveillance-grade storage, and a PSIM control room aggregating every feed.',
    result: [
      'Single pane of glass across districts',
      'Faster incident detection and response',
      'Scalable, redundant storage architecture',
    ],
    sample: true,
  },
  {
    slug: 'energy-facility-perimeter-security',
    title: 'Energy Facility Perimeter Security',
    client: 'Confidential — Energy Sector',
    industry: 'oil-gas-energy',
    solutions: ['cctv', 'fire', 'ups'],
    brands: ['bosch', 'atenco'],
    summary: 'Ruggedised perimeter surveillance and life-safety for a remote, high-consequence energy site.',
    challenge:
      'A large, harsh-environment facility needed reliable perimeter detection, fire safety and uninterrupted power with minimal on-site maintenance.',
    solution:
      'Ruggedised cameras with long-range coverage, an addressable fire system interlocked with site safety, and online UPS protecting critical loads — all sized and commissioned by MTP.',
    result: [
      'Continuous perimeter awareness',
      'Integrated fire and process safety',
      'Resilient 24/7 power protection',
    ],
    sample: true,
  },
  {
    slug: 'airport-pa-and-voice-evacuation',
    title: 'Airport PA & Voice Evacuation',
    client: 'Confidential — Transport Sector',
    industry: 'transport-infrastructure',
    solutions: ['pa', 'fire'],
    brands: ['bosch'],
    summary: 'An IP public-address and EN 54 voice-evacuation system for a high-traffic transport hub.',
    challenge:
      'Clear, zoned announcements and compliant voice evacuation were required across a large, acoustically complex terminal.',
    solution:
      'A networked IP PA/PAVA platform with supervised amplifiers, call stations and EN 54 loudspeakers, interfaced with the fire alarm for automated evacuation messaging.',
    result: [
      'Intelligible, zoned announcements',
      'Compliant voice evacuation',
      'Centralised, supervised control',
    ],
    sample: true,
  },
  {
    slug: 'bank-branch-network-security',
    title: 'Bank Branch Network Security',
    client: 'Confidential — Banking Sector',
    industry: 'banking-finance',
    solutions: ['cctv', 'access', 'ups'],
    brands: ['milesight', 'stid', 'effekta'],
    summary: 'Standardised surveillance, access control and power protection across a branch network.',
    challenge:
      'A multi-branch network needed consistent security, strong access control and audit-ready records under strict compliance.',
    solution:
      'AI-capable cameras, secure card and mobile access readers, and online UPS were standardised across branches with centralised monitoring.',
    result: [
      'Consistent security per branch',
      'Audit-ready access records',
      'Uninterrupted branch operations',
    ],
    sample: true,
  },
  {
    slug: 'hospital-access-and-life-safety',
    title: 'Hospital Access & Life Safety',
    client: 'Confidential — Healthcare Sector',
    industry: 'healthcare',
    solutions: ['access', 'fire', 'pa'],
    brands: ['bosch', 'allegion'],
    summary: 'Controlled access, fire detection and voice evacuation for a busy hospital campus.',
    challenge:
      'Sensitive areas needed controlled access, while life-safety required fast detection and clear, guided evacuation without disrupting care.',
    solution:
      'Access control on wards, pharmacy and records with electronic locking, an addressable fire system and voice evacuation tuned for clear, calm guidance.',
    result: [
      'Restricted access to sensitive zones',
      'Fast, supervised fire detection',
      'Clear, guided evacuation',
    ],
    sample: true,
  },
  {
    slug: 'data-centre-physical-security',
    title: 'Data Centre Physical Security',
    client: 'Confidential — Data Centre Operator',
    industry: 'data-centres',
    solutions: ['access', 'cctv', 'ups', 'ibms'],
    brands: ['wavelynx', 'planar', 'effekta'],
    summary: 'Multi-layer access, surveillance and power monitoring for a critical data-centre facility.',
    challenge:
      'Uptime and security demanded layered access, full surveillance coverage and constant visibility of power and environment.',
    solution:
      'Multi-technology access readers with biometrics, aisle and perimeter cameras, redundant UPS, and a control-room video wall aggregating power, environment and security.',
    result: [
      'Layered, auditable access',
      'Full surveillance coverage',
      'Constant power & environment visibility',
    ],
    sample: true,
  },
]

export const PROJECT_SLUGS = PROJECTS.map((p) => p.slug)
export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug)
