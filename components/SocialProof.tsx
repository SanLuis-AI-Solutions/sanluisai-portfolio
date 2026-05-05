'use client'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  return (<motion.div ref={ref} initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }} animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const testimonials = [
  { quote: 'The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.', attribution: '— Real estate investor, Garza International' },
  { quote: 'I had a website up and booking clients in two weeks. The AI follow-up alone recovered three leads my old system had lost.', attribution: '— Small business owner, Susie\'s Jewelry Repair' },
  { quote: 'The matching engine was the piece we couldn\'t build ourselves. Six weeks later, engagement was up 40%.', attribution: '— Founder, LoveFlow' },
]

export default function SocialProof() {
  return (
    <section className="py-24 bg-bone-200">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <span className="sl-eyebrow mb-6">Trusted by Operators</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 mb-20">
            <span className="font-display text-2xl md:text-3xl text-navy-800 opacity-60 hover:opacity-100 transition-opacity duration-300">Garza International</span>
            <span className="font-display text-2xl md:text-3xl text-navy-800 opacity-60 hover:opacity-100 transition-opacity duration-300">Susie&apos;s Jewelry Repair</span>
            <span className="font-display text-2xl md:text-3xl text-navy-800 opacity-60 hover:opacity-100 transition-opacity duration-300">LoveFlow</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="space-y-8 max-w-3xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="relative pl-6 border-l-2 border-gold-500/40">
                <p className="font-display text-lg md:text-xl text-navy-700 italic leading-relaxed mb-2">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-sans text-sm text-navy-500">{t.attribution}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
