import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI for Retail. — SanLuis AI Solutions',
  description: 'Inventory waste, inconsistent customer service, and demand forecasting errors cost retailers margin. We build AI to eliminate the guesswork.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Retail."
        description="Inventory waste, inconsistent customer service, and demand forecasting errors cost retailers margin. We build AI to eliminate the guesswork."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection delay={0}>
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_retail_00001_.png" alt="Modern retail storefront" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">Retail runs on inventory turns and customer experience. But most retailers still use spreadsheets for demand planning, manual processes for customer follow-up, and intuition for pricing decisions.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that forecast demand with precision, automate customer service without sacrificing quality, and optimize pricing in real time.</p>
          <p className="sl-body max-w-prose mb-4">Our demand forecasting engine plugs into your POS data and predicts stock requirements 4 weeks out — reducing stockouts and overstock simultaneously. Customer service automation handles 80% of inquiries without human escalation, freeing your team for the complex cases. Dynamic pricing adjusts margins in real time based on demand, competitor pricing, and inventory position.</p>

          <div className="bg-gold-50 border border-gold-300 rounded-lg p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">We build custom AI systems for retailers — demand forecasting engines that plug into your POS to predict stock requirements 4 weeks out, customer service automation that handles 80% of inquiries without escalation, and dynamic pricing that adjusts margins in real time. Our solutions integrate with your existing POS, ecommerce, and inventory systems without disruptive changes.</p>
            <p className="sl-body-sm">See how we built a complete customer service automation system for <Link href="/case-studies/susies-jewelry-repair" className="text-gold-600 underline hover:text-gold-700">Susie&apos;s Jewelry Repair</Link>, a retail business that needed AI-powered customer service, pricing guidance, and operational workflow automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Inventory</div><div className="font-sans text-sm text-fg2 mt-2">AI demand forecasting that reduces stockouts and overstocks.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Customer Service</div><div className="font-sans text-sm text-fg2 mt-2">Automated support that resolves 80% of inquiries without escalation.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Pricing</div><div className="font-sans text-sm text-fg2 mt-2">Dynamic pricing engine that maximizes margin in real time.</div></div></div>
        </div>
        </AnimatedSection>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Retail Automation</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Susie&apos;s Jewelry Repair</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we built a complete AI-powered customer service and workflow automation system for a retail jewelry business — demonstrating demand management, customer communication, and pricing intelligence in action.</p>
              <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
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
