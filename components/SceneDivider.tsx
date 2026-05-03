'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SceneDivider() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="relative h-20 md:h-32 bg-bgCanvas overflow-hidden">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <motion.div
          className="h-px w-full max-w-[200px] bg-gold-600/60"
          initial={{ width: 0 }}
          animate={inView ? { width: '100%', maxWidth: '200px' } : {}}
          transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
        />
      </div>
    </div>
  )
}
