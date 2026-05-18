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
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <CaseStudies />
      <SceneDivider />
      <WhatWeDont />
      <Services />
      <OrnamentDivider />
      <SocialProof />
      <Process />
      <ROICalculator />
      <SceneDivider />
      <FAQ />
      <CTA />
    </main>
  )
}
