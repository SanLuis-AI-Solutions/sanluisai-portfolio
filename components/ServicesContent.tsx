'use client'

import { Kino, Scene } from 'react-kino'
import Link from 'next/link'
import StaggeredReveal from '@/components/StaggeredReveal'
import FlameMark from '@/components/FlameMark'
import Diamond from '@/components/Diamond'
import AnimatedSection from '@/components/AnimatedSection'

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
    outcome: 'One operational bottleneck, eliminated. Your team works on what matters.',
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
    outcome: 'A full day back every week. Your team stops doing work a machine can finish in minutes.',
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
    outcome: '24/7 coverage without adding headcount. Your team wakes up to completed work.',
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
    outcome: 'Technical leadership without a full-time hire. Confident decisions, faster execution.',
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
    outcome: 'A written roadmap. Three clear opportunities. You know exactly what to build and in what order.',
  },
]

export default function ServicesContent() {
  return (
    <>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center mb-16">
            <FlameMark size="md" />
          </div>

          <AnimatedSection delay={0}>
            <div className="max-w-3xl mx-auto mb-20 text-center">
              <p className="sl-body-lg text-navy-800 mb-6">
                We work with small and mid-size businesses in Houston. Every engagement starts with a $300 Discovery Session. From there, we build what you need: AI Automation from $1,200, AI Agent Systems from $5,000, Custom AI Systems from $5,000, or AI Consulting with custom pricing.
              </p>
              <p className="sl-body-lg text-navy-800 mb-6">
                We do not sell strategy decks. We build one tool that saves your team a full day every week. It might be an automation that handles your lead intake, an agent that qualifies prospects overnight, or a custom tool built around your biggest time drain. The shape depends on the problem. The guarantee is always the same: you get a day back.
              </p>
              <p className="sl-body-lg text-navy-800">
                Every project follows the same four steps. Discover what matters. Build what works. Get it running. Keep it working. We do not disappear after it goes live. We stay with you. Proven results include 60% faster quoting, 3x more leads, and AI-assisted app design.
              </p>
            </div>
          </AnimatedSection>

          {/* Section divider */}
          <div className="h-px bg-gold-600/20 mb-20" />

          {/* Desktop: scroll-driven story panels */}
          <AnimatedSection delay={0}>
          <div className="hidden md:block">
            <Kino>
              {servicesList.map((s) => (
                <Scene key={s.num} duration="200vh">
                  {() => (
                    <div className="min-h-screen flex items-center justify-center px-4">
                      <div className="max-w-4xl w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
                        <div>
                          <div className="flex items-center gap-3 mb-5">
                            <span className="font-display text-4xl text-gold-600">{s.num}</span>
                            <span className="font-mono text-[10px] tracking-[0.12em] uppercase bg-gold-100 text-gold-700 px-2 py-0.5 rounded">{s.tag}</span>
                          </div>
                          <h2 className="font-display text-3xl md:text-4xl text-navy-800 tracking-[-0.02em] mb-4">{s.name}</h2>
                          <p className="font-sans text-xs text-gold-700/70 mb-4 italic">Best for: {s.bestFor}</p>
                          <p className="sl-body-sm mb-5">{s.desc}</p>
                          <ul className="space-y-2 mb-6">
                            {s.items.map((item, idx) => (
                              <li key={idx} className="sl-body-sm flex items-start gap-2">
                                <Diamond className="text-gold-600 mt-1 w-3 h-3" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex items-center gap-4">
                            <span className="font-sans text-sm font-bold tracking-[0.04em] px-4 py-1.5 bg-gold-500 text-navy-900 rounded shadow-sm">{s.pricing}</span>
                            <span className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase">{s.timeline}</span>
                          </div>
                          <Link href={s.href} className="mt-6 inline-flex font-sans text-sm font-semibold px-5 py-2 border border-navy-800 text-navy-800 rounded hover:bg-navy-800 hover:text-white hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-220">
                            Learn more &rarr;
                          </Link>
                        </div>
                        <div className="bg-navy-900 rounded p-8 md:p-10 text-center relative overflow-hidden">
                          {/* Subtle gold ambient glow */}
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(217,164,52,0.08),transparent_60%)] pointer-events-none" />
                          <p className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-gold-500 mb-4 relative">The Outcome</p>
                          <p className="font-display text-xl md:text-2xl text-bone-50 leading-relaxed relative">{s.outcome}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </Scene>
              ))}
            </Kino>
          </div>

          {/* Mobile: static bento grid */}
          <div className="md:hidden">
            <StaggeredReveal className="grid grid-cols-1 gap-5 mb-20" stagger={0.07}>
              {servicesList.map((s, index) => {
                const featured = index === 0
                return (
                  <div key={s.num} className="group relative h-full bg-white border border-navy-200 rounded p-7 hover:-translate-y-1 hover:border-gold-600/70 hover:shadow-[0_18px_50px_-28px_rgba(26,49,96,0.55)] transition-all duration-300">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="space-y-5">
                      <div>
                        <div className="flex items-center gap-3 mb-5">
                          <div className="font-display text-3xl text-gold-600 leading-none">{s.num}</div>
                          <span className="font-mono text-[10px] tracking-[0.12em] uppercase bg-gold-100 text-gold-700 px-2 py-0.5 rounded">{s.tag}</span>
                        </div>
                        <h2 className="font-display text-2xl text-navy-800 mb-2">{s.name}</h2>
                        <p className="font-sans text-xs text-gold-700/70 mb-4 italic">Best for: {s.bestFor}</p>
                        <p className="sl-body-sm mb-5">{s.desc}</p>
                        <ul className="space-y-2">
                          {s.items.slice(0, featured ? s.items.length : 3).map((item, idx) => (
                            <li key={idx} className="sl-body-sm flex items-start gap-2">
                              <Diamond className="text-gold-600 mt-1 w-3 h-3" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-col items-start gap-2">
                        <span className="inline-block font-sans text-sm font-bold tracking-[0.04em] px-4 py-1.5 bg-gold-500 text-navy-900 rounded shadow-sm">{s.pricing}</span>
                        <div className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase">{s.timeline}</div>
                        <Link href={s.href} className="mt-3 font-sans text-sm font-semibold px-5 py-2 border border-navy-800 text-navy-800 rounded hover:bg-navy-800 hover:text-white hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-220">
                          Learn more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </StaggeredReveal>
          </div>
          </AnimatedSection>

          {/* Section divider */}
          <div className="h-px bg-gold-600/20 mb-20" />

          <AnimatedSection delay={0.08}>
            <div className="max-w-4xl mx-auto mb-20">
              <h2 className="font-display text-2xl text-navy-800 text-center mb-10">How every project works.</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { step: '01', title: 'Discover', desc: 'We start with your operation, not a template. One Discovery Session maps your work, finds the highest-impact opportunity, and produces a written plan before any build begins.' },
                  { step: '02', title: 'Build', desc: 'Fixed price. Fixed scope. We build the tool, test it against your real work, and get it running. In weeks, not months.' },
                  { step: '03', title: 'Ship', desc: 'Installed into your workflow. Your team trained. Baseline set against the old way. You own everything from day one.' },
                  { step: '04', title: 'Maintain', desc: 'We do not disappear. Post-launch support, monthly tune-ups, and ongoing improvements keep the tool delivering as your business grows.' },
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

          {/* Dashboard mockup — shows what you get */}
          <AnimatedSection delay={0.1}>
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <span className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-gold-600 mb-6 flex items-center justify-center gap-4">
                See It In Action <span className="h-px w-8 bg-gold-600/40" />
              </span>
              <div className="rounded-lg overflow-hidden shadow-2 border border-navy-200/60">
                <img src="/assets/dashboard-mockup.svg" alt="SanLuis AI dashboard showing real-time metrics, activity feed, and system status" className="w-full h-auto" />
              </div>
              <p className="font-sans text-xs text-fg3 mt-4">What you see when your system is live. Real-time dashboard, activity feed, savings tracking.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-20 text-center relative overflow-hidden">
              {/* Subtle gold ambient glow */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(217,164,52,0.08),transparent_60%)] pointer-events-none" />
              <h2 className="font-display text-2xl text-bone-50 mb-3">Not sure which service fits?</h2>
              <p className="font-sans text-base text-bone-300/70 max-w-xl mx-auto mb-6">
                Every business is different. Book a $300 Discovery Session and we will map your specific needs to the right solution. Or tell you if AI is not the answer. Money-back if we do not find 3 ways to save you time.
              </p>
              <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-220 rounded">
                Book a Discovery Session.
              </Link>
            </div>
          </AnimatedSection>

          {/* Section divider */}
          <div className="h-px bg-gold-600/20 mb-20" />

          <AnimatedSection delay={0.15}>
            <div className="max-w-3xl border-t border-navy-200 pt-16">
              <h2 className="font-display text-2xl text-navy-800 mb-8">Common questions about our services.</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">What do you actually build?</h3>
                  <p className="sl-body-sm">Working tools. Not demos, not slide decks, not proof-of-concepts that never ship. An automation that routes your leads, an agent that qualifies prospects overnight, or a custom tool that solves your single biggest time drain. You can use it, touch it, and see the results in your daily operations by the end of the first week.</p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">How long does it take to see results?</h3>
                  <p className="sl-body-sm">Automations go live in 1-2 weeks. Most clients see measurable time savings within the first week. Agent systems take 3-6 weeks. Custom tools take 4-10 weeks depending on scope. Every project starts with a Discovery Session where we set the timeline before any work begins.</p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">What if it does not save us enough time?</h3>
                  <p className="sl-body-sm">If the tool does not deliver measurable savings within 6 months, we fix it free. We measure hours recovered at 30, 60, and 90 days against your baseline. If the numbers are not there, we adjust the scope at no cost until they are. That is our guarantee.</p>
                </div>
                <div>
                  <h3 className="font-display text-lg text-navy-800 mb-2">Do you work with non-technical teams?</h3>
                  <p className="sl-body-sm">Yes. Most of our clients do not have a technical team. We design tools around how your team already works, not the other way around. No new login to learn. No new steps to memorize. If the tool creates more work instead of less, we fix it. All services are available in English and Spanish.</p>
                </div>
                <div className="pt-4 border-t border-navy-200">
                  <Link href="/faq" className="inline-flex items-center font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors duration-220">See all FAQs &rarr;</Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Section divider */}
      <div className="h-px bg-gold-600/20" />

      <AnimatedSection delay={0}>
        <section className="bg-navy-900 py-20 relative overflow-hidden">
          {/* Subtle gold ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_100%,rgba(217,164,52,0.08),transparent_60%)] pointer-events-none" />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to get a day back every week?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Start with a $300 Discovery Session. 60 minutes. Clear roadmap. Money-back if we do not find 3 ways to save you time.</p>
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
      </AnimatedSection>
    </>
  )
}
