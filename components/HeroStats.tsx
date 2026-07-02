'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView || shouldReduceMotion) {
      setDisplay(value)
      return
    }
    let frame: number
    const start = performance.now()
    const duration = 2000
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, shouldReduceMotion])

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>
}

export default function HeroStats() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section ref={sectionRef} className="relative bg-[#0F1D3D] py-20 md:py-28 overflow-hidden border-t border-gold-600/10">
      {/* Subtle gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_0%,rgba(217,164,52,0.04),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={inView || shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="grid grid-cols-3 gap-8 md:gap-16"
        >
          <div className="text-center">
            <div className="font-display text-[clamp(2.5rem,6vw,5rem)] text-gold-500 font-medium leading-[0.9] tracking-[-0.03em] mb-3">
              <AnimatedCounter value={5400} suffix="+" />
            </div>
            <div className="font-sans text-xs md:text-sm text-bone-300/50 tracking-[0.08em] uppercase">Hours recovered</div>
          </div>
          <div className="text-center">
            <div className="font-display text-[clamp(2.5rem,6vw,5rem)] text-bone-50 font-medium leading-[0.9] tracking-[-0.03em] mb-3">
              <AnimatedCounter value={60} suffix="%" />
            </div>
            <div className="font-sans text-xs md:text-sm text-bone-300/50 tracking-[0.08em] uppercase">Avg. time savings</div>
          </div>
          <div className="text-center">
            <div className="font-display text-[clamp(2.5rem,6vw,5rem)] text-gold-500 font-medium leading-[0.9] tracking-[-0.03em] mb-3">
              <AnimatedCounter value={3} suffix="×" />
            </div>
            <div className="font-sans text-xs md:text-sm text-bone-300/50 tracking-[0.08em] uppercase">Avg. lead increase</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}