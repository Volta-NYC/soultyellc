import Link from "next/link"
import Logo from "./logo"
import { business, navLinks } from "@/lib/data/business"

export default function Footer() {
  return (
    <footer className="bg-ink text-cream mt-24">
      <div className="overflow-hidden border-b border-cream/15">
        <div className="flex whitespace-nowrap animate-marquee py-5 text-4xl md:text-5xl font-display font-black tracking-tight">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              {[
                "SOUL FOOD",
                "·",
                "BROOKLYN",
                "·",
                "MADE WITH LOVE",
                "·",
                "CATERING",
                "·",
                "SINCE 2021",
                "·",
                "DUMBO",
                "·",
              ].map((word, j) => (
                <span
                  key={j}
                  className={
                    word === "·"
                      ? "text-tomato"
                      : j % 3 === 0
                      ? "text-marigold"
                      : "text-cream"
                  }
                >
                  {word}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-cream rounded-2xl p-4 inline-block">
            <Logo />
          </div>
          <p className="font-display text-2xl leading-snug max-w-md">
            {business.hookLine}
          </p>
          <p className="text-cream/70 text-sm max-w-md">
            A neighborhood food stand on the corner of Bridge & York. Hand-cooked
            by Tye. We cater most food events.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-marigold mb-3">
            Explore
          </div>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-marigold transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-marigold mb-3">
            Reach Tye
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="hover:text-marigold">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="hover:text-marigold break-all">
                {business.email}
              </a>
            </li>
            <li>
              <a
                href={business.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-marigold"
              >
                {business.instagramHandle}
              </a>
            </li>
            <li className="pt-2 text-cream/70">
              {business.location.intersection}
              <br />
              {business.location.neighborhood}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-cream/60">
          <div>
            © {new Date().getFullYear()} {business.legalName}. All rights reserved.
          </div>
          <Link
            href="https://nyc.voltanpo.org"
            target="_blank"
            rel="noreferrer"
            className="hover:text-marigold"
          >
            Website made by @VoltaNYC
          </Link>
        </div>
      </div>
    </footer>
  )
}
