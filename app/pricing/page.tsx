import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import FlameMark from '@/components/FlameMark'

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
  badge,
}: {
  price: string
  label: string
  subtitle: string
  description: string
  items: string[]
  ctaHref: string
  ctaLabel: string
  primary: boolean
  badge?: string
}) {
  return (
    <div className={`relative bg-white border rounded p-8 md:p-10 flex flex-col h-full ${primary ? 'border-gold-500 shadow-goldGlow' : 'border-navy-200'}`}>
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-block font-sans text-xs font-semibold tracking-wider uppercase px-4 py-1 bg-gold-600 text-navy-900 rounded-full">
            {badge}
          </span>
        </div>
      )}
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
        title="Simple pricing, bigger outcomes."
        description="Clear prices. No surprise costs. You know what you pay before any work begins."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Flame mark */}
          <div className="flex items-center justify-center mb-14">
            <FlameMark size="md" />
          </div>

          {/* Four-tier pricing grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Discovery */}
            <PricingCard
              price="$300"
              label="Discovery"
              subtitle="One-time"
              description="Know your next move. A 60-minute working session that delivers your roadmap and confirms if AI makes sense for your business. Money-back if we do not find 3 ways to save you time."
              items={[
                '60-90 minute working session',
                'We map your current operations and find the highest-leverage process to automate',
                'Written action plan with cost estimates, timeline, and ROI delivered within 24 hours',
                'This is the natural first step. Low risk. High clarity.',
                'Money-back guarantee: if we do not find 3 ways to save you time, the session is free',
              ]}
              ctaHref="/booking"
              ctaLabel="Book a Discovery Session"
              primary={false}
            />

            {/* Automation */}
            <PricingCard
              price="$1,200+"
              label="Automation"
              subtitle="Fixed price"
              description="One task, fully automated. You tell us which manual job eats the most time each week. We build a tool that handles it from start to finish. The work still gets done. Your team just does not have to do it anymore."
              items={[
                'One task automated end-to-end',
                'You pick the process that eats the most time. We build a system that handles it completely',
                'Full source code ownership. No lock-in. No license fees.',
                'Deployment, team training, and documentation included',
                '30-day post-launch support',
              ]}
              ctaHref="/booking"
              ctaLabel="Start with Automation"
              primary={true}
              badge="Most Popular"
            />

            {/* Agent Systems */}
            <PricingCard
              price="$5,000+"
              label="Agent Systems"
              subtitle="Fixed price"
              description="An agent that monitors, decides, and acts. Not a chatbot that waits for instructions. It watches your data, makes decisions within its boundaries, and takes action without waiting for approval. It escalates only what it cannot handle on its own."
              items={[
                'An autonomous system that makes decisions and takes action',
                'Not a chatbot. Not a passive tool. An agent that monitors, decides, and executes',
                'Handles exceptions, escalates when needed, learns from outcomes',
                'Full source ownership. Deployed to your environment.',
              ]}
              ctaHref="/booking"
              ctaLabel="Build an Agent System"
              primary={false}
            />

            {/* AI Consulting */}
            <PricingCard
              price="Custom pricing"
              label="AI Consulting"
              subtitle="Book a call to discuss"
              description="Ongoing strategic advisory for businesses that are building with AI. Technology evaluation, vendor assessment, architecture review, and implementation oversight. You get experienced technical leadership without hiring a full-time executive."
              items={[
                'Strategic guidance aligned with your business goals and industry',
                'Technology evaluation with benchmarks on your data',
                'Vendor assessment covering lock-in risk, data privacy, and scalability',
                'Architecture review and implementation oversight throughout the build',
              ]}
              ctaHref="/booking"
              ctaLabel="Book a call"
              primary={false}
            />

            {/* Custom AI */}
            <PricingCard
              price="$5,000+"
              label="Custom AI"
              subtitle="Fixed price"
              description="Built from the ground up for your specific business. Your data. Your tools. We design it to fit your operation exactly, build it with the best AI for your problem, and deliver a tool your team can use from day one."
              items={[
                'Built for your specific data, tools, or product',
                'Trained on your proprietary data. Integrated with your existing tools.',
                'Architecture blueprint, deployment, training, documentation',
                'Full source ownership. No recurring license fees.',
              ]}
              ctaHref="/booking"
              ctaLabel="Build Custom AI"
              primary={false}
            />

            {/* Maintenance Retainer */}
            <PricingCard
              price="10%"
              label="Maintenance Retainer"
              subtitle="Of original build cost, billed monthly"
              description="Your system stays reliable, up to date, and optimized as your business evolves. Includes monitoring, uptime tracking, performance reporting, priority access for new features, and quarterly optimization reviews. If something breaks, we fix it."
              items={[
                'System monitoring and uptime tracking with proactive alerts',
                'Quarterly optimization reviews to catch drift and improve performance',
                'Priority access for new features and adjustments',
                'No long-term commitment. Month-to-month. Cancel anytime.',
              ]}
              ctaHref="/booking"
              ctaLabel="Set Up a Retainer"
              primary={false}
            />
          </div>

          {/* Simple note */}
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <div className="bg-bone-100 border border-navy-100 rounded px-6 py-5">
              <p className="sl-body-sm text-fg3/80">
                All prices are fixed and agreed before work begins. Every project includes setup, team training, documentation, and 30 days of post-launch support.
              </p>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Dark CTA section */}
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
