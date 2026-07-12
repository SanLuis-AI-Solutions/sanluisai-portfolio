'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

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
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.location.pathname !== '/') {
      setScrolled(true)
    }
    const h = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, close])

  return (
    <nav
      ref={navRef}
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
            <a key={l.label} href={l.href} className={`font-sans text-sm py-4 transition-colors duration-300 relative after:absolute after:bottom-3 after:left-0 after:right-0 after:h-px after:bg-current after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-200 ${scrolled ? 'text-fg2 hover:text-navy-800' : 'text-bone-300/80 hover:text-bone-50'}`}>{l.label}</a>
          ))}
          <a href="/booking" className={`font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 transition-all duration-220 rounded ${
            scrolled
              ? 'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-goldGlow'
              : 'bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900'
          }`}>Book a Discovery Session.</a>
          <a href="tel:+18327790033" className={`font-sans text-xs tracking-wider whitespace-nowrap transition-colors duration-300 ${scrolled ? 'text-navy-600 hover:text-navy-800' : 'text-bone-400/60 hover:text-bone-200'}`}>(832) 779-0033</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label={open ? 'Close menu' : 'Open menu'}>
          <svg className={`w-6 h-6 transition-all duration-200 ${scrolled ? 'text-navy-800' : 'text-bone-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div
          className="md:hidden fixed inset-0 top-16 z-40"
          onClick={close}
          style={{ backgroundColor: 'rgba(11, 26, 51, 0.6)' }}
        >
          <div
            className={`border-t ${scrolled ? 'border-navy-200 bg-bone-50' : 'border-bone-300/20 bg-navy-800'} shadow-2`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2 px-6 py-6">
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`font-sans text-base transition-colors duration-200 min-h-[48px] flex items-center px-3 rounded hover:bg-white/10 ${
                    scrolled ? 'text-fg2 hover:text-navy-800 hover:bg-navy-100/50' : 'text-bone-300/80 hover:text-bone-50'
                  }`}
                  onClick={close}
                >
                  {l.label}
                </a>
              ))}
              <div className="h-px bg-current opacity-10 my-2" />
              <a
                href="tel:+18327790033"
                className={`font-sans text-sm transition-colors duration-200 min-h-[48px] flex items-center px-3 rounded hover:bg-white/10 ${
                  scrolled ? 'text-fg3 hover:text-navy-800 hover:bg-navy-100/50' : 'text-bone-400/70 hover:text-bone-200'
                }`}
                onClick={close}
              >
                (832) 779-0033
              </a>
              <a
                href="/booking"
                className={`font-sans text-sm font-semibold text-center tracking-[0.04em] px-6 py-3 transition-all duration-220 rounded mt-2 min-h-[48px] flex items-center justify-center ${
                  scrolled ? 'bg-navy-900 text-white hover:bg-navy-800' : 'bg-bone-50 text-navy-800 hover:bg-gold-500'
                }`}
                onClick={close}
              >
                Book a Discovery Session.
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
