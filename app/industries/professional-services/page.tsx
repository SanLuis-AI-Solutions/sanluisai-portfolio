import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI for Professional Services. SanLuis AI Solutions',
  description: 'Billable hours leakage, document review delays, and inconsistent client onboarding erode margins. We build AI to eliminate the waste.',
  openGraph: {
    title: 'AI for Professional Services. SanLuis AI Solutions',
    description: 'Stop billable hour leakage and speed up client onboarding with AI for professional services.',
    url: 'https://sanluisai-portfolio.vercel.app/industries/professional-services',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Professional Services."
        description="Billable hours leakage, document review delays, and inconsistent client onboarding erode margins. We build AI to eliminate the waste."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="relative w-full h-48 md:h-72 rounded overflow-hidden mb-8 bg-navy-100">
              <Image
                src="/generated/ind_proservices_00001_.png"
                alt="Modern professional services office"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="sl-body max-w-prose mb-4">
              Professional service firms sell expertise measured in hours. Yet hours leak everywhere. Partners and associates lose billable time to administrative tasks, repeated data entry, manual document checks, and fragmented client intake. Every unrecorded hour and every delayed review reduces utilization, compresses margins, and slows the work that clients actually pay for.
            </p>
            <p className="sl-body max-w-prose mb-4">
              Manual document review is one of the largest hidden costs in law firms, consultancies, and accounting practices. Associates read the same clauses across hundreds of pages, compare versions by hand, and hunt for missing signatures, inconsistent terms, and compliance gaps. The work is slow, error-prone, and expensive. Deadlines slip, clients wait, and senior staff get pulled into work that AI can handle faster and more consistently.
            </p>
            <p className="sl-body max-w-prose mb-4">
              Client onboarding adds another layer of friction. Intake forms arrive incomplete. Information is collected once by email, re-entered into a CRM, then re-entered again into billing or matter management systems. Engagement letters sit in drafts waiting for manual assembly. Meanwhile, time tracking depends on professionals reconstructing their day from memory. The result is missed billables, write-downs, and slow month-end reconciliation that masks the true profitability of each engagement.
            </p>
            <p className="sl-body max-w-prose mb-4">
              Margin erosion follows from these daily inefficiencies. Firms do not need another generic assistant or a chatbot that answers general legal questions. They need targeted systems that automate the repetitive work, capture every billable minute, and move clients from first contact to active engagement in hours instead of weeks. That is what we build.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-8">
              <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
              <p className="sl-body-sm mb-3">
                We build custom AI systems for professional services firms that automate document review, capture billable time automatically, and streamline client onboarding from weeks to hours. Our solutions integrate with existing document repositories, practice management tools, and billing systems without major infrastructure changes. The focus is always the same: getting professionals back to billable work.
              </p>
              <p className="sl-body-sm mb-3">
                Everyone has access to the same AI. We build the one system that saves your firm a day a week. Our document review engine flags risk clauses, missing signatures, and compliance gaps at ten times the speed of manual review. Our time capture system monitors work product and activity to recover the billable minutes that manual timesheets lose. Our intake workflows collect client data once, route it automatically, and generate engagement letters without copying and pasting across systems.
              </p>
              <p className="sl-body-sm mb-4">
                See how we applied similar pattern-matching and workflow automation for <Link href="/case-studies/loveflow" className="text-gold-600 underline hover:text-gold-700">LoveFlow</Link>, an AI-powered consumer app that demonstrates our approach to intelligent matching and automated flow design.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white border border-navy-200 rounded p-5">
                  <h4 className="font-display text-lg text-navy-800 mb-3">We build</h4>
                  <ul className="space-y-2 font-sans text-sm text-fg2">
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Document review automation that flags risk clauses, missing signatures, and compliance gaps.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Automatic time capture that recovers billable minutes across emails, documents, and meetings.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Client intake workflows that collect data once and route it to the right systems automatically.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Engagement letter generation that assembles documents from verified client data without manual drafting.</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white border border-navy-200 rounded p-5">
                  <h4 className="font-display text-lg text-navy-800 mb-3">We do not build</h4>
                  <ul className="space-y-2 font-sans text-sm text-fg2">
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Legal research AI or case-law analysis tools for litigation strategy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Tax filing software or compliance calculators for specific jurisdictions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Diamond />
                      <span>Practice management platforms that replace Clio, Actionstep, or your existing matter system.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Document Review</div>
                <div className="font-display text-lg text-navy-800 mb-2">10x review speed</div>
                <p className="font-sans text-sm text-fg2 mb-3">
                  AI reviews contracts, filings, and discovery materials at ten times the speed of manual review. It flags risk clauses, inconsistencies, missing signatures, and compliance gaps in a single pass. Associates spend less time reading boilerplate and more time advising clients.
                </p>
                <p className="font-sans text-sm text-fg2">
                  The system learns your firm's preferred language and risk thresholds, so every review becomes more consistent. Senior lawyers stop double-checking junior work, and deadlines become predictable.
                </p>
              </div>
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Time Capture</div>
                <div className="font-display text-lg text-navy-800 mb-2">Zero missed billables</div>
                <p className="font-sans text-sm text-fg2 mb-3">
                  Automatic time tracking monitors work product and activity to capture every billable minute. Emails, document edits, calls, and research are recorded against the right matter without relying on end-of-day memory.
                </p>
                <p className="font-sans text-sm text-fg2">
                  The result is fewer write-downs, cleaner month-end reconciliation, and a clearer picture of which engagements are actually profitable. Professionals stop losing revenue they already earned.
                </p>
              </div>
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Client Onboarding</div>
                <div className="font-display text-lg text-navy-800 mb-2">Hours, not weeks</div>
                <p className="font-sans text-sm text-fg2 mb-3">
                  Automated intake collects client information, runs KYC checks, and triggers engagement letter generation in a single workflow. Data is entered once and propagated to billing, CRM, and matter systems automatically.
                </p>
                <p className="font-sans text-sm text-fg2">
                  New engagements move from first contact to signed engagement in hours instead of weeks. The client experience improves, and staff no longer chase missing forms across inboxes and spreadsheets.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
              <p className="sl-body-sm italic mb-3">
                Not sure if AI makes sense for your firm? Start with a $300 Discovery Session. We map your current workflows, identify the highest-impact automation opportunity, and give you a written roadmap whether you hire us or not.
              </p>
              <p className="sl-body-sm">
                Discovery starts at $300. Production-ready automation builds from $1,200. Fully custom integrations and workflows start from $5,000. Every engagement begins with a clear scope and a measurable outcome.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Intelligent Matching</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">LoveFlow</h4>
              <p className="font-sans text-sm text-fg2 mb-4">
                How we built an AI-powered consumer app that demonstrates our pattern matching, data analysis, and workflow automation techniques. The same principles apply directly to document review, time capture, and client onboarding for professional services firms.
              </p>
              <Link href="/case-studies/loveflow" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to optimize your firm?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-3">
            Start with a $300 Discovery Session. 60 minutes. Clear roadmap.
          </p>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">
            Automation builds from $1,200. Custom solutions from $5,000.
          </p>
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
