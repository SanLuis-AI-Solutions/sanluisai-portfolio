'use client'

import { motion, useReducedMotion } from 'framer-motion'

/**
 * GoldThread — 1px gold entrance line (#D9A434).
 * Draws center-out across the full viewport width on mount.
 * Max 1 per page. Respects prefers-reduced-motion.
 * Placed at the top of the hero section as an entrance animation.
 */
export default function GoldThread() {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return (
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-px bg-gold-600" />
      </div>
    )
  }

  return (
    <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none overflow-hidden">
      <motion.div
        className="h-px bg-gold-600 origin-center"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 1.2,
          delay: 0.15,
          ease: [0.32, 0.72, 0, 1],
        }}
      />
      <motion.div
        className="h-[6px] -mt-[6px] bg-[radial-gradient(50%_100%_at_50%_0%,rgba(217,164,52,0.15),transparent)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: 'easeOut',
        }}
      />
    </div>
  )
}
