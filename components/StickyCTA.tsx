'use client'

export default function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="/booking"
        className="flex items-center justify-center w-full font-sans text-sm font-semibold tracking-[0.04em] px-6 py-3 bg-gold-500 text-navy-900 hover:bg-gold-400 transition-colors duration-200"
      >
        Book a Discovery Session.
      </a>
    </div>
  )
}