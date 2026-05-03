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
    name: 'Custom AI Systems',
    desc: 'Built from scratch for your exact problem. No templates, no compromises, no feature bloat.',
    detail: 'From $5,000. Architecture from first principles. Full source ownership. Your stack, your data, your model.',
    href: '/services/custom-ai',
  },
  {
    num: '02',
    name: 'AI Automation',
    desc: 'Workflow automation that eliminates the manual busywork consuming your highest-paid hours.',
    detail: 'From $1,200. Integrates with your existing tools. We map the process, build the engine, measure the margin recovery.',
    href: '/services/automation',
  },
  {
    num: '03',
    name: 'AI Agents',
    desc: 'Autonomous agents that research, decide, and execute — handling complex tasks without human oversight.',
    detail: 'From $5,000. Purpose-built for a single domain. Not a chatbot. Not a generic AI tool. A custom system for one job.',
    href: '/services/agents',
  },
  {
    num: '04',
    name: 'AI Consulting',
    desc: 'Strategic guidance on where AI compresses cost without compromising output.',
    detail: '$300 Discovery Session. For owners who know they need AI but aren\'t sure where to begin. We find the three highest-leverage opportunities.',
    href: '/services/consulting',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          <div>
            <AnimatedSection delay={0}>
              <span className="sl-eyebrow mb-8">No. 02 — Capabilities</span>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">
                What we build.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <p className="sl-body-lg max-w-[52ch] mb-8">
                Four categories of work. No two engagements are the same. We scope one problem per build — and we do not stop until it is removed.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.35}>
              <GoldThread delay={0.35} />
              <p className="mt-6 text-xs font-medium text-fg3 tracking-[0.08em] uppercase">
                Time-bounded &middot; Outcome-priced &middot; Source-owned
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
          </div>
        </div>
      </div>
    </section>
  )
}
