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

function GoldThread({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="h-px bg-gold-600 overflow-hidden">
      <motion.div
        className="h-full bg-gold-600"
        initial={{ width: 0 }}
        animate={inView ? { width: '100%' } : {}}
        transition={{ duration: 1.2, delay, ease: [0.2, 0.7, 0.2, 1] }}
      />
    </div>
  )
}

const services = [
  {
    num: '01',
    name: 'AI Consulting — Discovery Session',
    desc: 'You know AI matters but you\u2019re not sure where it applies. We audit your operations and give you a prioritized roadmap.',
    detail: '$300. We identify the opportunities that actually move the needle \u2014 and tell you which ones to ignore. No jargon. No upsell.',
    href: '/services/consulting',
  },
  {
    num: '02',
    name: 'AI Automation',
    desc: 'The busywork your best people shouldn\u2019t touch. Data entry, reconciliation, scheduling, reporting \u2014 automated end to end.',
    detail: 'From $1,200. Connects to the tools you already use. We measure the hours recovered and show you exactly what you saved.',
    href: '/services/automation',
  },
  {
    num: '03',
    name: 'AI Agents',
    desc: 'Not a chatbot. An autonomous system that researches, decides, and acts on multi-step tasks without hand-holding.',
    detail: 'From $5,000. Built for one specific job. Handles complex, multi-stage workflows start to finish. You approve the output, not every step.',
    href: '/services/agents',
  },
  {
    num: '04',
    name: 'Custom AI Systems',
    desc: 'A purpose-built system for a single, high-impact problem. Designed around your data, your workflow, your outcomes.',
    detail: 'From $5,000. You own everything. No license fees. No vendor lock-in. Built for the problem that costs you the most right now.',
    href: '/services/custom-ai',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          <div>
            <AnimatedSection delay={0}>
              <span className="sl-eyebrow mb-8">What We Build</span>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">
                Four ways to solve your most expensive problem.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <p className="sl-body-lg max-w-[52ch] mb-8">
                One problem per engagement. Fixed price. You own everything. No subscriptions, no black boxes, no one-size-fits-all.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <GoldThread delay={0.35} />
              <p className="mt-6 text-xs font-medium text-fg3 tracking-[0.08em] uppercase">
                Fixed price &middot; You own the code &middot; No recurring fees, ever
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.num} delay={0.15 + i * 0.12}>
                <a
                  href={s.href}
                  className="block group cursor-pointer"
                >
                  <div className="grid grid-cols-[auto_1fr] gap-6 items-start bg-white border border-navy-200 hover:border-navy-900 rounded p-6 md:p-8 transition-all duration-220 hover:shadow-2">
                    <div className="font-display text-2xl text-gold-600 leading-none pt-1">
                      {s.num}
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-2 group-hover:text-navy-600 transition-colors duration-200">
                        {s.name}
                      </h3>
                      <p className="sl-body-sm mb-3">{s.desc}</p>
                      <p className="text-xs text-fg4 leading-relaxed hidden md:block">
                        {s.detail}
                      </p>
                    </div>
                  </div>
                </a>
              </AnimatedSection>
            ))}
            {/* We build more than what's listed here */}
            <AnimatedSection delay={0.15 + services.length * 0.12}>
              <p className="font-sans text-xs text-navy-400 text-center pt-2">
                These are examples, not a catalog. We build whatever moves your business forward &mdash; big or small.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
