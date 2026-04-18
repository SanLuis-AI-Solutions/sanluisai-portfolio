import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SanLuis AI Solutions | Houston AI Consulting',
  description: 'We help Houston businesses automate what slows them down — without replacing the people who make them great. Your team, amplified.',
  keywords: ['AI consulting Houston', 'business automation Houston', 'AI workflow automation', 'Houston AI agency', 'bilingual AI consulting'],
  authors: [{ name: 'Daniel San Luis' }],
  openGraph: {
    title: 'SanLuis AI Solutions | Houston AI Consulting',
    description: 'AI that works with your team. Not instead of them.',
    url: 'https://sanluisai.com',
    siteName: 'SanLuis AI Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SanLuis AI Solutions | Houston AI Consulting',
    description: 'AI that works with your team. Not instead of them.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg text-white antialiased">{children}</body>
    </html>
  )
}
