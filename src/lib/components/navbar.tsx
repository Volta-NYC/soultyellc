"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import Logo from "./logo"
import { navLinks, business } from "@/lib/data/business"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isMenuPage = pathname === "/menu"

  return (
    <header
      className={`sticky top-0 z-40 border-b border-ink/10 ${
        isMenuPage ? "bg-cream" : "bg-cream/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="Soul Tye home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-full transition ${
                  active ? "bg-ink text-cream" : "text-ink hover:bg-ink/5"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={business.phoneHref} className="btn-primary text-sm">
            {business.phone}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 rounded-full border-2 border-ink flex items-center justify-center"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream">
          <div className="px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-2xl text-base font-medium ${
                  pathname === link.href ? "bg-ink text-cream" : "text-ink hover:bg-ink/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={business.phoneHref} className="btn-primary justify-center mt-3">
              Call {business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
