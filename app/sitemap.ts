import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sanluisai.com'

  // Static routes with their priorities
  const routes: { path: string; priority: number; changeFrequency?: 'weekly' | 'monthly' | 'daily' }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/services/custom-ai', priority: 0.8 },
    { path: '/services/automation', priority: 0.8 },
    { path: '/services/agents', priority: 0.8 },
    { path: '/services/consulting', priority: 0.8 },
    { path: '/services/discovery-session', priority: 0.8 },
    { path: '/case-studies', priority: 0.8 },
    { path: '/case-studies/garza-international', priority: 0.7 },
    { path: '/case-studies/loveflow', priority: 0.7 },
    { path: '/case-studies/susies-jewelry-repair', priority: 0.7 },
    { path: '/industries/healthcare', priority: 0.6 },
    { path: '/industries/logistics', priority: 0.6 },
    { path: '/industries/manufacturing', priority: 0.6 },
    { path: '/industries/professional-services', priority: 0.6 },
    { path: '/industries/real-estate', priority: 0.6 },
    { path: '/industries/retail', priority: 0.6 },
    { path: '/about', priority: 0.7 },
    { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/blog/why-ai-consulting-fails', priority: 0.6 },
    { path: '/blog/discovery-session-breakdown', priority: 0.6 },
    { path: '/blog/ai-ready-problem-signs', priority: 0.6 },
    { path: '/blog/ai-implementation-timeline', priority: 0.6 },
    { path: '/blog/ai-cost-roi-breakdown', priority: 0.6 },
    { path: '/blog/real-estate-ai-guide', priority: 0.6 },
    { path: '/blog/automation-mistakes-guide', priority: 0.6 },
    { path: '/blog/houston-ai-market-2026', priority: 0.6 },
    { path: '/blog/garza-international-roi-breakdown', priority: 0.6 },
    { path: '/blog/ai-for-healthcare', priority: 0.6 },
    { path: '/blog/client-onboarding-story', priority: 0.6 },
    { path: '/blog/ai-agents-vs-chatbots', priority: 0.6 },
    { path: '/faq', priority: 0.7 },
    { path: '/pricing', priority: 0.7 },
    { path: '/how-it-works', priority: 0.7 },
    { path: '/booking', priority: 0.8 },
    { path: '/assessment', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency ?? 'monthly',
    priority: route.priority,
  }))
}
