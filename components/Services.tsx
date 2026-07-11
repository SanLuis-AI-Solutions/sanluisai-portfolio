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
  { num: '01', name: 'AI Automation', desc: 'Stop doing it manually. We build the automation that runs your process every time, without fail.', price: 'From $1,200', href: '/services/automation', icon: 'M12 6v6l4 2' },
  { num: '02', name: 'AI Agent Systems', desc: '24/7 intelligent coverage. Agents that intake, qualify, research, and route without adding headcount.', price: 'From $5,000', href: '/services/agents', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { num: '03', name: 'Custom AI Systems', desc: 'An app built around how your business actually works. Designed, built, and deployed in weeks.', price: 'From $5,000', href: '/services/custom-ai', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { num: '04', name: 'AI Consulting', desc: 'Strategic guidance without a full build. Technology evaluation, vendor assessment, architecture review.', price: 'Custom pricing', href: '/services/consulting', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 md:py-40 bg-bone-100 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(17,36,71,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative">
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
                  <motion.div
                    className="flex items-start gap-6 bg-white border border-navy-200/80 hover:border-gold-500/60 shadow-1 hover:shadow-3 rounded-lg p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-gold-50/30 group-active:scale-[0.99]"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Icon container */}
                    <div className="w-12 h-12 rounded-full bg-navy-50 border border-navy-200/50 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-50 group-hover:border-gold-600/30 group-hover:scale-105 transition-all duration-300">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-navy-500 group-hover:text-gold-600 transition-colors duration-300" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d={s.icon} />
                          </svg>
                        </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="font-mono text-[10px] text-gold-600/60 tracking-[0.12em]">{s.num}</span>
                        <h3 className="font-display text-xl md:text-2xl text-navy-800 group-hover:text-navy-600 transition-colors duration-200">{s.name}</h3>
                      </div>
                      <p className="font-sans text-sm text-fg2 leading-relaxed mb-3">{s.desc}</p>
                      <span className="font-mono text-xs text-gold-600 font-medium">{s.price}</span>
                    </div>
                  </motion.div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}