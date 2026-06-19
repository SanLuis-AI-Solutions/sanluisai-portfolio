import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Custom AI Systems | SanLuis AI Solutions',
  description: "Everyone has access to the same AI. We build the one system that solves your single biggest operational problem and gives you back a day a week. Custom, on your data, with full code ownership.",
  openGraph: {
    title: 'Custom AI Systems | SanLuis AI Solutions',
    description: 'We build the one custom AI system that solves your biggest operational problem and gives you back a day a week.',
    url: 'https://sanluisai-portfolio.vercel.app/services/custom-ai',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const buildAreas = [
  {
    title: 'Custom Web Applications',
    desc: 'We build full-stack applications around your exact workflow, not a template. Authentication, permissions, data models, and integrations are shaped to how your business actually operates. The result is software your team uses instead of fights.',
    when: 'Your off-the-shelf tool requires more workarounds than actual use. Your team spends more time managing the software than doing the work.',
  },
  {
    title: 'AI-Powered Platforms',
    desc: 'We build systems where AI is the core engine, not an add-on. That means matching algorithms, predictive models, classification pipelines, and recommendation engines trained on your data. The system improves with use and makes decisions rules-based code cannot.',
    when: 'Your core product or operations depend on complex decisions that static rules cannot handle. Every incorrect decision costs money or customers.',
  },
  {
    title: 'Data Intelligence Systems',
    desc: 'We build pipelines that ingest, analyze, and surface actionable intelligence from your data. Automated reporting, anomaly detection, and pattern recognition across structured and unstructured sources replace manual preparation. Your team acts on insights instead of building spreadsheets.',
    when: 'You have data you know is valuable but no way to extract insight at scale. Your team spends more time preparing reports than acting on them.',
  },
  {
    title: 'Integration & Migration',
    desc: 'We connect systems that were never designed to talk to each other. Data migration, API bridges, webhook infrastructure, and legacy wrappers extend the life of your existing investments. The workflow runs without someone memorizing a secret sequence of manual steps.',
    when: 'Your critical workflow is held together by manual exports, CSV uploads, and one person who knows the exact order of operations.',
  },
]

const faqItems = [
  {
    q: "What does 'custom' mean exactly?",
    a: "It means we build for your specific problem, not a generalized template. Your data model, your terminology, your workflow, your integration landscape. You receive exactly what solves your problem and nothing you do not need. There are no unused features and no workarounds for assumptions that do not fit.",
  },
  {
    q: "Who owns the code and data?",
    a: "You do. Full source ownership. Your IP stays yours. There are no license fees, no recurring charges, and no vendor lock-in. If you want to take the system elsewhere, modify it, or have another team maintain it, that is your right. We help with the transition at no extra cost.",
  },
  {
    q: "How do you scope something custom without scope creep?",
    a: "We target your single biggest operational problem and solve it completely, end to end, before we touch anything else. One problem at a time. Each phase is fixed-price and fixed-scope, with clear acceptance criteria. If scope expands, it becomes the next phase, not a change order on the current one.",
  },
  {
    q: "How is this different from hiring a development agency?",
    a: "We build with AI, not more people. A traditional agency writes thousands of lines of code over months. We prototype and iterate at AI speed, delivering in weeks instead of quarters. The result is the same quality: production-grade, deployed, and fully functional. You get there faster, for less, with full ownership.",
  },
]

export default function CustomAIPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 01"
        title="Custom AI Systems."
        description="Everyone has access to the same AI. We build the one system that removes your largest operational cost and gives you back a day a week. Custom, on your data, with full code ownership."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem with off-the-shelf.</h2>
            <p className="sl-body-lg mb-4">
              SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size businesses, including Custom AI Systems from $5,000, AI Agent Systems from $5,000, AI Automation from $1,200, and a $300 Discovery Session to identify the right problem first.
            </p>
            <p className="sl-body-lg mb-4">
              Off-the-shelf software is built for someone else's business. You adapt your workflows to fit the tool.
            </p>
            <p className="sl-body-lg mb-4">
              You have one operational cost bigger than any other. We solve that one problem, completely, before we touch anything else. Not a catch-all. Not a platform you grow into. One precise system built to remove the specific process that is costing you the most.
            </p>
            <p className="sl-body-lg">
              <strong className="text-navy-800">We do not sell chatbots. We do not sell strategy decks. We sell working systems.</strong> Your data model. Your terminology. Your workflow. Fixed price. Fixed scope. You own the code, and we deploy it. Then we move to the next problem.
            </p>
          </div>

          {/* Build areas */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What we build.</h2>
          <p className="sl-body-sm mb-8 max-w-2xl text-fg2">Every system is designed from first principles. Here are the patterns we see most often. Your problem may not fit neatly into one, and that is fine. We build whatever moves your business forward.</p>
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
            <h2 className="font-display text-2xl text-bone-50 mb-6">One problem at a time.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Identify', desc: 'We find your single highest-cost operational problem. Not the loudest one. Not the easiest one. The one that actually drains time or money every week.' },
                { step: '02', title: 'Design', desc: 'We scope an architecture blueprint for exactly that problem. Fixed price. Fixed timeline. Clear acceptance criteria. No ambiguity before we build.' },
                { step: '03', title: 'Build & Deploy', desc: 'We build on your data, test against your real workflows, and deploy into production. In weeks, not quarters. You see the result, not a presentation.' },
                { step: '04', title: 'Next', desc: 'You measure the result. When you are ready, we identify the next highest-cost problem and repeat the cycle. Each system compounds the last.' },
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
            <p className="sl-body-sm mb-1">LoveFlow is a Christian faith-based relationship app. The founder had a clear vision but no technical background. We designed the full app from the ground up using Google AI Studio, Stitch, Gemini, and Codex in three days: <strong className="text-navy-800">AI-assisted app design, full design system completed.</strong></p>
            <p className="sl-body-sm mb-3 text-fg2">AI tool subscriptions</p>
            <Link href="/case-studies/loveflow" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the case study &rarr;</Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Explore other services */}
      <AnimatedSection delay={0.1}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h3 className="font-display text-xl text-navy-800 mb-4 text-center">Explore other services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
          <Link href="/services/automation" className="block bg-white border border-navy-200 rounded p-4 text-center hover:border-navy-900 transition-all duration-220">
            <div className="font-display text-navy-800">AI Automation</div>
            <div className="font-mono text-[10px] text-fg4 tracking-[0.08em] uppercase mt-1">From $1,200</div>
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
