"use client"

import { useState, useEffect, useRef } from "react"

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px) ${isHovering ? "scale(1.5)" : "scale(1)"}`
      }
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "BUTTON" || target.tagName === "A" || target.closest(".cursor-pointer")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseover", onMouseOver)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseover", onMouseOver)
    }
  }, [isHovering])

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-8 h-8 border border-gray-800 rounded-full pointer-events-none z-[100] mix-blend-difference hidden md:block ${isHovering ? "bg-gray-800" : ""}`}
      style={{
        transform: `translate(-100px, -100px)`,
      }}
    />
  )
}
