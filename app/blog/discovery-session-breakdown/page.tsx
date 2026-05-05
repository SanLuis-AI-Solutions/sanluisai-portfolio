import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'The $300 Discovery Session: What Happens in That Hour — SanLuis AI Solutions',
  description: 'You pay $300 for a 60-minute audit. What do you actually get? A breakdown of the diagnostic process — from problem identification to a written action plan you can execute.',
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="The $300 Discovery Session: What Happens in That Hour"
        description="You pay $300 for a 60-minute audit. What do you actually get?"
      />

      <article className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-6">
            April 28, 2026 · 4 min read
          </div>

          <div className="prose prose-navy max-w-none">
            <p className="lead text-lg text-navy-700 mb-8">$300 for a one-hour meeting sounds expensive until you realize it replaces four weeks of discovery-phase billing.</p>

            <h2>Before the Session</h2>
            <p>You fill out a brief form: company website, biggest pain point, current tools, budget range. This lets us skip the "tell us about your business" portion and get straight to the problem. No sales pitch. No discovery deck. Just context.</p>

            <h2>Minute 0–15: Problem Identification</h2>
            <p>We ask one question: "What is the single most expensive problem in your business right now?" Not your top five. The one that keeps you up at night. The one that, if solved, would free up the most time or generate the most revenue.</p>
            <p>Most business owners answer this in 30 seconds. The answer is almost never what they put on their website.</p>

            <h2>Minute 15–30: Cost Analysis</h2>
            <p>We calculate what the problem is costing you. Hours per week multiplied by hourly value, plus lost opportunities, plus frustration tax. This number is almost always higher than you think.</p>
            <p>If the problem costs less than the solution, we stop there. We'll tell you honestly: this one isn't worth building. The $300 was well spent because it saved you $5,000.</p>

            <h2>Minute 30–45: Solution Architecture</h2>
            <p>If the math works, we sketch the solution. Not wireframes. Not PRDs. A clear description of what the system will do, how it fits into your existing workflow, and what you'll see when it's running.</p>

            <h2>Minute 45–60: Roadmap + Pricing</h2>
            <p>You receive:</p>
            <ul>
              <li>A written summary of the problem and its cost</li>
              <li>The proposed solution in plain language</li>
              <li>A fixed-price quote and timeline</li>
              <li>A recommended next step</li>
            </ul>

            <h2>What Happens Next</h2>
            <p>You walk away with a document. Not a proposal for more consulting. A concrete answer: build this, don't build that. If the answer is "build," you have a price and a timeline before you've paid a retainer.</p>
            <p>If the answer is "don't build," you saved thousands. Either way, the $300 was the cheapest diagnostic you'll ever run on your business.</p>

            <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">
              "Most consultants charge thousands to tell you what you already know. We charge $300 to tell you what you don't."
            </blockquote>
          </div>

          <div className="mt-12 pt-8 border-t border-navy-200">
            <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-navy-800 text-bone-50 hover:bg-navy-900 transition-all duration-220 rounded">
              Book a Discovery Session →
            </Link>
            <Link href="/blog" className="ml-4 inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-220 rounded">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
