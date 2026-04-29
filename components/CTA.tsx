'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function CTA() {
  return (
    <section className="relative py-40 md:py-48 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,52,0.06),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-600/20" />

      <div className="relative max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <AnimatedSection delay={0}>
              <span className="sl-eyebrow mb-8 text-bone-300">No. 06 — Next</span>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white font-medium leading-[1.06] tracking-[-0.025em] mb-8">
                Your bottleneck has a name.
                <br />
                <span className="text-gold-600">We find it in 60 minutes.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-lg text-navy-300 leading-relaxed max-w-[58ch] mb-12">
                The Discovery Session is a paid audit — $300, one hour, one written action plan. If we cannot identify the bottleneck with specificity, your money is returned in full.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <a
                href="/booking"
                className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:shadow-goldGlow transition-all duration-220 rounded"
              >
                Book a Discovery Session.
              </a>
            </AnimatedSection>
          </div>

          <div className="hidden lg:block">
            <AnimatedSection delay={0.5}>
              <div className="space-y-8 border-l border-gold-600/20 pl-8 py-4">
                <div>
                  <div className="font-mono text-xs text-gold-600 tracking-[0.15em] uppercase mb-2">Engagements / Quarter</div>
                  <div className="font-display text-5xl text-white font-medium">3</div>
                  <div className="font-sans text-sm text-navy-400 mt-1">We turn down nine.</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-gold-600 tracking-[0.15em] uppercase mb-2">Discovery Session</div>
                  <div className="font-display text-5xl text-white font-medium">$300</div>
                  <div className="font-sans text-sm text-navy-400 mt-1">Refunded if no bottleneck found.</div>
                </div>
                <div>
                  <div className="font-mono text-xs text-gold-600 tracking-[0.15em] uppercase mb-2">Delivery Window</div>
                  <div className="font-display text-5xl text-white font-medium">2-4 wk</div>
                  <div className="font-sans text-sm text-navy-400 mt-1">From contract to deploy.</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
