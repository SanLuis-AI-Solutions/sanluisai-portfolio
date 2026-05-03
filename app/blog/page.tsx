import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — SanLuis AI Solutions',
  description: 'Insights from real AI builds. No filler, no content calendars — just what we learn shipping custom AI systems for businesses.',
  openGraph: {
    title: 'Blog — SanLuis AI Solutions',
    description: 'Insights from real AI builds. No filler, no content calendars — just what we learn shipping custom AI systems for businesses.',
    url: 'https://sanluisai-portfolio.vercel.app/blog',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
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
    slug: 'ai-ready-problem-signs',
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
                </div>
                <p className="sl-body mb-4">{post.excerpt} <span className="text-gold-600">&mdash; Coming soon</span></p>
              </article>
            ))}
          </div>
        </div>
      </main>
      <section className="bg-bone-100 border-y border-navy-200 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-display text-2xl text-navy-800 mb-3">Get notified when we publish.</h3>
          <p className="sl-body-sm mb-6 max-w-lg mx-auto">No spam. No content calendar filler. Just real insights from real AI builds — when we have something worth saying.</p>
          <form
            onSubmit={async (e) => {
              e.preventDefault()
              const email = (e.target as HTMLFormElement).email.value
              if (!email) return
              try {
                await fetch('/api/assessment', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email, name: email.split('@')[0], scores: {}, notify: true }),
                })
                ;(e.target as HTMLFormElement).innerHTML = '<p class="font-sans text-sm text-emerald-600">✓ You\'re on the list.</p>'
              } catch {}
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="your@email.com"
              className="flex-1 font-sans text-sm px-4 py-3 border border-navy-200 rounded focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-colors bg-white"
            />
            <button
              type="submit"
              className="font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white hover:bg-navy-800 transition-all duration-220 rounded whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-navy-950 py-12 text-center">
        <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
        <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions.</p>
      </footer>
    </>
  )
}
