import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import OrnamentDivider from '@/components/OrnamentDivider'
import BeforeAfter from '@/components/BeforeAfter'

export const metadata: Metadata = {
  title: 'Garza International — Case Study | SanLuis AI Solutions',
  description: 'How SanLuis AI automated manual quoting at Garza International, reducing bid turnaround by 60%.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Construction"
        title="Garza International."
        description="A Houston-based construction firm losing bids because manual quoting took 6+ hours per response. We built a custom AI quoting engine that cut turnaround by 60%."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">3 weeks</div></div>
            <div><AnimatedCounter value={60} suffix="%" label="Faster turnaround" /></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>

          {/* Impact counters */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <AnimatedCounter value={4} suffix=" hrs" label="Saved per bid" />
            <AnimatedCounter value={8} label="Bids per week now" />
            <AnimatedCounter value={85} suffix="%" label="Fewer errors" />
          </div>
          <OrnamentDivider className="!py-8" />
          <h2 className="font-display text-2xl text-navy-800 mb-4">The Problem</h2>
          <p className="sl-body mb-6">Garza International's estimators spent hours manually pulling material costs, labor rates, and historical bid data for each new construction quote. The process was error-prone, slow, and couldn't scale as the business grew.</p>

          <BeforeAfter
            title="The Difference"
            before={{
              label: 'Manual Process',
              metric: 'Time Per Quote',
              value: '6+ hours',
              details: [
                'Estimator manually pulls material costs from 3 supplier catalogs',
                'Historical bid data scattered across spreadsheets',
                'Proposal formatting takes 45 minutes per bid',
                'Maximum 8 bids per week before burnout',
              ],
            }}
            after={{
              label: 'AI-Powered',
              metric: 'Time Per Quote',
              value: '2.5 hours',
              details: [
                'Real-time material pricing from supplier API integration',
                'Win/loss analysis auto-applied to every quote',
                'Formatted proposal generated in under 2 minutes',
                'Capacity increased to 16+ bids per week',
              ],
            }}
          />
          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-4">A custom AI quoting engine that:</p>
          <ul className="list-diamond mb-6 space-y-2 sl-body">
            <li>Pulls real-time material pricing from supplier APIs</li>
            <li>Analyzes historical bid win/loss data for optimal pricing</li>
            <li>Auto-generates formatted proposal documents</li>
            <li>Flags high-risk bids for estimator review</li>
          </ul>

          {/* ROI Snapshot — Billable Bleed */}
          <div className="bg-navy-900 text-bone-50 border border-gold-600/40 rounded p-6 mb-8">
            <h3 className="font-display text-xl text-gold-500 mb-4">ROI Snapshot — The Billable Bleed</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-1">Before — Annual Bleed</div>
                <div className="font-mono text-sm text-bone-300/80">8 bids/wk · 6 hrs/bid · $50/hr</div>
                <div className="font-display text-2xl text-red-400 mt-1">$124,800</div>
                <div className="font-sans text-xs text-bone-300/40 mt-1">Lost to slow manual quoting</div>
              </div>
              <div>
                <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-1">After — Year 1 Recovery</div>
                <div className="font-mono text-sm text-bone-300/80">60% faster · same volume</div>
                <div className="font-display text-2xl text-green-400 mt-1">+$74,880</div>
                <div className="font-sans text-xs text-bone-300/40 mt-1">Estimator time recovered</div>
              </div>
            </div>
            <div className="border-t border-bone-300/10 pt-4 flex items-baseline justify-between">
              <span className="font-sans text-xs text-bone-300/50">AI System Investment</span>
              <span className="font-display text-lg text-gold-500">$5,000–8,000</span>
            </div>
            <div className="font-sans text-xs text-gold-500/80 mt-3 font-medium">Net Year 1 Gain: ~$66,880–69,880</div>
          </div>

          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 text-fg2 font-display text-lg">
  <p className="italic mb-2">"SanLuis AI didn't just build software — they solved the single biggest problem in our sales process. We're bidding faster and winning more."</p>
  <footer className="text-gold-600/80 not-italic text-base">— Carlos Garza, Director of Operations</footer>
</blockquote>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Your quoting process could be 60% faster.</h2>
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
