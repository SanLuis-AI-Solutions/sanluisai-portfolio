'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

interface MotionContextType {
  reduceMotion: boolean
  toggleReduceMotion: () => void
}

const MotionContext = createContext<MotionContextType>({
  reduceMotion: false,
  toggleReduceMotion: () => {},
})

export function useMotionPreference() {
  return useContext(MotionContext)
}

export function MotionPreferenceProvider({ children }: { children: ReactNode }) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('sanluis-reduce-motion')
    if (stored !== null) {
      setReduceMotion(stored === 'true')
    } else {
      setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('sanluis-reduce-motion', String(reduceMotion))
      document.documentElement.classList.toggle('reduce-motion', reduceMotion)
    }
  }, [reduceMotion, mounted])

  const toggleReduceMotion = useCallback(() => {
    setReduceMotion(prev => !prev)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <MotionContext.Provider value={{ reduceMotion, toggleReduceMotion }}>
      {children}
    </MotionContext.Provider>
  )
}
