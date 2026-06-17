import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI Consulting. SanLuis AI Solutions',
  description: "You know AI matters. You just don't know where it actually applies to YOUR business. That's the problem this $300 session solves. Walk away with clarity. Not more questions.",
}

const sessionSteps = [
  {
    phase: 'Prep (Before the call)',
    items: [
      'You share your operations overview and any existing workflow documentation',
      'We review your tech stack, pain points, and priority areas',
      'We prepare a structured agenda tailored to your business',
    ],
  },
  {
    phase: 'The Session (60 min)',
    items: [
      'Walk through your actual workflows. The processes, the kludges, the spreadsheets held together by hope',
      'Identify 3+ specific AI opportunities ranked by impact and effort',
      'Discuss realistic timelines, costs, and expected outcomes for each',
      'We tell you flat out if something does not make sense for AI',
    ],
  },
  {
    phase: 'After (Delivered in 48 hours)',
    items: [
      'Written roadmap with prioritized opportunities and cost estimates',
      'Risk assessment and dependency map for each initiative',
      'Clear recommendation on whether to proceed, and if so, which service fits',
    ],
  },
]

const faqItems = [
  {
    q: "Who is this session for?",
    a: "Anyone who knows AI matters for their business but does not know where to start. Business owners, operations leads, and decision-makers who want a concrete plan. Not theory. If you already know exactly what you need built, skip the session and go straight to a service page. If you are unsure, this is where you should begin.",
  },
  {
    q: "What if you don't find 3+ opportunities?",
    a: "Then you do not pay. The money-back guarantee is not a gimmick. If we cannot identify at least three high-impact AI opportunities in your operations, the session is free. It has never happened, but the guarantee exists so you know we are not going to waste your time.",
  },
  {
    q: "Do I need technical knowledge to participate?",
    a: "None. We ask about your business operations, not your tech stack. We translate what you describe into technical solutions and explain them in plain language. You leave with understanding, not jargon.",
  },
  {
    q: "What happens after the session?",
    a: "You get a written roadmap within 48 hours. If you decide to move forward, the roadmap becomes the scope of work. We know exactly what to build, for how much, and in what timeframe. If you decide not to proceed, you have a clear action plan you can execute with anyone. Or no one.",
  },
]

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 04"
        title="AI Consulting."
        description="You know AI matters. You just don't know where it actually applies to YOUR business. That's the problem this $300 session solves. Walk away with clarity. Not more questions."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem with "we should do something with AI."</h2>
            <p className="sl-body-lg mb-4">
              You know AI matters. Your competitors are talking about it. Your clients are asking about it. But when you sit down to figure out what it actually means for your business, the options are overwhelming and the advice is generic. Vendor demos. Industry hype. None of it tells you what <em>your</em> business should do.
            </p>
            <p className="sl-body-lg mb-4">
              <strong className="text-navy-800">That is the problem this $300 session solves.</strong> One focused hour. We walk through your actual operations. The workflows, the processes, the spreadsheets held together by hope. When the hour is up, you know exactly where AI creates leverage for your business and where it is a waste of money.
            </p>
            <p className="sl-body-lg">
              <strong className="text-navy-800">Money-back guarantee:</strong> If we do not find 3+ high-impact opportunities for AI in your business, you do not pay. Not a penny. That is how confident we are that every business has untapped leverage.
            </p>
          </div>

          {/* Session breakdown */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What happens in the session.</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {sessionSteps.map((s) => (
              <div key={s.phase} className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220">
                <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-gold-600 mb-3">{s.phase}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 sl-body-sm">
                      <Diamond className="text-gold-500 mt-1 w-3 h-3 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl text-bone-50 mb-6">What you walk away with.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Clarity', desc: 'No more "we should do something with AI." You leave with a prioritized action plan aligned to your budget, your team, and your actual business goals.' },
                { title: '3+ Opportunities', desc: 'At least three specific AI applications ranked by impact and feasibility. Each one tied to a measurable outcome in your business.' },
                { title: 'Cost Estimates', desc: 'Realistic pricing for each recommended initiative. No hidden fees, no "it depends." Actual numbers based on similar deployments.' },
                { title: 'Written Roadmap', desc: 'Delivered within 48 hours. You can execute it with us, with another team, or on your own. The value is in the plan, not the provider.' },
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
            <h2 className="font-display text-2xl text-navy-800 mb-6">Common questions about the Discovery Session.</h2>
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
            <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Real Example</p>
            <p className="sl-body-sm mb-1">Garza International started with a Discovery Session. We identified their manual quoting process as the highest-impact opportunity. 6+ hours per bid, losing to faster competitors. Three weeks later, they had a custom AI quoting engine delivering <strong className="text-navy-800">60% faster turnaround, 85% fewer errors.</strong></p>
            <p className="sl-body-sm mb-3 text-fg2">Investment: $5,000–8,000. Net Year 1 gain: ~$66,880.</p>
            <Link href="/case-studies/garza-international" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the full case study &rarr;</Link>
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
          <Link href="/services/agents" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Agent Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
          </Link>
        </div>
      </section>
      </AnimatedSection>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to get started?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Book a $300 Discovery Session. 60 minutes. Clear roadmap.</p>
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
