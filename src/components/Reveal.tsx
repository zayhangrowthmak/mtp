'use client'

import { motion } from 'framer-motion'

// Lightweight scroll-reveal wrapper. Content renders in the HTML (SEO-safe);
// motion is layered on the client.
export default function Reveal({
  children,
  delay = 0,
  className,
  y = 16,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
