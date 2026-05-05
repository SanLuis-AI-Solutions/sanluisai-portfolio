import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'Our Work — AI Projects & Case Studies | SanLuis AI Solutions',
  description: 'Six client projects built with Gemini 2.5 Pro, Claude Opus 4.7, and Codex GPT-5.5. Real estate dashboards, business operating systems, and AI apps — all shipped to production.',
  openGraph: {
    title: 'Our Work — AI Projects & Case Studies | SanLuis AI Solutions',
    description: 'Six client projects: real estate dashboards, automated lead capture, AI matching engines. Built with Gemini 2.5 Pro, Claude Opus 4.7, and Codex GPT-5.5.',
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
    quote: 'We\'re bidding faster and winning more.',
    slug: 'garza-international',
    tags: ['AI Analytics', 'Dashboard'],
    stack: ['Gemini 2.5 Pro', 'Claude Opus 4.7', 'Codex GPT-5.5', 'React', 'Supabase', 'Vercel'],
  },
  {
    industry: 'Small Business',
    company: "Susie's Jewelry Repair",
    problem: 'Fragmented lead capture across website, phone, and walk-ins — no systematic follow-up, lost opportunities every day.',
    result: 'Professional web presence with custom booking, CRM integration, and automated follow-up sequences.',
    resultMetric: '3x',
    resultLabel: 'inbound leads',
    quote: 'It transformed how we run our business.',
    slug: 'susies-jewelry-repair',
    tags: ['Website', 'Business OS'],
    stack: ['Gemini 2.5 Pro', 'Claude Opus 4.7', 'Codex GPT-5.5', 'React', 'Next.js', 'Supabase', 'Vercel'],
  },
  {
    industry: 'Consumer App',
    company: 'LoveFlow',
    problem: 'Matching algorithm driving user churn through surface-level preference matching — couples needed deeper behavioral alignment.',
    result: 'AI-powered relationship platform with personalized daily actions based on love language, emotional needs, and behavioral patterns.',
    resultMetric: '40%',
    resultLabel: 'better matches',
    quote: 'The matching engine gave us a genuine competitive advantage.',
    slug: 'loveflow',
    tags: ['Consumer App', 'Behavioral AI'],
    stack: ['Gemini 2.5 Pro', 'Claude Opus 4.7', 'Codex GPT-5.5', 'React', 'Next.js', 'Supabase'],
  },
]

const earlierWork = [
  { company: 'AkuaLife', category: 'Small Business Website', url: 'https://myakualife.com', description: 'An earlier WordPress project — brand and business website for a Houston alkaline water company.' },
  { company: 'El Norteño Tacos', category: 'Restaurant / Food Truck', url: 'https://elnortenotacos.com', description: 'An earlier WordPress project — website for a Houston food truck chain with menu, catering, online ordering, and brand story.' },
]

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Work"
        title="Six clients. Six projects. Built with AI, shipped to production."
        description="Every project started with a conversation about a specific problem. Every one ended with a deployed system that solved it."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-24">
          <h2 className="font-display text-2xl text-navy-800 mb-6">AI-Powered Development (2025–2026)</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {projects.map((p) => (
              <Link key={p.slug} href={`/case-studies/${p.slug}`} className="group block bg-white border border-navy-200 rounded-xl hover:border-navy-900 transition-all duration-220 overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="font-sans text-xs font-semibold text-gold-600 tracking-[0.12em] uppercase mb-3">{p.industry}</div>
                  <h3 className="font-display text-xl text-navy-800 mb-3 group-hover:text-navy-600 transition-colors duration-200">{p.company}</h3>
                  <p className="sl-body-sm mb-4 line-clamp-3">{p.problem}</p>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="font-display text-3xl text-gold-600">{p.resultMetric}</span>
                    <span className="sl-body-sm">{p.resultLabel}</span>
                  </div>
                  {p.quote && (
                    <div className="border-l-2 border-gold-400 pl-3 mb-4">
                      <p className="font-sans text-sm italic text-navy-600 leading-relaxed">&ldquo;{p.quote}&rdquo;</p>
                    </div>
                  )}
                  <div className="text-gold-600 font-sans text-xs font-semibold tracking-[0.08em] uppercase mb-4 group-hover:translate-x-1 transition-transform duration-200">
                    View Case Study →
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

          <h2 className="font-display text-2xl text-navy-800 mb-4">Earlier Client Work</h2>
          <p className="sl-body-sm mb-8 text-navy-500">Projects built before our AI development practice, using WordPress. Still live and serving their clients.</p>
          <div className="grid md:grid-cols-3 gap-4 mb-20">
            {earlierWork.map((w) => (
              <a key={w.company} href={w.url} target="_blank" rel="noopener noreferrer" className="group block bg-white/70 border border-navy-200/60 rounded-lg p-5 hover:border-navy-900/40 hover:bg-white transition-all duration-220">
                <div className="font-sans text-xs font-semibold text-gold-600/70 tracking-[0.12em] uppercase mb-2">{w.category}</div>
                <h3 className="font-display text-base text-navy-800 mb-2 group-hover:text-navy-600 transition-colors duration-200">{w.company}</h3>
                <p className="font-sans text-sm text-navy-500 leading-relaxed">{w.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

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
