'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-navy-800 overflow-hidden">
      {/* Background image — subtle overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image src="/generated/sanluis_hero_00001_.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
      </div>
      {/* Radial gold glow accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-32 z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="max-w-[62ch]">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 mb-8">
                <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">SanLuis AI Solutions — Houston</span>
                <div className="h-px w-8 bg-gold-600/60" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-bone-50 font-semibold leading-[0.92] tracking-[-0.03em] mb-6">
                Custom AI <span className="text-gold-500 italic">Solutions.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-lg md:text-xl font-light text-bone-300/70 leading-relaxed max-w-[48ch] mb-10">
                No-code AI for real problems. Built for Houston. Custom systems, automations, and AI apps — shipped in weeks, not months.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.45}>
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <a href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">Book a Discovery Session.</a>
                <a href="/assessment" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 border border-bone-300/30 text-bone-50 hover:border-gold-500 hover:text-gold-500 transition-all duration-220 rounded">AI Readiness Assessment.</a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <div className="h-px w-12 bg-gold-600/60 mb-6" />
              <div className="flex flex-wrap items-center gap-x-10 gap-y-2">
                <div><span className="font-display text-2xl text-gold-500 font-semibold">6</span><span className="font-sans text-xs text-bone-300/50 ml-2 uppercase tracking-[0.08em]">Projects</span></div>
                <div><span className="font-display text-2xl text-gold-500 font-semibold">5</span><span className="font-sans text-xs text-bone-300/50 ml-2 uppercase tracking-[0.08em]">Clients</span></div>
                <div><span className="font-display text-2xl text-gold-500 font-semibold">3</span><span className="font-sans text-xs text-bone-300/50 ml-2 uppercase tracking-[0.08em]">AI Apps</span></div>
                <div><span className="font-display text-2xl text-gold-500 font-semibold">0</span><span className="font-sans text-xs text-bone-300/50 ml-2 uppercase tracking-[0.08em]">Jobs Lost</span></div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right side: brand environment image */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            <AnimatedSection delay={0.4}>
              <div className="relative w-72 h-48 rounded overflow-hidden shadow-3 border border-bone-300/10">
                <Image src="/brand-lobby.png" alt="SanLuis AI brand environment" fill className="object-contain" sizes="288px" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="font-mono text-xs text-bone-300/40 tracking-[0.15em] uppercase text-center">Founded 2025 · Houston · Bilingual EN/ES</div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
