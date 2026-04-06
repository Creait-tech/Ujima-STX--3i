"use client"

import type React from "react"
import { useOnScreen } from "@/lib/hooks"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const FadeIn = ({ children, delay = 0, className = "" }: FadeInProps) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
