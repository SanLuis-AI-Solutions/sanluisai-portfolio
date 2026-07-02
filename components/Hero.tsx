'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'

gsap.registerPlugin()

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-label', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo('.hero-headline', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.2')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#080D18]">
      <div id="cta-sentinel" className="absolute top-0 left-0 w-px h-px" />

      {/* Smooth deep background — single gradient, no grain, no glow noise */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080D18] via-[#0C1A30] to-[#0F2440]" />
      {/* Barely-there gold warmth from below */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_35%_at_50%_100%,rgba(217,164,52,0.04),transparent_60%)]" />

      {/* Content — confident, minimal, centered-left */}
      <motion.div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40 z-10" style={{ opacity }}>
        <div className="max-w-[800px]">
          <div className="hero-label mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-500/60">SanLuis AI Solutions</span>
          </div>

          <div className="hero-headline mb-12">
            <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] text-bone-50 font-medium leading-[0.88] tracking-[-0.035em]">
              Get 5+ Hours Back<br />Every Week
            </h1>
            <p className="font-display text-[clamp(1.3rem,3vw,2.2rem)] text-gold-500/90 font-medium leading-[1.05] tracking-[-0.025em] mt-5">
              Without a Tech Team. <span className="text-bone-50/70">In 14 Days.</span>
            </p>
          </div>

          <div className="hero-cta">
            <a
              href="/booking"
              className="group inline-flex items-center font-sans text-sm font-semibold tracking-[0.06em] px-8 py-4 bg-gold-600 text-navy-950 hover:bg-gold-500 hover:shadow-[0_0_0_1px_rgba(217,164,52,0.5),0_8px_32px_-8px_rgba(217,164,52,0.4)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 rounded-full"
            >
              Book a Discovery Session
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}