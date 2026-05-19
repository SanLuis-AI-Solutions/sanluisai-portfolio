'use client'

export default function ComingSoon() {
  return (
    <div className="min-h-[100dvh] bg-navy-900 flex flex-col items-center justify-center px-8">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(217,164,52,0.04),transparent_60%)] pointer-events-none" />

      <div className="relative text-center max-w-lg">
        {/* Brand mark */}
        <div className="mb-10">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="mx-auto text-gold-600" aria-hidden="true">
            <path d="M20 4l4.5 9.5L34 15l-7 7 1.5 10L20 28l-8.5 4L13 22l-7-7 9.5-1.5L20 4z" fill="currentColor" opacity="0.9"/>
            <path d="M20 8l3 6.5L30 16l-5 5 1 7L20 24l-6 4 1-7-5-5 7-1.5L20 8z" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>

        {/* Heading */}
        <h1 className="font-display text-[clamp(2rem,5vw,3.5rem)] text-bone-50 font-medium leading-[1.08] tracking-[-0.025em] mb-4">
          Coming Soon
        </h1>

        {/* Subtext */}
        <p className="font-sans text-base md:text-lg text-bone-300/60 leading-relaxed mb-10 max-w-[42ch] mx-auto">
          Custom AI solutions designed for Houston operators. We're putting the final touches on something worth the wait.
        </p>

        {/* Gold line divider */}
        <div className="h-px bg-gold-600/30 w-16 mx-auto mb-10" />

        {/* Contact */}
        <a
          href="mailto:hello@sanluisai.com"
          className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-gold-500 tracking-[0.12em] uppercase hover:text-gold-400 transition-colors"
        >
          hello@sanluisai.com
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 6h8M6 2l4 4-4 4"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
