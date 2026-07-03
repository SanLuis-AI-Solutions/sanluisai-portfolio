'use client'

import { usePathname } from 'next/navigation'

const breadcrumbMap: Record<string, { name: string; parent?: string }> = {
  '/': { name: 'Home' },
  '/about': { name: 'About' },
  '/assessment': { name: 'AI Readiness Assessment' },
  '/blog': { name: 'Blog' },
  '/booking': { name: 'Book a Discovery Session' },
  '/case-studies': { name: 'Case Studies' },
  '/faq': { name: 'FAQ' },
  '/how-it-works': { name: 'How It Works' },
  '/industries': { name: 'Industries' },
  '/pricing': { name: 'Pricing' },
  '/privacy': { name: 'Privacy Policy' },
  '/services': { name: 'Services' },
  '/terms': { name: 'Terms of Service' },
  '/work': { name: 'Our Work' },
}

export default function BreadcrumbJsonLd() {
  const pathname = usePathname()

  // Normalize: strip trailing slash (except for root)
  const normalized = pathname === '/' ? '/' : pathname.replace(/\/$/, '')

  // Build breadcrumb items
  const segments = normalized.split('/').filter(Boolean)
  const items: { position: number; name: string; item: string }[] = []

  // Always start with Home
  items.push({
    position: 1,
    name: 'Home',
    item: 'https://sanluisai-portfolio.vercel.app/',
  })

  if (normalized !== '/') {
    // Build the breadcrumb path
    let accumulated = ''
    for (const segment of segments) {
      accumulated += `/${segment}`
      const entry = breadcrumbMap[accumulated]
      if (entry) {
        items.push({
          position: items.length + 1,
          name: entry.name,
          item: `https://sanluisai-portfolio.vercel.app${accumulated}`,
        })
      }
    }

    // Fallback: if no map entry found for the full path, use a formatted version of the last segment
    if (items.length === 1) {
      const lastSegment = segments[segments.length - 1]
      const name = lastSegment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
      items.push({
        position: 2,
        name,
        item: `https://sanluisai-portfolio.vercel.app${normalized}`,
      })
    }
  }

  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': 'https://sanluisai-portfolio.vercel.app/#breadcrumb',
    name: 'Breadcrumb',
    itemListElement: items,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
    />
  )
}
