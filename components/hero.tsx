'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function StarSpark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox=\"0 0 24 24\" fill=\"#D49E2C\" className={`inline-block shrink-0 ${className}`} aria-hidden=\"true\">
      <path d=\"M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z\" />
    </svg>
  )
}

const clients = ['Garza International', \"Susie's Jewelry Repair\", 'AkuaLife', 'El Norteño Tacos']

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section className=\"grain-overlay relative min-h-screen flex items-center overflow-hidden pt-16\" style={{background: 'linear-gradient(135deg, #060E1C 0%, #0B1828 50%, #0A0A0A 100%)'}}>
      {/* Navy + gold radial glows */}\n      <div className=\"absolute inset-0 pointer-events-none\" style={{background: 'radial-gradient(ellipse 60% 70% at 20% 50%, rgba(45,82,126,0.18) 0%, transparent 65%)'}} />
      <div className=\"absolute inset-0 pointer-events-none\" style={{background: 'radial-gradient(ellipse 45% 55% at 80% 50%, rgba(212,158,44,0.07) 0%, transparent 65%)'}} />

      <div className=\"max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20\">

        {/* LEFT — Copy */}\n        <div className=\"space-y-6 z-10\">

          {/* Label */}\n          <div className=\"flex items-center gap-2 flex-wrap\">\n            <StarSpark className=\"w-3 h-3\" />
            <span className=\"section-label\">AI-Powered · Houston, TX · Bilingual EN/ES</span>
          </div>

          {/* Tagline — dominant brand statement */}\n          <h1 className=\"hero-h1 text-white\">\n            AI that works with your team.<br />\n            <span className=\"text-gold\">Not instead of them.</span>\n          </h1>

          {/* Hero copy — emotional punch */}\n          <p className=\"font-inter italic text-gold font-medium text-center tracking-wide\" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>\n            — Your team, amplified.\n          </p>

          {/* Villain-naming body — names the specific pains */}\n          <p className=\"text-muted leading-relaxed max-w-[520px]\" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.1rem)' }}>\n            Your team didn&rsquo;t sign up to spend their days on spreadsheets,\n            paper tickets, and follow-up emails that slip through the cracks.\n            We build the AI that handles all of it — so they can focus on\n            the work only humans can do.\n          </p>

          {/* CTAs */}\n          <div className=\"flex flex-wrap items-center gap-4 pt-2\">\n            <Link\n              href=\"https://cal.com/sanluisai\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              className=\"btn-gold inline-flex items-center gap-2 px-6 py-3.5 bg-gold text-bg font-grotesk font-semibold text-sm rounded-lg\"\n            >\n              <StarSpark className=\"w-3 h-3\" />\n              Book a Discovery Session\n            </Link>\n            <Link\n              href=\"/work\"\n              className=\"inline-flex items-center text-sm text-white/60 hover:text-white transition-colors group\"\n            >\n              See Our Work\n              <span className=\"ml-1 group-hover:translate-x-0.5 transition-transform\">→</span>\n            </Link>\n          </div>

          {/* Trust bar — client names */}\n          {mounted && (\n            <div className=\"pt-4 space-y-2\">\n              <p className=\"text-white/30 text-xs\">Trusted by Houston businesses</p>\n              <div className=\"flex flex-wrap items-center gap-x-5 gap-y-1\">\n                {clients.map((name, i) => (\n                  <span key={i} className=\"text-white/40 text-xs font-inter\">{name}</span>\n                ))}\n              </div>\n            </div>\n          )}\n        </div>

        {/* RIGHT — Hero Image */}\n        <div className=\"relative flex items-center justify-center z-10\">\n          {/* Gold glow behind image */}\n          <div\n            className=\"absolute inset-0 rounded-2xl pointer-events-none\"\n            style={{\n              background: 'radial-gradient(ellipse at center, rgba(212,158,44,0.12) 0%, transparent 65%)',\n              transform: 'scale(1.15)',\n            }}\n          />\n          <Image\n            src=\"/hero-hands.png\"\n            alt=\"Human and AI hands touching — the spark of collaboration\"\n            width={720}\n            height={480}\n            priority\n            className=\"relative w-full h-auto rounded-2xl object-cover\"\n            style={{ aspectRatio: '3/2' }}\n          />\n        </div>\n      </div>

      {/* Bottom divider */}\n      <div className=\"absolute bottom-0 left-0 right-0 gold-divider\" />\n    </section>\n  )\n}