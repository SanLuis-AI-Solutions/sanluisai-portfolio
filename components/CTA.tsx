'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

export default function CTA() {
  return (
    <section className="relative min-h-[70vh] flex items-center bg-navy-900 overflow-hidden">
      {/* Single warm gold glow from bottom — stage spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(217,164,52,0.08),transparent_60%)] pointer-events-none" />
      {/* Subtle top-right blue depth */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(45,82,126,0.10),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-8 md:px-16 lg:px-24 py-32 md:py-40 w-full">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
          <div>
            <AnimatedSection delay={0}>
              <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-8 flex items-center gap-4">
                <span className="w-8 h-px bg-gold-600/60" />
                Ready?
              </span>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="sl-display-md text-white mb-4">Find out what to automate.</h2>
              <p className="sl-h2 text-gold-500 mb-6">Start with a Discovery Session.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <p className="font-sans text-base md:text-lg text-navy-300 leading-relaxed max-w-[52ch] mb-6">$300. 60 minutes. The exact roadmap to get there. Refundable if we do not find three clear opportunities.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 border border-gold-600/30 rounded-full px-4 py-1.5 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
                </span>
                <span className="font-sans text-[10px] font-semibold tracking-[0.08em] uppercase text-gold-500">3 of 4 build slots taken this month</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.45}>
              <a
                href="/booking"
                className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-12 py-5 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:shadow-goldGlow hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-220 rounded animate-goldPulse"
              >
                Book a Discovery Session
              </a>
            </AnimatedSection>
          </div>

          {/* Right: client quote sidebar — desktop only */}
          <div className="hidden lg:block">
            <AnimatedSection delay={0.5}>
              <div className="border-l border-gold-600/20 pl-8 py-4">
                <div className="font-mono text-xs text-gold-600 tracking-[0.15em] uppercase mb-3">Garza International</div>
                <div className="relative pl-5 border-l-2 border-gold-500/50 mb-4">
                  <p className="font-display text-base text-white italic leading-relaxed">
                    &ldquo;The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div><span className="text-gold-500 font-semibold">60%</span><span className="text-navy-400 ml-1">faster quoting</span></div>
                  <span className="text-navy-600">|</span>
                  <div><span className="text-gold-500 font-semibold">3 weeks</span><span className="text-navy-400 ml-1">to deploy</span></div>
                </div>
                <div className="mt-4 font-sans text-xs text-navy-500">Real Estate Construction &middot; Houston, TX</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}