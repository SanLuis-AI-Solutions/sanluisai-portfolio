import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom AI Systems — SanLuis AI Solutions',
  description: 'Built from scratch to solve your exact operational problem. No bloated features. No compromises. Purpose-built AI systems that fit your existing stack.',
}

export default function CustomAIPage() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="sl-display-lg text-navy-800 mb-6">Custom AI Systems</h1>
          <p className="sl-body-lg max-w-prose mb-8">
            Built from scratch to solve your exact operational problem. No bloated features. No compromises.
          </p>
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
      </main>

      {/* Simple footer */}
      
    </>
  )
}
