import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LoveFlow — Case Study | SanLuis AI Solutions',
  description: 'How SanLuis AI redesigned the LoveFlow matching algorithm, improving match quality by 40% and boosting user retention.',
}

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800 tracking-tight">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">Book a Discovery Session.</Link>
        </div>
      </nav>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="sl-eyebrow mb-4">Technology</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">LoveFlow.</h1>
          <p className="sl-lede mb-8">A dating app startup whose matching algorithm was driving users away. We redesigned their AI core, improving match quality by 40% and doubling retention.</p>
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">4 weeks</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Result</div><div className="font-display text-2xl text-gold-600">40% better</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>
          <h2 className="font-display text-2xl text-navy-800 mb-4">The Bottleneck</h2>
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
      </main>
      <footer className="bg-navy-950 py-12 text-center">
        <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
        <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions.</p>
      </footer>
    </>
  )
}
