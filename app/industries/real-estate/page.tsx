import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI for Real Estate. — SanLuis AI Solutions',
  description: 'Slow lead response, property management overhead, and market analysis delays cost deals. We build AI to eliminate the friction.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Real Estate."
        description="Slow lead response, property management overhead, and market analysis delays cost deals. We build AI to eliminate the friction."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_realestate_00001_.png" alt="Modern residential development" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">In real estate, speed is everything. The first agent to respond wins the listing. The firm with the best market data wins the negotiation. Yet most operations still rely on manual lead tracking, spreadsheets, and intuition.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that respond to leads in seconds, automate property management workflows, and deliver real-time market analysis. Not dashboards. Decisions.</p>
          <p className="sl-body max-w-prose mb-4">Our lead response system qualifies and contacts every new lead within 60 seconds — and routes high-intent buyers directly to your phone. Property management workflows handle maintenance tickets, rent reminders, and tenant communications automatically. Market analysis runs 24/7, pulling comps and flagging pricing opportunities before your competitors spot them.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Lead Response</div><div className="font-sans text-sm text-fg2 mt-2">AI that qualifies and responds to every lead within 60 seconds.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Property Management</div><div className="font-sans text-sm text-fg2 mt-2">Automated maintenance ticketing, rent collection, and tenant comms.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Market Analysis</div><div className="font-sans text-sm text-fg2 mt-2">Real-time comps, trend detection, and pricing recommendations.</div></div></div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build your project?</h2>
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
