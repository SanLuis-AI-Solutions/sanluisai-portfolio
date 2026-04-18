'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = ['Work', 'Services', 'About', 'Blog', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change / outside scroll
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-bg/95 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="font-grotesk font-semibold text-lg text-white tracking-tight hover:text-gold transition-colors"
          >
            SanLuis <span className="text-gold">AI</span> Solutions
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-sm text-muted hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="https://cal.com/sanluisai"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gold text-bg text-sm font-medium font-grotesk hover:bg-gold/90 transition-all duration-200"
          >
            Book a Session
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white/70 hover:text-white transition-colors p-1"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(12px)'}}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 pt-16">
          {navLinks.map((item, i) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-grotesk font-semibold text-white/80 hover:text-white text-3xl py-3 transition-colors"
              style={{transitionDelay: menuOpen ? `${i * 50}ms` : '0ms'}}
            >
              {item}
            </Link>
          ))}

          <div className="mt-8 pt-8 border-t border-white/10 w-48 flex flex-col items-center gap-4">
            <Link
              href="https://cal.com/sanluisai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="w-full text-center px-6 py-3.5 rounded-lg bg-gold text-bg font-grotesk font-bold text-sm"
            >
              Book a Session
            </Link>
            <a
              href="mailto:contact@sanluisai.com"
              className="text-muted text-sm hover:text-white transition-colors"
            >
              contact@sanluisai.com
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
