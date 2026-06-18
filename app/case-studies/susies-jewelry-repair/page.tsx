import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import OrnamentDivider from '@/components/OrnamentDivider'
import BeforeAfter from '@/components/BeforeAfter'

export const metadata: Metadata = {
  title: "Susie's Jewelry Repair: Case Study | SanLuis AI Solutions",
  description: "How SanLuis AI built automated lead capture and follow-up for Susie's Jewelry Repair, tripling inbound leads.",
  openGraph: {
    title: "Susie's Jewelry Repair: Case Study | SanLuis AI Solutions",
    description: "How SanLuis AI built automated lead capture and follow-up for Susie's Jewelry Repair, tripling inbound leads.",
    url: 'https://sanluisai-portfolio.vercel.app/case-studies/susies-jewelry-repair',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/og-default.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Retail"
        title="Susie's Jewelry Repair."
        description="A Houston jewelry repair shop losing leads through inconsistent follow-up. We built an automated capture and nurture system that tripled inbound conversions."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">2 weeks</div></div>
            <div><AnimatedCounter value={3} suffix="x" label="Lead conversion" /></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>

          {/* Impact counters */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <AnimatedCounter value={0} suffix=" hrs" label="Manual lead entry" />
            <AnimatedCounter value={94} suffix="%" label="Follow-up rate" />
            <AnimatedCounter value={30} suffix=" min" label="Setup time" />
          </div>
          <OrnamentDivider className="!py-8" />

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Situation</h2>
          <p className="sl-body mb-6">Susie's Jewelry Repair was a busy Houston shop where leads arrived through three channels - website forms, phone calls, and foot traffic. But there was no system connecting them. A voicemail from yesterday sat unheard. A web inquiry from three days ago never got a response. Walk-in customers received a hand-written repair quote that was never followed up. The owner was doing it all by memory and running out of time.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Constraint</h2>
          <p className="sl-body mb-6">Susie knew she was losing business. She could feel it. But she is a jeweler, not a marketer. Every CRM she tried was built for enterprise sales teams with features she would never use and pricing that assumed a full-time person to manage it. She needed something that worked like a jeweler, not like a SaaS dashboard.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-6">A lead management system that unifies website forms, phone calls, and walk-in data into one real-time dashboard. When a lead enters, it automatically sends SMS follow-ups at 1 hour, 24 hours, and 72 hours. Walk-in customers receive their repair quote by text within minutes of leaving the shop. The system connects to Google Calendar so booking confirmations happen automatically.</p>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Outcome</h2>
          <p className="sl-body mb-6">Lead follow-up dropped from 2-5 days to under 30 seconds. Follow-up rate went from approximately 45% to 94%. Inbound conversions tripled. The ROI section below captures the financials.</p>

          <BeforeAfter
            title="The Difference"
            before={{
              label: 'Manual Process',
              metric: 'Lead Follow-up Time',
              value: '2-5 days',
              details: [
                'Leads scattered across voicemail, text messages, and paper notes',
                'No systematic follow-up: responses were "whenever I get to it"',
                'Walk-in customers with repair quotes never contacted again',
                'Estimated 55% lead loss rate from inconsistent response',
              ],
            }}
            after={{
              label: 'AI-Powered',
              metric: 'Lead Follow-up Time',
              value: '< 30 sec',
              details: [
                'All channels funnel into one unified lead dashboard in real time',
                'Auto-follow-up via SMS at 1hr, 24hr, and 72hr intervals',
                'Walk-in leads get texted their repair quote within minutes',
                '94% follow-up rate: 3x conversion from pre-system baseline',
              ],
            }}
          />

          <h2 className="font-display text-2xl text-navy-800 mb-4">What They Do Now</h2>
          <p className="sl-body mb-6">Susie checks her dashboard once a day instead of juggling three channels by memory. She focuses on the bench: repairs, custom work, and client relationships. The system handles follow-up, reminders, and booking confirmations.</p>



          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 text-fg2 font-display text-lg">
            <p className="italic mb-2">"I went from losing leads to having a system that works even when I am not in the shop. SanLuis AI transformed how we run our business."</p>
            <footer className="text-gold-600/80 not-italic text-base">Susie Castellano, Owner</footer>
          </blockquote>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-base md:text-lg font-light text-bone-300/70 mb-6">Your leads could be converting three times faster. Start with a $300 Discovery Session.</p>
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-8">Want to stop losing leads to slow follow-up?</h2>
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
