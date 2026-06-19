import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'From Discovery Session to Live System: A Client Onboarding Story | SanLuis AI Solutions',
  description: 'A Houston business owner walked into a Discovery Session skeptical. Thirty days later, the system was live and the metric that mattered most had already moved. Here is the exact timeline.',
  openGraph: {
    title: 'From Discovery Session to Live System: A Client Onboarding Story',
    description: 'A Houston business owner walked into a Discovery Session skeptical. Thirty days later, the system was live and the metric that mattered most had already moved.',
    url: 'https://sanluisai-portfolio.vercel.app/blog/client-onboarding-story',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
    publishedTime: '2026-06-18',
    authors: ['Daniel San Luis'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'From Discovery Session to Live System: A Client Onboarding Story',
  description: 'A Houston business owner walked into a Discovery Session skeptical. Thirty days later, the system was live and the metric that mattered most had already moved.',
  author: {
    '@type': 'Person',
    name: 'Daniel San Luis',
    url: 'https://www.linkedin.com/in/danielsanluis',
  },
  datePublished: '2026-06-18',
  publisher: {
    '@type': 'Organization',
    name: 'SanLuis AI Solutions',
    url: 'https://sanluisai-portfolio.vercel.app',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sanluisai-portfolio.vercel.app/blog/client-onboarding-story',
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
        eyebrow="Client Story"
        title="From Discovery Session to Live System: A Client Onboarding Story."
        description="A Houston business owner walked into a Discovery Session skeptical. Thirty days later, the system was live and the metric that mattered most had already moved. Here is the exact timeline, the decisions made, and the edge cases caught along the way."
      />

      <AnimatedSection delay={0}>
      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gold-50 border border-gold-300 rounded p-6 mb-12">
            <p className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-700 mb-2">TL;DR</p>
            <p className="sl-body-sm">
              A composite client journey based on real SanLuis deployments. Day 1: Discovery Session identifies the real problem. Day 3: ranked roadmap delivered with fixed-price quote. Day 7: working prototype reveals unexpected edge cases. Day 14: system deployed live with team trained. Day 30: optimization review confirms the metric that mattered most. The client lead capture rate went from an estimated 70% to 95% in the first month.
            </p>
          </div>

          <h2 className="font-display text-2xl text-navy-800 mb-4">Day 1: The Discovery Session</h2>
          <p className="sl-body mb-6">
            The client was a Houston professional services firm with 12 employees. The owner called because he wanted a chatbot for the website. That is what most people call about. It is rarely what they need.
          </p>
          <p className="sl-body mb-6">
            The Discovery Session costs $300. It lasts 60 minutes. The first question is always the same: what is the single most expensive problem in your business right now?
          </p>
          <p className="sl-body mb-6">
            For this client, the answer was not website traffic. It was follow-up. The firm was generating 40 to 50 inbound leads per week across phone, email, and a contact form. No two leads were tracked in the same place. Some went to the owner personal email. Some sat in a shared inbox that nobody checked on weekends. Some were lost entirely because the person who answered the phone took a handwritten note and never entered it anywhere.
          </p>
          <p className="sl-body mb-6">
            The owner estimated they were losing 30% of leads before any conversation happened. He had no way to verify that number because there was no system to measure it.
          </p>
          <p className="sl-body mb-6">
            We spent the next 30 minutes calculating the cost. At the firm average deal size, 30% of 40 weekly leads meant roughly 12 lost opportunities per week. Even at a conservative close rate, that was significant revenue walking out the door every month.
          </p>
          <p className="sl-body mb-6">
            The solution was not a chatbot. It was a lead intake and qualification tool that would capture every inbound lead, respond instantly, qualify the prospect, and route hot leads to the right person.
          </p>
          <p className="sl-body mb-8">
            The owner left the session with a written document: the problem, its cost, the proposed solution, and a fixed-price quote. The quote was $1,200. The timeline was 14 days.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">Day 3: The Roadmap</h2>
          <p className="sl-body mb-6">
            Two days after the session, the client received a ranked audit document. It listed three opportunities.
          </p>
          <p className="sl-body mb-2">
            <strong className="text-navy-800">1. Lead intake automation</strong> — capture, qualify, and route every lead. Estimated impact: recover 30% of lost leads. Cost: $1,200. Timeline: 14 days.
          </p>
          <p className="sl-body mb-2">
            <strong className="text-navy-800">2. Follow-up sequencing</strong> — automated nurture for leads not ready to buy. Estimated impact: convert 10% of cold leads over 90 days. Cost: $1,200. Timeline: 10 days.
          </p>
          <p className="sl-body mb-6">
            <strong className="text-navy-800">3. Reporting dashboard</strong> — real-time visibility into lead sources, response times, and conversion rates. Estimated impact: data-driven decisions on marketing spend. Cost: $5,000. Timeline: 21 days.
          </p>
          <p className="sl-body mb-8">
            The recommendation was to start with number one. The client agreed.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">Day 7: The Prototype</h2>
          <p className="sl-body mb-6">
            By day 7, the lead intake tool was running in a test environment. The client could see it working: a test lead submitted through the website, the tool responded in under 30 seconds, asked three qualifying questions, and routed a notification to the owner phone.
          </p>
          <p className="sl-body mb-6">
            This is where the unexpected edge cases surfaced.
          </p>
          <p className="sl-body mb-2">
            <strong className="text-navy-800">Edge case 1: The weekend lead.</strong> The tool was configured to route hot leads immediately. But the client discovered that a lead who submitted at 9 PM on a Saturday was not ready to talk. They wanted information. The tool needed a send info and schedule for Monday path, not an immediate alert.
          </p>
          <p className="sl-body mb-2">
            <strong className="text-navy-800">Edge case 2: The repeat caller.</strong> A prospect called three times in one week. Each time, the tool treated them as a new lead. The client needed the tool to recognize returning prospects and pick up the conversation where it left off.
          </p>
          <p className="sl-body mb-6">
            <strong className="text-navy-800">Edge case 3: The referral.</strong> Some leads came in with a specific employee name. The tool needed to route those directly to that person, not through the general qualification flow.
          </p>
          <p className="sl-body mb-8">
            Each edge case took a day to fix. The prototype phase stretched from day 7 to day 10. The client was involved in every decision. The fixes were made before the system went live, not after.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">Day 14: Goes Live</h2>
          <p className="sl-body mb-6">
            The tool went live on day 14 as scheduled. The launch included integration with the firm website contact form, connection to the shared phone line with calls transcribed and treated as leads, email capture from the general inbox, routing rules for hot, warm, and cold leads, and a dashboard showing every lead, its status, and the response time.
          </p>
          <p className="sl-body mb-6">
            The team received a 45-minute walkthrough. Each person knew how to check their queue, how to mark a lead as contacted, and what to do if a lead came in outside business hours.
          </p>
          <p className="sl-body mb-8">
            The owner question on launch day: how do we know if this is working? The answer: we measure response time and capture rate. If both go up, revenue follows.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">Day 30: Tuning It Up</h2>
          <p className="sl-body mb-6">
            Thirty days after launch, we reviewed the numbers.
          </p>
          <p className="sl-body mb-6">
            Before the tool: estimated 40 to 50 leads per week. Estimated 30% loss rate. No reliable measurement of response time.
          </p>
          <p className="sl-body mb-6">
            After 30 days: 47 leads captured in week one. 52 in week two. 48 in week three. 51 in week four. The tool was capturing every lead that came through any channel. The loss rate dropped from an estimated 30% to under 5%.
          </p>
          <p className="sl-body mb-6">
            Response time went from hours (or never) to under 60 seconds for every lead. The owner received a notification on his phone within 30 seconds of a hot lead submitting the form. He started responding to leads during dinner, during his commute, and on weekends. Not because he had to. Because the tool made it easy.
          </p>
          <p className="sl-body mb-6">
            The metric that mattered most to this client was lead capture rate. Before the tool, he could not measure it. After the tool, it was 95%. That number alone justified the investment.
          </p>
          <p className="sl-body mb-8">
            The owner comment during the tuning review: I did not realize how many leads we were losing until we stopped losing them.
          </p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What This Pattern Looks Like Across Clients</h2>
          <p className="sl-body mb-6">
            This timeline is not unique to one firm. It follows the same pattern we have seen with Garza International (60% faster quoting in 3 weeks), Susie&apos;s Jewelry Repair (3x inbound leads in 2 weeks), and LoveFlow (AI-assisted app design in 3 days).
          </p>
          <p className="sl-body mb-8">
            The Discovery Session identifies the real problem. The roadmap prioritizes it. The prototype catches the edge cases. The launch puts the tool to work. The 30-day review confirms the metric moved. Every client starts skeptical. Every client ends with a number they can point to.
          </p>

          <div className="bg-navy-900 border border-gold-600/30 rounded p-8 text-center">
            <h2 className="font-display text-xl text-bone-50 mb-3">Start With a Discovery Session</h2>
            <p className="font-sans text-sm text-bone-300/70 mb-6 max-w-lg mx-auto">
              If you are skeptical about whether AI will actually work for your business, start the same way every client does. Book a $300 Discovery Session. We will map your current operations, identify the highest-impact opportunity, and give you a written roadmap within 24 hours. If we do not find three clear opportunities, the session is free.
            </p>
            <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded">
              Book a Discovery Session
            </Link>
          </div>
        </div>
      </article>
      </AnimatedSection>
    </>
  )
}
