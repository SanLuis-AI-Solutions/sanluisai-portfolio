import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CTA from '@/components/CTA'

export const metadata: Metadata = {
  title: 'Terms of Service | SanLuis AI Solutions',
  description: 'SanLuis AI Solutions terms of service — engagement model, IP ownership, payment terms, and liability.',
  openGraph: {
    title: 'Terms of Service | SanLuis AI Solutions',
    description: 'SanLuis AI Solutions terms of service — engagement model, IP ownership, payment terms, and liability.',
    url: 'https://sanluisai-portfolio.vercel.app/terms',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service."
      />

      <AnimatedSection delay={0}><section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="sl-body mb-4"><strong>Effective Date:</strong> April 28, 2026</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">1. Engagement Model</h2>
          <p className="sl-body mb-4">All engagements begin with a paid Discovery Session ($300). This session produces a written action plan with scope, timeline, and pricing. No work begins until both parties agree in writing to a formal proposal.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">2. Intellectual Property</h2>
          <p className="sl-body mb-4">Upon full payment, all custom-built code, models, and documentation become your property. SanLuis AI retains no rights, liens, or usage restrictions on delivered work. You own what you pay for.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">3. Payment Terms</h2>
          <p className="sl-body mb-4">Discovery Session: $300 due at booking. Project work: 50% due at contract signing, 50% due at delivery. All prices are in USD. Late payments may incur a 1.5% monthly service charge.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">4. Limitation of Liability</h2>
          <p className="sl-body mb-4">SanLuis AI Solutions' liability is limited to the total fees paid for the specific engagement. We are not liable for consequential, indirect, or incidental damages arising from the use of delivered systems.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">5. Contact</h2>
          <p className="sl-body mb-4">For terms-related questions: contact@sanluisai.com</p>
        </div>
      </section></AnimatedSection>
      <CTA />
    </>
  )
}
