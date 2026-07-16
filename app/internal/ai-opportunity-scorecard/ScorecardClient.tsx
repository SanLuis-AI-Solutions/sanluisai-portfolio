'use client'

import { useMemo, useRef, useState } from 'react'
import {
  processSubmission,
  scoreSubmission,
  type CategorySignal,
  type RetentionSubtype,
  type Score,
  type ScorecardAnswers,
  type ScorecardResult,
  type ScorecardSubmission,
  ScorecardValidationError,
} from '@/lib/scorecard'

const categoryOptions: Array<{ value: CategorySignal; label: string }> = [
  { value: 'lead', label: 'New inquiries and follow-up' },
  { value: 'content', label: 'Content creation and publishing' },
  { value: 'retention-review', label: 'Customer retention and review requests' },
  { value: 'reporting', label: 'Reporting and decision-making' },
  { value: 'admin', label: 'Inbox, scheduling, or administrative work' },
  { value: 'other', label: 'Other or not yet clear' },
]

const scoredQuestions: Array<{ key: Exclude<keyof ScorecardAnswers, 'q1' | 'retentionSubtype'>; label: string; options: string[] }> = [
  { key: 'q2', label: 'How often does this problem occur?', options: ['Rarely', 'Monthly', 'Weekly', 'Daily or multiple times per day'] },
  { key: 'q3', label: 'How much human time does it consume?', options: ['Less than one hour per week', 'One to three hours per week', 'Four to ten hours per week', 'More than ten hours per week'] },
  { key: 'q4', label: 'How standardized is the current process?', options: ['It changes every time', 'Some repeatable steps exist', 'Most steps are repeatable', 'Clear rules, fields, and owners exist'] },
  { key: 'q5', label: 'Where is the information needed?', options: ['In people’s heads or scattered messages', 'Several systems with inconsistent records', 'One or two accessible systems', 'Structured and consistently maintained'] },
  { key: 'q6', label: 'How sensitive are the decisions involved?', options: ['High-risk decisions without review', 'Sensitive decisions with human review', 'Mostly low-risk with escalation', 'Low-risk, rules-based work'] },
  { key: 'q7', label: 'Can one person approve rules and exceptions?', options: ['No', 'Not yet', 'Probably', 'Yes'] },
  { key: 'q8', label: 'How quickly would improvement matter?', options: ['No clear urgency', 'This year', 'This quarter', 'This month'] },
  { key: 'q9', label: 'Is there a measurable outcome?', options: ['No agreed measure', 'A rough outcome is known', 'One or two metrics are available', 'Baseline and target metrics are available'] },
  { key: 'q10', label: 'What is the approximate value of solving it?', options: ['Convenience only', 'Modest time savings', 'Meaningful cost, capacity, or customer impact', 'Material revenue, risk, or delivery impact'] },
]

type LocalEvent = { name: string; at: string; detail?: string }

function newSubmissionKey() {
  return `SYN-LOCAL-${crypto.randomUUID().slice(0, 8).toUpperCase()}`
}

