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
  { num: '01', title: 'We Find Your Leverage Point', stat: '60 min', desc: 'A paid working session. Not a pitch. We map your operations, identify the single process costing you the most, and show you exactly what AI would do to fix it — in writing, within 24 hours.' },
  { num: '02', title: 'We Build What You Actually Need', stat: '2-4 wk', desc: 'Your process becomes a custom AI system. No off-the-shelf. No ongoing license fees. You own every line of code. We handle deployment, training, and documentation.' },
  { num: '03', title: 'You See The Number That Matters', stat: 'Verified', desc: 'We measure against your baseline — hours saved, margin recovered, throughput improved. 91% of AI-using SMBs report revenue increases. We prove yours is one of them.' },
]

export default function Solution() {
  return (
    <section id="solution" className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="sl-eyebrow mb-8">How It Works</span></FadeIn>
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 mb-20">
          <div>
            <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">You don't need a team of engineers. You need one clear process.</h2></FadeIn>
            <FadeIn delay={0.2}><p className="sl-lede mb-8 max-w-[48ch]">Three steps from discovery to deployment. No jargon. No six-month timelines. Just a system that does the work you're tired of doing.</p></FadeIn>
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
