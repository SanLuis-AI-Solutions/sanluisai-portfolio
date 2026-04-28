const timeline = [
  {
    step: 1,
    title: 'Discovery Session',
    detail: '$300, 60 min',
    description: 'We audit your workflow, identify the bottleneck, and propose a solution.',
  },
  {
    step: 2,
    title: 'Solution Design',
    detail: '2-3 days',
    description: 'We deliver a detailed plan: architecture, timeline, and deliverables.',
  },
  {
    step: 3,
    title: 'Custom Build',
    detail: '2-4 weeks',
    description: 'We build your custom AI infrastructure, integrating with your existing systems.',
  },
  {
    step: 4,
    title: 'Deploy & Optimize',
    detail: 'Ongoing',
    description: 'We deploy, monitor, and continuously optimize for peak performance.',
  },
]

export default function Process() {
  return (
    <section className="bg-bgCanvas py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sl-h2 text-navy-900 text-center mb-16">From Diagnosis to Deployment.</h2>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gold-600/40" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timeline.map((item) => (
              <div key={item.step} className="relative text-center">
                {/* Desktop */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="relative z-10 w-10 h-10 flex items-center justify-center bg-bgCanvas border-2 border-gold-600 rounded-pill shadow-1">
                    <span className="font-sans text-sm font-semibold text-gold-600">{item.step}</span>
                  </div>
                  <div className="mt-6">
                    <h3 className="font-display text-lg font-medium text-navy-900 mb-1 sl-h3">{item.title}</h3>
                    <p className="font-sans text-sm text-gold-600 font-semibold mb-3">{item.detail}</p>
                    <p className="sl-body-sm text-fg2">{item.description}</p>
                  </div>
                </div>

                {/* Mobile row */}
                <div className="md:hidden flex items-start gap-4 mb-8">
                  <div className="w-8 h-8 flex items-center justify-center shrink-0 bg-bgCanvas border-2 border-gold-600 rounded-pill">
                    <span className="font-sans text-xs font-semibold text-gold-600">{item.step}</span>
                  </div>
                  <div className="text-left">
                    <h3 className="font-display text-lg font-medium text-navy-900 sl-h3">{item.title}</h3>
                    <p className="font-sans text-sm text-gold-600 font-semibold mb-1">{item.detail}</p>
                    <p className="sl-body-sm text-fg2">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
