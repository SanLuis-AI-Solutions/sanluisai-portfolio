'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ServiceIcon from '@/components/ServiceIcon'

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
    icon: 'consulting' as const,
   name: 'AI Consulting: Discovery Session',
   desc: 'Know exactly where to start. One focused session. We map your operations, identify your highest-leverage AI opportunity, and give you a clear path forward.',
   detail: '$300. Includes written roadmap with cost estimates. Money-back guarantee: if we find fewer than 3 opportunities, you don\'t pay.',
   href: '/services/consulting',
   bonus: 'No jargon. No upsell. Just a clear path forward and your money back if we don\'t deliver.',
 },
  {
    num: '02',
    icon: 'automation' as const,
    name: 'AI Automation',
    desc: 'Stop doing it manually. Map your process once. We build the automation that runs it every time, without fail.',
    detail: 'From $1,200. Includes 30-day post-launch support. We measure hours recovered monthly.',
    href: '/services/automation',
    bonus: 'If it doesn\'t pay for itself in 6 months, we fix it free.',
  },
  {
    num: '03',
    icon: 'agents' as const,
    name: 'AI Agents',
    desc: 'Your 24/7 AI team. Agents that intake, qualify, research, and route while your team focuses on decisions, not data entry.',
    detail: 'From $5,000. Includes 14-Day Prototype: see it working with your data before we build the full system.',
    href: '/services/agents',
    bonus: 'You approve outcomes, not every step. No license fees. Ever.',
  },
  {
    num: '04',
    icon: 'custom-ai' as const,
    name: 'Custom AI Systems',
    desc: 'An app built around how your business actually works. Designed, built, and deployed in weeks. No agency markup. No unnecessary complexity.',
    detail: 'From $5,000. Includes Architecture Blueprint + deployment + team training. Full source ownership.',
    href: '/services/custom-ai',
    bonus: 'You own everything. No license fees. Ever.',
  },
]

function ServiceCardLeftHeavy({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <AnimatedSection delay={0.15 + i * 0.12}>
      <a href={s.href} className="block group cursor-pointer">
        <div className="grid grid-cols-[auto_1fr] gap-6 items-start bg-white border border-navy-200 hover:border-navy-900 rounded p-6 md:p-8 transition-all duration-220 hover:shadow-2 hover:scale-[1.01]">
          {/* Left: icon + gold accent */}
          <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1 pt-1">
              <ServiceIcon name={s.icon} size={28} className="text-gold-600" />
              <span className="font-mono text-[9px] text-navy-400 tracking-[0.12em]">{s.num}</span>
            </div>
            <div className="hidden md:block w-px h-12 bg-gold-600/30 mt-1" />
          </div>
          {/* Right: content */}
          <div className="min-w-0">
            <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-2 group-hover:text-navy-600 transition-colors duration-200">
              {s.name}
            </h3>
            <p className="sl-body-sm mb-3">{s.desc}</p>
            <p className="text-xs text-fg4 leading-relaxed hidden md:block">
              {s.detail}
            </p>
            <p className="text-xs text-gold-600 font-medium leading-relaxed mt-2 hidden md:block">
              {s.bonus}
            </p>
          </div>
        </div>
      </a>
    </AnimatedSection>
  )
}

function ServiceCardRightHeavy({ s, i }: { s: typeof services[0]; i: number }) {
  return (
    <AnimatedSection delay={0.15 + i * 0.12}>
      <a href={s.href} className="block group cursor-pointer">
        <div className="grid grid-cols-[1fr_auto] gap-6 items-start bg-white border border-navy-200 hover:border-navy-900 rounded p-6 md:p-8 transition-all duration-220 hover:shadow-2 hover:scale-[1.01]">
          {/* Left: content */}
          <div className="min-w-0 order-1">
            <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-2 group-hover:text-navy-600 transition-colors duration-200">
              {s.name}
            </h3>
            <p className="sl-body-sm mb-3">{s.desc}</p>
            <p className="text-xs text-fg4 leading-relaxed hidden md:block">
              {s.detail}
            </p>
            <p className="text-xs text-gold-600 font-medium leading-relaxed mt-2 hidden md:block">
              {s.bonus}
            </p>
          </div>
          {/* Right: icon + gold accent */}
          <div className="flex items-start gap-3 order-2">
            <div className="hidden md:block w-px h-12 bg-gold-600/30 mt-1" />
            <div className="flex flex-col items-center gap-1 pt-1">
              <ServiceIcon name={s.icon} size={28} className="text-gold-600" />
              <span className="font-mono text-[9px] text-navy-400 tracking-[0.12em]">{s.num}</span>
            </div>
          </div>
        </div>
      </a>
    </AnimatedSection>
  )
}

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
            {services.map((s, i) =>
              i % 2 === 0 ? (
                <ServiceCardLeftHeavy key={s.num} s={s} i={i} />
              ) : (
                <ServiceCardRightHeavy key={s.num} s={s} i={i} />
              )
            )}
            {/* We build more than what's listed here */}
            <AnimatedSection delay={0.15 + services.length * 0.12}>
              <p className="font-sans text-xs text-navy-400 text-center pt-2">
                These are examples, not a catalog. We build whatever moves your business forward: big or small.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15 + (services.length + 1) * 0.12}>
              <p className="text-center pt-2">
                <a href="/booking" className="font-sans text-xs font-medium text-gold-600 hover:text-gold-700 transition-colors duration-200">
                  Not sure which one fits? Start with a Discovery Session. $300. &rarr;
                </a>
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
