import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import FlameMark from '@/components/FlameMark'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Pricing | SanLuis AI Solutions',
  description:
    'AI Discovery $300. Automation from $1,200. Agent Systems from $5,000. Custom AI from $5,000. Fixed prices, full source ownership, no lock-in.',
  openGraph: {
    title: 'Pricing | SanLuis AI Solutions',
    description:
      'AI Discovery $300. Automation from $1,200. Agent Systems from $5,000. Custom AI from $5,000. Fixed prices, full source ownership, no lock-in.',
    url: 'https://sanluisai-portfolio.vercel.app/pricing',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const tiers = [
  {
    name: 'Discovery',
    price: '$300',
    subtitle: 'One-time',
    description: 'Know your next move. A 60-minute working session that delivers your roadmap and confirms if AI makes sense for your business.',
    items: [
      '60-90 minute working session',
      'Operations map with highest-leverage process identified',
      'Written action plan with cost estimates, timeline, and ROI',
      'Money-back guarantee: if we do not find 3 ways to save you time, the session is free',
    ],
    cta: 'Book a Discovery Session',
    ctaHref: '/booking',
    highlighted: false,
  },
  {
    name: 'Automation',
    price: 'From $1,200',
    subtitle: 'Fixed price',
    description: 'One task, fully automated. You tell us which manual job eats the most time each week. We build a tool that handles it completely.',
    items: [
      'One task automated end-to-end',
      'Full source code ownership. No lock-in. No license fees.',
      'Deployment, team training, and documentation included',
      '30-day post-launch support',
      'If it does not pay for itself in 6 months, we fix it free',
    ],
    cta: 'Start with Automation',
    ctaHref: '/booking',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Agent Systems',
    price: 'From $5,000',
    subtitle: 'Fixed price',
    description: 'An agent that monitors, decides, and acts. Not a chatbot. It watches your data, makes decisions within its boundaries, and escalates only what it cannot handle.',
    items: [
      'Autonomous system that makes decisions and takes action',
      'Handles exceptions, escalates when needed, learns from outcomes',
      'Full audit logging with timestamp, input, decision rationale',
      'Full source ownership. Deployed to your environment.',
    ],
    cta: 'Build an Agent System',
    ctaHref: '/booking',
    highlighted: false,
  },
]

const additional = [
  { name: 'Custom AI Systems', price: 'From $5,000', href: '/services/custom-ai' },
  { name: 'AI Consulting', price: 'Custom pricing', href: '/services/consulting' },
  { name: 'Maintenance Retainer', price: '10% of build cost/mo', href: '/services' },
]

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd />
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing, bigger outcomes."
        description="Clear prices. No surprise costs. You know what you pay before any work begins."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-14">
            <FlameMark size="md" />
          </div>

          {/* 3-tier comparison table — mobile first: single column, desktop: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col bg-white border rounded p-6 md:p-8 ${
                  tier.highlighted
                    ? 'border-gold-500 shadow-[0_0_0_1px_rgba(217,164,52,0.5),0_18px_50px_-28px_rgba(217,164,52,0.25)] ring-1 ring-gold-500/30'
                    : 'border-navy-200'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-block font-sans text-xs font-semibold tracking-wider uppercase px-4 py-1 bg-gold-600 text-navy-900 rounded-full whitespace-nowrap">
                      {tier.badge}
                    </span>
                  </div>
                )}
                <div className="mb-6">
                  <p className="font-display text-3xl md:text-4xl text-gold-600 mb-1">{tier.price}</p>
                  <p className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-fg3">{tier.subtitle}</p>
                </div>
                <h3 className="font-display text-xl text-navy-800 mb-2">{tier.name}</h3>
                <p className="sl-body-sm text-fg3 mb-6">{tier.description}</p>
                <div className="h-px bg-navy-200 mb-6" />
                <h4 className="font-sans text-xs font-semibold tracking-[0.06em] uppercase text-navy-700 mb-4">What&apos;s Included</h4>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 shrink-0 text-gold-600 mt-0.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="sl-body-sm text-fg2">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="h-px bg-navy-200 mb-6" />
                <Link
                  href={tier.ctaHref}
                  className={
                    tier.highlighted
                      ? 'inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-navy-800 text-bone-50 hover:bg-gold-600 hover:text-navy-900 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-220 rounded'
                      : 'inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 border border-navy-200 text-navy-800 hover:bg-navy-800 hover:text-bone-50 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-220 rounded'
                  }
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* Additional services row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {additional.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="bg-bone-100 border border-navy-200 rounded p-5 text-center hover:border-gold-500/50 hover:bg-bone-50 transition-all duration-200 group"
              >
                <div className="font-display text-lg text-navy-800 mb-1 group-hover:text-gold-700 transition-colors">{s.name}</div>
                <div className="font-sans text-sm text-gold-600 font-semibold">{s.price}</div>
              </Link>
            ))}
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-bone-100 border border-navy-100 rounded px-6 py-5">
              <p className="sl-body-sm text-fg3/80">
                All prices are fixed and agreed before work begins. Every project includes setup, team training, documentation, and 30 days of post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Not sure where to start? Begin with a $300 Discovery Session.</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">
            Start with a $300 Discovery Session. If we find a clear opportunity, we will build a detailed proposal: no pressure, no commitment. Money-back if we do not find 3 ways to save you time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded"
            >
              Book a Discovery Session
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
