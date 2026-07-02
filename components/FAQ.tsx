'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const faqs = [
  { q: 'What is a Discovery Session?', a: 'A 60-minute working session. We map your current operations, identify your best AI opportunity, and give you a written action plan whether you hire us or not. $300.' },
  { q: 'How long does it take?', a: 'Most projects ship in 2-6 weeks. AI Automation: 1-2 weeks. An AI agent system: 3-6 weeks. We set the timeline clearly during the Discovery Session before any work starts.' },
  { q: 'What does it cost?', a: 'Discovery Session: $300. AI Automation from $1,200. AI Agent Systems from $5,000. Custom AI Systems from $5,000. Full apps are scoped individually. Every project is fixed-price; you know the cost before we start.' },
  { q: 'Will AI replace my team?', a: 'No. And that is the whole point. Every system we build handles the repetitive work so your people can focus on judgment, relationships, and strategy. AI processes the inputs. Your team owns the outcomes.' },
  { q: 'Who owns the code and data?', a: 'You do. Full ownership on final payment. No licensing fees. No vendor lock-in. No platform tax. Your data stays yours.' },
  { q: 'What if my team won\'t use it?', a: 'We design systems around how your team already works, not the other way around. No new login to learn. No new process to memorize. If it creates more work instead of less, we fix it.' },
  { q: 'What tools do you integrate with?', a: 'CRM, email, calendars, spreadsheets, databases, Slack, QuickBooks, property management software, inventory systems. If it has an API or exports data, we can connect to it.' },
  { q: 'What\'s required from me during the build?', a: 'One hour for the Discovery Session to map your process. One hour to review and approve the prototype. After that, your job is to use the system and tell us what to improve.' },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-navy-900 py-32 md:py-40">
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_center_left,rgba(217,164,52,0.03),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-6 flex items-center gap-4">
            We've Heard These Before <span className="h-px w-8 bg-gold-600/40" />
          </span>
        </FadeIn>
        <FadeIn delay={0.12}>
          <h2 className="sl-h2 text-bone-50 mb-24">
            Your honest questions. Straight answers.
          </h2>
        </FadeIn>
        <div className="space-y-0">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={0.2 + i * 0.08}>
              {i > 0 && <div className="h-px bg-bone-300/10" />}
              <div className="pt-16 pb-16">
                <h3 className="font-display text-xl md:text-2xl text-bone-50 mb-6">{f.q}</h3>
                <p className="font-sans text-base md:text-lg text-bone-300/65 leading-relaxed max-w-[60ch]">{f.a}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
