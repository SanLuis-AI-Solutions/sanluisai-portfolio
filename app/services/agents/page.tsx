import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI Agents — SanLuis AI Solutions',
  description: 'Deploy autonomous AI agents that observe, reason, and execute multi-step tasks independently. Available 24/7, they scale with demand and never drop a task.',
}

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="AI Agents."
        description="Autonomous agents that operate independently within defined guardrails — observing, reasoning, and executing multi-step tasks without hand-holding."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="sl-body-lg max-w-prose mb-6">
            Autonomous agents that operate independently within defined guardrails. They observe, reason, and execute multi-step tasks without someone holding their hand at every turn.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            We architect agents that handle customer inquiries, qualify leads, monitor systems, and trigger escalation workflows. Each agent is trained on your data, bound by your policies, and every step is auditable.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            Deploy a 24/7 digital workforce that scales with demand and never drops a task.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
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
