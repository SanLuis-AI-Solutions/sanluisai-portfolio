import Link from 'next/link'

const navLinks = ['Work', 'Services', 'About', 'Blog', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-navy/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-2">
            <p className="font-grotesk font-semibold text-white text-lg tracking-tight">
              SanLuis <span className="text-gold">AI</span> Solutions
            </p>
            <p className="text-white/50 text-sm">Your team, amplified.</p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 md:justify-center items-start">
            {navLinks.map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-white/50 text-sm hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="md:text-right space-y-1">
            <p className="text-white/50 text-sm">Houston, TX</p>
            <a
              href="mailto:contact@sanluisai.com"
              className="text-white/50 text-sm hover:text-white transition-colors block"
            >
              contact@sanluisai.com
            </a>
            <p className="text-white/50 text-sm">Bilingual EN/ES</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} SanLuis AI Solutions
          </p>
          <p className="text-gold/60 text-xs italic">
            Zero jobs replaced. By design.
          </p>
        </div>
      </div>
    </footer>
  )
}
