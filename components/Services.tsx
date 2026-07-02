'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FlameMark from '@/components/FlameMark'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>
  )
}

const services = [
  { num: '01', name: 'AI Automation', desc: 'Stop doing it manually. We build the automation that runs your process every time, without fail.', price: 'From $1,200', href: '/services/automation' },
  { num: '02', name: 'AI Agent Systems', desc: '24/7 intelligent coverage. Agents that intake, qualify, research, and route without adding headcount.', price: 'From $5,000', href: '/services/agents' },
  { num: '03', name: 'Custom AI Systems', desc: 'An app built around how your business actually works. Designed, built, and deployed in weeks.', price: 'From $5,000', href: '/services/custom-ai' },
  { num: '04', name: 'AI Consulting', desc: 'Strategic guidance without a full build. Technology evaluation, vendor assessment, architecture review.', price: 'Custom pricing', href: '/services/consulting' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24">
          <div>
            <FadeIn delay={0}>
              <div className="flex items-center gap-2 mb-8">
                <FlameMark size="sm" />
                <span className="sl-eyebrow">What We Build</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2 className="sl-h2 text-navy-800 mb-6">Four ways to solve your most expensive problem.</h2>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="sl-body-lg max-w-[52ch] mb-8">One problem per engagement. Fixed price. You own everything. No subscriptions, no black boxes, no one-size-fits-all.</p>
            </FadeIn>
          </div>

          <div className="space-y-4">
            {services.map((s, i) => (
              <FadeIn key={s.num} delay={0.2 + i * 0.1}>
                <a href={s.href} className="block group cursor-pointer">
                  <div className="flex items-start gap-6 bg-white border border-navy-200/80 hover:border-gold-500/60 shadow-1 hover:shadow-3 rounded p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5">
                    <span className="font-mono text-lg text-gold-600/70 flex-shrink-0 pt-0.5">{s.num}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-2 group-hover:text-navy-600 transition-colors duration-200">{s.name}</h3>
                      <p className="font-sans text-sm text-fg2 leading-relaxed mb-3">{s.desc}</p>
                      <span className="font-mono text-xs text-gold-600 font-medium">{s.price}</span>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}