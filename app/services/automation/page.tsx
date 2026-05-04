import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI Automation — SanLuis AI Solutions',
  description: 'Eliminate manual busywork with intelligent workflow automation. Recover 20-40 hours per week per department with custom AI automation pipelines.',
}

export default function AutomationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="AI Automation."
        description="Automation that recovers 20 to 40 hours per week per department — without breaking your existing tools."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="sl-body-lg max-w-prose mb-6">
            Your team spends hours on work that follows predictable rules: data entry, invoice processing, report generation, email triage. Every minute there is a minute stolen from work that actually needs a human brain.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            We build automation pipelines that read, write, route, and act across your tools. Your people focus on decisions, not data entry.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            Typical projects recover 20 to 40 hours per week. Per department.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </section>

      {/* Case study reference */}
      <div className="border border-navy-200 rounded-xl p-6 md:p-8 mt-12 max-w-prose mx-auto bg-white">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Related Case Study</p>
        <p className="sl-body-sm mb-3">See how we automated lead capture for Susie's Jewelry Repair — 3x leads in 2 weeks.</p>
        <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the case study →</Link>
      </div>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to automate your workflows?</h2>
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
