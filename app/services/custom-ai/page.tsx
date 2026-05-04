import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Custom AI Systems — SanLuis AI Solutions',
  description: 'Built from scratch to solve your exact operational problem. No bloated features. No compromises. Purpose-built AI systems that fit your existing stack.',
}

export default function CustomAIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="Custom AI Systems."
        description="Built from scratch to solve your exact operational problem. No bloated features. No compromises."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <ul className="space-y-4 mb-10 max-w-prose">
            <li className="sl-body flex items-start gap-3">
              <span className="text-gold-600 mt-1">&#9679;</span>
              <span><strong className="text-navy-800">Tailored to your stack</strong> &mdash; Integrates seamlessly with your existing tools and workflows. No forced migrations.</span>
            </li>
            <li className="sl-body flex items-start gap-3">
              <span className="text-gold-600 mt-1">&#9679;</span>
              <span><strong className="text-navy-800">Custom-built precision</strong> &mdash; We target your single biggest problem and fix it completely before moving on.</span>
            </li>
            <li className="sl-body flex items-start gap-3">
              <span className="text-gold-600 mt-1">&#9679;</span>
              <span><strong className="text-navy-800">Weeks, not months</strong> &mdash; From concept to production in under 30 days. You describe the outcome, we engineer the system.</span>
            </li>
            <li className="sl-body flex items-start gap-3">
              <span className="text-gold-600 mt-1">&#9679;</span>
              <span><strong className="text-navy-800">No bloat</strong> &mdash; Zero unused features. No subscription tiers. You pay for exactly what moves your business forward.</span>
            </li>
            <li className="sl-body flex items-start gap-3">
              <span className="text-gold-600 mt-1">&#9679;</span>
              <span><strong className="text-navy-800">Own your system</strong> &mdash; Full code ownership. No vendor lock-in. Your IP stays yours.</span>
            </li>
          </ul>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </section>

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
