const caseStudies = [
  {
    company: 'Garza International',
    industry: 'Construction',
    problem: 'Manual quoting process taking 6+ hours per bid',
    result: '60% faster',
    description: 'AI-powered quoting engine that parses blueprints and generates accurate bids in minutes.',
  },
  {
    company: "Susie's Jewelry Repair",
    industry: 'Retail',
    problem: 'Inconsistent lead capture and follow-up',
    result: '3x leads',
    description: 'Automated lead qualification and CRM integration that never drops a prospect.',
  },
  {
    company: 'LoveFlow',
    industry: 'Tech',
    problem: 'Matching algorithm underperforming on retention',
    result: '40% better matches',
    description: 'Custom recommendation engine overhaul improving user satisfaction and retention.',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
          Case Studies. <span className="text-gold">Real Results.</span>
        </h2>
        <p className="font-body text-textMuted text-center max-w-2xl mx-auto mb-16">
          Measurable outcomes from real deployments.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="bg-dark rounded-xl p-6 border border-white/5 hover:border-gold/50 transition-all duration-300 group"
            >
              <div className="mb-4">
                <div className="font-heading text-sm text-gold uppercase tracking-wider mb-1">{cs.industry}</div>
                <h3 className="font-heading text-xl font-semibold text-white">{cs.company}</h3>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <div className="font-body text-xs text-textMuted uppercase tracking-wider">Problem</div>
                  <div className="font-body text-sm text-white/80">{cs.problem}</div>
                </div>
                <div>
                  <div className="font-body text-xs text-textMuted uppercase tracking-wider">Result</div>
                  <div className="font-heading text-2xl font-bold text-gold">{cs.result}</div>
                </div>
              </div>
              <p className="font-body text-sm text-textMuted">{cs.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
