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

  const numeric = parseFloat(value) // "60%" → 60, "3×" → 3, "40%" → 40
  const suffix = value.replace(/[0-9.]/g, '').trim() // "%" or "×" or ""

  useEffect(() => {
    if (!inView || shouldReduceMotion) {
      setDisplayValue(numeric)
      return
    }
    let frame: number
    const start = performance.now()
    const duration = 2000
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setDisplayValue(Math.round(numeric * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [inView, numeric, shouldReduceMotion])

  return (
    <span ref={ref} className="font-display text-3xl text-gold-500 font-medium">
      {displayValue}{suffix}
    </span>
  )
}

const cases = [
  { industry: 'Construction', company: 'Garza International', problem: 'Manual quoting process taking six-plus hours per bid, losing deals to faster competitors.', result: '60% faster quoting.', stat: '60%', slug: 'garza-international', img: '/garza-dashboard.jpeg' },
  { industry: 'Retail', company: "Susie's Jewelry Repair", problem: 'Fragmented lead capture across website, phone, and walk-ins with no systematic follow-up.', result: '3x inbound leads.', stat: '3×', slug: 'susies-jewelry-repair', img: '/sjr-dashboard.jpeg' },
  { industry: 'Technology', company: 'LoveFlow', problem: 'Matching algorithm driving user churn through surface-level preference matching.', result: '40% better matches.', stat: '40%', slug: 'loveflow', img: '/loveflow-dashboard.png' },
]

export default function CaseStudies() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 20)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 20)
    // Determine active card index based on scroll position
    const cardWidth = el.children[0] ? (el.children[0] as HTMLElement).offsetWidth + 20 : 420 // card + gap
    const idx = Math.round(el.scrollLeft / cardWidth)
    setActiveIndex(Math.min(idx, cases.length - 1))
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const scrollAmount = direction === 'left' ? -400 : 400
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el || !el.children[0]) return
    const cardWidth = (el.children[0] as HTMLElement).offsetWidth + 20
    el.scrollTo({ left: index * cardWidth, behavior: 'smooth' })
  }

  return (
    <section id="case-studies" className="py-32 md:py-40 bg-navy-800 relative overflow-hidden">
      {/* Subtle gold glow — top-right */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[radial-gradient(ellipse_at_top_right,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />
      {/* Deep navy-to-current gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900/20 pointer-events-none" />
      <div className="relative">
        {/* Header — full-width constrained */}
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 mb-16">
          <FadeIn delay={0}><span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500 mb-8 flex items-center gap-4">The Evidence <span className="h-px w-8 bg-gold-600/40" /></span></FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <FadeIn delay={0.12}><h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-bone-50 font-medium leading-[1.08] tracking-[-0.025em] mb-4">Measurable outcomes.</h2></FadeIn>
              <FadeIn delay={0.2}><p className="font-sans text-base md:text-lg text-bone-300/60 max-w-[54ch]">Three engagements. Three industries. Three verified results.</p></FadeIn>
            </div>
            <div className="flex items-center gap-4">
              <FadeIn delay={0.3}><a href="/case-studies" className="font-sans text-sm font-semibold text-gold-500 hover:text-gold-400 transition-colors duration-200">View all case studies →</a></FadeIn>
              {/* Desktop scroll arrows */}
              <FadeIn delay={0.35}>
                <div className="hidden lg:flex items-center gap-2">
                  <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className="w-10 h-10 flex items-center justify-center rounded border border-bone-300/20 text-bone-300/60 hover:border-gold-600/40 hover:text-gold-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Scroll left"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className="w-10 h-10 flex items-center justify-center rounded border border-bone-300/20 text-bone-300/60 hover:border-gold-600/40 hover:text-gold-500 disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
                    aria-label="Scroll right"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Horizontal scroll container with peek */}
        <div className="relative">
          {/* Gradient fade on right edge — peek indicator */}
          <div className="hidden lg:block absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-navy-800 to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-5 px-8 md:px-16 lg:px-24 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {cases.map((c, i) => (
              <FadeIn key={c.slug} delay={0.2 + i * 0.1}>
                <a
                  href={`/case-studies/${c.slug}`}
                  className="block bg-bone-50 border border-bone-200/60 hover:border-gold-500/50 rounded overflow-hidden transition-all duration-300 hover:shadow-4 hover:scale-[1.02] group cursor-pointer h-full flex flex-col min-w-[340px] md:min-w-[400px] lg:min-w-[420px] snap-start relative"
                >
                  {/* Gold accent bar — permanent subtle line, warms on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-700/50 via-gold-500 to-gold-700/50 group-hover:from-gold-600 group-hover:via-gold-400 group-hover:to-gold-600 transition-all duration-300 z-10" />
                  <div className="relative w-full h-48 bg-navy-100 overflow-hidden border-b border-navy-100/80">
                    <Image
                      src={c.img}
                      alt={`${c.company} dashboard: AI implementation result`}
                      fill
                      className="object-cover object-center group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
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

          {/* Mobile stack fallback extra spacing for last card visibility */}
          <div className="block lg:hidden px-8 md:px-16 lg:px-24 mt-4">
            <FadeIn delay={0.5}>
              <div className="flex justify-center gap-2">
                {cases.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToIndex(i)}
                    className={`w-2.5 h-2.5 rounded-[2px] transition-all duration-300 ${
                      i === activeIndex
                        ? 'bg-gold-500 w-6'
                        : 'bg-navy-600 hover:bg-navy-500'
                    }`}
                    aria-label={`View ${cases[i].company} case study`}
                  />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
