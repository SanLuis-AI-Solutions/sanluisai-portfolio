'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const cases = [
  { industry: 'Construction', company: 'Garza International', problem: 'Manual quoting process taking six-plus hours per bid, losing deals to faster competitors.', result: '60% faster quoting.', stat: '60%', slug: 'garza-international', img: '/garza-dashboard.jpeg' },
  { industry: 'Retail', company: "Susie's Jewelry Repair", problem: 'Fragmented lead capture across website, phone, and walk-ins with no systematic follow-up.', result: '3x inbound leads.', stat: '3×', slug: 'susies-jewelry-repair', img: '/sjr-dashboard.jpeg' },
  { industry: 'Technology', company: 'LoveFlow', problem: 'Matching algorithm driving user churn through surface-level preference matching.', result: '40% better matches.', stat: '40%', slug: 'loveflow', img: '/loveflow-dashboard.png' },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-32 md:py-40 bg-navy-900 relative overflow-hidden">
      {/* Subtle gold glow — top-right */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,52,0.04),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}><span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-8 flex items-center gap-4">The Evidence <span className="h-px w-8 bg-gold-600/40" /></span></FadeIn>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bone-50 font-medium leading-[1.08] tracking-[-0.025em] mb-4">Measurable outcomes.</h2></FadeIn>
            <FadeIn delay={0.2}><p className="font-sans text-base md:text-lg text-bone-300/60 max-w-[54ch]">Three engagements. Three industries. Three verified results.</p></FadeIn>
          </div>
          <FadeIn delay={0.3}><a href="/case-studies" className="font-sans text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors duration-200">View all case studies →</a></FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <FadeIn key={c.slug} delay={0.2 + i * 0.1}>
              <a href={`/case-studies/${c.slug}`} className="block bg-navy-800 border border-bone-300/10 hover:border-gold-600/40 rounded overflow-hidden transition-all duration-220 hover:shadow-3 group cursor-pointer h-full flex flex-col">
                <div className="relative w-full h-48 bg-navy-700 overflow-hidden border-b border-bone-300/10">
                  <Image
                    src={c.img}
                    alt={`${c.company} dashboard — AI implementation result`}
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <div className="font-sans text-xs font-semibold text-gold-500 tracking-[0.12em] uppercase mb-4">{c.industry}</div>
                  <h3 className="font-display text-2xl text-bone-50 mb-6 group-hover:text-gold-500 transition-colors duration-200">{c.company}</h3>
                  <div className="flex-1">
                    <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-2">Problem</div>
                    <p className="font-sans text-sm text-bone-300/70 leading-relaxed mb-6">{c.problem}</p>
                  </div>
                  <div className="pt-6 border-t border-bone-300/10">
                    <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-2">Result</div>
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-3xl text-gold-500 font-medium">{c.stat}</span>
                      <span className="font-sans text-sm text-bone-300/70">{c.result}</span>
                    </div>
                  </div>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
