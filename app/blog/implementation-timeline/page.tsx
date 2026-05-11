import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'From Discovery to Live AI System: The 14-Day Roadmap — SanLuis AI Solutions',
  description: 'What actually happens in the first 14 days of an AI build? From discovery to prototype to live system. Transparent, fixed-price, you-own-the-code.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From Discovery to Live AI System: The 14-Day Roadmap',
  description: 'What actually happens in the first 14 days of an AI build? From discovery to prototype to live system. Transparent, fixed-price, you-own-the-code.',
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
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/implementation-timeline',
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
        eyebrow="Process"
        title="From Discovery to Live AI System: The 14-Day Roadmap"
        description="What actually happens in the first 14 days of an AI build? Here is the transparent, time-bounded timeline."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            May 8, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg>
            </span>
            5 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">
              Most &ldquo;AI development&rdquo; projects are black boxes. You pay hourly, you hope for progress, and you pray the timeline doesn&rsquo;t slip. We replace the black box with a 14-day roadmap. Here&rsquo;s how it works.
            </p>

            <h2>Day 0: You Book the Call</h2>
            <p>You book a $300 Discovery Session. What you&rsquo;ll need: 30 minutes, an open mind, and a real, painful problem. What you won&rsquo;t need: technical knowledge, a big budget, or a development team. We handle all of that.</p>

            <h2>Day 1: The Discovery Session</h2>
            <p>We map your operations. We don&rsquo;t talk &ldquo;AI strategy&rdquo; — we talk &ldquo;bottlenecks.&rdquo; We identify the specific task that&rsquo;s costing you the most in time, money, and missed opportunities. You get a clear answer about whether AI is worth it for your business. If the answer is no, you walk away with a roadmap and we saved you from an expensive mistake.</p>

            <h2>Day 3: AI Opportunity Audit&trade; Delivered</h2>
            <p>You receive a written roadmap. It&rsquo;s ranked: &ldquo;Here are five things AI could do for you. #1 will save you the most money. #3 is a shiny object — ignore it.&rdquo; It&rsquo;s honest, ranked, and jargon-free. If we don&rsquo;t find at least three high-impact AI opportunities, you get your $300 back. No strings.</p>

            <h2>Day 7: Prototype Ready (14-Day Promise)</h2>
            <p>For Agent/System engagements, we build a working prototype in the first week. You see it work before you commit to the full build. You approve the output, not every step. This isn&rsquo;t a slide deck — it&rsquo;s the actual system running on your data.</p>

            <h2>Day 14: System Live</h2>
            <p>The system is deployed. Your team is trained. The automation is running in your actual environment. We don&rsquo;t just ship code; we ship a working workflow that your team uses the next morning.</p>

            <h2>The 6-Month Guarantee</h2>
            <p>The 14-day timeline isn&rsquo;t just about speed — it&rsquo;s about measuring results immediately. We track hours recovered, revenue gained, and errors eliminated. If the system doesn&rsquo;t pay for itself in 6 months, we fix it free. If the ROI isn&rsquo;t there, we take the hit, not you.</p>

            <h2>Why Fixed Price + You Own The Code Matters</h2>
            <p>Most AI consultancies bill hourly. The incentive is to go slow. Most AI platforms charge monthly SaaS fees. The incentive is to make switching painful.</p>
            <p>We charge a fixed price because the incentive should be to finish. You own the code because the incentive should be to build something that works without us. If you want to hire someone else to maintain it next year, you can. No license fees, no vendor lock-in, no surprise renewal bills.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              &ldquo;The system replaced what used to take my team three hours every morning. Now it runs before I pour my coffee.&rdquo;
              <br /><span className="font-sans text-sm not-italic text-navy-500">Garza International</span>
            </blockquote>

            <p>Stop paying for hours and start paying for outcomes. Book your Discovery Session today.</p>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <CTA />
    </>
  )
}
