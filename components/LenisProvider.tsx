'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Disable lag smoothing to avoid scroll-sync drift between GSAP and Lenis
    gsap.ticker.lagSmoothing(0)

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll position into GSAP's ticker so ScrollTrigger
    // reads the correct scroll position on every frame
    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000)
    })

    // Also tell GSAP to re-calculate on every Lenis frame
    function raf(time: number) {
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // ScrollTrigger's scroller proxy — tell it to use Lenis's scroll position
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (value !== undefined) {
          lenis.scrollTo(value, { immediate: true })
        }
        return lenis.scroll
      },
      scrollLeft(value) {
        return 0
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        }
      },
    })

    // Refresh ScrollTrigger on resize
    const resize = () => ScrollTrigger.refresh()
    window.addEventListener('resize', resize)

    return () => {
      lenis.destroy()
      gsap.ticker.remove((time: number) => lenis.raf(time * 1000))
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <>{children}</>
}
