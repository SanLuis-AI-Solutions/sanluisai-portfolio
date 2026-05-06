import Link from 'next/link'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import SubscribeForm from '@/components/SubscribeForm'
import FlameMark from '@/components/FlameMark'

const posts = [
  {
    title: '5 Automation Mistakes That Cost Houston Businesses Real Money',
    date: '2026-05-01',
    slug: 'automation-mistakes-guide',
    excerpt: 'Most automation projects fail — but not for the reasons you think. From over-engineering to measuring the wrong thing, here are the five patterns we see most often and how to avoid them.',
  },
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
  {
    title: 'Houston AI Market in 2026: What Small Businesses Need to Know',
    date: '2026-04-22',
    slug: 'houston-ai-market-2026',
    excerpt: 'AI adoption in Texas doubled in the last year, but most Houston small businesses are stuck between free tools and enterprise systems. Here is the practical market landscape for 2026.',
  },
  {
    title: 'How Garza International Cut Bid Turnaround by 60% With Custom AI',
    date: '2026-04-15',
    slug: 'garza-international-roi-breakdown',
    excerpt: 'A Houston construction firm was losing bids because manual quoting took 6+ hours per response. Here is the exact ROI breakdown of a 3-week custom AI build.',
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

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 mb-12">
            <FlameMark size="sm" />
          </div>
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-navy-200 pb-12 relative group">
                {/* Prominent date badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-sans text-sm font-semibold text-gold-600 tracking-[0.06em] uppercase">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="font-sans text-xs text-navy-400">· 5 min read</span>
                </div>
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="font-display text-2xl text-navy-800 mb-3 group-hover:text-gold-600 transition-colors duration-200">
                    {post.title}
                  </h2>
                </Link>
                <p className="sl-body text-fg2 mb-4 leading-relaxed">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-gold-600 font-sans text-sm font-semibold tracking-[0.04em] hover:translate-x-1 transition-transform duration-200 inline-flex items-center gap-1">
                  Read more <span aria-hidden="true">→</span>
                </Link>
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
      </AnimatedSection>
    </>
  )
}
