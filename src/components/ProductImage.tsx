'use client'

import { useState, useEffect } from 'react'
import { Cctv } from 'lucide-react'
import { SOLUTION_ICON } from '@/lib/solutionIcons'

export const productSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

// Real product photo if /public/products/<slug>.jpg exists, otherwise a clean
// category-icon placeholder — so the UI is credible now and upgrades to real
// photos the moment they're dropped in. `variant` controls the fallback look.
export default function ProductImage({
  name,
  categoryId,
  className = '',
  hideIfMissing = false,
}: {
  name: string
  categoryId: string
  className?: string
  hideIfMissing?: boolean
}) {
  const [ok, setOk] = useState(false)
  const src = `/products/${productSlug(name)}.jpg`
  const Icon = SOLUTION_ICON[categoryId] ?? Cctv

  useEffect(() => {
    let active = true
    const probe = new window.Image()
    probe.onload = () => active && setOk(true)
    probe.onerror = () => active && setOk(false)
    probe.src = src
    return () => {
      active = false
    }
  }, [src])

  if (ok) {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img src={src} alt={name} loading="lazy" className={`object-contain bg-white ${className}`} />
  }

  // No real photo yet — hide entirely (catalog) or show a light placeholder.
  if (hideIfMissing) return null

  return (
    <div className={`flex items-center justify-center bg-[#F4F8FF] ${className}`} aria-hidden>
      <Icon size={30} className="text-[#CBD5E1]" strokeWidth={1.5} />
    </div>
  )
}
