const stats = [
  { number: '6', label: 'Projects', sub: 'Delivered' },
  { number: '5', label: 'Clients', sub: 'Served' },
  { number: '3', label: 'AI Apps', sub: 'In Production' },
  { number: '0', label: 'Jobs', sub: 'Replaced' },
]

const trustCards = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: 'Houston-Based',
    sub: 'Local. Accountable.',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    value: '2 hrs → 1 min',
    sub: 'Client time saved',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    value: 'Bilingual',
    sub: 'English & Spanish',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '2–6 Weeks',
    sub: 'Typical build time',
  },
]

export default function SocialProof() {
  return (
    <section className="bg-[#080D14] border-y border-navy/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">

        {/* Stats row — 6 / 5 / 3 / 0 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-navy/20 rounded-2xl overflow-hidden mb-14">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center py-10 px-6 text-center ${i === 3 ? 'bg-[#080D14]' : 'bg-[#080D14]'}`}>
              <span
                className="font-grotesk font-bold leading-none mb-1"
                style={{
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  letterSpacing: '-0.04em',
                  color: i === 3 ? '#ffffff' : '#D49E2C',
                }}
              >
                {stat.number}
              </span>
              <p className="font-grotesk font-semibold text-white text-sm">{stat.label}</p>
              <p className="text-muted text-xs mt-0.5">{stat.sub}</p>
              {i === 3 && (
                <p className="text-gold/60 text-xs italic mt-1">by design</p>
              )}
            </div>
          ))}
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustCards.map((card, i) => (
            <div key={i} className="p-5 rounded-xl navy-bg navy-border text-center">
              <div className="mb-3 flex justify-center" style={{color:'#5B8FC7'}}>{card.icon}</div>
              <p className="font-grotesk font-semibold text-white text-base">{card.value}</p>
              <p className="text-muted text-xs mt-1">{card.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
