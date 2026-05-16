'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import FlameMark from '@/components/FlameMark'

function FadeIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} className={className} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const problems = [
  { name: 'Manufacturing', desc: '$50B lost to unplanned downtime every year. At $260K per hour of outage, you can\'t afford to wait until something breaks.', stat: '$50B', statLabel: 'lost annually' },
  { name: 'Healthcare', desc: '$21B in administrative waste still on the table. Your staff spends days on what AI can finish in hours.' },
  { name: 'Real Estate', desc: 'Every hour you wait to respond, your conversion odds drop 60×. AI users respond in 28 seconds; you\'re averaging 42 minutes.' },
  { name: 'Professional Services', desc: '60–80% of your onboarding overhead is manual. Two-thirds of corporate clients expect you to use AI.' },
  { name: 'Logistics', desc: 'Supply chain inefficiencies drain $1.2T globally. Route optimization, demand forecasting, and carrier coordination still run on spreadsheets and phone calls.' },
  { name: 'Retail', desc: '75% of shoppers expect personalized experiences, but 80% of retailers still rely on static rules and batch campaigns that miss the moment.' },
]

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
          <FadeIn delay={0.2}><p className="sl-lede mb-16 max-w-[56ch]">You don't need to understand how AI works. You need to know what it can actually save you: in dollars, hours, and missed opportunities.</p></FadeIn>
        </div>

        {/* Industry grid — 6 industries, 2 rows of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-navy-200 rounded overflow-hidden">
          {/* Manufacturing */}
          <FadeIn delay={0.2}>
            <div className="bg-bone-100 p-10 md:p-14 h-full flex flex-col">
              <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-3">Manufacturing</div>
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-display text-[clamp(2rem,4vw,3.2rem)] text-gold-600 font-medium leading-none tracking-[-0.02em]">
                  {problems[0].stat}
                </span>
                <span className="font-sans text-xs text-navy-400 uppercase tracking-[0.08em]">{problems[0].statLabel}</span>
              </div>
              <p className="font-sans text-sm text-fg2 leading-relaxed">{problems[0].desc}</p>
            </div>
          </FadeIn>

          {/* Secondary card: Healthcare */}
          <FadeIn delay={0.28}>
            <div className="bg-bone-100 p-8 md:p-10 h-full flex flex-col">
              <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">{problems[1].name}</div>
              <p className="font-sans text-sm text-fg2 leading-relaxed">{problems[1].desc}</p>
            </div>
          </FadeIn>

          {/* Secondary card: Real Estate */}
          <FadeIn delay={0.36}>
            <div className="bg-bone-100 p-8 md:p-10 h-full flex flex-col">
              <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">{problems[2].name}</div>
              <p className="font-sans text-sm text-fg2 leading-relaxed">{problems[2].desc}</p>
            </div>
          </FadeIn>

          {/* Professional Services */}
          <FadeIn delay={0.44}>
            <div className="bg-bone-100 p-8 md:p-10 h-full flex flex-col">
              <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">{problems[3].name}</div>
              <p className="font-sans text-sm text-fg2 leading-relaxed">{problems[3].desc}</p>
            </div>
          </FadeIn>

          {/* Logistics */}
          <FadeIn delay={0.52}>
            <div className="bg-bone-100 p-8 md:p-10 h-full flex flex-col">
              <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">{problems[4].name}</div>
              <p className="font-sans text-sm text-fg2 leading-relaxed">{problems[4].desc}</p>
            </div>
          </FadeIn>

          {/* Retail */}
          <FadeIn delay={0.6}>
            <div className="bg-bone-100 p-8 md:p-10 h-full flex flex-col">
              <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-5">{problems[5].name}</div>
              <p className="font-sans text-sm text-fg2 leading-relaxed">{problems[5].desc}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
