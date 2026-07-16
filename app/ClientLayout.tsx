'use client'

import { type ReactNode } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider'
import LenisProvider from '@/components/LenisProvider'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CtaBar from '@/components/CtaBar'
import ScrollProgress from '@/components/ScrollProgress'
import ExitIntentOverlay from '@/components/ExitIntentOverlay'

export default function ClientLayout({ children }: { children: ReactNode }) {
  const privateScorecard = usePathname().startsWith('/internal/ai-opportunity-scorecard')

  if (privateScorecard) {
    return <MotionPreferenceProvider>{children}</MotionPreferenceProvider>
  }

  return (
    <MotionPreferenceProvider>
      <LenisProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-BE7FHSSCP8" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-BE7FHSSCP8');`}
        </Script>
        <ScrollProgress />
        <header><Nav /></header>
        {children}
        <Footer />
        <CtaBar variant="sticky" href="/booking" text="Book a Discovery Session" />
        <ExitIntentOverlay />
      </LenisProvider>
    </MotionPreferenceProvider>
  )
}
