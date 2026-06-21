import { Cctv, DoorOpen, Flame, Volume2, Wifi, Building2, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Solution id → icon. Shared by the header, hub cards and catalog.
export const SOLUTION_ICON: Record<string, LucideIcon> = {
  cctv: Cctv,
  access: DoorOpen,
  fire: Flame,
  pa: Volume2,
  networking: Wifi,
  ibms: Building2,
  ups: Zap,
}
