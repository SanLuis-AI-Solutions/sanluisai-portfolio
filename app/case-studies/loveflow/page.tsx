import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import OrnamentDivider from '@/components/OrnamentDivider'
import BeforeAfter from '@/components/BeforeAfter'

export const metadata: Metadata = {
  title: 'How We Designed a Christian Faith-Based Relationship App in Three Days Using AI Tools | SanLuis AI Solutions',
  description: 'A founder with no coding background turned a clear idea into a working app design using Google AI Studio, Stitch, Gemini, and Codex. Three days from concept to complete design system.',
  openGraph: {
    title: 'How We Designed a Christian Faith-Based Relationship App in Three Days Using AI Tools | SanLuis AI Solutions',
    description: 'A founder with no coding background turned a clear idea into a working app design using Google AI Studio, Stitch, Gemini, and Codex. Three days from concept to complete design system.',
    url: 'https://sanluisai-portfolio.vercel.app/case-studies/loveflow',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Case Study"
        title="LoveFlow."
        description="A founder with no coding background turned a clear idea into a working app design using Google AI Studio, Stitch, Gemini, and Codex. Three days from concept to complete design system."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">3 days</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Cost</div><div className="font-display text-xl text-navy-800">AI subscriptions</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>

          {/* Impact counters */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Saved vs. agency</div><div className="font-display text-xl text-navy-800">$40k-$100k</div></div>
            <AnimatedCounter value={55} suffix="%" label="Faster with AI coding" />
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">YC startups</div><div className="font-display text-xl text-navy-800">25% at 95% AI code</div></div>
          </div>
          <OrnamentDivider className="!py-8" />

          <h2 className="font-display text-2xl text-navy-800 mb-4">TL;DR</h2>
          <p className="sl-body mb-6">A founder had a clear vision for a Christian faith-based relationship app but no technical background. Using a combination of Google AI Studio, Google Stitch, Gemini, and Codex, we designed the full app from the ground up in a focused three-day session. The core design, a calm editorial interface built around warmth and organic curves, is complete and in active development. Total cost was the AI tool subscriptions. A traditional agency build would have cost $40,000 to $100,000 (Clutch.co, GoodFirms).</p>

          <div className="space-y-3 mb-8 p-6 bg-white border border-navy-900 rounded text-sm font-sans text-fg2">
            <p><span className="text-gold-600 font-semibold">1.</span> Tasks completed 55% faster with AI-assisted coding (GitHub/Microsoft Research, 2023) &mdash; arXiv:2302.06590</p>
            <p><span className="text-gold-600 font-semibold">2.</span> Developers completed coding tasks up to 2x faster with generative AI tools (McKinsey Digital, 2023)</p>
            <p><span className="text-gold-600 font-semibold">3.</span> A traditional agency-built MVP app costs $40,000 to $100,000 (Clutch.co, GoodFirms)</p>
            <p><span className="text-gold-600 font-semibold">4.</span> 25% of startups in Y Combinator's Winter 2025 batch have codebases that are 95% AI-generated (TechCrunch, March 2025)</p>
            <p><span className="text-gold-600 font-semibold">5.</span> Saved time that would have gone toward learning to code</p>
          </div>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Situation</h2>
          <p className="sl-body mb-6">The founder had a clear idea. A Christian faith-based relationship app to help couples communicate better, keep the spark alive, and grow closer to each other and to God. The idea was clear. The path to building it was not.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Constraint</h2>
          <p className="sl-body mb-6">Like most people with a real idea, the founder had no technical background and no clear sense of how AI could actually turn that idea into a working app, or who to even ask. The usual options were a development team (months of timeline, real budget: $40k to $100k for an MVP, sourced from Clutch.co and GoodFirms) or letting the idea sit indefinitely.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-6">Using a combination of Google AI Studio, Google Stitch, Gemini, and Codex, we designed the full app from the ground up in a focused three-day session. The core design system came together as a calm, editorial interface built around warmth and organic curves, intentionally different from the high-contrast, swipe-driven feel of typical dating apps. Three specific pieces took shape: a guided Daily Interaction flow for couples to check in with each other, an onboarding Questionnaire that personalizes the experience from day one, and a Reflection feature for tagging prayer topics and relationship milestones.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">Where It Stands</h2>
          <p className="sl-body mb-6">Still in active development. The hardest part, turning a real idea into a real, working design, is already done. The founder is now building with the same tools, informed by the design system we created together.</p>

          <BeforeAfter
            title="The Difference"
            before={{
              label: 'Traditional Path',
              metric: 'Timeline to MVP',
              value: '4-7 months',
              details: [
                'Agency development: $40,000 to $100,000 for an MVP',
                'Hiring in-house: months of recruiting, six-figure salary cost',
                'Learning to code: 12 to 18 months before shipping anything',
                'No clear path forward with no technical co-founder',
              ],
            }}
            after={{
              label: 'AI-Powered Path',
              metric: 'Timeline to MVP',
              value: '3 days',
              details: [
                'Full design system built in a focused three-day session',
                'Cost limited to AI tool subscriptions',
                'Founder now building independently with same AI tools',
                'Design ready for development with no agency dependency',
              ],
            }}
          />

          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 text-fg2 font-display text-lg">
            <p className="italic mb-2">"I had the vision for years but no way to make it real. SanLuis AI showed me what was possible with AI tools and built the design in three days. Now I am building it myself."</p>
            <footer className="text-gold-600/80 not-italic text-base">Founder, LoveFlow</footer>
          </blockquote>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Bigger Point</h2>
          <p className="sl-body mb-6">This is the exact gap SanLuis AI exists to close. Most people do not get stuck because AI cannot help them. They get stuck because they do not know how it can, or who to ask. Tools like Google AI Studio and Codex have made AI-assisted development accessible to anyone. 25% of Y Combinator's Winter 2025 batch have codebases that are 95% AI-generated (TechCrunch, March 2025). But knowing which tools to use and how to combine them still requires experienced guidance. That is what we provide.</p>

          <p className="sl-body mb-0">Your app idea could be designed in three days. Start with a $300 Discovery Session to find out how.</p>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Your app idea could go from concept to design in three days.</h2>
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