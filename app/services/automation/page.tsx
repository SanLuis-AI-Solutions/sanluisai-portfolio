import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'
import KeyTakeaway from '@/components/KeyTakeaway'

export const metadata: Metadata = {
  title: 'AI Automation | SanLuis AI Solutions',
  description: "We build AI Automation that gives your team a full day back every week. Discovery is $300. Automations ship from $1,200.",
  openGraph: {
    title: 'AI Automation | SanLuis AI Solutions',
    description: 'Give your team a full day back every week with AI Automation. Discovery from $300.',
    url: 'https://sanluisai-portfolio.vercel.app/services/automation',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const useCases = [
  {
    industry: 'Professional Services',
    examples: ['Client intake and onboarding sequences', 'Invoice generation and reconciliation', 'Report delivery scheduling', 'Time tracking auto-capture'],
    recovery: '25–40 hrs/wk',
  },
  {
    industry: 'Real Estate',
    examples: ['Lead response automation (instant follow-up)', 'Property listing syndication', 'Showing confirmation and follow-up', 'Document package assembly'],
    recovery: '20–30 hrs/wk',
  },
  {
    industry: 'Retail & E-Commerce',
    examples: ['Order-to-cash processing', 'Customer inquiry triage', 'Inventory alert workflows', 'Review response automation'],
    recovery: '30–40 hrs/wk',
  },
  {
    industry: 'Manufacturing',
    examples: ['Supplier PO matching', 'Maintenance ticket routing', 'Compliance report auto-generation', 'Shift handoff summaries'],
    recovery: '20–35 hrs/wk',
  },
]

const faqItems = [
  {
    q: "What's the difference between automation and an AI agent?",
    a: "Automation follows fixed rules: when a specific event happens, the system performs a defined action. It is deterministic, predictable, and fast. An AI agent works within boundaries and makes judgment calls. We begin with automation because it is the fastest path to measurable savings, then add agents where judgment is required.",
  },
  {
    q: "Do I need to replace my existing tools?",
    a: "No. We integrate with the tools you already use, including CRMs, accounting platforms, email, Slack, spreadsheets, ERPs, and any system with an API or webhook. If a tool lacks an API, we build a connector. We do not sell another platform and we do not require migration.",
  },
  {
    q: "How long until I see results?",
    a: "Most automations ship within one to two weeks. You will see measurable time savings within the first week after deployment. We include 30 days of post-launch support to catch edge cases and optimize performance. The result is visible from day one.",
  },
  {
    q: "What if it doesn't save us enough?",
    a: "We measure hours recovered at 30, 60, and 90 days against your baseline. If the automation has not paid for itself within six months, we adjust the scope at no cost until it does. Our goal is not delivery. Our goal is a system that delivers a return.",
  },
]

export default function AutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 02"
        title="AI Automation."
        description="Your team loses a full day every week to work that follows predictable rules. We eliminate it. Our automations run inside your existing tools, ship in one to two weeks, and start at $1,200."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <KeyTakeaway
          summary="AI Automation handles repetitive, rule-based tasks your team does manually. We build it into your existing tools, ship in 1-2 weeks, and you own the code. No subscriptions, no lock-in."
          timeline="1-2 weeks to deploy"
          startingAt="From $1,200"
        />
      </div>

      {/* Problem section */}
      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem you already know.</h2>
            <p className="sl-body-lg mb-4">
              Data entry, invoice matching, report generation, email triage, lead follow-up. The work follows clear rules. Someone has to do it, and it repeats every day. It does not require judgment, creativity, or relationship. It requires time. For most teams, this work consumes more than twenty hours every week. That is a full day of capacity lost to processes that could run without a person.
            </p>
            <p className="sl-body-lg mb-4">
              The cost is not just hours. It is delayed responses, missed leads, invoice errors, and the fatigue that builds by Friday afternoon. Every manual handoff is an opportunity for delay. Every repeated task is a signal that the process should run on its own. The work still matters. It just does not matter who does it, as long as it happens accurately and on time.
            </p>
            <p className="sl-body-lg">
              Everyone has access to the same AI. The difference is what you build with it. We do not sell chatbots. We do not sell strategy decks. We sell working systems. We connect your existing tools, define the rules that already exist in your head, and let the machine execute them. Your people get that time back for work that only a person can do. That is how you reclaim a day a week.
            </p>
          </div>

          {/* What we automate */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-navy-200 rounded p-8">
              <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-2">We automate</p>
              <p className="sl-body-sm mb-3">
                We automate the work that follows clear rules. Lead intake is routed to the right person without a human reading the form. Invoices are generated, sent, and reconciled against payments while you sleep. Reports are aggregated from multiple sources and delivered before your morning meeting. Customer inquiries are triaged, categorized, and answered or escalated automatically. Data is extracted from documents and entered where it belongs. Onboarding sequences move new clients through each step without anyone remembering to press send. Compliance records and audit trails assemble themselves.
              </p>
              <p className="sl-body-sm">
                We build each automation into your existing stack. We connect CRMs, accounting platforms, email, Slack, spreadsheets, ERPs, and anything with an API or a webhook. If a tool does not have an API, we build a connector. We do not ask you to migrate. We do not sell another subscription platform. We build the one workflow that removes the daily load.
              </p>
            </div>
            <div className="bg-white border border-navy-200 rounded p-8">
              <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-2">We DO NOT automate</p>
              <p className="sl-body-sm mb-3">
                We do not automate decisions that require human judgment. Strategic choices, client-facing creative work, high-touch relationship management, and complex negotiation stay with your people. These are the activities that justify your expertise and your fees. Removing the human from them would not save time. It would remove value.
              </p>
              <p className="sl-body-sm">
                We do not automate unclear processes. If the rules are not defined, we define them first. If the process changes every time it runs, we fix the process before we automate it. Automation is not a way to avoid thinking. It is the result of thinking clearly.
              </p>
            </div>
          </div>

          {/* Use case gallery */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">Automation by industry.</h2>
          <p className="sl-body-sm mb-8 max-w-2xl text-fg2">Every business has different patterns. These are common starting points and the time they typically recover.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {useCases.map((u) => (
              <div key={u.industry} className="bg-white border border-navy-200 rounded p-5 hover:border-navy-900 transition-all duration-220">
                <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-3">{u.industry}</p>
                <ul className="space-y-2 mb-4">
                  {u.examples.map((ex) => (
                    <li key={ex} className="font-sans text-xs text-fg3 flex items-start gap-1.5">
                      <Diamond className="text-gold-500 mt-0.5 w-2 h-2 shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-navy-100 pt-3 mt-3">
                  <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-fg4">Time recovered</span>
                  <div className="font-display text-lg text-navy-800">{u.recovery}</div>
                </div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl text-bone-50 mb-4">How it works.</h2>
            <p className="font-sans text-sm text-bone-300/70 leading-relaxed mb-6">
              We do not workshop forever. We do not ship slide decks. We map, build, ship, and maintain systems that run on their own. Each phase has a clear output, a clear timeline, and a clear owner.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Map', desc: 'We begin with a $300 Discovery Session. In one hour we identify the single process that consumes the most manual time. We map the inputs, the handoffs, the decisions, and the outputs. You leave with a clear build plan and a fixed price.' },
                { step: '02', title: 'Build', desc: 'We build the automation in one to two weeks using your existing tools. Every connector, rule, and trigger is written for your workflow, not copied from a template. You review before anything goes live.' },
                { step: '03', title: 'Ship', desc: 'We deploy directly into your production environment. Your team is trained on what changed and what stayed the same. We measure the baseline against the old process so the time saved is visible from day one.' },
                { step: '04', title: 'Measure', desc: 'We maintain the system for 30 days post-launch. We track hours recovered, catch edge cases, and tune performance. If the automation is not paying for itself within six months, we adjust it at no cost until it is.' },
              ].map((s) => (
                <div key={s.step}>
                  <div className="font-display text-3xl text-gold-500 mb-2">{s.step}</div>
                  <h3 className="font-display text-lg text-bone-50 mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-bone-300/70 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="max-w-3xl border-t border-navy-200 pt-12 mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-6">Common questions about automation.</h2>
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
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Related Case Study</p>
            <p className="sl-body-sm mb-3">Susie's Jewelry Repair lost half their leads to slow, inconsistent follow-up. We automated capture and nurture across website, phone, and walk-in, and inbound leads tripled in two weeks. Investment: $1,200 to $2,000.</p>
            <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the full case study &rarr;</Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Explore other services */}
      <AnimatedSection delay={0.1}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="font-display text-xl text-navy-800 mb-4 text-center">Explore other services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <Link href="/services/custom-ai" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Custom AI Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
          </Link>
          <Link href="/services/agents" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Agent Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
          </Link>
          <Link href="/services/consulting" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Consulting</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">Custom pricing</div>
          </Link>
          <Link href="/services/discovery-session" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Discovery Session</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">$300</div>
          </Link>
        </div>
      </section>
      </AnimatedSection>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to get your team's time back?</h2>
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
