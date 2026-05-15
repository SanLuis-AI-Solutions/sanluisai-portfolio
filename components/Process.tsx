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
  { num: '1', title: 'Discover', desc: 'We pick the one process eating the most time or money. Map it completely. Find exactly where AI changes the math.', time: '60 min' },
  { num: '2', title: 'Build', desc: 'We design a custom AI system for that specific process. No templates. No bloat. You own the code, not a subscription.', time: '2-4 weeks' },
  { num: '3', title: 'Ship', desc: 'Installed into your real workflow. Your team trained. Your baseline measured. You see the difference immediately.', time: 'Shipped' },
  { num: '4', title: 'Maintain', desc: 'Monthly check-ins. Priority support. We evolve the system as your business does. 91% of AI adopters report revenue growth: we make sure you\'re in that 91%.', time: 'Ongoing' },
]

/* Arrow connector SVG — single horizontal arrow between two steps */
function ArrowConnector() {
  return (
    <svg
      viewBox="0 0 32 24"
      width="32"
      height="24"
      className="text-gold-400/50 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" />
      <polyline points="20,6 26,12 20,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Process() {
  return (
    <section className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 mb-8">
            <FlameMark size="sm" />
            <span className="sl-eyebrow">Our Process</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-4">Discover. Build. Ship. Maintain.</h2></FadeIn>
        <FadeIn delay={0.2}><p className="sl-body-lg max-w-[56ch] mb-16">From &quot;what&apos;s wasting my money&quot; to &quot;it&apos;s running itself&quot;: in weeks, not quarters.</p></FadeIn>

        {/* Mobile: stacked cards */}
        <div className="flex md:hidden flex-col gap-3">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={0.2 + i * 0.1}>
              <div className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220 group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative">
                    <svg width="36" height="36" viewBox="0 0 36 36" className="text-gold-500" aria-hidden="true">
                      <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text x="18" y="21" textAnchor="middle" fill="currentColor" fontSize="14" fontFamily="serif" fontWeight="600">{s.num}</text>
                    </svg>
                  </div>
                  <h3 className="font-display text-lg text-navy-800 group-hover:text-navy-600 transition-colors duration-200">{s.title}</h3>
                  <div className="ml-auto font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase whitespace-nowrap">{s.time}</div>
                </div>
                <p className="font-sans text-sm text-fg2 leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Desktop: horizontal flow with arrows */}
        <div className="hidden md:flex items-start justify-between gap-8">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={0.2 + i * 0.12}>
              <div className="flex-1 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative flex-shrink-0">
                    <svg width="44" height="44" viewBox="0 0 44 44" className="text-gold-500" aria-hidden="true">
                      <circle cx="22" cy="22" r="20" fill="none" stroke="currentColor" strokeWidth="1.5" />
                      <text x="22" y="26" textAnchor="middle" fill="currentColor" fontSize="18" fontFamily="serif" fontWeight="600">{s.num}</text>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-navy-800 group-hover:text-navy-600 transition-colors duration-200">{s.title}</h3>
                    <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase">{s.time}</div>
                  </div>
                </div>
                <p className="font-sans text-sm text-fg2 leading-relaxed pl-[56px]">{s.desc}</p>
                {/* Arrow connector to the next step */}
                {i < steps.length - 1 && (
                  <div className="flex justify-center mt-2 pl-[56px]">
                    <ArrowConnector />
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Visual flow bar — signature connecting line */}
        <FadeIn delay={0.6}>
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="relative">
              <svg viewBox="0 0 600 4" className="w-full h-1" preserveAspectRatio="none" aria-hidden="true">
                <line x1="0" y1="2" x2="600" y2="2" stroke="#D9A434" strokeWidth="1" strokeOpacity="0.25" />
                <circle cx="0" cy="2" r="2" fill="#D9A434" />
                <circle cx="200" cy="2" r="2" fill="#D9A434" />
                <circle cx="400" cy="2" r="2" fill="#D9A434" />
                <circle cx="600" cy="2" r="2" fill="#D9A434" />
              </svg>
              <div className="flex justify-between mt-1">
                {steps.map((s) => (
                  <span key={s.num} className="font-mono text-[9px] text-navy-400 tracking-[0.12em] uppercase">{s.title}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
