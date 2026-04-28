'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How much does a custom AI system cost?',
    answer: 'It depends on complexity, but most projects start at $5,000 to $15,000. We provide a detailed quote after the Discovery Session.',
  },
  {
    question: 'How long does it take?',
    answer: 'Most custom builds take 2 to 4 weeks from spec to deployment. Complex integrations may take longer.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We work across Manufacturing, Healthcare, Real Estate, Professional Services, and Tech. If you have a bottleneck, we can help.',
  },
  {
    question: 'What is the Discovery Session?',
    answer: 'A 60-minute paid session at $300 where we audit your workflow, identify bottlenecks, and propose a solution. The fee is credited toward your project.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes. Every deployment includes a monitoring and optimization period. We offer ongoing support retainers for continued operation and improvements.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-bgSurface py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sl-h2 text-navy-900 text-center mb-12">Common Questions.</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details
              key={faq.question}
              open={openIndex === idx}
              onToggle={(e) => {
                if ((e.target as HTMLDetailsElement).open) {
                  setOpenIndex(idx)
                } else {
                  setOpenIndex(null)
                }
              }}
              className="border border-navy-200 rounded bg-white overflow-hidden"
            >
              <summary
                className={`flex items-center justify-between w-full p-5 cursor-pointer font-sans text-base transition-colors duration-200 ${
                  openIndex === idx ? 'text-gold-600' : 'text-fg1'
                }`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 text-gold-600' : 'text-gold-600'
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-5 pb-5">
                <p className="font-sans text-sm text-fg2 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
