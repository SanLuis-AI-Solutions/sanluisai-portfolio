import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Healthcare. — SanLuis AI Solutions',
  description: 'Administrative burden, prior authorization delays, and patient intake friction drain resources from care. We build AI to eliminate the overhead.',
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative w-full h-48 md:h-72 rounded-lg overflow-hidden mb-8 bg-navy-100">
            <Image src="/generated/ind_healthcare_00001_.png" alt="Modern AI-enhanced healthcare facility" fill className="object-cover" sizes="100vw" />
          </div>
          <span className="sl-eyebrow mb-4">Industry</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">AI for Healthcare.</h1>
          <p className="sl-body-lg max-w-prose mb-8">Administrative burden, prior authorization delays, and patient intake friction drain resources from care. We build AI to eliminate the overhead.</p>
          <p className="sl-body max-w-prose mb-4">Healthcare providers spend 30% of revenue on administrative overhead. Prior authorization alone costs the industry $350B annually in wasted labor. These are not technology problems -- they are process problems with AI-ready solutions.</p>
          <p className="sl-body max-w-prose mb-4">We build systems that automate prior authorization workflows, streamline patient intake, and reduce documentation burden on clinical staff. The result: faster reimbursements, shorter wait times, and more time for care.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mb-8"><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Prior Authorization</div><div className="font-sans text-sm text-fg2 mt-2">Automated submission and tracking, 80% faster.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Patient Intake</div><div className="font-sans text-sm text-fg2 mt-2">Conversational AI that captures complete histories pre-visit.</div></div><div className="bg-white border border-navy-900 rounded p-6"><div className="font-sans text-xs font-semibold uppercase tracking-wider text-gold-600 mb-2">Problem</div><div className="font-display text-lg text-navy-800">Documentation</div><div className="font-sans text-sm text-fg2 mt-2">Ambient listening that generates clinical notes in real time.</div></div></div>
          <div className="mt-12">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
          </div>
        </div>
      </main>
      <footer className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
          <p className="font-sans text-sm text-navy-300 mb-4">contact@sanluisai.com &middot; @SanLuisAiClientbot</p>
          <p className="font-sans text-xs text-navy-400">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}