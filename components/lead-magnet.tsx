'use client'

import { useState } from 'react'

function StarSpark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#D49E2C" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  )
}

const businessTypes = [
  'Retail / Shop',
  'Restaurant / Food Service',
  'Real Estate',
  'Professional Services (legal, accounting, consulting)',
  'Health / Wellness',
  'Trades / Repair',
  'E-commerce',
  'Startup / App Idea',
  'Other',
]

const hourOptions = [
  'Less than 5 hours',
  '5–15 hours',
  '15–30 hours',
  '30+ hours',
]

const painPoints = [
  'Manual data entry and copy-paste work',
  'Following up with leads or clients takes too long',
  'Scheduling and coordination is a mess',
  'Generating reports or summaries manually',
  'Customer intake / onboarding is slow',
  'Inventory or job tracking is still on paper/spreadsheets',
  'I have a product idea but no way to build it',
]

type FormState = {
  firstName: string
  email: string
  businessType: string
  hoursPerWeek: string
  selectedPains: string[]
}

export default function LeadMagnet() {
  const [form, setForm] = useState<FormState>({
    firstName: '',
    email: '',
    businessType: '',
    hoursPerWeek: '',
    selectedPains: [],
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  function togglePain(pain: string) {
    setForm(prev => {
      const already = prev.selectedPains.includes(pain)
      if (already) {
        return { ...prev, selectedPains: prev.selectedPains.filter(p => p !== pain) }
      }
      if (prev.selectedPains.length >= 2) return prev
      return { ...prev, selectedPains: [...prev.selectedPains, pain] }
    })
  }

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
      <section className="py-24 px-6 lg:px-8" style={{background: '#0B1828'}}>
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <StarSpark className="w-8 h-8 mx-auto" />
          <h2 className="font-grotesk font-bold text-white text-3xl">Check your inbox.</h2>
          <p className="text-muted text-base leading-relaxed">
            Your Free AI Automation Audit is on its way to {form.email}.<br />
            Daniel reads every reply — hit respond if you have questions.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 px-6 lg:px-8" style={{background: '#0B1828'}}>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT — Value prop */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <StarSpark className="w-3 h-3" />
            <span className="section-label">Free AI Automation Audit</span>
          </div>

          <h2 className="section-h2 text-white leading-tight">
            Find out exactly where AI can save your team the most time.
          </h2>

          <p className="text-muted text-base leading-relaxed max-w-md">
            Answer 5 questions. We&rsquo;ll score your operations and send you a
            personalized PDF — your top 3 automation opportunities, time saved estimates,
            and what it would cost to build them.
          </p>

          <ul className="space-y-3">
            {[
              'Takes 2 minutes',
              'Delivered instantly to your inbox',
              'No pitch. No obligation.',
              'Daniel reads every reply',
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
              "10–20 hours/week freed up within 30 days of going live."
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl p-8 border border-navy/40" style={{background: 'rgba(45,82,126,0.12)'}}>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-white/50 text-xs font-inter">First Name</label>
              <input
                type="text"
                required
                placeholder="Maria"
                value={form.firstName}
                onChange={e => setForm(prev => ({ ...prev, firstName: e.target.value }))}
                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-white/50 text-xs font-inter">Email</label>
              <input
                type="email"
                required
                placeholder="maria@yourbiz.com"
                value={form.email}
                onChange={e => setForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-white/50 text-xs font-inter">What type of business do you run?</label>
            <select
              required
              value={form.businessType}
              onChange={e => setForm(prev => ({ ...prev, businessType: e.target.value }))}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none"
            >
              <option value="" disabled>Select your industry</option>
              {businessTypes.map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-white/50 text-xs font-inter">Hours/week your team spends on repetitive manual tasks</label>
            <select
              required
              value={form.hoursPerWeek}
              onChange={e => setForm(prev => ({ ...prev, hoursPerWeek: e.target.value }))}
              className="w-full bg-bg border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-gold/40 transition-colors appearance-none"
            >
              <option value="" disabled>Select range</option>
              {hourOptions.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-white/50 text-xs font-inter">Biggest pain right now <span className="text-white/30">(pick up to 2)</span></label>
            <div className="space-y-2">
              {painPoints.map(pain => {
                const selected = form.selectedPains.includes(pain)
                const disabled = !selected && form.selectedPains.length >= 2
                return (
                  <button
                    type="button"
                    key={pain}
                    onClick={() => togglePain(pain)}
                    disabled={disabled}
                    className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-all ${
                      selected
                        ? 'border-gold/50 bg-gold/10 text-white'
                        : disabled
                        ? 'border-white/05 text-white/20 cursor-not-allowed'
                        : 'border-white/10 text-white/50 hover:border-white/20 hover:text-white/70'
                    }`}
                  >
                    <span className={`mr-2 ${selected ? 'text-gold' : 'text-white/20'}`}>
                      {selected ? '◆' : '◇'}
                    </span>
                    {pain}
                  </button>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading' || form.selectedPains.length === 0}
            className="btn-gold w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gold text-bg font-grotesk font-bold text-sm rounded-lg disabled:opacity-50 disabled:cursor-not-allowed mt-2"
          >
            {status === 'loading' ? 'Sending…' : (
              <>
                <StarSpark className="w-3 h-3" />
                Get My Free Audit →
              </>
            )}
          </button>

          {status === 'error' && (
            <p className="text-red-400 text-xs text-center">
              Something went wrong. Email us at contact@sanluisai.com
            </p>
          )}

          <p className="text-white/25 text-xs text-center">
            Takes 2 minutes · Delivered instantly · No spam, ever
          </p>
        </form>

      </div>
    </section>
  )
}
