const caseStudies = [
  {
    company: 'Garza International',
    industry: 'Construction',
    problem: 'Manual quoting process taking 6+ hours per bid.',
    result: '60% faster quoting.',
  },
  {
    company: "Susie's Jewelry Repair",
    industry: 'Retail',
    problem: 'Inconsistent lead capture and follow-up.',
    result: '3x leads.',
  },
  {
    company: 'LoveFlow',
    industry: 'Tech',
    problem: 'Matching algorithm underperforming on retention.',
    result: '40% better matches.',
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-bgCanvas py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="sl-eyebrow">No. 03 — The Evidence</span>
          <h2 className="sl-h2 text-navy-900 mt-4">Case Studies. Real Results.</h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="bg-white border border-navy-900 rounded p-6"
            >
              <div className="mb-4">
                <span className="sl-eyebrow block mb-2">{cs.industry}</span>
                <h3 className="font-display text-xl font-medium text-navy-900 sl-h3">{cs.company}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-fg3 mb-1">Problem</p>
                  <p className="font-sans text-sm text-fg2">{cs.problem}</p>
                </div>
                <div>
                  <p className="font-sans text-xs uppercase tracking-wider text-fg3 mb-1">Result</p>
                  <p className="font-display text-2xl font-medium text-gold-600 sl-display-sm">{cs.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
