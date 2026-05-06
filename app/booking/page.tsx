import Link from 'next/link'
import type { Metadata, Viewport } from 'next'
import PageHeader from '@/components/PageHeader'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Book a $300 Discovery Session — SanLuis AI Solutions',
  description: 'Book a $300 Discovery Session with SanLuis AI — 60 minutes, written action plan, money-back guarantee.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function BookingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get Started"
        title="Book a Discovery Session."
        description="Tell us about your business challenge. We will map out a custom AI solution tailored to your specific needs and timeline."
      />

      <AnimatedSection delay={0}>
      <section className="bg-bone-50 min-h-screen px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
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
      </section>
      </AnimatedSection>

      {/*
        QUICK WIN 3: Override Cal.com's inaccessible viewport meta.
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
(function() {
  function fixViewport() {
    var vp = document.querySelector('meta[name="viewport"]');
    if (vp) {
      vp.setAttribute('content', 'width=device-width, initial-scale=1');
    } else {
      var meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(meta);
    }
  }
  window.addEventListener('load', function() {
    fixViewport();
    setTimeout(fixViewport, 2000);
  });
  if (typeof MutationObserver !== 'undefined') {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        if (m.type === 'attributes' && m.attributeName === 'content') {
          var target = m.target;
          if (target.name === 'viewport') {
            var content = target.getAttribute('content') || '';
            if (content.includes('maximum-scale') || content.includes('user-scalable=no')) {
              fixViewport();
            }
          }
        }
      });
    });
    observer.observe(document.head, { attributes: true, subtree: true, attributeFilter: ['content'] });
  }
})();
          `,
        }}
      />
    </>
  )
}
