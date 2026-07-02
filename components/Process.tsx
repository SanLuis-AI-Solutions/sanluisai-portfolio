'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FlameMark from '@/components/FlameMark'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const steps = [
  { num: '01', title: 'Discover', desc: 'We pick the one process eating the most time or money. Map it completely. Find exactly which hours we can give back.', time: '60 min' },
  { num: '02', title: 'Build', desc: 'We design a custom AI system for that specific process. No templates. No bloat. You own the code, not a subscription.', time: '2-4 weeks' },
  { num: '03', title: 'Ship', desc: 'Installed into your real workflow. Your team trained. Your baseline measured. You see the difference immediately.', time: 'Shipped' },
  { num: '04', title: 'Maintain', desc: 'Monthly check-ins. Priority support. We evolve the system as your business does. Built to grow with you.', time: 'Ongoing' },
]

export default function Process() {
  return (
    <section className="relative py-32 md:py-40 bg-bgCanvas overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(17,36,71,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative">
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 mb-16">
            <FlameMark size="sm" />
            <span className="sl-eyebrow">Our Process</span>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gold-600/20 hidden md:block" />

          <div className="space-y-16 md:space-y-24 pl-0 md:pl-16">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={0.15 + i * 0.15}>
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                  {/* Number + circle */}
                  <div className="flex items-center gap-4 md:flex-col md:items-center">
                    <div className="relative flex-shrink-0">
                      <svg width="56" height="56" viewBox="0 0 56 56" className="text-gold-500" aria-hidden="true">
                        <circle cx="28" cy="28" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <text x="28" y="34" textAnchor="middle" fill="currentColor" fontSize="20" fontFamily="serif" fontWeight="600">{s.num}</text>
                      </svg>
                    </div>
                    <div className="md:hidden">
                      <div className="flex items-center gap-3">
                        <h3 className="font-display text-2xl text-navy-800">{s.title}</h3>
                        <span className="font-mono text-[10px] text-gold-600 tracking-[0.08em] uppercase">{s.time}</span>
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div>
                    <div className="hidden md:flex items-center gap-4 mb-4">
                      <h3 className="font-display text-3xl md:text-4xl text-navy-800">{s.title}</h3>
                      <span className="font-mono text-[10px] text-gold-600 tracking-[0.08em] uppercase">{s.time}</span>
                    </div>
                    <p className="font-sans text-base md:text-lg text-fg2 leading-relaxed max-w-[56ch]">{s.desc}</p>
                    {/* Visual accent — gold bar that animates width */}
                    <div className="mt-6 h-px bg-gold-600/20 overflow-hidden">
                      <motion.div
                        className="h-full bg-gold-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}