export default function ScorecardClient({ initialSubmission }: { initialSubmission?: ScorecardSubmission }) {
  const usedKeys = useRef(new Set<string>())
  const events = useRef<LocalEvent[]>([])
  const [eventCount, setEventCount] = useState(0)
  const [started, setStarted] = useState(Boolean(initialSubmission))
  const [submissionKey, setSubmissionKey] = useState(initialSubmission?.submissionKey ?? '')
  const [answers, setAnswers] = useState<Partial<ScorecardAnswers>>(initialSubmission?.answers ?? {})
  const [result, setResult] = useState<ScorecardResult | null>(() => initialSubmission ? scoreSubmission(initialSubmission) : null)
  const [error, setError] = useState('')

  const answeredCount = useMemo(() => {
    const scored = scoredQuestions.filter(question => answers[question.key] !== undefined).length
    return scored + (answers.q1 ? 1 : 0)
  }, [answers])

  const record = (name: string, detail?: string) => {
    events.current.push({ name, at: new Date().toISOString(), detail })
    setEventCount(events.current.length)
  }

  const start = () => {
    setStarted(true)
    setSubmissionKey(newSubmissionKey())
    record('scorecard_started')
  }

  const submit = () => {
    setError('')
    try {
      const nextResult = processSubmission({ submissionKey, synthetic: true, answers }, usedKeys.current)
      setResult(nextResult)
      record('scorecard_submitted', nextResult.category)
    } catch (caught) {
      const message = caught instanceof ScorecardValidationError ? caught.message : 'The synthetic run could not be processed.'
      setError(message)
      record('scorecard_validation_failed', caught instanceof ScorecardValidationError ? caught.code : 'unknown')
    }
  }

  const reset = () => {
    setStarted(false)
    setSubmissionKey('')
    setAnswers({})
    setResult(null)
    setError('')
    record('scorecard_reset')
  }

  if (!started) {
    return (
      <main className="min-h-screen bg-bone-50 px-5 py-16 text-fg1 md:px-10">
        <section className="mx-auto max-w-4xl border border-navy-200 bg-white p-7 shadow-2 md:p-12" aria-labelledby="scorecard-title">
          <p className="sl-eyebrow mb-5">Private synthetic review</p>
          <h1 id="scorecard-title" className="sl-display-md mb-6">Find the business workflow worth improving first</h1>
          <p className="sl-body-lg mb-8 max-w-2xl">Answer ten practical questions and receive a directional result based on workflow opportunity, readiness, and risk.</p>
          <div className="mb-8 border-l-4 border-gold-600 bg-gold-100 p-4">
            <p className="font-sans text-sm font-semibold text-navy-900">Internal test only</p>
            <p className="font-sans text-sm text-fg2">No names, emails, phone numbers, company details, customer records, free text, sending, analytics, booking, or payment actions.</p>
          </div>
          <button type="button" onClick={start} className="rounded bg-navy-900 px-7 py-4 font-sans text-sm font-semibold text-white hover:bg-navy-800">
            Start synthetic Scorecard
          </button>
        </section>
      </main>
    )
  }

  if (result) {
    return (
      <main className="min-h-screen bg-bone-50 px-5 py-12 text-fg1 md:px-10">
        <article className="mx-auto max-w-4xl border border-navy-200 bg-white p-7 shadow-2 md:p-12" data-result-category={result.category}>
          <p className="sl-eyebrow mb-4">Directional synthetic result</p>
          <h1 className="sl-h1 mb-4">{result.title}</h1>
          <p className="sl-body-lg mb-8">{result.diagnosis}</p>
          <dl className="mb-8 grid gap-4 sm:grid-cols-2">
            <div className="border border-navy-200 bg-bone-50 p-4">
              <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-fg3">Opportunity</dt>
              <dd className="mt-1 font-display text-2xl text-navy-900">{result.opportunityScore}/12</dd>
              <dd className="font-sans text-sm text-fg2">{result.opportunityBand}</dd>
            </div>
            <div className="border border-navy-200 bg-bone-50 p-4">
              <dt className="font-sans text-xs font-semibold uppercase tracking-wider text-fg3">Readiness</dt>
              <dd className="mt-1 font-display text-2xl text-navy-900">{result.readinessScore}/15</dd>
              <dd className="font-sans text-sm text-fg2">{result.readinessBand}</dd>
            </div>
          </dl>
          <h2 className="sl-h3 mb-3">Practical next steps</h2>
          <ol className="mb-8 list-decimal space-y-3 pl-5 font-sans text-sm leading-relaxed text-fg2">
            {result.nextSteps.map(step => <li key={step}>{step}</li>)}
          </ol>
          <div className="mb-8 border-l-4 border-navy-700 bg-navy-100 p-4">
            <p className="font-sans text-sm font-semibold text-navy-900">Important limitation</p>
            <p className="font-sans text-sm text-fg2">{result.limitation}</p>
          </div>
          <button type="button" disabled aria-disabled="true" className="rounded bg-navy-300 px-6 py-4 font-sans text-sm font-semibold text-navy-700 opacity-80">
            {result.ctaLabel} · disabled
          </button>
          <p className="mt-3 font-sans text-xs text-fg3">The Scorecard is directional. It is not a technical, financial, legal, privacy, or security audit and does not guarantee business results.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-navy-100 pt-6">
            <button type="button" onClick={reset} className="rounded border border-navy-300 px-5 py-3 font-sans text-sm font-semibold text-navy-800 hover:border-gold-600">
              Start another synthetic run
            </button>
            <span className="font-mono text-xs text-fg3" aria-label={`${eventCount} local test events`}>Local events: {eventCount}</span>
          </div>
        </article>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-bone-50 px-5 py-10 text-fg1 md:px-10">
      <form className="mx-auto max-w-4xl border border-navy-200 bg-white p-6 shadow-2 md:p-10" onSubmit={event => { event.preventDefault(); submit() }} noValidate>
        <div className="mb-8">
          <p className="sl-eyebrow mb-3">Private synthetic review</p>
          <h1 className="sl-h1 mb-3">AI Opportunity Scorecard</h1>
          <p className="font-sans text-sm text-fg2">No personal or customer data fields are available. All answers remain in this browser session.</p>
          <div className="mt-5 h-2 overflow-hidden rounded bg-navy-100" role="progressbar" aria-label="Scorecard progress" aria-valuemin={0} aria-valuemax={10} aria-valuenow={answeredCount}>
            <div className="h-full bg-gold-600 motion-safe:transition-[width]" style={{ width: `${answeredCount * 10}%` }} />
          </div>
          <p className="mt-2 font-mono text-xs text-fg3">{answeredCount} of 10 questions answered</p>
        </div>

        <fieldset className="mb-10">
          <legend className="sl-h3 mb-4">1. Where does work most often slow down?</legend>
          <div className="grid gap-3">
            {categoryOptions.map(option => (
              <label key={option.value} className="flex min-h-12 cursor-pointer items-center gap-3 rounded border border-navy-200 px-4 py-3 hover:border-gold-600">
                <input type="radio" name="q1" value={option.value} checked={answers.q1 === option.value} onChange={() => setAnswers(previous => ({ ...previous, q1: option.value, retentionSubtype: option.value === 'retention-review' ? previous.retentionSubtype : undefined }))} />
                <span className="font-sans text-sm text-fg1">{option.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {answers.q1 === 'retention-review' && (
          <fieldset className="mb-10 border-l-4 border-gold-600 bg-gold-100 p-4">
            <legend className="px-2 font-sans text-sm font-semibold text-navy-900">Internal synthetic classification</legend>
            <p className="mb-3 font-sans text-xs text-fg2">The canonical public answer stays combined. Select the reviewed test route without entering free text.</p>
            {(['follow-up', 'review-request'] as RetentionSubtype[]).map(value => (
              <label key={value} className="mr-5 inline-flex min-h-11 items-center gap-2">
                <input type="radio" name="retentionSubtype" value={value} checked={answers.retentionSubtype === value} onChange={() => setAnswers(previous => ({ ...previous, retentionSubtype: value }))} />
                <span className="font-sans text-sm">{value === 'follow-up' ? 'Customer follow-up' : 'Review requests'}</span>
              </label>
            ))}
          </fieldset>
        )}

        {scoredQuestions.map((question, index) => (
          <fieldset key={question.key} className="mb-10">
            <legend className="sl-h3 mb-4">{index + 2}. {question.label}</legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {question.options.map((option, score) => (
                <label key={option} className="flex min-h-14 cursor-pointer items-center gap-3 rounded border border-navy-200 px-4 py-3 hover:border-gold-600">
                  <input type="radio" name={question.key} value={score} checked={answers[question.key] === score} onChange={() => setAnswers(previous => ({ ...previous, [question.key]: score as Score }))} />
                  <span className="font-sans text-sm text-fg1">{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}

        {error && <p role="alert" className="mb-5 border border-red-300 bg-red-50 p-4 font-sans text-sm text-red-700">{error}</p>}
        <button type="submit" className="rounded bg-navy-900 px-7 py-4 font-sans text-sm font-semibold text-white hover:bg-navy-800">
          Calculate synthetic result
        </button>
        <p className="mt-3 font-mono text-xs text-fg3">Synthetic key: {submissionKey}</p>
      </form>
    </main>
  )
}
