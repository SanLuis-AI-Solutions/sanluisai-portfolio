'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

function GoldThread({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="h-px bg-gold-600 overflow-hidden"><motion.div className="h-full bg-gold-600" initial={{ width: 0 }} animate={inView ? { width: '100%' } : {}} transition={{ duration: 1.2, delay, ease: [0.2, 0.7, 0.2, 1] }} /></div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-bgCanvas overflow-hidden">
      {/* Background image — generated via ComfyUI SDXL, SanLuis brand identity */}
      <div className="absolute inset-0 opacity-[0.07]">
        <Image src="/generated/sanluis_hero_00001_.png" alt="" fill className="object-cover object-center" priority sizes="100vw" />
      </div>

      <div className="max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 py-32">
        <div className="grid lg:grid-cols-[1fr_0.3fr] gap-16 items-center">
          <div className="max-w-[68ch]">
            <AnimatedSection delay={0}>
              <span className="sl-eyebrow mb-8">No. 01 — The Studio</span>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h1 className="font-display text-[clamp(3rem,7vw,6rem)] text-navy-800 font-medium leading-[0.96] tracking-[-0.03em] mb-8">
                We don&apos;t sell software.<br /><span className="text-gold-600">We perform surgery.</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-lg md:text-xl text-fg2 leading-relaxed max-w-[54ch] mb-10">
                Precise, time-bounded AI implementations for operators serious about leverage. One engagement. One bottleneck. Removed.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.45}>
              <p className="sl-lede mb-12 text-fg1 max-w-[48ch]">Most AI consulting is theatre. Slide decks, pilot purgatory, six-month discovery phases. We ship working systems in weeks.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.55}>
              <div className="flex flex-col sm:flex-row gap-4 mb-20">
                <a href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow transition-all duration-220 rounded">Book a Discovery Session.</a>
                <a href="/assessment" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-220 rounded">AI Readiness Assessment.</a>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.7}>
              <GoldThread delay={0.7} />
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-6 text-xs font-medium text-fg3 tracking-[0.08em] uppercase">
                <span>50+ Bottlenecks Eliminated</span><span className="text-gold-600">◆</span><span>4 Industries</span><span className="text-gold-600">◆</span><span>0 Templates</span>
              </div>
            </AnimatedSection>
          </div>

          {/* Right side: brand environment image */}
          <div className="hidden lg:flex flex-col items-center gap-10">
            <AnimatedSection delay={0.4}>
              <div className="relative w-48 h-[400px] rounded overflow-hidden shadow-3 border border-navy-200">
                <Image src="/brand-lobby.png" alt="SanLuis AI brand environment — backlit logo signage in hotel lobby" fill className="object-cover" sizes="192px" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <div className="font-mono text-xs text-fg3 tracking-[0.15em] uppercase text-center">Founded 2025 · Houston · Bilingual EN/ES</div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
