'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const faqs = [
  { q: 'What is a Discovery Session?', a: 'A focused 60-minute working session where we map your current operations, identify your highest-leverage AI opportunity, and build a clear action plan. You leave with a written roadmap — whether you hire us or not. $300.' },
  { q: 'How long does it take to build an AI system?', a: 'Most projects ship in 2-6 weeks depending on complexity. A workflow automation is typically 1-2 weeks. An AI agent system is 3-6 weeks. We set a clear timeline during the Discovery Session before any work begins.' },
  { q: 'What does it cost?', a: 'Discovery Session: $300. Workflow automation starts at $1,200. AI agent systems start at $5,000. Full applications are scoped individually. Every project is fixed-price — you know the cost before work begins.' },
  { q: 'Will AI replace my team?', a: 'No — and that\'s the whole point. Every system we build is designed to handle the repetitive work so your people can focus on judgment, relationships, and strategy. AI handles the inputs. Your team handles the outcomes.' },
  { q: 'Who owns the code and data?', a: 'You do. Full source ownership upon final payment. No licensing fees. No vendor lock-in. No ongoing platform tax. Your data stays yours.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-32 md:py-40 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center_left,rgba(217,164,52,0.03),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-8 flex items-center gap-4">Common Questions <span className="h-px w-8 bg-gold-600/40" /></span></FadeIn>
        <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bone-50 font-medium leading-[1.08] tracking-[-0.025em] mb-16">Frequently asked questions.</h2></FadeIn>
        <div className="divide-y divide-bone-300/10">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              <div className="py-8 first:pt-0 last:pb-0">
                <h3 className="font-display text-xl text-bone-50 mb-3">{f.q}</h3>
                <p className="font-sans text-base text-bone-300/65 leading-relaxed">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
