import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — SanLuis AI Solutions',
  description: 'Insights from real AI builds. No filler, no content calendars — just what we learn shipping custom AI systems for businesses.',
  openGraph: {
    title: 'Blog — SanLuis AI Solutions',
    description: 'Insights from real AI builds. No filler, no content calendars — just what we learn shipping custom AI systems for businesses.',
    url: 'https://sanluisai-portfolio.vercel.app/blog',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
