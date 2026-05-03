import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work — AI Projects & Case Studies | SanLuis AI Solutions',
  description: 'Six client projects built with Google AI Studio, Claude, Gemini, and Supabase. Real estate dashboards, business operating systems, and AI apps — all shipped to production.',
  openGraph: {
    title: 'Our Work — AI Projects & Case Studies | SanLuis AI Solutions',
    description: 'Six client projects: real estate dashboards, automated lead capture, AI matching engines. Built with Google AI Studio, Claude, and Gemini.',
    url: 'https://sanluisai-portfolio.vercel.app/work',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const projects = [
  {
    industry: 'Real Estate',
    company: 'Garza International',
    problem: 'Every deal analysis was a manual spreadsheet exercise — inconsistent numbers, no reliable way to evaluate projects before investor presentations.',
    result: 'Real-time investment analysis on every project. LTC loans, ROI, profit margin calculated instantly as inputs change.',
    resultMetric: '60%',
    resultLabel: 'faster quoting',
    slug: 'garza-international',
    tags: ['AI Analytics', 'Dashboard'],
    stack: ['Google AI Studio', 'Gemini', 'Claude', 'React', 'Supabase', 'Vercel'],
  },
  {
    industry: 'Small Business',
    company: "Susie's Jewelry Repair",
    problem: 'Fragmented lead capture across website, phone, and walk-ins — no systematic follow-up, lost opportunities every day.',
    result: 'Professional web presence with custom booking, CRM integration, and automated follow-up sequences.',
    resultMetric: '3x',
    resultLabel: 'inbound leads',
    slug: 'susies-jewelry-repair',
    tags: ['Website', 'Business OS'],
    stack: ['Google AI Studio', 'Claude', 'React', 'Next.js', 'Supabase', 'Vercel'],
  },
  {
    industry: 'Consumer App',
    company: 'LoveFlow',
    problem: 'Matching algorithm driving user churn through surface-level preference matching — couples needed deeper behavioral alignment.',
    result: 'AI-powered relationship platform with personalized daily actions based on love language, emotional needs, and behavioral patterns.',
    resultMetric: '40%',
    resultLabel: 'better matches',
    slug: 'loveflow',
    tags: ['Consumer App', 'Behavioral AI'],
    stack: ['Google AI Studio', 'Gemini', 'Claude', 'React', 'Next.js', 'Supabase'],
  },
]

const earlierWork = [
  { company: 'AkuaLife', category: 'Small Business Website', url: 'https://myakualife.com', description: 'Brand and business website for a Houston alkaline water company.' },
  { company: 'El Norteño Tacos', category: 'Restaurant / Food Truck', url: 'https://elnortenotacos.com', description: 'Website for a Houston food truck chain — menu, catering, online ordering, brand story.' },
]

export default function WorkPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </nav>

      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="sl-eyebrow mb-4">The Work</span>
          <h1 className="sl-display-lg text-navy-800 mb-4">Six clients. Six projects. Built with AI, shipped to production.</h1>
          <p className="sl-body-lg max-w-prose mb-16">
            Every project started with a conversation about a specific problem. Every one ended with a deployed system that solved it.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-6">AI-Powered Development (2025–2026)</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {projects.map((p) => (
              <Link key={p.slug} href={`/case-studies/${p.slug}`} className="group block bg-white border border-navy-200 rounded-xl hover:border-navy-900 transition-all duration-220 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-3">{p.industry}</div>
                  <h3 className="font-display text-xl text-navy-800 mb-3 group-hover:text-navy-600 transition-colors duration-200">{p.company}</h3>
                  <p className="sl-body-sm mb-4 line-clamp-3">{p.problem}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-display text-3xl text-gold-600">{p.resultMetric}</span>
                    <span className="sl-body-sm">{p.resultLabel}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="font-sans text-xs px-2 py-1 bg-bone-100 text-navy-600 rounded">{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="font-display text-2xl text-navy-800 mb-6">Earlier Client Work</h2>
          <p className="sl-body-sm mb-6">These projects were built before our AI development practice, using WordPress. They remain live and serving their clients.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {earlierWork.map((w) => (
              <a key={w.company} href={w.url} target="_blank" rel="noopener noreferrer" className="block bg-white border border-navy-200 rounded-xl p-6 hover:border-navy-900 transition-all duration-220">
                <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-2">{w.category}</div>
                <h3 className="font-display text-lg text-navy-800 mb-2">{w.company}</h3>
                <p className="sl-body-sm">{w.description}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="border-t border-navy-200 pt-12 text-center">
            <h2 className="font-display text-2xl text-navy-800 mb-4">Ready to build your project?</h2>
            <p className="sl-body-lg mb-6">Start with a $300 Discovery Session. 60 minutes. Clear roadmap.</p>
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-8 py-4 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
          <p className="font-sans text-sm text-navy-300">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
