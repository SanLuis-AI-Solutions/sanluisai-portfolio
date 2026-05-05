import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'How It Works | 4-Step AI Development Process | SanLuis AI Solutions',
  description: 'From first conversation to working system in four clear stages. Discovery Session ($300), Build ($15K-$50K), Ship (deploy + train), Maintain (monthly). You always know what comes next.',
  openGraph: {
    title: 'How It Works — 4-Step Process | SanLuis AI Solutions',
    description: 'Discovery ($300) → Build ($15K-$50K) → Ship (deploy + train) → Maintain (monthly retainer). Transparent pricing, full source ownership, no lock-in.',
    url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
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
    what: "We design and build your system using the frontier AI models that fit your problem — Gemini, Claude, Codex, Grok. No templates, no feature bloat, no scope creep.",
    deliverable: 'Working system integrated with your existing tools. Full source code ownership. Transparent milestone tracking throughout.',
    cost: '$15,000 – $50,000',
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
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="relative space-y-16 md:space-y-24">
            {/* Vertical connecting line */}
            <div className="hidden md:block absolute left-[22px] top-12 bottom-12 w-px bg-navy-200" />

            {steps.map((step, idx) => (
              <div key={step.num} className="relative flex flex-col md:flex-row gap-6 md:gap-10">
                {/* Number indicator */}
                <div className="relative z-10 flex-shrink-0 flex items-start gap-4 md:flex-col md:items-center">
                  <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gold-100 border-2 border-gold-600">
                    <span className="font-display text-sm text-gold-700 font-semibold">{step.num}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="md:hidden h-10 w-px bg-navy-200 mx-auto" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 bg-white border border-navy-200 rounded p-6 md:p-8 hover:border-navy-900 transition-all duration-220">
                  {/* Tagline */}
                  <div className="font-sans text-xs font-semibold tracking-[0.12em] uppercase text-gold-600 mb-1">
                    {step.tagline}
                  </div>

                  {/* Title */}
                  <h2 className="font-display text-2xl text-navy-800 mb-4">{step.title}</h2>

                  {/* Duration badge */}
                  <div className="inline-block font-sans text-xs font-semibold tracking-[0.08em] uppercase px-3 py-1 bg-bone-100 text-navy-600 rounded-full mb-4">
                    {step.duration}
                  </div>

                  {/* What happens */}
                  <div className="mb-4">
                    <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-navy-500 mb-2">What Happens</h3>
                    <p className="sl-body-sm">{step.what}</p>
                  </div>

                  {/* Deliverable */}
                  <div className="mb-4">
                    <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-navy-500 mb-2">Deliverable</h3>
                    <p className="sl-body-sm">{step.deliverable}</p>
                  </div>

                  {/* Cost */}
                  <div className="pt-4 border-t border-navy-100 flex items-baseline gap-2 flex-wrap">
                    <span className="font-display text-xl text-gold-600">{step.cost}</span>
                    {step.costNote && (
                      <span className="font-sans text-xs text-navy-400">{step.costNote}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
