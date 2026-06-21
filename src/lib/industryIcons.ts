import {
  Factory,
  Landmark,
  ShieldCheck,
  HeartPulse,
  Hotel,
  Store,
  TrainFront,
  Banknote,
  Server,
  GraduationCap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Industry slug → icon. Shared by the hub, detail pages and homepage.
export const INDUSTRY_ICON: Record<string, LucideIcon> = {
  'oil-gas-energy': Factory,
  'government-public-sector': Landmark,
  'law-enforcement-defence': ShieldCheck,
  healthcare: HeartPulse,
  hospitality: Hotel,
  retail: Store,
  'transport-infrastructure': TrainFront,
  'banking-finance': Banknote,
  'data-centres': Server,
  education: GraduationCap,
}
