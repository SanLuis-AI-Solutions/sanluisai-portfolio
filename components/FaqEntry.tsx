'use client'

import React from 'react'

export default function FaqEntry({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="border-b border-navy-100 pb-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-start gap-4 w-full text-left cursor-pointer group"
        aria-expanded={open}
      >
        <span className="font-sans text-xs font-semibold text-gold-600 mt-1 min-w-[2rem] tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg text-navy-800 mb-2 group-hover:text-gold-600 transition-colors duration-200 pr-8 relative">
            {question}
            <span className={`absolute right-0 top-1/2 -translate-y-1/2 text-gold-600 text-sm transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true">
              ▼
            </span>
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <p className="sl-body-sm text-fg3 pt-1">{answer}</p>
          </div>
        </div>
      </button>
    </div>
  )
}
