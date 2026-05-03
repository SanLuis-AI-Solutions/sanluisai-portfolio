import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Garza International — Case Study | SanLuis AI Solutions',
  description: 'How SanLuis AI automated manual quoting at Garza International, reducing bid turnaround by 60%.',
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
          <span className="sl-eyebrow mb-4">Construction</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">Garza International.</h1>
          <p className="sl-lede mb-8">A Houston-based construction firm losing bids because manual quoting took 6+ hours per response. We built a custom AI quoting engine that cut turnaround by 60%.</p>
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">3 weeks</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Result</div><div className="font-display text-2xl text-gold-600">60% faster</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>
          <h2 className="font-display text-2xl text-navy-800 mb-4">The Problem</h2>
          <p className="sl-body mb-6">Garza International's estimators spent hours manually pulling material costs, labor rates, and historical bid data for each new construction quote. The process was error-prone, slow, and couldn't scale as the business grew.</p>
          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-4">A custom AI quoting engine that:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 sl-body">
            <li>Pulls real-time material pricing from supplier APIs</li>
            <li>Analyzes historical bid win/loss data for optimal pricing</li>
            <li>Auto-generates formatted proposal documents</li>
            <li>Flags high-risk bids for estimator review</li>
          </ul>
          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">"SanLuis AI didn't just build software — they solved the single biggest problem in our sales process. We're bidding faster and winning more." — Garza International</blockquote>
        </div>
      </main>
      <footer className="bg-navy-950 py-12 text-center">
        <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
        <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions.</p>
      </footer>
    </>
  )
}
