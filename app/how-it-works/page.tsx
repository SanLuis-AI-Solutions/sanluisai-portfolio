import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import GoldThreadTimeline from '@/components/GoldThreadTimeline'
import ProcessTextReveal from '@/components/ProcessTextReveal'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'How It Works | 4-Step AI Development Process | SanLuis AI Solutions',
  description: 'Working with SanLuis AI feels clear and predictable. Four stages from conversation to working system: Discover, Build, Ship, and Maintain. You always know what comes next.',
  openGraph: {
    title: 'How It Works | 4-Step Process | SanLuis AI Solutions',
    description: 'Discovery → Build → Ship → Maintain. A clear, predictable process from first conversation to working AI system.',
    url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const howToLdJson = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Custom AI System Built for Your Business',
  description: 'A clear, predictable process from first conversation to working AI system. Four stages: Discover, Build, Ship, Maintain.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Discover',
      url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
      description: 'Book a $300 Discovery Session. We map your operations, identify the highest-impact process to automate, and deliver a written action plan within 24 hours.',
      duration: 'PT60M',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Build',
      url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
      description: 'We design and build your system using frontier AI models. Scoped in advance, broken into milestones, reviewed with you at every stage. Fixed price agreed before work begins.',
      duration: 'P2W',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Ship',
      url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
      description: 'Deployed to your environment. Production testing with your team. Full runbooks and documentation. 30-day post-launch support included.',
      duration: 'P2W',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Maintain',
      url: 'https://sanluisai-portfolio.vercel.app/how-it-works',
      description: 'Monthly maintenance retainers with monitoring, uptime tracking, performance reporting, and quarterly optimization reviews.',
    },
  ],
}

