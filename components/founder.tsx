import Link from 'next/link'

export default function Founder() {
  return (
    <section className="py-24 px-6 lg:px-8" style={{background: '#0B1828'}}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — Photo + pull quote */}
          <div className="relative">
            <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl bg-surface gold-border flex flex-col items-center justify-end overflow-hidden">
              {/* Replace src with real photo when ready */}
              <div className="w-full h-full bg-gradient-to-b from-[#1c1c1c] to-[#0f0f0f] flex flex-col items-center justify-end pb-8 gap-2">
                <div className="w-24 h-24 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mb-2">
                  <svg className="w-10 h-10 text-gold/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </div>
                <p className="font-grotesk font-semibold text-white">Daniel San Luis</p>
                <p className="text-muted text-xs">Founder, SanLuis AI Solutions</p>
                <p className="text-muted text-xs mt-1">Houston, TX · EN/ES</p>
              </div>
            </div>

            {/* Pull quote from founder story */}
            <div className="mt-6 max-w-sm mx-auto lg:mx-0 p-5 rounded-xl border border-navy/40" style={{background: 'rgba(45,82,126,0.15)'}}>
              <p className="font-inter italic text-white/70 text-sm leading-relaxed">
                &ldquo;The people working the hardest were often the ones furthest from the tools that could help them.&rdquo;
              </p>
            </div>

            {/* Glow */}
            <div
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 30% 60%, rgba(45,82,126,0.15) 0%, transparent 60%)' }}
            />
          </div>

          {/* Right — Story */}
          <div className="space-y-5 lg:pt-4">
            <span className="section-label">The Founder</span>

            <h2 className="section-h2 text-white mt-3">
              Built by someone who speaks both languages.
            </h2>

            <p className="text-muted text-base leading-relaxed">
              I&rsquo;m Daniel — Houston-based, bilingual, and obsessed with one thing:
              making AI actually work for real teams.
            </p>

            <p className="text-muted text-base leading-relaxed">
              I built SanLuis AI Solutions because I kept seeing smart business owners getting left
              behind while AI hype flew over their heads. The small business owner running on a
              whiteboard and a prayer. The operator buried in spreadsheets they didn&rsquo;t have
              time to fix.
            </p>

            <p className="text-muted text-base leading-relaxed">
              I translate the technology into systems that make sense for your business, your team,
              and your goals. No buzzwords. No job replacements. Just work that works.
            </p>

            {/* Key proof line */}
            <div className="py-4 border-l-2 border-gold/40 pl-5">
              <p className="text-white font-medium text-base">
                Every client kept their entire team.
              </p>
              <p className="text-muted text-sm mt-1">That&rsquo;s not a side note. That&rsquo;s the whole point.</p>
            </div>

            <p className="text-white/40 text-sm italic">
              Bilingual EN/ES · Houston, TX · No-Code AI Developer
            </p>

            <Link
              href="/about"
              className="inline-flex items-center text-sm text-gold hover:text-gold/70 transition-colors group"
            >
              Read My Full Story
              <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 gold-divider" />
    </section>
  )
}
