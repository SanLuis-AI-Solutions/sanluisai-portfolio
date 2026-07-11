'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import FlameMark from '@/components/FlameMark'

gsap.registerPlugin(ScrollTrigger)

function SlideIn({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
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
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven parallax on the section background
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const pattern = sectionRef.current?.querySelector('.bg-pattern') as HTMLElement
          if (pattern) {
            pattern.style.transform = `translateY(${self.progress * -40}px)`
          }
        },
      })

      // Stagger cards with GSAP for smoother feel
      const cards = cardsRef.current?.querySelectorAll('.sector-card')
      if (cards) {
        ScrollTrigger.create({
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: 0.5,
          onUpdate: (self) => {
            cards.forEach((card, i) => {
              const progress = Math.max(0, Math.min(1, (self.progress - i * 0.08) * 3))
              ;(card as HTMLElement).style.opacity = String(progress)
              ;(card as HTMLElement).style.transform = `translateX(${(1 - progress) * 30}px)`
            })
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="problem" ref={sectionRef} className="py-32 md:py-40 bg-bone-100 relative overflow-hidden">
      {/* Subtle background texture with parallax */}
      <div className="bg-pattern absolute inset-0 opacity-[0.03] pointer-events-none transition-transform duration-100">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(17,36,71,0.3) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      {/* Warm ambient glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(217,164,52,0.04),transparent_60%)] pointer-events-none" />
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 relative">
        <div className="max-w-4xl">
          <SlideIn delay={0}>
            <div className="flex items-center gap-2 mb-8">
              <FlameMark size="sm" />
              <span className="sl-eyebrow">The Problem</span>
            </div>
          </SlideIn>
          <SlideIn delay={0.12}>
            <h2 className="sl-h2 text-navy-800 mb-6">Your team is burning hours on work AI could do in seconds.</h2>
          </SlideIn>
          <SlideIn delay={0.2}>
            <p className="sl-lede max-w-[56ch]">You don&apos;t need to understand how AI works. You need to know what it can actually save you: in dollars, hours, and missed opportunities.</p>
          </SlideIn>

          {/* Founder POV block — subtle lift animation */}
          <SlideIn delay={0.28}>
            <div className="relative max-w-2xl bg-white border border-navy-200/80 shadow-2 hover:shadow-3 transition-all duration-500 rounded p-8 md:p-10 mt-12 mb-16 hover:-translate-y-0.5">
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
          </SlideIn>
        </div>

        {/* Industry problem cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {problemSectors.map((s, i) => (
            <div
              key={s.num}
              className="sector-card group"
              style={{ opacity: i < 3 ? 1 : 0 }}
            >
              <div className="h-full bg-white border border-navy-200/60 hover:border-gold-500/40 shadow-1 hover:shadow-3 rounded-lg p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-gold-600/60 tracking-[0.12em]">{s.num}</span>
                  <span className="font-sans text-xs font-semibold text-navy-500 tracking-[0.08em] uppercase">{s.name}</span>
                </div>
                <div className="mb-2">
                  <span className="font-display text-2xl text-gold-600">{s.stat}</span>
                  <span className="font-sans text-[10px] text-navy-400 uppercase tracking-[0.08em] ml-2">{s.statLabel}</span>
                </div>
                <p className="font-sans text-sm text-ink-600 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
