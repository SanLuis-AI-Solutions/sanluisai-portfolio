'use client'

import { type ReactNode } from 'react'
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider'
import LenisProvider from '@/components/LenisProvider'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <MotionPreferenceProvider>
      <LenisProvider>
        {children}
      </LenisProvider>
    </MotionPreferenceProvider>
  )
}
