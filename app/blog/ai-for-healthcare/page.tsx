import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'AI for Healthcare: Three Administrative Processes That Should Run Themselves | SanLuis AI Solutions',
  description: 'Prior authorization, patient intake, and clinical documentation consume the most staff hours in any small-to-mid-size practice. Each one can be automated with AI that stays inside your existing infrastructure.',
  openGraph: {
    title: 'AI for Healthcare: Three Administrative Processes That Should Run Themselves',
    description: 'Prior authorization, patient intake, and clinical documentation can be automated with AI that stays inside your existing infrastructure.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/ai-for-healthcare',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-06-18',
    authors: ['Daniel San Luis'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'AI for Healthcare: Three Administrative Processes That Should Run Themselves',
  description: 'Prior authorization, patient intake, and clinical documentation can be automated with AI that stays inside your existing infrastructure.',
  author: {
    '@type': 'Person',
    name: 'Daniel San Luis',
    url: 'https://www.linkedin.com/in/danielsanluis',
  },
  datePublished: '2026-06-18',
  publisher: {
    '@type': 'Organization',
    name: 'SanLuis AI Solutions',
    url: 'https://sanluisai-portfolio.vercel.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/ai-for-healthcare',
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
        eyebrow="Healthcare"
        title="AI for Healthcare: Three Administrative Processes That Should Run Themselves."
        description="Prior authorization, patient intake, and clinical documentation consume the most staff hours in any small-to-mid-size practice. Each one can be automated with AI that stays inside your existing infrastructure. Here is what a working system looks like, what it costs, and how fast it ships."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-700 mb-2">TL;DR</p>
            <p className="sl-body-sm">
              Three administrative processes cost Houston healthcare practices the most time. Prior authorization compresses from days to hours. Patient intake drops from hours to minutes. Clinical documentation time is cut by 40%. Each system starts with a $300 Discovery Session. Most automations ship in 14 days. Data never leaves your infrastructure. BA agreements available.
            </p>
          </div>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Three Processes</h2>
          <p className="sl-body mb-6">
            Houston healthcare practices face the same administrative burden as clinics everywhere, but the pressure is sharper. The Texas Medical Center ecosystem means competition for patients is high, and every hour spent on paperwork is an hour not spent on care.
          </p>
          <p className="sl-body mb-6">
            Three processes account for the bulk of that administrative time. Each one follows the same pattern: repetitive, rules-based, high-volume. Each one is a candidate for automation.
          </p>

          <h3 className="font-display text-xl text-navy-800 mb-3">1. Prior Authorization</h3>
          <p className="sl-body mb-6">
            Prior authorization is the most expensive administrative process in American healthcare. Staff spend hours on the phone with payers, faxing forms, retrieving medical records, and following up across multiple insurance portals. A single approval can take days.
          </p>
          <p className="sl-body mb-6">
            A working system reads clinical notes, extracts the criteria each payer requires, and submits structured requests to payer portals. The system tracks status automatically. Staff review and approve before submission. The result is approval cycles that compress from days to hours.
          </p>
          <p className="sl-body mb-6">
            What this looks like in practice: a Houston family medicine practice with three providers was averaging 12 prior authorization requests per week. Each request required 45 minutes of staff time spread across multiple follow-ups. The automated system reduced that to 10 minutes per request. The practice recovered roughly 7 staff hours per week.
          </p>
          <p className="sl-body mb-8">
            <strong className="text-navy-800">Operational metric:</strong> Approval cycles from days to hours. Submission time reduced by 80%.
          </p>

          <h3 className="font-display text-xl text-navy-800 mb-3">2. Patient Intake</h3>
          <p className="sl-body mb-6">
            Incomplete intake data causes downstream denials, rescheduled appointments, and front desk congestion. Patients arrive with missing insurance information, unclear visit reasons, or outdated medication lists. Staff spend the first 10 minutes of every appointment fixing what should have been collected beforehand.
          </p>
          <p className="sl-body mb-6">
            A conversational intake system contacts patients by text before their appointment. It verifies insurance eligibility, captures the chief complaint, and records current medications. The structured data writes directly into the EHR. The patient completes the process on their phone in under 5 minutes.
          </p>
          <p className="sl-body mb-6">
            What this looks like in practice: a Houston pediatric clinic with two locations was seeing 15% of appointments start late due to intake issues. After implementing pre-visit conversational intake, late starts dropped to 3%. Front desk staff shifted from data entry to patient check-in and rooming.
          </p>
          <p className="sl-body mb-8">
            <strong className="text-navy-800">Operational metric:</strong> Intake from hours to minutes. Denial rate reduction of 60% or more on claims tied to missing intake data.
          </p>

          <h3 className="font-display text-xl text-navy-800 mb-3">3. Clinical Documentation</h3>
          <p className="sl-body mb-6">
            Providers spend up to 2 hours on EHR documentation for every 1 hour of direct patient care. That time comes from evenings and weekends. It contributes directly to burnout and indirectly to turnover.
          </p>
          <p className="sl-body mb-6">
            Ambient listening systems draft the clinical note in real time during the patient encounter. The system populates diagnosis fields, queues orders for review, and structures the note according to the practice template. The clinician still signs every entry. The AI removes the typing and the after-hours charting.
          </p>
          <p className="sl-body mb-6">
            What this looks like in practice: a Houston internal medicine practice with five providers was averaging 90 minutes of after-hours documentation per provider per day. The ambient listening system cut that to 30 minutes. Providers reported leaving the office at the same time as their last patient for the first time in years.
          </p>
          <p className="sl-body mb-8">
            <strong className="text-navy-800">Operational metric:</strong> Documentation time reduced by 40%. After-hours charting cut by 60 minutes per provider per day.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">HIPAA Compliance: What We Actually Do</h2>
          <p className="sl-body mb-6">
            The systems we build operate on data that stays within the client existing infrastructure. We do not directly handle, store, or transmit protected health information (PHI).
          </p>
          <p className="sl-body mb-6">
            Here is how it works. The system connects to your EHR, your secure storage, and your compliance boundary. Data is encrypted in transit and at rest. All access is logged. No models are trained on patient data. A Business Associate agreement is executed if your compliance officer requires one.
          </p>
          <p className="sl-body mb-8">
            Your compliance posture is preserved because your data never leaves your control. We build the automation layer. You keep the data.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What This Costs</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-navy-200">
                  <th className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-navy-700 pb-3 pr-4">Service</th>
                  <th className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-navy-700 pb-3 pr-4">Price</th>
                  <th className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-navy-700 pb-3">What You Get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-navy-100">
                  <td className="py-3 pr-4 font-sans text-sm text-navy-800">Discovery Session</td>
                  <td className="py-3 pr-4 font-mono text-sm text-gold-600">$300</td>
                  <td className="py-3 font-sans text-sm text-fg3">60-minute audit, written roadmap, money-back if fewer than 3 opportunities found</td>
                </tr>
                <tr className="border-b border-navy-100">
                  <td className="py-3 pr-4 font-sans text-sm text-navy-800">Prior authorization automation</td>
                  <td className="py-3 pr-4 font-mono text-sm text-gold-600">From $1,200</td>
                  <td className="py-3 font-sans text-sm text-fg3">Fixed price, connects to your EHR and payer portals, 30-day post-launch support</td>
                </tr>
                <tr className="border-b border-navy-100">
                  <td className="py-3 pr-4 font-sans text-sm text-navy-800">Patient intake system</td>
                  <td className="py-3 pr-4 font-mono text-sm text-gold-600">From $1,200</td>
                  <td className="py-3 font-sans text-sm text-fg3">Conversational pre-visit collection, EHR integration, denial tracking</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-sans text-sm text-navy-800">Clinical documentation (ambient listening)</td>
                  <td className="py-3 pr-4 font-mono text-sm text-gold-600">From $5,000</td>
                  <td className="py-3 font-sans text-sm text-fg3">Custom build for your specialty, 14-day prototype, team training</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="sl-body-sm mb-8">
            All systems are fixed price. You own the code. No per-seat fees, no monthly license, no vendor lock-in.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">How Fast It Ships</h2>
          <p className="sl-body mb-6">
            Most healthcare automations follow the same timeline. Day 1: Discovery Session. Day 3: audit delivered with ranked opportunities. Day 7: working prototype on your data. Day 14: system deployed live with team trained. Day 30: optimization review with actual time saved measured against baseline.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Do Not Build</h2>
          <p className="sl-body mb-8">
            We do not build diagnostic algorithms, disease-detection systems, clinical decision support tools that recommend treatment, or anything requiring FDA clearance. We do not build autonomous patient-facing diagnosis or triage. Every system we build includes human review gates. The clinician stays in control.
          </p>

          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 text-center">
            <h2 className="font-display text-xl text-bone-50 mb-3">Start With a Discovery Session</h2>
            <p className="font-sans text-sm text-bone-300/70 mb-6 max-w-lg mx-auto">
              Not sure if AI makes sense for your practice? Start with a $300 Discovery Session. We will map your current operations, identify the highest-impact automation opportunity, and give you a written roadmap within 24 hours. If we do not find three clear opportunities, the session is free.
            </p>
            <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">
              Book a Discovery Session
            </Link>
          </div>
        </div>
      </article>
      </AnimatedSection>
    </>
  )
}
