import Link from 'next/link'

const questions = [
  {
    q: 'Will this replace people on my team?',
    a: 'No. Every system we build is designed to make your team more powerful — not smaller. AI handles the repetitive inputs. Your people handle the judgment, relationships, and decisions. We\'ve worked with multiple Houston businesses and not one of them lost a single team member.',
  },
  {
    q: 'How much does it cost?',
    a: 'We start with a $300 Discovery Session — 60 minutes, written roadmap, yours to keep whether you hire us or not. Project builds typically start at $1,200 for workflow automation and go from there based on scope. We calculate ROI together before you spend a dollar on a build.',
  },
  {
    q: 'How long does it take?',
    a: 'Most projects ship in 2–6 weeks. The Garza dashboard and Susie\'s Workshop OS both launched in under 3 weeks. We don\'t drag things out.',
  },
  {
    q: 'I tried ChatGPT and it didn\'t work for us.',
    a: 'Prompting ChatGPT is different from building a system. We build something that runs automatically — integrated into your existing workflow, trained on your process, consistent every time. No one on your team needs to know how to write a prompt.',
  },
  {
    q: 'We\'re a people business. AI doesn\'t fit us.',
    a: 'The businesses we work with are still very much people businesses — after we\'re done, even more so. The AI just handles the admin so your people can focus on the actual relationship work. That\'s exactly the point.',
  },
  {
    q: 'I don\'t know where to start.',
    a: 'That\'s what the Discovery Session is for. You don\'t need to come in with a clear idea. We figure it out together — and you leave with a written roadmap, even if you decide not to move forward.',
  },
]

export default function FAQ() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-bg">
      <div className="max-w-4xl mx-auto">
        <div className="mb-14 text-center">
          <span className="section-label">Common Questions</span>
          <h2 className="section-h2 text-white mt-4">
            Your questions, answered.
          </h2>
          <p className="text-muted text-base mt-3">
            No vague answers. No sales speak.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="p-7 rounded-xl border border-navy/35" style={{background: 'rgba(45,82,126,0.08)'}}>
              <h3 className="font-grotesk font-semibold text-white text-base mb-3 flex items-start gap-3">
                <span className="text-gold shrink-0 mt-0.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
                  </svg>
                </span>
                {item.q}
              </h3>
              <p className="text-muted text-sm leading-relaxed pl-7">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-muted text-sm mb-3">Still have a question?</p>
          <Link
            href="mailto:contact@sanluisai.com"
            className="inline-flex items-center text-sm text-gold hover:text-gold/70 transition-colors group"
          >
            Email us directly
            <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 gold-divider" />
    </section>
  )
}
