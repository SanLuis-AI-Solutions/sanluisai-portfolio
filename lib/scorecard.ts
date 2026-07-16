export type Score = 0 | 1 | 2 | 3
export type CategorySignal = 'lead' | 'content' | 'retention-review' | 'reporting' | 'admin' | 'other'
export type RetentionSubtype = 'follow-up' | 'review-request'
export type ResultCategory =
  | 'Lead Response Automation'
  | 'Content Automation'
  | 'Customer Follow-Up Loop'
  | 'Review Request System'
  | 'Reporting and Insights Automation'
  | 'Inbox and Admin Workflow'
  | 'General guidance'

export type ScorecardAnswers = {
  q1: CategorySignal
  retentionSubtype?: RetentionSubtype
  q2: Score
  q3: Score
  q4: Score
  q5: Score
  q6: Score
  q7: Score
  q8: Score
  q9: Score
  q10: Score
}

export type ScorecardSubmission = {
  submissionKey: string
  synthetic: true
  answers: ScorecardAnswers
}

export type ScorecardResult = {
  category: ResultCategory
  opportunityScore: number
  opportunityBand: string
  readinessScore: number
  readinessBand: string
  route: 'education' | 'assessment' | 'governance-assessment'
  title: string
  diagnosis: string
  nextSteps: readonly string[]
  limitation: string
  ctaLabel: string
  ctaState: 'inert'
  safetyFlags: string[]
}

export class ScorecardValidationError extends Error {
  code: 'duplicate' | 'incomplete' | 'malformed' | 'prohibited-data'

  constructor(code: 'duplicate' | 'incomplete' | 'malformed' | 'prohibited-data', message: string) {
    super(message)
    this.code = code
  }
}

const categoryCopy: Record<Exclude<ResultCategory, 'General guidance'>, Omit<ScorecardResult, 'category' | 'opportunityScore' | 'opportunityBand' | 'readinessScore' | 'readinessBand' | 'route' | 'ctaLabel' | 'ctaState' | 'safetyFlags'>> = {
  'Lead Response Automation': {
    title: 'Your strongest opportunity is faster, more consistent lead response.',
    diagnosis: 'Inquiry ownership, acknowledgement, follow-up, and closure are the workflow to review first.',
    nextSteps: ['List every inquiry channel and owner.', 'Define response, follow-up, escalation, and closure rules.', 'Measure the current process before automating messages.'],
    limitation: 'This result does not prove lost revenue, missed leads, or a specific response-time problem.',
  },
  'Content Automation': {
    title: 'Your strongest opportunity is a controlled content-production system.',
    diagnosis: 'Content work appears repeatable, while brand review and publishing controls remain important.',
    nextSteps: ['Define approved topics, voice, claims, and prohibited content.', 'Separate drafting, review, approval, and publishing states.', 'Test a small batch before connecting publishing tools.'],
    limitation: 'This result does not guarantee reach, engagement, leads, or sales.',
  },
  'Customer Follow-Up Loop': {
    title: 'Your strongest opportunity is consistent customer follow-up.',
    diagnosis: 'Follow-up obligations appear dependent on memory or scattered tools.',
    nextSteps: ['Define the events that create a follow-up obligation.', 'Assign owners, due dates, consent rules, and stop conditions.', 'Pilot reminders and drafts without automatic sending.'],
    limitation: 'Frequency and message content must respect consent, opt-out, privacy, and industry rules.',
  },
  'Review Request System': {
    title: 'Your strongest opportunity is a reliable review-request process.',
    diagnosis: 'Eligible customers may not receive a consistent and policy-compliant invitation to share feedback.',
    nextSteps: ['Define the eligible event and waiting period.', 'Confirm exclusions, opt-out handling, and platform rules.', 'Track requests without filtering by expected sentiment.'],
    limitation: 'The system must not suppress negative feedback or offer prohibited incentives.',
  },
  'Reporting and Insights Automation': {
    title: 'Your strongest opportunity is dependable reporting and decision support.',
    diagnosis: 'Important business data appears manually assembled or difficult to interpret consistently.',
    nextSteps: ['Define the decisions the report must support.', 'Document sources, metric definitions, cadence, and owners.', 'Validate one report manually before scheduled delivery.'],
    limitation: 'Automated reporting does not repair unreliable source data or unclear metric definitions.',
  },
  'Inbox and Admin Workflow': {
    title: 'Your strongest opportunity is a structured inbox or administrative workflow.',
    diagnosis: 'Routine requests and handoffs appear to consume attention without consistent classification and ownership.',
    nextSteps: ['Define request categories, fields, owners, and expectations.', 'Identify sensitive cases that must bypass automation.', 'Pilot classification and drafts without external action.'],
    limitation: 'Private communications and irreversible decisions require explicit access and approval controls.',
  },
}

