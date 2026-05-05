import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI for Professional Services. — SanLuis AI Solutions',
  description: 'Billable hours leakage, document review delays, and client onboarding drag erode margins. We build AI to eliminate the waste.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Professional Services."
        description="Billable hours leakage, document review delays, and client onboarding drag erode margins. We build AI to eliminate the waste."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <AnimatedSection delay={0}>
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_proservices_00001_.png" alt="Modern professional services office" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">Professional service firms sell time. But time leaks everywhere -- manual document review, redundant data entry, inconsistent client onboarding. Every hour spent on admin is an hour not billed.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that automate document review, streamline client intake, and capture billable time automatically. The result: higher utilization, faster engagements, better margins.</p>
          <p className="sl-body max-w-prose mb-4">Our document review engine processes contracts, filings, and discovery materials at 10x human speed — flagging risk clauses, missing signatures, and compliance gaps automatically. Client intake workflows capture every piece of information once and route it to the right systems, cutting onboarding from weeks to hours. Automatic time tracking monitors work products and activities to capture every billable minute that would otherwise slip through manual timesheets.</p>

          <div className="bg-gold-50 border border-gold-300 rounded-lg p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">We build custom AI systems for professional services firms — law, consulting, accounting — that automate document review, capture billable time automatically, and streamline client onboarding from weeks to hours. Our solutions integrate with your existing practice management tools and document systems, requiring no major infrastructure changes. The focus is always on one thing: getting your professionals back to billable work.</p>
            <p className="sl-body-sm">See how we applied similar pattern-matching and analysis automation for <Link href="/case-studies/loveflow" className="text-gold-600 underline hover:text-gold-700">LoveFlow</Link>, an AI-powered consumer app that demonstrates our approach to intelligent matching and workflow automation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Document Review</div><div className="font-sans text-sm text-fg2 mt-2">AI that reviews contracts, filings, and discovery at 10x human speed.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Time Capture</div><div className="font-sans text-sm text-fg2 mt-2">Automatic tracking that captures every billable minute — no more manual timesheets.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Solution</div><div className="font-display text-lg text-navy-800">Client Onboarding</div><div className="font-sans text-sm text-fg2 mt-2">Automated intake, KYC, and engagement letter generation — onboarding in hours, not weeks.</div></div></div>
          <div className="mt-12">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
          </div>
        </div>
        </AnimatedSection>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Intelligent Matching</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">LoveFlow</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we built an AI-powered consumer app that demonstrates our pattern matching, data analysis, and workflow automation techniques — directly applicable to document review, time capture, and client onboarding for professional services.</p>
              <Link href="/case-studies/loveflow" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to optimize your firm?</h2>
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
