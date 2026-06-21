// ─── Industry detail content model ───────────────────────────────────────────
// Joins the INDUSTRIES taxonomy with per-vertical challenge copy and the
// solution lines MTP recommends for it. Factual, neutral copy.

import { INDUSTRIES, SOLUTION_NAV } from './site'

type IndustryContent = {
  tagline: string
  challenges: string[]
  solutions: string[] // solution ids
}

const CONTENT: Record<string, IndustryContent> = {
  'oil-gas-energy': {
    tagline: 'Protecting remote, high-consequence assets across vast and hazardous sites.',
    challenges: [
      'Perimeter and remote-site surveillance over large areas',
      'Ruggedised, harsh-environment equipment',
      'Integration of fire, gas and process safety',
      'Uninterrupted power for critical operations',
      'Compliance with energy-sector safety standards',
    ],
    solutions: ['cctv', 'fire', 'ibms', 'ups', 'networking'],
  },
  'government-public-sector': {
    tagline: 'Securing public buildings, critical infrastructure and citizen services.',
    challenges: [
      'City-wide and facility surveillance',
      'Controlled access to sensitive areas',
      'Command-and-control across multiple sites',
      'Resilient, sovereign-grade infrastructure',
      'Audit trails and compliance',
    ],
    solutions: ['cctv', 'access', 'ibms', 'pa', 'networking'],
  },
  'law-enforcement-defence': {
    tagline: 'Mission-critical surveillance, identity and command for defence and policing.',
    challenges: [
      'AI-assisted video and face recognition',
      'Hardened access and intrusion detection',
      'Real-time command-and-control (PSIM)',
      'Evidence-grade recording and storage',
      '24/7 power resilience',
    ],
    solutions: ['cctv', 'access', 'ibms', 'networking', 'ups'],
  },
  healthcare: {
    tagline: 'Patient safety, asset protection and life-safety across busy facilities.',
    challenges: [
      'Controlled access to wards, pharmacy and records',
      'Infant and asset protection',
      'Fire detection and voice evacuation',
      'Reliable power for critical care',
      'Privacy-aware surveillance',
    ],
    solutions: ['access', 'fire', 'pa', 'cctv', 'ups'],
  },
  hospitality: {
    tagline: 'Guest safety and a seamless experience, without compromising comfort.',
    challenges: [
      'Discreet surveillance of public areas',
      'Guest-room and back-of-house access',
      'Fire safety and clear evacuation',
      'Background music and paging',
      'Reliable IT and power',
    ],
    solutions: ['cctv', 'access', 'fire', 'pa', 'networking'],
  },
  retail: {
    tagline: 'Loss prevention, customer insight and safety across every store.',
    challenges: [
      'Theft deterrence and incident review',
      'People-counting and video analytics',
      'Access to stockrooms and cash offices',
      'Public address and in-store music',
      'Centralised multi-site monitoring',
    ],
    solutions: ['cctv', 'access', 'pa', 'networking', 'ibms'],
  },
  'transport-infrastructure': {
    tagline: 'Safety and flow across airports, metro, ports and roads.',
    challenges: [
      'Wide-area and ANPR surveillance',
      'Public address and voice evacuation',
      'Access control across zones',
      'Resilient networking and storage',
      'Unified control-room operations',
    ],
    solutions: ['cctv', 'pa', 'access', 'networking', 'ibms'],
  },
  'banking-finance': {
    tagline: 'Protecting branches, data and people under strict compliance.',
    challenges: [
      'ATM, branch and vault surveillance',
      'Strong access control and intrusion',
      'Data-centre-grade storage',
      'Uninterrupted power',
      'Audit and compliance reporting',
    ],
    solutions: ['cctv', 'access', 'networking', 'ups', 'ibms'],
  },
  'data-centres': {
    tagline: 'Physical security and uptime for the facilities that run everything.',
    challenges: [
      'Multi-layer access control and biometrics',
      'Aisle and perimeter surveillance',
      'Environmental and power monitoring',
      'Redundant UPS and critical power',
      'Rack-level integration',
    ],
    solutions: ['access', 'cctv', 'ups', 'networking', 'ibms'],
  },
  education: {
    tagline: 'Safe, open campuses that protect students and staff.',
    challenges: [
      'Campus surveillance and visitor management',
      'Lockdown-capable access control',
      'Fire safety and mass notification',
      'Reliable campus networking',
      'Cost-effective scalability',
    ],
    solutions: ['cctv', 'access', 'fire', 'pa', 'networking'],
  },
}

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug)

export function getIndustry(slug: string) {
  const base = INDUSTRIES.find((i) => i.slug === slug)
  const content = CONTENT[slug]
  if (!base || !content) return null
  return {
    slug: base.slug,
    name: base.name,
    tagline: content.tagline,
    challenges: content.challenges,
    solutions: content.solutions
      .map((id) => SOLUTION_NAV.find((s) => s.id === id))
      .filter(Boolean) as { id: string; slug: string; name: string; short: string }[],
  }
}

export type IndustryDetail = NonNullable<ReturnType<typeof getIndustry>>
