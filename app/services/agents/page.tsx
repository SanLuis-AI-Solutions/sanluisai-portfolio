import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents — SanLuis AI Solutions',
  description: 'Deploy autonomous AI agents that observe, reason, and execute multi-step tasks independently. Available 24/7, they scale with demand and never drop a task.',
}

export default function AgentsPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </nav>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="sl-display-lg text-navy-800 mb-6">AI Agents</h1>
          <p className="sl-body-lg max-w-prose mb-6">
            Autonomous agents that operate independently within defined guardrails. They observe, reason, and execute multi-step tasks without human hand-holding at every turn.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            We architect agents that handle customer inquiries, qualify leads, monitor systems, and trigger escalation workflows. Each agent is trained on your data, bound by your policies, and auditable at every step.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            Deploy a 24/7 digital workforce that scales with demand and never drops a task.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </main>
      <footer className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
          <p className="font-sans text-sm text-navy-300">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
