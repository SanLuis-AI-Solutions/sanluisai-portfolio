import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI Agents | SanLuis AI Solutions',
  description: "Customer inquiries pile up overnight. Lead qualification happens during business hours or not at all. Deploy an AI agent that operates within the rules you set: 24/7, every step logged.",
}

const agentCapabilities = [
  {
    title: 'Lead Qualification Agent',
    desc: 'Screens inbound leads 24/7 against your scoring criteria. Routes hot leads to sales, nurtures warm leads with follow-up sequences, archives cold leads. All without human intervention.',
    example: 'A construction contractor wakes up to 8 qualified leads sorted by project size, budget range, and timeline urgency. Ready to call, not sort.',
  },
  {
    title: 'Customer Triage Agent',
    desc: 'Resolves common support inquiries autonomously, escalates complex issues with full context attached. Learns from every interaction to reduce escalation rates over time.',
    example: 'A property management firm handles 90% of tenant maintenance requests without a human touching them. The 10% that need human attention arrive with diagnosis already complete.',
  },
  {
    title: 'Research & Intelligence Agent',
    desc: 'Monitors competitors, industry news, and market signals. Synthesizes findings into briefings, alerts on changes that matter, and surfaces opportunities your team would miss at human reading speed.',
    example: 'A logistics company gets a daily briefing on regulatory changes, fuel price shifts, and competitor route expansions. Distilled to a 3-minute read.',
  },
  {
    title: 'Workflow Orchestrator',
    desc: 'Coordinates multi-step processes across your tools. Reads incoming data, decides the path, executes actions, logs results. Handles the handoffs between systems that currently require a person to watch.',
    example: 'A healthcare billing pipeline that extracts patient data from intake forms, checks insurance eligibility, generates claims, and routes exceptions. All in under 60 seconds.',
  },
]

const faqItems = [
  {
    q: "How is an AI agent different from an automation?",
    a: "Automation follows fixed rules (when X, do Y). An AI agent makes decisions: it evaluates context, chooses a path, and learns from outcomes. Agents are right when the process requires judgment: triaging a vague customer request, researching a market signal, deciding when to escalate. Most deployments combine both: automation handles the predictable, agents handle the ambiguous.",
  },
  {
    q: "How do I trust it to make decisions?",
    a: "You set the boundaries. Every agent comes with human review gates at critical decision points, full audit logging, and configurable escalation rules. You approve outcomes, not every step. We start with tight guardrails and loosen them as trust builds. Never the other way around.",
  },
  {
    q: "Can it work with my existing systems?",
    a: "Yes. Agents connect to your CRM, email, Slack, databases, APIs, and any tool with an integration surface. If a tool does not have an API, we build a connector. Your existing workflow stays intact. The agent plugs into the gaps, without replacing infrastructure.",
  },
  {
    q: "How do I know it's working?",
    a: "Every action is logged. You get a dashboard showing tasks completed, decisions made, escalations triggered, and time saved. We set baseline metrics before deployment and measure against them at 14, 30, and 60 days.",
  },
]

export default function AgentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 03"
        title="AI Agent Systems."
        description="Customer inquiries pile up overnight. Lead qualification happens during business hours, or not at all. An AI agent never sleeps. It qualifies, triages, and triggers workflows 24/7, every step logged."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem of 24/7 operations.</h2>
            <p className="sl-body-lg mb-4">
              Customer inquiries pile up overnight. Lead qualification happens during business hours, or not at all. Someone needs to watch the research briefings, monitor the support queue, catch the anomaly before it becomes a crisis. That someone is usually your most expensive person, doing work that follows a pattern, but requires judgment.
            </p>
            <p className="sl-body-lg">
              <strong className="text-navy-800">An AI agent never sleeps.</strong> It qualifies leads at 2 a.m., triages support tickets in real time, monitors systems for anomalies, and triggers escalation workflows. All without waking anyone up. You set the boundaries. You get the results. Your team focuses on the work that needs human attention.
            </p>
          </div>

          {/* What agents do: capability cards */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What an AI agent does for you.</h2>
          <p className="sl-body-sm mb-8 max-w-2xl text-fg2">Each agent is trained on your data and bound by your policies. Every action is logged. You approve outcomes, not every decision.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {agentCapabilities.map((cap) => (
              <div key={cap.title} className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220">
                <h3 className="font-display text-xl text-navy-800 mb-2">{cap.title}</h3>
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
                { title: 'Guardrails', desc: 'Every agent starts with tight boundaries. We define what it can decide autonomously, what needs approval, and what triggers a human escalation.' },
                { title: 'Audit Log', desc: 'Every action is recorded with timestamp, input, decision rationale, and outcome. Trace any result back to the exact context that produced it.' },
                { title: 'Escalation Rules', desc: 'Configurable paths for uncertainty: when confidence drops below a threshold, the agent flags the item with full context for human review.' },
                { title: 'Learning Loop', desc: 'Feedback from escalations and outcomes trains the agent to make better decisions over time. Monthly tune-ups included in every deployment.' },
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
            <p className="sl-body-sm mb-1"><strong className="text-navy-800">Garza International:</strong> AI-powered quoting engine that evaluates win/loss data and generates proposals autonomously. 60% faster turnaround, 85% fewer errors.</p>
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
            <div className="font-display text-navy-800">Workflow Automation</div>
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
