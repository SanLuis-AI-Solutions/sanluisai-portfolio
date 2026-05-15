'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { value: 3, label: 'Avg Delivery', suffix: ' wk' },
  { value: 60, label: 'Faster Quoting', suffix: '%' },
  { value: 300, label: 'Start Here', prefix: '$' },
  { value: 100, label: 'You Own the Code', suffix: '%' },
]

export default function HeroStats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={inView || shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
    >
      <div className="h-px w-12 bg-gold-600/60 mb-6" />
      <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
        {stats.map((stat, i) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
            prefix={stat.prefix}
            duration={2.0}
            className="flex flex-col"
          />
        ))}
      </div>
    </motion.div>
  )
}
