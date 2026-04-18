import Link from 'next/link'

const services = [
  {
    eyebrow: 'Workflow Automation',
    outcome: 'Stop doing it manually.',
    desc: 'Map your process once. We build the automation that runs it — every time, without fail. No one on your team has to touch it.',
    bestFor: 'Teams losing hours to repetitive tasks',
    cta: 'Learn more',
    href: '/services#automation',
    accent: 'gold',
  },
  {
    eyebrow: 'AI Agent Systems',
    outcome: 'Your 24/7 AI team.',
    desc: 'Agents that intake, qualify, research, and route — while your people focus on decisions, relationships, and results.',
    bestFor: 'Businesses that need to scale without hiring',
    cta: 'Learn more',
    href: '/services#agents',
    accent: 'navy',
  },
  {
    eyebrow: 'Full Application Builds',
    outcome: 'An app built around how you actually work.',
    desc: 'Designed, built, and deployed in weeks. No agency markup. No six-month timeline. Just a real product that ships.',
    bestFor: 'Founders and owners with a product idea',
    cta: 'Learn more',
    href: '/services#apps',
    accent: 'gold',
  },
  {
    eyebrow: 'AI Strategy Session',
    outcome: 'Know exactly where to start.',
    desc: 'One focused session. We map your operations, find your highest-leverage AI opportunity, and hand you a clear written plan.',
    bestFor: 'Owners who know they need AI but aren\\'t sure where to begin',
    cta: 'Book a session',
    href: 'https://cal.com/sanluisai',
    accent: 'navy',
    external: true,
  },
]

export default function Solution() {
  return (
    <section className=\"py-24 px-6 lg:px-8 bg-bg\">
      <div className=\"max-w-7xl mx-auto\">
        <div className=\"mb-14\">
          <span className=\"section-label\">What We Build</span>
          <h2 className=\"section-h2 text-white mt-4 max-w-2xl\">\n            From problem to shipped — in weeks.\n          </h2>
          <p className=\"text-muted text-base mt-4 max-w-lg leading-relaxed\">\n            We build the systems that handle the repetitive so your people can focus on judgment, relationships, and strategy.\n          </p>\n        </div>

        <div className=\"grid md:grid-cols-2 gap-5\">\n          {services.map((service, i) => (\n            <div\n              key={i}\n              className={`group relative p-8 rounded-xl flex flex-col gap-4 border transition-all duration-200 ${\n                service.accent === 'gold'\n                  ? 'border-gold/15 hover:border-gold/30 bg-surface hover:bg-[#181818]'\n                  : 'border-navy/35 hover:border-navy/60 hover:bg-[#0D1828]'\n              }`}\n              style={service.accent === 'navy' ? {background: 'rgba(45,82,126,0.08)'} : {}}\n            >\n              {/* Top accent line */}\n              <div className={`absolute top-0 left-8 right-8 h-[2px] rounded-full ${service.accent === 'gold' ? 'bg-gold/40' : 'bg-navy/60'}`} />

              <div>\n                <p className={`text-xs font-inter font-medium tracking-widest uppercase mb-3 ${service.accent === 'gold' ? 'text-gold/70' : ''}`}\n                  style={service.accent === 'navy' ? {color: '#7BAFD4'} : {}}>\n                  {service.eyebrow}\n                </p>\n                <h3 className=\"font-grotesk font-bold text-white text-xl leading-tight tracking-tight\">\n                  {service.outcome}\n                </h3>\n              </div>

              <p className=\"text-muted text-sm leading-relaxed flex-1\">{service.desc}</p>

              <div className=\"flex items-center justify-between pt-2 border-t border-white/5\">\n                <p className=\"text-white/30 text-xs\">Best for: {service.bestFor}</p>\n                <Link\n                  href={service.href}\n                  target={service.external ? '_blank' : undefined}\n                  rel={service.external ? 'noopener noreferrer' : undefined}\n                  className={`text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all ${\n                    service.accent === 'gold' ? 'text-gold hover:text-gold/80' : ''\n                  }`}\n                  style={service.accent === 'navy' ? {color: '#7BAFD4'} : {}}\n                >\n                  {service.cta} →\n                </Link>\n              </div>\n            </div>\n          ))}\n        </div>\n      </div>

      <div className=\"max-w-7xl mx-auto mt-24 gold-divider\" />\n    </section>\n  )\n}