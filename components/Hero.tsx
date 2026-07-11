'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], [0, -120])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance sequence — staggered, with power3 easing
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-label', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo('.hero-headline', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.2')
        .fromTo('.hero-subhead', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.5')
        .fromTo('.hero-badges', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')

      // Scroll-triggered parallax — headline moves at different speed on scroll
      const headline = textRef.current?.querySelector('h1')
      if (headline) {
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
          onUpdate: (self) => {
            const progress = self.progress
            // Subtle text parallax — whole headline shifts up
            ;(headline as HTMLElement).style.transform = `translateY(${progress * -30}px)`
          },
        })
      }

      // Parallax glow — gold radial glow shifts on scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5,
        onUpdate: (self) => {
          const glow = heroRef.current?.querySelector('.hero-glow') as HTMLElement
          if (glow) {
            glow.style.opacity = String(1 - self.progress * 0.6)
          }
        },
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#080D18]">
      <div id="cta-sentinel" className="absolute top-0 left-0 w-px h-px" />

      {/* Deep navy gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#080D18] via-[#0C1A30] to-[#162A4A]" />
      {/* Warm gold glow — positioned behind the image area, scroll-responsive */}
      <div className="hero-glow absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_70%_60%_at_70%_50%,rgba(217,164,52,0.08),transparent_60%)]" />

      {/* Hero image — full-height, focus on center-left to show both hands */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-[60%] md:h-full">
        <motion.div className="absolute inset-0 opacity-[0.40]" style={{ y: imgY, scale: imgScale }}>
          <Image src="/hero-hands.png" alt="" fill className="object-cover md:object-[30%_center] object-center" priority sizes="(max-width: 768px) 100vw, 60vw" />
        </motion.div>
        {/* Gradient fade on left edge — just enough to blend */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#080D18] via-[#0C1A30]/50 to-transparent" />
        {/* Gradient fade on right edge — keeps edge from clipping harshly */}
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#080D18]/20 to-transparent" />
      </div>

      {/* Content — bold, asymmetric, high-energy */}
      <motion.div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-40 z-10" style={{ opacity }}>
        <div className="max-w-[820px]">
          <div className="hero-label mb-6">
            <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-gold-500/70">SanLuis AI Solutions</span>
          </div>

          <div ref={textRef} className="hero-headline mb-3">
            <h1 className="font-display text-[clamp(3.2rem,9vw,6.5rem)] text-bone-50 font-medium leading-[0.88] tracking-[-0.035em]">
              {'Get 5+ Hours Back Every Week'.split(' ').map((word, i) => (
                <span key={i} className="reveal-word inline-block mr-[0.3em]">
                  {word}
                </span>
              ))}
              <br />
              <span className="text-gold-500">Without a Tech Team.</span>
            </h1>
          </div>

          <div className="hero-subhead mb-10">
            <p className="font-display text-[clamp(1.2rem,2.5vw,2rem)] text-gold-500 font-medium leading-[1.1] tracking-[-0.02em]">
              Live in <span className="text-bone-50/70">14 Days.</span>
            </p>
          </div>

          {/* Trophy badges — bold stat capsules, More Nutrition inspired */}
          <div className="hero-badges grid grid-cols-2 sm:grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3 mb-10">
            <div className="flex flex-row items-center justify-center gap-2 sm:flex-row sm:items-center sm:text-left sm:gap-3 bg-white/5 border border-gold-600/30 rounded-full px-3 py-2 sm:px-5">
              <span className="font-display text-lg sm:text-xl md:text-2xl text-gold-500 font-medium leading-none">$38.7K</span>
              <span className="font-sans text-[9px] sm:text-[10px] text-bone-50/50 tracking-[0.06em] uppercase">Avg. annual<br />savings</span>
            </div>
            <div className="flex flex-col items-center text-center gap-0.5 sm:flex-row sm:items-center sm:text-left sm:gap-3 bg-white/5 border border-gold-600/30 rounded-full px-3 py-2.5 sm:px-5">
              <span className="font-display text-lg sm:text-xl md:text-2xl text-bone-50 font-medium leading-none">14 Days</span>
              <span className="font-sans text-[9px] sm:text-[10px] text-bone-50/50 tracking-[0.06em] uppercase">Average<br />delivery</span>
            </div>
            <div className="flex flex-col items-center text-center gap-0.5 sm:flex-row sm:items-center sm:text-left sm:gap-3 bg-white/5 border border-gold-600/30 rounded-full px-3 py-2.5 sm:px-5">
              <span className="font-display text-lg sm:text-xl md:text-2xl text-bone-50 font-medium leading-none">60%</span>
              <span className="font-sans text-[9px] sm:text-[10px] text-bone-50/50 tracking-[0.06em] uppercase">Avg. time<br />savings</span>
            </div>
          </div>

          <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex flex-col gap-1">
              <a
                href="/booking"
                className="group inline-flex items-center font-sans text-sm font-semibold tracking-[0.06em] px-8 py-4 bg-gold-600 text-navy-950 hover:bg-gold-500 hover:shadow-[0_0_0_1px_rgba(217,164,52,0.5),0_8px_32px_-8px_rgba(217,164,52,0.4)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 rounded-full"
              >
                Book a Discovery Session
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="font-sans text-[10px] text-bone-50/40 leading-relaxed max-w-[36ch]">60-min working session. You get a written roadmap. $300 — refundable if we don't find 3 opportunities.</span>
            </div>
            <span className="font-sans text-xs text-bone-50/40 tracking-[0.06em]">Trusted by 50+ Houston SMBs</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
