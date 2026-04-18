import Link from 'next/link'

function StarSpark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#D49E2C" className={`inline-block shrink-0 ${className}`} aria-hidden="true">
      <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
    </svg>
  )
}

export default function CTA() {
  return (
    <section className="grain-overlay relative py-28 px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, #0D1E35 0%, #172D4A 50%, #0D1E35 100%)'}} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(45,82,126,0.25) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-3xl mx-auto text-center space-y-7">

        {/* Label */}
        <div className="flex items-center justify-center gap-2">
          <StarSpark className="w-3 h-3" />
          <span className="section-label">Ready to amplify your team?</span>
          <StarSpark className="w-3 h-3" />
        </div>

        {/* Headline */}
        <h2 className="section-h2 text-white" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.03em' }}>
          Let&rsquo;s build something
          <br />
          that actually works.
        </h2>

        {/* Trust badges — no price, all value */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          {['60-minute working session', 'Written roadmap — yours to keep', 'No obligation'].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-white/70">{item}</span>
            </div>
          ))}
        </div>

        {/* Body */}
        <p className="text-muted text-base max-w-md mx-auto leading-relaxed">
          No pitch. No pressure. You walk away with a clear picture of exactly
          what AI can do for your business — whether you hire us or not.
        </p>

        {/* CTA */}
        <div className="space-y-3 pt-2">
          <div>
            <Link
              href="https://cal.com/sanluisai"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 bg-gold text-bg font-grotesk font-bold text-base rounded-lg shadow-xl shadow-gold/20"
            >
              <StarSpark className="w-3.5 h-3.5" />
              Book Your Discovery Session
            </Link>
          </div>

          <p className="text-muted text-sm">
            or start with the{' '}
            <a
              href="#lead-magnet"
              className="text-gold/70 hover:text-gold transition-colors"
            >
              free AI audit →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
