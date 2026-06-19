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
  weight: ['400', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const ldJson = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sanluisai-portfolio.vercel.app/#organization',
      name: 'SanLuis AI Solutions',
      url: 'https://sanluisai-portfolio.vercel.app',
      description: 'Custom AI systems, AI Automation, AI Agent Systems, and Discovery Sessions for small and mid-size businesses. Built in Houston by SanLuis AI Solutions.',
      foundingDate: '2025',
      address: { '@type': 'PostalAddress', addressLocality: 'Houston', addressRegion: 'TX', addressCountry: 'US' },
      areaServed: [{ '@type': 'City', name: 'Houston' }, { '@type': 'State', name: 'Texas' }, { '@type': 'Country', name: 'US' }],
      telephone: '+1-832-779-0033',
      sameAs: ['https://t.me/SanLuisAiClientbot', 'https://www.linkedin.com/in/danielsanluis', 'https://x.com/sanluisai'],
      knowsLanguage: ['en', 'es'],
      priceRange: '$$',
    },
    {
      '@type': 'Service',
      '@id': 'https://sanluisai-portfolio.vercel.app/#discovery-session',
      name: 'AI Discovery Session',
      description: '60-minute diagnostic audit identifying your highest-value AI automation opportunities. Includes written action plan.',
      provider: { '@id': 'https://sanluisai-portfolio.vercel.app/#organization' },
      serviceType: 'AI Consulting',
      offers: { '@type': 'Offer', price: '300', priceCurrency: 'USD' },
    },
    {
      '@type': 'Service',
      '@id': 'https://sanluisai-portfolio.vercel.app/#build',
      name: 'Custom AI Build',
      description: 'End-to-end development of custom AI systems: agents, automations, and applications tailored to your business.',
      provider: { '@id': 'https://sanluisai-portfolio.vercel.app/#organization' },
      serviceType: 'AI Development',
      offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD', priceRange: '15000-50000' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://sanluisai-portfolio.vercel.app/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a custom AI system cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Custom AI systems start at $5,000 and AI Automation starts at $1,200. Pricing depends on scope, integrations, and complexity, but we give you a firm quote before any work begins. Most clients find our pricing is a fraction of traditional agency estimates because we build with modern AI tooling and reusable components.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is included in the $300 Discovery Session?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Discovery Session is a focused 60-minute working session where we map your top 3 highest-leverage AI opportunities, identify what data and tools are needed, and deliver a written roadmap with pricing estimates. You will not receive a generic slide deck. You walk away knowing exactly what to build, in what order, and what each phase costs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you require long-term contracts?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All our projects are scoped, quoted, and billed per project. There are no monthly retainers and no annual commitments required to start. If you need ongoing support after launch, we offer simple month-to-month maintenance at a flat rate.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if the project does not work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work in iterative milestones so you see, test, and approve each stage before we move to the next. If at any point the solution is not meeting expectations, we stop, reassess, and adjust. You should never pay for a system that does not deliver real results.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take from start to deployment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'AI Automation deploys in 1-2 weeks. AI agent systems and custom apps deploy in 3-6 weeks. Full applications with complex integrations may take 4-10 weeks. Every project starts with a firm timeline set during the Discovery Session.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens during the Discovery Session?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'In our 60-minute session, we walk through your actual operations and identify the three highest-impact opportunities. We look at the slow spots, repetitive tasks, and data you already have. You leave with a written roadmap, a prioritized build order, and a pricing estimate.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you decide what to build first?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We prioritize based on three factors: speed of implementation, business value, and data readiness. Quick wins build momentum. The highest-value feature saves the most time or money. Data readiness determines what your existing systems already support. The roadmap you receive is already prioritized this way.',
          },
        },
        {
          '@type': 'Question',
          name: "What if I don't know exactly what I need?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "You do not need to know. That is our job. Most clients come to us with a vague sense that something could be faster or easier. We start by understanding your business, not by asking for a requirements document. The Discovery Session is designed exactly for this scenario.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do AI agents differ from chatbots?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A chatbot simply answers questions. An AI agent takes action. It can intake a lead, check inventory, research a prospect, draft a proposal, update a CRM, and escalate to a human when needed. Agents are autonomous workers, not conversation tools.',
          },
        },
        {
          '@type': 'Question',
          name: 'What data do you need from me?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We can work with whatever data you have. Spreadsheets, emails, PDFs, CRM exports, and even handwritten notes are all usable. We handle the cleaning, structuring, and integration. The more data you have, the better the results, but we can start with surprisingly little.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can AI integrate with my existing tools?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Every system we build integrates with your existing stack. We connect with CRMs such as HubSpot, Salesforce, and Pipedrive, communication tools such as Slack, email, and WhatsApp, and databases such as Google Sheets, Airtable, and SQL. We work with your tools, not against them. You will not need to replace software your team already knows.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who owns the code and data?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You own 100% of the code, data, and intellectual property we build for you. There are no platform fees, no licensing costs, and no ongoing dependency on us to keep your system running. We deploy to your accounts and hand over full access at launch. Vendor lock-in is not part of our model.',
          },
        },
        {
          '@type': 'Question',
          name: 'What if it breaks?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Systems can fail, and we plan for that. Every production system includes monitoring that alerts us before you notice an issue. If something does break, we fix it. Maintenance retainers cover this. If you do not have a retainer, we quote the fix and do not make you wait weeks. Nothing we ship ever becomes a system you cannot get help with.",
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know my business is ready for AI?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Your business is ready if you have repetitive tasks that consume your team's time, data that could inform better decisions, or customer-facing processes that could be faster. You do not need a tech team, a data warehouse, or a six-figure budget to benefit. If you are not sure, the Discovery Session will tell you with zero pressure to proceed.",
          },
        },
        {
          '@type': 'Question',
          name: 'Will AI replace my employees?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We build systems that handle the repetitive, time-consuming tasks your team does not enjoy. Your team focuses on higher-value work such as client relationships, creative problem-solving, and strategic decisions. Every client we have worked with has kept their team intact.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries do you work with?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We work across retail, healthcare, professional services, logistics, manufacturing, and real estate. Past projects include jewelry repair intake systems, logistics quoting tools, customer management platforms, and automated proposal generation. If your business has processes, AI can improve them.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with Spanish-speaking businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All our services, interfaces, and systems are available fully in English and Spanish. Our team is bilingual, and we regularly build systems that operate seamlessly in both languages. This includes businesses that serve Spanish-speaking customers exclusively.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there a minimum project size?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our minimum project is the $300 Discovery Session. After that, if there is a clear opportunity, we can build AI Automation for as little as $1,200. No minimum commitment is required upfront.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need a technical team to work with you?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You do not need any technical staff. We have worked with business owners, office managers, and operators who never touched code. We handle all the technical work. Your job is to tell us what your process looks like and confirm the system works the way you expect.',
          },
        },
        {
          '@type': 'Question',
          name: 'We already tried AI and it did not work. Why would this be different?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "That is a fair question. Most AI disappointments come from one of three sources: the solution was a chatbot that did not do real work, the vendor did not understand the business process, or the system was never properly deployed. We focus on process automation first, build working systems not demos, and stay until deployment is complete and the system is stable.",
          },
        },
      ],
    },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sanluisai-portfolio.vercel.app'),
  title: 'SanLuis AI Solutions | Custom AI Systems, Automations, and Agents — Houston',
  description: 'Custom AI Systems, AI Automation, AI Agent Systems, and $300 Discovery Sessions that save small and mid-size Houston businesses a day a week.',
  openGraph: {
    title: 'SanLuis AI Solutions | Custom AI Systems, AI Automation, and AI Agents',
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
                <link rel="preload" href="/hero-hands.png" as="image" />
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
