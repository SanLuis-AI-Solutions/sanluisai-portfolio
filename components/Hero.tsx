'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useScroll, useTransform, useInView, useReducedMotion, AnimatePresence } from 'framer-motion'
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

const testimonials = [
  {
    quote: 'The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.',
    client: 'Real estate investor, Garza International',
    result: '60% faster quoting',
    metric: '60%',
  },
  {
    quote: 'I had a website up and booking clients in two weeks. The AI follow-up alone recovered three leads my old system had lost.',
    client: 'Small business owner, Susie\u2019s Jewelry Repair',
    result: '3x inbound leads',
    metric: '3\u00d7',
  },
  {
    quote: 'The matching engine was the piece we couldn\u2019t build ourselves. Six weeks later, engagement was up 40%.',
    client: 'Founder, LoveFlow',
    result: '40% better matches',
    metric: '40%',
  },
]

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (shouldReduceMotion || paused) {
      if (intervalRef.current) clearInterval(intervalRef.current)
      return
    }
    intervalRef.current = setInterval(next, 5000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [next, paused, shouldReduceMotion])

  const t = testimonials[current]

  return (
    <div
      className="w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={shouldReduceMotion ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? {} : { opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div className="border-l-2 border-gold-500/60 pl-4 mb-4">
              <p className="font-display text-base md:text-lg text-bone-200/90 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gold-600/20 border border-gold-600/30 flex items-center justify-center font-display text-xs text-gold-400 font-medium">
                {t.client.charAt(0)}
              </div>
              <div>
                <p className="font-sans text-xs text-bone-300/60">{t.client}</p>
                <p className="font-sans text-xs font-semibold text-gold-500">{t.result}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots */}
      {!shouldReduceMotion && (
        <div className="flex gap-2 mt-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-gold-500 w-5' : 'bg-bone-300/30 hover:bg-bone-300/50'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Hero() {
  const { scrollY } = useScroll()
  const bgColor = useTransform(scrollY, [0, 500], ['#0F1D3D', '#0A1128'])
  return (
    <motion.section style={{ backgroundColor: bgColor }} className="relative min-h-[100dvh] flex items-center overflow-hidden">
      <GoldThread />
      {/* Background image - subtle overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <Image src="/generated/sanluis_hero_00001_.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
      </div>
      {/* Radial gold glow accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-32 z-10">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="max-w-[62ch]">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-3 mb-8">
                <FlameMark size="sm" className="opacity-80" />
                <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">SanLuis AI Solutions, Houston</span>
                <div className="h-px w-8 bg-gold-600/60" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h1 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-bone-50 font-semibold leading-[0.92] tracking-[-0.03em] mb-6">
                Your business, running on AI.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-lg md:text-xl font-light text-bone-300/70 leading-relaxed max-w-[48ch] mb-3">
                We don't sell chatbots. We sell what happens after: faster quotes, automated busywork, and clients who can't believe how quick you respond.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <p className="font-display text-lg md:text-xl text-gold-500 italic font-medium tracking-[-0.01em] mb-10">
                No-code AI for real problems. Built for Houston.
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
              <TestimonialCarousel />
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
              <div className="font-mono text-xs text-bone-300/40 tracking-[0.15em] uppercase text-center">Founded 2025 - Houston - Bilingual EN/ES</div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
