'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
}

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative min-h-[30vh] md:min-h-[35vh] flex items-center bg-navy-800 overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 pt-28 pb-16 md:pb-20 z-10">
        <AnimatedSection delay={0}>
          <div className="flex items-center gap-4 mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">{eyebrow}</span>
            <div className="h-px w-8 bg-gold-600/60" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <h1 className="font-display text-[clamp(2.2rem,5vw,3.5rem)] text-bone-50 font-semibold leading-[0.92] tracking-[-0.03em] max-w-[16ch]">
            {title}
          </h1>
        </AnimatedSection>
        {description && (
          <AnimatedSection delay={0.3}>
            <p className="font-sans text-base md:text-lg font-light text-bone-300/70 leading-relaxed max-w-[48ch] mt-6">
              {description}
            </p>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}
