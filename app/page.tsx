import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import CaseStudies from '@/components/CaseStudies'
import SceneDivider from '@/components/SceneDivider'
import WhatWeDont from '@/components/WhatWeDont'
import Services from '@/components/Services'
import OrnamentDivider from '@/components/OrnamentDivider'
import SocialProof from '@/components/SocialProof'
import Process from '@/components/Process'
import ROICalculator from '@/components/ROICalculator'
import FAQ from '@/components/FAQ'
import CtaBar from '@/components/CtaBar'

export default function HomePage() {
  return (
    <main className="pb-[72px] md:pb-0">
      <Hero />
      <Problem />
      <ROICalculator />
      <CaseStudies />
      <SceneDivider />
      <Services />
      <OrnamentDivider />
      <WhatWeDont />
      <SocialProof />
      <Process />
      <SceneDivider />
      <FAQ />
      <section className="bg-bone-50 px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="sl-body-lg text-navy-800">
            SanLuis AI Solutions is a Houston-based, AI-augmented team that builds automation and AI systems for small and mid-size businesses. We deliver fixed-price engagements including a $300 Discovery Session, AI Automation from $1,200, AI Agent Systems from $5,000, and Custom AI Systems from $5,000. Our work has produced 60% faster quoting for Garza International, 3x inbound leads for Susie&apos;s Jewelry Repair, and AI-assisted app design for LoveFlow, a Christian faith-based relationship app.
          </p>
        </div>
      </section>
      <CtaBar variant="primary" href="/booking" text="Book a Discovery Session" subtitle="Booking through Q3 · 3 of 4 build slots taken" />
    </main>
  )
}
