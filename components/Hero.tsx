'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

gsap.registerPlugin()

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

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

      {/* Background */}
      <motion.div className="absolute inset-0" style={{ scale: bgScale }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#080D18] via-[#0C1A30] to-[#0F2440]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_70%_80%,rgba(217,164,52,0.08),transparent_60%)]" />
      </motion.div>

      {/* Image — right side, visible */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-[45%] md:h-full">
        <div className="absolute inset-0 opacity-[0.30]">
          <Image src="/hero-hands.png" alt="" fill className="object-cover object-right" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#080D18] via-[#0C1A30]/70 to-transparent" />
      </div>

      {/* Content — stripped to essentials */}
      <motion.div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40 z-10" style={{ opacity }}>
        <div className="max-w-[840px]">
          <div className="hero-label mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500/70">SanLuis AI Solutions</span>
          </div>

          <div className="hero-headline mb-10">
            <h1 className="font-display text-[clamp(3.5rem,10vw,7.5rem)] text-bone-50 font-medium leading-[0.85] tracking-[-0.04em]">
              Get 5+ Hours Back<br />Every Week
            </h1>
            <p className="font-display text-[clamp(1.3rem,3vw,2.5rem)] text-gold-500 font-medium leading-[1.05] tracking-[-0.025em] mt-4">
              Without a Tech Team. <span className="text-bone-50/80">In 14 Days.</span>
            </p>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href="/booking"
              className="group inline-flex items-center font-sans text-sm font-semibold tracking-[0.06em] px-8 py-4 bg-gold-600 text-navy-950 hover:bg-gold-500 hover:shadow-[0_0_0_1px_rgba(217,164,52,0.6),0_8px_32px_-8px_rgba(217,164,52,0.5)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 rounded-full"
            >
              Book a Discovery Session
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="font-sans text-xs text-bone-50/40 tracking-[0.06em]">$38,700 avg. annual savings</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}