import Nav from '@/components/nav'
import Hero from '@/components/hero'
import SocialProof from '@/components/social-proof'
import Problem from '@/components/problem'
import Solution from '@/components/solution'
import CaseStudies from '@/components/case-studies'
import LeadMagnet from '@/components/lead-magnet'
import Founder from '@/components/founder'
import Process from '@/components/process'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <CaseStudies />
      <LeadMagnet />
      <Founder />
      <Process />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
