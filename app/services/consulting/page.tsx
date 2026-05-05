import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI Consulting — SanLuis AI Solutions',
  description: "Every vendor promises AI will transform your business. Nobody tells you if it actually applies to YOUR operation. A structured 60-minute audit that tells you where AI creates leverage — and where it's a waste of money.",
}

export default function ConsultingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Service"
        title="AI Consulting."
        description="Every vendor promises AI will transform your business. Nobody tells you if it actually applies to YOUR operation. You need honest answers before you spend a dollar."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="sl-body-lg max-w-prose mb-6">
            A structured 60-minute audit that identifies exactly where AI creates leverage for your business — and where it&rsquo;s a waste of money. We don&rsquo;t pitch you from a script. We walk through your actual operations: the workflows, the bottlenecks, the spreadsheets held together by hope.
          </p>
          <p className="sl-body-lg max-w-prose mb-6">
            <strong className="text-navy-800">What you get:</strong> A written roadmap with cost estimates, timeline projections, and a risk assessment for every initiative. If something doesn&rsquo;t make sense for AI, we will tell you flat out. That is the point of the exercise.
          </p>
          <p className="sl-body-lg max-w-prose mb-8">
            <strong className="text-navy-800">The relief of clarity:</strong> No more &ldquo;we should do something with AI.&rdquo; You leave with a prioritised action plan aligned to your budget, your team, and your actual business goals.
          </p>
          <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </section>

      {/* Case study reference */}
      <div className="border border-navy-200 rounded-xl p-6 md:p-8 mt-12 max-w-prose mx-auto bg-white">
        <p className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Related Case Study</p>
        <p className="sl-body-sm mb-3">See how our consulting engagement helped Garza International achieve 60% faster quoting in a 3-week engagement.</p>
        <Link href="/case-studies/garza-international" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Read the case study →</Link>
      </div>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to get started?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Book a $300 Discovery Session. 60 minutes. Clear roadmap.</p>
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
