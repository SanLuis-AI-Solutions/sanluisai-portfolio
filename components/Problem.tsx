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
  {
    name: 'Manufacturing',
        desc: 'Unplanned downtime costs US manufacturers an estimated $50 billion annually (Deloitte 2017). At $260,000 per hour of outage, you cannot afford to wait until something breaks.',
        stat: '$50B',
        statLabel: 'lost annually',
        hero: true,
  },
  {
    name: 'Healthcare',
    desc: 'Administrative waste accounts for an estimated $350 billion annually in the US healthcare system (CAQH 2023 Index). Your staff spends days on what AI can finish in hours.',
    hero: false,
  },
  {
    name: 'Real Estate',
        desc: 'Every hour you wait to respond, your conversion odds drop 60x (Harvard Business Review 2011). AI users respond in seconds while most businesses take hours.',
    hero: false,
  },
  {
    name: 'Professional Services',
        desc: '60-80% of your onboarding overhead is manual. More than two-thirds of corporate clients expect digital service (McKinsey 2021).',
    stat: '60-80%',
    statLabel: 'manual overhead',
    hero: true,
  },
  {
    name: 'Logistics',
        desc: 'Retail out-of-stocks and supply chain waste cost $1.2 trillion globally (IHL Group 2024). Route optimization, demand forecasting, and carrier coordination still run on spreadsheets and phone calls.',
    hero: false,
  },
  {
    name: 'Retail',
        desc: '71% of shoppers expect personalized experiences (McKinsey 2021), but many retailers still rely on static rules and batch campaigns that miss the moment.',
    hero: false,
  },
]

function HeroCard({ item, delay }: { item: typeof problemSectors[0]; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-bone-100 p-10 md:p-14 h-full flex flex-col relative overflow-hidden group hover:bg-bone-50 transition-colors duration-300">
        {/* Gold top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gold-600/40" />
        <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-3">
          {item.name}
        </div>
        {(item.stat || item.statLabel) && (
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-display text-[clamp(2rem,4vw,3.2rem)] text-gold-600 font-medium leading-none tracking-[-0.02em]">
                    {item.stat}
                  </span>
                  <span className="font-sans text-xs text-navy-400 uppercase tracking-[0.08em]">{item.statLabel}</span>
                </div>
                )}
        <p className="font-sans text-sm text-fg2 leading-relaxed">{item.desc}</p>
      </div>
    </FadeIn>
  )
}

function CompactCard({ item, delay, index }: { item: typeof problemSectors[0]; delay: number; index: number }) {
  const hasIcon = index === 1 // only Healthcare gets an icon treatment
  return (
    <FadeIn delay={delay}>
      <div className={`bg-bone-100 p-8 md:p-10 h-full flex flex-col relative group hover:bg-bone-50 transition-colors duration-300 ${hasIcon ? '' : ''}`}>
        {/* Subtle left accent on every other card */}
        <div className={`absolute left-0 top-4 bottom-4 w-px ${index % 2 === 0 ? 'bg-gold-600/15' : 'bg-transparent'}`} />
        <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">
          {item.name}
        </div>
        <p className="font-sans text-sm text-fg2 leading-relaxed">{item.desc}</p>
      </div>
    </FadeIn>
  )
}

export default function Problem() {
  return (
    <section id="problem" className="py-32 md:py-40 bg-bone-100">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 mb-8">
              <FlameMark size="sm" />
              <span className="sl-eyebrow">The Problem</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">Your team is burning hours on work AI could do in seconds.</h2></FadeIn>
          <FadeIn delay={0.2}><p className="sl-lede max-w-[56ch]">You don&apos;t need to understand how AI works. You need to know what it can actually save you: in dollars, hours, and missed opportunities.</p></FadeIn>

          {/* Founder POV block — humanizes the problem before industry specifics */}
          <FadeIn delay={0.28}>
            <div className="relative max-w-2xl bg-white border border-navy-200 rounded p-8 md:p-10 mt-12 mb-16">
              <div className="absolute top-0 left-8 right-8 h-px bg-gold-600/40" />
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-row md:flex-col items-center gap-3 md:gap-2 flex-shrink-0">
                  <Image
                    src="/daniel-headshot.jpg"
                    alt="Daniel San Luis"
                    width={80}
                    height={80}
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover ring-2 ring-gold-600/30"
                  />
                </div>
                <div>
                  <p className="font-display text-base md:text-lg text-navy-800 leading-relaxed mb-4">
                    I built SanLuis AI because I watched good operators lose hours to work a machine could finish in minutes. Not because they didn&apos;t try. Because the solutions they found were built for enterprise teams and six-figure budgets.
                  </p>
                  <p className="font-display text-base md:text-lg text-navy-800 leading-relaxed mb-4">
                    We build for the people who actually run the business. One problem. One fixed price. You own everything. No subscriptions, no sales team, no jargon.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase">Daniel San Luis</span>
                    <span className="font-sans text-[10px] text-navy-400">Founder, SanLuis AI Solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Industry grid — hero cards in column 1, compact cards fill columns 2-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-200 rounded overflow-hidden">
          {/* Row 1: Manufacturing (hero) | Healthcare (compact) | Real Estate (compact) */}
          <HeroCard item={problemSectors[0]} delay={0.35} />
          <CompactCard item={problemSectors[1]} delay={0.43} index={1} />
          <CompactCard item={problemSectors[2]} delay={0.51} index={2} />

          {/* Row 2: Professional Services (hero) | Logistics (compact) | Retail (compact) */}
          <HeroCard item={problemSectors[3]} delay={0.59} />
          <CompactCard item={problemSectors[4]} delay={0.67} index={4} />
          <CompactCard item={problemSectors[5]} delay={0.75} index={5} />
        </div>
      </div>
    </section>
  )
}
