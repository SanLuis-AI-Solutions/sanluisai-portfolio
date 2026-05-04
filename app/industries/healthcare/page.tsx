import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI for Healthcare. — SanLuis AI Solutions',
  description: 'Administrative burden, prior authorization delays, and patient intake friction drain resources from care. We build AI to eliminate the overhead.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title="AI for Healthcare."
        description="Administrative burden, prior authorization delays, and patient intake friction drain resources from care. We build AI to eliminate the overhead."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_healthcare_00001_.png" alt="Modern AI-enhanced healthcare facility" fill className="object-cover" sizes="100vw" />
          </div>
          <p className="sl-body max-w-prose mb-4">Healthcare providers spend 30% of revenue on administrative overhead. Prior authorization alone costs the industry $350B annually in wasted labor. These are not technology problems -- they are process problems with AI-ready solutions.</p>
          <p className="sl-body max-w-prose mb-4">We build systems that automate prior authorization workflows, streamline patient intake, and reduce documentation burden on clinical staff. The result: faster reimbursements, shorter wait times, and more time for care.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Prior Authorization</div><div className="font-sans text-sm text-fg2 mt-2">Automated submission and tracking, 80% faster.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Patient Intake</div><div className="font-sans text-sm text-fg2 mt-2">Conversational AI that captures complete histories pre-visit.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Documentation</div><div className="font-sans text-sm text-fg2 mt-2">Ambient listening that generates clinical notes in real time.</div></div></div>
          <div className="mt-12">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to transform your healthcare practice?</h2>
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
