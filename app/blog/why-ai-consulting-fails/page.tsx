import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Why Most AI Consulting Fails (And How We Avoid It). SanLuis AI Solutions',
  description: 'Six-month discovery phases. Slide decks with no code. Pilot purgatory. Here is how the traditional AI consulting model wastes your time. Targeted, time-bounded builds produce real results in weeks.',
  openGraph: {
    title: 'Why Most AI Consulting Fails (And How We Avoid It)',
    description: 'Six-month discovery phases, slide decks with no code, pilot purgatory. Here is how the traditional AI consulting model wastes your time.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/why-ai-consulting-fails',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-04-28',
    authors: ['Daniel San Luis'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why Most AI Consulting Fails (And How We Avoid It)',
  description: 'Six-month discovery phases. Slide decks with no code. Pilot purgatory. Here is how the traditional AI consulting model wastes your time. Targeted, time-bounded builds produce real results in weeks.',
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
            <div className="bg-bone-100 border border-navy-200 rounded p-5 mb-8">
              <p className="font-sans text-sm text-navy-800 leading-relaxed m-0">
                <strong>TL;DR:</strong> Traditional AI consulting fails because it rewards long discovery phases, slide decks, and narrow pilots instead of shipped software. We replace that with a $300 Discovery Session, fixed-price builds, and working systems deployed in 1-6 weeks.
              </p>
            </div>

            <h2>The Three Failure Modes</h2>

            <h3>1. The Endless Discovery Phase</h3>
            <p>Six weeks of meetings. Twenty-page PDFs mapping your "current state" and "future state." A recommendation to do a "proof of concept." By month three, you've spent $30,000 and have exactly zero working software.</p>
            <p>The problem isn't the methodology. It's the incentive. When consultants bill by the hour or by the month, there's no reason to ship fast.</p>

            <h3>2. Slide Deck Deliverables</h3>
            <p>You don't need a strategy deck. You need a working system that processes invoices, qualifies leads, or automates reporting. But slide decks are cheaper to produce than software, and they look impressive in board meetings.</p>
            <p>The test is simple: after the engagement ends, can you point to something that's running in production? If the answer is no, the consulting failed.</p>

            <h3>3. The Pilot Trap</h3>
            <p>A limited-scope pilot runs on non-critical data for three months and shows "promising results." But the team scoped it so narrowly that extending it to real workflows requires rebuilding from scratch. That pilot was theater.</p>

            <h2>How We Build Differently</h2>
            <p>We start with a single $300 Discovery Session.</p>
            <p>Not a month-long audit. One 60-minute video call where we identify the specific problem, map the current cost, and outline the build. You get a written action plan at the end: not a proposal for more consulting.</p>
            <p>If the problem is real and the build makes economic sense, we quote a fixed price and a specific timeline. Workflow automations ship in 1-2 weeks. AI agent systems in 3-6 weeks. Full applications in 4-10 weeks.</p>
            <p>No six-month discovery. The session replaces it. No slide decks. We ship working software. No pilot trap. Every build starts on a real problem with real data.</p>

            <h2>The Economics</h2>
            <p>Workflow automation from $1,200. AI agent systems from $5,000. Custom AI applications from $5,000. If we can solve the problem for less, we'll tell you. The Discovery Session filters out bad investments by design, not to generate consulting hours.</p>

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
