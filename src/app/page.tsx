import Image from "next/image"
import Link from "next/link"
import { business } from "@/lib/data/business"
import { signatureDishes, menu } from "@/lib/data/menu"
import { testimonials } from "@/lib/data/testimonials"

const accentMap: Record<string, { bg: string; text: string }> = {
  tomato: { bg: "bg-tomato", text: "text-cream" },
  marigold: { bg: "bg-marigold", text: "text-ink" },
  forest: { bg: "bg-forest", text: "text-cream" },
  brick: { bg: "bg-brick", text: "text-cream" },
}

const heroPlates = [
  { src: "/photos/soultye_lemon_pepper_wings.png", alt: "Lemon pepper wings" },
  { src: "/photos/soultye_famous_mac.jpg", alt: "Famous mac" },
  { src: "/photos/soultye_whiting_cheese_grits.jpg", alt: "Whiting & cheese grits" },
  { src: "/photos/soultye_turkeywings_coconut_rice_beans.png", alt: "Turkey wings with coconut rice and beans" },
] as const

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Signatures />
      <MenuPeek />
      <PressBlock />
      <TestimonialsWall />
      <CateringCta />
      <VisitBlock />
    </>
  )
}

function Hero() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-marigold/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-tomato/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[92rem] px-6 pt-14 pb-20 md:pt-20 md:pb-32 grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">
        <div className="lg:col-span-6 space-y-7">
          <h1 className="font-display font-black tracking-tight text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] text-ink">
            Soul food,
            <br />
            <span className="text-tomato">hand-cooked</span>
            <br />
            on the corner.
          </h1>
          <p className="font-hand text-3xl md:text-4xl text-charcoal/80 -mt-2">
            from Brooklyn, with love.
          </p>
          <p className="max-w-xl text-lg text-charcoal/80 leading-relaxed">
            Soul Tye is a corner food stand at <strong>Bridge & York</strong> in
            DUMBO. Chef Tye plates every order herself — lamb chops in garlic
            butter, mac that earned the name <em>famous</em>, whiting over cheese
            grits — and the menu changes every week.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/menu" className="btn-primary">
              See this week's menu
              <span aria-hidden>→</span>
            </Link>
            <Link href="/catering" className="btn-ghost">
              Book catering
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-charcoal/70">
            <span><span className="font-semibold text-ink">Call</span> {business.phone}</span>
            <span><span className="font-semibold text-ink">Find us</span> {business.location.intersection}</span>
            <span><span className="font-semibold text-ink">Open</span> Tue – Fri · 11:30 – 5</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-square max-w-[42rem] mx-auto">
            <div className="absolute inset-0 rounded-full bg-marigold/40 blur-2xl scale-90" />
            <div className="relative grid grid-cols-2 gap-5 md:gap-6 p-2 md:p-4">
              {heroPlates.map((p, i) => (
                <div
                  key={p.src}
                  className={`relative bg-cream rounded-3xl overflow-hidden border-2 border-ink sticker aspect-square ${
                    i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]"
                  } ${i === 1 ? "translate-y-6" : ""} ${
                    i === 2 ? "-translate-y-4" : ""
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 1024px) 28vw, 45vw"
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
              ))}
            </div>
            <Sticker className="absolute -bottom-2 -right-2 rotate-12" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Sticker({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-peach border-[3px] border-ink flex items-center justify-center sticker">
        <div className="text-center font-display leading-tight">
          <div className="text-[10px] uppercase tracking-[0.18em] text-charcoal">
            since
          </div>
          <div className="text-3xl font-black text-tomato">2021</div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-charcoal">
            Brooklyn
          </div>
        </div>
      </div>
    </div>
  )
}

function Marquee() {
  const words = [
    "MAC N CHEESE",
    "LAMB CHOPS",
    "WHITING",
    "CANDIED YAMS",
    "BANANA PUDDING",
    "GARLIC PARM WINGS",
    "COLLARDS",
    "CATFISH",
    "SWEET POTATO CORNBREAD",
  ]
  return (
    <div className="bg-tomato text-cream border-y-[3px] border-ink overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-4 font-display text-2xl md:text-3xl font-black">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-6 pr-6">
            {words.map((w, j) => (
              <span key={j} className="flex items-center gap-6">
                {w}
                <span className="text-marigold">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function Signatures() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-12 mb-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              What we're known for
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
              The plates people <span className="underline-wave">come back for</span>.
            </h2>
          </div>
          <p className="md:col-span-6 md:col-start-7 text-lg text-charcoal/80 leading-relaxed self-end">
            The menu rotates by week, but a handful of dishes earned their spot at
            the front of the line. Order one — or come hungry and try the spread.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish, i) => {
            const a = accentMap[dish.accent]
            return (
              <article
                key={dish.title}
                className={`relative ${a.bg} ${a.text} rounded-3xl p-6 overflow-hidden border-2 border-ink animate-fade-up`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden border-2 border-ink/20">
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <div className="font-display text-2xl font-black leading-tight">
                  {dish.title}
                </div>
                <div className="text-sm opacity-80 mt-1">{dish.subtitle}</div>
                <p className="text-sm mt-3 opacity-90 leading-relaxed">
                  {dish.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MenuPeek() {
  const mains = menu.find((c) => c.id === "mains")?.items.slice(0, 6) ?? []
  const sides = menu.find((c) => c.id === "sides")?.items.slice(0, 6) ?? []
  return (
    <section className="bg-ink text-cream py-24 bg-paper-dark relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-3">
              On the line
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
              This week's spread.
            </h2>
            <p className="font-hand text-2xl text-marigold mt-3">
              dinners come w/ 2 sides & a drink
            </p>
          </div>
          <Link href="/menu" className="btn-primary">
            See the full menu →
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <MenuColumn title="Mains" items={mains} accent="text-marigold" />
          <MenuColumn title="Sides · $6 each" items={sides} accent="text-peach" />
        </div>

        <p className="text-cream/60 text-sm mt-10 max-w-2xl">
          The full menu rotates weekly. Local delivery {business.delivery.fee}, during open hours. Some items are made to order — call {business.phone} so we can have it ready.
        </p>
      </div>
    </section>
  )
}

function MenuColumn({
  title,
  items,
  accent,
}: {
  title: string
  items: { name: string; price: string; note?: string }[]
  accent: string
}) {
  return (
    <div>
      <div className={`font-display text-2xl font-black mb-5 ${accent}`}>
        {title}
      </div>
      <ul className="divide-y divide-cream/15">
        {items.map((it) => (
          <li key={it.name} className="flex items-baseline gap-3 py-3">
            <span className="font-medium">{it.name}</span>
            <span className="flex-1 border-b border-dotted border-cream/25 translate-y-[-3px]" />
            <span className="font-display font-bold">{it.price}</span>
            {it.note && (
              <span className="hidden md:block text-xs text-cream/60 italic ml-2">
                {it.note}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function PressBlock() {
  return (
    <section className="bg-marigold text-ink py-20 border-y-2 border-ink relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 text-center relative">
        <div className="text-xs uppercase tracking-[0.22em] font-semibold mb-4">
          As featured in
        </div>
        <div className="font-display text-3xl md:text-4xl font-black mb-6">
          {business.press.outlet}
        </div>
        <blockquote className="font-display text-2xl md:text-4xl leading-tight font-medium italic max-w-3xl mx-auto">
          “Soul Tye, the corner food stand changing taste buds — and lives.”
        </blockquote>
        <div className="mt-6 text-sm">
          — {business.press.author}, {business.press.date}
        </div>
        <a
          href={business.press.href}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 underline underline-offset-4 font-semibold hover:no-underline"
        >
          Read the feature →
        </a>
      </div>
    </section>
  )
}

function TestimonialsWall() {
  const texts = testimonials.filter((t) => t.type === "text")
  const anecdotes = testimonials.filter((t) => t.type !== "text")
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
            What folks say
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight max-w-3xl">
            Real texts. From real customers.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {texts.map((t, i) => (
            <div
              key={t.quote}
              className={`relative bg-cream border-2 border-ink rounded-3xl p-6 sticker ${
                i === 1 ? "md:translate-y-6" : ""
              } ${i === 2 ? "md:-translate-y-2" : ""}`}
            >
              <span className="tape" />
              <div className="text-xs uppercase tracking-[0.18em] text-tomato font-semibold mb-3">
                Text message
              </div>
              <p className="font-display text-2xl leading-tight font-bold">
                “{t.quote}”
              </p>
              <div className="mt-4 text-sm text-charcoal/70">
                {t.who} · {t.context}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {anecdotes.map((t) => (
            <div
              key={t.quote}
              className="bg-forest text-cream rounded-3xl p-8 border-2 border-ink"
            >
              <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-3">
                {t.type === "press" ? "From the press" : "On a Tuesday"}
              </div>
              <p className="font-display text-xl md:text-2xl leading-snug">
                “{t.quote}”
              </p>
              <div className="mt-4 text-sm text-cream/70">— {t.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CateringCta() {
  return (
    <section className="bg-tomato text-cream py-24 border-y-2 border-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-20 left-10 h-80 w-80 rounded-full border-[3px] border-cream" />
        <div className="absolute -bottom-20 right-10 h-96 w-96 rounded-full border-[3px] border-cream" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-3">
            Catering
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.95] tracking-tight">
            We cater most food events.
          </h2>
          <p className="mt-6 text-lg max-w-xl">
            Birthdays, baby showers, office lunches, weddings, family reunions —
            Tye brings the soul food. Foil pans, branded packaging, fresh out of
            her kitchen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/catering"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3 font-semibold hover:bg-marigold transition"
            >
              Plan an event →
            </Link>
            <a href={business.phoneHref} className="btn-ghost border-cream text-cream hover:bg-cream hover:text-ink">
              Call {business.phone}
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <blockquote className="bg-cream text-ink rounded-3xl p-8 border-2 border-ink sticker -rotate-1">
            <div className="text-xs uppercase tracking-[0.18em] text-tomato font-semibold mb-3">
              Catering client
            </div>
            <p className="font-display text-2xl md:text-3xl leading-snug font-bold">
              “Everyone absolutely loved it. I'm doing a write up on the event
              this coming week…”
            </p>
            <div className="mt-4 text-sm text-charcoal/70">
              — Real text from a recent event
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

function VisitBlock() {
  return (
    <section className="bg-paper py-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
            Come find us
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
            On the corner of
            <br />
            <span className="text-tomato">Bridge & York</span>.
          </h2>
          <p className="font-hand text-2xl text-charcoal/80 mt-4">
            DUMBO, Brooklyn. Look for the yellow tee.
          </p>
          <ul className="mt-8 space-y-3 text-charcoal/85">
            {business.location.landmarks.map((l) => (
              <li key={l} className="flex items-start gap-3">
                <span aria-hidden className="text-tomato">●</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.location.mapsHref} target="_blank" rel="noreferrer" className="btn-primary">
              Open in Maps →
            </a>
            <Link href="/contact" className="btn-ghost">
              Full visit info
            </Link>
          </div>
        </div>

        <div className="md:col-span-7">
          <div className="rounded-3xl border-2 border-ink overflow-hidden sticker">
            <div className="bg-forest text-cream p-6 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-marigold mb-1">
                  Hours
                </div>
                <div className="font-display text-2xl font-bold">
                  {business.hours.days}
                </div>
                <div className="font-display text-xl">
                  {business.hours.time}
                </div>
              </div>
            </div>
            <iframe
              title="Map of Bridge St & York St, Brooklyn"
              src="https://www.google.com/maps?q=Bridge+St+%26+York+St%2C+Brooklyn%2C+NY&output=embed"
              className="w-full aspect-[16/10] block"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
