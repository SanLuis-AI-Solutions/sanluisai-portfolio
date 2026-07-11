import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'
import KeyTakeaway from '@/components/KeyTakeaway'

export const metadata: Metadata = {
  title: 'AI Consulting | SanLuis AI Solutions',
  description: "Ongoing strategic AI advisory for businesses that need expert guidance on technology evaluation, vendor assessment, architecture review, and implementation oversight.",
  openGraph: {
    title: 'AI Consulting | SanLuis AI Solutions',
    description: "Strategic AI advisory for businesses that need expert guidance on technology evaluation, vendor assessment, architecture review, and implementation oversight.",
    url: 'https://sanluisai-portfolio.vercel.app/services/consulting',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const consultingAreas = [
  {
    title: 'Strategic Guidance',
    desc: 'We help you build a coherent AI strategy aligned with your business goals. Not a generic roadmap. A specific plan that accounts for your industry, your team size, your data maturity, and your budget. We evaluate where AI creates leverage and where it creates distraction, and we tell you the difference.',
  },
  {
    title: 'Technology Evaluation',
    desc: 'The AI vendor landscape changes weekly. We evaluate models, platforms, and tools against your specific use cases. We run benchmarks on your data, not marketing claims. You get a clear recommendation on what to use, what to avoid, and what to wait for.',
  },
  {
    title: 'Vendor Assessment',
    desc: 'Before you sign a contract with an AI vendor, we review the terms, the architecture, the integration requirements, and the hidden costs. We identify lock-in risks, data privacy concerns, and scalability limitations. You negotiate from knowledge, not hope.',
  },
  {
    title: 'Architecture Review',
    desc: 'If you have an existing AI system or are planning one, we review the architecture for scalability, maintainability, security, and cost efficiency. We identify bottlenecks, single points of failure, and design decisions that will cost you later. You get a prioritized list of improvements.',
  },
  {
    title: 'Implementation Oversight',
    desc: 'If your team is building AI systems internally or with another vendor, we provide ongoing oversight. We review progress against milestones, validate technical decisions, and ensure the system stays aligned with business outcomes. You get the confidence that comes from experienced technical leadership.',
  },
]

const faqItems = [
  {
    q: "How is AI Consulting different from the Discovery Session?",
    a: "The Discovery Session is a one-time, 60-minute working session that produces a written roadmap. AI Consulting is an ongoing advisory relationship. You engage us for a defined period or retainer to provide strategic guidance, evaluate technology, review architecture, and oversee implementation. The Discovery Session is the starting point. Consulting is the sustained partnership.",
  },
  {
    q: "Who needs AI Consulting?",
    a: "Businesses that are actively building or investing in AI and need expert guidance to make the right decisions. You might be evaluating vendors, planning an architecture, or overseeing an implementation. You have a team and a budget, and you need someone who has done this before to help you avoid costly mistakes.",
  },
  {
    q: "Do I need a Discovery Session first?",
    a: "Not necessarily. If you already have a clear understanding of your AI goals and need strategic guidance to execute, you can start with a consulting engagement directly. If you are still exploring what is possible, the Discovery Session is the better starting point. We can help you decide which path fits during an initial conversation.",
  },
  {
    q: "How is consulting priced?",
    a: "Consulting engagements are custom priced based on scope, duration, and level of involvement. We offer hourly advisory, monthly retainers, and project-based consulting. We discuss your needs and provide a fixed price before any work begins. No surprises, no hidden fees.",
  },
  {
    q: "Do you work with teams that already have technical staff?",
    a: "Yes. Many of our consulting clients have internal engineering teams. We act as a strategic layer above the implementation, providing guidance, validation, and oversight. Your team builds. We help them build the right thing, the right way.",
  },
]

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 05"
        title="AI Consulting."
        description="Ongoing strategic advisory for businesses that are building with AI. Technology evaluation, vendor assessment, architecture review, and implementation oversight. Custom pricing. Book a call to discuss."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <KeyTakeaway
          summary="AI Consulting provides expert guidance on technology evaluation, vendor assessment, architecture review, and implementation oversight. Hourly and project-based pricing. No long-term commitment."
          startingAt="From $2,500"
        />
      </div>

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem with going it alone.</h2>
            <p className="sl-body-lg mb-4">
              SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size businesses. We provide AI Consulting alongside Custom AI Systems from $5,000, AI Agent Systems from $5,000, AI Automation from $1,200, and a $300 Discovery Session to identify the right starting point.
            </p>
            <p className="sl-body-lg mb-4">
              Everyone has access to the same AI. The difference is knowing what to build, what to buy, and what to skip.
            </p>
            <p className="sl-body-lg mb-4">
              Building with AI is not just about writing code. It is about choosing the right model, the right architecture, the right vendor, and the right timeline. One wrong decision at the start can multiply costs, delay delivery, and lock you into a system that does not solve the real problem. Most teams make these decisions in isolation, without the benefit of experience.
            </p>
            <p className="sl-body-lg mb-4">
              AI Consulting fills that gap. We provide the strategic layer that sits above the implementation. We evaluate your options, review your architecture, assess your vendors, and oversee your build. You get the confidence of experienced technical leadership without hiring a full-time executive.
            </p>
            <p className="sl-body-lg">
              This is for businesses that are serious about AI. You have a team, a budget, and a timeline. You need someone who has done this before to help you make the right calls. We do not sell chatbots. We do not sell strategy decks. We sell the judgment that turns AI investment into business results.
            </p>
          </div>

          {/* What consulting covers */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What AI Consulting covers.</h2>
          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {consultingAreas.map((area) => (
              <div key={area.title} className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220">
                <h3 className="font-display text-xl text-navy-800 mb-2 flex items-center gap-2">
                  <Diamond className="text-gold-600" />
                  {area.title}
                </h3>
                <p className="sl-body-sm">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl text-bone-50 mb-6">How consulting works.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Discuss', desc: 'We start with a conversation about your goals, your current state, and the decisions you need help with. We scope the engagement, set expectations, and agree on a fixed price before any work begins.' },
                { step: '02', title: 'Assess', desc: 'We review your technology stack, vendor options, architecture plans, or implementation progress. We identify risks, gaps, and opportunities. You get a clear picture of where you stand and what to do next.' },
                { step: '03', title: 'Advise', desc: 'We deliver actionable recommendations in plain language. Technology choices, vendor evaluations, architecture improvements, and implementation priorities. You decide what to act on and when.' },
                { step: '04', title: 'Support', desc: 'We stay engaged through the execution phase. Regular check-ins, milestone reviews, and on-demand guidance ensure your team stays on track and your investment delivers.' },
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
            <h2 className="font-display text-2xl text-navy-800 mb-6">Common questions about AI Consulting.</h2>
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
            <p className="sl-body-sm mb-1"><strong className="text-navy-800">Garza International:</strong> We provided architecture review and implementation oversight for their custom AI quoting engine. The result was a system that delivered <strong className="text-navy-800">60% faster turnaround, 85% fewer errors.</strong></p>
            <p className="sl-body-sm mb-3 text-fg2">Fixed price, scoped during the Discovery Session.</p>
            <Link href="/case-studies/garza-international" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the full case study &rarr;</Link>
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
          <Link href="/services/automation" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Automation</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $1,200</div>
          </Link>
          <Link href="/services/agents" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Agent Systems</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $5,000</div>
          </Link>
          <Link href="/services/discovery-session" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">Discovery Session</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">$300</div>
          </Link>
        </div>
      </section>
      </AnimatedSection>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />
        <div className="absolute top-0 left-8 right-8 h-px bg-gold-600/10" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to get expert AI guidance?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Book a call to discuss your AI strategy, technology evaluation, or implementation oversight needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">
              Book a call.
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
