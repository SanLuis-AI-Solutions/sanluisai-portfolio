'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

function GoldThread({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (<div ref={ref} className="h-px bg-gold-600 overflow-hidden"><motion.div className="h-full bg-gold-600" initial={{ width: 0 }} animate={inView ? { width: '100%' } : {}} transition={{ duration: 1.2, delay, ease: [0.2, 0.7, 0.2, 1] }} /></div>)
}

const steps = [
  { num: '01', title: 'Discovery Session', stat: '60 min', desc: 'Paid session. We map your workflow, find the opportunity, and deliver a written action plan within 24 hours — regardless of whether you hire us.' },
  { num: '02', title: 'Custom Build', stat: '2-4 wk', desc: 'We build the system using AI-native tools. No black boxes. No ongoing license fees. Full source ownership on delivery.' },
  { num: '03', title: 'Measured Result', stat: 'Verified', desc: 'We track the outcome against the baseline. Margin recovered, time compressed, throughput improved — the number that proves it worked.' },
]

export default function Solution() {
  return (
    <section id="solution" className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="sl-eyebrow mb-8">How We Deliver</span></FadeIn>
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 mb-20">
          <div>
            <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">Discover. Build. Ship. Maintain.</h2></FadeIn>
            <FadeIn delay={0.2}><p className="sl-lede mb-8 max-w-[48ch]">One engagement, one clear result. No theatre.</p></FadeIn>
            <FadeIn delay={0.3}><GoldThread delay={0.3} /></FadeIn>
          </div>
          <div className="space-y-4">
            {steps.map((s, i) => (
              <FadeIn key={s.num} delay={0.2 + i * 0.1}>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 bg-white border border-navy-200 rounded p-6 md:p-8 hover:border-navy-900 transition-all duration-220 group">
                  <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1 md:w-24 flex-shrink-0">
                    <span className="font-display text-xl text-gold-600 leading-none">{s.num}</span>
                    <span className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase">{s.stat}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-navy-800 mb-2 group-hover:text-navy-600 transition-colors duration-200">{s.title}</h3>
                    <p className="sl-body-sm">{s.desc}</p>
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
