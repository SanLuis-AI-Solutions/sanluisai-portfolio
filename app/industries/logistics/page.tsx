import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Logistics. — SanLuis AI Solutions',
  description: 'Route inefficiency, warehouse slowdowns, and supply chain disruptions cost logistics operators daily. We build AI to eliminate the waste.',
}

export default function Page() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_logistics_00001_.png" alt="Automated logistics warehouse" fill className="object-cover" sizes="100vw" />
          </div>
          <span className="sl-eyebrow mb-4">Industry</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">AI for Logistics.</h1>
          <p className="sl-body-lg max-w-prose mb-8">Route inefficiency, warehouse slowdowns, and supply chain disruptions cost logistics operators daily. We build AI to eliminate the waste.</p>
          <p className="sl-body max-w-prose mb-4">Logistics margins are razor-thin. A 5% improvement in route efficiency or warehouse throughput can mean the difference between profit and loss. Yet most operations still rely on manual dispatch and static route planning.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that optimize routes in real time, automate warehouse sorting and inventory tracking, and predict supply chain disruptions before they happen.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Route Optimization</div><div className="font-sans text-sm text-fg2 mt-2">Dynamic routing that adapts to traffic, weather, and demand.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Warehouse Ops</div><div className="font-sans text-sm text-fg2 mt-2">AI-powered sorting, inventory tracking, and pick-path optimization.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Supply Chain</div><div className="font-sans text-sm text-fg2 mt-2">Predictive models that flag disruptions 2 weeks in advance.</div></div></div>
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