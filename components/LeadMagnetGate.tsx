'use client'

import { FormEvent, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function LeadMagnetGate() {
  const pathname = usePathname()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, sourcePath: pathname }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => null)
        throw new Error(data?.error || 'Could not unlock the template. Try again or book discovery directly.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Could not unlock the template. Try again or book discovery directly.')
    }
  }

  return (
    <aside className="my-12 rounded border border-gold-600/30 bg-navy-900 text-bone-50 p-6 md:p-8 shadow-[0_24px_70px_-44px_rgba(15,29,61,0.75)]">
      <div className="grid gap-6 md:grid-cols-[1fr_0.82fr] md:items-start">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-gold-500 mb-3">AI Cost Audit Template</p>
          <h2 className="font-display text-2xl md:text-3xl tracking-[-0.02em] mb-3">
            Find the automation project with the clearest payback.
          </h2>
          <p className="font-sans text-sm text-bone-300/75 leading-relaxed mb-4">
            Use this worksheet to list recurring tasks, estimate weekly labor cost, score automation readiness, and choose the first AI project worth building.
          </p>
          <ul className="space-y-2 font-sans text-sm text-bone-300/80">
            <li className="flex gap-2"><span className="text-gold-500">01</span><span>Cost map for manual workflows</span></li>
            <li className="flex gap-2"><span className="text-gold-500">02</span><span>Readiness score for each opportunity</span></li>
            <li className="flex gap-2"><span className="text-gold-500">03</span><span>Priority matrix for deciding what to build first</span></li>
          </ul>
        </div>

        {status === 'success' ? (
          <div className="bg-bone-50/7 border border-gold-600/25 rounded p-5">
            <p className="font-display text-xl text-gold-500 mb-2">Template unlocked.</p>
            <p className="font-sans text-sm text-bone-300/75 mb-4">
              Download the AI Cost Audit template and use it before your Discovery Session.
            </p>
            <a
              href="/downloads/ai-cost-audit-template.md"
              className="inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-5 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-220 rounded"
              download
            >
              Download template
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-bone-50/7 border border-gold-600/25 rounded p-5 space-y-4">
            <div className="space-y-2">
              <label htmlFor="lead-name" className="block font-sans text-xs font-semibold tracking-[0.08em] uppercase text-bone-300/75">Name</label>
              <input
                id="lead-name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded border border-bone-300/20 bg-bone-50/10 px-4 py-3 font-sans text-sm text-bone-50 placeholder:text-bone-300/35 focus:border-gold-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lead-email" className="block font-sans text-xs font-semibold tracking-[0.08em] uppercase text-bone-300/75">Email</label>
              <input
                id="lead-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded border border-bone-300/20 bg-bone-50/10 px-4 py-3 font-sans text-sm text-bone-50 placeholder:text-bone-300/35 focus:border-gold-500 focus:outline-none"
                placeholder="you@company.com"
              />
            </div>
            {status === 'error' && <p className="font-sans text-sm text-gold-300" role="alert">{error}</p>}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-5 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-220 rounded"
            >
              {status === 'loading' ? 'Unlocking...' : 'Unlock the template'}
            </button>
          </form>
        )}
      </div>
    </aside>
  )
}
