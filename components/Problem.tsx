'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} className={className} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const problemSectors = [
  { num: '01', name: 'Manufacturing', stat: '$50B', statLabel: 'lost annually', desc: 'Unplanned downtime at $260K/hour. One AI agent can monitor, predict, and alert before failure.' },
  { num: '02', name: 'Healthcare', stat: '$350B', statLabel: 'admin waste/yr', desc: 'Your staff spends days on paperwork AI can finish in hours. No coding required.' },
  { num: '03', name: 'Real Estate', stat: '60×', statLabel: 'faster response', desc: 'Every hour you wait to respond, your conversion odds drop 60×. AI responds in seconds.' },
  { num: '04', name: 'Professional Services', stat: '60-80%', statLabel: 'manual overhead', desc: 'Onboarding, billing, reporting — most of it is repetitive work AI can automate.' },
  { num: '05', name: 'Logistics', stat: '$1.2T', statLabel: 'waste globally', desc: 'Route optimization, carrier coordination, demand forecasting — still on spreadsheets.' },
  { num: '06', name: 'Retail', stat: '71%', statLabel: 'want personalization', desc: 'Shoppers expect personalized experiences. Static rules and batch campaigns miss the moment.' },
]

export default function Problem() {
  return (
    <section id="problem" className="py-32 md:py-40 bg-bone-100 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(17,36,71,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-4xl">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 mb-8">
              <FlameMark size="sm" />
              <span className="sl-eyebrow">The Problem</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <h2 className="sl-h2 text-navy-800 mb-6">Your team is burning hours on work AI could do in seconds.</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="sl-lede max-w-[56ch]">You don&apos;t need to understand how AI works. You need to know what it can actually save you: in dollars, hours, and missed opportunities.</p>
          </FadeIn>

          {/* Founder POV block */}
          <FadeIn delay={0.28}>
            <div className="relative max-w-2xl bg-white border border-navy-200/80 shadow-2 hover:shadow-3 transition-shadow duration-300 rounded p-8 md:p-10 mt-12 mb-16">
              <div className="absolute top-0 left-8 right-8 h-px bg-gold-600/40" />
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2 flex-shrink-0">
                  <Image src="/daniel-headshot.jpg" alt="Daniel San Luis" width={80} height={80} className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-gold-600/30" />
                </div>
                <div>
                  <p className="font-display text-base md:text-lg text-navy-800 leading-relaxed mb-4">I built SanLuis AI because I watched good operators lose hours to work a machine could finish in minutes. Not because they didn&apos;t try. Because the solutions they found were built for enterprise teams and six-figure budgets.</p>
                  <p className="font-display text-base md:text-lg text-navy-800 leading-relaxed mb-4">We build for the people who actually run the business. One problem. One fixed price. You own everything. No subscriptions, no sales team, no jargon.</p>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase">Daniel San Luis</span>
                    <span className="font-sans text-[10px] text-navy-400">Founder, SanLuis AI Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Industry grid — redesigned with imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {problemSectors.map((item, i) => (
            <FadeIn key={item.num} delay={0.3 + i * 0.06}>
              <div className="group bg-white border border-navy-200/60 hover:border-gold-500/50 shadow-1 hover:shadow-3 rounded-lg p-6 md:p-8 h-full flex flex-col relative transition-all duration-300 hover:-translate-y-0.5">
                {/* Gold top accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gold-600/30 group-hover:bg-gold-500/60 transition-colors duration-300" />
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] text-gold-600/60 tracking-[0.12em]">{item.num}</span>
                  <div className="w-8 h-8 rounded-full bg-navy-100/50 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-navy-400">
                      <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-3">{item.name}</div>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-display text-2xl text-navy-800 font-medium leading-none">{item.stat}</span>
                  <span className="font-sans text-[10px] text-navy-400 uppercase tracking-[0.06em]">{item.statLabel}</span>
                </div>
                <p className="font-sans text-sm text-fg2 leading-relaxed flex-1">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}