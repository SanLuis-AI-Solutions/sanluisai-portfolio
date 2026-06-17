import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyCTA from '@/components/StickyCTA'
import ClientLayout from './ClientLayout'
import './globals.css'
import './print.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sanluisai.com/#organization',
      name: 'SanLuis AI Solutions',
      url: 'https://sanluisai.com',
      description: 'Custom AI systems, automations, and agents for small and mid-size businesses. No-code AI development and workflow automation.',
      foundingDate: '2025',
      address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
      areaServed: [{ '@type': 'City', name: 'Houston' }, { '@type': 'State', name: 'Texas' }, { '@type': 'Country', name: 'US' }],
      telephone: '+1-832-779-0033',
      sameAs: ['https://t.me/SanLuisAiClientbot'],
      knowsLanguage: ['en', 'es'],
      priceRange: '$$',
    },
    {
      '@type': 'Service',
      '@id': 'https://sanluisai.com/#discovery-session',
      name: 'AI Discovery Session',
      description: '60-minute diagnostic audit identifying your highest-value AI automation opportunities. Includes written action plan.',
      provider: { '@id': 'https://sanluisai.com/#organization' },
      serviceType: 'AI Consulting',
      offers: { '@type': 'Offer', price: '300', priceCurrency: 'USD' },
    },
    {
      '@type': 'Service',
      '@id': 'https://sanluisai.com/#build',
      name: 'Custom AI Build',
      description: 'End-to-end development of custom AI systems: agents, automations, and applications tailored to your business.',
      provider: { '@id': 'https://sanluisai.com/#organization' },
      serviceType: 'AI Development',
      offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD', priceRange: '15000-50000' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sanluisai.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is a Discovery Session?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A 60-minute working session. We map your current operations, identify your best AI opportunity, and give you a written action plan whether you hire us or not. $300.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most projects ship in 2-6 weeks. A workflow automation: 1-2 weeks. An AI agent system: 3-6 weeks. We set the timeline clearly during the Discovery Session before any work starts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does it cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Discovery Session: $300. Automation starts at $1,200. AI agents start at $5,000. Full apps are scoped individually. Every project is fixed-price; you know the cost before we start.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will AI replace my team?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Every system we build handles the repetitive work so your people can focus on judgment, relationships, and strategy. AI processes the inputs. Your team owns the outcomes.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who owns the code and data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You do. Full ownership on final payment. No licensing fees. No vendor lock-in. Your data stays yours.',
          },
        },
        {
          '@type': 'Question',
          name: "What if my team won't use the system?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We design systems around how your team already works, not the other way around. No new login to learn. No new process to memorize. If it creates more work instead of less, we fix it.',
          },
        },
        {
          '@type': 'Question',
          name: 'What tools do you integrate with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CRM, email, calendars, spreadsheets, databases, Slack, QuickBooks, property management software, inventory systems. If it has an API or exports data, we can connect to it.',
          },
        },
        {
          '@type': 'Question',
          name: "What's required from me during the build?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'One hour for the Discovery Session to map your process. One hour to review and approve the prototype. After that, your job is to use the system and tell us what to improve.',
          },
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sanluisai.com'),
  title: 'SanLuis AI Solutions | Custom AI Systems, Automations, and Agents — Houston',
  description: 'Custom AI systems that save you a day a week. No-code AI development, workflow automation, and AI agents for small and mid-size businesses in Houston.',
  openGraph: {
    title: 'SanLuis AI Solutions | Custom AI Systems, Automations, and Agents',
    description: 'We build the one thing that saves you a day a week. Custom AI systems, automations, and agents. Built for Houston.',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/assets/flame-mark.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <meta name="build-version" content="v1.0.0-20260518-1" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BE7FHSSCP8" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BE7FHSSCP8');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </head>
      <body>
        <Nav />
        <ClientLayout>
          {children}
          <Footer />
        </ClientLayout>
        <StickyCTA />
      </body>
    </html>
  )
}
