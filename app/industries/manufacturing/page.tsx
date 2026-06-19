import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI for Manufacturing. SanLuis AI Solutions',
  description: 'Production issues, unplanned downtime, and quality control gaps cost manufacturers millions. We build custom AI to eliminate them.',
  openGraph: {
    title: 'AI for Manufacturing. SanLuis AI Solutions',
    description: 'Eliminate unplanned downtime and quality gaps with custom AI built for manufacturing.',
    url: 'https://sanluisai-portfolio.vercel.app/industries/manufacturing',
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
        title="AI for Manufacturing."
        description="Production issues, unplanned downtime, and quality control gaps cost manufacturers millions. We build custom AI to eliminate them."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
          <div className="relative w-full h-48 md:h-72 rounded overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_manufacturing_00001_.png" alt="AI-powered manufacturing facility" fill className="object-cover" sizes="100vw" />
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
          <p className="sl-body max-w-prose mb-4">SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size manufacturers. We solve production issues, unplanned downtime, and quality control gaps with fixed-price AI automation.</p>

          <p className="sl-body max-w-prose mb-4">Unplanned downtime is one of the largest hidden costs in manufacturing. A single hour of stopped production on a critical line can erase thousands of dollars in margin, push delivery dates, and trigger expedited shipping penalties. Most facilities still discover failures after they happen, relying on maintenance rounds and operator intuition rather than continuous signal analysis.</p>
          <p className="sl-body max-w-prose mb-4">Manual scheduling compounds the problem. Production planners spend hours reconciling orders, machine availability, labor shifts, and material constraints inside spreadsheets and ERP modules that lag behind the shop floor. The schedule that looked optimal at 8:00 a.m. is often outdated by noon, leaving lines idle while rush orders wait and changeovers multiply.</p>
          <p className="sl-body max-w-prose mb-4">Reactive maintenance and quality escapes add more waste. When defects are caught downstream instead of at the point of origin, scrap piles up, rework consumes capacity, and warranty claims or customer returns erode trust. Without early warnings, maintenance teams trade parts on guesswork and overtime replaces planned repair windows.</p>
          <p className="sl-body max-w-prose mb-8">Everyone has access to the same AI. We build the one system that saves your manufacturing operation a day a week.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
          <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">Based in Houston, Texas, SanLuis AI Solutions is an AI-augmented team that builds predictive maintenance systems that analyze sensor data to flag equipment failure 72 hours before it happens, computer vision pipelines that catch quality defects at line speed, and AI-driven demand forecasting that optimizes inventory levels across your supply chain. Each solution is custom-built around your existing PLCs, sensors, and ERP systems. No rip-and-replace required.</p>
            <p className="sl-body-sm">See how our approach to AI-powered scheduling and resource tracking helped <Link href="/case-studies/garza-international" className="text-gold-600 underline hover:text-gold-700">Garza International</Link> reduce downtime and optimize resource allocation on a major construction project.</p>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-navy-900 rounded p-6">
              <h3 className="font-display text-lg text-navy-800 mb-4">We build</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Predictive maintenance systems that issue 72-hour advance failure warnings based on vibration, temperature, current, and pressure signals.</span>
                </li>
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Computer vision quality control that inspects parts at line speed and flags defects before they leave the station.</span>
                </li>
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>AI-driven demand forecasting that translates order history, seasonality, and supplier lead times into optimized inventory levels.</span>
                </li>
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Production schedule optimization that balances machine capacity, labor, material availability, and delivery priorities in real time.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <h3 className="font-display text-lg text-navy-800 mb-4">We do not build</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-navy-400 mt-1" />
                  <span>Industrial robotics arms, automated cells, or physical handling systems.</span>
                </li>
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-navy-400 mt-1" />
                  <span>PLC programming, ladder logic, or embedded firmware for machine controllers.</span>
                </li>
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-navy-400 mt-1" />
                  <span>IoT sensor hardware, wireless nodes, or edge device manufacturing.</span>
                </li>
                <li className="flex gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-navy-400 mt-1" />
                  <span>Generic SaaS platforms that force you to adapt your process to the software.</span>
                </li>
              </ul>
            </div>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Predictive Maintenance</div>
              <div className="font-display text-lg text-navy-800 mb-2">72-hour advance warning</div>
              <div className="font-sans text-sm text-fg2">Our models continuously ingest vibration, temperature, current, and pressure data from your existing sensors. They learn normal operating signatures for each asset and issue warnings up to 72 hours before failure, giving maintenance teams time to plan parts, schedule labor, and avoid emergency stops.</div>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Quality Control</div>
              <div className="font-display text-lg text-navy-800 mb-2">Defect detection at line speed</div>
              <div className="font-sans text-sm text-fg2">Computer vision pipelines inspect every part as it moves through the station, catching surface defects, dimensional drift, missing features, and assembly errors before they leave the line. Results feed back into operator dashboards and SPC systems so quality trends improve instead of accumulate.</div>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Demand Forecasting</div>
              <div className="font-display text-lg text-navy-800 mb-2">Inventory optimization</div>
              <div className="font-sans text-sm text-fg2">AI-driven forecasting models combine order history, seasonality, promotional calendars, and supplier lead times to recommend safety stock levels and production triggers. The outcome is fewer stockouts, less excess inventory, and more predictable cash flow across the supply chain.</div>
            </div>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
          <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
            <p className="sl-body-sm italic">Not sure if AI makes sense for your facility? Start with a $300 Discovery Session. We will audit your production data, identify the highest-impact automation opportunity, and give you a written roadmap. Automation solutions start at $1,200, and fully custom AI systems start at $5,000. Whether you hire us or not, you will leave with a clear next step.</p>
            <p className="sl-body-sm italic mt-3">Real client results from SanLuis AI Solutions include 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and 40% better matches for LoveFlow.</p>
          </div>
        </AnimatedSection>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Predictive Scheduling</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Garza International</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we applied AI-powered predictive scheduling and resource tracking to reduce downtime on a major construction project. The same predictive principles that apply to manufacturing maintenance and production planning.</p>
              <Link href="/case-studies/garza-international" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to transform your manufacturing?</h2>
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
