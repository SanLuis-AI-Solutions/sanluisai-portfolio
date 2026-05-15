import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI Agents — SanLuis AI Solutions',
  description: "Customer inquiries pile up overnight. Lead qualification happens during business hours or not at all. Deploy an AI agent that operates within the rules you set — 24/7, every step logged.",
}

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="AI Agents."
        description="Customer inquiries pile up overnight. Lead qualification happens during business hours — or not at all. You're losing opportunities because there aren't enough hours in the day."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="sl-body-lg max-w-prose mb-6">
            An AI agent that operates within the rules <em>you</em> set. It qualifies leads at 2 a.m., triages support tickets in real time, monitors systems for anomalies, and triggers escalation workflows — all without waking anyone up.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            Every agent is trained on your data and bound by your policies. Every step is logged. You approve outcomes, not every decision. Set the boundaries, define the rules, and the agent operates inside them without someone watching every move.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            <strong className="text-navy-800">The relief of clarity:</strong> Available 24/7. Scales with demand. Never drops a task. You wake up to qualified leads, resolved tickets, and a clean dashboard — not an overflowing inbox.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </section>
      </AnimatedSection>

      {/* Case study reference */}
      <div className="border border-navy-200 rounded p-6 md:p-8 mt-12 max-w-prose mx-auto bg-white">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Related Case Studies</p>
        <p className="sl-body-sm mb-3">See how our AI agents delivered results for Garza International (60% faster quoting), LoveFlow (40% better matches), and Susie's Jewelry Repair (3x leads).</p>
        <Link href="/case-studies" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">View all case studies →</Link>
      </div>

      {/* Explore other services */}
      <section className="max-w-prose mx-auto mt-12">
        <h3 className="font-display text-xl text-navy-800 mb-4 text-center">Explore other services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link href="/services/custom-ai" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Custom AI Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
          </Link>
          <Link href="/services/automation" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Workflow Automation</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $1,200</div>
          </Link>
          <Link href="/services/consulting" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Discovery Session</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">$300</div>
          </Link>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to deploy your agents?</h2>
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