const generalCopy = {
  title: 'Your next step is process clarification, not automation.',
  diagnosis: 'The opportunity is not defined well enough for a responsible implementation recommendation.',
  nextSteps: ['Choose one process and document its current steps.', 'Identify its owner, inputs, outputs, and exceptions.', 'Collect a small baseline before selecting tools.'],
  limitation: 'This result is educational guidance, not an implementation recommendation.',
}

const allowedTopKeys = new Set(['submissionKey', 'synthetic', 'answers'])
const allowedAnswerKeys = new Set(['q1', 'retentionSubtype', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'])
const prohibitedKeys = /^(name|firstName|lastName|email|phone|businessName|company|website|freeText|customerData|credentials)$/i
const categorySignals = new Set<CategorySignal>(['lead', 'content', 'retention-review', 'reporting', 'admin', 'other'])

function assertObject(value: unknown): asserts value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new ScorecardValidationError('malformed', 'Submission must be an object.')
  }
}

export function validateSubmission(value: unknown): ScorecardSubmission {
  assertObject(value)
  for (const key of Object.keys(value)) {
    if (prohibitedKeys.test(key)) throw new ScorecardValidationError('prohibited-data', 'Personal or customer data is prohibited.')
    if (!allowedTopKeys.has(key)) throw new ScorecardValidationError('malformed', `Unexpected field: ${key}`)
  }
  if (value.synthetic !== true) throw new ScorecardValidationError('prohibited-data', 'Only synthetic submissions are accepted.')
  if (typeof value.submissionKey !== 'string' || !/^SYN-[A-Z0-9-]{3,40}$/.test(value.submissionKey)) {
    throw new ScorecardValidationError('malformed', 'A valid synthetic submission key is required.')
  }

  assertObject(value.answers)
  for (const key of Object.keys(value.answers)) {
    if (prohibitedKeys.test(key)) throw new ScorecardValidationError('prohibited-data', 'Personal or customer data is prohibited.')
    if (!allowedAnswerKeys.has(key)) throw new ScorecardValidationError('malformed', `Unexpected answer: ${key}`)
  }
  if (!categorySignals.has(value.answers.q1 as CategorySignal)) {
    throw new ScorecardValidationError(value.answers.q1 === undefined ? 'incomplete' : 'malformed', 'Q1 is missing or invalid.')
  }
  for (let question = 2; question <= 10; question += 1) {
    const answer = value.answers[`q${question}`]
    if (answer === undefined) throw new ScorecardValidationError('incomplete', `Q${question} is required.`)
    if (!Number.isInteger(answer) || Number(answer) < 0 || Number(answer) > 3) {
      throw new ScorecardValidationError('malformed', `Q${question} must be an approved score.`)
    }
  }
  if (value.answers.q1 === 'retention-review' && !['follow-up', 'review-request'].includes(String(value.answers.retentionSubtype))) {
    throw new ScorecardValidationError('incomplete', 'The synthetic retention/review subtype is required.')
  }

  return value as ScorecardSubmission
}

function opportunityBand(score: number) {
  if (score <= 3) return 'Low immediate value'
  if (score <= 7) return 'Moderate opportunity'
  if (score <= 10) return 'Strong opportunity'
  return 'Urgent opportunity'
}

function readinessBand(score: number) {
  if (score <= 4) return 'Discovery required'
  if (score <= 9) return 'Candidate for paid assessment'
  if (score <= 12) return 'Strong manual-pilot candidate'
  return 'Implementation-ready hypothesis'
}

function resultCategory(answers: ScorecardAnswers): ResultCategory {
  if (answers.q1 === 'lead') return 'Lead Response Automation'
  if (answers.q1 === 'content') return 'Content Automation'
  if (answers.q1 === 'reporting') return 'Reporting and Insights Automation'
  if (answers.q1 === 'admin') return 'Inbox and Admin Workflow'
  if (answers.q1 === 'retention-review') {
    return answers.retentionSubtype === 'review-request' ? 'Review Request System' : 'Customer Follow-Up Loop'
  }
  return 'General guidance'
}

