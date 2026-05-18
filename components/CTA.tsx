'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function CTA() {
  return (
    <section className="relative py-40 md:py-48 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <Image src="/brand-conference.png" alt="" fill className="object-cover" sizes="100vw" priority={false} />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,52,0.06),transparent_60%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-600/20" />

      <div className="relative max-w-5xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div>
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-2 mb-8">
                <FlameMark size="sm" className="opacity-80" />
                <span className="sl-eyebrow text-bone-300">Start Here</span>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-white font-medium leading-[1.06] tracking-[-0.025em] mb-8">
                What if your team could reclaim 20 hours every week?
                <br />
                <span className="text-gold-600">$300. 60 minutes. The exact roadmap to get there.</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <p className="font-sans text-lg text-navy-300 leading-relaxed max-w-[58ch] mb-12">
                The Discovery Session is a 60-minute working meeting where we audit one area of your operations, identify the single highest-ROI AI opportunity, and hand you a written roadmap with specific numbers.
              </p>
              <div className="mb-12 space-y-2">
                <p className="font-sans text-sm text-gold-500">
                  <span className="text-bone-50 font-semibold">+ Free:</span> AI Automation Audit. 5-question self-assessment. We identify your top 3 AI opportunities and what each one is worth to your team. Delivered as a personalized PDF.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <a
                href="/booking"
                className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:shadow-goldGlow transition-all duration-220 rounded"
              >
                Book a Discovery Session. $300. 60 min.
              </a>
              <p className="font-sans text-xs text-gold-600/60 mt-4 tracking-[0.06em] uppercase">
                2 slots remaining this quarter
              </p>
            </AnimatedSection>
          </div>

          <div className="hidden lg:block">
            <AnimatedSection delay={0.5}>
              <div className="border-l border-gold-600/20 pl-8 py-4 space-y-6">
                {/* Quote block — real client result */}
                <div>
                  <div className="font-mono text-xs text-gold-600 tracking-[0.15em] uppercase mb-3">Garza International</div>
                  <div className="relative pl-5 border-l-2 border-gold-500/50 mb-4">
                    <p className="font-display text-base text-white italic leading-relaxed">
                      &ldquo;The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <span className="text-gold-500 font-semibold">60%</span>
                      <span className="text-navy-400 ml-1">faster quoting</span>
                    </div>
                    <span className="text-navy-600">|</span>
                    <div>
                      <span className="text-gold-500 font-semibold">3 weeks</span>
                      <span className="text-navy-400 ml-1">to deploy</span>
                    </div>
                  </div>
                  <div className="mt-4 font-sans text-xs text-navy-500">
                    Real Estate Construction &middot; Houston, TX
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
