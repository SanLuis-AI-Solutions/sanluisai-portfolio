'use client'

import { useRef, useState, useEffect } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
  animate,
} from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  label,
  suffix = '',
  prefix = '',
  duration = 2.2,
  className = '',
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)

  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 14,
    duration: duration * 1000,
  })

  // Subscribe to spring changes
  useEffect(() => {
    const unsub = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest))
    })
    return unsub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Trigger animation when in view
  useEffect(() => {
    if (inView && !shouldReduceMotion) {
      motionValue.set(0)
      animate(motionValue, value, { duration, ease: [0.2, 0.7, 0.2, 1] })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, shouldReduceMotion, value, duration])

  const renderValue = shouldReduceMotion ? value.toLocaleString() : displayValue.toLocaleString()

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="font-display text-2xl md:text-3xl text-gold-600"
        initial={shouldReduceMotion ? {} : { opacity: 0 }}
        animate={inView || shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <span>
          {prefix}
          {renderValue}
          {suffix}
        </span>
      </motion.div>
      <div className="font-sans text-xs text-fg3 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  )
}
