import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — SanLuis AI Solutions',
  description: 'Insights on custom AI systems, business automation, and solving real problems with targeted precision.',
}

const posts = [
  {
    title: 'Why Most AI Consulting Fails (And How We Avoid It)',
    date: '2026-04-28',
    slug: 'why-ai-consulting-fails',
    excerpt: 'Six-month discovery phases. Slide decks with no code. Pilot purgatory. Here is how the traditional AI consulting model wastes your time — and how targeted, time-bounded builds produce real results in weeks.',
  },
  {
    title: 'The $300 Discovery Session: What Happens in That Hour',
    date: '2026-04-28',
    slug: 'discovery-session-breakdown',
    excerpt: 'You pay $300 for a 60-minute audit. What do you actually get? A breakdown of the diagnostic process — from problem identification to a written action plan you can execute.',
  },
  {
    title: '5 Signs Your Business Has An AI-Ready Problem',
    date: '2026-04-28',
    slug: 'ai-ready-bottleneck-signs',
    excerpt: 'Not every problem needs AI. Here are five signals that your issue is ripe for a custom AI solution — and when a spreadsheet or checklist is the better answer.',
  },
]

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800 tracking-tight">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">Book a Discovery Session.</Link>
        </div>
      </nav>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="sl-eyebrow mb-4">Insights</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">Blog.</h1>
          <p className="sl-body-lg max-w-prose mb-12">We write when we have something to say. No content calendars. No filler. Just real insights from real builds.</p>
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-navy-200 pb-10 relative">
                <time className="font-sans text-xs text-fg3 uppercase tracking-wider">{post.date}</time>
                <div className="flex items-center gap-3 mt-2 mb-3">
                  <h2 className="font-display text-2xl text-navy-800">{post.title}</h2>
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wider bg-gold-400 text-navy-900 rounded">Coming soon</span>
                </div>
                <p className="sl-body mb-4">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <footer className="bg-navy-950 py-12 text-center">
        <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
        <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions.</p>
      </footer>
    </>
  )
}
