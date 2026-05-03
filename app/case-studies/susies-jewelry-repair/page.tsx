import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Susie's Jewelry Repair — Case Study | SanLuis AI Solutions",
  description: "How SanLuis AI built automated lead capture and follow-up for Susie's Jewelry Repair, tripling inbound leads.",
}

export default function Page() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800 tracking-tight">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">Book a Discovery Session.</Link>
        </div>
      </nav>
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <span className="sl-eyebrow mb-4">Retail</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">Susie&apos;s Jewelry Repair.</h1>
          <p className="sl-lede mb-8">A Houston jewelry repair shop losing leads through inconsistent follow-up. We built an automated capture and nurture system that tripled inbound conversions.</p>
          <div className="grid grid-cols-3 gap-6 mb-12 p-6 bg-white border border-navy-900 rounded">
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Engagement</div><div className="font-display text-xl text-navy-800">2 weeks</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Result</div><div className="font-display text-2xl text-gold-600">3x leads</div></div>
            <div><div className="font-sans text-xs text-fg3 uppercase tracking-wider mb-1">Owner</div><div className="font-display text-xl text-navy-800">Full code</div></div>
          </div>
          <h2 className="font-display text-2xl text-navy-800 mb-4">The Problem</h2>
          <p className="sl-body mb-6">Leads came in through website forms, phone calls, and walk-ins — but with no system to track, prioritize, or follow up, over half fell through the cracks. The owner was doing everything manually.</p>
          <h2 className="font-display text-2xl text-navy-800 mb-4">What We Built</h2>
          <p className="sl-body mb-4">A complete lead management system:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2 sl-body">
            <li>Automated lead capture from website, phone, and walk-in channels</li>
            <li>Smart follow-up sequences via SMS and email with timing triggers</li>
            <li>Pipeline dashboard showing every lead's status in real time</li>
            <li>Integration with Google Calendar for automatic booking confirmations</li>
          </ul>
          <blockquote className="border-l-4 border-gold-600 pl-4 my-8 italic text-fg2 font-display text-lg">&ldquo;I went from losing leads to having a system that works even when I&apos;m not in the shop. SanLuis AI transformed how we run our business.&rdquo; — Susie&apos;s Jewelry Repair</blockquote>
        </div>
      </main>
      <footer className="bg-navy-950 py-12 text-center">
        <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
        <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions.</p>
      </footer>
    </>
  )
}
