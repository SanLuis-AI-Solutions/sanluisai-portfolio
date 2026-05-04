import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Case Studies — SanLuis AI Solutions',
  description: 'Real results from real deployments. Garza International, Susie\'s Jewelry Repair, and LoveFlow.',
  openGraph: {
    title: 'Case Studies — SanLuis AI Solutions',
    description: 'Real results from real AI deployments: Garza International (60% faster quoting), Susie\'s Jewelry Repair (3x leads), LoveFlow (40% better matches).',
    url: 'https://sanluisai-portfolio.vercel.app/case-studies',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const cases = [
  { industry: 'Construction', company: 'Garza International', problem: 'Manual quoting process taking 6+ hours per bid', result: '60% faster quoting', quote: '"SanLuis AI solved the single biggest problem in our sales process. We\'re bidding faster and winning more."', slug: 'garza-international' },
  { industry: 'Retail', company: "Susie's Jewelry Repair", problem: 'Inconsistent lead capture and follow-up', result: '3x leads', quote: '"I went from losing leads to having a system that works even when I\'m not in the shop."', slug: 'susies-jewelry-repair' },
  { industry: 'Tech', company: 'LoveFlow', problem: 'Matching algorithm underperforming on retention', result: '40% better matches', quote: '"SanLuis AI didn\'t just fix our algorithm — they gave us a competitive moat."', slug: 'loveflow' },
]

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="No. 03 — The Evidence"
        title="Case Studies."
        description="Measurable outcomes from real deployments. Every engagement is time-bounded, custom-built, and results-guaranteed."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <Link key={c.slug} href={`/case-studies/${c.slug}`} className="block bg-white border border-navy-900 rounded p-6 hover:shadow-2 transition-shadow group">
                <div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">{c.industry}</div>
                <div className="font-display text-xl text-navy-800 mb-4 group-hover:text-navy-600 transition-colors">{c.company}</div>
                <div className="mb-4">
                  <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Problem</div>
                  <div className="font-sans text-sm text-fg2">{c.problem}</div>
                </div>
                <div>
                  <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Result</div>
                  <div className="font-display text-2xl text-gold-600">{c.result}</div>
                </div>
                <div className="mt-4 pt-4 border-t border-navy-100">
                  <p className="font-sans text-xs italic text-fg3 leading-relaxed">&ldquo;{c.quote.replace(/^"|"$/g, '')}&rdquo;</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
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
