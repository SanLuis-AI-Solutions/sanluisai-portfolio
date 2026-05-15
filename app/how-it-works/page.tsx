import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import GoldThreadTimeline from '@/components/GoldThreadTimeline'

export const metadata: Metadata = {
  title: 'How It Works | 4-Step AI Development Process | SanLuis AI Solutions',
    description: 'From first conversation to working system in four clear stages. Discovery Session ($300), fixed-price Build (from $1,200), Ship (deploy + train), Maintain (monthly retainer). You always know what comes next.',
  openGraph: {
    title: 'How It Works | 4-Step Process | SanLuis AI Solutions',
    description: 'Discovery ($300) → Build (from $1,200) → Ship (deploy + train) → Maintain (monthly retainer). Transparent pricing, full source ownership, no lock-in.',
    url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const steps = [
  {
    num: '01',
    title: 'Discovery Session',
    tagline: 'Start with clarity.',
    duration: '60 minutes',
    what: "We map your current operations, find the friction points, and pinpoint the single highest-impact AI opportunity for your business.",
    deliverable: 'Written action plan within 24 hours with cost estimates, timeline, and expected ROI.',
    cost: '$300',
    costNote: 'credited toward build if you proceed',
  },
  {
    num: '02',
    title: 'Build',
    tagline: 'From plan to production.',
    duration: 'Custom scope and timeline',
    what: "We design and build your system using the frontier AI models that fit your problem: Gemini, Claude, Codex, Grok. No templates, no feature bloat, no scope creep.",
    deliverable: 'Working system integrated with your existing tools. Full source code ownership. Transparent milestone tracking throughout.',
    cost: '$1,200 – $50,000',
    costNote: 'fixed price agreed before work begins',
  },
  {
    num: '03',
    title: 'Ship',
    tagline: 'Deployed, documented, trained.',
    duration: '1-2 weeks for deployment',
    what: "Deployment isn't the finish line. We configure your environment, migrate data, run production testing, and train your team until the system is stable and your people are confident.",
    deliverable: 'Live production deployment. Team training session. Runbooks and documentation. 30-day post-launch support included.',
    cost: 'Included in Build',
    costNote: 'no additional cost',
  },
  {
    num: '04',
    title: 'Maintain',
    tagline: 'Built to last, built to scale.',
    duration: 'Ongoing',
    what: "Systems need to evolve as your business does. We offer monthly maintenance retainers that include monitoring, performance reporting, and a prioritized enhancement roadmap.",
    deliverable: 'System monitoring and uptime tracking. Quarterly optimization reviews. Priority access for new features.',
    cost: 'Monthly retainer',
    costNote: 'scoped to your needs',
  },
]

const benefits = [
  {
    title: "You never pay for something that wasn't scoped first.",
    description:
      'Every project starts with a Discovery Session. You get a written action plan with cost estimates, timeline, and ROI before any build work begins. No surprises, no scope creep.',
    icon: '01',
  },
  {
    title: 'You own everything we build.',
    description:
      'Full source code ownership. No lock-in, no recurring license fees, no proprietary platforms. What we build is yours to keep, modify, or move however you want.',
    icon: '02',
  },
  {
    title: 'You can scale when you\u2019re ready.',
    description:
      'Add capabilities per-quarter with a prioritized enhancement roadmap. Start with one automation and grow into agent systems, dashboards, and custom apps as your needs evolve.',
    icon: '03',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Process"
        title="How It Works."
        description="Four clear stages from first conversation to working system. You always know what comes next."
      />

      {/* Timeline Steps */}
      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <GoldThreadTimeline steps={steps} />
        </div>
      </section>

      {/* Results at a Glance */}
      <section className="bg-navy-900 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-xs font-semibold tracking-[0.16em] uppercase text-gold-600 mb-4">Results at a Glance</p>
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-10">Real impact. Measured in weeks, not years.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <AnimatedCounter value={85} label="Time saved on manual work" suffix="%" />
            <AnimatedCounter value={40} label="Cost reduction vs. hiring" suffix="%" />
            <AnimatedCounter value={14} label="Average days to first working prototype" suffix="d" />
            <AnimatedCounter value={98} label="Client satisfaction rating" suffix="%" />
          </div>
        </div>
      </section>

      {/* What This Means for You */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-navy-800 mb-2">What This Means for You.</h2>
          <p className="sl-body-sm text-navy-500 mb-12 max-w-2xl">
            Every decision in our process is designed to remove risk and uncertainty from your investment in AI.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.icon} className="bg-bone-50 border border-navy-200 rounded p-6 md:p-8">
                <div className="font-display text-2xl text-gold-600 mb-3">{b.icon}</div>
                <h3 className="font-display text-lg text-navy-800 mb-3">{b.title}</h3>
                <p className="sl-body-sm">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to start your project?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Book a $300 Discovery Session. 60 minutes. Clear roadmap. 24-hour action plan.</p>
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
