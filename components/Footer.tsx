const serviceLinks = [
  { label: 'Custom AI Systems', href: '/services/custom-ai' },
  { label: 'AI Automation', href: '/services/ai-automation' },
  { label: 'AI Agents', href: '/services/ai-agents' },
  { label: 'AI Consulting', href: '/services/consulting' },
]

const industryLinks = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Professional Services', href: '/industries/professional-services' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="font-display text-2xl font-bold text-white mb-3">SanLuis AI</div>
            <p className="font-sans text-sm text-navy-300 leading-relaxed">
              Custom AI systems that eliminate business bottlenecks with surgical precision.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Industries</h4>
            <ul className="space-y-2">
              {industryLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contact@sanluisai.com" className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">
                  contact@sanluisai.com
                </a>
              </li>
              <li>
                <a href="https://t.me/SanLuisAiClientbot" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">
                  @SanLuisAiClientbot
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gold accent */}
        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="font-sans text-xs text-ink-500">
            &copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
