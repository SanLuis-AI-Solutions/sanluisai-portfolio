const industries = [
  {
    name: 'Manufacturing',
    problems: ['Production bottlenecks slowing throughput.', 'Unplanned downtime reducing output.', 'Quality control gaps increasing waste.'],
  },
  {
    name: 'Healthcare',
    problems: ['Administrative overhead draining staff hours.', 'Prior authorization delays slowing care.', 'Patient intake inefficiencies piling up.'],
  },
  {
    name: 'Real Estate',
    problems: ['Lead response times slipping through cracks.', 'Property management tasks falling behind.', 'Market analysis taking too long.'],
  },
  {
    name: 'Professional Services',
    problems: ['Billable hours lost to admin work.', 'Document review creating constant backlogs.', 'Client onboarding dragging for weeks.'],
  },
]

export default function Problem() {
  return (
    <section id="industries" className="bg-bgSurface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="sl-eyebrow">No. 01 — The Diagnosis</span>
          <h2 className="sl-h2 text-navy-900 mt-4 max-w-2xl mx-auto">
            The bottleneck is not your tech stack.
          </h2>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white border border-navy-900 rounded p-6"
            >
              <span className="sl-eyebrow block mb-3">{industry.name}</span>
              <ul className="space-y-3">
                {industry.problems.map((problem, i) => (
                  <li key={i} className="font-sans text-sm text-fg2 flex items-start gap-2">
                    <span className="text-gold-600 shrink-0 mt-0.5">&#9670;</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
