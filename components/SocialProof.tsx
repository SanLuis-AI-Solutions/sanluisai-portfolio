const stats = [
  { value: '50+', label: 'bottlenecks eliminated' },
  { value: '3', label: 'industries' },
  { value: '100%', label: 'custom' },
]

const trustedBy = [
  'Garza International',
  "Susie's Jewelry Repair",
  'LoveFlow',
]

export default function SocialProof() {
  return (
    <section className="bg-bgCanvas">
      {/* Navy-900 inverse stats area */}
      <div className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white">
            {stats.map((stat, idx) => (
              <span key={stat.label} className="flex items-center gap-x-4">
                <span className="font-display text-4xl sm:text-5xl font-medium text-white sl-display-sm">{stat.value}</span>
                <span className="font-sans text-sm text-navy-300">{stat.label}</span>
                {idx < stats.length - 1 && (
                  <span className="text-gold-600 text-lg ml-2">&#9670;</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-xs uppercase tracking-widest text-fg3 mb-6">Trusted by</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {trustedBy.map((name) => (
              <span key={name} className="font-sans text-sm uppercase tracking-wider text-navy-300">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
