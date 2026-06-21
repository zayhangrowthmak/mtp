'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // On route change, reset scroll to the top (or to a hash target if the link
  // points to one). Lenis keeps its own scroll position, so without this the
  // new page would open at the previous page's scroll offset.
  useEffect(() => {
    const lenis = lenisRef.current
    if (!lenis) return

    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        lenis.scrollTo(el as HTMLElement, { immediate: true })
        return
      }
    }
    lenis.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
