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

const blogLdJson = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://sanluisai-portfolio.vercel.app/blog',
  name: 'SanLuis AI Solutions Blog',
  description: 'Insights from real AI builds. No filler, no content calendars — just what we learn shipping custom AI systems for businesses.',
  publisher: { '@id': 'https://sanluisai-portfolio.vercel.app/#organization' },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLdJson) }}
      />
      {children}
    </>
  )
}
