// Category-level product families per solution line. Factual, high-level — used
// on brand detail pages to describe what MTP distributes (no fabricated models).

import { SOLUTION_NAV } from './site'
import type { Brand } from './brands'

export const SOLUTION_FAMILIES: Record<string, string[]> = {
  cctv: ['IP cameras — dome, bullet & PTZ', 'Recorders & video management (VMS)', 'Video analytics & ANPR', 'Storage & surveillance accessories'],
  access: ['Smart-card & mobile readers', 'IP access controllers', 'Biometric & face recognition', 'Electronic locking & intrusion'],
  fire: ['Addressable control panels (FACP)', 'Detectors & field devices', 'Notification appliances'],
  pa: ['IP controllers & routers', 'Mixing amplifiers', 'Call stations', 'EN 54 loudspeakers'],
  networking: ['Surveillance storage (SAN / NAS / RAID)', 'Industrial switching & PoE', 'Fibre & structured cabling'],
  ibms: ['PSIM / command & control', 'Video walls & visualisation', 'Operator consoles & KVM'],
  ups: ['Online UPS systems', 'Battery banks', 'Solar & hybrid power'],
}

// Product families for a brand, grouped by the solution lines it serves.
export function familiesForBrand(brand: Brand) {
  return brand.solutions
    .map((id) => {
      const nav = SOLUTION_NAV.find((s) => s.id === id)
      return nav ? { id, name: nav.name, slug: nav.slug, families: SOLUTION_FAMILIES[id] ?? [] } : null
    })
    .filter(Boolean) as { id: string; name: string; slug: string; families: string[] }[]
}
