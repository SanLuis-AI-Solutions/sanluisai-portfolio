const services = [
  {
    title: 'Custom AI Systems',
    description: 'Built from scratch to solve your exact problem. No bloated features, no compromises.',
  },
  {
    title: 'AI Automation',
    description: 'Workflow automation that eliminates manual busywork and frees your team for high-value work.',
  },
  {
    title: 'AI Agents',
    description: 'Autonomous agents that research, decide, and act, handling complex tasks without human oversight.',
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on where AI can have the biggest impact on your business operations.',
  },
]

export default function Services() {
  return (
    <section className="bg-bgSurface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sl-h2 text-navy-900 text-center mb-16">What We Build.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-navy-900 rounded p-6"
            >
              <span className="text-gold-600 text-lg block mb-4">&#9670;</span>
              <h3 className="font-display text-lg font-medium text-navy-900 mb-3 sl-h4">{s.title}</h3>
              <p className="sl-body text-fg2">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
