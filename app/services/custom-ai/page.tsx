import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'Custom AI Systems — SanLuis AI Solutions',
  description: "You've outgrown off-the-shelf software. Every template misses the mark. We build on your data, your workflow — no license fees, no bloat, and you own the code.",
}

export default function CustomAIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Custom AI Systems."
        description="You've outgrown off-the-shelf software. Every template misses the mark. Your workflow is unique — but nobody builds for that. Until now."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <ul className="space-y-4 mb-10 max-w-prose list-diamond">
            <li className="sl-body">Every SaaS template you try feels like it was designed for someone else&rsquo;s business. You work around it — exporting spreadsheets, copy-pasting between systems, building fragile Google Sheet workarounds. It works, but it costs you time every single day.</li>
            <li className="sl-body"><strong className="text-navy-800">A different approach:</strong> A custom system built on your data, your workflow, your terminology. No features you don&rsquo;t need. No license fees. No vendor lock-in. You own the code — end to end.</li>
            <li className="sl-body">We target your single biggest operational problem and solve it completely — in weeks, not months. Then we move to the next. One at a time. No scope creep, no &ldquo;let&rsquo;s put everything in MVP.&rdquo;</li>
            <li className="sl-body"><strong className="text-navy-800">The relief of clarity:</strong> No more guessing what you&rsquo;ll build next quarter. No more subscription stack anxiety. You know exactly what your system does, what it costs, and how long it takes.</li>
          </ul>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </section>

      {/* Case study reference */}
      <div className="border border-navy-200 rounded p-6 md:p-8 mt-12 max-w-prose mx-auto bg-white">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Related Case Study</p>
        <p className="sl-body-sm mb-3">See how we built a custom matching engine for LoveFlow — 40% better matches in 6 weeks.</p>
        <Link href="/case-studies/loveflow" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the case study →</Link>
      </div>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build your system?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Start with a $300 Discovery Session. 60 minutes. Clear roadmap.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">
              Book a Discovery Session.
            </Link>
            <a href="mailto:contact@sanluisai.com" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 border border-bone-300/30 text-bone-50 hover:border-gold-500 hover:text-gold-500 transition-all duration-220 rounded">
              contact@sanluisai.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
