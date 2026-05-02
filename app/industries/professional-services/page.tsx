import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Professional Services. — SanLuis AI Solutions',
  description: 'Billable hours leakage, document review bottlenecks, and client onboarding drag erode margins. We build AI to eliminate the waste.',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_proservices_00001_.png" alt="Modern professional services office" fill className="object-cover" sizes="100vw" />
          </div>
          <span className="sl-eyebrow mb-4">Industry</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">AI for Professional Services.</h1>
          <p className="sl-body-lg max-w-prose mb-8">Billable hours leakage, document review bottlenecks, and client onboarding drag erode margins. We build AI to eliminate the waste.</p>
          <p className="sl-body max-w-prose mb-4">Professional service firms sell time. But time leaks everywhere -- manual document review, redundant data entry, inconsistent client onboarding. Every hour spent on admin is an hour not billed.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that automate document review, streamline client intake, and capture billable time automatically. The result: higher utilization, faster engagements, better margins.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Document Review</div><div className="font-sans text-sm text-fg2 mt-2">AI that reviews contracts and filings in minutes, not days.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Time Capture</div><div className="font-sans text-sm text-fg2 mt-2">Automatic time tracking that captures every billable minute.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Client Onboarding</div><div className="font-sans text-sm text-fg2 mt-2">Automated intake, KYC, and engagement letter generation.</div></div></div>
          <div className="mt-12">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
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