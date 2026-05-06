import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'How Garza International Cut Bid Turnaround by 60% With Custom AI — SanLuis AI Solutions',
  description: 'A Houston construction firm was losing bids because manual quoting took 6+ hours per response. Here is the exact ROI breakdown of a 3-week custom AI build.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Garza International Cut Bid Turnaround by 60% With Custom AI',
  description: 'A Houston construction firm was losing bids because manual quoting took 6+ hours per response. Here is the exact ROI breakdown of a 3-week custom AI build.',
  author: {
    '@type': 'Person',
    name: 'Daniel San Luis',
    url: 'https://www.linkedin.com/in/danielsanluis',
  },
  datePublished: '2026-04-15',
  publisher: {
    '@type': 'Organization',
    name: 'SanLuis AI Solutions',
    url: 'https://sanluisai-portfolio.vercel.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/garza-international-roi-breakdown',
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
        eyebrow="Case Study"
        title="How Garza International Cut Bid Turnaround by 60% With Custom AI"
        description="A Houston construction firm was losing bids because manual quoting took too long. Here is the exact ROI breakdown."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            April 15, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg>
            </span>
            4 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">Garza International's estimating team was spending 6+ hours per bid response. The math was simple: they could only bid on a fraction of available projects, and the ones they did bid on were priced based on stale data.</p>

            <h2>The Cost of Manual Quoting</h2>
            <p>Before the AI system, each construction quote required an estimator to:</p>
            <ul>
              <li>Pull current material costs from 4 different supplier spreadsheets</li>
              <li>Cross-reference labor rates against an internal rate book</li>
              <li>Search email archives for historical bid data on similar projects</li>
              <li>Manually calculate profit margins and adjust for risk</li>
              <li>Write and format the proposal in Word</li>
            </ul>
            <p>Total time per bid: 6–8 hours. Total bids per week: at most 3–4. The team was working at capacity and still losing work to competitors who responded faster.</p>

            <h2>The Build: 3 Weeks, Fixed Price</h2>
            <p>We started with a $300 Discovery Session. One hour to identify the bottleneck, map the current cost, and outline the build. The math was clear: a 60% reduction in quoting time would let Garza bid on 2x the projects without hiring more estimators.</p>
            <p>The system we built connects supplier pricing APIs, historical bid data, and labor rate tables into a single interface. An estimator enters project specs — square footage, material type, location, timeline — and the engine returns a fully formatted proposal in under 30 minutes.</p>

            <h2>ROI by the Numbers</h2>
            <p><strong>Before:</strong> 6–8 hours per bid, 3–4 bids per week, estimators overloaded, inconsistent pricing across bids.</p>
            <p><strong>After:</strong> 30–45 minutes per bid, 10+ bids per week, consistent pricing models, automatic margin optimization based on historical win/loss data.</p>
            <p><strong>Investment:</strong> $300 discovery + fixed-price build. Recovered in a single large bid win.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              "SanLuis AI didn't just build software — they solved the single biggest problem in our sales process. We're bidding faster and winning more." — Director of Operations, Garza International
            </blockquote>

            <h2>Why Fixed-Price AI Works Here</h2>
            <p>Garza's quoting problem was well-defined. The data existed. The rules were clear. The output was predictable. That's the sweet spot for fixed-price AI builds — where the problem is clear enough that a Discovery Session can scope it completely, and the solution doesn't need months of iteration.</p>
            <p>Not every AI project fits this model. But most workflow automation problems do. If you can explain the problem in one sentence and the data is already structured, a fixed-price build is probably the right answer.</p>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <CTA />
    </>
  )
}
