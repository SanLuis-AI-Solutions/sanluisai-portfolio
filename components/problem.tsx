import Link from 'next/link'

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '3+ hrs',
    title: 'Lost to Manual Tasks — Daily',
    desc: 'Copy-pasting. Sorting emails. Data entry. Work a machine should be doing while your team does the work only humans can.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    stat: '1 Tuesday',
    title: 'To Pull a Report That Should Take Minutes',
    desc: 'Waiting for end-of-month spreadsheets to understand what happened weeks ago, when you needed that data yesterday.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 2.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
        />
      </svg>
    ),
    stat: '3 Systems',
    title: "That Don't Talk to Each Other",
    desc: "Valuable insights trapped across platforms that don't share data. Someone on your team manually bridges the gap every single day.",
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{ background: '#0B1828' }}>
      <div className="max-w-7xl mx-auto">
        {/* Tension block — the villain copy */}
        <div className="max-w-2xl mb-16 text-center mx-auto">
          <h2 className="section-h2 text-white mt-4 mb-8">You already know what&rsquo;s costing you time.</h2>

          {/* Rhythm copy — each line lands separately */}
          <div className="space-y-6 mb-8">
            <p className="text-muted text-xl lg:text-2xl leading-loose">
              The report that takes three hours to build.
              <br />
              The follow-up that slipped.
              <br />
              The employee doing work a machine should be doing.
            </p>
          </div>

          <p className="text-white text-lg lg:text-xl font-medium leading-relaxed">
            You&rsquo;re not behind because you weren&rsquo;t smart enough.
            <br />
            You just never had the right partner to build it.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="p-7 rounded-xl border border-navy/40 hover:border-navy/70 transition-colors group"
              style={{ background: 'rgba(45,82,126,0.12)' }}
            >
              <div className="mb-3" style={{ color: '#7BAFD4' }}>
                {point.icon}
              </div>
              <p className="metric-display mb-1" style={{ color: '#7BAFD4' }}>
                {point.stat}
              </p>
              <h3 className="font-grotesk font-semibold text-white text-base mb-2 leading-snug">{point.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="https://cal.com/sanluisai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-white/50 hover:text-gold transition-colors group"
          >
            Sound familiar? Let&rsquo;s talk.
            <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 navy-divider" />
    </section>
  )
}
