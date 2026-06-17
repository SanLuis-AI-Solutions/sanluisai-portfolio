import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'What AI Actually Costs vs. What It Saves: A Real Breakdown - SanLuis AI Solutions',
  description: 'Most AI pricing pages say contact us. Here are real numbers: Discovery $300, Automation $1,200+, Agents $5,000+. Fixed price. You own the code. Breakeven in months.',
  openGraph: {
    title: 'What AI Actually Costs vs. What It Saves: A Real Breakdown',
    description: 'Real AI pricing and savings: Discovery $300, Automation $1,200+, Agents $5,000+. Fixed price, you own the code, breakeven in months.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/ai-cost-roi-breakdown',
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
  headline: 'What AI Actually Costs vs. What It Saves: A Real Breakdown for Small Business',
  description: 'Most AI pricing pages say contact us. Here are real numbers: Discovery $300, Automation $1,200+, Agents $5,000+. Fixed price. You own the code. Breakeven in months.',
  author: {
    '@type': 'Person',
    name: 'Daniel San Luis',
    url: 'https://www.linkedin.com/in/danielsanluis',
  },
  datePublished: '2026-05-08',
  publisher: {
    '@type': 'Organization',
    name: 'SanLuis AI Solutions',
    url: 'https://sanluisai-portfolio.vercel.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/ai-cost-roi-breakdown',
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
        eyebrow="Pricing"
        title="What AI Actually Costs vs. What It Saves: A Real Breakdown"
        description="No contact us. No enterprise pricing. Real numbers from a Houston AI firm."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            May 8, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg>
            </span>
            7 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">Most AI pricing pages hide the number. Ours doesn&rsquo;t. Here&rsquo;s exactly what AI costs, exactly what it saves, and how to tell a good investment from a money pit.</p>

            <h2>The Numbers Nobody Shows You</h2>
            <p>There&rsquo;s a reason AI pricing pages say &ldquo;contact us.&rdquo; They want to size you up before they name a price. That approach tells you more about the vendor than about the cost. If the price depends on your budget rather than the problem, you&rsquo;re not buying a solution. You&rsquo;re being sold a package.</p>
            <p>We post prices, not estimates. The cost depends on the work, not your wallet. Here&rsquo;s the full breakdown.</p>

            <h2>The SanLuis Pricing Model</h2>

            <h3>$300. Discovery Session</h3>
            <p>One hour. We audit your operations and find the manual task that eats the most time and causes the most delays. You get a written roadmap with ranked opportunities. Includes AI Opportunity Audit&trade; ($2,500 value) at no extra charge. Money-back guarantee if we find fewer than three high-impact AI opportunities.</p>
            <p>This isn&rsquo;t a sales call disguised as a consultation. We tell you what&rsquo;s worth building and what isn&rsquo;t. If the answer is &ldquo;nothing,&rdquo; you pay $300 for honesty instead of $5,000 for a system you didn&rsquo;t need.</p>

            <h3>$1,200+. AI Automation</h3>
            <p>Data entry, reconciliation, scheduling, reporting. The busywork your best people shouldn&rsquo;t touch. Fixed price. You own the code. Connects to your existing tools. Includes 30-day post-launch support ($500 value) and team adoption walkthrough.</p>
            <p>Most automation projects fail because they&rsquo;re over-engineered. We build the 80% solution first. It ships in weeks, not months. Edge cases come later.</p>

            <h3>$5,000+. AI Agents</h3>
            <p>Not a chatbot. An autonomous system that researches, decides, and acts on multi-step tasks without hand-holding. Built for one specific job. Includes 14-Day Prototype Promise ($1,000 value) where you see it working before committing to the full build.</p>
            <p>You approve the output, not every step. The system handles complex, multi-stage workflows start to finish.</p>

            <h3>$5,000+. Custom AI Systems</h3>
            <p>A purpose-built system for a single, high-impact problem. Designed around your data, your workflow, your outcomes. Includes Architecture Blueprint ($1,500 value), deployment, and team training ($500 value). You own everything. No license fees. No vendor lock-in.</p>
            <p>Total bundle value: $7,000+. Your investment: Discovery from $300, build from $5,000.</p>

            <h2>The Math That Matters</h2>
            <p>Here&rsquo;s the labor math that makes AI a no-brainer for most small businesses:</p>
            <p>A single admin task done manually costs roughly $18/hr. If it takes 20 hours per week, that&rsquo;s $18,000 per year. An AI automation system that replaces it costs $1,200 to $5,000 one time. You own it forever.</p>
            <p>Breakeven: 1 to 4 months. After that, every dollar is pure margin.</p>
            <p>Now scale that. If you have three people doing manual data entry, reconciliation, and scheduling, your annual burn rate on busywork is $54,000. An AI system costs less than 10% of that and runs forever.</p>

            <h2>What&rsquo;s Included (All At No Extra Charge)</h2>

            <ul>
              <li><strong>AI Opportunity Audit&trade;</strong> ($2,500 value). We find the opportunities that move the needle and tell you which ones to ignore. Included with Discovery.</li>
              <li><strong>Architecture Blueprint</strong> ($1,500 value). You see the full system design before we write any code. Commit only after you review the plan. Included with Custom AI Systems.</li>
              <li><strong>14-Day Prototype Promise</strong> ($1,000 value). A working prototype you can test. See it work before the full build. Included with AI Agents.</li>
              <li><strong>30-Day Post-Launch Support</strong> ($500 value). We handle bugs, questions, and training. Included with Automation.</li>
              <li><strong>Team Adoption Walkthrough</strong>. We train your people so the system actually gets used. Included with Automation and Custom Systems.</li>
            </ul>

            <p>If you went to a traditional consultancy, these line items would be billed separately. We bundle them because the system only works if you use it.</p>

            <h2>Real ROI: What Our Clients Actually Saved</h2>

            <h3>Garza International. Construction</h3>
            <p>A Houston construction firm lost bids because manual quoting took six-plus hours per response. Faster competitors won by default.</p>
            <p>We built a custom AI system that automated the quoting process. Result: 60% faster bid turnaround. More bids submitted. More bids won.</p>
            <p>The math: each additional bid won at an average contract value of $50,000 with a 15% margin is $7,500 in profit. Win one extra bid per month and the system pays for itself in the first month.</p>

            <h3>Susie&rsquo;s Jewelry Repair. Retail</h3>
            <p>Leads came in through the website, phone, and walk-ins with no systematic follow-up. Prospects fell through the cracks daily.</p>
            <p>An AI lead management system captured and qualified every lead automatically. Result: 3x inbound leads.</p>
            <p>The math: if a single customer is worth $500 in lifetime revenue and you&rsquo;re losing 10 leads per month to poor follow-up, that&rsquo;s $5,000 per month walking out the door. A $1,200 system that catches those leads pays for itself in under a week.</p>

            <h3>LoveFlow. Technology</h3>
            <p>A matching algorithm drove user churn through surface-level preference matching. Users left because the matches didn&rsquo;t feel right.</p>
            <p>We improved the matching algorithm. Result: 40% better matches, reduced churn, competitive advantage.</p>
            <p>The math: if churn drops from 10% monthly to 6%, and each retained user is worth $20/month, 100 retained users is $24,000 per year in prevented revenue loss.</p>

            <h2>The 6-Month Guarantee</h2>
            <p>If your AI system doesn&rsquo;t pay for itself within 6 months, we fix it free. No loopholes. No proration. If the ROI isn&rsquo;t there, the cost isn&rsquo;t either.</p>
            <p>This isn&rsquo;t a marketing line. We track hours recovered and revenue gained monthly. The numbers are transparent from day one.</p>

            <h2>What NOT To Buy</h2>
            <p>AI isn&rsquo;t right for every problem. When NOT to invest:</p>
            <ul>
              <li><strong>Infrequent problems.</strong> If it happens once a quarter, a checklist is a better investment than an AI system.</li>
              <li><strong>Low-impact problems.</strong> If the total annual cost of the problem is under $500, automating it is busywork, not ROI.</li>
              <li><strong>Human judgment tasks.</strong> Negotiation strategy, creative marketing, client relationship decisions. Keep these human.</li>
              <li><strong>Off-the-shelf is enough.</strong> If a $20/month SaaS tool handles your need, don&rsquo;t build custom. We&rsquo;ll tell you which tools to use instead of trying to sell you a system you don&rsquo;t need.</li>
            </ul>

            <p>Honest anti-sell builds trust. We&rsquo;d rather lose a sale than sell something that won&rsquo;t deliver.</p>

            <h2>Why Fixed Price + You Own The Code</h2>
            <p>Most AI consultancies bill hourly. The incentive is to go slow. Most AI SaaS platforms charge monthly. The incentive is to make switching painful.</p>
            <p>We charge a fixed price because the incentive should be to finish. You own the code because the incentive should be to build something that works without us. If you want to hire someone else to maintain it next year, you can. The code is yours.</p>
            <p>No vendor lock-in. No per-seat licensing. No surprise renewal bills. You pay once and you own the result.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              &ldquo;The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.&rdquo;
              <br /><span className="font-sans text-sm not-italic text-navy-500">Garza International</span>
            </blockquote>

            <p>Start with a $300 Discovery Session. One hour. A written roadmap. A clear answer about whether AI is worth it for your business. If it isn&rsquo;t, we&rsquo;ll tell you.</p>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <CTA />
    </>
  )
}
