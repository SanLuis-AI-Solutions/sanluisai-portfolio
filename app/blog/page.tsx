import Link from 'next/link'
import SubscribeForm from '@/components/SubscribeForm'

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
          <SubscribeForm />
        </div>
      </section>
      
    </>
  )
}
