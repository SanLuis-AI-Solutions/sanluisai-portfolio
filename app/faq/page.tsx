import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

const faqSchemaQuestions = [
  { question: 'How much does a custom AI system cost?', answer: 'Custom AI systems start at $5,000 and workflow automations start at $1,200. Pricing depends on scope, integrations, and complexity — but we give you a firm quote before any work begins.' },
  { question: 'What is included in the $300 Discovery Session?', answer: 'The Discovery Session is a focused 60-minute working session where we map your top 3 highest-leverage AI opportunities, identify what data and tools are needed, and deliver a written roadmap with pricing estimates.' },
  { question: 'Do you require long-term contracts?', answer: 'All our projects are scoped, quoted, and billed per project — no monthly retainers, no annual commitments. If you need ongoing support after launch, we offer simple month-to-month maintenance at a flat rate.' },
  { question: 'What if the project does not work?', answer: 'We work in iterative milestones so you see, test, and approve each stage before we move to the next. If at any point the solution is not meeting expectations, we stop, reassess, and adjust.' },
  { question: 'How long does it take from start to deployment?', answer: 'Workflow automations deploy in 1-2 weeks. AI agent systems and custom apps deploy in 3-6 weeks. Full applications with complex integrations may take 4-10 weeks.' },
  { question: 'What happens during the Discovery Session?', answer: 'In our 60-minute session, we walk through your actual operations and identify the three highest-impact opportunities. You leave with a written roadmap, a prioritized build order, and a pricing estimate.' },
  { question: 'How do you decide what to build first?', answer: 'We prioritize based on three factors: speed of implementation, business value, and data readiness. The roadmap you receive is already prioritized this way.' },
  { question: 'What if I do not know exactly what I need?', answer: 'You do not need to know — that is our job. Most clients come to us with a vague sense that something could be faster or easier. The Discovery Session is designed exactly for this scenario.' },
  { question: 'How do AI agents differ from chatbots?', answer: 'A chatbot simply answers questions. An AI agent takes action — it can intake a lead, check inventory, research a prospect, draft a proposal, and update a CRM. Agents are autonomous workers, not conversation tools.' },
  { question: 'What data do you need from me?', answer: 'We can work with whatever data you have — spreadsheets, emails, PDFs, CRM exports, or even handwritten notes. We handle the cleaning, structuring, and integration.' },
  { question: 'Can AI integrate with my existing tools?', answer: 'Every system we build integrates with your existing stack: CRMs (HubSpot, Salesforce, Pipedrive), communication tools (Slack, email, WhatsApp), and databases (Google Sheets, Airtable, SQL).' },
  { question: 'Who owns the code and data?', answer: 'You own 100% of the code, data, and intellectual property we build for you. There are no platform fees, no licensing costs, no ongoing dependency on us to keep your system running.' },
  { question: 'How do I know my business is ready for AI?', answer: 'Your business is ready if you have repetitive tasks that consume your team\'s time, data that could inform better decisions, or customer-facing processes that could be faster.' },
  { question: 'Will AI replace my employees?', answer: 'We build systems that handle the repetitive, time-consuming tasks your team does not enjoy. Your team focuses on higher-value work — client relationships, creative problem-solving, strategic decisions.' },
  { question: 'What industries do you work with?', answer: 'We work across retail, healthcare, professional services, logistics, manufacturing, and real estate. If your business has processes, AI can improve them.' },
  { question: 'Do you work with Spanish-speaking businesses?', answer: 'All our services, interfaces, and systems are available fully in English and Spanish. Our team is bilingual, and we regularly build systems that operate seamlessly in both languages.' },
  { question: 'Is there a minimum project size?', answer: 'Our minimum project is the $300 Discovery Session — after that, if there is a clear opportunity, we can build a workflow automation for as little as $1,200. No minimum commitment required upfront.' },
]

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | SanLuis AI Solutions',
  description: 'Answers to common questions about pricing, process, technical requirements, and business readiness for custom AI systems, workflow automation, and AI agents. $300 Discovery Session. No long-term contracts.',
  openGraph: {
    title: 'FAQ — Frequently Asked Questions | SanLuis AI Solutions',
    description: 'Everything you need to know about working with SanLuis AI: pricing, process, technical requirements, and whether your business is ready for AI.',
    url: 'https://sanluisai-portfolio.vercel.app/faq',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
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
        a: 'Most businesses get sticker shock when they see agency estimates in the $20k–$100k range. The truth is, AI development costs have collapsed. Custom AI systems start at $5,000 and workflow automations start at $1,200. Pricing depends on scope, integrations, and complexity — but we give you a firm quote before any work begins.',
      },
      {
        q: "What's included in the $300 Discovery Session?",
        a: 'A vague call with no clear outcome is a waste of everyone\'s time. The Discovery Session is a focused 60-minute working session where we map your top 3 highest-leverage AI opportunities, identify what data and tools are needed, and deliver a written roadmap with pricing estimates. You walk away knowing exactly what to build and in what order.',
      },
      {
        q: 'Do you require long-term contracts?',
        a: 'Being locked into an annual contract for a tool you might outgrow in six months is a bad deal. All our projects are scoped, quoted, and billed per project — no monthly retainers, no annual commitments. If you need ongoing support after launch, we offer simple month-to-month maintenance at a flat rate.',
      },
      {
        q: "What if the project doesn't work?",
        a: 'You should not pay for a system that does not deliver results. We work in iterative milestones so you see, test, and approve each stage before we move to the next. If at any point the solution isn\'t meeting expectations, we stop, reassess, and adjust — no sunk cost, no blame.',
      },
    ],
  },
  {
    id: 'process',
    label: 'Process',
    questions: [
      {
        q: 'How long does it take from start to deployment?',
        a: 'Waiting months for software is unnecessary when AI can ship in weeks. Workflow automations deploy in 1-2 weeks. AI agent systems and custom apps deploy in 3-6 weeks. Full applications with complex integrations may take 4-10 weeks. Every project starts with a firm timeline set during the Discovery Session.',
      },
      {
        q: 'What happens during the Discovery Session?',
        a: 'Most business owners know they have inefficiencies but can\'t pinpoint exactly where AI would help most. In our 60-minute session, we walk through your actual operations — the bottlenecks, the repetitive tasks, the data you already have — and identify the three highest-impact opportunities. You leave with a written roadmap, a prioritized build order, and a pricing estimate.',
      },
      {
        q: 'How do you decide what to build first?',
        a: 'Building the wrong thing first is the most common mistake in AI adoption. We prioritize based on three factors: (1) speed of implementation — quick wins build momentum, (2) business value — the feature that saves the most time or money, and (3) data readiness — what your existing systems already support. The roadmap you receive is already prioritized this way.',
      },
      {
        q: "What if I don't know exactly what I need?",
        a: 'You don\'t need to know — that\'s our job. Most clients come to us with a vague sense that something could be faster or easier. We start by understanding your business, not by asking for a requirements document. The Discovery Session is designed exactly for this scenario: we help you clarify what you need based on how your business actually runs.',
      },
    ],
  },
  {
    id: 'technical',
    label: 'Technical',
    questions: [
      {
        q: 'How do AI agents differ from chatbots?',
        a: 'A chatbot simply answers questions. An AI agent takes action — it can intake a lead, check inventory, research a prospect, draft a proposal, update a CRM, and escalate to a human when needed. Agents are autonomous workers, not conversation tools. They operate on your data, follow your business rules, and only loop in your team for decisions.',
      },
      {
        q: 'What data do you need from me?',
        a: 'Worrying that you need perfectly organized, clean data before AI can help is a common misconception. We can work with whatever data you have — spreadsheets, emails, PDFs, CRM exports, or even handwritten notes. We handle the cleaning, structuring, and integration. The more data you have, the better the results, but we can start with surprisingly little.',
      },
      {
        q: 'Can AI integrate with my existing tools (CRM, email, Slack)?',
        a: 'A system that requires you to abandon your current tools is not a solution — it\'s a new problem. Every system we build integrates with your existing stack: CRMs (HubSpot, Salesforce, Pipedrive), communication tools (Slack, email, WhatsApp), and databases (Google Sheets, Airtable, SQL). We work with your tools, not against them.',
      },
      {
        q: 'Who owns the code and data?',
        a: 'Vendor lock-in is a legitimate concern — you should never lose access to your own system. You own 100% of the code, data, and intellectual property we build for you. There are no platform fees, no licensing costs, no ongoing dependency on us to keep your system running. We deploy to your accounts and hand over full access at launch.',
      },
    ],
  },
  {
    id: 'business',
    label: 'Business',
    questions: [
      {
        q: 'How do I know my business is ready for AI?',
        a: 'You don\'t need a tech team, a data warehouse, or a six-figure budget to benefit from AI. Your business is ready if you have repetitive tasks that consume your team\'s time, data that could inform better decisions, or customer-facing processes that could be faster. If you\'re not sure, the Discovery Session will tell you — with zero pressure to proceed.',
      },
      {
        q: 'Will AI replace my employees?',
        a: 'This is the most common fear — and it almost never plays out that way in small and mid-size businesses. We build systems that handle the repetitive, time-consuming tasks your team doesn\'t enjoy: data entry, lead qualification, status checking, report generation. Your team focuses on higher-value work — client relationships, creative problem-solving, strategic decisions. Every client we\'ve worked with has kept their team intact.',
      },
      {
        q: 'What industries do you work with?',
        a: 'AI isn\'t limited to tech companies — it\'s a force multiplier for every industry. We work across retail, healthcare, professional services, logistics, manufacturing, and real estate. Past projects include jewelry repair intake systems, logistics quoting tools, customer management platforms, and automated proposal generation. If your business has processes, AI can improve them.',
      },
      {
        q: 'Do you work with Spanish-speaking businesses?',
        a: 'Bilingual capability shouldn\'t be an afterthought — it should be built in from the start. All our services, interfaces, and systems are available fully in English and Spanish. Our team is bilingual, and we regularly build systems that operate seamlessly in both languages, including for businesses that serve Spanish-speaking customers exclusively.',
      },
      {
        q: 'Is there a minimum project size?',
        a: 'Some agencies won\'t return your call unless you\'re spending $10k or more. We believe AI should be accessible to any business that has a real problem to solve. Our minimum project is the $300 Discovery Session — after that, if there\'s a clear opportunity, we can build a workflow automation for as little as $1,200. No minimum commitment required upfront.',
      },
    ],
  },
]

function FaqEntry({ question, answer, index }: { question: string; answer: string; index: number }) {
  return (
    <div className="border-b border-navy-100 pb-6">
      <div className="flex items-start gap-4">
        <span className="font-sans text-xs font-semibold text-gold-600 mt-1 min-w-[2rem] tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="font-display text-lg text-navy-800 mb-2">{question}</h3>
          <p className="sl-body-sm text-fg3">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently Asked Questions."
        description="Everything you need to know about working with us — pricing, process, technical requirements, and whether your business is ready for AI. If you don't see your question here, reach out."
      />

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
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Ready to build your project?</h2>
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
    </>
  )
}
