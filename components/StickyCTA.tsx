'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function StickyCTA() {
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(800)

  useEffect(() => {
    setVh(window.innerHeight)
  }, [])

  const opacity = useTransform(scrollY, [vh * 0.5, vh * 0.8], [0, 1])
  const y = useTransform(scrollY, [vh * 0.5, vh * 0.8], [20, 0])

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden pointer-events-none"
    >
      <a
        href="/booking"
        className="flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors duration-200 pointer-events-auto"
      >
        Book a Discovery Session.
      </a>
    </motion.div>
  )
}
