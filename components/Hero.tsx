export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bgCanvas">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* H1 */}
        <h1 className="sl-display-lg text-navy-800 mb-6">
          We don&apos;t sell software. We perform surgery.
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-lg italic text-fg2 max-w-3xl mx-auto mb-6 leading-relaxed sl-body-lg">
          Precise, time-bounded AI implementations for operators serious about leverage.
        </p>

        {/* Lead magnet line */}
        <p className="sl-lede mb-8">
          One engagement. One bottleneck. Removed.
        </p>

        {/* Gold ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-px w-20 bg-gold-600" />
          <span className="text-gold-600 text-lg">&#9670;</span>
          <div className="h-px w-20 bg-gold-600" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="/booking"
            className="font-sans text-base font-semibold px-8 py-4 bg-navy-900 text-white hover:bg-navy-800 transition-all duration-200 shadow-2 rounded"
          >
            Book a Discovery Session.
          </a>
          <a
            href="/case-studies"
            className="font-sans text-base font-semibold px-8 py-4 border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white transition-all duration-200 rounded"
          >
            See Our Work.
          </a>
        </div>

        {/* Stats row */}
        <div className="flex items-center justify-center gap-3 text-fg2 font-sans text-sm">
          <span>50+ bottlenecks eliminated</span>
          <span className="text-gold-600">&#9670;</span>
          <span>3 industries</span>
          <span className="text-gold-600">&#9670;</span>
          <span>100% custom</span>
        </div>
      </div>
    </section>
  )
}
