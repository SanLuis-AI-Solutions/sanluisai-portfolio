import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
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
      <PageHeader
        eyebrow="Insights"
        title="Blog."
        description="We write when we have something to say. No content calendars. No filler. Just real insights from real builds."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-navy-200 pb-10 relative">
                <time className="font-sans text-xs text-fg3 uppercase tracking-wider">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                <div className="flex items-center gap-3 mt-2 mb-3">
                  <h2 className="font-display text-2xl text-navy-800">{post.title}</h2>
                </div>
                <div className="font-sans text-xs text-navy-400 mb-3">By Daniel San Luis · 4 min read</div>
                <p className="sl-body mb-4">{post.excerpt} <span className="text-gold-600">&mdash; Coming soon</span></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Get notified when we publish.</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">No spam. No content calendar filler. Just real insights from real AI builds — when we have something worth saying.</p>
          <SubscribeForm />
        </div>
      </section>
    </>
  )
}
