"use client"

import { useEffect, useState } from "react"

// Tuesday–Friday, 11:30 AM – 5:00 PM (America/New_York)
function isOpen(now: Date): boolean {
  const ny = new Date(
    now.toLocaleString("en-US", { timeZone: "America/New_York" }),
  )
  const day = ny.getDay() // 0 Sun … 6 Sat
  if (day < 2 || day > 5) return false
  const minutes = ny.getHours() * 60 + ny.getMinutes()
  return minutes >= 11 * 60 + 30 && minutes < 17 * 60
}

export default function OpenBadge({
  className = "",
}: {
  className?: string
}) {
  const [open, setOpen] = useState<boolean | null>(null)
  useEffect(() => {
    const update = () => setOpen(isOpen(new Date()))
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])

  if (open === null) return null
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-ink/15 bg-cream/80 backdrop-blur px-3 py-1.5 text-xs font-semibold ${className}`}
    >
      <span className="relative flex h-2.5 w-2.5">
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
            open ? "animate-ping bg-forest" : "bg-tomato/40"
          }`}
        />
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            open ? "bg-forest" : "bg-tomato"
          }`}
        />
      </span>
      {open ? "Open right now · Bridge & York" : "Closed · Back Tue 11:30 AM"}
    </div>
  )
}
