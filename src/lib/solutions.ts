// ─── Solution detail content model ───────────────────────────────────────────
// Joins SOLUTION_NAV (names/slugs) + SOLUTIONS (copy/features/colour) +
// CATALOGS (featured products) + brands + per-solution applications/integration.

import { SOLUTION_NAV, INDUSTRIES } from './site'
import { SOLUTIONS, CATALOGS } from './data'
import { brandsForSolution } from './brands'

type Extra = {
  overview: string
  applications: string[] // industry slugs
  integration: string[] // related solution ids
}

const EXTRAS: Record<string, Extra> = {
  cctv: {
    overview:
      'IP video surveillance has evolved from passive recording into intelligent systems that detect events and behaviour in real time. MTP delivers end-to-end video — cameras, VMS, ANPR, analytics and high-density storage — from leading vendors, engineered to work as one and to integrate with access control, intrusion and PSIM.',
    applications: ['retail', 'transport-infrastructure', 'government-public-sector', 'oil-gas-energy', 'banking-finance', 'data-centres'],
    integration: ['access', 'networking', 'ibms'],
  },
  access: {
    overview:
      'Modern access control protects people and assets by governing who goes where — and recording it. MTP supplies smart-card and mobile readers, IP controllers, biometric and AI face recognition, electronic locking and intrusion, integrated seamlessly with CCTV, fire and time-and-attendance.',
    applications: ['government-public-sector', 'banking-finance', 'healthcare', 'data-centres', 'education', 'hospitality'],
    integration: ['cctv', 'fire', 'ibms'],
  },
  fire: {
    overview:
      'Addressable fire detection safeguards life and property through fast detection, clear annunciation and guided egress. MTP distributes addressable panels, loop-wired detectors and notification devices that interlock with BMS for elevator recall, HVAC shutoff and door release — and tie into PA/PAVA for voice evacuation.',
    applications: ['oil-gas-energy', 'healthcare', 'hospitality', 'education', 'government-public-sector'],
    integration: ['pa', 'ibms'],
  },
  pa: {
    overview:
      'Public address and voice-alarm systems direct people calmly and safely, especially in an emergency. MTP supplies IP-based controllers, amplifiers, call stations and EN 54-certified speakers for facility-wide announcement, background music and voice evacuation that interfaces with fire alarm and BMS.',
    applications: ['transport-infrastructure', 'education', 'hospitality', 'healthcare', 'government-public-sector'],
    integration: ['fire', 'ibms'],
  },
  networking: {
    overview:
      'Every security system runs on a network and writes to storage. MTP solves the storage-and-bandwidth pain point with surveillance-grade SAN/NAS, RAID and edge appliances, industrial switching, fibre and structured cabling — the resilient backbone behind video, access and PSIM.',
    applications: ['data-centres', 'government-public-sector', 'banking-finance', 'transport-infrastructure'],
    integration: ['cctv', 'ibms'],
  },
  ibms: {
    overview:
      'At the top of the stack, IBMS, PSIM and the control room unify every subsystem into a single operating picture. MTP delivers command-and-control software, video walls, KVM and operator consoles that aggregate CCTV, access, fire, PA and power into coordinated situational awareness.',
    applications: ['government-public-sector', 'law-enforcement-defence', 'oil-gas-energy', 'transport-infrastructure', 'data-centres'],
    integration: ['cctv', 'access', 'fire', 'pa', 'ups'],
  },
  ups: {
    overview:
      'Critical power underpins every other line — cameras, controllers, network gear and control rooms all depend on it. MTP supplies UPS, battery banks, solar and data-centre power from desktop units to large industrial installations, with sizing and on-site preventive maintenance.',
    applications: ['data-centres', 'banking-finance', 'healthcare', 'oil-gas-energy', 'government-public-sector'],
    integration: ['cctv', 'networking', 'ibms'],
  },
}

const industryBySlug = (slug: string) => INDUSTRIES.find((i) => i.slug === slug)

export const SOLUTION_SLUGS = SOLUTION_NAV.map((s) => s.slug)

export function getSolution(slug: string) {
  const nav = SOLUTION_NAV.find((s) => s.slug === slug)
  if (!nav) return null
  const base = SOLUTIONS.find((s) => s.id === nav.id)
  const extra = EXTRAS[nav.id]
  if (!base || !extra) return null

  return {
    id: nav.id,
    slug: nav.slug,
    name: nav.name,
    short: nav.short,
    color: base.color,
    dotColor: base.dotColor,
    tagline: base.description,
    overview: extra.overview,
    capabilities: base.features as string[],
    catalog: CATALOGS[nav.id] ?? null,
    brands: brandsForSolution(nav.id),
    applications: extra.applications.map(industryBySlug).filter(Boolean) as { slug: string; name: string }[],
    integration: extra.integration
      .map((id) => SOLUTION_NAV.find((s) => s.id === id))
      .filter(Boolean) as { id: string; slug: string; name: string; short: string }[],
  }
}

export type SolutionDetail = NonNullable<ReturnType<typeof getSolution>>
