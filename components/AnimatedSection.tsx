'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article'
}

export default function AnimatedSection({ children, delay = 0, className, as = 'div' }: AnimatedSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as as keyof typeof motion] as React.ElementType

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  )
}
