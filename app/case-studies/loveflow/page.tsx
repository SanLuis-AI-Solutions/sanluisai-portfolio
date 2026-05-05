import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'LoveFlow — Case Study | SanLuis AI Solutions',
  description: 'How SanLuis AI redesigned the LoveFlow matching algorithm, improving match quality by 40% and boosting user retention.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="LoveFlow."
        description="A dating app startup whose matching algorithm was driving users away. We redesigned their AI core, improving match quality by 40% and doubling retention."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">4 weeks</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Result</div><div className="font-display text-2xl text-gold-600">40% better</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>
          <h2 className="font-display text-2xl text-navy-800 mb-4">The Problem</h2>
          <p className="sl-body mb-6">LoveFlow's initial matching algorithm relied on surface-level preferences. Users were getting poor matches, retention was dropping fast, and the team didn't have the AI expertise in-house to fix it.</p>
          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-4">A redesigned matching engine:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 sl-body">
            <li>Behavioral signal extraction from user interaction patterns</li>
            <li>Multi-dimensional compatibility scoring beyond stated preferences</li>
            <li>Real-time learning loop that improved with every swipe</li>
            <li>A/B testing framework for continuous match quality optimization</li>
          </ul>
          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">&ldquo;Our retention numbers turned around within a month. SanLuis AI didn&apos;t just fix our algorithm — they gave us a competitive moat.&rdquo; — LoveFlow</blockquote>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Want a 40% improvement in your metrics?</h2>
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
