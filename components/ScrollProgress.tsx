'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'problem', label: 'Problem' },
  { id: 'process', label: 'Process' },
  { id: 'services', label: 'Services' },
  { id: 'case-studies', label: 'Results' },
  { id: 'cta', label: 'CTA' },
]

export default function ScrollProgress() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Progress bar — thin gold line at top */}
      <motion.div
        ref={ref}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gold-600 origin-left"
        style={{ scaleX }}
      />

      {/* Chapter markers — side rail */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3 py-3 px-3 bg-navy-950/60 backdrop-blur-sm rounded-lg">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`group flex items-center gap-3 transition-all duration-300`}
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById(s.id)
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className={`font-sans text-[10px] tracking-[0.12em] uppercase transition-all duration-300 ${
              activeSection === s.id ? 'text-gold-500' : 'text-navy-600'
                          }`}>
              {s.label}
            </span>
            <span className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === s.id ? 'bg-gold-500 scale-125' : 'bg-navy-500'
            }`} />
          </a>
        ))}
      </nav>
    </>
  )
}
