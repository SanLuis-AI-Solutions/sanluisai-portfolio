import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Real Estate. — SanLuis AI Solutions',
  description: 'Slow lead response, property management overhead, and market analysis delays cost deals. We build AI to eliminate the friction.',
}

export default function Page() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_realestate_00001_.png" alt="Modern residential development" fill className="object-cover" sizes="100vw" />
          </div>
          <span className="sl-eyebrow mb-4">Industry</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">AI for Real Estate.</h1>
          <p className="sl-body-lg max-w-prose mb-8">Slow lead response, property management overhead, and market analysis delays cost deals. We build AI to eliminate the friction.</p>
          <p className="sl-body max-w-prose mb-4">In real estate, speed is everything. The first agent to respond wins the listing. The firm with the best market data wins the negotiation. Yet most operations still rely on manual lead tracking, spreadsheets, and intuition.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that respond to leads in seconds, automate property management workflows, and deliver real-time market analysis. Not dashboards. Decisions.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Lead Response</div><div className="font-sans text-sm text-fg2 mt-2">AI that qualifies and responds to every lead within 60 seconds.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Property Management</div><div className="font-sans text-sm text-fg2 mt-2">Automated maintenance ticketing, rent collection, and tenant comms.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Market Analysis</div><div className="font-sans text-sm text-fg2 mt-2">Real-time comps, trend detection, and pricing recommendations.</div></div></div>
          <div className="mt-12">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
          </div>
        </div>
      </main>

    </>
  )
}