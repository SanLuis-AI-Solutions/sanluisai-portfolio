import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import FlameMark from '@/components/FlameMark'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'Services | SanLuis AI Solutions',
  description: 'We build the one thing that saves you a day a week. Not chatbots. Not strategy decks. Working systems that do the work so your people can focus on decisions, relationships, and results.',
  openGraph: {
    title: 'Services | SanLuis AI Solutions',
    description: 'We build the one thing that saves you a day a week. From $300 Discovery Session to custom AI systems at $5,000+. Discover, build, ship, maintain.',
    url: 'https://sanluisai-portfolio.vercel.app/services',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const servicesList = [
  {
    num: '01',
    name: 'Custom AI Systems',
    tag: 'Deep Build',
    bestFor: 'Companies with a specific operational problem that off-the-shelf software cannot solve',
    desc: 'Your company has one operational process that costs more time, money, or frustration than any other. Maybe it is a quoting engine that takes six hours per bid. Maybe it is a matching algorithm that does not actually match. Maybe it is a data pipeline held together by spreadsheets and patience. We build the system that solves that specific problem, end to end. You own the code. You control the roadmap. No license fees. No vendor lock-in.',
    items: [
      'Single-problem focus: one problem, solved completely, before we touch anything else',
      'Built on your data, your terminology, your workflow, your integration landscape',
      'Fixed-price, fixed-scope phases. Scope expansion becomes the next phase, not a change order',
    ],
    pricing: 'From $5,000',
    timeline: '3-6 weeks',
    href: '/services/custom-ai',
  },
  {
    num: '02',
    name: 'AI Automation',
    tag: 'Quick Win',
    bestFor: 'Teams losing 20+ hours a week to work that follows predictable rules',
    desc: 'Every business has processes that absolutely need to happen but absolutely do not need a person doing them. Lead intake, invoice generation, email triage, report delivery, data entry. These tasks follow rules. They are deterministic. A machine can run them faster, with fewer errors, and without burning out your most expensive people. We map your process, build the automation in 1-2 weeks, and ship it into your existing tools. You own the code. Your team gets their time back.',
    items: [
      'Integrates with your existing tools. We do not replace your stack. We connect the pieces.',
      '30-day post-launch support period to catch edge cases and optimize performance',
      'Measurable time savings within the first week. If it does not pay for itself in 6 months, we fix it free.',
    ],
    pricing: 'From $1,200',
    timeline: '1-2 weeks',
    href: '/services/automation',
  },
  {
    num: '03',
    name: 'AI Agent Systems',
    tag: 'Force Multiplier',
    bestFor: 'Operations that need 24/7 intelligent coverage without adding headcount',
    desc: 'Some work does not follow fixed rules. It requires judgment: triaging a vague customer request, qualifying a lead at 2 a.m., monitoring market signals, deciding when to escalate. An automation cannot do that. An AI agent can. We deploy agents that operate within the boundaries you set, making decisions while logged every step of the way. Your team wakes up to completed work, not a queue of decisions waiting for them.',
    items: [
      'Human review gates at critical decision points. You approve outcomes, not every step.',
      'Full audit logging with timestamp, input, decision rationale, and outcome for every action',
      'We start with tight guardrails and loosen them as trust builds. Never the other way around.',
    ],
    pricing: 'From $5,000',
    timeline: '3-6 weeks',
    href: '/services/agents',
  },
  {
    num: '04',
    name: 'AI Consulting',
    tag: 'Advisory',
    bestFor: 'Businesses that need strategic AI guidance without committing to a build',
    desc: 'You have a team, a budget, and a timeline. You know AI matters, but the decisions are multiplying faster than your confidence. Which model should you use? Which vendor can you trust? Is your architecture going to scale? Should you build or buy? These are not questions a one-time session can answer. They require ongoing strategic guidance from someone who has done this before. AI Consulting is that sustained partnership. We evaluate technology, assess vendors, review architecture, and oversee implementation. You get experienced technical leadership without hiring a full-time executive. Custom pricing. Book a call to discuss.',
    items: [
      'Strategic guidance aligned with your business goals, industry, and team size',
      'Technology evaluation with benchmarks on your data, not marketing claims',
      'Vendor assessment covering lock-in risk, data privacy, and scalability',
      'Architecture review and implementation oversight throughout the build',
    ],
    pricing: 'Custom pricing',
    timeline: 'Ongoing',
    href: '/services/consulting',
  },
  {
    num: '05',
    name: 'Discovery Session',
    tag: 'Start Here',
    bestFor: 'Anyone who knows AI matters but does not know where to start',
    desc: 'You know AI is relevant to your business. Your competitors are talking about it. Your clients are asking about it. But when you sit down to figure out what it actually means for your operation, the options are overwhelming and the advice is generic. That is what this $300 session solves. One focused hour. We walk through your actual workflows, identify your three highest-impact AI opportunities, and hand you a written roadmap. If we do not find three opportunities, you do not pay.',
    items: [
      '60-minute working session. No slide decks. No theory. We map your actual operation.',
      'Written roadmap delivered within 48 hours with prioritized opportunities and cost estimates',
      'Money-back guarantee: if we do not find 3+ high-impact opportunities, the session is free.',
    ],
    pricing: '$300',
    timeline: '60 min',
    href: '/services/discovery-session',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Build"
        title="The one thing that saves you a day a week."
        description="Everyone has access to the same AI. We build the one system that saves your team a full day every week. Not a chatbot. Not a strategy deck. A working system that does the work so your people can focus on decisions, relationships, and results. Here is how we do it."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Flame mark */}
          <div className="flex items-center justify-center mb-16">
            <FlameMark size="md" />
          </div>

          {/* Framework intro */}
          <AnimatedSection delay={0}>
            <div className="max-w-3xl mx-auto mb-20 text-center">
              <p className="sl-body-lg text-navy-800 mb-6">
                SanLuis AI Solutions is a Houston-based AI automation company founded by Daniel San Luis. We build working systems for small and mid-size businesses through fixed-price engagements: a $300 Discovery Session, AI Automation from $1,200, AI Agent Systems from $5,000, Custom AI Systems from $5,000, and AI Consulting with custom pricing.
              </p>
              <p className="sl-body-lg text-navy-800 mb-6">
                We do not sell strategy decks. We sell one thing: a working system
                that saves your team a full day every week. That system might be an automation that runs your
                lead intake, an agent that qualifies prospects at 2 a.m., or a custom application built around
                your single biggest operational problem. The shape depends on the problem. The guarantee is
                always the same: you get a day back.
              </p>
              <p className="sl-body-lg text-navy-800">
                Every project follows the same four steps. Discover what matters. Build what works. Ship it
                into your workflow. Maintain it so it keeps delivering. We do not disappear after deployment.
                We stay with you. Proven results include 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and 40% better matches for LoveFlow.
              </p>
            </div>
          </AnimatedSection>

          {/* Service Cards */}
          <AnimatedSection delay={0.05}>
            <div className="space-y-8 mb-20">
              {servicesList.map((s) => (
                <div key={s.num} className="bg-white border border-navy-200 rounded p-8 md:p-10 hover:border-navy-900 transition-all duration-220">
                  <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                    <div className="flex flex-col items-start">
                      <div className="font-display text-3xl text-gold-600 leading-none">{s.num}</div>
                      <span className="mt-3 font-mono text-[10px] tracking-[0.12em] uppercase bg-gold-100 text-gold-700 px-2 py-0.5 rounded">{s.tag}</span>
                    </div>
                    <div>
                      <h2 className="font-display text-2xl text-navy-800 mb-1">{s.name}</h2>
                      <p className="font-sans text-xs text-gold-700/70 mb-3 italic">Best for: {s.bestFor}</p>
                      <p className="sl-body-sm mb-4">{s.desc}</p>
                      <ul className="space-y-2">
                        {s.items.map((item, i) => (
                          <li key={i} className="sl-body-sm flex items-start gap-2">
                            <Diamond className="text-gold-600 mt-1 w-3 h-3" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 md:min-w-[140px]">
                      <span className="inline-block font-sans text-sm font-bold tracking-[0.04em] px-4 py-1.5 bg-gold-500 text-navy-900 rounded-full shadow-sm">{s.pricing}</span>
                      <div className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase">{s.timeline}</div>
                      <Link href={s.href} className="mt-3 font-sans text-sm font-semibold px-5 py-2 border border-navy-800 text-navy-800 rounded hover:bg-navy-800 hover:text-white transition-all duration-220">
                        Learn more &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* How it works: the process frame */}
          <AnimatedSection delay={0.08}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="font-display text-2xl text-navy-800 text-center mb-10">How every project works.</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Discover', desc: 'We start with your operation, not a template. One Discovery Session maps your process, identifies the highest-impact opportunity, and produces a written plan before any work begins.' },
                  { step: '02', title: 'Build', desc: 'Fixed price. Fixed scope. We build the system, test it against your real workflows, and deploy it into production. In weeks, not months.' },
                  { step: '03', title: 'Ship', desc: 'Installed into your workflow. Your team trained. Baseline metrics set against the old process. You own the code and the data from day one.' },
                  { step: '04', title: 'Maintain', desc: 'We do not disappear. Post-launch support, monthly tune-ups, and ongoing optimization keep the system delivering as your business evolves.' },
                ].map((s) => (
                  <div key={s.step} className="text-center">
                    <div className="font-display text-3xl text-gold-500 mb-3">{s.step}</div>
                    <h3 className="font-display text-lg text-navy-800 mb-2">{s.title}</h3>
                    <p className="font-sans text-sm text-fg3 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Not sure which service? */}
          <AnimatedSection delay={0.1}>
            <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-20 text-center">
              <h2 className="font-display text-2xl text-bone-50 mb-3">Not sure which service fits?</h2>
              <p className="font-sans text-base text-bone-300/70 max-w-xl mx-auto mb-6">
                Every business is different. Book a $300 Discovery Session and we will map your specific needs to the right solution. Or tell you if AI is not the answer.
              </p>
              <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-220 rounded">
                Book a Discovery Session.
              </Link>
            </div>
          </AnimatedSection>

          {/* FAQ Section */}
          <AnimatedSection delay={0.15}>
            <div className="max-w-3xl border-t border-navy-200 pt-16">
              <h2 className="font-display text-2xl text-navy-800 mb-8">Common questions about our services.</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">What do you actually build?</h3>
                  <p className="sl-body-sm">
                    Working systems. Not demos, not slide decks, not proof-of-concepts that never ship. An automation
                    that routes your leads, an agent that qualifies prospects overnight, a custom application that
                    solves your single biggest operational problem. You can use it, touch it, and see the results
                    in your daily operations by the end of the first week.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">How long does it take to see results?</h3>
                  <p className="sl-body-sm">
                    Automations ship in 1-2 weeks. Most clients see measurable time savings within the first week
                    of deployment. Agent systems take 3-6 weeks. Custom applications take 4-10 weeks depending on
                    scope. Every project starts with a Discovery Session where we set the timeline before any work begins.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">What if it does not save us enough time?</h3>
                  <p className="sl-body-sm">
                    If the system does not deliver measurable savings within 6 months, we fix it free. We measure
                    hours recovered at 30, 60, and 90 days against your baseline. If the numbers are not there,
                    we adjust the scope at no cost until they are. That is our guarantee.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">Do you work with non-technical teams?</h3>
                  <p className="sl-body-sm">
                    Yes. Most of our clients do not have an internal technical team. We design systems around how
                    your team already works, not the other way around. No new login to learn. No new process to
                    memorize. If the system creates more work instead of less, we fix it. All services are available
                    in English and Spanish.
                  </p>
                </div>
                <div className="pt-4 border-t border-navy-200">
                  <Link href="/faq" className="inline-flex items-center font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors duration-220">
                    See all FAQs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to get a day back every week?</h2>
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
