import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Discovery Session — SanLuis AI Solutions',
  description: 'Schedule a free discovery session with SanLuis AI. We will map out a custom AI solution tailored to your specific business needs and timeline.',
}

export default function BookingPage() {
  return (
    <>
      {/* Simple nav bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-navy-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="font-display text-2xl text-navy-800">SanLuis AI</Link>
          <Link href="/booking" className="font-sans text-sm font-semibold px-4 py-2 bg-navy-900 text-white rounded hover:bg-navy-800 transition-colors">
            Book a Discovery Session.
          </Link>
        </div>
      </nav>

      {/* Page content */}
      <main className="pt-16 bg-bgCanvas min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-12">
            <h1 className="sl-display-lg text-navy-800 mb-4">Book a Discovery Session</h1>
            <p className="sl-body-lg max-w-2xl mx-auto">
              Tell us about your business challenge. We will map out a custom AI solution tailored to your specific needs and timeline.
            </p>
          </div>
          <div className="bg-surface border border-navy-200 w-full overflow-hidden rounded" style={{ minHeight: '700px' }}>
            <iframe
              src="https://cal.com/sanluisai/discovery-session"
              width="100%"
              height="700"
              style={{ border: 'none' }}
              title="Schedule a Discovery Session"
            />
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-navy-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-xl text-white mb-2">SanLuis AI</p>
          <p className="font-sans text-sm text-navy-300">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
