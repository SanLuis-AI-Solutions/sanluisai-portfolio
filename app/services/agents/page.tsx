import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents — SanLuis AI Solutions',
  description: 'Deploy autonomous AI agents that observe, reason, and execute multi-step tasks independently. Available 24/7, they scale with demand and never drop a task.',
}

export default function AgentsPage() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="sl-display-lg text-navy-800 mb-6">AI Agents</h1>
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
      </main>
      
    </>
  )
}
