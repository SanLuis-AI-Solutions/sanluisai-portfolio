import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Privacy Policy | SanLuis AI Solutions',
  description: 'SanLuis AI Solutions privacy policy — how we collect, use, and protect your data.',
  openGraph: {
    title: 'Privacy Policy | SanLuis AI Solutions',
    description: 'SanLuis AI Solutions privacy policy — how we collect, use, and protect your data.',
    url: 'https://sanluisai-portfolio.vercel.app/privacy',
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
        title="Privacy Policy."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="sl-body mb-4"><strong>Effective Date:</strong> April 28, 2026</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">1. Information We Collect</h2>
          <p className="sl-body mb-4">We collect only the information you voluntarily provide: name, email address, company name, and project details when you book a Discovery Session or contact us directly. We do not use tracking cookies, analytics pixels beyond standard GA4, or third-party advertising networks.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">2. How We Use Your Information</h2>
          <p className="sl-body mb-4">Your information is used solely to provide our services — to contact you about your inquiry, to prepare for Discovery Sessions, and to deliver the AI solutions you hire us to build. We do not sell, rent, or share your data with third parties.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">3. Data Security</h2>
          <p className="sl-body mb-4">We store your information in secure, access-controlled systems. All communication channels use industry-standard encryption. We retain your data only as long as necessary to provide services or as required by law.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">4. Your Rights</h2>
          <p className="sl-body mb-4">You may request access to, correction of, or deletion of your personal data at any time by contacting contact@sanluisai.com. We will respond within 30 days.</p>
          <h2 className="font-display text-xl text-navy-800 mt-8 mb-3">5. Contact</h2>
          <p className="sl-body mb-4">For privacy-related questions: contact@sanluisai.com</p>
        </div>
      </section>
    </>
  )
}
