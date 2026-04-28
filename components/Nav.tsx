'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-220 ${
        scrolled ? 'bg-white shadow-2' : 'bg-white'
      } border-b border-navy-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-2xl font-bold text-navy-800 tracking-tight"
          >
            SanLuis AI
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm text-fg2 hover:text-navy-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/booking"
              className="font-sans text-sm font-semibold px-5 py-2.5 bg-bgInverse text-white hover:bg-navy-800 transition-all duration-200 rounded"
            >
              Book a Discovery Session.
            </a>
          </div>

          {/* Mobile hamburger + CTA */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="/booking"
              className="font-sans text-sm font-semibold px-4 py-2 bg-bgInverse text-white hover:bg-navy-800 transition-all duration-200 rounded"
            >
              Book a Discovery Session.
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-navy-800"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-navy-200 pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-sans text-sm text-fg2 hover:text-navy-800 transition-colors duration-200 px-2 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
