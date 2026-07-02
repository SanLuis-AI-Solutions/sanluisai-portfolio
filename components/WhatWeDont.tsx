'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} className={className} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

function GoldThread({ delay = 0 }: { delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="h-px bg-gold-600/30 overflow-hidden">
      <motion.div
        className="h-full bg-gold-600"
        initial={{ width: 0 }}
        animate={inView ? { width: '100%' } : {}}
        transition={{ duration: 1.2, delay, ease: [0.2, 0.7, 0.2, 1] }}
      />
    </div>
  )
}

const donts = [
  {
    num: '01',
    title: "We don't resell templates.",
    desc: "Every system is built from scratch for your specific process. No off-the-shelf software rebranded as custom. No boilerplate. No shortcuts.",
  },
  {
    num: '02',
    title: "We don't lock you in.",
    desc: "You own the code. Full ownership on final payment. No license fees. No platform tax. No vendor hostage. You can walk away with everything we built.",
  },
  {
    num: '03',
    title: "We don't pitch you.",
    desc: "The Discovery Session is one working session. You get a written roadmap whether you buy or not. No demo theater. No high-pressure close.",
  },
  {
    num: '04',
    title: "We don't build black boxes.",
    desc: "You understand what the system does, why it does it, and how to change it. No consultants required just to maintain it. No proprietary frameworks.",
  },
]

export default function WhatWeDont() {
  return (
    <section id="what-we-dont" className="relative overflow-hidden bg-navy-900 py-32 md:py-40">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,164,52,0.05),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn delay={0}>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-6 flex items-center justify-center gap-4">
              What We Don't Do <span className="h-px w-8 bg-gold-600/40" />
            </span>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="sl-h2 text-bone-50 mb-6">
              We draw lines. That's how trust works.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-base md:text-lg text-bone-300/65 leading-relaxed max-w-[52ch] mx-auto">
              If another agency commits to all four, we'll happily refer you to them.
            </p>
          </FadeIn>
        </div>

        {/* Cards — numbered with gold accent bars, matching Problem + Services patterns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {donts.map((item, i) => (
            <FadeIn key={i} delay={0.25 + i * 0.1}>
              <div className="group bg-bone-100 border border-navy-200/60 hover:border-gold-500/50 shadow-1 hover:shadow-3 rounded p-10 md:p-12 h-full flex flex-col relative transition-all duration-300 hover:-translate-y-0.5">
                {/* Gold top accent bar — matches Problem HeroCard pattern */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gold-600/40 group-hover:bg-gold-500/60 transition-colors duration-300" />
                {/* Numbered marker — matches Services monospace numbering */}
                <span className="font-mono text-[9px] text-gold-600/70 tracking-[0.18em] mb-8">
                  {item.num}
                </span>
                <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-fg2 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* GoldThread + Online-only badge — integrated like Services GoldThread flow */}
        <FadeIn delay={0.65}>
          <div className="mt-16 max-w-[600px] mx-auto">
            <GoldThread delay={0.65} />
            <div className="mt-8 text-center">
              <span className="font-sans text-xs text-bone-400/50 leading-relaxed">
                <strong className="text-gold-500 font-semibold tracking-[0.08em] uppercase">Online only.</strong>{' '}
                <span className="text-bone-300/60">No office lease. No overhead. No travel time billing. Every saving passes to your price.</span>
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
