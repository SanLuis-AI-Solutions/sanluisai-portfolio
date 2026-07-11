import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'
import Hero from '@/components/Hero'
import HeroStats from '@/components/HeroStats'
import Problem from '@/components/Problem'
import Process from '@/components/Process'
import Services from '@/components/Services'
import ROICalculator from '@/components/ROICalculator'
import CaseStudies from '@/components/CaseStudies'
import SocialProof from '@/components/SocialProof'
import WhatWeDont from '@/components/WhatWeDont'
import CTA from '@/components/CTA'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  return (
    <>
      <BreadcrumbJsonLd />
      <main className="pb-[72px] md:pb-0">
        <section id="hero"><Hero /></section>
        <section id="problem"><Problem /></section>
        <section id="stats"><HeroStats /></section>
        <section id="process"><Process /></section>
        <section id="services"><Services /></section>
        <section id="roi"><ROICalculator /></section>
        <section id="case-studies"><CaseStudies /></section>
        <section id="social-proof"><SocialProof /></section>
        <section id="what-we-dont"><WhatWeDont /></section>
        <section id="cta"><CTA /></section>
        <section id="faq"><FAQ /></section>
      </main>
    </>
  )
}
