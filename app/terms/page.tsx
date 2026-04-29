import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — SanLuis AI Solutions',
  description: 'Terms of service for SanLuis AI Solutions — engagement terms, IP ownership, and service agreements.',
}

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800 tracking-tight">SanLuis AI</Link>
        </div>
      </nav>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="sl-display-lg text-navy-800 mb-8">Terms of Service.</h1>
          <p className="sl-body mb-4"><strong>Effective Date:</strong> April 28, 2026</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">1. Engagement Model</h2>
          <p className="sl-body mb-4">All engagements begin with a paid Discovery Session ($300). This session produces a written action plan with scope, timeline, and pricing. No work begins until both parties agree in writing to a formal proposal.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">2. Intellectual Property</h2>
          <p className="sl-body mb-4">Upon full payment, all custom-built code, models, and documentation become your property. SanLuis AI retains no rights, liens, or usage restrictions on delivered work. You own what you pay for.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">3. Payment Terms</h2>
          <p className="sl-body mb-4">Discovery Session: $300 due at booking. Project work: 50% due at contract signing, 50% due at delivery. All prices are in USD. Late payments may incur a 1.5% monthly service charge.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">4. Limitation of Liability</h2>
          <p className="sl-body mb-4">SanLuis AI Solutions' liability is limited to the total fees paid for the specific engagement. We are not liable for consequential, indirect, or incidental damages arising from the use of delivered systems.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">5. Contact</h2>
          <p className="sl-body mb-4">For terms-related questions: contact@sanluisai.com</p>
        </div>
      </main>
      <footer className="bg-navy-950 py-12 text-center">
        <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions.</p>
      </footer>
    </>
  )
}
