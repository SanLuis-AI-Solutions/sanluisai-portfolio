import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI for Logistics | SanLuis AI Solutions',
  description: 'Route inefficiency, warehouse slowdowns, and supply chain disruptions cost logistics operators daily. We build AI to eliminate the waste.',
  openGraph: {
    title: 'AI for Logistics | SanLuis AI Solutions',
    description: 'Cut route waste, warehouse slowdowns, and supply chain disruption with AI built for logistics.',
    url: 'https://sanluisai-portfolio.vercel.app/industries/logistics',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
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
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="relative w-full h-48 md:h-72 rounded overflow-hidden mb-8 bg-navy-100">
              <Image
                src="/generated/ind_logistics_00001_.png"
                alt="Automated logistics warehouse"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-prose space-y-4 mb-10">
              <p className="sl-body">
                SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size logistics operators. We eliminate route waste, warehouse slowdowns, and supply chain disruption through fixed-price AI automation.
              </p>
              <p className="sl-body">
                Logistics margins are thin. A single delayed shipment, a half-empty truck, or a miscounted pallet can erase the profit on an entire route. Most operators still plan routes by hand, update dispatch boards in spreadsheets, and discover inventory discrepancies only after a customer complains. Static routes cannot respond to traffic, weather, or last-minute orders. Manual dispatch burns hours that should go toward exceptions and customer service. These gaps are not operational failures. They are automation opportunities.
              </p>
              <p className="sl-body">
                We build AI systems that turn fragmented logistics data into coordinated decisions. Our route optimization engine ingests live traffic, weather forecasts, delivery windows, vehicle capacity, and order priority to produce dynamic dispatch schedules that adapt throughout the day. Warehouse automation uses computer vision to track every pallet, case, and SKU from receiving to shipping, replacing cycle counts with continuous accuracy. Supply chain models run predictive simulations across supplier performance, carrier reliability, port congestion, and geopolitical signals, flagging disruption risk while you still have time to reroute.
              </p>
              <p className="sl-body">
                The result is a logistics operation that runs closer to plan, even when the plan changes. Fuel consumption typically falls 12-18% as trucks take fuller, shorter, better-timed paths. Inventory accuracy moves to real time, eliminating the root cause of most stockouts and overages. Disruption warnings arrive up to 2 weeks in advance, giving procurement and dispatch teams room to negotiate alternatives instead of absorbing penalties. Every solution is built around your existing TMS, WMS, and ERP systems. We integrate, not replace.
              </p>
              <p className="sl-body">
                This is v2.0 of logistics AI: software that recommends, systems that execute, and data that keeps every next decision sharper than the last.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-10">
              <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
              <p className="sl-body-sm mb-3">
                Based in Houston, Texas, SanLuis AI Solutions is an AI-augmented team that designs and deploys custom AI automation for logistics operators. Our focus is real-time route optimization, warehouse computer vision, predictive supply chain analytics, and automated dispatch. Every workflow is mapped to your existing infrastructure so dispatchers spend less time on routine planning and more time on exceptions.
              </p>
              <p className="sl-body-sm mb-3">
                Pricing is transparent. A $300 Discovery Session maps your highest-impact automation opportunity and delivers a written roadmap. Standard automation packages start at $1,200. Custom builds, including multi-system integrations and proprietary models, start at $5,000.
              </p>
              <p className="sl-body-sm">
                Learn how our automation methodology helped{' '}
                <Link href="/case-studies/garza-international" className="text-gold-600 underline hover:text-gold-700">
                  Garza International
                </Link>{' '}
                streamline construction logistics with AI-powered scheduling and resource tracking.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="mb-10">
              <h3 className="font-display text-2xl text-navy-800 mb-4">What We Build. What We Do Not Build.</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-navy-900 rounded overflow-hidden">
                <div className="bg-navy-900 text-bone-50 p-4 font-display text-lg">We Build</div>
                <div className="bg-navy-900 text-bone-50 p-4 font-display text-lg">We Do Not Build</div>

                <div className="bg-white p-4 border-b border-navy-100 font-sans text-sm text-fg2">
                  Dynamic route optimization that adapts to traffic, weather, and demand in real time.
                </div>
                <div className="bg-bone-100 p-4 border-b border-navy-100 font-sans text-sm text-fg2">
                  Autonomous vehicles or self-driving truck platforms.
                </div>

                <div className="bg-white p-4 border-b border-navy-100 font-sans text-sm text-fg2">
                  Warehouse computer vision for inventory tracking, sorting, and quality inspection.
                </div>
                <div className="bg-bone-100 p-4 border-b border-navy-100 font-sans text-sm text-fg2">
                  Fleet management hardware such as telematics devices or onboard sensors.
                </div>

                <div className="bg-white p-4 border-b border-navy-100 font-sans text-sm text-fg2">
                  Predictive supply chain analytics that flag disruption risk up to 2 weeks in advance.
                </div>
                <div className="bg-bone-100 p-4 border-b border-navy-100 font-sans text-sm text-fg2">
                  Driver-facing mobile apps or onboard driver behavior systems.
                </div>

                <div className="bg-white p-4 font-sans text-sm text-fg2">
                  Automated dispatch workflows that assign loads, suggest backhauls, and alert on exceptions.
                </div>
                <div className="bg-bone-100 p-4 font-sans text-sm text-fg2">
                  Off-the-shelf logistics software sold without integration or customization.
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-10">
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">
                  Route Optimization
                </div>
                <div className="font-display text-lg text-navy-800 mb-2">Dynamic routing</div>
                <div className="font-sans text-sm text-fg2 space-y-3">
                  <p>
                    Static routes waste fuel, time, and capacity. Our dynamic routing engine recalculates sequences and assignments throughout the day based on live traffic, weather, delivery windows, and vehicle constraints.
                  </p>
                  <p>
                    Dispatchers review exceptions instead of rebuilding schedules. Trucks run fuller, shorter, and better-timed paths.
                  </p>
                  <p>
                    Typical outcomes include a 12-18% reduction in fuel consumption, fewer missed windows, and higher daily stops per route.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">
                  Warehouse Ops
                </div>
                <div className="font-display text-lg text-navy-800 mb-2">Computer vision tracking</div>
                <div className="font-sans text-sm text-fg2 space-y-3">
                  <p>
                    Inventory accuracy breaks when humans scan, count, and reconcile in batches. We replace periodic cycle counts with continuous computer vision tracking across receiving, putaway, picking, and shipping.
                  </p>
                  <p>
                    Cameras and models identify pallets, cases, damage, and misplaced SKUs in real time, feeding clean data back to your WMS.
                  </p>
                  <p>
                    The result is real-time inventory accuracy, faster putaway and picking, and fewer expedited shipments caused by stockouts.
                  </p>
                </div>
              </div>

              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">
                  Supply Chain Risk
                </div>
                <div className="font-display text-lg text-navy-800 mb-2">2 weeks advance notice</div>
                <div className="font-sans text-sm text-fg2 space-y-3">
                  <p>
                    Most disruption warnings arrive as alerts after the problem has already formed. Our predictive models combine supplier performance, carrier reliability, port congestion, weather, and geopolitical signals into forward risk scores.
                  </p>
                  <p>
                    Procurement and logistics teams receive ranked scenarios up to 2 weeks in advance, with recommended reroutes, buffer stock, and alternative suppliers.
                  </p>
                  <p>
                    This shifts the conversation from reactive firefighting to planned risk management, protecting margins and customer commitments.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
              <p className="sl-body-sm italic">
                Not sure if AI makes sense for your logistics operation? Start with a $300 Discovery Session. We will map your current workflows, identify the highest-impact automation opportunity, and give you a written roadmap. Automation packages start at $1,200. Custom multi-system builds start at $5,000.
              </p>
              <p className="sl-body-sm italic mt-3">
                SanLuis AI Solutions has delivered 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and 40% better matches for LoveFlow.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">
                Construction Logistics
              </span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Garza International</h4>
              <p className="font-sans text-sm text-fg2 mb-4">
                How we applied AI-powered scheduling and resource tracking to streamline construction logistics. The same automation principles apply to warehouse operations, route optimization, and supply chain risk management.
              </p>
              <Link
                href="/case-studies/garza-international"
                className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline"
              >
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to optimize your logistics?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">
            Start with a $300 Discovery Session. 60 minutes. Clear roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded"
            >
              Book a Discovery Session.
            </Link>
            <a
              href="mailto:contact@sanluisai.com"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 border border-bone-300/30 text-bone-50 hover:border-gold-500 hover:text-gold-500 transition-all duration-220 rounded"
            >
              contact@sanluisai.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
