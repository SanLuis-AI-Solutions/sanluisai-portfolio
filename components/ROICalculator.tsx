'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import FlameMark from '@/components/FlameMark'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

function AnimatedNumber({ value, prefix = '' }: { value: number; prefix?: string }) {
  const [display, setDisplay] = useState(0)
  const prevValue = useRef(value)

  useEffect(() => {
    if (value === prevValue.current) return
    prevValue.current = value
    let frame: number
    const start = performance.now()
    const duration = 500
    const from = display
    const animate = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(from + (value - from) * eased))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [value])

  return <span>{prefix}{display.toLocaleString()}</span>
}

function SliderInput({
  label, value, setValue, min, max, step = 1, suffix = '', delay, inputId,
}: {
  label: string; value: number; setValue: (v: number) => void; min: number; max: number; step?: number; suffix?: string; delay: number; inputId: string
}) {
  const fillPct = ((value - min) / (max - min)) * 100
  return (
    <FadeIn delay={delay}>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <label htmlFor={inputId} className="font-sans text-xs font-semibold text-navy-400 tracking-[0.08em] uppercase">{label}</label>
          <span className="font-mono text-lg text-navy-800 font-medium">{value}{suffix}</span>
        </div>
        <div className="relative h-2.5 bg-navy-200/60 rounded-full">
          <div className="absolute top-0 left-0 h-full bg-gold-600 rounded-full transition-all duration-150" style={{ width: `${fillPct}%` }} />
          <input id={inputId} type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
        </div>
        <div className="flex justify-between mt-1">
          <span className="font-mono text-[10px] text-navy-300">{min}{suffix}</span>
          <span className="font-mono text-[10px] text-navy-300">{max}{suffix}</span>
        </div>
      </div>
    </FadeIn>
  )
}

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [hourlyRate, setHourlyRate] = useState(75)
  const [numEmployees, setNumEmployees] = useState(1)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const monthlyHours = Math.round(hoursPerWeek * 4.33 * numEmployees)
  const monthlyCost = monthlyHours * hourlyRate
  const annualSavings = monthlyCost * 12
  const breakEvenWeeks = hoursPerWeek > 0 ? Math.round(300 / (hoursPerWeek * numEmployees * hourlyRate) * 10) / 10 : 0

  return (
    <section id="roi-calculator" ref={sectionRef} className="relative py-32 md:py-40 bg-amber-50/60 overflow-hidden">
      {/* Warm ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(217,164,52,0.04),transparent_60%)] pointer-events-none" />
      <div className="relative max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: intro + form */}
          <div>
            <FadeIn delay={0}>
              <div className="flex items-center gap-2 mb-8">
                <FlameMark size="sm" />
                <span className="sl-eyebrow">Estimate Your Savings</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h2 className="sl-h2 text-navy-800 mb-6">What&apos;s one process costing you?</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="sl-body-lg max-w-[48ch] mb-12">Pick a repetitive task your team does every week. Move the sliders to see what it&apos;s really costing you.</p>
            </FadeIn>
            <SliderInput label="Hours per week on this task" value={hoursPerWeek} setValue={setHoursPerWeek} min={1} max={40} step={1} suffix="h" delay={0.28} inputId="roi-hours" />
            <SliderInput label="Average hourly cost" value={hourlyRate} setValue={setHourlyRate} min={20} max={250} step={5} suffix="$" delay={0.36} inputId="roi-rate" />
            <SliderInput label="People doing this task" value={numEmployees} setValue={setNumEmployees} min={1} max={20} step={1} delay={0.44} suffix="x" inputId="roi-people" />
          </div>

          {/* Right: scoreboard results panel */}
          <div className="lg:pt-16">
            <FadeIn delay={0.3}>
              <div className="bg-white border border-gold-600/20 shadow-3 rounded-xl p-10 md:p-12">
                <div className="flex items-center gap-2 mb-10">
                  <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-600">Your Scoreboard</span>
                  <div className="h-px flex-1 bg-gold-600/30" />
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="text-center p-6 bg-amber-50/40 rounded-lg border border-amber-100/50">
                    <div className="font-display text-[clamp(2rem,3vw,2.6rem)] text-gold-600 font-medium leading-none tracking-[-0.02em] mb-2">
                      <AnimatedNumber value={monthlyHours} />
                    </div>
                    <div className="font-sans text-xs text-fg3">hours / month</div>
                  </div>
                  <div className="text-center p-6 bg-amber-50/40 rounded-lg border border-amber-100/50">
                    <div className="font-display text-[clamp(2rem,3vw,2.6rem)] text-gold-600 font-medium leading-none tracking-[-0.02em] mb-2">
                      <AnimatedNumber value={monthlyCost} prefix="$" />
                    </div>
                    <div className="font-sans text-xs text-fg3">monthly cost</div>
                  </div>
                </div>

                {/* Hero number — annual savings */}
                <div className="text-center mb-8 p-6 bg-gradient-to-b from-gold-50/50 to-transparent rounded-lg border border-gold-600/10">
                  <div className="text-xs text-fg3 font-sans mb-2 tracking-[0.06em] uppercase">Annual savings projection</div>
                  <div className="font-display text-[clamp(2.6rem,5vw,4rem)] text-gold-600 font-bold leading-none tracking-[-0.03em]">
                    <AnimatedNumber value={annualSavings} prefix="$" />
                  </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-gold-600/30 to-transparent mb-8" />

                {hoursPerWeek > 0 && (
                  <div className="text-center mb-10">
                    <div className="font-sans text-xs text-fg3 mb-2 tracking-[0.06em] uppercase">Break-even on the Discovery Session</div>
                    <div className="flex items-center justify-center gap-2">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gold-500">
                        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 4V8L10.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="font-display text-xl text-navy-800 font-medium">
                        {breakEvenWeeks < 1 ? 'Less than a week' : breakEvenWeeks <= 1.5 ? '1 week' : `${Math.round(breakEvenWeeks)} weeks`}
                      </span>
                    </div>
                    <div className="font-sans text-xs text-fg3 mt-1">{breakEvenWeeks < 1 ? 'Pays for itself in less than a week.' : breakEvenWeeks >= 4 ? 'Pays for itself before the first month ends.' : `Breakeven in ${Math.round(breakEvenWeeks)} weeks.`}</div>
                  </div>
                )}

                <a
                  href="/booking"
                  className="inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:shadow-goldGlow hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-220 rounded"
                >
                  Book a Discovery Session
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}