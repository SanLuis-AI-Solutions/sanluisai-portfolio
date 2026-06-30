import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import CtaBar from '@/components/CtaBar'

export const metadata: Metadata = {
  title: 'AI Agents vs. Chatbots: What\'s the Difference (And When You Need Each) - SanLuis AI Solutions',
  description: 'Chatbots answer questions. AI agents take action. Here is the difference explained in plain language, plus a real-world example of when an agent delivered a 60% faster quoting process.',
  openGraph: {
    title: "AI Agents vs. Chatbots: What's the Difference (And When You Need Each)",
    description: 'Chatbots answer questions. AI agents take action. Here is the difference explained in plain language, plus a real example of a 60% faster quoting process.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/ai-agents-vs-chatbots',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-05-18',
    authors: ['Daniel San Luis'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "AI Agents vs. Chatbots: What's the Difference (And When You Need Each)",
  description: 'Chatbots answer questions. AI agents take action. Here is the difference explained in plain language, plus a real-world example of when an agent delivered a 60% faster quoting process.',
  author: {
    '@type': 'Person',
    name: 'Daniel San Luis',
    url: 'https://www.linkedin.com/in/danielsanluis',
  },
  datePublished: '2026-05-18',
  publisher: {
    '@type': 'Organization',
    name: 'SanLuis AI Solutions',
    url: 'https://sanluisai-portfolio.vercel.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/ai-agents-vs-chatbots',
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHeader
        eyebrow="Guide"
        title="AI Agents vs. Chatbots: What's the Difference (And When You Need Each)"
        description="One answers questions. One takes action. If you're trying to decide which your business needs, start here."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6 flex items-center gap-2">
            May 18, 2026
            <span className="inline-block w-3 h-3 flex-shrink-0" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" className="w-full h-full"><path d="M16 6 L24 16 L16 26 L8 16 Z" fill="#D9A434"/></svg>
            </span>
            5 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">
              "AI agent" and "chatbot" are used interchangeably in headlines, but they refer to two very different tools. Picking the wrong one means paying for capability you do not need or buying a solution that cannot do the job.
            </p>
            <p>
              Here is the difference in plain language, a side-by-side comparison, and the exact scenarios where each one makes sense for a Houston business.
            </p>
            <div className="bg-bone-100 border border-navy-200 rounded p-5 mb-8">
              <p className="font-sans text-sm text-navy-800 leading-relaxed m-0">
                <strong>TL;DR:</strong> AI agents take action across your systems. Chatbots answer questions. A $1,200 chatbot handles FAQs and lead capture. A $5,000+ agent runs multi-step workflows like quoting, booking, and CRM updates while you sleep.
              </p>
            </div>

            <h2>The Chatbot You Know</h2>
            <p>
              A chatbot is a conversational interface. You type a question, it returns an answer. Most chatbots today run on large language models. They sound natural, can handle basic conversation, and provide reasonable responses to common questions.
            </p>
            <p>
              But a chatbot has clear limits. It does not remember yesterday's conversations. It cannot access your CRM, your database, or your email system. It cannot take action on your behalf. It can tell a lead what your hours are. It cannot book an appointment and send a confirmation email.
            </p>
            <p>
              <strong>Good for:</strong> FAQ, basic customer service, simple lead triage, collecting form data.
            </p>
            <p>
              <strong>Starts at $1,200.</strong> Fixed price. You own it.
            </p>

            <h2>What an AI Agent Actually Is</h2>
            <p>
              An AI agent is not a chatbot that remembers. It is a system that perceives, decides, and acts autonomously within boundaries you define.
            </p>
            <p>
              Where a chatbot handles the question "What time do you close?" an AI agent handles the instruction "We have a lead from the website. She matches our ideal client profile. Book her for a showing, pull the property details, and send a confirmation email." The agent reads your CRM, checks your calendar, writes to your database, and triggers your email sequence without someone watching every step.
            </p>
            <p>
              An agent operates on schedules you set: running at midnight, triaging tickets on weekends, scanning for anomalies while your team sleeps. It logs every action. You approve outcomes, not every decision.
            </p>
            <p>
              <strong>Good for:</strong> Multi-step workflows, cross-system data operations, autonomous execution against business rules.
            </p>
            <p>
              <strong>Starts at $5,000.</strong> Fixed price. You own the code.
            </p>

            <h2>Chatbot vs. Agent: Side-by-Side Comparison</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full border-collapse text-sm font-sans">
                <thead>
                  <tr className="border-b-2 border-navy-800">
                    <th className="text-left py-3 pr-4 font-semibold text-navy-800"></th>
                    <th className="text-left py-3 pr-4 font-semibold text-navy-800">Chatbot</th>
                    <th className="text-left py-3 font-semibold text-navy-800">AI Agent</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-200">
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Primary function</td>
                    <td className="py-3 pr-4 text-fg2">Answers questions</td>
                    <td className="py-3 text-fg2">Takes action</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">System access</td>
                    <td className="py-3 pr-4 text-fg2">None</td>
                    <td className="py-3 text-fg2">CRM, database, email, APIs</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Decision-making</td>
                    <td className="py-3 pr-4 text-fg2">None (passes question to human)</td>
                    <td className="py-3 text-fg2">Rules-based, within defined boundaries</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Multi-step workflows</td>
                    <td className="py-3 pr-4 text-fg2">No</td>
                    <td className="py-3 text-fg2">Yes, end to end</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Cross-session memory</td>
                    <td className="py-3 pr-4 text-fg2">No</td>
                    <td className="py-3 text-fg2">Yes, persistent state</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Autonomous execution</td>
                    <td className="py-3 pr-4 text-fg2">No (requires a human to act)</td>
                    <td className="py-3 text-fg2">Yes, within rules you set</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Logging and audit</td>
                    <td className="py-3 pr-4 text-fg2">Conversation transcript</td>
                    <td className="py-3 text-fg2">Logs every action; traces every decision</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-navy-700 font-medium">Starting price</td>
                    <td className="py-3 pr-4 text-fg2">$1,200</td>
                    <td className="py-3 text-fg2">$5,000+</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>The Difference in One Sentence</h2>
            <p>
              A chatbot handles the question "What time do you close?" An AI agent handles the instruction "We have a lead, she matches our profile, book the showing and send a confirmation." Start to finish, without human supervision.
            </p>

            <h2>When a Chatbot Is Enough</h2>
            <p>
              If your use case is answering questions, routing calls, or collecting form data, a chatbot at $1,200 is the right call. Here is when to choose chatbot over agent:
            </p>
            <ul>
              <li><strong>FAQ-first support.</strong> Your customers mostly ask about hours, pricing, and policies. A chatbot answers those instantly and escalates the rest.</li>
              <li><strong>Simple lead triage.</strong> Collect name, phone, email, interest. Route to the right person in your CRM. No follow-through needed beyond the handoff.</li>
              <li><strong>One-channel interaction.</strong> You only need help on your website. No email, SMS, or back-office integration required.</li>
              <li><strong>You already have someone handling outcomes.</strong> The human is the agent: they get the triaged information and take it from there.</li>
            </ul>
            <p>
              Honest anti-sell: not every problem needs an agent. If a chatbot solves your problem, a chatbot is what you should buy.
            </p>

            <h2>When You Need an Agent</h2>
            <p>
              You need an AI agent when the problem involves multiple systems and autonomous decision-making. These four patterns tell you it is agent territory:
            </p>
            <ul>
              <li><strong>Cross-system workflows.</strong> The task requires reading data from one system, making a decision, and writing the result to another system. Example: pull a lead from your website, check their credit profile, and issue a pre-approved quote.</li>
              <li><strong>Rules-based decision chains.</strong> If this, then that, then check this, then notify. A chain of conditional logic that a human currently executes step by step.</li>
              <li><strong>Time-sensitive autonomous execution.</strong> The task needs to happen at 2 a.m. on a Saturday. No one is on shift. The system must decide and act on its own.</li>
              <li><strong>High-volume repetitive decisions.</strong> Your team makes the same decision 50 times a day. An agent can make those decisions consistently and escalate exceptions.</li>
            </ul>

            <h2>Real Example: Agent in Action</h2>
            <p>
              Garza International, a Houston construction firm, was losing bids because each proposal took six-plus hours to prepare. An estimator manually pulled material costs from four spreadsheets, cross-referenced labor rates, searched email archives for historical bid data, and formatted the proposal by hand. The limiting factor was not skill. It was time. The team could only bid on a fraction of available projects.
            </p>
            <p>
              This is a classic agent problem. It requires access to multiple data sources (supplier pricing, labor rates, historical bids), rules-based decision-making (optimal margin calculation, risk flagging), and autonomous execution (generating a complete formatted proposal without step-by-step supervision).
            </p>
            <p>
              The agent we built connects supplier APIs, historical bid data, and labor rate tables into a single system. An estimator enters project specs and the engine returns a formatted proposal in under 30 minutes. Result: <strong>60% faster bid turnaround</strong> and the ability to bid on twice as many projects without hiring more people.
            </p>
            <p>
              <Link href="/case-studies/garza-international" className="text-gold-600 hover:text-gold-700 underline underline-offset-2">Read the full Garza International case study →</Link>
            </p>

            <h2>What an Agent Actually Costs (And Why)</h2>
            <p>
              The price gap between a chatbot ($1,200) and an agent ($5,000+) raises an obvious question: why? The answer is scope and surface area.
            </p>
            <p>
              A chatbot replaces one interaction channel: the conversation box on your website. An agent replaces hours of manual work across multiple systems. A chatbot has one input (user question) and one output (text response). An agent reads from APIs, writes to databases, triggers email sequences, checks calendars, and logs every decision to an audit trail.
            </p>
            <p>
              The economics reflect that difference. A $1,200 chatbot that answers 50 questions a day saves a few hours of staff time. A $5,000 agent that automates bid quoting for a construction firm can cut turnaround by 60% and double bid capacity. The results are documented in the Garza case study.
            </p>

            <h2>How to Decide</h2>
            <p>
              Most businesses land in one of three categories:
            </p>
            <ul>
              <li><strong>No AI needed.</strong> The problem is infrequent, low-impact, or better solved with a checklist or a $20/month SaaS tool. We will tell you if this is you.</li>
              <li><strong>Chatbot territory.</strong> You need to answer questions, route conversations, or collect data. A chatbot is the right tool and the right price.</li>
              <li><strong>Agent territory.</strong> You have a multi-step, multi-system workflow that a human currently runs step by step. An agent can own the process end to end.</li>
            </ul>
            <p>
              The fastest way to find out which category you are in is a Discovery Session. One hour. We audit your operations, find the biggest limiting factor, and tell you exactly what you need: chatbot, agent, or neither.
            </p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              "SanLuis AI didn't just build software: they solved the single biggest problem in our sales process. We're bidding faster and winning more."
              <br /><span className="font-sans text-sm not-italic text-navy-500">Director of Operations, Garza International</span>
            </blockquote>

            <p>
              Start with a $300 Discovery Session. One hour. A written roadmap. A clear answer about whether you need a chatbot, an agent, or neither. If the answer is "nothing," you pay $300 for honesty instead of $5,000 for a system you did not need.
            </p>
          </div>

        </div>
      </article>
      </AnimatedSection>
      <CtaBar variant="primary" href="/booking" text="Book a Discovery Session" />
    </>
  )
}
