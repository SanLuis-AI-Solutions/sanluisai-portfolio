'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const privateScorecard = usePathname().startsWith('/internal/ai-opportunity-scorecard')
  return privateScorecard ? <div>{children}</div> : <AnimatedTemplate>{children}</AnimatedTemplate>
}

function AnimatedTemplate({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? {} : { opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
