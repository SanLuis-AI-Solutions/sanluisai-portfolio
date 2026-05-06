import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

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
      description: 'Custom AI solutions for small and mid-size businesses. No-code AI development, workflow automation, and AI agent systems.',
      foundingDate: '2025',
      address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
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
      description: 'End-to-end development of custom AI systems — agents, automations, and applications tailored to your business.',
      provider: { '@id': 'https://sanluisai.com/#organization' },
      serviceType: 'AI Development',
      offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD', priceRange: '15000-50000' },
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sanluisai.com'),
  title: 'Custom AI Solutions | SanLuis AI Solutions — Houston',
  description: 'No-code AI systems, automations, and applications for small and mid-size businesses. Built for Houston. Bilingual EN/ES.',
  openGraph: {
    title: 'Custom AI Solutions | SanLuis AI Solutions',
    description: 'No-code AI for real problems. Built for Houston. Custom systems, automations, and AI apps.',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
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
        <meta name="build-version" content="v1.0.0-20260505-4" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BE7FHSSCP8" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BE7FHSSCP8');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />

        {/* Sticky mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
          <a
            href="/booking"
            className="flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors duration-200"
          >
            Book a Discovery Session → $300
          </a>
        </div>
      </body>
    </html>
  )
}
