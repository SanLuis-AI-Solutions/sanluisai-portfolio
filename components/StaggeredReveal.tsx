'use client'

import React, { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface StaggeredRevealProps {
  children: React.ReactNode
  className?: string
  itemClassName?: string
  delay?: number
  stagger?: number
}

export default function StaggeredReveal({
  children,
  className,
  itemClassName,
  delay = 0,
  stagger = 0.08,
}: StaggeredRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView || shouldReduceMotion ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: stagger } },
      }}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          className={itemClassName}
          variants={{
            hidden: shouldReduceMotion ? {} : { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.2, 0.7, 0.2, 1] } },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