export function scoreSubmission(value: unknown): ScorecardResult {
  const { answers } = validateSubmission(value)
  const opportunityScore = answers.q2 + answers.q3 + answers.q8 + answers.q10
  const readinessScore = answers.q4 + answers.q5 + answers.q6 + answers.q7 + answers.q9
  const category = resultCategory(answers)
  const governance = answers.q6 === 0
  const route = governance ? 'governance-assessment' : opportunityScore <= 3 ? 'education' : 'assessment'
  const copy = category === 'General guidance' ? generalCopy : categoryCopy[category]
  const ctaLabel = route === 'education'
    ? 'Internal educational resource placeholder'
    : route === 'governance-assessment'
      ? 'Internal governance assessment placeholder'
      : 'Internal $750 assessment placeholder'

  return {
    category,
    opportunityScore,
    opportunityBand: opportunityBand(opportunityScore),
    readinessScore,
    readinessBand: readinessBand(readinessScore),
    route,
    ...copy,
    ctaLabel,
    ctaState: 'inert',
    safetyFlags: governance ? ['human-control-required', 'no-autonomous-implementation'] : ['directional-result', 'no-send'],
  }
}

export function processSubmission(value: unknown, usedKeys: Set<string>): ScorecardResult {
  const submission = validateSubmission(value)
  if (usedKeys.has(submission.submissionKey)) {
    throw new ScorecardValidationError('duplicate', 'This synthetic submission was already processed.')
  }
  const result = scoreSubmission(submission)
  usedKeys.add(submission.submissionKey)
  return result
}

export const reviewedCases: ReadonlyArray<{ id: string; submission: ScorecardSubmission; expected: Pick<ScorecardResult, 'category' | 'opportunityScore' | 'readinessScore' | 'route'> }> = [
  { id: 'case-1', submission: { submissionKey: 'SYN-CASE-1', synthetic: true, answers: { q1: 'lead', q2: 3, q3: 2, q4: 2, q5: 2, q6: 2, q7: 3, q8: 3, q9: 1, q10: 3 } }, expected: { category: 'Lead Response Automation', opportunityScore: 11, readinessScore: 10, route: 'assessment' } },
  { id: 'case-2', submission: { submissionKey: 'SYN-CASE-2', synthetic: true, answers: { q1: 'content', q2: 2, q3: 1, q4: 1, q5: 0, q6: 3, q7: 3, q8: 2, q9: 0, q10: 1 } }, expected: { category: 'Content Automation', opportunityScore: 6, readinessScore: 7, route: 'assessment' } },
  { id: 'case-3', submission: { submissionKey: 'SYN-CASE-3', synthetic: true, answers: { q1: 'admin', q2: 3, q3: 3, q4: 2, q5: 3, q6: 0, q7: 0, q8: 3, q9: 2, q10: 3 } }, expected: { category: 'Inbox and Admin Workflow', opportunityScore: 12, readinessScore: 7, route: 'governance-assessment' } },
  { id: 'case-4', submission: { submissionKey: 'SYN-CASE-4', synthetic: true, answers: { q1: 'reporting', q2: 2, q3: 2, q4: 3, q5: 3, q6: 2, q7: 3, q8: 2, q9: 3, q10: 2 } }, expected: { category: 'Reporting and Insights Automation', opportunityScore: 8, readinessScore: 14, route: 'assessment' } },
  { id: 'case-5', submission: { submissionKey: 'SYN-CASE-5', synthetic: true, answers: { q1: 'other', q2: 0, q3: 0, q4: 0, q5: 0, q6: 1, q7: 1, q8: 0, q9: 0, q10: 0 } }, expected: { category: 'General guidance', opportunityScore: 0, readinessScore: 2, route: 'education' } },
  { id: 'case-6', submission: { submissionKey: 'SYN-CASE-6', synthetic: true, answers: { q1: 'retention-review', retentionSubtype: 'review-request', q2: 3, q3: 1, q4: 2, q5: 2, q6: 3, q7: 3, q8: 2, q9: 1, q10: 2 } }, expected: { category: 'Review Request System', opportunityScore: 8, readinessScore: 11, route: 'assessment' } },
  { id: 'case-7', submission: { submissionKey: 'SYN-CASE-7', synthetic: true, answers: { q1: 'retention-review', retentionSubtype: 'follow-up', q2: 2, q3: 1, q4: 2, q5: 2, q6: 2, q7: 3, q8: 2, q9: 1, q10: 2 } }, expected: { category: 'Customer Follow-Up Loop', opportunityScore: 7, readinessScore: 10, route: 'assessment' } },
]
