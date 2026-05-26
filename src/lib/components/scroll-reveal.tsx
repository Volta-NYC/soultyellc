"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (CSS.supports?.("animation-timeline: view()")) return

    const selector = "section:not(.no-blur-reveal), article:not(.no-blur-reveal), .reveal"
    const viewportH = window.innerHeight

    const all = Array.from(document.querySelectorAll<HTMLElement>(selector))
    const pending: HTMLElement[] = []
    for (const el of all) {
      const rect = el.getBoundingClientRect()
      if (rect.top < viewportH * 0.85) {
        el.classList.add("is-visible")
      } else {
        el.classList.add("reveal-pending")
        pending.push(el)
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.remove("reveal-pending")
          el.classList.add("is-visible")
          io.unobserve(el)
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    )

    pending.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
