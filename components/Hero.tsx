'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'
import GoldThread from '@/components/GoldThread'
import HeroStats from '@/components/HeroStats'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgColor = useTransform(scrollY, [0, 500], ['#0F1D3D', '#0A1128'])
  const bgY = useTransform(scrollY, [0, 500], ['0%', '20%'])
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1])
  return (
    <motion.section style={{ backgroundColor: bgColor }} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <GoldThread />
      <motion.div className="absolute inset-0 opacity-[0.18]" style={{ y: bgY, scale: imageScale }}>
        <Image src="/hero-hands.png" alt="" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
      </motion.div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,rgba(217,164,52,0.08),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-32 z-10">
        <div className="max-w-[74ch]">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <FlameMark size="sm" className="opacity-80" />
                <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">Built for small businesses &mdash; not IT departments</span>
                <div className="h-px w-8 bg-gold-600/60" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] text-bone-50 font-semibold leading-[0.92] tracking-[-0.03em] mb-6">
                Get a full day of your week back. Live in 14 days.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-base md:text-lg font-light text-bone-50/90 leading-relaxed max-w-[52ch] mb-2">
                Not a chatbot. Not a confusing tech project. We build one simple tool that takes over whatever&apos;s eating the most of your time. No tech team needed.
              </p>
              <p className="font-sans text-base md:text-lg font-light text-bone-50/90 leading-relaxed max-w-[52ch] mb-6">
                It&apos;s yours to keep &mdash; no surprise subscriptions.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <p className="font-sans text-sm md:text-base text-gold-500/80 font-medium tracking-[0.02em] mb-8">
                85% fewer errors. 2x capacity. 92% client satisfaction.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.45}>
              <div className="flex flex-col gap-4 mb-6">
                <a href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">
                  Book a Discovery Session &mdash; $300. Money-back if we don&apos;t find 3 ways to save you time.
                </a>
                <p className="font-sans text-xs text-bone-300/50 text-center">
                  A 60-minute call. A plan. $2,500 worth of work &mdash; for $300.
                </p>
                <a href="/assessment" className="font-sans text-sm text-bone-300/50 hover:text-gold-500 transition-colors duration-200 text-center">
                  Not sure where to start? Take the free 5-question AI Automation Audit.
                </a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <HeroStats />
            </AnimatedSection>
          </div>
        </div>
    </motion.section>
  )
}
