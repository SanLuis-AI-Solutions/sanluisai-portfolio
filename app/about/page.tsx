import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import OrnamentDivider from '@/components/OrnamentDivider'
import FlameMark from '@/components/FlameMark'

export const metadata: Metadata = {
  title: 'About Daniel San Luis and SanLuis AI Solutions | Houston AI',
  description: 'Founded by Daniel San Luis. We are builders, operators, and AI engineers based in Houston. Every system we ship is designed and deployed by a team with deep expertise across the AI stack — from frontier model routing to production infrastructure.',
  openGraph: {
    title: 'About Daniel San Luis and SanLuis AI Solutions | Houston AI',
    description: 'Founded by Daniel San Luis. We are builders, operators, and AI engineers based in Houston. Every system we ship is designed and deployed by a team with deep expertise across the AI stack — from frontier model routing to production infrastructure.',
    url: 'https://sanluisai-portfolio.vercel.app/about',
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
        eyebrow="Who We Are"
        title="Built by operators, for operators."
        description="We are builders, operators, and AI engineers. Every system we ship is designed and deployed by a team with deep expertise across the AI stack — from frontier model routing to production infrastructure."
      />

      {/* Light content section */}
      <main className="bg-bone-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* Flame mark above founder */}
          <div className="flex items-center justify-center mb-16">
            <FlameMark size="md" />
          </div>

          {/* Founder section */}
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="flex-shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded overflow-hidden bg-navy-100 border border-navy-200">
                <Image
                  src="/daniel-headshot.jpg"
                  alt="Daniel San Luis — Founder, SanLuis AI Solutions"
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl text-navy-800 mb-2">Daniel San Luis</h2>
              <p className="font-sans text-sm font-semibold tracking-[0.08em] uppercase text-gold-600 mb-4">Founder & CEO</p>
              <p className="sl-body mb-3">
                I built SanLuis AI because I saw too many businesses get sold on AI hype and handed a slide deck. Real results come from working systems deployed in weeks, not strategy documents delivered in months.
              </p>
              <p className="sl-body mb-3">
                Before starting this practice, I spent years building across the full AI stack — from model routing and multi-agent orchestration to production infrastructure and DevOps. Every system we ship reflects that hands-on experience.
              </p>
              <p className="sl-body">
                Based in Houston. Bilingual EN/ES. We turn down most projects because we only take the ones where we know we can deliver.
              </p>
            </div>
          </div>

          <OrnamentDivider className="!py-8" />

          {/* Our Approach section */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">Our Approach</h2>
          <div className="space-y-6 mb-12">
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We start with your problem, not a technology.</h3>
              <p className="sl-body">Before writing a single line of logic, we map what your team actually does — where the time goes, where mistakes happen, where the real opportunity is. Then we decide if AI is even the right answer.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We build with frontier AI, not templates.</h3>
              <p className="sl-body">Gemini, Claude, Codex, Grok — we route every problem to the model that solves it best. No cookie-cutter solutions. Every system is architected from first principles for your specific operation.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We deploy, train, and move forward.</h3>
              <p className="sl-body">Deployment isn't the finish line. We document, train, and support until your team is confident and the system is stable. Then we hand you the keys.</p>
            </div>
          </div>

          {/* The Stack section */}
          <h2 className="font-display text-2xl text-navy-800 mb-6">The Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-white border border-navy-200 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-1">AI Models</div>
              <div className="sl-body-sm">Gemini, Claude, Codex, Grok</div>
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
              <div className="sl-body-sm">English · Spanish (fully bilingual team)</div>
            </div>
          </div>
        </div>
      </main>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build your project?</h2>
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
