'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOLUTIONS, BRANDS, CATALOGS } from '@/lib/data'
import type { CatalogMeta } from '@/lib/data'
import { CheckCircle2, Cctv, Flame, Wifi, Volume2, DoorOpen, Building2, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

// Category → icon + accent color, used as the product thumbnail fallback.
const CATEGORY_ICON: Record<string, LucideIcon> = {
  fire: Flame,
  cctv: Cctv,
  networking: Wifi,
  pa: Volume2,
  access: DoorOpen,
  ibms: Building2,
  ups: Zap,
}

// Brand name → logo path, sourced from the same data as the Brands page.
const LOGO_BY_NAME: Record<string, string> = Object.fromEntries(
  BRANDS.map((b) => [b.name, b.logo]),
)

// ─── Category Tab Strip ───────────────────────────────────────────────────────
function CategoryTabs({
  active,
  onSelect,
}: {
  active: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="sticky top-16 z-30 bg-white border-b border-[#E2ECF8] shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex overflow-x-auto hide-scrollbar">
          {SOLUTIONS.map((sol) => {
            const isActive = sol.id === active
            return (
              <button
                key={sol.id}
                onClick={() => onSelect(sol.id)}
                className={`flex flex-col items-center gap-1.5 px-5 py-3.5 flex-shrink-0 border-b-2 transition-all duration-200 ${
                  isActive
                    ? 'border-[#0D1B3E] text-[#0D1B3E]'
                    : 'border-transparent text-[#94A3B8] hover:text-[#4A5568]'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: sol.dotColor }}
                />
                <span className="text-[10px] font-semibold tracking-wide whitespace-nowrap uppercase">
                  {sol.shortLabel}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ─── Architecture Diagram per category ───────────────────────────────────────
function ArchDiagram({ id, color }: { id: string; color: string }) {
  const DIAGRAMS: Record<string, React.ReactNode> = {
    fire: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Fire Alarm Control Panel (FACP)
        </div>
        <div className="w-px h-6 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['Smoke Detector', 'Heat Detector', 'Call Point', 'Sounder / Beacon'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium text-center">
              {d}
            </div>
          ))}
        </div>
        <div className="w-px h-4 bg-[#E2ECF8]" />
        <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-4 py-2 text-[10px] text-[#4A5568]">
          BMS Integration → Elevator Recall · HVAC Shutoff · Door Release
        </div>
      </div>
    ),
    cctv: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Monitoring Center / VMS
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-4 py-2 text-[10px] text-[#4A5568]">
          Internet / LAN Network
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['IP Cameras (IPC/PTZ)', 'NVR / NAS Storage', 'AI Analytics Engine', 'ANPR Module'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium text-center">
              {d}
            </div>
          ))}
        </div>
      </div>
    ),
    networking: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Core / Distribution Switch
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['Access Switches', 'Fiber Panels', 'PoE Injectors', 'Industrial Cabinets'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium">
              {d}
            </div>
          ))}
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-4 py-2 text-[10px] text-[#4A5568]">
          SAN / RAID Storage Arrays — Surveillance-grade
        </div>
      </div>
    ),
    pa: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Digital IP Controller / Router
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['Call Station', 'Mixing Amplifier', 'Ceiling Speakers', 'Horn Speakers'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium">
              {d}
            </div>
          ))}
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-4 py-2 text-[10px] text-[#4A5568]">
          Fire Alarm Interface · BMS Dry Contact Input
        </div>
      </div>
    ),
    access: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Access Control Software
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['IP Controller', 'Card / RFID Reader', 'Biometric / Face Reader', 'Electric Lock'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium">
              {d}
            </div>
          ))}
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-4 py-2 text-[10px] text-[#4A5568]">
          CCTV Integration · Fire Door Release · Time Attendance
        </div>
      </div>
    ),
    ibms: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Unified IBMS Dashboard
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['HVAC Control', 'Lighting Mgmt', 'Energy Monitoring', 'Water Mgmt', 'Environmental'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium">
              {d}
            </div>
          ))}
        </div>
      </div>
    ),
    ups: (
      <div className="flex flex-col items-center gap-4 text-xs">
        <div className="bg-[#0D1B3E] text-white text-[10px] font-semibold px-6 py-2 rounded">
          Critical Power Distribution Unit
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="flex gap-4 flex-wrap justify-center">
          {['UPS System', 'Battery Bank', 'Solar Input', 'Bypass Module'].map((d) => (
            <div key={d} className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-3 py-2 text-[10px] text-[#0D1B3E] font-medium">
              {d}
            </div>
          ))}
        </div>
        <div className="w-px h-5 bg-[#E2ECF8]" />
        <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded px-4 py-2 text-[10px] text-[#4A5568]">
          Protected loads: Servers · Cameras · Network Gear · Alarms
        </div>
      </div>
    ),
  }
  return (
    <div className="bg-[#F4F8FF] border border-[#E2ECF8] rounded-xl p-6">
      <p className="text-[#94A3B8] text-[10px] uppercase tracking-widest font-semibold mb-5">
        System Architecture
      </p>
      {DIAGRAMS[id] ?? (
        <p className="text-[#94A3B8] text-xs">Architecture diagram coming soon.</p>
      )}
    </div>
  )
}

// ─── Brand hover product card ─────────────────────────────────────────────────
const BRAND_PRODUCTS: Record<string, Record<string, string[]>> = {
  Bosch: {
    fire: ['FPA-5000 Modular Panel', 'FAP-421 Addressable Detector', 'FLM-420-O4-EN Sounder', 'LSN Improved Loop'],
    cctv: ['FLEXIDOME 5100i', 'AUTODOME 7000i PTZ', 'MIC inteox 7100i', 'DIVAR IP 6000'],
    pa:   ['Praesideo Digital PA', 'LBB 1956 Call Station', 'LA2-UL60E Amplifier', 'LA-250C Column Speaker'],
    access: ['AMC2 IP Controller', 'ARD-SELECT-W Reader', 'DS150 Door Station', 'AMAX Intrusion Panel'],
    ibms: ['Building Integration System (BIS)', 'Bosch Video Management System', 'Energy Management'],
  },
  Digifort: {
    cctv: ['Digifort Enterprise VMS', 'Digifort Standard VMS', 'Video Analytics Module', 'ANPR License Plate Recognition', 'Digifort Mobile App'],
  },
  Milesight: {
    cctv: ['AI Pro Bullet Camera', 'AI Pro Dome Camera', '4K Vandal-Proof Dome', 'AI PTZ Network Camera', 'LPR Camera'],
  },
  Mobotix: {
    cctv: ['M73 Outdoor Camera', 'Q71 Hemispheric Camera', 'MxBell Video Doorbell', 'MxDisplay+ Terminal'],
  },
  Lilin: {
    cctv: ['NDR Series NVR', '4K H.265 Bullet Camera', 'IMR IP Dome Camera'],
    networking: ['PoE Switches', 'NVR Storage Appliances'],
  },
  Infortrend: {
    networking: ['EonStor GSe RAID', 'EonNAS Pro NAS', 'GS Series SAN', 'EonServ NVR'],
  },
  STid: {
    access: ['ARC D Bluetooth Reader', 'SPECTRE X NFC Reader', 'MOBILE ACCESS App', 'UHF Long-Range Reader'],
  },
  Quanika: {
    access: ['Quanika Building Access', 'Quanika Visitor Management', 'Quanika Mobile Credential'],
  },
  Allegion: {
    access: ['SARGENT Electronic Lock', 'LCN Door Closer', 'Schlage Wireless Lock', 'AD Series Access HW'],
  },
  Wavelynx: {
    access: ['Ethos Reader', 'Ethos Multi-Tech Reader', 'Mobile Credential Platform'],
  },
  SAFR: {
    access: ['SAFR SCAN Kiosk', 'SAFR Platform License', 'SAFR Watchlist Alert'],
  },
  Oosto: {
    access: ['OnVision Platform', 'Vision AI Edge Device', 'AwareID Identity'],
  },
  Atenco: {
    ups: ['Atenco Rack UPS 1–10 kVA', 'Atenco Tower UPS 3 kVA', 'Atenco Three-Phase 10–80 kVA'],
  },
  Effekta: {
    ups: ['Effekta MH Online UPS', 'Effekta MTD Three-Phase', 'Effekta SRM Solar Inverter'],
  },
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// A single product row — real photo if one exists at
// /products/<brand-slug>/<product-slug>.jpg, otherwise a color-matched category
// icon, so every product always has a clean visual (never a broken image).
function ProductRow({
  brandSlug,
  name,
  categoryId,
  color,
}: {
  brandSlug: string
  name: string
  categoryId: string
  color: string
}) {
  const [imgOk, setImgOk] = useState(false)
  const src = `/products/${brandSlug}/${slugify(name)}.jpg`
  const Icon = CATEGORY_ICON[categoryId] ?? Cctv

  useEffect(() => {
    let active = true
    const probe = new window.Image()
    probe.onload = () => active && setImgOk(true)
    probe.onerror = () => active && setImgOk(false)
    probe.src = src
    return () => {
      active = false
    }
  }, [src])

  return (
    <li className="flex items-center gap-3">
      {imgOk ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={name}
          loading="lazy"
          className="w-11 h-11 rounded-md object-contain bg-white border border-[#E2ECF8] p-1 flex-shrink-0"
        />
      ) : (
        <span
          className="w-11 h-11 rounded-md flex items-center justify-center flex-shrink-0"
          style={{ background: `${color}14`, border: `1px solid ${color}33` }}
        >
          <Icon size={18} style={{ color }} strokeWidth={1.8} />
        </span>
      )}
      <span className="text-xs text-[#0D1B3E] leading-snug">{name}</span>
    </li>
  )
}

function BrandCard({ brandName, categoryId }: { brandName: string; categoryId: string }) {
  const [open, setOpen] = useState(false)
  const [logoOk, setLogoOk] = useState(false)
  const logo = LOGO_BY_NAME[brandName]
  const products = BRAND_PRODUCTS[brandName]?.[categoryId] ?? []

  useEffect(() => {
    if (!logo) {
      setLogoOk(false)
      return
    }
    let active = true
    const probe = new window.Image()
    probe.onload = () => active && setLogoOk(true)
    probe.onerror = () => active && setLogoOk(false)
    probe.src = logo
    return () => {
      active = false
    }
  }, [logo])

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={`flex items-center justify-center h-16 w-40 bg-white border rounded-lg px-5 transition-all duration-200 cursor-default ${
          open
            ? 'border-[#0D1B3E] shadow-[0_6px_22px_-8px_rgba(13,27,62,0.25)]'
            : 'border-[#E2ECF8] hover:border-[#0D1B3E]/40'
        }`}
      >
        {logoOk ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={logo}
            alt={`${brandName} logo`}
            className="max-h-9 max-w-[88%] w-auto object-contain mix-blend-multiply"
          />
        ) : (
          <span className="text-sm font-semibold text-[#0D1B3E]">{brandName}</span>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 left-0 top-full mt-1.5 bg-white border border-[#E2ECF8] rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto"
          >
            {products.length > 0 ? (
              <>
                <p className="text-[10px] text-[#94A3B8] uppercase tracking-widest font-semibold mb-3">
                  Products in this category
                </p>
                <ul className="space-y-2.5">
                  {products.map((p) => (
                    <ProductRow
                      key={p}
                      brandSlug={slugify(brandName)}
                      name={p}
                      categoryId={categoryId}
                      color={SOLUTIONS.find((s) => s.id === categoryId)?.dotColor ?? '#00B4C8'}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-[#94A3B8] text-xs">Contact us for product details.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ─── Category catalog — grouped products with headline spec tables ────────────
function CategoryCatalog({ meta, categoryId }: { meta: CatalogMeta; categoryId: string }) {
  const Icon = CATEGORY_ICON[categoryId] ?? Cctv
  const groups = Array.from(new Set(meta.items.map((it) => it.group)))

  return (
    <div className="bg-white border-t border-[#E2ECF8]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2.5 mb-3">
          <Icon size={16} className="text-[#00B4C8]" />
          <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">
            {meta.eyebrow}
          </span>
        </div>
        <h3 className="text-[#0D1B3E] text-2xl lg:text-3xl font-semibold tracking-tight mb-2">
          {meta.title}
        </h3>
        <p className="text-[#94A3B8] text-sm mb-10 max-w-2xl">{meta.blurb}</p>

        {groups.map((group) => {
          const items = meta.items.filter((it) => it.group === group)
          return (
            <div key={group} className="mb-12 last:mb-0">
              <div className="flex items-center gap-4 mb-5">
                <h4 className="text-[#0D1B3E] font-semibold text-lg tracking-tight">{group}</h4>
                <span className="h-px flex-1 bg-[#E2ECF8]" />
                <span className="text-[#94A3B8] text-xs font-medium">
                  {items.length} {items.length === 1 ? 'product' : 'products'}
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                    className="bg-white border border-[#E2ECF8] rounded-xl p-5 hover:border-[#00B4C8]/50 hover:shadow-[0_8px_28px_-10px_rgba(13,27,62,0.18)] transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <h5 className="text-[#0D1B3E] font-semibold text-sm leading-tight">{item.name}</h5>
                        <p className="text-[#94A3B8] text-[11px] mt-0.5">{item.form}</p>
                      </div>
                      <span className="w-8 h-8 rounded-lg bg-[#F4F8FF] flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-[#0D1B3E]" />
                      </span>
                    </div>
                    <table className="w-full">
                      <tbody>
                        {item.specs.map((s) => (
                          <tr key={s.label} className="border-t border-[#F0F5FB]">
                            <td className="py-1.5 pr-3 text-[#94A3B8] text-[11px] whitespace-nowrap align-top">
                              {s.label}
                            </td>
                            <td className="py-1.5 text-[#0D1B3E] text-[11px] font-medium text-right">
                              {s.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Solutions Page ───────────────────────────────────────────────────────────
export default function SolutionsPage() {
  const [activeId, setActiveId] = useState(SOLUTIONS[0].id)
  const active = SOLUTIONS.find((s) => s.id === activeId)!

  const contentRef = useRef<HTMLDivElement>(null)

  function handleSelect(id: string) {
    setActiveId(id)
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-[#0D1B3E] pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-6 h-px bg-[#00B4C8]" />
              <span className="text-[#00B4C8] text-xs font-semibold tracking-widest uppercase">Solutions</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-semibold tracking-tight">
              Powered By Technology,
              <br />
              <span className="text-[#00B4C8]">Secure By Solutions</span>
            </h1>
          </div>

          {/* Animated category icon — pops in with a color-tinted glow on tab change */}
          <div className="relative hidden md:flex items-center justify-center w-72 h-44 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="relative flex items-center justify-center"
              >
                {/* Color glow */}
                <motion.div
                  className="absolute w-56 h-56 rounded-full blur-3xl"
                  style={{ background: `radial-gradient(circle, ${active.dotColor}66, transparent 70%)` }}
                  animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                {(() => {
                  const ActiveIcon = CATEGORY_ICON[active.id] ?? Cctv
                  return (
                    <ActiveIcon
                      size={104}
                      strokeWidth={1.4}
                      style={{ color: active.dotColor }}
                      className="relative drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                    />
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <CategoryTabs active={activeId} onSelect={handleSelect} />

      {/* Content */}
      <div ref={contentRef} className="scroll-mt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {/* Description + Diagram */}
            <div className="max-w-7xl mx-auto px-6 py-14">
              <div className="grid lg:grid-cols-2 gap-14">
                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ background: active.dotColor }}
                    />
                    <h2 className="text-[#0D1B3E] text-3xl lg:text-4xl font-semibold tracking-tight">
                      {active.label}
                    </h2>
                  </div>
                  <p className="text-[#4A5568] text-base leading-relaxed mb-8">
                    {active.description}
                  </p>
                  <ul className="space-y-3">
                    {active.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-[#00B4C8] flex-shrink-0 mt-0.5" />
                        <span className="text-[#0D1B3E] text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — Architecture Diagram */}
                <ArchDiagram id={active.id} color={active.dotColor} />
              </div>
            </div>

            {/* Brands section — extra bottom padding gives the hover product
                panels room to open downward without being clipped off-page.
                When a catalog renders below, that provides the room instead. */}
            <div
              className={`bg-[#F4F8FF] border-t border-[#E2ECF8] pt-12 ${
                CATALOGS[active.id] ? 'pb-12' : 'pb-48'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-[#94A3B8] text-xs uppercase tracking-widest font-semibold mb-6">
                  Brands in this category — hover to see products
                </p>
                <div className="flex flex-wrap gap-3">
                  {active.brands.map((b) => (
                    <BrandCard key={b} brandName={b} categoryId={active.id} />
                  ))}
                </div>
              </div>
            </div>

            {/* Dedicated product catalog with spec tables */}
            {CATALOGS[active.id] && (
              <CategoryCatalog meta={CATALOGS[active.id]} categoryId={active.id} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="bg-[#0D1B3E] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-2.5">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
            </div>
            <span className="text-white font-semibold text-sm">MTP Distribution</span>
          </div>
          <p className="text-white/40 text-xs text-center">
            Authorised distribution across UAE &amp; Oman · Pre-sales support included
          </p>
          <a
            href="/#contact"
            className="text-[#00B4C8] text-xs font-semibold hover:text-white transition-colors"
          >
            Contact Us →
          </a>
        </div>
      </footer>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  )
}
