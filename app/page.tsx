import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import SceneDivider from '@/components/SceneDivider'
import CaseStudies from '@/components/CaseStudies'
import SocialProof from '@/components/SocialProof'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <SceneDivider />
      <CaseStudies />
      <SocialProof />
      <Process />
      <SceneDivider />
      <FAQ />
      <CTA />
    </main>
  )
}
