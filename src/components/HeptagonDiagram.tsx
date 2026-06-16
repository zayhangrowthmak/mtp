'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOLUTIONS } from '@/lib/data'

// ─── Geometry ────────────────────────────────────────────────────────────────
const CX = 300
const CY = 300
const R_OUTER = 238     // outer radius
const R_INNER = 142     // white center circle radius
const ICON_R = 22       // icon badge radius
const DETACH = 30       // pixels segments move on hover

function toXY(angleDeg: number, radius: number) {
  const rad = (angleDeg * Math.PI) / 180
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) }
}

// Heptagon vertex angles (clockwise from top = -90°)
const VERTEX_ANGLES = Array.from({ length: 7 }, (_, i) => -90 + (360 / 7) * i)
const VERTICES = VERTEX_ANGLES.map((a) => toXY(a, R_OUTER))

// Segment i spans from vertex[i] to vertex[(i+1)%7]
// We arrange them so Fire is top-left (segment from v6 to v0)
const SEGMENT_PAIRS: [number, number][] = [
  [6, 0], // Fire — top-left of apex
  [0, 1], // CCTV — top-right of apex
  [1, 2], // Networking — right
  [2, 3], // PA — lower-right
  [3, 4], // Access — bottom
  [4, 5], // IBMS — lower-left
  [5, 6], // UPS — left
]

function segmentPoints(a: number, b: number) {
  return `${CX},${CY} ${VERTICES[a].x.toFixed(1)},${VERTICES[a].y.toFixed(1)} ${VERTICES[b].x.toFixed(1)},${VERTICES[b].y.toFixed(1)}`
}

function bisectorAngle(a: number, b: number) {
  // Mid-angle of the arc from vertex a to vertex b (clockwise)
  const aa = VERTEX_ANGLES[a]
  const ab = VERTEX_ANGLES[b]
  // Handle wrap-around (v6→v0 case: 270° → -90°)
  const diff = ((ab - aa + 360) % 360)
  return aa + diff / 2
}

function iconPos(a: number, b: number) {
  const angle = bisectorAngle(a, b)
  const { x, y } = toXY(angle, R_OUTER * 0.76)
  // Round to fixed precision so server- and client-rendered SVG attributes
  // serialize to identical strings (avoids React hydration mismatch).
  return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100 }
}

function detachDelta(a: number, b: number) {
  const angle = bisectorAngle(a, b)
  const rad = (angle * Math.PI) / 180
  return { dx: Math.cos(rad) * DETACH, dy: Math.sin(rad) * DETACH }
}

