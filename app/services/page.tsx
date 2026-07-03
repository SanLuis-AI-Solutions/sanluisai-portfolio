import type { Metadata } from 'next'
import ServicesContent from '@/components/ServicesContent'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

export const metadata: Metadata = {
  title: 'Services | SanLuis AI Solutions',
  description: 'We build the one thing that saves you a day a week. Not chatbots. Not strategy decks. Working systems that do the work so your people can focus on decisions, relationships, and results.',
  openGraph: {
    title: 'Services | SanLuis AI Solutions',
    description: 'We build the one thing that saves you a day a week. From $300 Discovery Session to custom AI systems at $5,000+. Discover, build, ship, maintain.',
    url: 'https://sanluisai-portfolio.vercel.app/services',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd />
      <ServicesContent />
}
