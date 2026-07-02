'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="font-sans text-[10px] font-semibold tracking-[0.18em] uppercase text-gold-500/60">Scroll to discover</span>
      <motion.svg
        width="16" height="24" viewBox="0 0 16 24" fill="none"
        className="text-gold-500/40"
        animate={{ y: [0, 4, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M8 0V20M8 20L2 14M8 20L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      {/* Hero image — right 40%, with gradient fade on left edge */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-2/5 md:h-full">
        <motion.div className="absolute inset-0 opacity-[0.20]" style={{ y: imageY, scale: imageScale }}>
          <Image src="/hero-hands.png" alt="" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#0F1D3D] to-transparent pointer-events-none" />
      </div>
      {/* Single warm gold glow from bottom-right — stationary, museum-spotlight quality */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_80%,rgba(217,164,52,0.12),transparent_60%)] pointer-events-none" />
      {/* Subtle top-right blue glow for depth */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(45,82,126,0.15),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40 z-10">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-end">
          {/* Left: primary content */}
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <FlameMark size="sm" className="opacity-80" />
                <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">SanLuis AI Solutions</span>
                <div className="h-px w-8 bg-gold-600/60" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h1 className="sl-display-lg text-bone-50 mb-6">
                Get 5+ Hours Back<br />Every Week
              </h1>
              <p className="sl-h2 text-gold-500 mb-8">
                Without a Tech Team. <span className="text-bone-50">Live in 14 Days.</span>
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-base md:text-lg font-light text-bone-50/70 leading-relaxed max-w-[48ch] mb-10">
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

          {/* Right: hero stat callouts — visible on desktop */}
          <div className="hidden md:flex flex-col gap-6 pb-16">
            <AnimatedSection delay={0.5}>
              <div className="border-l-2 border-gold-600/40 pl-5">
                <div className="font-display text-[clamp(2.5rem,5vw,4rem)] text-gold-500 font-medium leading-[0.9] tracking-[-0.02em]">5,400+</div>
                <div className="font-sans text-xs text-bone-300/60 tracking-[0.06em] uppercase mt-2">Hours recovered</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="border-l-2 border-gold-600/40 pl-5">
                <div className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-bone-50 font-medium leading-[0.9] tracking-[-0.02em]">3</div>
                <div className="font-sans text-xs text-bone-300/60 tracking-[0.06em] uppercase mt-2">Houston operators</div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <div className="border-l-2 border-gold-600/40 pl-5">
                <div className="font-display text-[clamp(2rem,3.5vw,2.8rem)] text-bone-50 font-medium leading-[0.9] tracking-[-0.02em]">60%</div>
                <div className="font-sans text-xs text-bone-300/60 tracking-[0.06em] uppercase mt-2">Average time savings</div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Mobile stat callouts — horizontal row */}
        <div className="flex md:hidden gap-6 mt-10">
          <AnimatedSection delay={0.5}>
            <div>
              <div className="font-display text-2xl text-gold-500 font-medium">5,400+</div>
              <div className="font-sans text-[10px] text-bone-300/60 tracking-[0.06em] uppercase mt-1">Hours recovered</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <div>
              <div className="font-display text-2xl text-bone-50 font-medium">3</div>
              <div className="font-sans text-[10px] text-bone-300/60 tracking-[0.06em] uppercase mt-1">Operators</div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.7}>
            <div>
              <div className="font-display text-2xl text-bone-50 font-medium">60%</div>
              <div className="font-sans text-[10px] text-bone-300/60 tracking-[0.06em] uppercase mt-1">Time saved</div>
            </div>
          </AnimatedSection>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  )
}