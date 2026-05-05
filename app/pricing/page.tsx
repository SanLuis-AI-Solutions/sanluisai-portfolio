import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Pricing — SanLuis AI Solutions',
  description:
    'Fixed-price engagements for every type of AI project. Discovery Session ($300) or Custom Build (from $5,000). You know the cost before we write a single line of code.',
  openGraph: {
    title: 'Pricing — SanLuis AI Solutions',
    description:
      'Simple, transparent pricing for custom AI systems. $300 Discovery Session or Custom Build from $5,000. No hidden fees.',
    url: 'https://sanluisai-portfolio.vercel.app/pricing',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const includedCheck = (
  <svg className="w-4 h-4 shrink-0 text-gold-600 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function PricingCard({
  price,
  label,
  subtitle,
  description,
  items,
  ctaHref,
  ctaLabel,
  primary,
}: {
  price: string
  label: string
  subtitle: string
  description: string
  items: string[]
  ctaHref: string
  ctaLabel: string
  primary: boolean
}) {
  return (
    <div className="bg-white border border-navy-200 rounded-xl p-8 md:p-10 flex flex-col h-full">
      {/* Price */}
      <p className="font-display text-4xl text-gold-600 mb-1">{price}</p>
      <p className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-fg3 mb-4">{subtitle}</p>

      {/* Service name */}
      <h3 className="font-display text-xl text-navy-800 mb-2">{label}</h3>
      <p className="sl-body-sm text-fg3 mb-6">{description}</p>

      {/* Divider */}
      <div className="h-px bg-navy-200 mb-6" />

      {/* What's included */}
      <h4 className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-navy-700 mb-4">What&apos;s Included</h4>
      <ul className="space-y-3 mb-8 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            {includedCheck}
            <span className="sl-body-sm text-fg2">{item}</span>
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="h-px bg-navy-200 mb-6" />

      {/* CTA */}
      <Link
        href={ctaHref}
        className={
          primary
            ? 'inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-navy-800 text-bone-50 hover:bg-gold-600 hover:text-navy-900 transition-all duration-220 rounded'
            : 'inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 border border-navy-200 text-navy-800 hover:bg-navy-800 hover:text-bone-50 transition-all duration-220 rounded'
        }
      >
        {ctaLabel}
      </Link>
    </div>
  )
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing. No surprises."
        description="Fixed-price engagements for every type of AI project. You know the cost before we write a single line of code."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Two-column pricing grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Discovery Session */}
            <PricingCard
              price="$300"
              label="Discovery Session"
              subtitle="One-time"
              description="A focused 60-minute working session to identify your highest-impact AI opportunities and deliver a clear, actionable plan."
              items={[
                '60-min working session',
                'Written action plan within 24 hours',
                'Pricing estimate for any recommended builds',
                'Risk-free: money-back guarantee if you don\'t walk away with clarity',
              ]}
              ctaHref="/booking"
              ctaLabel="Book a Session"
              primary={false}
            />

            {/* Custom Build */}
            <PricingCard
              price="From $5,000"
              label="Custom Build"
              subtitle="Fixed-price per project"
              description="A fully custom AI system or agent built to your exact specifications, deployed and documented with full source ownership."
              items={[
                'Custom AI system or agent',
                'Full source ownership — your IP stays yours',
                'Deployment, training, and documentation included',
                '30 days post-launch support',
                'No recurring license fees',
              ]}
              ctaHref="/booking"
              ctaLabel="Start with a Discovery Session"
              primary={true}
            />
          </div>

          {/* What's Not Included — transparency section */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="bg-bone-100 border border-navy-100 rounded-xl px-6 py-5">
              <p className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-fg3 mb-2">What&apos;s Not Included</p>
              <p className="sl-body-sm text-fg3/80">
                Monthly maintenance retainers available after launch. Complex integrations with legacy systems may require additional scoping. Enterprise-scale deployments billed at $15K–$50K+ depending on scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Not sure which option is right for you?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">
            Start with a $300 Discovery Session. If we find a clear opportunity, we&apos;ll build a detailed proposal — no pressure, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded"
            >
              Book a Discovery Session.
            </Link>
            <a
              href="mailto:contact@sanluisai.com"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 border border-bone-300/30 text-bone-50 hover:border-gold-500 hover:text-gold-500 transition-all duration-220 rounded"
            >
              contact@sanluisai.com
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
