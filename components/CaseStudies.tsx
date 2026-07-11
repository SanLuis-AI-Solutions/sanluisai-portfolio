'use client'
import { useRef, useState, useEffect, useCallback } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  const [displayValue, setDisplayValue] = useState(0)
  const numeric = parseFloat(value)
  const suffix = value.replace(/[0-9.]/g, '').trim()

  useEffect(() => {
    if (!inView || shouldReduceMotion) { setDisplayValue(numeric); return }
    let frame: number
    const start = performance.now()
    const duration = 2000
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayValue(Math.round(numeric * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric, shouldReduceMotion])

  return (<span ref={ref} className="font-display text-3xl text-gold-500 font-medium">{displayValue}{suffix}</span>)
}

const cases = [
  { industry: 'Construction', company: 'Garza International', problem: 'Manual quoting process taking six-plus hours per bid, losing deals to faster competitors.', result: '60% faster quoting.', stat: '60%', slug: 'garza-international', img: '/garza-dashboard.jpeg' },
  { industry: 'Retail', company: "Susie's Jewelry Repair", problem: 'Fragmented lead capture across website, phone, and walk-ins with no systematic follow-up.', result: '3x inbound leads.', stat: '3×', slug: 'susies-jewelry-repair', img: '/sjr-dashboard.jpeg' },
  { industry: 'Consumer App', company: 'LoveFlow', problem: 'Founder had a clear idea for a Christian faith-based relationship app but no technical background to build it.', result: 'AI app design in 3 days.', stat: '3 days', slug: 'loveflow', img: '/loveflow-dashboard.png' },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 md:py-40 bg-navy-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/20 pointer-events-none" />
      <div className="relative">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 mb-16">
          <FadeIn delay={0}>
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-8 flex items-center gap-4">
              The Evidence <span className="h-px w-8 bg-gold-600/40" />
            </span>
          </FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <FadeIn delay={0.12}><h2 className="sl-h2 text-bone-50 mb-4">Measurable outcomes.</h2></FadeIn>
              <FadeIn delay={0.2}><p className="font-sans text-base md:text-lg text-bone-300/60 max-w-[54ch]">Three engagements. Three industries. Three verified results.</p></FadeIn>
            </div>
            <FadeIn delay={0.3}><a href="/case-studies" className="font-sans text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors duration-200">View all case studies →</a></FadeIn>
          </div>
        </div>

        {/* Grid layout — no carousel */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <FadeIn key={c.slug} delay={0.2 + i * 0.1}>
                <a href={`/case-studies/${c.slug}`} className="block bg-bone-50 border border-bone-200/80 hover:border-gold-500/60 shadow-2 hover:shadow-4 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:-translate-y-1.5 group cursor-pointer active:scale-[0.99] h-full flex flex-col relative">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-700/40 via-gold-500/80 to-gold-700/40 group-hover:from-gold-600 group-hover:via-gold-400 group-hover:to-gold-600 transition-all duration-300 z-10" />
                  <div className="relative w-full h-48 bg-navy-100 overflow-hidden border-b border-navy-100/80">
                    <Image src={c.img} alt={`${c.company} dashboard: AI implementation result`} fill className="object-cover object-center group-hover:scale-[1.05] transition-transform duration-700 ease-out" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-4">{c.industry}</div>
                    <h3 className="font-display text-2xl text-navy-800 mb-6 group-hover:text-gold-600 transition-colors duration-200">{c.company}</h3>
                    <div className="flex-1">
                      <div className="font-sans text-xs text-navy-400 tracking-[0.08em] uppercase mb-2">Problem</div>
                      <p className="font-sans text-sm text-fg2 leading-relaxed mb-6">{c.problem}</p>
                    </div>
                    <div className="pt-6 border-t border-gold-600/10">
                      <div className="font-sans text-xs text-gold-600 tracking-[0.08em] uppercase mb-2">Result</div>
                      <div className="flex items-baseline gap-2">
                        <StatCounter value={c.stat} />
                        <span className="font-sans text-sm text-fg2">{c.result}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}