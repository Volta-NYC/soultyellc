"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const selector = [
      "section",
      "article",
      ".sticker",
      "blockquote",
      "h1",
      "h2",
      "p",
      ".reveal",
    ].join(", ")
    const viewportH = window.innerHeight
    const variants = [
      "reveal-from-left",
      "reveal-from-right",
      "reveal-from-bottom",
      "reveal-pop",
    ]

    const all = Array.from(document.querySelectorAll<HTMLElement>(selector))
    all.forEach((el, index) => {
      if (el.classList.contains("reveal-motion")) return
      const isText = el.matches("h1, h2, p, blockquote")
      const variant = isText ? "reveal-text" : variants[index % variants.length]
      el.classList.add("reveal-motion", variant)
      el.style.setProperty("--reveal-delay", `${(index % 4) * 80}ms`)
    })

    if (CSS.supports?.("animation-timeline: view()")) return

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
  }, [pathname])

  return null
}
