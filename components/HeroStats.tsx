'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

const industries = [
  'Manufacturing',
  'Healthcare',
  'Real Estate',
  'Professional Services',
  'Logistics',
  'Retail',
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
      <div className="max-w-[52ch]">
        <p className="font-display text-xl md:text-2xl text-gold-500 font-medium tracking-[-0.01em] mb-2">
          5,400+ hours recovered.
        </p>
        <p className="font-sans text-sm text-bone-300/60 leading-relaxed">
          3 Houston operators. 3 industries. Hours recovered tracked monthly. Trusted by{' '}
          {industries.map((ind, i) => (
            <span key={ind}>
              <span className="text-bone-200">{ind}</span>
              {i < industries.length - 1 && <span className="text-bone-400/40">{' · '}</span>}
            </span>
          ))}
          .
        </p>
      </div>
    </motion.div>
  )
}
