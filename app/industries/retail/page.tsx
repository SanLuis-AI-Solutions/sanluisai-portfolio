import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Retail. — SanLuis AI Solutions',
  description: 'Inventory waste, inconsistent customer service, and demand forecasting errors cost retailers margin. We build AI to eliminate the guesswork.',
}

export default function Page() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_retail_00001_.png" alt="Modern retail storefront" fill className="object-cover" sizes="100vw" />
          </div>
          <span className="sl-eyebrow mb-4">Industry</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">AI for Retail.</h1>
          <p className="sl-body-lg max-w-prose mb-8">Inventory waste, inconsistent customer service, and demand forecasting errors cost retailers margin. We build AI to eliminate the guesswork.</p>
          <p className="sl-body max-w-prose mb-4">Retail runs on inventory turns and customer experience. But most retailers still use spreadsheets for demand planning, manual processes for customer follow-up, and intuition for pricing decisions.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that forecast demand with precision, automate customer service without sacrificing quality, and optimize pricing in real time.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Inventory</div><div className="font-sans text-sm text-fg2 mt-2">AI demand forecasting that reduces stockouts and overstocks.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Customer Service</div><div className="font-sans text-sm text-fg2 mt-2">Automated support that resolves 80% of inquiries without escalation.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Pricing</div><div className="font-sans text-sm text-fg2 mt-2">Dynamic pricing engine that maximizes margin in real time.</div></div></div>
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