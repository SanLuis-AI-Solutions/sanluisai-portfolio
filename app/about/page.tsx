import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — SanLuis AI Solutions | No-Code AI Developer Houston',
  description: 'SanLuis AI Solutions is a one-person AI studio in Houston, TX. Custom AI systems, workflow automation, and AI agents for small and mid-size businesses. Bilingual EN/ES.',
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
          <span className="sl-eyebrow mb-4">The Studio</span>
          <h1 className="sl-display-lg text-navy-800 mb-6">About the studio.</h1>
          <p className="sl-lede mb-8">SanLuis AI Solutions is a one-person AI studio based in Houston, TX. We build what used to require a full dev team — in weeks, at a fraction of the cost. Every system is designed to make your team more powerful, not smaller.</p>

          <div className="bg-white border border-navy-200 rounded p-8 mb-10">
            <h2 className="font-display text-xl text-navy-800 mb-3">Daniel San Luis — Founder</h2>
            <p className="sl-body mb-4">Daniel is a bilingual (EN/ES) systems builder who designs and deploys custom AI infrastructure for businesses. Every engagement is hands-on, direct, and verified — no slide decks, no six-month discovery phases. We ship working systems in weeks.</p>
            <p className="sl-body mb-4">Based in Houston, Daniel runs the entire AI stack: from architecture and model routing to deployment and continuous optimization. He does not subcontract. When you hire SanLuis AI, you get Daniel San Luis.</p>
            <p className="sl-body">He's shipped 3 production AI applications and is available for both client projects and full-time AI product and solutions engineering roles.</p>
          </div>

          <h2 className="font-display text-2xl text-navy-800 mb-4">How We Work</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We start with your problem, not a technology.</h3>
              <p className="sl-body">Before writing a single line of logic, we map what your team actually does — where the time goes, where mistakes happen, where the real opportunity is.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We build with AI, not around it.</h3>
              <p className="sl-body">Google AI Studio, Gemini, Claude, n8n — these aren't add-ons. They're the build environment. It's how we ship in weeks what agencies quote in months.</p>
            </div>
            <div>
              <h3 className="font-display text-lg text-navy-800 mb-2">We stay until it's working.</h3>
              <p className="sl-body">Deployment isn't the finish line. We document, train, and support until your team is confident and the system is stable.</p>
            </div>
          </div>

          <div className="bg-bone-100 border border-navy-200 rounded p-8 mb-10">
            <h2 className="font-display text-xl text-navy-800 mb-3">The Numbers</h2>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="font-display text-3xl text-gold-600">6</div>
                <div className="font-sans text-xs text-fg3 uppercase tracking-wider">Projects Delivered</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold-600">5</div>
                <div className="font-sans text-xs text-fg3 uppercase tracking-wider">Clients Served</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold-600">3</div>
                <div className="font-sans text-xs text-fg3 uppercase tracking-wider">AI Apps in Production</div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold-600">0</div>
                <div className="font-sans text-xs text-fg3 uppercase tracking-wider">Jobs Replaced</div>
              </div>
            </div>
          </div>

          <h2 className="font-display text-2xl text-navy-800 mb-4">The Stack</h2>
          <p className="sl-body mb-6">Design: Google Stitch. Development: Google AI Studio, Gemini, Claude. Frontend: React, Next.js, Tailwind CSS. Backend: Supabase. Deployment: Vercel, GitHub. Automation: n8n. Languages: English &middot; Spanish.</p>

          <div className="flex gap-4">
            <Link href="/booking" className="inline-block font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white rounded shadow-2 hover:bg-navy-800 transition-colors">
              Book a Discovery Session.
            </Link>
            <a href="mailto:contact@sanluisai.com" className="inline-block font-sans text-sm font-semibold px-6 py-3 border border-navy-900 text-navy-900 rounded hover:bg-navy-50 transition-colors">
              contact@sanluisai.com
            </a>
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
