import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Solution from '@/components/Solution'
import SocialProof from '@/components/SocialProof'
import CaseStudies from '@/components/CaseStudies'
import Services from '@/components/Services'
import SceneDivider from '@/components/SceneDivider'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <SocialProof />
      <SceneDivider />
      <CaseStudies />
      <SceneDivider />
      <Services />
      <Process />
      <SceneDivider />
      <FAQ />
      <CTA />
    </main>
  )
}
