'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} className={className} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const commitments = [
  { num: '01', title: 'You own everything we build.', desc: 'Full source code ownership on final payment. No license fees. No platform tax. No vendor lock-in. Your system stays yours, forever.' },
  { num: '02', title: 'We build for your problem, not ours.', desc: 'Every system is designed from scratch for your specific process. No templates rebranded as custom. No boilerplate. No shortcuts.' },
  { num: '03', title: 'No pitch, no pressure.', desc: 'The Discovery Session is one working session. You get a written roadmap whether you buy or not. No demo theater. No high-pressure close.' },
  { num: '04', title: 'No black boxes. Ever.', desc: 'You understand what the system does, why it does it, and how to change it. No consultants required just to maintain it. No proprietary frameworks.' },
]

export default function WhatWeDont() {
  return (
    <section id="commitments" className="relative overflow-hidden bg-navy-900 py-32 md:py-40">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,164,52,0.05),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn delay={0}>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-6 flex items-center justify-center gap-4">
              How We Work <span className="h-px w-8 bg-gold-600/40" />
            </span>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="sl-h2 text-bone-50 mb-6">Four promises we keep on every engagement.</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-sans text-base md:text-lg text-bone-300/65 leading-relaxed max-w-[52ch] mx-auto">No fine print. No surprises. Just clear commitments that protect your time, your budget, and your business.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((item, i) => (
            <FadeIn key={i} delay={0.25 + i * 0.1}>
              <div className="group bg-bone-100 border border-navy-200/60 hover:border-gold-500/50 shadow-1 hover:shadow-3 rounded-lg p-10 md:p-12 h-full flex flex-col relative transition-all duration-300 hover:-translate-y-0.5">
                <div className="absolute top-0 left-6 right-6 h-px bg-gold-600/40 group-hover:bg-gold-500/60 transition-colors duration-300" />
                <span className="font-mono text-[9px] text-gold-600/70 tracking-[0.18em] mb-8">{item.num}</span>
                <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-4">{item.title}</h3>
                <p className="font-sans text-sm text-fg2 leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}