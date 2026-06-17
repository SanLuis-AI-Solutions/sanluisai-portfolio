import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import FaqEntry from '@/components/FaqEntry'

const faqSchemaQuestions = [
  { question: 'How much does a custom AI system cost?', answer: 'Custom AI systems start at $5,000 and AI Automation starts at $1,200. Pricing depends on scope, integrations, and complexity, but we give you a firm quote before any work begins. Most clients find our pricing is a fraction of traditional agency estimates because we build with modern AI tooling and reusable components.' },
  { question: 'What is included in the $300 Discovery Session?', answer: 'The Discovery Session is a focused 60-minute working session where we map your top 3 highest-leverage AI opportunities, identify what data and tools are needed, and deliver a written roadmap with pricing estimates. You will not receive a generic slide deck. You walk away knowing exactly what to build, in what order, and what each phase costs.' },
  { question: 'Do you require long-term contracts?', answer: 'All our projects are scoped, quoted, and billed per project. There are no monthly retainers and no annual commitments required to start. If you need ongoing support after launch, we offer simple month-to-month maintenance at a flat rate.' },
  { question: 'What if the project does not work?', answer: 'We work in iterative milestones so you see, test, and approve each stage before we move to the next. If at any point the solution is not meeting expectations, we stop, reassess, and adjust. You should never pay for a system that does not deliver real results.' },
  { question: 'How long does it take from start to deployment?', answer: 'AI Automation deploys in 1-2 weeks. AI agent systems and custom apps deploy in 3-6 weeks. Full applications with complex integrations may take 4-10 weeks. Every project starts with a firm timeline set during the Discovery Session.' },
  { question: 'What happens during the Discovery Session?', answer: 'In our 60-minute session, we walk through your actual operations and identify the three highest-impact opportunities. We look at the slow spots, repetitive tasks, and data you already have. You leave with a written roadmap, a prioritized build order, and a pricing estimate.' },
  { question: 'How do you decide what to build first?', answer: 'We prioritize based on three factors: speed of implementation, business value, and data readiness. Quick wins build momentum. The highest-value feature saves the most time or money. Data readiness determines what your existing systems already support. The roadmap you receive is already prioritized this way.' },
  { question: 'What if I do not know exactly what I need?', answer: 'You do not need to know. That is our job. Most clients come to us with a vague sense that something could be faster or easier. We start by understanding your business, not by asking for a requirements document. The Discovery Session is designed exactly for this scenario.' },
  { question: 'How do AI agents differ from chatbots?', answer: 'A chatbot simply answers questions. An AI agent takes action. It can intake a lead, check inventory, research a prospect, draft a proposal, update a CRM, and escalate to a human when needed. Agents are autonomous workers, not conversation tools.' },
  { question: 'What data do you need from me?', answer: 'We can work with whatever data you have. Spreadsheets, emails, PDFs, CRM exports, and even handwritten notes are all usable. We handle the cleaning, structuring, and integration. The more data you have, the better the results, but we can start with surprisingly little.' },
  { question: 'Can AI integrate with my existing tools?', answer: 'Every system we build integrates with your existing stack. We connect with CRMs such as HubSpot, Salesforce, and Pipedrive, communication tools such as Slack, email, and WhatsApp, and databases such as Google Sheets, Airtable, and SQL. We work with your tools, not against them. You will not need to replace software your team already knows.' },
  { question: 'Who owns the code and data?', answer: 'You own 100% of the code, data, and intellectual property we build for you. There are no platform fees, no licensing costs, and no ongoing dependency on us to keep your system running. We deploy to your accounts and hand over full access at launch. Vendor lock-in is not part of our model.' },
  { question: 'What if it breaks?', answer: 'Systems can fail, and we plan for that. Every production system includes monitoring that alerts us before you notice an issue. If something does break, we fix it. Maintenance retainers cover this. If you do not have a retainer, we quote the fix and do not make you wait weeks. Nothing we ship ever becomes a system you cannot get help with.' },
  { question: 'How do I know my business is ready for AI?', answer: 'Your business is ready if you have repetitive tasks that consume your team\'s time, data that could inform better decisions, or customer-facing processes that could be faster. You do not need a tech team, a data warehouse, or a six-figure budget to benefit. If you are not sure, the Discovery Session will tell you with zero pressure to proceed.' },
  { question: 'Will AI replace my employees?', answer: 'We build systems that handle the repetitive, time-consuming tasks your team does not enjoy. Your team focuses on higher-value work such as client relationships, creative problem-solving, and strategic decisions. Every client we have worked with has kept their team intact.' },
  { question: 'What industries do you work with?', answer: 'We work across retail, healthcare, professional services, logistics, manufacturing, and real estate. Past projects include jewelry repair intake systems, logistics quoting tools, customer management platforms, and automated proposal generation. If your business has processes, AI can improve them.' },
  { question: 'Do you work with Spanish-speaking businesses?', answer: 'All our services, interfaces, and systems are available fully in English and Spanish. Our team is bilingual, and we regularly build systems that operate seamlessly in both languages. This includes businesses that serve Spanish-speaking customers exclusively.' },
  { question: 'Is there a minimum project size?', answer: 'Our minimum project is the $300 Discovery Session. After that, if there is a clear opportunity, we can build AI Automation for as little as $1,200. No minimum commitment is required upfront.' },
  { question: 'Do I need a technical team to work with you?', answer: 'You do not need any technical staff. We have worked with business owners, office managers, and operators who never touched code. We handle all the technical work. Your job is to tell us what your process looks like and confirm the system works the way you expect.' },
  { question: 'We already tried AI and it did not work. Why would this be different?', answer: 'That is a fair question. Most AI disappointments come from one of three sources: the solution was a chatbot that did not do real work, the vendor did not understand the business process, or the system was never properly deployed. We focus on process automation first, build working systems not demos, and stay until deployment is complete and the system is stable.' },
]

