'use client'
import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FlameMark from '@/components/FlameMark'

gsap.registerPlugin(ScrollTrigger)

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const steps = [
  { num: '01', title: 'Discover', desc: 'We pick the one process eating the most time or money. Map it completely. Find exactly which hours we can give back.', time: '60 min' },
  { num: '02', title: 'Build', desc: 'We design a custom AI system for that specific process. No templates. No bloat. You own the code, not a subscription.', time: '2-4 weeks' },
  { num: '03', title: 'Ship', desc: 'Installed into your real workflow. Your team trained. Your baseline measured. You see the difference immediately.', time: 'Shipped' },
  { num: '04', title: 'Maintain', desc: 'Monthly check-ins. Priority support. We evolve the system as your business does. Built to grow with you.', time: 'Ongoing' },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray('.process-step')
      if (!panels.length || !sectionRef.current || !pinRef.current) return

      // Pin the process container and scrub through steps
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${(panels.length) * 100}%`,
        pin: pinRef.current,
        scrub: 1,
      })

      // Animate the vertical gold progress line
      if (progressRef.current) {
        gsap.fromTo(progressRef.current,
          { scaleY: 0, transformOrigin: 'top center' },
          { scaleY: 1, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom bottom', scrub: 1 } }
        )
      }

      // Fade each step with scrub
      panels.forEach((panel) => {
        gsap.fromTo(panel as HTMLElement,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, ease: 'power2.out',
            scrollTrigger: {
              trigger: panel as HTMLElement,
              start: 'top 75%',
              end: 'top 35%',
              scrub: 1,
            }
          }
        )
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-bgCanvas overflow-hidden">
      <div ref={pinRef} className="min-h-screen flex items-center py-32 md:py-40">
        <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 w-full">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 mb-16">
              <FlameMark size="sm" />
              <span className="sl-eyebrow">Our Process</span>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Vertical gold progress line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gold-600/20">
              <div ref={progressRef} className="w-full h-full bg-gold-600 origin-top" />
            </div>

            <div className="space-y-32 md:space-y-40 pl-10 md:pl-12">
              {steps.map((s) => (
                <div key={s.num} className="process-step">
                  <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12">
                    <div className="flex items-start gap-4">
                      <div className="relative flex-shrink-0">
                        <svg width="48" height="48" viewBox="0 0 48 48" className="text-gold-500" aria-hidden="true">
                          <circle cx="24" cy="24" r="22" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          <text x="24" y="29" textAnchor="middle" fill="currentColor" fontSize="18" fontFamily="serif" fontWeight="600">{s.num}</text>
                        </svg>
                      </div>
                      <div className="md:hidden">
                        <h3 className="font-display text-xl md:text-2xl text-navy-800 mb-2">{s.title}</h3>
                        <div className="font-mono text-[10px] text-gold-600 tracking-[0.08em] uppercase mb-3">{s.time}</div>
                        <p className="font-sans text-sm text-fg2 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="font-display text-3xl text-navy-800">{s.title}</h3>
                        <span className="font-mono text-[10px] text-gold-600 tracking-[0.08em] uppercase">{s.time}</span>
                      </div>
                      <p className="font-sans text-base text-fg2 leading-relaxed max-w-[48ch]">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}