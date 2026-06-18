import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import OrnamentDivider from '@/components/OrnamentDivider'
import FlameMark from '@/components/FlameMark'

export const metadata: Metadata = {
  title: 'About Daniel San Luis and SanLuis AI Solutions | Houston AI',
  description: 'Everyone has access to the same AI. We build the one system that saves you a day a week. Founder led. Based in Houston. Discovery to deployment in weeks.',
  openGraph: {
    title: 'About Daniel San Luis and SanLuis AI Solutions | Houston AI',
    description: 'Everyone has access to the same AI. We build the one system that saves you a day a week. Founder led. Based in Houston. Discovery to deployment in weeks.',
    url: 'https://sanluisai-portfolio.vercel.app/about',
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
        eyebrow="Why We Exist"
        title="We saw a gap in what AI actually delivers."
        description="Not another chatbot company. Not another consulting firm. We build working systems that save you a day a week. Every single week."
      />

      {/* Light content section */}
      <AnimatedSection delay={0}>
      <main className="bg-bone-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Flame mark */}
          <div className="flex items-center justify-center mb-16">
            <FlameMark size="md" />
          </div>

          {/* Narrative: The Problem */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-6">The problem we saw</h2>
            <p className="sl-body mb-4">
              Everyone has access to the same AI. Claude, GPT, Gemini. The same frontier models that power the most advanced labs on the planet. Any company can use them today.
            </p>
            <p className="sl-body mb-4">
              So why are most businesses still doing the same manual work they were doing two years ago? Approving invoices by hand. Answering the same customer questions. Copying data from one system to another. Running reports that could generate themselves.
            </p>
            <p className="sl-body mb-4">
              The answer is not a technology gap. The answer is a delivery gap. The models exist. The APIs exist. The infrastructure exists. What does not exist enough of is someone who will actually build the working system, put it in your operation, and make sure it stays running.
            </p>
            <p className="sl-body">
              That is the gap we close.
            </p>
          </div>

          <OrnamentDivider className="!py-8" />

          {/* Narrative: The Decision */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-6">The choice we made</h2>
            <p className="sl-body mb-4">
              We made a decision early. We do not sell chatbots. We do not sell strategy decks. We do not sell monthly retainers for advisory calls that produce nothing but meeting notes.
            </p>
            <p className="sl-body mb-4">
              We build one working system. One process, fully automated, deployed in your operation, saving your team a day a week. Then we do it again for the next process. That is the model. One system at a time, each one measurable, each one permanent.
            </p>
            <p className="sl-body mb-4">
              Every system we ship is designed, built, and deployed by someone who has done this before. Not a strategy team that hands off to an implementation partner. Not a salesperson who disappears after the contract is signed. The same person who maps your process writes the code that runs it. That is the only way we have found to deliver systems that actually work in weeks instead of months.
            </p>
            <p className="sl-body">
              We turn down more projects than we take. If we cannot see a clear path to saving your team a day a week, we tell you. No pitch. No proposal. Just the truth.
            </p>
          </div>

          <OrnamentDivider className="!py-8" />

          {/* Founder section */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded overflow-hidden bg-navy-100 border border-navy-200">
                <Image
                  src="/daniel-headshot.jpg"
                  alt="Daniel San Luis, Founder of SanLuis AI Solutions"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-2">Daniel San Luis</h2>
              <p className="font-sans text-sm font-semibold tracking-[0.08em] uppercase text-gold-600 mb-4">Founder and CEO</p>
              <p className="sl-body mb-3">
                I built SanLuis AI because I watched too many businesses get sold on AI hype and receive nothing but a slide deck. Real results come from working systems deployed in weeks, not strategy documents delivered in months.
              </p>
              <p className="sl-body mb-3">
                Before starting this practice, I spent years building across the full AI stack. Every system we ship reflects that work. I still write code. I still review every architecture decision. That is not going to change.
              </p>
              <p className="sl-body">
                Founded 2025. Based in Houston. Bilingual EN and ES. We turn down most projects because we only take the ones where we know we can deliver measurable outcomes. Past results include 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and 40% better matches for LoveFlow.
              </p>
            </div>
          </div>

          <OrnamentDivider className="!py-8" />

          {/* Who This Is For */}
          <div className="mb-16">
            <h2 className="font-display text-2xl text-navy-800 mb-8 text-center">Who this is for</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-2">You have seen the demos</h3>
                <p className="sl-body-sm">
                  You sat through the AI presentations. You heard the promises. Nothing changed. You are ready for a system that does the actual work, not a slide deck about one.
                </p>
              </div>
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-2">You know where the time goes</h3>
                <p className="sl-body-sm">
                  You can point to the process that eats a day every week. Approvals, data entry, responses, reports. You just need someone to build the solution.
                </p>
              </div>
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-2">You want to own it</h3>
                <p className="sl-body-sm">
                  No locked-in contracts. No proprietary platforms. When we build a system, you own the code, the data, and the right to modify it however you need.
                </p>
              </div>
              <div className="bg-white border border-navy-200 rounded p-6">
                <h3 className="font-display text-lg text-navy-800 mb-2">You want to move</h3>
                <p className="sl-body-sm">
                  Discovery in one week. System running in two to three. No six-month roadmaps. No endless discovery phases. A working system, delivered.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach section */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">Our Approach</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We start with your problem, not a technology.</h3>
              <p className="sl-body">Before writing a single line of code, we map what your team actually does. Where the time goes. Where mistakes happen. Where the real opportunity is. Then we decide if AI is even the right answer. Sometimes it is not, and we say so.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We build with frontier AI, not templates.</h3>
              <p className="sl-body">Claude, GPT, Gemini. We route every problem to the model that solves it best. No cookie-cutter solutions. Every system is built from first principles for your specific operation, not adapted from something we built before.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We deploy, train, and hand you the keys.</h3>
              <p className="sl-body">Deployment is not the finish line. We document, train, and support until your team is confident and the system is stable. Then you own it completely. We are available when you need us, but you are never dependent on us.</p>
            </div>
          </div>

          {/* The Stack reference */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">The Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">AI Models</div>
              <div className="sl-body-sm">Claude, GPT, Gemini</div>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">AI Tooling</div>
              <div className="sl-body-sm">Google AI Studio, Anthropic Console, OpenAI Platform</div>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">Frontend</div>
              <div className="sl-body-sm">Next.js (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion</div>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">Backend / Data</div>
              <div className="sl-body-sm">Supabase (PostgreSQL), Supabase Edge Functions</div>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">Infrastructure</div>
              <div className="sl-body-sm">Vercel (frontend + serverless/edge), GitHub</div>
            </div>
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">Languages</div>
              <div className="sl-body-sm">English / Spanish (fully bilingual team)</div>
            </div>
          </div>
        </div>
      </main>
      </AnimatedSection>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build something that actually works?</h2>
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
