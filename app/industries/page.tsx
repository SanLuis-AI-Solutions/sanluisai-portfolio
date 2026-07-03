import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'AI Automation by Industry. SanLuis AI Solutions',
  description: 'Custom AI automation built for manufacturing, healthcare, real estate, professional services, retail, and logistics. Same build process. Every system built for the specific constraints of that business.',
  openGraph: {
    title: 'AI Automation by Industry. SanLuis AI Solutions',
    description: 'Custom AI automation built for your industry. Houston-based, fixed-price, you own the code.',
    url: 'https://sanluisai-portfolio.vercel.app/industries',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const industries = [
  { name: 'Healthcare', href: '/industries/healthcare', problem: 'Prior authorization delays, administrative overhead, and documentation burden drain resources from patient care.', featured: true },
  { name: 'Logistics', href: '/industries/logistics', problem: 'Supply chain inefficiencies, manual routing coordination, and fragmented carrier management cost time and margin.', featured: false },
  { name: 'Manufacturing', href: '/industries/manufacturing', problem: 'Unplanned downtime, quality control gaps, and reactive maintenance that cost millions in lost production.', featured: false },
  { name: 'Professional Services', href: '/industries/professional-services', problem: 'Manual document review, untracked billable time, and slow client onboarding that burn capacity and revenue.', featured: false },
  { name: 'Real Estate', href: '/industries/real-estate', problem: 'Leads that go cold, manual CMA preparation, and follow-up delays that cost deals every day.', featured: false },
  { name: 'Retail', href: '/industries/retail', problem: 'Inconsistent customer service, manual demand planning, and pricing guesswork that erodes margin.', featured: false },
]

export default function Page() {
  return (
    <>
      <BreadcrumbJsonLd />
      <PageHeader
        eyebrow="Industries"
        title="AI Automation by Industry."
        description="Every business is different. The approach is the same: find the most expensive problem, build the right system, deliver measurable results. These are the industries we know best."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0}>
            <p className="sl-body max-w-prose mb-4">
              We apply the same build process across every industry: Discovery Session, opportunity audit,
              prototype, deployment, and outcome tracking. The process is repeatable. The systems never are.
              Each solution is built around the specific workflows, data, and compliance requirements of
              that business.
            </p>
            <p className="sl-body max-w-prose mb-12">
              If your industry is not listed here, that does not mean we cannot build for it.
              The Discovery Session is designed to scope any problem. Start there.
            </p>
          </AnimatedSection>

          {/* Bento grid: Healthcare featured as 2x1, rest as 1x1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {industries.map((ind, i) => (
              <AnimatedSection key={ind.name} delay={0.1 * (i % 3)}>
                <Link
                  href={ind.href}
                  className={`block bg-white border border-navy-200 rounded p-6 md:p-8 hover:-translate-y-1 hover:border-gold-600/50 hover:shadow-[0_18px_50px_-28px_rgba(26,49,96,0.55)] transition-all duration-300 group h-full ${
                    ind.featured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">
                      {ind.name}
                    </div>
                    {ind.featured && (
                      <span className="font-mono text-[10px] tracking-[0.08em] uppercase bg-gold-100 text-gold-700 px-2 py-0.5 rounded">Featured</span>
                    )}
                  </div>
                  <p className="sl-body-sm">
                    {ind.problem}
                  </p>
                  <div className="mt-4 font-sans text-sm font-semibold text-gold-600 group-hover:text-gold-700 underline decoration-transparent group-hover:decoration-gold-600 transition-all">
                    Learn more
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Not sure where to start?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">
            Start with a $300 Discovery Session. 60 minutes. Clear roadmap. If we find fewer than three
            high-impact opportunities, you do not pay.
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
