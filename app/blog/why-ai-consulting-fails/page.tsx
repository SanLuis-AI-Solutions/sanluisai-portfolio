import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Why Most AI Consulting Fails (And How We Avoid It) — SanLuis AI Solutions',
  description: 'Six-month discovery phases. Slide decks with no code. Pilot purgatory. Here is how the traditional AI consulting model wastes your time — and how targeted, time-bounded builds produce real results in weeks.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Most AI Consulting Fails (And How We Avoid It)',
  description: 'Six-month discovery phases. Slide decks with no code. Pilot purgatory. Here is how the traditional AI consulting model wastes your time — and how targeted, time-bounded builds produce real results in weeks.',
  author: {
    '@type': 'Person',
    name: 'Daniel San Luis',
    url: 'https://www.linkedin.com/in/danielsanluis',
  },
  datePublished: '2026-04-28',
  publisher: {
    '@type': 'Organization',
    name: 'SanLuis AI Solutions',
    url: 'https://sanluisai-portfolio.vercel.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/why-ai-consulting-fails',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Insights"
        title="Why Most AI Consulting Fails (And How We Avoid It)"
        description="Six-month discovery phases. Slide decks with no code. Pilot purgatory. Here is how the traditional AI consulting model wastes your time."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            April 28, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg></span>
            5 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">The AI consulting industry has a dirty secret: most firms bill by the month, deliver slide decks, and leave you exactly where you started.</p>

            <h2>The Three Failure Modes</h2>

            <h3>1. The Endless Discovery Phase</h3>
            <p>Six weeks of meetings. Twenty-page PDFs mapping your "current state" and "future state." A recommendation to do a "proof of concept." By month three, you've spent $30,000 and have exactly zero working software.</p>
            <p>The problem isn't the methodology — it's the incentive. When consultants bill by the hour or by the month, there's no reason to ship fast.</p>

            <h3>2. Slide Deck Deliverables</h3>
            <p>You don't need a strategy deck. You need a working system that processes invoices, qualifies leads, or automates reporting. But slide decks are cheaper to produce than software, and they look impressive in board meetings.</p>
            <p>The test is simple: after the engagement ends, can you point to something that's running in production? If the answer is no, the consulting failed.</p>

            <h3>3. The Pilot Trap</h3>
            <p>A limited-scope pilot on non-critical data. It runs for three months. It shows "promising results." But it was scoped so narrowly that extending it to real workflows requires rebuilding from scratch. The pilot was theater.</p>

            <h2>How We Build Differently</h2>
            <p>We start with a single $300 Discovery Session.</p>
            <p>Not a month-long audit. One 60-minute video call where we identify the specific problem, map the current cost, and outline the build. You get a written action plan at the end — not a proposal for more consulting.</p>
            <p>If the problem is real and the build makes economic sense, we quote a fixed price and a specific timeline. Workflow automations ship in 1-2 weeks. AI agent systems in 3-6 weeks. Full applications in 4-10 weeks.</p>
            <p>No six-month discovery — the session replaces it. No slide decks — we ship working software. No pilot trap — every build starts on a real problem with real data.</p>

            <h2>The Economics</h2>
            <p>Workflow automation from $1,200. AI agent systems from $5,000. Custom AI applications from $5,000. If the problem can be solved for less, we'll tell you — because the Discovery Session is designed to filter out bad investments, not generate consulting hours.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              We build what solves the problem. Full stop.
            </blockquote>

            <p>If you're tired of slide decks and want to see what a focused, time-bounded AI build looks like, book a Discovery Session. One hour. A clear answer.</p>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <CTA />
    </>
  )
}
