'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

interface BeforeAfterProps {
  before: {
    label: string
    metric: string
    value: string
    details: string[]
    color?: string
  }
  after: {
    label: string
    metric: string
    value: string
    details: string[]
    color?: string
  }
  title?: string
}

export default function BeforeAfter({ before, after, title }: BeforeAfterProps) {
  return (
    <FadeIn delay={0}>
      <div className="bg-white border border-navy-200 rounded overflow-hidden">
        {title && (
          <div className="px-6 py-4 bg-bone-100 border-b border-navy-200">
            <h3 className="font-display text-lg text-navy-800">{title}</h3>
          </div>
        )}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-navy-100">
          {/* Before */}
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-red-400">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <line x1="6" y1="6" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="14" y1="6" x2="6" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-navy-500">Before</span>
              <span className="ml-auto font-mono text-xs text-fg4">{before.label}</span>
            </div>
            <div className="mb-4">
              <div className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase mb-1">{before.metric}</div>
              <div className="font-display text-3xl text-red-500 font-medium">{before.value}</div>
            </div>
            <ul className="space-y-2">
              {before.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 font-sans text-xs text-fg3">
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-red-300 mt-0.5 shrink-0" fill="none" aria-hidden="true">
                    <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                    <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="p-6 bg-gradient-to-br from-green-50/30 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="text-green-500">
                <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <polyline points="6,10 9,13 14,7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-navy-500">After</span>
              <span className="ml-auto font-mono text-xs text-fg4">{after.label}</span>
            </div>
            <div className="mb-4">
              <div className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase mb-1">{after.metric}</div>
              <div className="font-display text-3xl text-green-600 font-medium">{after.value}</div>
            </div>
            <ul className="space-y-2">
              {after.details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 font-sans text-xs text-fg2">
                  <svg width="12" height="12" viewBox="0 0 12 12" className="text-green-500 mt-0.5 shrink-0" fill="none" aria-hidden="true">
                    <polyline points="2,6 5,9 10,3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
