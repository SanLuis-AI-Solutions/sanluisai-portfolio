import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'About — SanLuis AI Solutions | No-Code AI Developer Houston',
  description: 'SanLuis AI Solutions is a one-person AI studio in Houston, TX. Custom AI systems, workflow automation, and AI agents for small and mid-size businesses. Bilingual EN/ES.',
  openGraph: {
    title: 'About — SanLuis AI Solutions | No-Code AI Developer Houston',
    description: 'SanLuis AI Solutions is a one-person AI studio in Houston, TX. Custom AI systems, workflow automation, and AI agents for small and mid-size businesses.',
    url: 'https://sanluisai-portfolio.vercel.app/about',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="The Studio"
        title="About the studio."
        description="SanLuis AI Solutions is a one-person AI studio based in Houston, TX. We build what used to require a full dev team — in weeks, at a fraction of the cost. Every system is designed to make your team more powerful, not smaller."
      />

      {/* Light content section */}
      <main className="bg-bone-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
        </div>
      </main>

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
