'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const steps = [
  { num: '1', title: 'Discovery', desc: 'Paid $300 session. We map your operations, identify your highest-leverage AI opportunity, and deliver a written roadmap with clear next steps.', time: '60 min' },
  { num: '2', title: 'Build', desc: 'We design and build the system using AI-native tools. No traditional dev team. No six-month timeline. Full source ownership.', time: '2-4 weeks' },
  { num: '3', title: 'Ship', desc: 'Deployed, tested, and in your team\'s hands. We document, train, and support until your team is confident and the system is stable.', time: 'Deployed' },
  { num: '4', title: 'Maintain', desc: 'Ongoing support, monitoring, and optimization. Monthly check-ins, priority response, and continuous improvement as your business evolves.', time: 'Monthly' },
]

export default function Process() {
  return (
    <section className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="sl-eyebrow mb-8">How We Work</span></FadeIn>
        <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-4">Discover. Build. Ship. Maintain.</h2></FadeIn>
        <FadeIn delay={0.2}><p className="sl-body-lg max-w-[56ch] mb-16">From first conversation to production — and beyond.</p></FadeIn>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <FadeIn key={s.num} delay={0.2 + i * 0.1}>
              <div className="bg-white border border-navy-200 rounded p-6 md:p-8 hover:border-navy-900 transition-all duration-220 group h-full">
                <div className="font-display text-2xl text-gold-600 mb-4">{s.num}</div>
                <h3 className="font-display text-lg text-navy-800 mb-3 group-hover:text-navy-600 transition-colors duration-200">{s.title}</h3>
                <p className="font-sans text-sm text-fg2 leading-relaxed mb-6">{s.desc}</p>
                <div className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase">{s.time}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
