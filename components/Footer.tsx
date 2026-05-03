const links = [
  { label: 'Custom AI Systems', href: '/services/custom-ai' },
  { label: 'AI Automation', href: '/services/automation' },
  { label: 'AI Agents', href: '/services/agents' },
  { label: 'AI Consulting', href: '/services/consulting' },
]
const industries = [
  { label: 'Manufacturing', href: '/industries/manufacturing' },
  { label: 'Healthcare', href: '/industries/healthcare' },
  { label: 'Real Estate', href: '/industries/real-estate' },
  { label: 'Professional Services', href: '/industries/professional-services' },
  { label: 'Retail', href: '/industries/retail' },
  { label: 'Logistics', href: '/industries/logistics' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-display text-2xl font-bold text-white mb-3">SanLuis AI</div>
            <p className="font-sans text-sm text-navy-300 leading-relaxed">Custom AI solutions for small and mid-size businesses. No-code development. Bilingual EN/ES. Houston.</p>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Services</h4>
            <ul className="space-y-2">{links.map(l => (<li key={l.label}><a href={l.href} className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">{l.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Industries</h4>
            <ul className="space-y-2">{industries.map(l => (<li key={l.label}><a href={l.href} className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">{l.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:contact@sanluisai.com" className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">contact@sanluisai.com</a></li>
              <li><a href="https://t.me/SanLuisAiClientbot" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200">@SanLuisAiClientbot</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="text-xs text-navy-500 mb-2">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
          <p className="text-xs text-navy-500"><a href="/privacy" className="hover:text-navy-300 transition-colors">Privacy Policy</a><span className="mx-2">&middot;</span><a href="/terms" className="hover:text-navy-300 transition-colors">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  )
}
