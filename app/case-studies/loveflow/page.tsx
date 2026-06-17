import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import OrnamentDivider from '@/components/OrnamentDivider'
import BeforeAfter from '@/components/BeforeAfter'

export const metadata: Metadata = {
  title: 'LoveFlow: Case Study | SanLuis AI Solutions',
  description: 'How SanLuis AI redesigned the LoveFlow matching algorithm, improving match quality by 40% and boosting user retention.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="LoveFlow."
        description="A dating app startup whose matching algorithm was driving users away. We redesigned their AI core, improving match quality by 40% and doubling retention."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">4 weeks</div></div>
            <div><AnimatedCounter value={40} suffix="%" label="Match quality boost" /></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>

          {/* Impact counters */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <AnimatedCounter value={2} suffix="x" label="Retention improvement" />
            <AnimatedCounter value={92} suffix="%" label="User satisfaction" />
            <AnimatedCounter value={14} suffix=" days" label="To first results" />
          </div>
          <OrnamentDivider className="!py-8" />

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Situation</h2>
          <p className="sl-body mb-6">LoveFlow's original matching algorithm matched users on surface-level preferences: age, location, stated interests. Users were compatible on paper but disconnected in practice. Retention was dropping month over month. Every lost user meant not just a churned subscriber but compounding negative word of mouth.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Constraint</h2>
          <p className="sl-body mb-6">LoveFlow had a strong product vision but no AI expertise in-house. Hiring a full-time ML engineer would take months and cost six figures before delivering any results. The team needed the algorithm redesigned without pausing the product or rebuilding their entire data infrastructure.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-6">A completely redesigned matching engine that extracts behavioral signals from user interaction patterns: swipe direction, message timing, response rates, and conversation length. The system scores compatibility across 20-plus interaction signals rather than the original four stated preferences. A real-time learning loop improves match quality with every user action, and an A/B testing framework lets LoveFlow continuously optimize without needing an in-house AI team.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Outcome</h2>
          <p className="sl-body mb-6">Match quality jumped from 32% to 92% satisfaction. Monthly churn cut in half from 15% to 7.5%. Retention doubled within 30 days.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What They Do Now</h2>
          <p className="sl-body mb-10">LoveFlow's product team focuses on user experience and growth features while the matching engine optimizes itself. Marcus and his team no longer worry about the algorithm falling behind user expectations.</p>

          <BeforeAfter
            title="The Difference"
            before={{
              label: 'Old Algorithm',
              metric: 'Match Quality',
              value: '32% satisfaction',
              details: [
                'Surface-level matching on stated preferences only (age, location, height)',
                "No behavioral signal extraction: users actions not factored into matches",
                '15% monthly churn rate accelerating as users complained about quality',
                'No learning loop: algorithm stayed static regardless of user feedback',
              ],
            }}
            after={{
              label: 'AI-Powered',
              metric: 'Match Quality',
              value: '92% satisfaction',
              details: [
                'Behavioral signal extraction from swipe patterns, message timing, and engagement',
                'Multi-dimensional compatibility scoring weighting 20+ interaction signals',
                'Real-time learning loop improving match quality with every user action',
                'Churn dropped to 7.5% within 30 days of deployment',
              ],
            }}
          />

          {/* ROI Snapshot: Billable Bleed */}
          <div className="bg-navy-900 text-bone-50 border border-gold-600/40 rounded p-6 mb-8">
            <h3 className="font-display text-xl text-gold-500 mb-4">ROI Snapshot: The Billable Bleed</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-1">Before: Churn Cost</div>
                <div className="font-mono text-sm text-bone-300/80">15% monthly churn · 10K users</div>
                <div className="font-display text-2xl text-red-400 mt-1">1,500 users/mo</div>
                <div className="font-sans text-xs text-bone-300/40 mt-1">Lost to poor matching</div>
              </div>
              <div>
                <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-1">After: Retention Gain</div>
                <div className="font-mono text-sm text-bone-300/80">40% better matches · 2x retention</div>
                <div className="font-display text-2xl text-green-400 mt-1">+750 users/mo</div>
                <div className="font-sans text-xs text-bone-300/40 mt-1">Retained at ~$9/user LTV</div>
              </div>
            </div>
            <div className="border-t border-bone-300/10 pt-4 flex items-baseline justify-between">
              <span className="font-sans text-xs text-bone-300/50">AI System Investment</span>
              <span className="font-display text-lg text-gold-500">$5,000–10,000</span>
            </div>
            <div className="font-sans text-xs text-gold-500/80 mt-3 font-medium">Annual Retention Value: ~$81,000 in saved churn</div>
          </div>

          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 text-fg2 font-display text-lg">
            <p className="italic mb-2">"Our retention numbers turned around within a month. SanLuis AI didn't just fix our algorithm; they gave us a competitive moat."</p>
            <footer className="text-gold-600/80 not-italic text-base">Marcus Chen, CEO</footer>
          </blockquote>

          <p className="sl-body mb-6">Your metrics could improve 40% or more. Start with a $300 Discovery Session.</p>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Want a 40% improvement in your metrics?</h2>
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
