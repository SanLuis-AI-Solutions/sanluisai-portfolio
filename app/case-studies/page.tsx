import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Case Studies | SanLuis AI Solutions',
  description: 'Real results from real deployments. Garza International, Susie\'s Jewelry Repair, and LoveFlow.',
  openGraph: {
    title: 'Case Studies | SanLuis AI Solutions',
    description: 'Real results from real AI deployments: Garza International (60% faster quoting), Susie\'s Jewelry Repair (3x leads), LoveFlow (AI app design in 3 days).',
    url: 'https://sanluisai-portfolio.vercel.app/case-studies',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const cases = [
  {
    industry: 'Construction',
    company: 'Garza International',
    problem: 'Manual quoting process taking 6+ hours per bid',
    result: '60% faster quoting',
    quote: '"SanLuis AI solved the single biggest problem in our sales process. We\'re bidding faster and winning more."',
    attribution: '— Carlos Garza, Director of Operations',
    slug: 'garza-international',
    service: 'AI Agent System',
    timeline: '3 weeks',
    investment: '$5,000–8,000',
    metrics: [
      { label: 'Saved per bid', value: '4 hrs' },
      { label: 'Bids per week', value: '16+' },
      { label: 'Error reduction', value: '85%' },
    ],
  },
  {
    industry: 'Retail',
    company: "Susie's Jewelry Repair",
    problem: 'Inconsistent lead capture and follow-up',
    result: '3x leads',
    quote: '"I went from losing leads to having a system that works even when I\'m not in the shop."',
    attribution: '— Susie Castellano, Owner',
    slug: 'susies-jewelry-repair',
    service: 'AI Automation',
    timeline: '2 weeks',
    investment: '$1,200–2,000',
    metrics: [
      { label: 'Follow-up rate', value: '94%' },
      { label: 'Manual lead entry', value: '0 hrs' },
      { label: 'Setup time', value: '30 min' },
    ],
  },
  {
    industry: 'Consumer App',
    company: 'LoveFlow',
    problem: 'No technical background despite a clear product vision',
    result: 'AI app design in 3 days',
    quote: '"I had the vision for years but no way to make it real. SanLuis AI showed me what was possible with AI tools and built the design in three days."',
    attribution: '— Founder, LoveFlow',
    slug: 'loveflow',
    service: 'AI-Powered Design',
    timeline: '3 days',
    investment: 'AI subscriptions',
    metrics: [
      { label: 'Saved vs. agency', value: '$40k+' },
      { label: 'Faster with AI', value: '55%' },
      { label: 'AI code in YC', value: '25%' },
    ],
  },
]

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="No. 03: The Evidence"
        title="Case Studies."
        description="Measurable outcomes from real deployments. Every engagement is time-bounded, custom-built, and results-guaranteed."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {/* Bento grid: featured card (Garza) takes 2 cols, others take 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {cases.map((c, i) => {
              const featured = i === 0
              return (
                <Link
                  key={c.slug}
                  href={`/case-studies/${c.slug}`}
                  className={`block bg-white border border-navy-200 rounded p-6 md:p-8 hover:-translate-y-1 hover:border-gold-600/50 hover:shadow-[0_18px_50px_-28px_rgba(26,49,96,0.55)] transition-all duration-300 group ${
                    featured ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600">{c.industry}</div>
                    <div className="font-display text-lg font-bold text-gold-600">{c.result}</div>
                  </div>
                  <div className={`font-display text-navy-800 mb-3 group-hover:text-navy-600 transition-colors ${featured ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {c.company}
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {c.metrics.map((m) => (
                      <div key={m.label} className="bg-bone-100 rounded p-2 text-center">
                        <div className="font-display text-base text-navy-800">{m.value}</div>
                        <div className="font-sans text-[10px] text-fg4 tracking-[0.02em] leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mb-3">
                    <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Problem</div>
                    <div className="font-sans text-sm text-fg2">{c.problem}</div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="font-mono text-[10px] tracking-[0.08em] uppercase bg-gold-100 text-gold-700 px-2 py-0.5 rounded">{c.service}</span>
                    <span className="font-mono text-[10px] tracking-[0.08em] uppercase bg-navy-100 text-navy-700 px-2 py-0.5 rounded">{c.timeline}</span>
                    <span className="font-mono text-[10px] tracking-[0.08em] uppercase bg-green-100 text-green-700 px-2 py-0.5 rounded">{c.investment}</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-navy-100">
                    <p className="font-sans text-xs italic text-fg3 leading-relaxed">&ldquo;{c.quote.replace(/^"|"$/g, '')}&rdquo;</p>
                    <p className="font-sans text-[10px] text-fg4 mt-1">{c.attribution}</p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gold-200/40">
                    <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 group-hover:text-gold-700 transition-colors">Read full case study &rarr;</span>
                  </div>
                </Link>
              )
            })}
          </div>

          <AnimatedSection delay={0.2}>
          <div className="bg-bone-100 border border-navy-200 rounded p-6">
            <p className="sl-body-sm italic mb-3">SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size businesses through fixed-price engagements: a $300 Discovery Session, AI Automation from $1,200, AI Agent Systems from $5,000, and Custom AI Systems from $5,000.</p>
            <p className="sl-body-sm italic">Not sure which solution fits your problem? Start with a $300 Discovery Session. We will audit your operations, identify the highest-impact opportunity, and give you a written roadmap whether you hire us or not.</p>
          </div>
          </AnimatedSection>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Want results like these?</h2>
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
