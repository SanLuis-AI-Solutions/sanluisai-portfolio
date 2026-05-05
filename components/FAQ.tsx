'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const faqs = [
  { q: 'What is a Discovery Session?', a: 'A 60-minute working session. We map your current operations, identify your best AI opportunity, and give you a written action plan — whether you hire us or not. $300.' },
  { q: 'How long does it take?', a: 'Most projects ship in 2-6 weeks. A workflow automation: 1-2 weeks. An AI agent system: 3-6 weeks. We set the timeline clearly during the Discovery Session before any work starts.' },
  { q: 'What does it cost?', a: 'Discovery Session: $300. Automation starts at $1,200. AI agents start at $5,000. Full apps are scoped individually. Every project is fixed-price — you know the cost before we start.' },
  { q: 'Will AI replace my team?', a: 'No — and that is the whole point. Every system we build handles the repetitive work so your people can focus on judgment, relationships, and strategy. AI processes the inputs. Your team owns the outcomes.' },
  { q: 'Who owns the code and data?', a: 'You do. Full ownership on final payment. No licensing fees. No vendor lock-in. No platform tax. Your data stays yours.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-32 md:py-40 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center_left,rgba(217,164,52,0.03),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-6 flex items-center gap-4">Common Questions <span className="h-px w-8 bg-gold-600/40" /></span></FadeIn>
        <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bone-50 font-medium leading-[1.08] tracking-[-0.025em] mb-20">Frequently asked questions.</h2></FadeIn>
        <div className="divide-y divide-bone-300/10">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              <div className="py-10 first:pt-0 last:pb-0">
                <h3 className="font-display text-xl md:text-2xl text-bone-50 mb-4">{f.q}</h3>
                <p className="font-sans text-base text-bone-300/65 leading-relaxed max-w-[56ch]">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
