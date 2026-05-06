import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found | SanLuis AI Solutions',
  description: 'The page you\'re looking for doesn\'t exist. Return to the SanLuis AI Solutions homepage.',
  robots: { index: false, follow: false },
  openGraph: {
    title: '404 — Page Not Found | SanLuis AI Solutions',
    description: 'The page you\'re looking for doesn\'t exist.',
    images: [{ url: '/generated/sanluis_og_00001_.png', width: 1200, height: 630 }],
  },
}

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy-800 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center_right,rgba(217,164,52,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-[1440px] w-full mx-auto px-8 md:px-16 lg:px-24 pt-28 pb-16 md:pb-20 z-10">
        {/* Eyebrow with gold accent */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-sans text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">Error 404</span>
          <div className="h-px w-8 bg-gold-600/60" />
        </div>

        {/* Title */}
        <h1 className="font-display text-[clamp(2.4rem,6vw,4rem)] text-bone-50 font-semibold leading-[0.94] tracking-[-0.03em] max-w-[18ch] mb-6">
          That page doesn&rsquo;t exist.
        </h1>

        {/* Description */}
        <p className="font-sans text-base md:text-lg font-light text-bone-300/70 leading-relaxed max-w-[48ch] mb-12">
          The URL you requested couldn&rsquo;t be found. It may have moved, been renamed, or never existed. The navigation above has every active page.
        </p>

        {/* Gold CTA */}
        <Link
          href="/"
          className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-10 py-5 bg-gold-600 text-navy-900 hover:bg-gold-500 hover:shadow-goldGlow transition-all duration-220 rounded"
        >
          Return Home.
        </Link>
      </div>

      {/* Bottom gold thread */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-600/20" />
    </section>
  )
}
