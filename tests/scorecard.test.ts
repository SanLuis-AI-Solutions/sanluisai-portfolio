import assert from 'node:assert/strict'
import test from 'node:test'
import {
  processSubmission,
  reviewedCases,
  scoreSubmission,
  ScorecardValidationError,
} from '../lib/scorecard.ts'

for (const reviewedCase of reviewedCases) {
  test(`${reviewedCase.id} routes deterministically`, () => {
    const result = scoreSubmission(reviewedCase.submission)
    assert.deepEqual(
      {
        category: result.category,
        opportunityScore: result.opportunityScore,
        readinessScore: result.readinessScore,
        route: result.route,
      },
      reviewedCase.expected,
    )
    assert.equal(result.ctaState, 'inert')
  })
}

test('incomplete input fails closed', () => {
  const incomplete = structuredClone(reviewedCases[0].submission) as Record<string, unknown>
  delete (incomplete.answers as Record<string, unknown>).q10
  assert.throws(() => scoreSubmission(incomplete), (error: unknown) => error instanceof ScorecardValidationError && error.code === 'incomplete')
})

test('malformed input fails closed', () => {
  const malformed = structuredClone(reviewedCases[0].submission)
  ;(malformed.answers as Record<string, unknown>).q2 = 9
  assert.throws(() => scoreSubmission(malformed), (error: unknown) => error instanceof ScorecardValidationError && error.code === 'malformed')
})

test('duplicate synthetic submission is rejected', () => {
  const used = new Set<string>()
  processSubmission(reviewedCases[0].submission, used)
  assert.throws(() => processSubmission(reviewedCases[0].submission, used), (error: unknown) => error instanceof ScorecardValidationError && error.code === 'duplicate')
})

test('personal or customer data is prohibited', () => {
  const prohibited = { ...reviewedCases[0].submission, email: 'synthetic@example.com' }
  assert.throws(() => scoreSubmission(prohibited), (error: unknown) => error instanceof ScorecardValidationError && error.code === 'prohibited-data')
})

test('non-synthetic submission is prohibited', () => {
  const prohibited = { ...reviewedCases[0].submission, synthetic: false }
  assert.throws(() => scoreSubmission(prohibited), (error: unknown) => error instanceof ScorecardValidationError && error.code === 'prohibited-data')
})
