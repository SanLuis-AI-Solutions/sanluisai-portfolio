'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const donts = [
  {
    title: "We don't resell templates.",
    desc: "Every system is built from scratch for your specific process. No off-the-shelf software rebranded as custom. No boilerplate. No shortcuts.",
  },
  {
    title: "We don't lock you in.",
    desc: "You own the code. Full ownership on final payment. No license fees. No platform tax. No vendor hostage. You can walk away with everything we built.",
  },
  {
    title: "We don't pitch you.",
    desc: "The Discovery Session is one working session. You get a written roadmap whether you buy or not. No demo theater. No high-pressure close.",
  },
  {
    title: "We don't build black boxes.",
    desc: "You understand what the system does, why it does it, and how to change it. No consultants required just to maintain it. No proprietary frameworks.",
  },
]

export default function WhatWeDont() {
  return (
    <section id="what-we-dont" className="relative overflow-hidden bg-navy-900 py-32 md:py-40">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,164,52,0.05),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <FadeIn delay={0}>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-6 flex items-center justify-center gap-4">
              What We Don't Do <span className="h-px w-8 bg-gold-600/40" />
            </span>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bone-50 font-medium leading-[1.08] tracking-[-0.025em] mb-6">
              We draw lines. That's how trust works.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-base md:text-lg text-bone-300/65 leading-relaxed max-w-[52ch] mx-auto">
              If another agency commits to all four, we'll happily refer you to them.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {donts.map((item, i) => (
            <FadeIn key={i} delay={0.25 + i * 0.1}>
              <div className="bg-bone-100 border border-navy-200 hover:border-gold-500/50 rounded p-10 md:p-12 h-full flex flex-col transition-all duration-300">
                <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-fg2 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.65}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-bone-100 rounded px-5 py-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold-600 flex-shrink-0">
                <path d="M8 3v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="font-sans text-xs text-fg2 leading-relaxed">
                <strong className="text-navy-800">Online only.</strong> No office lease. No overhead. No travel time billing. Every saving passes to your price.
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