const steps = [
  {
    num: '01',
    title: 'DISCOVER',
    tagline: 'One session, find the highest-leverage process to automate.',
    duration: '60-90 minutes',
    what: "We start with a single working session where we map your operations, identify the friction points, and pinpoint the single highest-impact opportunity. You do not need a polished spec or a technical background. We ask the right questions, review your current tools and workflows, and translate what we learn into a clear path forward. Within 24 hours, you receive a written action plan with cost estimates, timeline, and expected ROI.",
    deliverable: 'Written action plan within 24 hours with cost estimates, timeline, and expected ROI.',
    cost: '$300',
    costNote: 'credited toward build if you proceed',
  },
  {
    num: '02',
    title: 'BUILD',
    tagline: 'We build the system, you review it.',
    duration: '2-4 weeks for a single process automation',
    what: "From plan to production, we design and build your system using the frontier AI models that fit your problem: Claude, GPT, Gemini. No templates. No feature bloat. No scope creep. Each build is scoped in advance, broken into milestones, and reviewed with you before it moves forward. You see progress at every stage, and nothing ships without your sign-off. Builds typically take two to four weeks for a single process automation.",
    deliverable: 'Working system integrated with your existing tools. Full source code ownership. Transparent milestone tracking throughout.',
    cost: '$1,200 – $50,000',
    costNote: 'fixed price agreed before work begins',
  },
  {
    num: '03',
    title: 'SHIP',
    tagline: 'Deployed to your environment, tested with you.',
    duration: '1-2 weeks for deployment',
    what: "Deployment is not the finish line. We configure your environment, migrate any required data, run production testing alongside your team, and train your people until they are confident with the system. You get full runbooks and documentation. We do not hand the system off and disappear. We stay until it is stable, your team knows how to use it, and the business outcome you paid for is real. Deployment takes one to two weeks.",
    deliverable: 'Live production deployment. Team training session. Runbooks and documentation. 30-day post-launch support included.',
    cost: 'Included in Build',
    costNote: 'no additional cost',
  },
  {
    num: '04',
    title: 'MAINTAIN',
    tagline: 'We own it after go-live. It does not become your problem.',
    duration: 'Ongoing',
    what: "Systems need to evolve as your business does. We offer monthly maintenance retainers that include monitoring, uptime tracking, performance reporting, priority access for new features, and quarterly optimization reviews. If something breaks, we fix it. If the model drifts or the workflow changes, we adjust it. You never wonder if it is still working. You never need to hire an internal engineer just to keep it alive.",
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
      <BreadcrumbJsonLd />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLdJson) }}
      />
      <PageHeader
        eyebrow="The Process"
        title="How It Works."
        description="A clear, predictable process from first conversation to working AI system. You always know what comes next."
      />

      <ProcessTextReveal />

      {/* Timeline Steps */}
      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-sm md:text-base text-navy-600 mb-10 max-w-2xl">
            Working with SanLuis AI should feel clear from the first call. We do not bury the process under jargon or hand you a black box. Each stage has one job, one outcome, and one moment where you decide whether to move forward. Here is exactly how we take an idea and turn it into a system your team actually uses.
          </p>
          <GoldThreadTimeline steps={steps} />
        </div>
      </section>

      {/* What a real timeline looks like */}
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-navy-800 mb-6">What a real timeline looks like.</h2>
          <p className="sl-body-sm text-fg2 mb-8 max-w-2xl">
            Every project follows the same four stages, but the calendar varies by scope. Here is what a typical automation project looks like from booking to deployment.
          </p>
          <div className="bg-white border border-navy-200 rounded p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 font-mono text-xs text-gold-600 font-semibold">Day 1</div>
                <div>
                  <div className="font-display text-navy-800 mb-1">Discovery Session</div>
                  <p className="font-sans text-sm text-fg3">60-minute working session. We map your operation, identify the highest-impact process, and confirm the scope. You leave with a written action plan within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 font-mono text-xs text-gold-600 font-semibold">Day 3</div>
                <div>
                  <div className="font-display text-navy-800 mb-1">Roadmap Delivered</div>
                  <p className="font-sans text-sm text-fg3">Ranked opportunities with cost estimates, timeline, and expected ROI. You decide which process to automate first. Fixed price agreed before any build work begins.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 font-mono text-xs text-gold-600 font-semibold">Day 7</div>
                <div>
                  <div className="font-display text-navy-800 mb-1">Working Prototype</div>
                  <p className="font-sans text-sm text-fg3">You see the system running on your data. This is where edge cases surface and get fixed before deployment. You approve the prototype before we move to production.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 font-mono text-xs text-gold-600 font-semibold">Day 14</div>
                <div>
                  <div className="font-display text-navy-800 mb-1">Live Deployment</div>
                  <p className="font-sans text-sm text-fg3">System deployed to your environment. Team trained. Baseline metrics set against the old process. You see the result, not a presentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-20 font-mono text-xs text-gold-600 font-semibold">Day 30</div>
                <div>
                  <div className="font-display text-navy-800 mb-1">Optimization Review</div>
                  <p className="font-sans text-sm text-fg3">We measure actual time saved against the baseline. If the numbers are not there, we adjust the scope at no cost. The system keeps delivering as your business evolves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Which path is right for you */}
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-navy-800 mb-6">Which path is right for you.</h2>
          <p className="sl-body-sm text-fg2 mb-8 max-w-2xl">
            Not every business needs the same starting point. Here is how to decide which engagement fits your situation.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-mono text-[10px] tracking-[0.08em] uppercase bg-gold-100 text-gold-700 px-2 py-0.5 rounded inline-block mb-3">Start Here</div>
              <h3 className="font-display text-lg text-navy-800 mb-2">Not sure what you need</h3>
              <p className="font-sans text-sm text-fg3 mb-4">You know AI matters but do not have a clear plan. Start with a $300 Discovery Session. We map your operation, identify the highest-impact opportunity, and give you a written roadmap.</p>
              <Link href="/services/discovery-session" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Learn about Discovery Session &rarr;</Link>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-mono text-[10px] tracking-[0.08em] uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded inline-block mb-3">Know the Problem</div>
              <h3 className="font-display text-lg text-navy-800 mb-2">You know which process to fix</h3>
              <p className="font-sans text-sm text-fg3 mb-4">You can point to the task that eats a day every week. Start with a Discovery Session to confirm the scope, then move directly to a fixed-price build.</p>
              <Link href="/services/automation" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">See automation pricing &rarr;</Link>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-mono text-[10px] tracking-[0.08em] uppercase bg-navy-100 text-navy-700 px-2 py-0.5 rounded inline-block mb-3">Need Guidance</div>
              <h3 className="font-display text-lg text-navy-800 mb-2">You need strategic advice</h3>
              <p className="font-sans text-sm text-fg3 mb-4">You have a team or a clear direction but need expert guidance on architecture, vendor selection, or implementation oversight. Start with AI Consulting.</p>
              <Link href="/services/consulting" className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 transition-colors">Learn about AI Consulting &rarr;</Link>
            </div>
          </div>
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
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-4">
            Book a $300 Discovery Session. 60 minutes. Clear roadmap. 24-hour action plan.
          </p>
          <p className="font-sans text-sm font-light text-bone-300/60 mb-8">
            Here is what this costs.{' '}
            <Link href="/pricing" className="text-gold-500 hover:text-gold-400 underline underline-offset-4">
              See our pricing.
            </Link>
          </p>
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
