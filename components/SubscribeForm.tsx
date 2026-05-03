'use client'

import { useState } from 'react'

export default function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name: email.split('@')[0], scores: {}, notify: true }),
      })
      setSubmitted(true)
    } catch {}
  }

  if (submitted) {
    return <p className="font-sans text-sm text-emerald-600">✓ You're on the list.</p>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 font-sans text-sm px-4 py-3 border border-navy-200 rounded focus:border-gold-600 focus:ring-1 focus:ring-gold-600 outline-none transition-colors bg-white"
      />
      <button
        type="submit"
        className="font-sans text-sm font-semibold px-6 py-3 bg-navy-900 text-white hover:bg-navy-800 transition-all duration-220 rounded whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  )
}
