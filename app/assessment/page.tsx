'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const categories = [
  { key: 'clarity', label: 'Clarity', desc: 'Do you know the exact problem to solve?', max: 100 },
  { key: 'data', label: 'Data', desc: 'Do you have organized, accessible data?', max: 100 },
  { key: 'adoption', label: 'Adoption', desc: 'Is your team ready to use AI outputs?', max: 100 },
  { key: 'infrastructure', label: 'Infrastructure', desc: 'Do you have the compute & security needed?', max: 100 },
  { key: 'leadership', label: 'Leadership', desc: 'Does leadership sponsor the initiative?', max: 100 },
]

const questions = [
  {
    category: 'clarity',
    question: 'Do you have a clearly defined business problem that AI could solve?',
    options: [
      { label: 'Not yet — we know we need AI but not exactly where.', score: 10 },
      { label: 'We have a vague idea but no written scope.', score: 30 },
      { label: 'We have a written problem statement and success metric.', score: 60 },
      { label: 'We have a full scope doc with ROI estimates and timeline.', score: 100 },
    ],
  },
  {
    category: 'data',
    question: 'What is the state of your data for this use case?',
    options: [
      { label: 'Data exists but is siloed, messy, or inaccessible.', score: 10 },
      { label: 'Data is accessible but requires significant cleaning.', score: 35 },
      { label: 'Data is clean, structured, and mostly ready.', score: 75 },
      { label: 'Data is clean, documented, and easily queryable.', score: 100 },
    ],
  },
  {
    category: 'adoption',
    question: 'Is your team prepared to adopt AI-driven workflows?',
    options: [
      { label: 'We are skeptical or have had failed AI initiatives before.', score: 10 },
      { label: 'Some team members are curious; most are neutral.', score: 30 },
      { label: 'Leadership and key users are on board.', score: 65 },
      { label: 'Full team alignment with training plan and pilot budget ready.', score: 100 },
    ],
  },
  {
    category: 'infrastructure',
    question: 'Do you have the technical infrastructure to support an AI system?',
    options: [
      { label: 'No dedicated infrastructure; shared consumer-grade tooling.', score: 10 },
      { label: 'Basic infrastructure but no AI-specific tooling.', score: 35 },
      { label: 'Cloud environment with API access and basic monitoring.', score: 70 },
      { label: 'Enterprise-grade infrastructure with security, monitoring, and CI/CD.', score: 100 },
    ],
  },
  {
    category: 'leadership',
    question: 'What level of leadership commitment exists for this initiative?',
    options: [
      { label: 'No formal commitment; exploring options.', score: 10 },
      { label: 'One stakeholder is interested but no budget allocated.', score: 30 },
      { label: 'Executive sponsor assigned with preliminary budget.', score: 70 },
      { label: 'C-level sponsor, approved budget, and defined success metrics.', score: 100 },
    ],
  },
]

