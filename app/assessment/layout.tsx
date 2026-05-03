import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | SanLuis AI Solutions',
  description: 'Assess your organization\'s AI readiness across 5 dimensions: clarity, data, adoption, infrastructure, and leadership. Get a scored breakdown in under 2 minutes.',
  openGraph: {
    title: 'AI Readiness Assessment | SanLuis AI Solutions',
    description: 'Assess your organization\'s AI readiness across 5 dimensions: clarity, data, adoption, infrastructure, and leadership. Get a scored breakdown in 2 minutes.',
    url: 'https://sanluisai-portfolio.vercel.app/assessment',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function AssessmentLayout({ children }: { children: React.ReactNode }) {
  return children
}
