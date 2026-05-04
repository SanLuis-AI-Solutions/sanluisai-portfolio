import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI for Real Estate — SanLuis AI Solutions',
  description: 'Investment analysis, lead qualification, and portfolio intelligence — AI systems purpose-built for real estate professionals.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Real Estate."
        description="Investment analysis, lead qualification, and portfolio intelligence — purpose-built for real estate professionals."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_realestate_00001_.png" alt="Modern real estate development" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">Real estate runs on analysis and speed. Every deal evaluation, every investor presentation, every lead follow-up is a race against time. Yet most firms rely on manual spreadsheets for deal analysis, fragmented communication for investor updates, and gut instinct for market timing.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that analyze deals in seconds instead of hours, qualify leads automatically against your investment criteria, and deliver portfolio intelligence that would otherwise require a full-time analyst.</p>
          <p className="sl-body max-w-prose mb-4">Our investment analysis engine ingests property pro-formas and returns LTC loans, ROI, profit margin, and risk scores as inputs change — live. Lead scoring pipelines automatically rank inbound prospects against your acquisition criteria. Portfolio dashboards surface occupancy trends, refinance windows, and market movements in a single view.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div>
              <div className="font-display text-lg text-navy-800">Deal Analysis</div>
              <div className="font-sans text-sm text-fg2 mt-2">AI-powered underwriting that evaluates deals in real time — LTC, ROI, profit margin, risk scoring.</div>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div>
              <div className="font-display text-lg text-navy-800">Lead Qualification</div>
              <div className="font-sans text-sm text-fg2 mt-2">Automated pipeline that scores and routes prospects against your investment criteria.</div>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div>
              <div className="font-display text-lg text-navy-800">Portfolio Intel</div>
              <div className="font-sans text-sm text-fg2 mt-2">Unified dashboard tracking occupancy, refinance windows, and market movements.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build your project?</h2>
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