export default function AssessmentPage() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'results'>('intro')
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleAnswer = (score: number) => {
    const q = questions[current]
    setAnswers(prev => ({ ...prev, [q.category]: score }))
    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
    } else {
      setStep('results')
    }
  }

  const handleBack = () => {
    if (current > 0) {
      setCurrent(c => c - 1)
      const prevCat = questions[current - 1].category
      setAnswers(prev => { const copy = { ...prev }; delete copy[prevCat]; return copy })
    }
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  const maxPossible = questions.length * 100
  const percentScore = Math.round((totalScore / maxPossible) * 100)

  const getVerdict = () => {
    if (percentScore >= 80) return { label: 'Ready to Build', color: 'text-emerald-600', summary: 'Your organization has the clarity, data, adoption readiness, infrastructure, and leadership to move into a build engagement. Book a Discovery Session to scope and price.' }
    if (percentScore >= 55) return { label: 'Discovery Recommended', color: 'text-amber-600', summary: 'Strong foundation with some gaps. A $300 Discovery Session will diagnose exactly what is needed and produce a prioritized action plan.' }
    if (percentScore >= 35) return { label: 'Foundation Phase', color: 'text-orange-500', summary: 'You have pieces in place but need structure. A Discovery Session will map your readiness gaps and a phased roadmap.' }
    return { label: 'Discovery First', color: 'text-red-500', summary: 'Early stage — that is normal. A Discovery Session is the right starting point to define scope, align stakeholders, and identify quick wins.' }
  }

  const verdict = getVerdict()

  const getBarColor = (score: number) => {
    if (score >= 70) return 'bg-emerald-500'
    if (score >= 40) return 'bg-amber-500'
    return 'bg-red-400'
  }

  if (step === 'intro') {
    return (
      <main className="min-h-screen bg-bone-50 text-fg1">
        {/* Inline Nav */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bone-50/85 backdrop-blur-md border-b border-navy-200 shadow-1">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
            <a href="/" className="font-display text-xl md:text-2xl font-bold text-navy-800 tracking-tight">SanLuis AI</a>
            <div className="hidden md:flex items-center gap-10">
              {['Services','Industries','Case Studies','About','Blog'].map(l => (
                <a key={l} href={`/${l.toLowerCase().replace(' ','-').replace('case-studies','case-studies')}`} className="font-sans text-sm text-fg2 hover:text-navy-800 transition-colors duration-200">{l}</a>
              ))}
              <a href="/booking" className="font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow transition-all duration-220 rounded">Book Discovery</a>
            </div>
          </div>
        </nav>

        <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-3xl mx-auto">
          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-fg3 mb-6">AI Readiness Assessment</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[0.95] mb-6">
            How Ready Is Your<br />Organization for AI?
          </h1>
          <p className="font-sans text-base md:text-lg text-fg2 leading-relaxed mb-8 max-w-[50ch]">
            Assess your readiness across five dimensions — clarity, data, adoption, infrastructure, and leadership.
            Get a scored breakdown and a clear next step in under two minutes.
          </p>
          <button
            onClick={() => setStep('quiz')}
            className="font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow transition-all duration-220 rounded"
          >
            Start Assessment — 2 min
          </button>
          <p className="font-sans text-xs text-fg3 mt-4 italic">No email required. Results shown instantly.</p>
        </section>
      </main>
    )
  }

  if (step === 'quiz') {
    const q = questions[current]
    const answered = answers[q.category] !== undefined
    return (
      <main className="min-h-screen bg-bone-50 text-fg1">
        <nav className="fixed top-0 left-0 right-0 z-50 bg-bone-50/85 backdrop-blur-md border-b border-navy-200 shadow-1">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
            <a href="/" className="font-display text-xl md:text-2xl font-bold text-navy-800 tracking-tight">SanLuis AI</a>
            <span className="font-sans text-sm text-fg3">Question {current + 1} of {questions.length}</span>
          </div>
        </nav>

        <section className="pt-32 md:pt-40 pb-16 px-6 md:px-12 max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="w-full h-1 bg-navy-100 rounded-full mb-10 overflow-hidden">
            <div className="h-full bg-gold-600 transition-all duration-300" style={{ width: `${((current) / questions.length) * 100}%` }} />
          </div>

          <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-fg3 mb-3">{categories.find(c => c.key === q.category)?.label}</p>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 leading-[1.1] mb-10">{q.question}</h2>

          <div className="flex flex-col gap-3 mb-8">
            {q.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt.score)}
                className={`text-left font-sans text-sm md:text-base px-6 py-4 border rounded transition-all duration-200 ${
                  answers[q.category] === opt.score
                    ? 'border-gold-600 bg-gold-100/40 shadow-1'
                    : 'border-navy-200 hover:border-gold-400 hover:bg-gold-100/20'
                }`}
              >
                <span className="font-semibold text-navy-900">{opt.label}</span>
              </button>
            ))}
          </div>

          {current > 0 && (
            <button onClick={handleBack} className="font-sans text-sm text-fg3 hover:text-navy-800 transition-colors duration-200 underline">
              ← Back
            </button>
          )}
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-bone-50 text-fg1">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bone-50/85 backdrop-blur-md border-b border-navy-200 shadow-1">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
          <a href="/" className="font-display text-xl md:text-2xl font-bold text-navy-800 tracking-tight">SanLuis AI</a>
          <a href="/booking" className="font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow transition-all duration-220 rounded">Book Discovery</a>
        </div>
      </nav>

      <section className="pt-28 md:pt-36 pb-16 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-fg3 mb-4">Your Results</p>

        {/* Score Circle */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border-8 border-navy-100 flex flex-col items-center justify-center mb-4">
            <span className="font-display text-5xl md:text-6xl font-bold text-navy-900">{percentScore}</span>
            <span className="font-sans text-xs text-fg3 mt-1">out of 100</span>
          </div>
          <h2 className={`font-display text-2xl md:text-3xl font-bold ${verdict.color}`}>{verdict.label}</h2>
        </div>

        <p className="font-sans text-base text-fg2 leading-relaxed mb-10 text-center max-w-[50ch] mx-auto">{verdict.summary}</p>

        {/* Breakdown Bars */}
        <div className="mb-10">
          <h3 className="font-display text-lg font-bold text-navy-900 mb-5">Score Breakdown</h3>
          {categories.map(cat => {
            const score = answers[cat.key] || 0
            return (
              <div key={cat.key} className="mb-4">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-sans text-sm font-medium text-fg1">{cat.label}</span>
                  <span className="font-sans text-xs text-fg3">{score} / 100</span>
                </div>
                <div className="w-full h-2 bg-navy-100 rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-500 ${getBarColor(score)}`} style={{ width: `${score}%` }} />
                </div>
                <p className="font-sans text-xs text-fg3 mt-1">{cat.desc}</p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="border border-navy-200 bg-white rounded p-6 md:p-8 mb-10 shadow-2">
          <h3 className="font-display text-xl font-bold text-navy-900 mb-2">Your Next Step</h3>
          <p className="font-sans text-sm text-fg2 mb-5">
            {percentScore >= 80
              ? 'You are ready to scope and build. Book a Discovery Session to define the engagement.'
              : 'Book a 60-minute Discovery Session. We will diagnose your exact gaps and produce a prioritized AI Action Plan — delivered as a PDF.'}
          </p>
          <a href="/booking" className="inline-block font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow transition-all duration-220 rounded">
            Book $300 Discovery Session
          </a>
        </div>

        {/* Email Capture */}
        <div className="border border-navy-200 bg-white rounded p-6 md:p-8 shadow-2">
          <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Save Your Results</h3>
          <p className="font-sans text-sm text-fg2 mb-4">Get your AI Readiness Report sent to your inbox, plus our guide to the 5 most common AI implementation failures.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              window.location.href = `mailto:contact@sanluisai.com?subject=AI Readiness Score: ${percentScore}&body=Score: ${percentScore}%0A%0ABreakdown:%0A${categories.map(c => `${c.label}: ${answers[c.key] || 0}/100`).join('%0A')}%0A%0AEmail: ${email}`
            }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 font-sans text-sm px-4 py-3 border border-navy-200 rounded focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-colors"
            />
            <button type="submit" className="font-sans text-sm font-semibold px-6 py-3 bg-gold-600 text-white hover:bg-gold-700 transition-all duration-200 rounded whitespace-nowrap">
              Send My Report
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
