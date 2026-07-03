import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CtaBar from '@/components/CtaBar'
import LeadMagnetGate from '@/components/LeadMagnetGate'

export const metadata: Metadata = {
  title: 'The $300 Discovery Session: What Happens in That Hour. SanLuis AI Solutions',
  description: 'You pay $300 for a 60-minute audit. What do you actually get? We break down the diagnostic process: from problem identification to a written action plan you can execute.',
  openGraph: {
    title: 'The $300 Discovery Session: What Happens in That Hour',
    description: 'What you actually get in a $300, 60-minute AI audit: from problem identification to a written action plan you can execute.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/discovery-session-breakdown',
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
  headline: 'The $300 Discovery Session: What Happens in That Hour',
  description: 'You pay $300 for a 60-minute audit. What do you actually get? We break down the diagnostic process: from problem identification to a written action plan you can execute.',
  image: 'https://sanluisai-portfolio.vercel.app/generated/og-default.png',
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
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/discovery-session-breakdown',
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
        title="The $300 Discovery Session: What Happens in That Hour"
        description="You pay $300 for a 60-minute audit. What do you actually get?"
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            April 28, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg></span>
            4 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">$300 for a one-hour meeting sounds expensive until you realize it replaces four weeks of discovery-phase billing.</p>
            <div className="bg-bone-100 border border-navy-200 rounded p-5 mb-8">
              <p className="font-sans text-sm text-navy-800 leading-relaxed m-0">
                <strong>TL;DR:</strong> In the $300 Discovery Session you get a 60-minute business audit that identifies your most expensive problem, calculates its cost, sketches a fix, and delivers a written roadmap with fixed-price quote and timeline. No retainer required.
              </p>
            </div>

            <h2>Before the Session</h2>
            <p>You fill out a brief form: company website, biggest pain point, current tools, budget range. This lets us skip the "tell us about your business" portion and get straight to the problem. No sales pitch. No discovery deck. Just context.</p>

            <h2>Minute 0–15: Problem Identification</h2>
            <p>We ask one question: "What is the single most expensive problem in your business right now?" Not your top five. The one that keeps you up at night. The one that, if solved, would free up the most time or generate the most revenue.</p>
            <p>Most business owners answer this in 30 seconds. The answer is almost never what they put on their website.</p>

            <h2>Minute 15–30: Cost Analysis</h2>
            <p>We calculate what the problem is costing you. Hours per week multiplied by hourly value, plus lost opportunities, plus frustration tax. This number is almost always higher than you think.</p>
            <p>If the problem costs less than the solution, we stop there. We'll tell you honestly: this one isn't worth building. You spent the $300 well: it saved you $5,000.</p>

            <h2>Minute 30–45: Solution Architecture</h2>
            <p>If the math works, we sketch the solution. Not wireframes. Not PRDs. We describe what the system will do, how it fits into your workflow, and what you'll see when it runs.</p>

            <h2>Minute 45–60: Roadmap + Pricing</h2>
            <p>You receive:</p>
            <ul>
              <li>A written summary of the problem and its cost</li>
              <li>The proposed solution in plain language</li>
              <li>A fixed-price quote and timeline</li>
              <li>A recommended next step</li>
            </ul>

            <h2>What Happens Next</h2>
            <p>You leave the session with a document. Not a proposal for more consulting. A concrete answer: build this, don't build that. If the answer is "build," you have a price and a timeline before you've paid a retainer.</p>
            <p>If the answer is "don't build," you saved thousands. Either way, the $300 was the cheapest diagnostic you'll ever run on your business.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              "Most consultants charge thousands to tell you what you already know. We charge $300 to tell you what you don't."
            </blockquote>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <LeadMagnetGate />
      <CtaBar variant="primary" href="/booking" text="Book a Discovery Session" />
    </>
  )
}
