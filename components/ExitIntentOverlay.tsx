'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'sanluis-exit-intent-dismissed'

export default function ExitIntentOverlay() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === '1') return

    let armed = false
    const armTimer = window.setTimeout(() => {
      armed = true
    }, 12000)

    const onMouseLeave = (event: MouseEvent) => {
      if (!armed || event.clientY > 12) return
      setOpen(true)
      sessionStorage.setItem(STORAGE_KEY, '1')
    }

    const onScroll = () => {
      const progress = window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1)
      if (progress > 0.62 && window.innerWidth < 768) {
        setOpen(true)
        sessionStorage.setItem(STORAGE_KEY, '1')
        window.removeEventListener('scroll', onScroll)
      }
    }

    document.addEventListener('mouseleave', onMouseLeave)
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.clearTimeout(armTimer)
      document.removeEventListener('mouseleave', onMouseLeave)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/65 backdrop-blur-sm px-4" role="dialog" aria-modal="true" aria-labelledby="exit-intent-title">
      <div className="relative max-w-lg w-full bg-bone-50 border border-gold-600/30 rounded p-7 md:p-9 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)]">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 min-h-[40px] min-w-[40px] rounded border border-navy-200 text-navy-600 hover:text-navy-900 hover:border-navy-400 transition-colors"
          aria-label="Close"
        >
          ×
        </button>
        <p className="sl-eyebrow text-gold-700 mb-4">Before you go</p>
        <h2 id="exit-intent-title" className="font-display text-3xl text-navy-900 tracking-[-0.02em] mb-4">
          Find the AI project that actually pays back.
        </h2>
        <p className="sl-body-sm mb-6">
          Start with the AI Cost Audit template. It helps you identify the recurring work, manual handoffs, and hidden rework that are costing the most each week.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/blog/ai-cost-roi-breakdown" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-220 rounded">
            Read the cost breakdown
          </Link>
          <Link href="/booking" className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-bone-50 transition-all duration-220 rounded">
            Book discovery
          </Link>
        </div>
      </div>
    </div>
  )
}
