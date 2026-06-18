'use client'

import { type ReactNode } from 'react'
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <MotionPreferenceProvider>
      {children}
    </MotionPreferenceProvider>
  )
}
