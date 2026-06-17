import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI Discovery Session | SanLuis AI Solutions',
  description: "A 60-minute working session that turns 'we should do something with AI' into a prioritized roadmap with cost estimates. $300. Walk away with clarity.",
  openGraph: {
    title: 'AI Discovery Session | SanLuis AI Solutions',
    description: "A 60-minute session that turns AI uncertainty into a prioritized roadmap. $300. Walk away with clarity.",
    url: 'https://sanluisai-portfolio.vercel.app/services/consulting',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const sessionSteps = [
  {
    phase: 'Prep (Before the call)',
    paragraphs: [
      "Before we meet, you share a short operations overview and any workflow documentation you already have. We review your tools, your inputs and outputs, and where time is being lost. By the time the call starts, we already understand the shape of your business and the questions that matter. No generic templates. No wasted minutes.",
    ],
  },
  {
    phase: 'The Session (60 min)',
    paragraphs: [
      "The session is a working conversation. We walk through the tasks your team repeats each week, the handoffs that slow you down, and the data that lives in spreadsheets or email threads. We identify at least three concrete AI opportunities ranked by impact and effort, and we tell you directly when something does not need AI at all.",
    ],
  },
  {
    phase: 'After (Delivered in 48 hours)',
    paragraphs: [
      "Within 48 hours, you receive a written roadmap with prioritized opportunities, realistic cost estimates, and a dependency map for each initiative. It is specific enough to hand to any builder and clear enough to act on internally. If you choose to move forward with us, the roadmap becomes the scope of work. If not, it is still yours.",
    ],
  },
]

const deliverables = [
  {
    title: 'Clarity',
    desc: 'You stop asking what AI can do for your business and start knowing exactly which system to build first. The session replaces noise with a single, actionable focus.',
  },
  {
    title: '3+ Opportunities',
    desc: 'We find at least three specific places where AI removes real work from your operations. Each opportunity is ranked by business impact, technical feasibility, and how quickly it can ship.',
  },
  {
    title: 'Cost Estimates',
    desc: 'Every recommended initiative includes a realistic price range based on similar deployments. You know the investment before you commit to anything beyond the session.',
  },
  {
    title: 'Written Roadmap',
    desc: 'You get a prioritized, written roadmap within 48 hours. It is detailed enough to execute with us, with another team, or on your own.',
  },
]

const faqItems = [
  {
    q: "Who is this session for?",
    a: "This is for business owners, operations leads, and decision-makers who know AI matters but do not have a clear plan. You run real workflows, serve real customers, and want a concrete path forward. If you are looking for a generic strategy deck or a chatbot to impress investors, this is not the right fit. If you want a working system that saves your team time, start here.",
  },
  {
    q: "What if you don't find 3+ opportunities?",
    a: "Then the session is free. The guarantee is simple. If we cannot identify at least three high-impact AI opportunities in your operations, you do not pay. We have never had to refund a session, because most businesses are sitting on more untapped leverage than they realize.",
  },
  {
    q: "Do I need technical knowledge to participate?",
    a: "No technical background is required. We ask about your business operations, not your codebase. You describe the work that slows your team down, and we translate that into technical options in plain language. You leave with understanding, not jargon.",
  },
  {
    q: "What happens after the session?",
    a: "You receive a written roadmap within 48 hours. If you decide to move forward, the roadmap becomes the scope of work for a custom build. If you decide not to proceed, you still have a clear plan you can execute with anyone. The value is in the clarity, not the provider.",
  },
]

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service 04"
        title="Discovery Session."
        description="This is a 60-minute working session, not a pitch. We map your operations, identify where AI removes real work, and leave you with a written plan you can act on. $300 buys clarity, not more questions."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Problem section */}
          <div className="max-w-3xl mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-4">The problem with "we should do something with AI."</h2>
            <p className="sl-body-lg mb-4">
              SanLuis AI Solutions is a Houston-based AI automation company founded by Daniel San Luis. Our $300 Discovery Session is the starting point for every engagement, including Custom AI Systems from $5,000, AI Agent Systems from $5,000, and AI Automation from $1,200.
            </p>
            <p className="sl-body-lg mb-4">
              Everyone has access to the same AI. The advantage is not in owning the tool.
            </p>
            <p className="sl-body-lg mb-4">
              The real problem is the phrase itself: "we should do something with AI," with no clear answer to what, where, or how much. That uncertainty costs more than any software license. It delays decisions, burns budget on misplaced experiments, and leaves teams doing work that should have been automated months ago.
            </p>
            <p className="sl-body-lg mb-4">
              This session is for owners and operators with real workflows, real customers, and real constraints. You do not need a technical background. You need a clear plan that fits your budget and your team, and a partner who will tell you the truth about what is worth building.
            </p>
            <p className="sl-body-lg">
              It is not for companies looking for a chatbot to bolt onto their website or a strategy deck to show investors. We do not sell chatbots. We do not sell strategy decks. We sell working systems that remove work from your week.
            </p>
          </div>

          {/* Session breakdown */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">What happens in the session.</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {sessionSteps.map((s) => (
              <div key={s.phase} className="bg-white border border-navy-200 rounded p-6 hover:border-navy-900 transition-all duration-220">
                <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-gold-600 mb-3">{s.phase}</p>
                <div className="space-y-3">
                  {s.paragraphs.map((paragraph, idx) => (
                    <p key={idx} className="sl-body-sm">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* What you get */}
          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 md:p-10 mb-16">
            <h2 className="font-display text-2xl text-bone-50 mb-6">What you walk away with.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((s) => (
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
            <p className="sl-body-sm mb-1">Garza International started here. Their manual quoting process took 6+ hours per bid and they were losing to faster competitors. We built a custom AI quoting engine that delivered <strong className="text-navy-800">60% faster turnaround, 85% fewer errors.</strong></p>
            <p className="sl-body-sm mb-3 text-fg2">Investment: $5,000 to $8,000. Net Year 1 gain: ~$66,880.</p>
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
            <div className="font-display text-navy-800">AI Automation</div>
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
