const steps = [
  {
    number: '01',
    title: 'Discovery',
    desc: '$300 · 60 min · We learn your business, your bottlenecks, your team — and you leave with a written roadmap.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'We map the exact AI solution for your workflow. Not a template. Built around how you actually work.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'We build, test, and train your team on the system. Most projects ship in 2–6 weeks.',
  },
  {
    number: '04',
    title: 'Scale',
    desc: 'We stay with you. Monitor, optimize, and grow the system as your business evolves.',
  },
]

export default function Process() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{background: '#0B1828'}}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <span className="section-label">How It Works</span>
          <h2 className="section-h2 text-white mt-4">
            From conversation to running system in weeks.
          </h2>
          <p className="text-muted text-base mt-4 max-w-lg leading-relaxed">
            You don&rsquo;t need to come in with a plan. You just need to show up.
            We handle the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-8 left-[calc(12.5%-2px)] right-[calc(12.5%-2px)] h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(45,82,126,0.4) 10%, rgba(45,82,126,0.4) 90%, transparent)',
            }}
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-start lg:items-center text-left lg:text-center">
                {/* Gold circle */}
                <div className="relative z-10 w-16 h-16 rounded-full border border-navy/60 flex items-center justify-center mb-5 lg:mx-auto shrink-0" style={{background: 'rgba(45,82,126,0.25)'}}>
                  <span className="font-grotesk font-bold text-lg" style={{color:'#7BAFD4'}}>{step.number}</span>
                </div>
                <h3 className="font-grotesk font-semibold text-white text-lg mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 gold-divider" />
    </section>
  )
}
