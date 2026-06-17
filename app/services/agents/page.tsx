import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI Agent Systems | SanLuis AI Solutions',
  description: "Automation handles the predictable. Agents handle the ambiguous. We build working systems that decide, act, and improve while your team focuses on judgment.",
  openGraph: {
    title: 'AI Agent Systems | SanLuis AI Solutions',
    description: 'We build AI agents that decide, act, and improve—so your team stays focused on judgment.',
    url: 'https://sanluisai-portfolio.vercel.app/services/agents',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const agentCapabilities = [
  {
    title: 'Lead Qualification Agent',
    desc: 'Inbound leads do not arrive on a schedule. This agent evaluates every inquiry against your scoring criteria in real time, regardless of hour. It identifies buying signals, enriches contact records, and routes qualified opportunities to the right salesperson with context attached. Warm prospects enter a nurture sequence. Cold prospects are archived for later review. The result is a sales pipeline that is already sorted before your team opens their laptops.',
    example: 'A construction contractor wakes up to eight qualified leads sorted by project size, budget range, and timeline urgency. Ready to call, not sort.',
  },
  {
    title: 'Customer Triage Agent',
    desc: 'Support volume grows faster than headcount. This agent reads incoming requests, classifies intent, and resolves the issues that have clear answers. When a request is ambiguous, sensitive, or outside its authority, it escalates with a full summary and recommended next step. Every interaction feeds back into the model, so the agent expands what it can handle and narrows what reaches humans. Your support team spends less time repeating answers and more time solving the problems that matter.',
    example: 'A property management firm resolves 90% of tenant maintenance requests without a human touching them. The 10% that need attention arrive with diagnosis already complete.',
  },
  {
    title: 'Research & Intelligence Agent',
    desc: 'Market intelligence is valuable when it is current and useless when it is late. This agent monitors competitors, regulatory filings, pricing changes, news sources, and industry signals across the channels you care about. It synthesizes raw information into concise briefings, flags material shifts, and surfaces opportunities your team would miss at human reading speed. You stop reacting to information you found yesterday. You start deciding based on what the market did overnight.',
    example: 'A logistics company starts each day with a three-minute briefing on regulatory changes, fuel price shifts, and competitor route expansions. No manual research required.',
  },
  {
    title: 'Workflow Orchestrator',
    desc: 'Complex processes break at the handoffs between tools. This agent receives incoming data, interprets what it means, chooses the correct path, and executes actions across disconnected systems. It handles exceptions by checking alternatives, logging the decision, and escalating when no valid path exists. Whether the workflow spans intake forms, billing, scheduling, or compliance checks, the agent keeps the process moving without a person sitting between systems.',
    example: 'A healthcare billing pipeline extracts patient data from intake forms, checks insurance eligibility, generates claims, and routes exceptions. All in under 60 seconds.',
  },
]

const faqItems = [
  {
    q: "How is an AI agent different from an automation?",
    a: "Automation follows fixed rules. When X happens, it does Y. An agent evaluates context and chooses a path based on judgment. It can handle vague requests, compare options, and learn from outcomes. Most deployments use both: automation for the predictable steps, agents for the steps that require interpretation.",
  },
  {
    q: "How do I trust it to make decisions?",
    a: "You define the boundaries before anything runs. We set approval gates for high-stakes decisions, maintain full audit logs, and configure escalation triggers at the start. You review outcomes, not every micro-decision. Guardrails begin tight and expand only as the agent proves reliability.",
  },
  {
    q: "Can it work with my existing systems?",
    a: "Yes. Agents connect to your CRM, help desk, email, Slack, databases, and any API you already use. If a system lacks an integration surface, we build a connector. Your existing infrastructure stays in place. The agent fills the gaps without forcing a platform migration.",
  },
  {
    q: "How do I know it's working?",
    a: "Every action is logged and visible in a dashboard. We measure tasks completed, decisions made, escalations triggered, and hours saved against baseline metrics set before deployment. Reviews happen at 14, 30, and 60 days. You see the return in weeks, not quarters.",
  },
]

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 03"
        title="AI Agent Systems."
        description="Automation handles the predictable. Agents handle the ambiguous. We deploy working systems that qualify leads, triage customers, and monitor markets around the clock so your team gets a day back every week."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The difference between rules and judgment.</h2>
            <p className="sl-body-lg mb-4">
              SanLuis AI Solutions is a Houston-based AI automation company founded by Daniel San Luis. We build working systems for small and mid-size businesses, including AI Agent Systems from $5,000, AI Automation from $1,200, Custom AI Systems from $5,000, and a $300 Discovery Session to map the right starting point.
            </p>
            <p className="sl-body-lg mb-4">
              The difference between automation and an agent is the difference between a rule and a judgment. Automation follows instructions: when this happens, do that. It is excellent for repetitive work with clear inputs and fixed outputs. An agent evaluates context, chooses between options, and adapts when the situation changes.
            </p>
            <p className="sl-body-lg mb-4">
              Most businesses need both. The predictable parts of your process should be automated without thought. The ambiguous parts should be handled by agents that reason within boundaries you set. A lead qualification agent screens inbound inquiries at 2 a.m., scores them against your criteria, and routes only the ready ones to sales. A customer triage agent resolves common requests on its own and passes complex issues to humans with full context attached. A research agent monitors competitors, regulation, and pricing signals so your team starts the day informed instead of digging. A workflow orchestrator coordinates handoffs across CRM, email, billing, and operations systems that currently require someone to watch.
            </p>
            <p className="sl-body-lg">
              <strong className="text-navy-800">Everyone has access to the same AI. We build the one thing that saves you a day a week.</strong> Working systems that operate 24/7, log every action, and escalate only when necessary. Your best people stop sorting, routing, and watching inboxes. They start closing, advising, and building.
            </p>
          </div>

          {/* What agents do: capability cards */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What an AI agent does for you.</h2>
          <p className="sl-body-sm mb-8 max-w-2xl text-fg2">Each agent is trained on your data and bound by your policies. Every action is logged. You approve outcomes, not every decision.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {agentCapabilities.map((cap) => (
              <div key={cap.title} className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220">
                <h3 className="font-display text-xl text-navy-800 mb-2 flex items-center gap-2">
                  <Diamond className="text-gold-600" />
                  {cap.title}
                </h3>
                <p className="sl-body-sm mb-4">{cap.desc}</p>
                <div className="bg-bone-100 border border-navy-100 rounded p-4">
                  <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-1">In practice</p>
                  <p className="font-sans text-xs text-fg3 leading-relaxed">{cap.example}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Agent lifecycle */}
          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl text-bone-50 mb-6">Built-in safety, by design.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Guardrails', desc: 'Every agent ships with explicit boundaries. We define what it can decide alone, what requires approval, and what is strictly out of scope. Authority is granted in increments, never assumed.' },
                { title: 'Audit Log', desc: 'Every action is recorded with timestamp, input, decision rationale, and outcome. Trace any result back to the exact context that produced it. Accountability is built in, not added later.' },
                { title: 'Escalation Rules', desc: 'When confidence drops or a case falls outside policy, the agent stops and routes the item to a human with full context. No decision is made in the dark.' },
                { title: 'Learning Loop', desc: 'Outcomes and escalations feed back into the agent. We tune models monthly so performance improves and drift is caught early.' },
              ].map((s) => (
                <div key={s.title}>
                  <h3 className="font-display text-lg text-bone-50 mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-bone-300/70 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl border-t border-navy-200 pt-12 mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-6">Common questions about AI agents.</h2>
            <div className="space-y-6">
              {faqItems.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-display text-lg text-navy-800 mb-2">{faq.q}</h3>
                  <p className="sl-body-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Case study reference */}
          <div className="border border-navy-200 rounded p-6 md:p-8 max-w-prose bg-white">
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Related Case Studies</p>
            <p className="sl-body-sm mb-1"><strong className="text-navy-800">Garza International:</strong> AI-powered quoting engine that evaluates win/loss history and generates proposals autonomously. 60% faster turnaround, 85% fewer errors.</p>
            <p className="sl-body-sm mb-3"><strong className="text-navy-800">LoveFlow:</strong> Behavioral matching agent that learns from user interaction patterns. 40% better matches, 2x retention improvement.</p>
            <Link href="/case-studies" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">View all case studies &rarr;</Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Explore other services */}
      <AnimatedSection delay={0.1}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="font-display text-xl text-navy-800 mb-4 text-center">Explore other services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          <Link href="/services/custom-ai" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Custom AI Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
          </Link>
          <Link href="/services/automation" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Automation</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $1,200</div>
          </Link>
          <Link href="/services/consulting" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Discovery Session</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">$300</div>
          </Link>
        </div>
      </section>
      </AnimatedSection>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to deploy your first agent?</h2>
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
