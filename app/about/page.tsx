import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — SanLuis AI Solutions',
  description: 'Daniel San Luis, founder of SanLuis AI Solutions. Houston-based AI studio delivering custom AI infrastructure for serious operators.',
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
          <span className="sl-eyebrow mb-4">Our Story</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">About.</h1>
          <p className="sl-lede mb-8">SanLuis AI Solutions was founded by Daniel San Luis in Houston, Texas — built on a simple premise: most AI consulting is theatre.</p>
          <div className="bg-white border border-navy-200 rounded p-8 mb-10">
            <h2 className="font-display text-xl text-navy-800 mb-3">Daniel San Luis — Founder &amp; CEO</h2>
            <p className="sl-body mb-4">Daniel is a bilingual (EN/ES) systems builder who designs and deploys custom AI infrastructure for businesses serious about leverage. Every engagement is hands-on, direct, and verified — no slide decks, no pilot purgatory, no six-month discovery phases.</p>
            <p className="sl-body mb-4">Based in Houston, Daniel runs the entire AI stack: from architecture and model routing to deployment and continuous optimization. He does not subcontract. When you hire SanLuis AI, you get Daniel San Luis.</p>
          </div>
          <h2 className="font-display text-2xl text-navy-800 mb-4">How We Operate</h2>
          <p className="sl-body mb-4">We run three engagements per quarter. We turn down nine. Every engagement is a named problem, a custom build, and a measured result.</p>
          <p className="sl-body mb-4">We are not a software vendor. We do not sell subscriptions, templates, or platforms. We diagnose the bottleneck. We build the cure. We leave.</p>
          <p className="sl-body mb-8">Most AI consulting is theatre. We ship working systems in weeks, not months. Every build includes full source code ownership and comprehensive documentation — no vendor lock-in, ever.</p>
          <div className="flex gap-4">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
            <a href="mailto:contact@sanluisai.com" className="inline-block font-sans text-sm font-semibold px-6 py-3 border border-navy-900 text-navy-900 rounded hover:bg-navy-50 transition-colors">
              contact@sanluisai.com
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
          <p className="font-sans text-sm text-navy-300 mb-4">contact@sanluisai.com &middot; @SanLuisAiClientbot</p>
          <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
