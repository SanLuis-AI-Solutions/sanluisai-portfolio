import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI Automation. SanLuis AI Solutions',
  description: "Your team spends hours on work that follows predictable rules. We automate the repetitive, not the strategic. Your people get time back for work that needs human judgment.",
}

const useCases = [
  {
    industry: 'Professional Services',
    examples: ['Client intake and onboarding sequences', 'Invoice generation and reconciliation', 'Report delivery scheduling', 'Time tracking auto-capture'],
    recovery: '25–40 hrs/wk',
  },
  {
    industry: 'Real Estate',
    examples: ['Lead response automation (60x odds per hour)', 'Property listing syndication', 'Showing confirmation and follow-up', 'Document package assembly'],
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
    a: "Automation follows fixed rules: when X happens, do Y. It is deterministic and predictable. An AI agent makes decisions within boundaries. It evaluates, chooses, and acts without a fixed path. Most businesses need both. We start with automation because it is the fastest path to measurable savings, then layer in agents where judgment is needed.",
  },
  {
    q: "Do I need to replace my existing tools?",
    a: "No. We integrate with what you already use. CRM, email, Slack, QuickBooks, spreadsheets, ERP, anything with an API or a webhook. If a tool does not have an API, we build a connector. We do not sell subscription platforms or require you to migrate.",
  },
  {
    q: "How long until I see results?",
    a: "Workflow automations ship in 1–2 weeks. Most clients see measurable time savings within the first week of deployment. The 30-day post-launch support period catches edge cases and optimizes performance.",
  },
  {
    q: "What if it doesn't save us enough?",
    a: "If the automation does not pay for itself within 6 months, we fix it free. We measure hours recovered at 30, 60, and 90 days and compare against your baseline. If the numbers are not there, we adjust the scope at no cost until they are.",
  },
]

export default function AutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 02"
        title="Workflow Automation."
        description="Your team loses 20–40 hours per week to work that follows predictable rules. We eliminate it. Your people focus on decisions, not data entry. Fixed price, 1–2 week delivery, you own the code."
      />

      {/* Problem section */}
      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem you already know.</h2>
            <p className="sl-body-lg mb-4">
              Data entry, invoice matching, report generation, email triage, lead follow-up. Work that absolutely needs to happen. It absolutely does not need your most expensive people doing it. You know exactly which processes waste the most time. You just have not had the capacity to fix them.
            </p>
            <p className="sl-body-lg">
              <strong className="text-navy-800">We automate the repetitive, not the strategic.</strong> We build pipelines that read, write, route, and act across your existing tools. Your team stops doing the work machines should do. The work gets done faster, with fewer errors, and the burnout on Friday afternoon disappears.
            </p>
          </div>

          {/* What we automate */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-navy-200 rounded p-8">
              <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-2">We automate</p>
              <ul className="space-y-3 sl-body-sm">
                {['Lead intake and qualification routing', 'Invoice generation and payment reconciliation', 'Report aggregation and scheduled delivery', 'Customer inquiry triage and response', 'Data extraction and spreadsheet population', 'Onboarding sequence orchestration', 'Compliance and audit trail assembly'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Diamond className="text-green-500 mt-1 w-3 h-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-navy-200 rounded p-8">
              <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-2">We DO NOT automate</p>
              <ul className="space-y-3 sl-body-sm">
                {['Strategic decisions requiring human judgment', 'Client-facing creative work', 'High-touch relationship management', 'Negotiation and complex problem-solving'].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Diamond className="text-red-400 mt-1 w-3 h-3 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Use case gallery */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">Automation by industry.</h2>
          <p className="sl-body-sm mb-8 max-w-2xl text-fg2">Every business has different problems. Here is how automation maps to common industry patterns. This gives you a sense of what is possible.</p>
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
            <h2 className="font-display text-2xl text-bone-50 mb-6">How it works.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Map', desc: 'We identify the single process eating the most time. One hour, one problem.' },
                { step: '02', title: 'Build', desc: 'We build the automation in 1–2 weeks using your existing tools. No ripping anything out.' },
                { step: '03', title: 'Ship', desc: 'Installed into your workflow. Team trained. Baseline measured against the old process.' },
                { step: '04', title: 'Measure', desc: '30-day check-in to confirm hours recovered. If under target, we adjust at no cost.' },
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
            <p className="sl-body-sm mb-1">Susie's Jewelry Repair was losing half their leads because follow-up was manual and inconsistent. We automated capture and nurture across website, phone, and walk-in. <strong className="text-navy-800">3x inbound leads in 2 weeks.</strong></p>
            <p className="sl-body-sm mb-3 text-fg2">Investment: $1,200–2,000. Net Year 1 gain: ~$14,800 (7x payback).</p>
            <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the full case study &rarr;</Link>
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
          <Link href="/services/agents" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Agent Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
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
