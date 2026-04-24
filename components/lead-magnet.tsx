'use client'

import { useState } from 'react'
import Link from 'next/link'

function StarSpark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#D49E2C" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  )
}

type FormState = {
  firstName: string
  email: string
  role: string
}

export default function LeadMagnet() {
  const [form, setForm] = useState<FormState>({ firstName: '', email: '', role: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section className="py-24 px-6 lg:px-8" style={{ background: '#0B1828' }}>
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <StarSpark className="w-8 h-8 mx-auto" />
          <h2 className="font-grotesk font-bold text-white text-3xl">You&rsquo;re on the list.</h2>
          <p className="text-muted text-base leading-relaxed">
            Daniel will reach out to schedule your Discovery Session.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-magnet" className="py-24 px-6 lg:px-8" style={{ background: '#0B1828' }}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Value prop */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <StarSpark className="w-3 h-3" />
            <span className="section-label">$300 Discovery Session</span>
          </div>

          <h2 className="section-h2 text-white leading-tight">
            Find out exactly where AI can save your team the most time.
          </h2>

          <p className="text-muted text-base leading-relaxed max-w-md">
            One 60-minute session. We map your operations, find your highest-leverage
            AI opportunity, and hand you a clear written plan — whether you hire us or not.
          </p>

          <ul className="space-y-3">
            {[
              '60-minute working session',
              'Written roadmap — yours to keep',
              'No pitch. No obligation.',
              'Daniel works with you directly',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="pt-2 p-5 rounded-xl border border-gold/15 bg-gold/[0.04] max-w-sm">
            <p className="text-white/50 text-xs mb-1">Most common result</p>
            <p className="font-grotesk font-semibold text-white text-sm leading-snug">
              &ldquo;10–20 hours/week freed up within 30 days of going live.&rdquo;
            </p>
          </div>
        </div>

        {/* RIGHT — Minimal booking form */}
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl p-8 border border-navy/40" style={{ background: 'rgba(45,82,126,0.12)' }}>

          <div className="space-y-1.5">
            <label htmlFor="lm-name" className="text-white/50 text-xs font-inter">First Name</label>
            <input
              id="lm-name"
              type="text"
              required
              placeholder="Maria"
              value={form.firstName}
              onChange={e => setForm(prev => ({ ...prev, firstName: e.target.value }))}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="lm-email" className="text-white/50 text-xs font-inter">Work Email</label>
            <input
              id="lm-email"
              type="email"
              required
              placeholder="maria@yourbiz.com"
              value={form.email}
              onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="lm-role" className="text-white/50 text-xs font-inter">Your Role / Company</label>
            <input
              id="lm-role"
              type="text"
              required
              placeholder="Owner, Acme Co."
              value={form.role}
              onChange={e => setForm(prev => ({ ...prev, role: e.target.value }))}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/40 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-gold w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-bg font-grotesk font-bold text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {status === 'loading' ? 'Sending…' : (
              <>
                <StarSpark className="w-3 h-3" />
                Request My Discovery Session →
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-xs text-center">
              Something went wrong. Email us at contact@sanluisai.com
            </p>
          )}

          <p className="text-white/25 text-xs text-center">
            Or book directly at{' '}
            <Link href="https://cal.com/sanluisai" target="_blank" rel="noopener noreferrer" className="text-gold/50 hover:text-gold/70 transition-colors">
              cal.com/sanluisai
            </Link>
          </p>
        </form>

      </div>
    </section>
  )
}