export const metadata: Metadata = {
  title: 'FAQ: Frequently Asked Questions | SanLuis AI Solutions',
  description: 'Answers to common and skeptical questions about pricing, process, technical support, and business readiness for Custom AI Systems, AI Automation, AI Agent Systems, and Discovery Sessions. Includes what happens if AI breaks or past AI projects failed. $300 Discovery Session. No long-term contracts.',
  openGraph: {
    title: 'FAQ: Frequently Asked Questions | SanLuis AI Solutions',
    description: 'Everything you need to know about working with SanLuis AI: pricing, process, technical support, and whether your business is ready for AI.',
    url: 'https://sanluisai-portfolio.vercel.app/faq',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'script:ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqSchemaQuestions.map(q => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      })),
    }),
  },
}

const faqCategories = [
  {
    id: 'pricing',
    label: 'Pricing & Commitment',
    questions: [
      {
        q: 'How much does a custom AI system cost?',
        a: 'Custom AI systems start at $5,000 and AI Automation starts at $1,200. Pricing depends on scope, integrations, and complexity, but we give you a firm quote before any work begins. Most clients find our pricing is a fraction of traditional agency estimates because we build with modern AI tooling and reusable components.',
      },
      {
        q: "What's included in the $300 Discovery Session?",
        a: 'The Discovery Session is a focused 60-minute working session where we map your top 3 highest-leverage AI opportunities, identify what data and tools are needed, and deliver a written roadmap with pricing estimates. You will not receive a generic slide deck. You walk away knowing exactly what to build, in what order, and what each phase costs.',
      },
      {
        q: 'Do you require long-term contracts?',
        a: 'All our projects are scoped, quoted, and billed per project. There are no monthly retainers and no annual commitments required to start. If you need ongoing support after launch, we offer simple month-to-month maintenance at a flat rate.',
      },
      {
        q: "What if the project doesn't work?",
        a: 'We work in iterative milestones so you see, test, and approve each stage before we move to the next. If at any point the solution is not meeting expectations, we stop, reassess, and adjust. You should never pay for a system that does not deliver real results.',
      },
    ],
  },
  {
    id: 'process',
    label: 'Process',
    questions: [
      {
        q: 'How long does it take from start to deployment?',
        a: 'AI Automation deploys in 1-2 weeks. AI agent systems and custom apps deploy in 3-6 weeks. Full applications with complex integrations may take 4-10 weeks. Every project starts with a firm timeline set during the Discovery Session.',
      },
      {
        q: 'What happens during the Discovery Session?',
        a: 'In our 60-minute session, we walk through your actual operations and identify the three highest-impact opportunities. We look at the slow spots, repetitive tasks, and data you already have. You leave with a written roadmap, a prioritized build order, and a pricing estimate.',
      },
      {
        q: 'How do you decide what to build first?',
        a: 'We prioritize based on three factors: speed of implementation, business value, and data readiness. Quick wins build momentum. The highest-value feature saves the most time or money. Data readiness determines what your existing systems already support. The roadmap you receive is already prioritized this way.',
      },
      {
        q: "What if I don't know exactly what I need?",
        a: 'You do not need to know. That is our job. Most clients come to us with a vague sense that something could be faster or easier. We start by understanding your business, not by asking for a requirements document. The Discovery Session is designed exactly for this scenario.',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    questions: [
      {
        q: 'How do AI agents differ from chatbots?',
        a: 'A chatbot simply answers questions. An AI agent takes action. It can intake a lead, check inventory, research a prospect, draft a proposal, update a CRM, and escalate to a human when needed. Agents are autonomous workers, not conversation tools.',
      },
      {
        q: 'What data do you need from me?',
        a: 'We can work with whatever data you have. Spreadsheets, emails, PDFs, CRM exports, and even handwritten notes are all usable. We handle the cleaning, structuring, and integration. The more data you have, the better the results, but we can start with surprisingly little.',
      },
      {
        q: 'Can AI integrate with my existing tools (CRM, email, Slack)?',
        a: 'Every system we build integrates with your existing stack. We connect with CRMs such as HubSpot, Salesforce, and Pipedrive, communication tools such as Slack, email, and WhatsApp, and databases such as Google Sheets, Airtable, and SQL. We work with your tools, not against them. You will not need to replace software your team already knows.',
      },
      {
        q: 'Who owns the code and data?',
        a: 'You own 100% of the code, data, and intellectual property we build for you. There are no platform fees, no licensing costs, and no ongoing dependency on us to keep your system running. We deploy to your accounts and hand over full access at launch. Vendor lock-in is not part of our model.',
      },
      {
        q: 'What if it breaks?',
        a: 'Systems can fail, and we plan for that. Every production system includes monitoring that alerts us before you notice an issue. If something does break, we fix it. Maintenance retainers cover this. If you do not have a retainer, we quote the fix and do not make you wait weeks. Nothing we ship ever becomes a system you cannot get help with.',
      },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    questions: [
      {
        q: 'How do I know my business is ready for AI?',
        a: 'Your business is ready if you have repetitive tasks that consume your team\'s time, data that could inform better decisions, or customer-facing processes that could be faster. You do not need a tech team, a data warehouse, or a six-figure budget to benefit. If you are not sure, the Discovery Session will tell you with zero pressure to proceed.',
      },
      {
        q: 'Will AI replace my employees?',
        a: 'We build systems that handle the repetitive, time-consuming tasks your team does not enjoy. Your team focuses on higher-value work such as client relationships, creative problem-solving, and strategic decisions. Every client we have worked with has kept their team intact.',
      },
      {
        q: 'What industries do you work with?',
        a: 'We work across retail, healthcare, professional services, logistics, manufacturing, and real estate. Past projects include jewelry repair intake systems, logistics quoting tools, customer management platforms, and automated proposal generation. If your business has processes, AI can improve them.',
      },
      {
        q: 'Do you work with Spanish-speaking businesses?',
        a: 'All our services, interfaces, and systems are available fully in English and Spanish. Our team is bilingual, and we regularly build systems that operate seamlessly in both languages. This includes businesses that serve Spanish-speaking customers exclusively.',
      },
      {
        q: 'Is there a minimum project size?',
        a: 'Our minimum project is the $300 Discovery Session. After that, if there is a clear opportunity, we can build AI Automation for as little as $1,200. No minimum commitment is required upfront.',
      },
      {
        q: 'Do I need a technical team to work with you?',
        a: 'You do not need any technical staff. We have worked with business owners, office managers, and operators who never touched code. We handle all the technical work. Your job is to tell us what your process looks like and confirm the system works the way you expect.',
      },
      {
        q: 'We already tried AI and it did not work. Why would this be different?',
        a: 'That is a fair question. Most AI disappointments come from one of three sources: the solution was a chatbot that did not do real work, the vendor did not understand the business process, or the system was never properly deployed. We focus on process automation first, build working systems not demos, and stay until deployment is complete and the system is stable.',
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions."
        description="Everything you need to know about working with us: pricing, process, technical requirements, and whether your business is ready for AI. If you don't see your question here, reach out."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          {/* Jump links */}
          <div className="flex flex-wrap gap-3 mb-16">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="font-sans text-xs font-semibold tracking-[0.06em] uppercase px-4 py-2 border border-navy-200 text-navy-700 rounded-full hover:bg-navy-800 hover:text-bone-50 hover:border-navy-800 transition-all duration-220"
              >
                {cat.label}
              </a>
            ))}
          </div>

          {faqCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-16 scroll-mt-24">
              <h2 className="font-display text-2xl text-navy-800 mb-8 flex items-center gap-3">
                <span className="font-sans text-xs font-semibold tracking-[0.08em] uppercase px-3 py-1 bg-gold-100 text-gold-700 rounded-full">
                  {category.label}
                </span>
              </h2>
              <div className="space-y-6 bg-white border border-navy-200 rounded p-8 md:p-10">
                {category.questions.map((item, i) => (
                  <FaqEntry
                    key={i}
                    question={item.q}
                    answer={item.a}
                    index={i}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Still have questions */}
          <div className="bg-bone-100 border border-navy-200 rounded p-8 md:p-10 text-center">
            <h2 className="font-display text-xl text-navy-800 mb-3">Still have questions?</h2>
            <p className="sl-body-sm mb-6 max-w-lg mx-auto">
              We&apos;re happy to answer anything not covered here. Send us an email and we&apos;ll get back to you within one business day.
            </p>
            <a
              href="mailto:contact@sanluisai.com"
              className="inline-flex items-center justify-center font-sans text-sm font-semibold px-6 py-3 border border-navy-800 text-navy-800 rounded hover:bg-navy-800 hover:text-white transition-all duration-220"
            >
              contact@sanluisai.com &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Dark CTA section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build something that actually works?</h2>
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-8">Start with a $300 Discovery Session. 60 minutes. Clear roadmap.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">
              Book a Discovery Session.
            </Link>
            <a href="mailto:contact@sanluisai.com" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 border border-bone-300/30 text-bone-50 hover:border-gold-500 hover:text-gold-500 transition-all duration-220 rounded">
              contact@sanluisai.com
            </a>
          </div>
        </div>
      </section>
      </AnimatedSection>
    </>
  )
}
