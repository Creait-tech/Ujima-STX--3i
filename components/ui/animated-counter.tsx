"use client"

import { useState, useEffect } from "react"
import { useOnScreen } from "@/lib/hooks"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const [ref, isVisible] = useOnScreen({ threshold: 0.5 })

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      setCount(Math.floor(end * percentage))

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isVisible])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}