// ─── Pillar glyphs (white-on-color, drawn in a -10..10 box) ──────────────────
// Faithful vector recreations of the supplied badge icons. `currentColor`
// is set per-segment so each glyph picks up its pillar color. White fills act
// as cut-outs against the white badge disc.
const SIMPLE_ICONS: Record<string, React.ReactElement> = {
  // Flame
  fire: (
    <path
      d="M0-9c2.5 3.5 5.2 5 5.2 9.6a5.2 5.2 0 1 1-10.4 0c0-2.6 1.8-3.8 2.9-5.6C-2.3-3.4-1.2-2.2 0-3.2 1.4-5.2.2-7 0-9Z"
      fill="currentColor"
    />
  ),
  // Bullet security camera
  cctv: (
    <>
      <rect x="-8" y="-3" width="11" height="6.6" rx="2" fill="currentColor" />
      <rect x="-8.5" y="-5.2" width="5.5" height="2.2" rx="1" fill="currentColor" />
      <circle cx="1.7" cy="0.3" r="2.1" fill="#fff" />
      <circle cx="1.7" cy="0.3" r="0.95" fill="currentColor" />
      <rect x="-1.4" y="3.2" width="1.7" height="3" fill="currentColor" />
      <rect x="-4.6" y="5.8" width="8" height="1.8" rx="0.9" fill="currentColor" />
    </>
  ),
  // Wifi / signal arcs
  networking: (
    <>
      <g fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
        <path d="M-6.5 0.5A7.5 7.5 0 0 1 1 8" />
        <path d="M-6.5-4.5A12.5 12.5 0 0 1 6 8" />
      </g>
      <circle cx="-6.3" cy="6.3" r="1.9" fill="currentColor" />
    </>
  ),
  // Speaker with sound waves
  pa: (
    <>
      <path d="M-8-3h4l5-4.5v15L-4 3h-4Z" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4-3.2A5 5 0 0 1 4 3.2" />
        <path d="M6.6-6A8.5 8.5 0 0 1 6.6 6" />
      </g>
    </>
  ),
  // Access control — open door
  access: (
    <>
      <path d="M-5-9 3.5-7V7L-5 9Z" fill="currentColor" />
      <rect x="3.5" y="-8" width="2.3" height="16" rx="0.7" fill="currentColor" />
      <circle cx="-2.6" cy="0" r="1.05" fill="#fff" />
    </>
  ),
  // IBMS — smart home / building automation (house + microchip)
  ibms: (
    <>
      {/* House silhouette */}
      <path d="M0-9 8.7-1H-8.7Z" fill="currentColor" />
      <rect x="3.6" y="-6.8" width="1.9" height="3.8" fill="currentColor" />
      <rect x="-6.6" y="-1" width="13.2" height="9" fill="currentColor" />
      {/* Chip window */}
      <rect x="-3.6" y="0.2" width="7.2" height="7.2" rx="1" fill="#fff" />
      {/* Chip core */}
      <rect x="-1.7" y="2.1" width="3.4" height="3.4" rx="0.5" fill="currentColor" />
      {/* Chip pins */}
      <g fill="currentColor">
        <rect x="-1.1" y="0.7" width="0.6" height="1.1" />
        <rect x="-0.3" y="0.7" width="0.6" height="1.1" />
        <rect x="0.5" y="0.7" width="0.6" height="1.1" />
        <rect x="-1.1" y="5.8" width="0.6" height="1.1" />
        <rect x="-0.3" y="5.8" width="0.6" height="1.1" />
        <rect x="0.5" y="5.8" width="0.6" height="1.1" />
        <rect x="-3.1" y="2.7" width="1.1" height="0.6" />
        <rect x="-3.1" y="3.5" width="1.1" height="0.6" />
        <rect x="-3.1" y="4.3" width="1.1" height="0.6" />
        <rect x="2" y="2.7" width="1.1" height="0.6" />
        <rect x="2" y="3.5" width="1.1" height="0.6" />
        <rect x="2" y="4.3" width="1.1" height="0.6" />
      </g>
    </>
  ),
  // Lightning bolt
  ups: (
    <path d="M2.5-9-5 1.2h4.7L-2.2 9 6-1.8H1L3.2-9Z" fill="currentColor" />
  ),
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function HeptagonDiagram() {
  const [hovered, setHovered] = useState<string | null>(null)

  const activeSegment = SOLUTIONS.find((s) => s.id === hovered)

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      {/* SVG Heptagon */}
      <div className="relative w-full max-w-[520px] aspect-square select-none">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
        >
          {/* Outer subtle glow ring */}
          <circle cx={CX} cy={CY} r={R_OUTER + 8} fill="none" stroke="#E2ECF8" strokeWidth="1" opacity="0.6" />

          {/* Segments */}
          {SEGMENT_PAIRS.map(([a, b], idx) => {
            const sol = SOLUTIONS[idx]
            const { dx, dy } = detachDelta(a, b)
            const ip = iconPos(a, b)
            const isHovered = hovered === sol.id

            return (
              <motion.g
                key={sol.id}
                animate={isHovered ? { x: dx, y: dy } : { x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                onHoverStart={() => setHovered(sol.id)}
                onHoverEnd={() => setHovered(null)}
                style={{ cursor: 'pointer' }}
              >
                <polygon
                  points={segmentPoints(a, b)}
                  fill={sol.color}
                  stroke="white"
                  strokeWidth={isHovered ? '4' : '3'}
                  style={{ filter: isHovered ? `drop-shadow(0 4px 12px ${sol.color}66)` : 'none' }}
                />

                {/* Icon badge — white medallion with thin pillar-color ring */}
                <circle cx={ip.x} cy={ip.y} r={ICON_R} fill="white" />
                <circle
                  cx={ip.x}
                  cy={ip.y}
                  r={ICON_R - 1.5}
                  fill="none"
                  stroke={sol.color}
                  strokeWidth={1.5}
                  opacity={0.35}
                />
                <g
                  transform={`translate(${ip.x},${ip.y})`}
                  style={{ color: sol.color }}
                >
                  <svg x="-11" y="-11" width="22" height="22" viewBox="-10 -10 20 20" overflow="visible">
                    {SIMPLE_ICONS[sol.id]}
                  </svg>
                </g>
              </motion.g>
            )
          })}

          {/* White center */}
          <circle cx={CX} cy={CY} r={R_INNER} fill="white" />
          <circle cx={CX} cy={CY} r={R_INNER} fill="none" stroke="#E2ECF8" strokeWidth="1.5" />

          {/* Center — MTP logo */}
          <image
            href="/mtp-logo.png"
            x={CX - 110}
            y={CY - 74}
            width={220}
            height={148}
            preserveAspectRatio="xMidYMid meet"
          />

          {/* Hover label ring — shows category label near detached segment */}
          {hovered && SEGMENT_PAIRS.map(([a, b], idx) => {
            const sol = SOLUTIONS[idx]
            if (sol.id !== hovered) return null
            const { dx, dy } = detachDelta(a, b)
            const ip = iconPos(a, b)
            return (
              <motion.text
                key={`label-${sol.id}`}
                x={ip.x + dx * 0.9}
                y={ip.y + dy * 0.9 + 36}
                textAnchor="middle"
                fontSize="9"
                fontWeight="600"
                fill={sol.color}
                fontFamily="Sora, system-ui, sans-serif"
                letterSpacing="0.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {sol.label.toUpperCase()}
              </motion.text>
            )
          })}
        </svg>

        {/* Hover instruction */}
        {!hovered && (
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[11px] text-[#94A3B8] tracking-wide whitespace-nowrap">
            Hover a segment to explore
          </p>
        )}
      </div>

      {/* Description card below heptagon */}
      <div className="w-full max-w-[520px] min-h-[120px]">
        <AnimatePresence mode="wait">
          {activeSegment ? (
            <motion.div
              key={activeSegment.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22 }}
              className="bg-white border border-[#E2ECF8] rounded-xl p-5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: activeSegment.dotColor }}
                />
                <h3 className="font-semibold text-[#0D1B3E] text-base">{activeSegment.label}</h3>
              </div>
              <p className="text-[#4A5568] text-sm leading-relaxed">{activeSegment.description}</p>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center h-[120px] border border-dashed border-[#E2ECF8] rounded-xl"
            >
              <p className="text-[#CBD5E1] text-sm">Select a category above</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
