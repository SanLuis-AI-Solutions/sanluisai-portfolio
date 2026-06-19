import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import Diamond from '@/components/Diamond'

export const metadata: Metadata = {
  title: 'AI for Real Estate. SanLuis AI Solutions',
  description: 'Investment analysis, lead qualification, and portfolio intelligence. AI systems purpose-built for real estate professionals.',
  openGraph: {
    title: 'AI for Real Estate. SanLuis AI Solutions',
    description: 'Faster deal analysis, smarter lead qualification, and real-time portfolio intelligence for real estate.',
    url: 'https://sanluisai-portfolio.vercel.app/industries/real-estate',
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
        eyebrow="Industry"
        title="AI for Real Estate."
        description="Investment analysis, lead qualification, and portfolio intelligence. Purpose-built for real estate professionals."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
          <div className="relative w-full h-48 md:h-72 rounded overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_realestate_00001_.png" alt="Modern real estate development" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
          <p className="sl-body max-w-prose mb-4">SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size real estate firms. We speed up investment analysis, lead qualification, and portfolio intelligence through fixed-price AI automation.</p>

          <p className="sl-body max-w-prose mb-4">Real estate runs on analysis and speed. Every deal evaluation, every investor presentation, and every lead follow-up is a race against time. Yet most firms still rely on manual spreadsheets for deal analysis, fragmented communication for investor updates, and gut instinct for market timing. A single underwriting mistake or missed lead can cost far more than the price of a better system.</p>
          <p className="sl-body max-w-prose mb-4">We build AI systems that analyze deals in seconds instead of hours, qualify leads automatically against your investment criteria, and deliver portfolio intelligence that would otherwise require a full-time analyst. Everyone has access to the same AI. We build the one system that saves your real estate operation a day a week.</p>
          <p className="sl-body max-w-prose mb-4">Manual deal analysis in spreadsheets is slow, error-prone, and impossible to scale. Analysts copy numbers between models, recreate formulas for every property, and debate assumptions while better-capitalized competitors move first. By the time a spreadsheet is polished, the opportunity has often changed or disappeared.</p>
          <p className="sl-body max-w-prose mb-4">Lead qualification is equally inconsistent. Inbound seller and buyer inquiries arrive from email, voicemail, web forms, and referrals, then sit in inboxes or CRM records with uneven follow-up. Without a clear scoring model, high-potential deals receive the same treatment as low-value noise, and warm prospects cool off before anyone acts.</p>
          <p className="sl-body max-w-prose mb-4">Investor updates add another layer of friction. Capital partners expect timely reporting on distributions, construction progress, and market conditions. When those updates are assembled from scattered files and manual slide decks, the result is late, inconsistent communication that erodes confidence. Portfolio blind spots multiply. Occupancy trends, refinance windows, lease expirations, and local market movements are buried in separate systems, making proactive decisions nearly impossible.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
          <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-8">
            <h3 className="font-display text-xl text-navy-800 mb-3">A SanLuis AI Solution</h3>
            <p className="sl-body-sm mb-3">Based in Houston, Texas, SanLuis AI Solutions is an AI-augmented team that builds AI systems purpose-built for real estate professionals. Our deal analysis engines underwrite properties in real time using LTC, ROI, profit margin, and risk scoring. Our lead qualification pipelines score and route prospects against your exact acquisition criteria. Our portfolio intelligence dashboards surface occupancy, refinance windows, market movements, and lease exposure in a single view.</p>
            <p className="sl-body-sm mb-3">Real outcomes from these systems include deals evaluated in seconds instead of hours, automated lead scoring against investment criteria, and a unified portfolio view that removes the need to chase data across disconnected tools. We integrate with your existing CRM, property management software, and financial models. No rip-and-replace is required.</p>
            <p className="sl-body-sm">See how we built a similar AI-powered solution for <Link href="/case-studies/garza-international" className="text-gold-600 underline hover:text-gold-700">Garza International</Link>, a real estate construction firm, to automate project scheduling, resource tracking, and operational reporting.</p>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-navy-900 rounded p-6">
              <h3 className="font-display text-xl text-navy-800 mb-4">We build.</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Deal analysis engines that calculate LTC, ROI, profit margin, and risk in real time.</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Lead qualification pipelines that score and route prospects against your investment criteria.</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Portfolio intelligence dashboards that unify occupancy, refinance windows, and market movement.</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Investor reporting automation that assembles distributions, progress updates, and market context.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <h3 className="font-display text-xl text-navy-800 mb-4">We do not build.</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Property management software for tenant portals, maintenance tickets, or rent collection.</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>MLS platforms, listing syndication tools, or comparative market analysis databases.</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Title, lien, deed, or property record search tools tied to county recorder systems.</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm text-fg2">
                  <Diamond className="text-gold-500 mt-1" />
                  <span>Generic automation that is disconnected from your underwriting model and deal flow.</span>
                </li>
              </ul>
            </div>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8">
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Deal Analysis</div>
              <div className="font-display text-lg text-navy-800 mb-2">Real-time underwriting</div>
              <p className="font-sans text-sm text-fg2 mb-2">AI-powered underwriting evaluates deals in real time, calculating LTC, ROI, profit margin, and risk scoring as assumptions change. Property pro-formas, rent rolls, and market assumptions feed directly into a live model that updates every input instantly.</p>
              <p className="font-sans text-sm text-fg2">Teams stop rebuilding spreadsheets for every deal and start comparing opportunities on a consistent set of rules. The result is faster decisions, fewer formula errors, and more capital deployed into the right assets.</p>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Lead Qualification</div>
              <div className="font-display text-lg text-navy-800 mb-2">Automated pipeline</div>
              <p className="font-sans text-sm text-fg2 mb-2">Pipeline that scores and routes prospects against your investment criteria automatically. Inbound leads from any channel are normalized, ranked by location, price band, property type, and motivation signals, then routed to the right team member.</p>
              <p className="font-sans text-sm text-fg2">High-priority opportunities get immediate attention while low-fit inquiries are handled without manual triage. Follow-up sequences stay consistent, and no promising lead is lost in an inbox.</p>
            </div>
            <div className="bg-white border border-navy-900 rounded p-6">
              <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Portfolio Intel</div>
              <div className="font-display text-lg text-navy-800 mb-2">Single view</div>
              <p className="font-sans text-sm text-fg2 mb-2">Unified dashboard tracking occupancy, refinance windows, lease expirations, and market movements. Instead of pulling reports from separate property management, accounting, and market data tools, leadership sees the full portfolio in one place.</p>
              <p className="font-sans text-sm text-fg2">The system highlights where attention is needed, surfaces proactive opportunities, and gives investors a clean narrative backed by live data. Reporting becomes a competitive advantage rather than a recurring burden.</p>
            </div>
          </div>
          </AnimatedSection>

          <AnimatedSection delay={0.5}>
          <div className="bg-bone-100 border border-navy-200 rounded p-6 mt-8">
            <p className="sl-body-sm italic mb-3">Not sure if AI makes sense for your portfolio? Start with a $300 Discovery Session. We will map your current deal flow, identify the highest-impact automation opportunity, and give you a written roadmap whether you hire us or not.</p>
            <p className="sl-body-sm">Automation projects start at $1,200. Custom AI systems start at $5,000. Every engagement is scoped to the specific work that saves your real estate operation a day a week.</p>
            <p className="sl-body-sm italic mt-3">SanLuis AI Solutions has delivered 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and AI-assisted app design for LoveFlow.</p>
          </div>
        </AnimatedSection>
        </div>
      </section>

      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-2xl text-navy-800 mb-6">Related Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-navy-200 rounded p-6">
              <span className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">Real Estate Construction</span>
              <h4 className="font-display text-lg text-navy-800 mt-2 mb-2">Garza International</h4>
              <p className="font-sans text-sm text-fg2 mb-4">How we built a custom AI solution for a real estate construction firm to automate project scheduling, resource tracking, and operational reporting. The same principles apply to deal analysis, lead qualification, and portfolio intelligence for investment and development teams.</p>
              <Link href="/case-studies/garza-international" className="font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 underline">
                Read case study →
              </Link>
            </div>
          </div>
        </div>
      </section>

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
