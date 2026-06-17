import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI for Healthcare. SanLuis AI Solutions',
  description: 'Administrative burden, prior authorization delays, and patient intake friction drain resources from care. We build AI to eliminate the overhead.',
  openGraph: {
    title: 'AI for Healthcare. SanLuis AI Solutions',
    description: 'Cut administrative overhead and accelerate patient intake with AI built for healthcare.',
    url: 'https://sanluisai-portfolio.vercel.app/industries/healthcare',
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
        title="AI for Healthcare."
        description="Administrative burden, prior authorization delays, and patient intake friction drain resources from care. We build AI to eliminate the overhead."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
            <div className="relative w-full h-48 md:h-72 rounded overflow-hidden mb-8 bg-navy-100">
              <Image src="/generated/ind_healthcare_00001_.png" alt="Modern AI-enhanced healthcare facility" fill className="object-cover" sizes="100vw" />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="sl-body max-w-prose mb-4">SanLuis AI Solutions is a Houston-based AI automation company that builds working systems for small and mid-size healthcare practices. Founded by Daniel San Luis, we focus on eliminating the administrative overhead that drains resources from patient care.</p>

            <p className="sl-body max-w-prose mb-4">Healthcare providers spend roughly 30% of revenue on administrative overhead. Prior authorization alone costs the industry an estimated $350B annually in wasted labor. These are not technology problems. They are process problems with AI-ready solutions.</p>

            <p className="sl-body max-w-prose mb-4">Prior authorization is the most common friction point. A single request can require phone calls, faxed forms, medical record retrieval, and follow-up across multiple payers. Staff repeat the same data entry across systems, and approvals that should take hours stretch into days. We build systems that read clinical notes, extract required criteria, and submit structured requests directly to payer portals. Approval cycles compress from days to hours, and staff no longer chase status updates manually.</p>

            <p className="sl-body max-w-prose mb-4">Patient intake is the second leak in the revenue cycle. Incomplete insurance information, missing referral data, and unclear visit reasons create downstream denials and rescheduling. We deploy conversational intake that patients complete on their phone before arrival. The system verifies insurance eligibility, captures chief complaint and medication history, and writes structured data to the EHR. Practices see cleaner schedules, fewer denials, and shorter check-in lines.</p>

            <p className="sl-body max-w-prose mb-4">Documentation burden is the third. Providers spend up to two hours on the EHR for every hour of direct patient care. Ambient listening systems can draft the note in real time, populate diagnosis fields, and queue orders for review. The clinician still signs every entry. The AI simply removes the typing.</p>

            <p className="sl-body max-w-prose mb-4">Our approach is compliance-first. Systems are designed with HIPAA considerations built in from day one. Data stays encrypted, access is logged, and we never train models on patient data.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-8">
              <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
              <p className="sl-body-sm mb-3">Founded by Daniel San Luis and based in Houston, Texas, SanLuis AI Solutions designs every healthcare system with HIPAA-compliant practices: end-to-end encryption, fully audited access, and models that never train on patient data. Everyone has access to the same AI. We build the one system that saves your practice a day a week. We automate prior authorization workflows, streamline patient intake with conversational AI, and generate clinical documentation in real time within your existing EHR ecosystem.</p>
              <p className="sl-body-sm">Pricing is straightforward. Discovery Sessions start at $300. Production automation deployments start at $1,200. Custom integrations and multi-location rollouts start at $5,000.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-4">We build.</h3>
                <ul className="space-y-3 font-sans text-sm text-fg2">
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> HIPAA-compliant prior authorization automation</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Clinical documentation AI and ambient listening workflows</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Conversational patient intake and eligibility verification</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Billing and coding error detection with human review gates</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> EHR-integrated automation with full audit trails</li>
                </ul>
              </div>
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-4">We do not build.</h3>
                <ul className="space-y-3 font-sans text-sm text-fg2">
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Diagnostic algorithms or disease-detection systems</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Clinical decision support tools that recommend treatment</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Anything requiring FDA clearance or medical device classification</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Autonomous patient-facing diagnosis or triage</li>
                  <li className="flex items-start gap-3"><Diamond className="text-gold-600 mt-1" /> Black-box models without human oversight and review</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Prior Authorization</div>
                <div className="font-display text-lg text-navy-800 mb-3">80% faster submissions</div>
                <p className="font-sans text-sm text-fg2 mb-3">We extract clinical criteria from the chart, assemble payer-specific requests, and submit them through the appropriate portal or API. Status tracking runs automatically, so staff know which approvals are pending, denied, or ready for scheduling without making phone calls.</p>
                <p className="font-sans text-sm text-fg2">The result is an approval cycle measured in hours instead of days, fewer delayed procedures, and staff time redirected from fax queues to patient-facing work.</p>
              </div>
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Patient Intake</div>
                <div className="font-display text-lg text-navy-800 mb-3">Hours-to-minutes intake</div>
                <p className="font-sans text-sm text-fg2 mb-3">Patients complete intake on their own device through a guided, conversational flow. The system verifies insurance, confirms referral status, collects medication lists, and captures the reason for the visit in structured format.</p>
                <p className="font-sans text-sm text-fg2">Check-in becomes a confirmation rather than an interrogation. Front-desk staff handle exceptions, not paperwork, and the EHR is populated before the provider enters the room.</p>
              </div>
              <div className="bg-white border border-navy-900 rounded p-6">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Clinical Documentation</div>
                <div className="font-display text-lg text-navy-800 mb-3">40% reduction in documentation time</div>
                <p className="font-sans text-sm text-fg2 mb-3">Ambient listening captures the encounter and drafts the note inside the EHR in real time. The system suggests diagnoses, populates assessment fields, and queues orders for clinician review and signature.</p>
                <p className="font-sans text-sm text-fg2">Providers still control every clinical decision. The AI removes the typing, the after-hours charting, and the repetitive data entry that currently consumes a day a week.</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
            <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
              <p className="sl-body-sm italic">Not sure if AI makes sense for your practice? Start with a $300 Discovery Session. We will map your current operations, identify the highest-impact automation opportunity, and give you a written roadmap. Automation deployments start at $1,200. Custom multi-location or EHR-integrated systems start at $5,000.</p>
              <p className="sl-body-sm italic mt-3">Real client results from SanLuis AI Solutions include 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and 40% better matches for LoveFlow.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Customer Service Automation</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Susie&apos;s Jewelry Repair</h4>
              <p className="font-sans text-sm text-fg2 mb-4">A compliance-conscious customer service automation system that handles sensitive customer data with the same audit, encryption, and review patterns we apply to healthcare workflows.</p>
              <Link href="/case-studies/susies-jewelry-repair" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study
              </Link>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Process Automation</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">LoveFlow</h4>
              <p className="font-sans text-sm text-fg2 mb-4">An AI-powered consumer app demonstrating pattern matching and workflow automation techniques directly applicable to healthcare intake and documentation.</p>
              <Link href="/case-studies/loveflow" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study
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
