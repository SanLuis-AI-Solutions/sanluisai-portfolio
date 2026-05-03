import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Custom AI Solutions | SanLuis AI Solutions — Houston',
  description: 'No-code AI systems, automations, and applications for small and mid-size businesses. Built for Houston. Bilingual EN/ES.',
  openGraph: {
    title: 'Custom AI Solutions | SanLuis AI Solutions',
    description: 'No-code AI for real problems. Built for Houston. Custom systems, automations, and AI apps.',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    type: 'website',
    locale: 'en_US',
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'SanLuis AI Solutions',
      url: 'https://sanluisai.com',
      sameAs: ['https://t.me/SanLuisAiClientbot'],
      description: 'Custom AI solutions for small and mid-size businesses. No-code AI development, workflow automation, and AI agent systems.',
    }),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BE7FHSSCP8" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BE7FHSSCP8');` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
