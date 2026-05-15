'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import FlameMark from '@/components/FlameMark'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  return (<motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const testimonials = [
  {
    company: 'Garza International',
    role: 'Real Estate Construction',
    quote: 'The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.',
    attribution: 'Real estate investor, Garza International',
  },
  {
    company: 'Susie\u2019s Jewelry Repair',
    role: 'Retail',
    quote: 'I had a website up and booking clients in two weeks. The AI follow-up alone recovered three leads my old system had lost.',
    attribution: 'Small business owner, Susie\u2019s Jewelry Repair',
  },
  {
    company: 'LoveFlow',
    role: 'Consumer App',
    quote: 'The matching engine was the piece we couldn\u2019t build ourselves. Six weeks later, engagement was up 40%.',
    attribution: 'Founder, LoveFlow',
  },
]

export default function SocialProof() {
  return (
    <section className="py-32 md:py-40 bg-bone-200">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <div className="flex items-center justify-center gap-2 mb-16">
            <FlameMark size="sm" />
            <span className="sl-eyebrow text-center">Trusted by Operators</span>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.1}>
              <div className="bg-white border border-navy-200 rounded p-8 md:p-10 h-full flex flex-col hover:border-navy-900 transition-all duration-220">
                <div className="mb-6">
                  <div className="font-display text-2xl text-navy-800 mb-1">{t.company}</div>
                  <div className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-600">{t.role}</div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative pl-6 border-l-2 border-gold-500/40 mb-4">
                    <p className="font-display text-base md:text-lg text-navy-700 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                    <p className="font-sans text-xs text-navy-500">{t.attribution}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
