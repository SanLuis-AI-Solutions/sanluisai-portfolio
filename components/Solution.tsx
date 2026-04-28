const steps = [
  {
    number: '01',
    title: 'Diagnose',
    detail: '$300, 60 min',
    description: 'We analyze your operations, identify the single highest-impact bottleneck, and deliver a precise scope of work.',
  },
  {
    number: '02',
    title: 'Build',
    detail: '2-4 weeks',
    description: 'We engineer a custom AI system targeting that bottleneck. No bloat. No unnecessary features.',
  },
  {
    number: '03',
    title: 'Eliminate',
    detail: 'Ongoing',
    description: 'Your bottleneck is removed. We monitor, refine, and ensure the system stays sharp.',
  },
]

export default function Solution() {
  return (
    <section id="services" className="bg-bgCanvas py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="sl-eyebrow">No. 02 — The Method</span>
          <h2 className="sl-h2 text-navy-900 mt-4">Surgical AI. Not Software.</h2>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-navy-200 rounded p-8"
            >
              <span className="block font-display text-5xl font-medium text-gold-600 mb-4 sl-display-sm">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-medium text-navy-900 mb-1 sl-h3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-gold-600 font-semibold mb-4 uppercase tracking-wider">
                {step.detail}
              </p>
              <p className="font-sans text-base text-fg2 sl-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
