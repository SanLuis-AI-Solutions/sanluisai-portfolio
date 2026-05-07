import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'
import AnimatedCounter from '@/components/AnimatedCounter'
import OrnamentDivider from '@/components/OrnamentDivider'

export const metadata: Metadata = {
  title: "Susie's Jewelry Repair — Case Study | SanLuis AI Solutions",
  description: "How SanLuis AI built automated lead capture and follow-up for Susie's Jewelry Repair, tripling inbound leads.",
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
          <h2 className="font-display text-2xl text-navy-800 mb-4">The Problem</h2>
          <p className="sl-body mb-6">Leads came in through website forms, phone calls, and walk-ins — but with no system to track, prioritize, or follow up, over half fell through the cracks. The owner was doing everything manually.</p>
          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-4">A complete lead management system:</p>
          <ul className="list-diamond mb-6 space-y-2 sl-body">
            <li>Automated lead capture from website, phone, and walk-in channels</li>
            <li>Smart follow-up sequences via SMS and email with timing triggers</li>
            <li>Pipeline dashboard showing every lead's status in real time</li>
            <li>Integration with Google Calendar for automatic booking confirmations</li>
          </ul>

          {/* ROI Snapshot — Billable Bleed */}
          <div className="bg-navy-900 text-bone-50 border border-gold-600/40 rounded p-6 mb-8">
            <h3 className="font-display text-xl text-gold-500 mb-4">ROI Snapshot — The Billable Bleed</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-1">Before — Annual Bleed</div>
                <div className="font-mono text-sm text-bone-300/80">40 hrs/mo manual follow-up · $35/hr</div>
                <div className="font-display text-2xl text-red-400 mt-1">$16,800</div>
                <div className="font-sans text-xs text-bone-300/40 mt-1">Lost leads + owner's time</div>
              </div>
              <div>
                <div className="font-sans text-xs text-bone-300/40 tracking-[0.08em] uppercase mb-1">After — Annual Gain</div>
                <div className="font-mono text-sm text-bone-300/80">3x leads · 94% follow-up rate</div>
                <div className="font-display text-2xl text-green-400 mt-1">+$16,800</div>
                <div className="font-sans text-xs text-bone-300/40 mt-1">Owner time fully recovered</div>
              </div>
            </div>
            <div className="border-t border-bone-300/10 pt-4 flex items-baseline justify-between">
              <span className="font-sans text-xs text-bone-300/50">AI System Investment</span>
              <span className="font-display text-lg text-gold-500">$1,200–2,000</span>
            </div>
            <div className="font-sans text-xs text-gold-500/80 mt-3 font-medium">Net Year 1 Gain: ~$14,800–15,600 (7x payback)</div>
          </div>

          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 text-fg2 font-display text-lg">
  <p className="italic mb-2">&ldquo;I went from losing leads to having a system that works even when I&apos;m not in the shop. SanLuis AI transformed how we run our business.&rdquo;</p>
  <footer className="text-gold-600/80 not-italic text-base">— Susie Castellano, Owner</footer>
</blockquote>
        </div>
      </section>
      </AnimatedSection>

      <section className="bg-navy-900 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl text-bone-50 mb-4">Want to stop losing leads to slow follow-up?</h2>
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
