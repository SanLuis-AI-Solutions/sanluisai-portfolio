import { notFound } from 'next/navigation'
import ScorecardClient from './ScorecardClient'
import { reviewedCases } from '@/lib/scorecard'

export const metadata = {
  title: 'Internal AI Opportunity Scorecard Review',
  robots: { index: false, follow: false },
}

export default async function ScorecardPage({ searchParams }: { searchParams: Promise<{ fixture?: string }> }) {
  if (process.env.NODE_ENV !== 'development' || process.env.SCORECARD_PRIVATE_MVP !== 'enabled') notFound()
  const { fixture } = await searchParams
  const initialCase = reviewedCases.find(testCase => testCase.id === fixture)
  return <ScorecardClient initialSubmission={initialCase?.submission} />
}
