'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'

gsap.registerPlugin(ScrollTrigger)

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
      animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
    >
      <span className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-gold-500/50">Scroll to discover</span>
      <div className="w-px h-8 bg-gradient-to-b from-gold-500/40 to-transparent" />
    </motion.div>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60])

  // GSAP entrance sequence
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance for hero elements
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('.hero-eyebrow', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 })
        .fromTo('.hero-headline', { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.4')
        .fromTo('.hero-subhead', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
        .fromTo('.hero-description', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.3')
        .fromTo('.hero-stats', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.4')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0A1628]">
      <div id="cta-sentinel" className="absolute top-0 left-0 w-px h-px" />

      {/* Deep background gradient — rich navy with warmth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#0F1D3D] to-[#162A4A] pointer-events-none" />

      {/* Hero image — right 45%, deeper opacity for mood */}
      <div className="absolute inset-0 md:inset-auto md:right-0 md:top-0 md:w-[45%] md:h-full">
        <motion.div className="absolute inset-0 opacity-[0.18]" style={{ y: imageY, scale: imageScale }}>
          <Image src="/hero-hands.png" alt="" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
        </motion.div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0A1628] via-[#0F1D3D]/80 to-transparent pointer-events-none" />
      </div>

      {/* Primary warm gold glow — stationary, museum-spotlight quality */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_75%_80%,rgba(217,164,52,0.10),transparent_60%)] pointer-events-none" />
      {/* Secondary cool blue glow for depth — top-left */}
      <div className="absolute top-0 left-0 w-1/2 h-2/3 bg-[radial-gradient(ellipse_at_top_left,rgba(45,82,126,0.12),transparent_60%)] pointer-events-none" />

      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />

      {/* Content */}
      <motion.div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-40 z-10" style={{ y: contentY }}>
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-16 items-center">
          {/* Left: primary content */}
          <div>
            <div className="hero-eyebrow">
              <div className="flex items-center gap-3 mb-8">
                <FlameMark size="sm" className="opacity-80" />
                <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500/80">SanLuis AI Solutions</span>
                <div className="h-px w-12 bg-gold-600/40" />
              </div>
            </div>

            <div className="hero-headline">
              <h1 className="font-display text-[clamp(3.2rem,9vw,7rem)] text-bone-50 font-medium leading-[0.88] tracking-[-0.035em] mb-4">
                Get 5+ Hours<br />Back Every Week
              </h1>
            </div>

            <div className="hero-subhead">
              <p className="font-display text-[clamp(1.6rem,4vw,3rem)] text-gold-500 font-medium leading-[1.05] tracking-[-0.025em] mb-8">
                Without a Tech Team. <span className="text-bone-50/90">Live in 14 Days.</span>
              </p>
            </div>

            <div className="hero-description">
              <p className="font-sans text-base md:text-lg font-light text-bone-50/60 leading-relaxed max-w-[48ch] mb-10">
                We build one simple AI tool that takes over whatever&apos;s eating the most of your time &mdash; no technical background needed.
              </p>
            </div>

            <div className="hero-cta">
              <a
                href="/booking"
                className="group inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.06em] px-10 py-4 bg-gold-600 text-navy-950 hover:bg-gold-500 hover:shadow-[0_0_0_1px_rgba(217,164,52,0.6),0_8px_32px_-8px_rgba(217,164,52,0.5)] hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 rounded-full"
              >
                Book a Discovery Session
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-3 group-hover:translate-x-0.5 transition-transform duration-300">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: hero-scale stat callouts */}
          <div className="hero-stats hidden md:flex flex-col gap-8">
            <div className="border-l-2 border-gold-600/30 pl-6">
              <div className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] text-gold-500 font-medium leading-[0.9] tracking-[-0.03em]">$38,700</div>
              <div className="font-sans text-xs text-bone-300/50 tracking-[0.08em] uppercase mt-2">Avg. annual savings per client</div>
            </div>
            <div className="border-l-2 border-gold-600/30 pl-6">
              <div className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-bone-50 font-medium leading-[0.9] tracking-[-0.03em]">14 Days</div>
              <div className="font-sans text-xs text-bone-300/50 tracking-[0.08em] uppercase mt-2">Average delivery time</div>
            </div>
            <div className="border-l-2 border-gold-600/30 pl-6">
              <div className="font-display text-[clamp(2.2rem,4vw,3.2rem)] text-bone-50 font-medium leading-[0.9] tracking-[-0.03em]">60%</div>
              <div className="font-sans text-xs text-bone-300/50 tracking-[0.08em] uppercase mt-2">Average time savings</div>
            </div>
          </div>
        </div>

        {/* Mobile stats */}
        <div className="hero-stats flex md:hidden gap-6 mt-12">
          <div>
            <div className="font-display text-2xl text-gold-500 font-medium">$38.7K</div>
            <div className="font-sans text-[10px] text-bone-300/50 tracking-[0.06em] uppercase mt-1">Avg. savings/yr</div>
          </div>
          <div>
            <div className="font-display text-2xl text-bone-50 font-medium">14d</div>
            <div className="font-sans text-[10px] text-bone-300/50 tracking-[0.06em] uppercase mt-1">Delivery</div>
          </div>
          <div>
            <div className="font-display text-2xl text-bone-50 font-medium">60%</div>
            <div className="font-sans text-[10px] text-bone-300/50 tracking-[0.06em] uppercase mt-1">Time saved</div>
          </div>
        </div>
      </motion.div>

      {/* Bottom marquee/ticker band — More Nutrition inspired rhythm */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-gold-600/10 py-3 bg-[#0A1628]/80 backdrop-blur-sm z-20">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">AI Automation</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">AI Agent Systems</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">Custom AI Systems</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">AI Consulting</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">60% Faster Quoting</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">3× Inbound Leads</span>
          <span className="text-gold-600/20 mx-2">·</span>
          {/* Duplicate for seamless loop */}
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">AI Automation</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">AI Agent Systems</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">Custom AI Systems</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">AI Consulting</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">60% Faster Quoting</span>
          <span className="text-gold-600/20 mx-2">·</span>
          <span className="font-mono text-[10px] text-gold-600/40 tracking-[0.15em] uppercase mx-4">3× Inbound Leads</span>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}