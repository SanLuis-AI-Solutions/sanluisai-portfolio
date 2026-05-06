'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface GoldThreadTimelineProps {
  steps: {
    num: string
    title: string
    tagline: string
    duration: string
    what: string
    deliverable: string
    cost: string
    costNote?: string
  }[]
}

export default function GoldThreadTimeline({ steps }: GoldThreadTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inViewRaw = useInView(containerRef, { once: true, margin: '-120px' })
  const shouldReduceMotion = useReducedMotion() ?? false
  const isVisible = inViewRaw === true || shouldReduceMotion

  return (
    <div ref={containerRef} className="relative space-y-16 md:space-y-24">
      {/* Gold thread — draws down as section enters view */}
      <motion.div
        className="hidden md:block absolute left-[22px] top-12 bottom-12 w-px bg-gold-600 origin-top"
        initial={shouldReduceMotion ? {} : { scaleY: 0 }}
        animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
      />

      {steps.map((step, idx) => (
        <GoldThreadStep
          key={step.num}
          step={step}
          idx={idx}
          total={steps.length}
          inView={isVisible}
          shouldReduceMotion={shouldReduceMotion}
        />
      ))}
    </div>
  )
}

function GoldThreadStep({
  step,
  idx,
  total,
  inView,
  shouldReduceMotion,
}: {
  step: GoldThreadTimelineProps['steps'][number]
  idx: number
  total: number
  inView: boolean
  shouldReduceMotion: boolean
}) {
  return (
    <motion.div
      className="relative flex flex-col md:flex-row gap-6 md:gap-10"
      initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{
        duration: 0.7,
        delay: 0.15 * idx,
        ease: [0.2, 0.7, 0.2, 1],
      }}
    >
      {/* Number indicator — gold ring */}
      <div className="relative z-10 flex-shrink-0 flex items-start gap-4 md:flex-col md:items-center">
        <motion.div
          className="flex items-center justify-center w-11 h-11 rounded-full border-2 border-gold-600 bg-bone-50 shadow-[0_0_0_1px_rgba(217,164,52,0.15)]"
          initial={shouldReduceMotion ? {} : { scale: 0.6, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.15 * idx + 0.2,
            ease: [0.2, 0.7, 0.2, 1],
          }}
        >
          <span className="font-display text-sm text-gold-700 font-semibold">
            {step.num}
          </span>
        </motion.div>
        {idx < total - 1 && (
          <div className="md:hidden h-10 w-px bg-navy-200 mx-auto" />
        )}
      </div>

      {/* Card */}
      <div className="flex-1 bg-white border border-navy-200 rounded p-6 md:p-8 hover:border-navy-900 transition-all duration-220 hover:shadow-[0_2px_12px_rgba(26,49,96,0.06)]">
        {/* Tagline */}
        <div className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-600 mb-1">
          {step.tagline}
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl text-navy-800 mb-4">{step.title}</h2>

        {/* Duration badge */}
        <div className="inline-block font-sans text-xs font-semibold tracking-[0.08em] uppercase px-3 py-1 bg-bone-100 text-navy-600 rounded-full mb-4">
          {step.duration}
        </div>

        {/* What happens */}
        <div className="mb-4">
          <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-navy-500 mb-2">
            What Happens
          </h3>
          <p className="sl-body-sm">{step.what}</p>
        </div>

        {/* Deliverable */}
        <div className="mb-4">
          <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-navy-500 mb-2">
            Deliverable
          </h3>
          <p className="sl-body-sm">{step.deliverable}</p>
        </div>

        {/* Cost */}
        <div className="pt-4 border-t border-navy-100 flex items-baseline gap-2 flex-wrap">
          <span className="font-display text-xl text-gold-600">{step.cost}</span>
          {step.costNote && (
            <span className="font-sans text-xs text-navy-400">{step.costNote}</span>
          )}
        </div>
      </div>
    </motion.div>
  )
}
