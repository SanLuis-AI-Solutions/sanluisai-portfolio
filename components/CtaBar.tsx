'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

type CtaVariant = 'primary' | 'inline' | 'sticky'

interface CtaBarProps {
  variant: CtaVariant
  href: string
  text: string
  subtitle?: string
  className?: string
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
      animate={inView && !shouldReduceMotion ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function CtaBar({ variant, href, text, subtitle, className = '' }: CtaBarProps) {
  if (variant === 'primary') {
    return (
      <FadeIn>
        <Link
          href={href}
          className={`inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:shadow-goldGlow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600 transition-all duration-220 rounded ${className}`}
        >
          {text}
        </Link>
        {subtitle && (
          <p className="font-sans text-xs text-gold-600/60 mt-3 tracking-[0.06em] uppercase">
            {subtitle}
          </p>
        )}
      </FadeIn>
    )
  }

  if (variant === 'inline') {
    return (
      <Link
        href={href}
        className={`font-sans text-xs font-semibold tracking-[0.08em] uppercase text-gold-600 hover:text-gold-700 hover:translate-x-1 transition-all duration-200 inline-flex items-center gap-1 ${className}`}
      >
        {text} <span aria-hidden="true">&rarr;</span>
      </Link>
    )
  }

  // sticky variant — mobile-only bottom bar
  return <StickyCtaBar href={href} text={text} />
}

function StickyCtaBar({ href, text }: { href: string; text: string }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sentinel = document.getElementById('cta-sentinel')
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Visible when sentinel is NOT in view (scrolled past hero)
        setVisible(!entry.isIntersecting)
      },
      { threshold: 0 }
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={href}
        className="flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors duration-200 backdrop-blur-lg bg-gold-500/95"
      >
        {text}
      </a>
    </div>
  )
}
