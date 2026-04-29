'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone-50/85 backdrop-blur-md border-b border-navy-200 shadow-1'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="font-display text-xl md:text-2xl font-bold text-navy-800 tracking-tight">
          SanLuis AI
        </a>
        <div className="hidden md:flex items-center gap-10">
          {links.map(l => (
            <a key={l.label} href={l.href} className="font-sans text-sm text-fg2 hover:text-navy-800 transition-colors duration-200">{l.label}</a>
          ))}
          <a href="/booking" className="font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow transition-all duration-220 rounded">Book a Discovery Session.</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-navy-800" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-navy-200 bg-bone-50">
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map(l => (<a key={l.label} href={l.href} className="font-sans text-base text-fg2 hover:text-navy-800 transition-colors duration-200 py-1" onClick={() => setOpen(false)}>{l.label}</a>))}
            <a href="/booking" className="font-sans text-sm font-semibold text-center tracking-[0.04em] px-6 py-3 bg-navy-900 text-white hover:bg-navy-800 transition-all duration-220 rounded mt-2">Book a Discovery Session.</a>
          </div>
        </div>
      )}
    </nav>
  )
}
