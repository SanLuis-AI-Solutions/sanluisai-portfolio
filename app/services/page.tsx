import Link from 'next/link'
import type { Metadata } from 'next'
import PageHeader from '@/components/PageHeader'

export const metadata: Metadata = {
  title: 'AI Development Services | Custom AI, Automation, Agents & Consulting | SanLuis AI Solutions',
  description: 'Workflow automation from $1,200. AI agent systems from $5,000. Custom AI apps and $300 Discovery Sessions. No-code AI development for small and mid-size businesses. Houston TX. Bilingual EN/ES.',
  openGraph: {
    title: 'AI Services | Custom AI, Automation, Agents & Consulting | SanLuis AI Solutions',
    description: 'Custom AI systems from $5,000, workflow automation from $1,200, AI agents, and $300 consulting sessions. No-code development for small and mid-size businesses.',
    url: 'https://sanluisai-portfolio.vercel.app/services',
    siteName: 'SanLuis AI Solutions',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

const services = [
  {
    num: '01',
    name: 'Custom AI Systems',
    desc: 'Built from scratch for your exact problem. No templates, no compromises, no feature bloat.',
    items: ['Architecture from first principles tailored to your stack', 'Full source ownership — your IP stays yours', 'Deployed in weeks, not months', 'Authentication, roles, permissions, and AI features where they create leverage'],
    pricing: 'From $5,000',
    timeline: '3-6 weeks',
    href: '/services/custom-ai',
  },
  {
    num: '02',
    name: 'Workflow Automation',
    desc: "Eliminate the manual busywork consuming your team's highest-value hours.",
    items: ['Map your process once, then let automation run it', 'Integrates with your existing tools (CRM, email, Slack, etc.)', '30-day post-launch support included', 'Examples: lead intake, invoice generation, report delivery'],
    pricing: 'From $1,200',
    timeline: '1-2 weeks',
    href: '/services/automation',
  },
  {
    num: '03',
    name: 'AI Agent Systems',
    desc: 'Autonomous agents that intake, qualify, research, and route — while your team focuses on decisions.',
    items: ['Multi-agent orchestration with human review gates', 'Integrates with your data sources and existing tools', 'Monitoring, logging, and escalation rules built in', 'Examples: intake agent, research agent, customer triage'],
    pricing: 'From $5,000',
    timeline: '3-6 weeks',
    href: '/services/agents',
  },
  {
    num: '04',
    name: 'AI Consulting — Discovery Session',
    desc: 'Know exactly where to start. One session. A clear roadmap.',
    items: ['60-minute focused working session (video call)', 'Identify your top 3 highest-leverage AI opportunities', 'Written roadmap delivered after the session', 'Pricing estimate for any recommended builds'],
    pricing: '$300',
    timeline: '60 min',
    href: '/services/consulting',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Build"
        title="Custom AI solutions for real business problems."
        description="Most businesses are losing hours every week to processes that AI could run automatically. The problem isn't the technology — it's knowing what to build, in what order, and whether it will actually work for your specific operation. That's what we do. We start by understanding your business, then build exactly what it needs."
      />

      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 mb-20">
            {services.map((s) => (
              <div key={s.num} className="bg-white border border-navy-200 rounded-xl p-8 md:p-10 hover:border-navy-900 transition-all duration-220">
                <div className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                  <div className="font-display text-3xl text-gold-600 leading-none">{s.num}</div>
                  <div>
                    <h2 className="font-display text-2xl text-navy-800 mb-2">{s.name}</h2>
                    <p className="sl-body-sm mb-4">{s.desc}</p>
                    <ul className="space-y-2">
                      {s.items.map((item, i) => (
                        <li key={i} className="sl-body-sm flex items-start gap-2">
                          <span className="text-gold-600 mt-1">&bull;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2 md:min-w-[140px]">
                    <span className="inline-block font-sans text-xs font-semibold tracking-[0.08em] uppercase px-3 py-1 bg-gold-100 text-gold-700 rounded-full mb-1">{s.pricing}</span>
                    <div className="font-mono text-xs text-fg4 tracking-[0.08em] uppercase">{s.timeline}</div>
                    <Link href={s.href} className="mt-3 font-sans text-sm font-semibold px-5 py-2 border border-navy-800 text-navy-800 rounded hover:bg-navy-800 hover:text-white transition-all duration-220">
                      Learn more &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl border-t border-navy-200 pt-16">
            <h2 className="font-display text-2xl text-navy-800 mb-8">Common questions about our services.</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-lg text-navy-800 mb-2">What does a no-code AI developer do?</h3>
                <p className="sl-body-sm">We use frontier AI models like Gemini, Claude, Codex, Grok to design and build production-grade web applications and automation systems — without writing traditional code. The result is indistinguishable from developer-built software: live, deployed, and fully functional.</p>
              </div>
              <div>
                <h3 className="font-display text-lg text-navy-800 mb-2">How long does a project take?</h3>
                <p className="sl-body-sm">Workflow automations typically take 1-2 weeks. AI agent systems take 3-6 weeks. Full applications take 4-10 weeks. Every project starts with a Discovery Session where we set the timeline before any work begins.</p>
              </div>
              <div>
                <h3 className="font-display text-lg text-navy-800 mb-2">Can you build for Spanish-speaking businesses?</h3>
                <p className="sl-body-sm">Yes. All services are available in English and Spanish. Our team is fully bilingual.</p>
              </div>
              <div className="pt-4 border-t border-navy-200">
                <Link href="/faq" className="inline-flex items-center font-sans text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors duration-220">
                  See all FAQs &rarr;
                </Link>
              </div>
            </div>
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
