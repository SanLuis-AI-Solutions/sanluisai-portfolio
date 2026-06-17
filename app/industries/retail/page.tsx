import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI for Retail | SanLuis AI Solutions',
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
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="relative w-full h-48 md:h-72 rounded overflow-hidden mb-8 bg-navy-100">
              <Image src="/generated/ind_retail_00001_.png" alt="Modern retail storefront" fill className="object-cover" sizes="100vw" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="sl-body max-w-prose mb-4">Retail runs on inventory turns and customer experience. But most retailers still use spreadsheets for demand planning, manual processes for customer follow-up, and intuition for pricing decisions. The result is predictable: shelves sit empty on high-demand days while slow-moving SKUs tie up cash in back rooms. Customer service quality swings based on who answers the phone. Pricing becomes a reactive race to the bottom. These are not people problems. They are systems problems, and AI fixes them at the source.</p>
            <p className="sl-body max-w-prose mb-4">Inventory waste and stockouts are two sides of the same broken forecast. When demand planning relies on last year&apos;s numbers and gut feel, stores over-order to avoid missing sales and end up discounting excess stock. E-commerce channels compound the issue by promising inventory that the warehouse cannot actually fulfill. We build demand forecasting engines that read POS transactions, web traffic, seasonality, and local events to predict requirements four weeks out with measurable accuracy.</p>
            <p className="sl-body max-w-prose mb-4">Inconsistent customer service erodes the loyalty that retailers work hardest to earn. A new hire gives one answer, a veteran gives another, and after-hours inquiries sit unanswered until the next shift. Manual demand planning forces managers to spend Monday mornings reconciling spreadsheets instead of serving customers. Pricing guesswork leaves margin on the table because nobody has time to monitor competitor moves and elasticity across hundreds of SKUs. Customer follow-up gaps quietly kill repeat revenue: abandoned carts, unreturned repair calls, and lapsed loyalty members go unaddressed because the team is already underwater.</p>
            <p className="sl-body max-w-prose mb-4">Everyone has access to the same AI. We build the one system that saves your retail operation a day a week. Our retail solutions integrate with the tools you already use: POS, e-commerce, inventory, and email platforms. So you see results without a platform migration or a six-month implementation.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-8">
              <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
              <p className="sl-body-sm mb-3">We build custom AI systems for retailers. A demand forecasting engine plugs into your POS and predicts stock requirements four weeks out. Customer service automation resolves 80% of inquiries without human escalation. Dynamic pricing adjusts margins in real time against demand, competitor data, and inventory position. Lead follow-up automation captures abandoned carts, repair inquiries, and loyalty lapses and drives them back to purchase.</p>
              <p className="sl-body-sm">See how we built a complete customer service automation and pricing guidance system for <Link href="/case-studies/susies-jewelry-repair" className="text-gold-600 underline hover:text-gold-700">Susie&apos;s Jewelry Repair</Link>, a retail business that needed AI-powered customer communication, quoting support, and operational workflow automation.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
              <div className="bg-white border border-navy-900 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-4">We build</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-gold-500 mt-0.5" />
                    <span>Demand forecasting with four-week prediction horizons that reduce stockouts and overstocks simultaneously.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-gold-500 mt-0.5" />
                    <span>Customer service automation that resolves 80% of inquiries without escalation while routing complex cases to the right person.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-gold-500 mt-0.5" />
                    <span>Dynamic pricing engines that adjust margins in real time based on demand signals, competitor pricing, and inventory position.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-gold-500 mt-0.5" />
                    <span>Lead follow-up automation for abandoned carts, repair callbacks, and loyalty win-back sequences.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-4">We do not build</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-navy-400 mt-0.5" />
                    <span>Payment processing systems, merchant gateways, or checkout infrastructure.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-navy-400 mt-0.5" />
                    <span>E-commerce platforms or full store rebuilds. We integrate with the one you already run.</span>
                  </li>
                  <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                    <Diamond className="text-navy-400 mt-0.5" />
                    <span>POS hardware, kiosk terminals, or register replacement projects.</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Inventory</div>
                <div className="font-display text-lg text-navy-800 mb-2">4-week forecasting</div>
                <div className="font-sans text-sm text-fg2">Our demand forecasting engine learns from POS data, web traffic, seasonality, and local events to predict stock needs four weeks in advance. Retailers stop guessing how much to order and start stocking the right products at the right locations. The result is fewer stockouts during peak demand and less capital trapped in slow-moving inventory.</div>
              </div>
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Customer Service</div>
                <div className="font-display text-lg text-navy-800 mb-2">80% auto-resolved</div>
                <div className="font-sans text-sm text-fg2">We deploy customer service automation that answers order status questions, return policy requests, and appointment inquiries around the clock. Complex cases are identified and routed to the right team member with full context. Shoppers get consistent, accurate responses while your staff focuses on high-value conversations.</div>
              </div>
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Pricing</div>
                <div className="font-display text-lg text-navy-800 mb-2">Real-time margin</div>
                <div className="font-sans text-sm text-fg2">Our dynamic pricing engine monitors demand curves, competitor pricing, and inventory levels to recommend price adjustments that protect margin. Instead of reactive discounting, retailers make pricing decisions backed by live data and clear rules they control.</div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
              <p className="sl-body-sm mb-3">Not sure if AI makes sense for your retail business? Start with a $300 Discovery Session. We will map your current operations, identify the highest-impact automation opportunity, and give you a written roadmap whether you hire us or not.</p>
              <p className="sl-body-sm">Ongoing automation starts at $1,200 per month. Custom forecasting, pricing, and multi-location systems start at $5,000. Every engagement is scoped to the operational hours it returns, not to buzzword features. You know exactly what you are buying, what it connects to, and what it is expected to save before we write any code.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Retail Automation</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Susie&apos;s Jewelry Repair</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we built a complete AI-powered customer service and workflow automation system for a retail jewelry business. The project demonstrated demand-aware scheduling, customer communication automation, pricing guidance, and operational workflow improvements that saved hours every week.</p>
              <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build something that actually works?</h2>
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
