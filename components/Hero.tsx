'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

gsap.registerPlugin()

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-label', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo('.hero-headline', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.2')
        .fromTo('.hero-stats', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#080D18]">
      <div id="cta-sentinel" className="absolute top-0 left-0 w-px h-px" />

      {/* Background gradient — deep and rich */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080D18] via-[#0C1A30] to-[#162A4A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_80%,rgba(217,164,52,0.08),transparent_60%)]" />

      {/* Hero image — right side, prominent, the hero anchor */}
      <div className="absolute right-0 top-0 w-full md:w-[50%] h-full">
        <motion.div className="absolute inset-0 opacity-[0.40]" style={{ y: imgY, scale: imgScale }}>
          <Image src="/hero-hands.png" alt="" fill className="object-cover object-right" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#080D18] via-[#0C1A30]/80 to-transparent" />
      </div>

      {/* Content */}
      <motion.div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40 z-10" style={{ opacity }}>
        <div className="max-w-[860px]">
          <div className="hero-label mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-500/70">SanLuis AI Solutions</span>
          </div>

          <div className="hero-headline mb-8">
            <h1 className="font-display text-[clamp(3.5rem,10vw,7rem)] text-bone-50 font-medium leading-[0.88] tracking-[-0.035em] mb-3">
              Get 5+ Hours Back<br />Every Week
            </h1>
            <p className="font-display text-[clamp(1.2rem,2.5vw,2rem)] text-gold-500/90 font-medium leading-[1.1] tracking-[-0.02em]">
              Without a Tech Team. <span className="text-bone-50/70">Live in 14 Days.</span>
            </p>
          </div>

          {/* Stats — like More Nutrition's hero numbers */}
          <div className="hero-stats flex gap-8 md:gap-12 mb-10">
            <div>
              <div className="font-display text-[clamp(1.8rem,4vw,3rem)] text-gold-500 font-medium leading-none tracking-[-0.02em]">$38.7K</div>
              <div className="font-sans text-[10px] text-bone-50/50 tracking-[0.08em] uppercase mt-2">Avg. annual savings</div>
            </div>
            <div className="w-px bg-gold-600/20" />
            <div>
              <div className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bone-50 font-medium leading-none tracking-[-0.02em]">14 Days</div>
              <div className="font-sans text-[10px] text-bone-50/50 tracking-[0.08em] uppercase mt-2">Average delivery</div>
            </div>
            <div className="w-px bg-gold-600/20" />
            <div>
              <div className="font-display text-[clamp(1.8rem,4vw,3rem)] text-bone-50 font-medium leading-none tracking-[-0.02em]">60%</div>
              <div className="font-sans text-[10px] text-bone-50/50 tracking-[0.08em] uppercase mt-2">Avg. time savings</div>
            </div>
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