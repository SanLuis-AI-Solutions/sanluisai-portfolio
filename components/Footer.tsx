'use client'

import FlameMark from '@/components/FlameMark'
import { useMotionPreference } from '@/components/MotionPreferenceProvider'

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

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function Footer() {
  const { reduceMotion, toggleReduceMotion } = useMotionPreference()
  return (
    <footer className="bg-navy-950 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FlameMark size="sm" />
              <span className="font-display text-2xl font-bold text-white">SanLuis AI</span>
            </div>
            <p className="font-sans text-sm text-navy-300 leading-relaxed">Custom AI for small and mid-size businesses. Online only. We save you time and money. Bilingual EN/ES.</p>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Services</h4>
            <ul className="space-y-1">{links.map(l => (<li key={l.label}><a href={l.href} className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center">{l.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Industries</h4>
            <ul className="space-y-1">{industries.map(l => (<li key={l.label}><a href={l.href} className="font-sans text-sm text-navy-300 hover:text-white transition-colors duration-200 min-h-[44px] flex items-center">{l.label}</a></li>))}</ul>
          </div>
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-widest text-gold-600 mb-4">Connect</h4>
            <div className="flex items-center gap-4 mb-4">
              <a href="mailto:contact@sanluisai.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-800 text-navy-300 hover:bg-gold-600 hover:text-navy-900 transition-all duration-220" aria-label="Email SanLuis AI">
                <EmailIcon />
              </a>
              <a href="https://www.linkedin.com/in/danielsanluis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-800 text-navy-300 hover:bg-gold-600 hover:text-navy-900 transition-all duration-220" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://x.com/sanluisai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-800 text-navy-300 hover:bg-gold-600 hover:text-navy-900 transition-all duration-220" aria-label="X / Twitter">
                <XIcon />
              </a>
            </div>
            <div className="space-y-1.5">
              <a href="tel:+18327790033" className="flex items-center gap-2 font-sans text-xs text-navy-300 hover:text-white transition-colors duration-200 min-h-[44px]">
                <PhoneIcon /><span>+1 (832) 779-0033</span>
              </a>
              <div className="flex items-center gap-2 font-sans text-xs text-navy-400">
                <LocationIcon /><span>Houston, Texas</span>
              </div>
              <a href="mailto:contact@sanluisai.com" className="flex items-center gap-2 font-sans text-xs text-navy-300 hover:text-white transition-colors duration-200 mt-1 min-h-[44px]">
                contact@sanluisai.com
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-navy-800 pt-8 text-center">
                  <p className="text-xs text-navy-400 mb-2">&copy; {new Date().getFullYear()} SanLuis AI Solutions. All rights reserved.</p>
                  <p className="text-xs text-navy-400"><a href="/privacy" className="hover:text-navy-300 transition-colors">Privacy Policy</a><span className="mx-2">&middot;</span><a href="/terms" className="hover:text-navy-300 transition-colors">Terms of Service</a><span className="mx-2">&middot;</span><button onClick={toggleReduceMotion} className="hover:text-navy-300 transition-colors" aria-pressed={reduceMotion}>{reduceMotion ? 'Enable Motion' : 'Reduce Motion'}</button></p>
                </div>
      </div>
    </footer>
  )
}
