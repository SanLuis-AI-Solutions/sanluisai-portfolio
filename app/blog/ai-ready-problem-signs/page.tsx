import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'SanLuis AI Solutions: 5 Signs Your Business Has An AI-Ready Problem',
  description: 'Not every problem needs AI. Here are five signals that your issue is ripe for a custom AI solution, plus when a spreadsheet or checklist is the better answer.',
  openGraph: {
    title: '5 Signs Your Business Has An AI-Ready Problem',
    description: 'Five signals your business problem is ready for custom AI, plus when a spreadsheet or checklist is the better answer.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/ai-ready-problem-signs',
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
  headline: '5 Signs Your Business Has An AI-Ready Problem',
  description: 'Not every problem needs AI. Here are five signals that your issue is ripe for a custom AI solution, plus when a spreadsheet or checklist is the better answer.',
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
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/ai-ready-problem-signs',
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
        title="5 Signs Your Business Has An AI-Ready Problem"
        description="Not every problem needs AI. Here are five signals that your issue is ripe for a custom AI solution."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            April 28, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg>
            </span>
            4 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">AI solves specific types of problems. The trick is knowing which ones to solve with AI, and which ones will only cost more once AI is bolted on.</p>

            <h2>Sign #1: You Have Data But No Decisions</h2>
            <p>You collect customer data, sales data, or operational data, but you never find time to analyze it. Your spreadsheet has 10,000 rows and you still make decisions based on intuition.</p>
            <p><strong>AI-ready if:</strong> You have the data in a structured format (CSV, database, or CRM) and the decision follows a repeatable pattern. AI can analyze your data and give you answers in seconds.</p>

            <h2>Sign #2: Someone Is Copy-Pasting for Hours</h2>
            <p>An employee spends 10+ hours per week moving data from one system to another. Emails to spreadsheets. PDFs to CRMs. Website forms to follow-up sequences.</p>
            <p><strong>AI-ready if:</strong> The process has clear rules and doesn't require creative judgment. Workflow automation can handle this in minutes, not hours.</p>

            <h2>Sign #3: Your Response Time Is Losing You Business</h2>
            <p>A lead comes in at 8 PM. You respond at 10 AM the next day. By then, they've booked with a competitor. No other delay in small business costs this much, and none is this easy to prevent.</p>
            <p><strong>AI-ready if:</strong> You can define what a "qualified lead" looks like. An AI intake system can respond instantly, ask qualifying questions, and book a meeting without human involvement.</p>

            <h2>Sign #4: You Have Experts Doing Admin Work</h2>
            <p>Your best people waste their expertise on scheduling, reporting, data entry, and follow-up emails. That work does not need their judgment.</p>
            <p><strong>AI-ready if:</strong> The admin work follows a pattern. AI agents can handle intake, routing, research, and reporting so your experts can focus on actual decisions.</p>

            <h2>Sign #5: You Can Describe the Problem in One Sentence</h2>
            <p>"I need to qualify leads faster." "I need to automate invoice follow-ups." "I need to analyze project bids consistently." If you can state the problem clearly, AI can probably solve it clearly.</p>
            <p><strong>Not AI-ready if:</strong> You can't describe the problem without jargon, buzzwords, or a diagram. Vague problems produce expensive failures.</p>

            <h2>When NOT to Use AI</h2>
            <p>If the problem is infrequent (once a quarter), low-impact (costs less than $500/year), or requires human judgment and empathy, AI is probably the wrong answer. A checklist, a better process, or an intern is a better investment.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              "The best AI projects aren't about technology. They're about finding the problem that costs you the most and fixing it with the simplest possible solution."
            </blockquote>

            <p>Not sure if your problem qualifies? Start with a $300 Discovery Session. One hour. A clear answer.</p>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <CTA />
    </>
  )
}
