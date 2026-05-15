'use client'

import { type ReactNode } from 'react'
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider'
import ChatBot from '@/components/ChatBot'

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <MotionPreferenceProvider>
      {children}
      <ChatBot />
    </MotionPreferenceProvider>
  )
}
