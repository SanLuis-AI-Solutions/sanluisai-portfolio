'use client'

import { useState } from 'react'

interface KeyTakeawayProps {
  summary: string
  details?: string
  timeline?: string
  startingAt?: string
}

export default function KeyTakeaway({ summary, details, timeline, startingAt }: KeyTakeawayProps) {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="border-l-2 border-gold-600 bg-bone-100 rounded p-5 md:p-6 mb-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left"
        aria-expanded={isOpen}
      >
        <span className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-700 flex-shrink-0">
          🔑 Key Takeaway
        </span>
        <span className="flex-1" />
        <span className={`text-gold-600 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▾
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 space-y-2">
          <p className="font-sans text-sm text-navy-800 leading-relaxed">{summary}</p>
          {details && (
            <p className="font-sans text-sm text-navy-600 leading-relaxed">{details}</p>
          )}
          {(timeline || startingAt) && (
            <div className="flex flex-wrap gap-4 pt-2">
              {timeline && (
                <span className="font-sans text-xs text-gold-700 font-semibold">
                  ⏱ {timeline}
                </span>
              )}
              {startingAt && (
                <span className="font-sans text-xs text-gold-700 font-semibold">
                  💰 {startingAt}
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
