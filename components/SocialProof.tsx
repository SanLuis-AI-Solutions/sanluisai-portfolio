const stats = [
  { value: '50+', label: 'Problems Solved' },
  { value: '3', label: 'Industries' },
  { value: '100%', label: 'Custom Builds' },
]

const trustedBy = [
  'Garza International',
  'Susie\'s Jewelry Repair',
  'LoveFlow',
]

export default function SocialProof() {
  return (
    <section className="bg-dark py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl sm:text-5xl font-bold text-gold mb-2">{stat.value}</div>
              <div className="font-body text-textMuted text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="font-body text-textMuted text-sm uppercase tracking-wider mb-4">Trusted by:</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {trustedBy.map((name) => (
              <span key={name} className="font-heading text-lg text-white/60 tracking-tight">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
