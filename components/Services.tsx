const services = [
  {
    title: 'Custom AI Systems',
    description: 'Built from scratch to solve your exact problem. No bloated features, no compromises.',
    icon: '◆',
  },
  {
    title: 'AI Automation',
    description: 'Workflow automation that eliminates manual busywork and frees your team for high-value work.',
    icon: '⚡',
  },
  {
    title: 'AI Agents',
    description: 'Autonomous agents that research, decide, and act — handling complex tasks without human oversight.',
    icon: '◎',
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on where AI can have the biggest impact on your business operations.',
    icon: '◈',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
          What <span className="text-gold">We Build</span>
        </h2>
        <p className="font-body text-textMuted text-center max-w-2xl mx-auto mb-16">
          Everything is custom. Everything is measurable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-dark rounded-xl p-6 border border-white/5 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="text-3xl text-gold mb-4">{s.icon}</div>
              <h3 className="font-heading text-lg font-semibold text-white mb-3">{s.title}</h3>
              <p className="font-body text-sm text-textMuted leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
