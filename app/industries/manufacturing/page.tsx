import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI for Manufacturing. — SanLuis AI Solutions',
  description: 'Production issues, unplanned downtime, and quality control gaps cost manufacturers millions. We build custom AI to eliminate them.',
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
        <AnimatedSection delay={0}>
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_manufacturing_00001_.png" alt="AI-powered manufacturing facility" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">Manufacturing runs on precision. But most operations still rely on manual scheduling, reactive maintenance, and lagging quality indicators. The result: lost production time, scrap waste, and margin erosion that compounds daily.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that predict equipment failure before it happens, optimize production schedules in real time, and catch quality defects at the point of origin. One deployment. One problem solved.</p>

          <div className="bg-gold-50 border border-gold-300 rounded-lg p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">We build predictive maintenance systems that analyze sensor data to flag equipment failure 72 hours before it happens, computer vision pipelines that catch quality defects at line speed, and AI-driven demand forecasting that optimizes inventory levels across your supply chain. Each solution is custom-built around your existing PLCs, sensors, and ERP systems — no rip-and-replace required.</p>
            <p className="sl-body-sm">See how our approach to AI-powered scheduling and resource tracking helped <Link href="/case-studies/garza-international" className="text-gold-600 underline hover:text-gold-700">Garza International</Link> reduce downtime and optimize resource allocation on a major construction project.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Unplanned Downtime</div><div className="font-sans text-sm text-fg2 mt-2">Predictive models that flag failures 72 hours in advance.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Quality Control</div><div className="font-sans text-sm text-fg2 mt-2">Computer vision systems that catch defects at line speed.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Supply Chain</div><div className="font-sans text-sm text-fg2 mt-2">AI-driven demand forecasting and inventory optimization.</div></div></div>
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
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Predictive Scheduling</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Garza International</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we applied AI-powered predictive scheduling and resource tracking to reduce downtime on a major construction project — the same predictive principles that apply to manufacturing maintenance and production planning.</p>
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
