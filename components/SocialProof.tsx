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
    attribution: 'Carlos Garza, Director of Operations, Garza International',
    result: '60% faster quoting',
  },
  {
    company: 'Susie\u2019s Jewelry Repair',
    role: 'Retail',
    quote: 'I had a website up and booking clients in two weeks. The AI follow-up alone recovered three leads my old system had lost.',
    attribution: 'Susie Castellano, Owner, Susie\u2019s Jewelry Repair',
    result: '3x inbound leads',
  },
  {
    company: 'LoveFlow',
    role: 'Faith-Based Relationship App',
    quote: 'The AI-assisted design process turned our concept into a working prototype in weeks, not months. The team understood our vision from the first conversation.',
    attribution: 'LoveFlow Team',
    result: 'AI-assisted app design',
  },
]

const reviewLdJson = {
  '@context': 'https://schema.org',
  '@graph': testimonials.map((t, i) => ({
    '@type': 'Review',
    '@id': `https://sanluisai-portfolio.vercel.app/#review-${i + 1}`,
    name: `Review by ${t.company}`,
    reviewBody: t.quote,
    author: { '@type': 'Person', name: t.attribution },
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': 'https://sanluisai-portfolio.vercel.app/#organization',
    },
  })),
}

export default function SocialProof() {
  const marqueeItems = 'Garza International \u00b7 60% faster quoting \u00b7 Susie\'s Jewelry Repair \u00b7 3\u00d7 leads \u00b7 LoveFlow \u00b7 3-day design \u00b7 '

  return (
    <section className="py-32 md:py-40 bg-bone-200 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLdJson) }}
      />
      {/* Marquee/ticker band */}
      <div className="w-full overflow-hidden mb-20 border-t border-b border-gold-600/10 py-4">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-mono text-xs text-navy-700 tracking-[0.12em] uppercase">{marqueeItems}</span>
          <span className="font-mono text-xs text-navy-700 tracking-[0.12em] uppercase">{marqueeItems}</span>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <div className="flex items-center justify-center gap-2 mb-16">
            <FlameMark size="sm" />
            <span className="sl-eyebrow text-center">Real Results, Real Businesses</span>
          </div>
        </FadeIn>

        {/* Results metric cards */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-white/70 shadow-2 hover:shadow-3 rounded p-6 text-center hover:-translate-y-0.5 hover:border-gold-600/30 transition-all duration-300">
              <div className="font-display text-3xl text-gold-600 mb-1">60%</div>
              <div className="font-sans text-xs text-navy-700 uppercase tracking-wider">Faster quoting</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-white/70 shadow-2 hover:shadow-3 rounded p-6 text-center hover:-translate-y-0.5 hover:border-gold-600/30 transition-all duration-300">
              <div className="font-display text-3xl text-gold-600 mb-1">3x</div>
              <div className="font-sans text-xs text-navy-700 uppercase tracking-wider">Inbound leads</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-white/70 shadow-2 hover:shadow-3 rounded p-6 text-center hover:-translate-y-0.5 hover:border-gold-600/30 transition-all duration-300">
              <div className="font-display text-3xl text-gold-600 mb-1">92%</div>
              <div className="font-sans text-xs text-navy-700 uppercase tracking-wider">Client satisfaction</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-white/70 shadow-2 hover:shadow-3 rounded p-6 text-center hover:-translate-y-0.5 hover:border-gold-600/30 transition-all duration-300">
              <div className="font-display text-3xl text-gold-600 mb-1">14d</div>
              <div className="font-sans text-xs text-navy-700 uppercase tracking-wider">Avg. to prototype</div>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <FadeIn key={i} delay={0.15 + i * 0.1}>
              <div className="bg-white/80 backdrop-blur-sm border border-white/70 shadow-2 hover:shadow-3 rounded p-8 md:p-10 h-full flex flex-col hover:-translate-y-1 hover:border-gold-600/40 transition-all duration-300">
                <div className="mb-6">
                  <div className="font-display text-2xl text-navy-800 mb-1">{t.company}</div>
                  <div className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-600">{t.role}</div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="relative pl-6 border-l-2 border-gold-500/40 mb-4">
                    <p className="font-display text-base md:text-lg text-navy-700 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  </div>
                    <p className="font-sans text-xs text-navy-700">{t.attribution}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}