'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

export default function SocialProof() {
  return (
    <section className="py-24 bg-bone-200">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <span className="sl-eyebrow mb-6">Trusted by Operators</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
            <span className="font-display text-2xl md:text-3xl text-navy-800 opacity-60 hover:opacity-100 transition-opacity duration-300">Garza International</span>
            <span className="font-display text-2xl md:text-3xl text-navy-800 opacity-60 hover:opacity-100 transition-opacity duration-300">Susie&apos;s Jewelry Repair</span>
            <span className="font-display text-2xl md:text-3xl text-navy-800 opacity-60 hover:opacity-100 transition-opacity duration-300">LoveFlow</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
