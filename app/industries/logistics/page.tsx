import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI for Logistics. — SanLuis AI Solutions',
  description: 'Route inefficiency, warehouse slowdowns, and supply chain disruptions cost logistics operators daily. We build AI to eliminate the waste.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Logistics."
        description="Route inefficiency, warehouse slowdowns, and supply chain disruptions cost logistics operators daily. We build AI to eliminate the waste."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection delay={0}>
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_logistics_00001_.png" alt="Automated logistics warehouse" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">Logistics margins are razor-thin. A 5% improvement in route efficiency or warehouse throughput can mean the difference between profit and loss. Yet most operations still rely on manual dispatch and static route planning.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that optimize routes in real time, automate warehouse sorting and inventory tracking, and predict supply chain disruptions before they happen.</p>
          <p className="sl-body max-w-prose mb-4">Our route optimization engine ingests traffic, weather, and order data to produce dynamic dispatch schedules — reducing fuel consumption by 12-18% on average. Warehouse automation systems use computer vision to track every pallet, case, and SKU in real time, eliminating inventory discrepancies. Supply chain models run predictive simulations that flag disruption risk factors from supplier performance to geopolitical events, giving you 2 weeks of lead time instead of 2 hours.</p>

          <div className="bg-gold-50 border border-gold-300 rounded-lg p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">We design and deploy custom AI automation for logistics operators — focusing on real-time route optimization, warehouse computer vision, and predictive supply chain analytics. Every solution is built around your existing infrastructure: we integrate with your TMS, WMS, and ERP systems rather than replacing them. Our automation-first approach means dispatchers spend time on exceptions, not routine planning.</p>
            <p className="sl-body-sm">Learn how our automation methodology helped <Link href="/case-studies/garza-international" className="text-gold-600 underline hover:text-gold-700">Garza International</Link> streamline construction logistics with AI-powered scheduling and resource tracking.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Route Optimization</div><div className="font-sans text-sm text-fg2 mt-2">Dynamic routing that adapts to traffic, weather, and demand — reducing fuel costs by 12-18%.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Warehouse Ops</div><div className="font-sans text-sm text-fg2 mt-2">AI-powered sorting, computer vision inventory tracking, and optimized pick paths.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Supply Chain Risk</div><div className="font-sans text-sm text-fg2 mt-2">Predictive models that flag disruptions 2 weeks in advance — not 2 hours.</div></div></div>
          <div className="mt-12">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
          </div>
        </div>
        </AnimatedSection>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Construction Logistics</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Garza International</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we applied AI-powered scheduling and resource tracking to streamline construction logistics — demonstrating the same automation principles that apply to warehouse ops and supply chain management.</p>
              <Link href="/case-studies/garza-international" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to optimize your logistics?</h2>
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
