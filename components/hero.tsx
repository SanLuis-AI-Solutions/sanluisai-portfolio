'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function StarSpark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#D49E2C" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  )
}

const clients = ['Garza International', "Susie's Jewelry Repair", 'AkuaLife', 'El Norteño Tacos']

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      className="grain-overlay relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #060E1C 0%, #0B1828 50%, #0A0A0A 100%)' }}
    >
      {/* Navy + gold radial glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 70% at 20% 50%, rgba(45,82,126,0.18) 0%, transparent 65%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 45% 55% at 80% 50%, rgba(212,158,44,0.07) 0%, transparent 65%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20">
        {/* LEFT — Copy */}
        <div className="space-y-6 z-10">
          {/* Label */}
          <div className="flex items-center gap-2 flex-wrap">
            <StarSpark className="w-3 h-3" />
            <span className="section-label">AI-Powered · Houston, TX · Bilingual EN/ES</span>
          </div>

          {/* Tagline — dominant brand statement */}
          <h1 className="hero-h1 text-white">
            AI that works with your team.
            <br />
            <span className="text-gold">Not instead of them.</span>
          </h1>

          {/* Hero copy — emotional punch */}
          <p className="font-inter italic text-gold font-medium text-center tracking-wide" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>
            Your team, amplified.
          </p>

          {/* Villain-naming body — names the specific pains */}
          <p className="text-muted leading-relaxed max-w-[520px]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)' }}>
            Your team didn&rsquo;t sign up to spend their days on spreadsheets, paper tickets, and follow-up emails that slip through the
            cracks. We build the AI that handles all of it so they can focus on the work only humans can do.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="https://cal.com/sanluisai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-bg font-grotesk font-semibold text-sm rounded-lg"
            >
              <StarSpark className="w-3 h-3" />
              Book a Discovery Session
            </Link>
            <Link href="/work" className="inline-flex items-center text-sm text-white/60 hover:text-white transition-colors group">
              See Our Work
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>

          {/* Trust bar — client names */}
          {mounted && (
            <div className="pt-4 space-y-2">
              <p className="text-white/30 text-xs">Trusted by Houston businesses</p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
                {clients.map((name, i) => (
                  <span key={i} className="text-white/40 text-xs font-inter">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* RIGHT — Hero Image */}
        <div className="relative flex items-center justify-center z-10">
          {/* Gold glow behind image */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212,158,44,0.12) 0%, transparent 65%)',
              transform: 'scale(1.15)',
            }}
          />
          <Image
            src="/hero-hands.png"
            alt="Human and AI hands touching the spark of collaboration"
            width={720}
            height={480}
            priority
            className="relative w-full h-auto rounded-2xl object-cover"
            style={{ aspectRatio: '3/2' }}
          />
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  )
}
