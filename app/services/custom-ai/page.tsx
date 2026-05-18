import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'Custom AI Systems — SanLuis AI Solutions',
  description: "Stop working around software built for someone else. We solve your single biggest operational bottleneck — custom, on your data, and you own the code.",
}

const buildAreas = [
  {
    title: 'Custom Web Applications',
    desc: 'Full-stack applications built around your specific workflow. Authentication, permissions, data models, integrations — everything tailored to how your business actually runs.',
    when: 'Your off-the-shelf software requires more workarounds than actual use. Your team spends more time managing the tool than doing the work.',
  },
  {
    title: 'AI-Powered Platforms',
    desc: 'Systems where AI is the core engine, not an add-on. Matching algorithms, predictive models, classification pipelines, recommendation engines that learn and improve with use.',
    when: 'Your core product or operations depend on complex decisions that rules-based systems cannot handle. Every incorrect decision costs money or customers.',
  },
  {
    title: 'Data Intelligence Systems',
    desc: 'Pipelines that ingest, analyze, and surface actionable intelligence from your data. Automated reporting, anomaly detection, pattern recognition across structured and unstructured sources.',
    when: 'You have data you know is valuable but no way to extract insights at scale. Your team spends more time preparing reports than acting on them.',
  },
  {
    title: 'Integration & Migration',
    desc: 'Connecting systems that were never designed to talk to each other. Data migration, API bridges, webhook infrastructure, legacy system wrappers that extend the life of existing investments.',
    when: 'Your critical workflow is held together by manual exports, CSV uploads, and someone who knows the secret sequence of steps.',
  },
]

const faqItems = [
  {
    q: "What does 'custom' mean exactly?",
    a: "It means we build for your specific problem, not a generalized template. Your data model, your terminology, your workflow, your integration landscape. No features you do not need. No workarounds for assumptions that do not fit. You get exactly what solves your bottleneck — nothing more, nothing less.",
  },
  {
    q: "Who owns the code and data?",
    a: "You do. Full source ownership. Your IP stays yours. No license fees, no recurring charges, no vendor lock-in. If you want to take the system elsewhere, modify it, or have another team maintain it — that is your right. We help with the transition at no extra cost.",
  },
  {
    q: "How do you scope something custom without scope creep?",
    a: "We target your single biggest operational problem and solve it completely — end to end — before we touch anything else. One bottleneck at a time. Each phase is fixed-price, fixed-scope, with clear acceptance criteria. If scope expands, it becomes the next phase, not a change order on the current one.",
  },
  {
    q: "How is this different from hiring a development agency?",
    a: "We build with AI, not more people. A traditional agency writes thousands of lines of code over months. We prototype and iterate at AI speed — weeks instead of quarters. The result is the same quality: production-grade, deployed, and fully functional. But you get there faster, for less, with full ownership.",
  },
]

export default function CustomAIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 01"
        title="Custom AI Systems."
        description="You have one operational bottleneck costing you more than you realize. We solve it completely — in weeks. You own the code. No license fees. No vendor lock-in."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem with off-the-shelf.</h2>
            <p className="sl-body-lg mb-4">
              Off-the-shelf software is built for someone else's business. You adapt your workflows to fit the tool. You pay for features you never use. You work around limitations that were designed for a different industry, a different scale, a different problem entirely.
            </p>
            <p className="sl-body-lg mb-4">
              <strong className="text-navy-800">We build what you actually need.</strong> One system, built from scratch for your exact problem. Your data model. Your terminology. Your workflow. No bloat. No workarounds. No subscription stack anxiety.
            </p>
            <p className="sl-body-lg">
              We target your single biggest operational bottleneck and solve it end to end — then we move to the next. One at a time. No scope creep. No &ldquo;let us put everything in an MVP.&rdquo; Each phase is fixed-price, fixed-scope, and you own the result.
            </p>
          </div>

          {/* Build areas */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What we build.</h2>
          <p className="sl-body-sm mb-8 max-w-2xl text-fg2">Every system is designed from first principles. Here are the patterns we see most often — your problem may not fit neatly into one, and that is fine. We build whatever moves your business forward.</p>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {buildAreas.map((area) => (
              <div key={area.title} className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220">
                <h3 className="font-display text-xl text-navy-800 mb-2">{area.title}</h3>
                <p className="sl-body-sm mb-4">{area.desc}</p>
                <div className="bg-bone-100 border border-navy-100 rounded p-4">
                  <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 mb-1">When to choose this</p>
                  <p className="font-sans text-xs text-fg3 leading-relaxed">{area.when}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How we scope */}
          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl text-bone-50 mb-6">One bottleneck at a time.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Identify', desc: 'We find your single highest-cost operational bottleneck. Not the most visible one — the one that actually hurts.' },
                { step: '02', title: 'Design', desc: 'Architecture blueprint scoped to exactly that problem. Fixed price. Fixed timeline. No ambiguity.' },
                { step: '03', title: 'Build & Deploy', desc: 'Built on your data, tested against your real workflows, deployed into production. In weeks, not months.' },
                { step: '04', title: 'Next', desc: 'You see results immediately. When you are ready, we identify the next bottleneck and repeat the cycle.' },
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
            <h2 className="font-display text-2xl text-navy-800 mb-6">Common questions about custom systems.</h2>
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
            <p className="sl-body-sm mb-1">LoveFlow's matching algorithm was built on surface-level preferences — users were bouncing because the matches didn't work. We built a custom behavioral matching engine from scratch: <strong className="text-navy-800">40% better match quality, 2x retention improvement in 6 weeks.</strong></p>
            <p className="sl-body-sm mb-3 text-fg2">Investment: $5,000–10,000. Annual retention value: ~$81,000 in saved churn.</p>
            <Link href="/case-studies/loveflow" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the full case study &rarr;</Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Explore other services */}
      <AnimatedSection delay={0.1}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="font-display text-xl text-navy-800 mb-4 text-center">Explore other services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
          <Link href="/services/automation" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Workflow Automation</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $1,200</div>
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
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build something that actually works?</h2>
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
