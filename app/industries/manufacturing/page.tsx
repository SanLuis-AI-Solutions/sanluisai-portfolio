import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Manufacturing. — SanLuis AI Solutions',
  description: 'Production issues, unplanned downtime, and quality control gaps cost manufacturers millions. We build custom AI to eliminate them.',
}

export default function Page() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_manufacturing_00001_.png" alt="AI-powered manufacturing facility" fill className="object-cover" sizes="100vw" />
          </div>
          <span className="sl-eyebrow mb-4">Industry</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">AI for Manufacturing.</h1>
          <p className="sl-body-lg max-w-prose mb-8">Production issues, unplanned downtime, and quality control gaps cost manufacturers millions. We build custom AI to eliminate them.</p>
          <p className="sl-body max-w-prose mb-4">Manufacturing runs on precision. But most operations still rely on manual scheduling, reactive maintenance, and lagging quality indicators. The result: lost production time, scrap waste, and margin erosion that compounds daily.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that predict equipment failure before it happens, optimize production schedules in real time, and catch quality defects at the point of origin. One deployment. One problem solved.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Unplanned Downtime</div><div className="font-sans text-sm text-fg2 mt-2">Predictive models that flag failures 72 hours in advance.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Quality Control</div><div className="font-sans text-sm text-fg2 mt-2">Computer vision systems that catch defects at line speed.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Supply Chain</div><div className="font-sans text-sm text-fg2 mt-2">AI-driven demand forecasting and inventory optimization.</div></div></div>
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