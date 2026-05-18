'use client'

import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // On sub-pages, start in scrolled (light) state immediately
    if (window.location.pathname !== '/') {
      setScrolled(true)
    }
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone-50/85 backdrop-blur-md border-b border-navy-200/60 shadow-1'
          : 'bg-navy-800/40 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex-shrink-0">
          <img
            src="/assets/logo-primary.jpg"
            alt="SanLuis AI Solutions"
            width={572}
            height={700}
            className="h-10 md:h-12 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className={`font-sans text-sm py-4 transition-colors duration-300 ${scrolled ? 'text-fg2 hover:text-navy-800' : 'text-bone-300/80 hover:text-bone-50'}`}>{l.label}</a>
          ))}
          <a href="/booking" className={`font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 transition-all duration-220 rounded ${
            scrolled
              ? 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow'
              : 'bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900'
          }`}>Book a Discovery Session.</a>
          <a href="tel:+18327790033" className={`font-sans text-xs tracking-wider whitespace-nowrap transition-colors duration-300 ${scrolled ? 'text-fg3 hover:text-navy-800' : 'text-bone-400/60 hover:text-bone-200'}`}>(832) 779-0033</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Toggle menu">
          <svg className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-navy-800' : 'text-bone-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <div className={`md:hidden border-t ${scrolled ? 'border-navy-200 bg-bone-50' : 'border-bone-300/20 bg-navy-800'}`}>
          <div className="flex flex-col gap-4 px-6 py-6">
            {links.map(l => (
              <a key={l.label} href={l.href} className={`font-sans text-base transition-colors duration-200 py-3 min-h-[44px] flex items-center ${scrolled ? 'text-fg2 hover:text-navy-800' : 'text-bone-300/80 hover:text-bone-50'}`} onClick={() => setOpen(false)}>{l.label}</a>
            ))}
            <a href="/booking" className={`font-sans text-sm font-semibold text-center tracking-[0.04em] px-6 py-3 transition-all duration-220 rounded mt-2 ${
              scrolled ? 'bg-navy-900 text-white hover:bg-navy-800' : 'bg-bone-50 text-navy-800 hover:bg-gold-500'
            }`}>Book a Discovery Session.</a>
          </div>
        </div>
      )}
    </nav>
  )
}
