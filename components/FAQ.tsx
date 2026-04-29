'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const faqs = [
  { q: 'What does a Discovery Session produce?', a: 'A written diagnostic that names the bottleneck, quantifies the cost to your business, and recommends a specific build. If we cannot identify the bottleneck, your $300 is returned.' },
  { q: 'How long does a typical engagement take?', a: '2-4 weeks from contract to deploy. We scope tightly. One bottleneck per engagement. No feature creep, no pilot purgatory.' },
  { q: 'Do you build on existing platforms or from scratch?', a: 'Depends on the bottleneck. We default to custom infrastructure when the problem is unique to your operation. We integrate with your stack when the bottleneck is workflow-level, not tool-level.' },
  { q: 'What does it cost?', a: 'Discovery Session: $300. Builds start at $5,000 for tightly-scoped automations and scale to $50,000+ for full infrastructure. Every engagement is outcome-priced — you know the cost before work begins.' },
  { q: 'Who owns the code?', a: 'You do. Full source ownership upon final payment. No licensing fees. No vendor lock-in. No ongoing platform tax. We leave you with the asset.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-32 md:py-40 bg-bone-100">
      <div className="max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="sl-eyebrow mb-8">Questions Operators Ask</span></FadeIn>
        <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-16">Frequently asked questions.</h2></FadeIn>
        <div className="divide-y divide-navy-200">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              <div className="py-8 first:pt-0 last:pb-0">
                <h3 className="font-display text-xl text-navy-800 mb-3">{f.q}</h3>
                <p className="sl-body">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
