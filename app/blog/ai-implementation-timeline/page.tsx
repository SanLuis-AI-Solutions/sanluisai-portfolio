import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'From $300 Discovery to Live AI System: What 14 Days Actually Look Like | SanLuis AI Solutions',
  description: 'Day-by-day breakdown of a custom AI build. Discovery, audit, prototype, deployment. Fixed price. You own the code. No surprises.',
  openGraph: {
    title: 'From $300 Discovery to Live AI System: What 14 Days Actually Look Like',
    description: 'Day-by-day breakdown of a custom AI build: discovery, audit, prototype, deployment. Fixed price, you own the code.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/ai-implementation-timeline',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-05-08',
    authors: ['Daniel San Luis'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From $300 Discovery to Live AI System: What the First 14 Days Actually Look Like',
  description: 'Day-by-day breakdown of a custom AI build. Discovery, audit, prototype, deployment. Fixed price. You own the code. No surprises.',
  author: { '@type': 'Person', name: 'Daniel San Luis', url: 'https://www.linkedin.com/in/danielsanluis' },
  datePublished: '2026-05-08',
  publisher: { '@type': 'Organization', name: 'SanLuis AI Solutions', url: 'https://sanluisai-portfolio.vercel.app' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://sanluisai-portfolio.vercel.app/blog/ai-implementation-timeline' },
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHeader eyebrow="Process" title="From $300 Discovery to Live AI System: What 14 Days Actually Look Like | SanLuis AI Solutions" description="No black boxes. No six-month pilot programs. Just a clear timeline with real milestones." />
      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">May 8, 2026<span className="inline-block w-3 h-3 flex-shrink-0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg></span>6 min read</div>
          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">Most people picture an AI project as a six-month slog through discovery phases, pilot programs, and endless stakeholder meetings. It doesn&rsquo;t have to be that way. Here&rsquo;s what a real build looks like when you skip the theater.</p>

            <h2>Day 0: You Book The Call</h2>
            <p>What you&rsquo;ll need: 30 minutes, one real problem, and the willingness to hear &ldquo;AI isn&rsquo;t the answer for this&rdquo; if that&rsquo;s the truth. What you won&rsquo;t need: technical knowledge, a big team, a big budget, or a prepared presentation.</p>

            <h2>Day 1: The Discovery Session</h2>
            <p>Sixty minutes. We map your workflow from trigger to outcome. We find the single step that costs the most time, generates the most errors, or loses the most deals.</p>
            <p>We don&rsquo;t ask what you want to build. We ask where it hurts. The difference matters. People who come in saying &ldquo;I want a chatbot&rdquo; usually need a lead intake system. People who say &ldquo;I need better reporting&rdquo; usually need an automation that eliminates the manual data entry generating those reports.</p>
            <p>Cost: $300. Money-back guarantee if we find fewer than three high-impact AI opportunities. You&rsquo;re not paying for a sales pitch. You&rsquo;re paying for an honest answer.</p>

            <h2>Day 3: AI Opportunity Audit Delivered</h2>
            <p>A written document. Ranked. Prioritized. &ldquo;Here are five things AI could do for your business. #1 will save you the most money. #4 isn&rsquo;t worth building yet. #5 would make things worse.&rdquo;</p>
            <p>This is the $2,500 value included in your $300 Discovery. It&rsquo;s the artifact that lets you make an actual decision: not based on hype, based on math.</p>

            <h2>Day 4: Project Scoping</h2>
            <p>If you decide to proceed, we scope the build. Fixed price. Defined outcome. Clear timeline. No hourly billing, no scope creep, no &ldquo;we&rsquo;ll figure it out as we go.&rdquo;</p>
            <p>For Automation ($1,200+): We define the exact workflow, the tools it connects to, and the success metric (hours recovered, leads captured, errors eliminated). For Agent/System builds ($5,000+): We also get an Architecture Blueprint. Full system design before any code is written.</p>

            <h2>Day 7: Prototype Ready</h2>
            <p>For Agent and Custom System builds, a working prototype is live by day 7. You can test it. See it work. Confirm it does what you need before a single dollar goes toward the full build.</p>
            <p>This is the 14-Day Prototype Promise ($1,000 value). Most consultancies bill you for discovery and design before you see anything functional. We want you to see it work before you commit.</p>

            <h2>Day 14: System Live</h2>
            <p>Deployed. Trained. Your team knows how to use it. The system is running on your data, connected to your tools, producing real results. 30-day post-launch support begins. We handle bugs, answer questions, and make sure adoption sticks.</p>
            <p>For Garza International, day 14 was when the quoting system went live. Three hours of morning manual work replaced by a system that ran before anyone poured their coffee.</p>

            <h2>Month 1: Measuring Impact</h2>
            <p>We track the actual numbers: hours recovered, revenue gained, errors eliminated. This isn&rsquo;t a feel-good metric. It&rsquo;s a ledger line.</p>
            <p>If the system isn&rsquo;t paying for itself, we fix it. That&rsquo;s the 6-month guarantee. Not a marketing line: a contractual commitment.</p>

            <h2>Real Timelines, Real Results</h2>
            <p><strong>Garza International:</strong> 3 weeks from Discovery to live quoting system. 60% faster bid turnaround. First additional bid won covered the cost.</p>
            <p><strong>Susie&rsquo;s Jewelry Repair:</strong> 2 weeks from Discovery to live lead management system. 3x inbound leads within the first month.</p>
            <p><strong>LoveFlow:</strong> 3 weeks from Discovery to improved matching algorithm. 40% better matches, churn reduction, competitive moat.</p>

            <h2>Why Fixed Price + Ownership Matters</h2>
            <p>Hourly billing incentives going slow. SaaS subscriptions incentive making switching painful. We charge a fixed price because the incentive should be to finish. You own the code because the incentive should be to build something that works without us.</p>
            <p>No vendor lock-in. No per-seat fees. No surprise renewal. You pay once. You own the result.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">&ldquo;The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.&rdquo;<br /><span className="font-sans text-sm not-italic text-navy-500">Garza International</span></blockquote>

            <p>Ready to see what 14 days looks like for your business? Book a $300 Discovery Session. One hour. A clear answer. A real timeline.</p>
          </div>
        </div>
      </article>
      </AnimatedSection>
      <CTA />
    </>
  )
}
