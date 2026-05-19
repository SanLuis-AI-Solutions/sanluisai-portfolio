'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

function SliderInput({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
  suffix = '',
  delay,
}: {
  label: string
  value: number
  setValue: (v: number) => void
  min: number
  max: number
  step?: number
  suffix?: string
  delay: number
}) {
  const fillPct = ((value - min) / (max - min)) * 100
  return (
    <FadeIn delay={delay}>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <label className="font-sans text-xs font-semibold text-navy-400 tracking-[0.08em] uppercase">{label}</label>
          <span className="font-mono text-lg text-navy-800 font-medium">
            {value}{suffix}
          </span>
        </div>
        <div className="relative h-2 bg-navy-200 rounded-full">
          <div
            className="absolute top-0 left-0 h-full bg-gold-600 rounded-full transition-all duration-150"
            style={{ width: `${fillPct}%` }}
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
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

  const monthlyHours = Math.round(hoursPerWeek * 4.33 * numEmployees)
  const monthlyCost = monthlyHours * hourlyRate
  const annualSavings = monthlyCost * 12
  const breakEvenWeeks = hoursPerWeek > 0 ? Math.round(300 / (hoursPerWeek * numEmployees * hourlyRate) * 10) / 10 : 0

  return (
    <section id="roi-calculator" className="py-32 md:py-40 bg-bgCanvas">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: intro + form */}
          <div>
            <FadeIn delay={0}>
              <span className="sl-eyebrow mb-8">Estimate Your Savings</span>
            </FadeIn>
            <FadeIn delay={0.12}>
              <h2 className="font-display text-[clamp(1.8rem,4vw,2.8rem)] text-navy-800 font-medium leading-[1.08] tracking-[-0.025em] mb-6">
                What's one process costing you?
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="sl-body-lg max-w-[48ch] mb-12">
                Pick a repetitive task your team does every week. Move the sliders to see what it's really costing you in hours and dollars.
              </p>
            </FadeIn>

            <SliderInput label="Hours per week on this task" value={hoursPerWeek} setValue={setHoursPerWeek} min={1} max={40} step={1} suffix="h" delay={0.28} />
            <SliderInput label="Average hourly cost" value={hourlyRate} setValue={setHourlyRate} min={20} max={250} step={5} suffix="$" delay={0.36} />
            <SliderInput label="People doing this task" value={numEmployees} setValue={setNumEmployees} min={1} max={20} step={1} delay={0.44} suffix="x" />
          </div>

          {/* Right: results */}
          <div className="lg:pt-32">
            <FadeIn delay={0.3}>
              <div className="bg-white border border-navy-200 rounded p-10 md:p-12">
                <div className="flex items-center gap-2 mb-8">
                  <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-600">Your Potential Savings</span>
                  <div className="h-px flex-1 bg-gold-600/30" />
                </div>

                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div>
                    <div className="font-mono text-[clamp(2rem,3vw,2.6rem)] text-navy-800 font-semibold leading-none tracking-[-0.02em]">
                      {monthlyHours.toLocaleString()}
                    </div>
                    <div className="font-sans text-xs text-fg3 mt-2">hours / month</div>
                  </div>
                  <div>
                    <div className="font-mono text-[clamp(2rem,3vw,2.6rem)] text-gold-600 font-semibold leading-none tracking-[-0.02em]">
                      ${monthlyCost.toLocaleString()}
                    </div>
                    <div className="font-sans text-xs text-fg3 mt-2">monthly cost</div>
                  </div>
                </div>

                <div className="mb-10">
                  <div className="text-xs text-fg3 font-sans mb-2">Annual savings projection</div>
                  <div className="font-mono text-[clamp(2.6rem,4vw,3.4rem)] text-gold-600 font-bold leading-none tracking-[-0.02em]">
                    ${annualSavings.toLocaleString()}
                  </div>
                </div>

                <div className="h-px bg-navy-200 mb-8" />

                {hoursPerWeek > 0 && (
                  <div className="mb-10">
                    <div className="font-sans text-xs text-fg3 mb-2">Break-even on the Discovery Session</div>
                    <div className="font-mono text-lg text-navy-800 font-medium">
                      {breakEvenWeeks < 1 ? 'Less than a week' : breakEvenWeeks <= 1.5 ? '1 week' : `${Math.round(breakEvenWeeks)} weeks`}
                    </div>
                    <div className="font-sans text-xs text-fg3 mt-1">{breakEvenWeeks >= 4 ? 'Pays for itself before the first month ends.' : `Breakeven in ${Math.round(breakEvenWeeks)} weeks.`}</div>
                  </div>
                )}

                <a
                  href="/booking"
                  className="inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-navy-800 text-bone-50 hover:bg-navy-700 transition-all duration-220 rounded"
                >
                  Book a Discovery Session.
                </a>
                <div className="mt-4">
                  <p className="font-sans text-xs text-fg4">Money-back guarantee: if we find fewer than 3 opportunities, you don't pay.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
