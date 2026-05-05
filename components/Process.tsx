'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const steps = [
  { num: '1', title: 'Audit', desc: 'We pick the one process eating the most time or money. Map it completely. Find exactly where AI changes the math.', time: '60 min' },
  { num: '2', title: 'Build', desc: 'We design a custom AI system for that specific process. No templates. No bloat. You own the code, not a subscription.', time: '2-4 weeks' },
  { num: '3', title: 'Deploy', desc: 'Installed into your real workflow. Your team trained. Your baseline measured. You see the difference immediately.', time: 'Shipped' },
  { num: '4', title: 'Grow', desc: 'Monthly check-ins. Priority support. We evolve the system as your business does. 91% of AI adopters report revenue growth — we make sure you\'re in that 91%.', time: 'Ongoing' },
]

export default function Process() {
  return (
    <section className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="sl-eyebrow mb-8">Our Process</span></FadeIn>
        <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-4">Audit. Build. Deploy. Grow.</h2></FadeIn>
        <FadeIn delay={0.2}><p className="sl-body-lg max-w-[56ch] mb-16">From "what's wasting my money" to "it's running itself" — in weeks, not quarters.</p></FadeIn>
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
