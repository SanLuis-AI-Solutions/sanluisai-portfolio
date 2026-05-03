import Link from 'next/link'
import type { Metadata } from 'next'

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
  { industry: 'Construction', company: 'Garza International', problem: 'Manual quoting process taking 6+ hours per bid', result: '60% faster quoting', slug: 'garza-international' },
  { industry: 'Retail', company: "Susie's Jewelry Repair", problem: 'Inconsistent lead capture and follow-up', result: '3x leads', slug: 'susies-jewelry-repair' },
  { industry: 'Tech', company: 'LoveFlow', problem: 'Matching algorithm underperforming on retention', result: '40% better matches', slug: 'loveflow' },
]

export default function Page() {
  return (
    <>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="sl-eyebrow mb-4">No. 03 — The Evidence</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">Case Studies.</h1>
          <p className="sl-body-lg max-w-prose mb-12">Measurable outcomes from real deployments. Every engagement is time-bounded, custom-built, and results-guaranteed.</p>
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
              </Link>
            ))}
          </div>
        </div>
      </main>

    </>
  )
}