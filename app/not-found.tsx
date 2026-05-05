import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-navy-900 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-lg">
        <span className="font-display text-[8rem] sm:text-[10rem] leading-none text-gold-500 select-none">
          404
        </span>
        <h1 className="font-display text-3xl sm:text-4xl text-bone-50 mt-4 mb-4">
          Something went wrong.
        </h1>
        <p className="font-sans text-base text-bone-300/70 mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-sans text-sm font-semibold tracking-[0.04em] px-8 py-4 bg-bone-50 text-navy-800 hover:bg-gold-500 hover:text-navy-900 transition-all duration-220 rounded"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
