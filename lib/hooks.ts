"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

/**
 * Hook for Intersection Observer (Scroll Reveal)
 */
export const useOnScreen = (options: IntersectionObserverInit): [RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        if (ref.current) observer.unobserve(ref.current)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, options])

  return [ref, isVisible]
}
