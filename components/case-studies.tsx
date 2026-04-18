import Link from 'next/link'

const cases = [
  {
    client: 'Real Estate Investment · Houston, TX',
    title: 'Garza International',
    metric: '1 MIN',
    metricLabel: 'Per deal analysis',
    before: '2 hours per deal analysis — different numbers every time, depending on who ran the spreadsheet.',
    after: 'Real-time figures on every project. One source of truth. Every team member, every deal.',
    quote: 'Before this, every deal analysis was a two-hour spreadsheet exercise — and the numbers changed depending on who ran them. Now every project lead pulls real-time figures in under a minute. We\'ve evaluated more deals this quarter than we did in the entire previous year.',
    author: 'J. Garza',
    role: 'Owner, Garza International',
  },
  {
    client: 'Jewelry Repair · Houston, TX',
    title: "Susie's Workshop OS",
    metric: 'DAY 1',
    metricLabel: 'Team adoption',
    before: 'Paper tickets. Status whiteboard. Notebook inventory. Three systems. None of them talking to each other.',
    after: 'One unified platform. Every job tracked. Inventory live. Status visible from anywhere — including Susie\'s phone.',
    quote: 'We had a paper ticket for every job, a whiteboard for status, and a notebook for inventory. Daniel replaced all of it with one system that actually fits how we work. My team learned it in a day. Now I can check on every repair from my phone while I\'m not even in the shop.',
    author: 'Susie',
    role: 'Owner, Susie\'s Jewelry Repair',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{background: '#0B1828'}}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="section-label">Client Results</span>
          <h2 className="section-h2 text-white mt-4">
            Real businesses. Real results.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {cases.map((c, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden flex flex-col border border-navy/40"
            style={{background: 'rgba(45,82,126,0.1)'}}
            >
              {/* Navy left accent */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-navy" />

              <div className="pl-7 pr-7 pt-8 pb-8 flex flex-col flex-1">
                <span className="section-label text-muted">{c.client}</span>
                <h3 className="font-grotesk font-bold text-white text-2xl mt-3 mb-6 tracking-tight">
                  {c.title}
                </h3>

                {/* Before / After */}
                <div className="grid grid-cols-2 gap-4 mb-7">
                  <div>
                    <p className="section-label text-red-400/60 mb-2">Before</p>
                    <p className="text-white/50 text-sm leading-relaxed">{c.before}</p>
                  </div>
                  <div>
                    <p className="section-label text-gold mb-2">After</p>
                    <p className="text-white text-sm leading-relaxed font-medium">{c.after}</p>
                  </div>
                </div>

                {/* Metric number — big and gold */}
                <div className="mb-5 pb-5 border-b border-white/5">
                  <span className="metric-display text-gold">{c.metric}</span>
                  <p className="text-muted text-xs mt-1">{c.metricLabel}</p>
                </div>

                {/* Full quote */}
                <blockquote className="flex-1">
                  <p className="font-inter italic text-white/75 text-sm leading-relaxed mb-3">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <cite className="not-italic">
                    <span className="text-white text-sm font-medium">— {c.author}</span>
                    <span className="text-muted text-xs ml-2">{c.role}</span>
                  </cite>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/work"
            className="inline-flex items-center text-sm text-gold hover:text-gold/70 transition-colors group"
          >
            See All Work
            <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 navy-divider" />
    </section>
  )
}
