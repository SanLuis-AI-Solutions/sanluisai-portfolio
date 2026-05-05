import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Services from '@/components/Services'
import SceneDivider from '@/components/SceneDivider'
import OrnamentDivider from '@/components/OrnamentDivider'
import CaseStudies from '@/components/CaseStudies'
import SocialProof from '@/components/SocialProof'
import ClientLogos from '@/components/ClientLogos'
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
      <OrnamentDivider />
      <SocialProof />
      <OrnamentDivider />
      <ClientLogos />
      <Process />
      <SceneDivider />
      <FAQ />
      <CTA />
    </main>
  )
}
