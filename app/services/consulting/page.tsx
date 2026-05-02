import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Consulting — SanLuis AI Solutions',
  description: 'Strategic AI consulting that delivers a clear, prioritised action plan. We audit your operations, identify high-impact opportunities, and provide cost estimates.',
}

export default function ConsultingPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </nav>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="sl-display-lg text-navy-800 mb-6">AI Consulting</h1>
          <p className="sl-body-lg max-w-prose mb-6">
            Not every problem needs a custom build. Sometimes you need a clear-eyed assessment of where AI can actually move the needle and where it would just be expensive overhead.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            We audit your operations, identify high-impact automation opportunities, and deliver a concrete roadmap. No buzzwords, no hype, no overpromising. You get cost estimates, timeline projections, and a risk assessment for each initiative.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            Walk away with a prioritised action plan aligned to your budget and business goals.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </main>
      <footer className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
          <p className="font-sans text-sm text-navy-300">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
