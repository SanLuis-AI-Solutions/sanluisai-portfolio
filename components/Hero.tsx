'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'
import GoldThread from '@/components/GoldThread'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

function ScrollIndicator() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.svg
        width="20"
        height="32"
        viewBox="0 0 20 32"
        fill="none"
        className="text-gold-500/60"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="10" r="2" fill="currentColor" />
      </motion.svg>
    </motion.div>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0F1D3D]">
      <div id="cta-sentinel" className="absolute top-0 left-0 w-px h-px" />
      <GoldThread />
      {/* Hero image — right 40%, with gradient fade on left edge */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-2/5 md:h-full">
        <motion.div className="absolute inset-0 opacity-[0.25]" style={{ y: imageY, scale: imageScale }}>
          <Image src="/hero-hands.png" alt="" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        {/* Gradient fade on left edge of image */}
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0F1D3D] to-transparent pointer-events-none" />
      </div>
      {/* Single gold glow from bottom-right — stationary, like a museum spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_80%,rgba(217,164,52,0.10),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40 z-10">
        <div className="max-w-[52ch]">
          <AnimatedSection delay={0}>
            <div className="flex items-center gap-3 mb-8">
              <FlameMark size="sm" className="opacity-80" />
              <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">SanLuis AI Solutions</span>
              <div className="h-px w-8 bg-gold-600/60" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="sl-display-lg text-bone-50 mb-6">
              Get 5+ Hours Back Every Week<br />
              <span className="text-gold-500">Without a Tech Team.</span><br />
              Live in 14 Days.
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="font-sans text-base md:text-lg font-light text-bone-50/80 leading-relaxed max-w-[52ch] mb-10">
              We build one simple AI tool that takes over whatever&apos;s eating the most of your time &mdash; no technical background needed.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.45}>
            <a
              href="/booking"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-4 border border-gold-500/80 text-gold-500 hover:bg-gold-500 hover:text-navy-900 hover:-translate-y-0.5 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 transition-all duration-220 rounded-full shadow-goldGlow hover:shadow-goldGlow"
            >
              Book a Discovery Session
            </a>
          </AnimatedSection>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  )
}
