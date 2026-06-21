// ─── Events (ILLUSTRATIVE SAMPLES) ───────────────────────────────────────────
// Placeholder events demonstrating the hub/registration format — NOT a confirmed
// schedule. Replace with MTP's real events (and confirm participation) via CMS.

export type EventType = 'exhibition' | 'webinar' | 'training' | 'roadshow'

export type MtpEvent = {
  slug: string
  title: string
  type: EventType
  date: string // display date
  iso: string // sortable ISO date
  location: string
  status: 'upcoming' | 'past'
  summary: string
  body: string
  agenda?: string[]
  sample: true
}

export const EVENTS: MtpEvent[] = [
  {
    slug: 'intersec-dubai-2027',
    title: 'Meet MTP at Intersec Dubai',
    type: 'exhibition',
    date: 'Jan 2027',
    iso: '2027-01-19',
    location: 'Dubai World Trade Centre, UAE',
    status: 'upcoming',
    summary: 'Visit the MTP stand to see our full multi-brand security and infrastructure portfolio live.',
    body:
      'Intersec is the region’s largest security, safety and fire exhibition. The MTP team will be on hand to demonstrate solutions across CCTV, access control, fire, PA, networking, PSIM and power — and to discuss partnership opportunities with system integrators.',
    agenda: ['Live solution demonstrations', 'Meet the brand specialists', 'Partner programme briefings'],
    sample: true,
  },
  {
    slug: 'bosch-solutions-webinar',
    title: 'Bosch Video & Analytics — Online Briefing',
    type: 'webinar',
    date: 'Sep 2026',
    iso: '2026-09-15',
    location: 'Online',
    status: 'upcoming',
    summary: 'A technical webinar on the latest Bosch camera ranges and built-in video analytics.',
    body:
      'Join MTP and Bosch specialists for a technical session covering the FLEXIDOME, DINION and AUTODOME ranges, Intelligent Video Analytics, and how to size and integrate them into a project. Open to integrator partners.',
    agenda: ['Camera range overview', 'Analytics deep-dive', 'Integration & sizing', 'Live Q&A'],
    sample: true,
  },
  {
    slug: 'access-control-certification',
    title: 'Access Control Certification Training',
    type: 'training',
    date: 'Oct 2026',
    iso: '2026-10-06',
    location: 'MTP Dubai Office, UAE',
    status: 'upcoming',
    summary: 'Hands-on certification for integrators on access control design, install and commissioning.',
    body:
      'A two-day, hands-on training course for integrator partners covering access control design, installation and commissioning across the brands MTP carries — building tender-eligibility and certification.',
    agenda: ['System design fundamentals', 'Reader & controller configuration', 'Integration with CCTV & fire', 'Certification assessment'],
    sample: true,
  },
  {
    slug: 'oman-partner-roadshow',
    title: 'Oman Partner Roadshow',
    type: 'roadshow',
    date: 'Mar 2026',
    iso: '2026-03-10',
    location: 'Muscat, Oman',
    status: 'past',
    summary: 'A regional roadshow showcasing MTP solutions to integrators across the Sultanate.',
    body:
      'MTP brought its multi-brand portfolio to integrators across Oman, with live demonstrations, brand briefings and one-to-one project consultations.',
    sample: true,
  },
  {
    slug: 'security-technology-day',
    title: 'Security Technology Day',
    type: 'exhibition',
    date: 'Nov 2025',
    iso: '2025-11-12',
    location: 'Dubai, UAE',
    status: 'past',
    summary: 'An MTP showcase day spanning AI video, PSIM and control-room technologies.',
    body:
      'A focused showcase of MTP’s up-the-stack lines — AI video analytics, face recognition, PSIM and control-room visualisation — for end-users and integrator partners.',
    sample: true,
  },
]

export const EVENT_SLUGS = EVENTS.map((e) => e.slug)
export const eventBySlug = (slug: string) => EVENTS.find((e) => e.slug === slug)
export const upcomingEvents = () => EVENTS.filter((e) => e.status === 'upcoming')
export const pastEvents = () => EVENTS.filter((e) => e.status === 'past')
