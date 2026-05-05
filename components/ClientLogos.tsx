'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay, ease: [0.2, 0.7, 0.2, 1] }}>{children}</motion.div>)
}

const logos = [
  { src: '/images/garza-logo.svg', alt: 'Garza International', width: 140, height: 40 },
  { src: '/images/sjr-logo.svg', alt: "Susie's Jewelry Repair", width: 130, height: 40 },
  { src: '/images/loveflow-logo.svg', alt: 'LoveFlow', width: 130, height: 40 },
]

export default function ClientLogos() {
  return (
    <section className="py-20 md:py-28 bg-bone-50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <FadeIn delay={0}>
          <div className="text-center mb-14">
            <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-600 mb-4 block">
              Trusted By
            </span>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-navy-800 font-medium tracking-[-0.02em]">
              Operators who ship.
            </h2>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
            {logos.map((logo) => (
              <div key={logo.alt} className="relative opacity-75 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain"
                  sizes="140px"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
