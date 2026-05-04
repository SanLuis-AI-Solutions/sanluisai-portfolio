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

          <p className="sl-body max-w-prose mb-4">Healthcare providers spend roughly 30% of revenue on administrative overhead. Prior authorization alone costs the industry an estimated $350B annually in wasted labor. These are not technology problems — they are process problems with AI-ready solutions.</p>

          <p className="sl-body max-w-prose mb-4">We build systems that automate prior authorization workflows, streamline patient intake, and reduce documentation burden on clinical staff. The result: faster reimbursements, shorter wait times, and more time for actual patient care.</p>

          <p className="sl-body max-w-prose mb-4">Our approach is compliance-first. Systems are designed with HIPAA considerations built in from day one. Data stays encrypted, access is logged, and we never train models on patient data.</p>

          <div className="bg-gold-50 border border-gold-300 rounded-lg p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">We build custom AI systems for healthcare providers that are HIPAA-compliant by design. Our solutions automate prior authorization workflows, streamline patient intake with conversational AI, and generate clinical documentation in real time — all within your existing EHR ecosystem. Data stays encrypted end-to-end, access is fully audited, and models never train on patient data.</p>
            <p className="sl-body-sm">Our work spans healthcare-adjacent industries too — see how we helped <Link href="/case-studies/susies-jewelry-repair" className="text-gold-600 underline hover:text-gold-700">Susie&apos;s Jewelry Repair</Link> automate customer service workflows with similar compliance-conscious design patterns.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Prior Authorization</div>
              <div className="font-display text-lg text-navy-800 mb-2">80% faster submissions</div>
              <div className="font-sans text-sm text-fg2">Automated submission and tracking that cuts the approval cycle from days to hours.</div>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Patient Intake</div>
              <div className="font-display text-lg text-navy-800 mb-2">Conversational intake</div>
              <div className="font-sans text-sm text-fg2">AI that captures complete patient histories before they walk in — no clipboard required.</div>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Clinical Documentation</div>
              <div className="font-display text-lg text-navy-800 mb-2">Notes in real time</div>
              <div className="font-sans text-sm text-fg2">Ambient listening that generates clinical notes during the visit, not after hours.</div>
            </div>
          </div>

          <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
            <p className="sl-body-sm italic">Not sure if AI makes sense for your practice? Start with a $300 Discovery Session. We will map your current operations, identify the highest-impact automation opportunity, and give you a written roadmap — whether you hire us or not.</p>
          </div>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Customer Service Automation</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Susie&apos;s Jewelry Repair</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we built a HIPAA-adjacent, compliance-first customer service automation system for a retail jewelry business — demonstrating our methodology for handling sensitive customer data.</p>
              <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Process Automation</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">LoveFlow</h4>
              <p className="font-sans text-sm text-fg2 mb-4">An AI-powered consumer app demonstrating pattern matching and workflow automation techniques directly applicable to healthcare intake and documentation.</p>
              <Link href="/case-studies/loveflow" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to reduce administrative overhead?</h2>
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
