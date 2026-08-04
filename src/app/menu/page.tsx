import Link from "next/link"
import { menu, menuNote } from "@/lib/data/menu"
import type { MenuItem } from "@/lib/data/menu"
import { business } from "@/lib/data/business"

export const metadata = {
  title: "Menu — Soul Tye",
  description:
    "A rotating weekly menu of Brooklyn soul food: lamb chops, salmon, wings, famous mac, cornbread, and more.",
}

const mains = menu.find((cat) => cat.id === "mains")?.items ?? []
const sides = menu.find((cat) => cat.id === "sides")?.items ?? []
const desserts = menu.find((cat) => cat.id === "breads-desserts")?.items ?? []
const drinks = menu.find((cat) => cat.id === "drinks")?.items ?? []

const spotlightNames = [
  "Lamb Chops w/ Garlic Butter",
  "Oxtail Plates",
  "Salmon w/ Garlic Butter",
  "Turkey Wings",
  "3 PC Fried Whiting Meal",
  "Baked Chicken",
]

const spotlightMains = spotlightNames
  .map((name) => mains.find((item) => item.name === name))
  .filter((item): item is MenuItem => Boolean(item))

const rotatingMains = mains.filter((item) => !spotlightNames.includes(item.name))

export default function MenuPage() {
  return (
    <>
      <section className="bg-paper border-b-2 border-ink no-blur-reveal">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              The Menu
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              What's on
              <br />
              <span className="text-tomato underline-wave">the line</span> today.
            </h1>
            <p className="font-hand text-3xl text-charcoal/80 mt-4">
              dinners come w/ 2 sides & a drink
            </p>
          </div>
          <div className="md:col-span-4 md:text-right space-y-2 text-charcoal/85">
            <div className="font-display text-xl font-bold">
              {business.hours.days}
            </div>
            <div className="font-display text-lg">{business.hours.time}</div>
            <div className="text-sm">
              Delivery {business.delivery.fee} · {business.delivery.window}
            </div>
            <a href={business.phoneHref} className="inline-block mt-2 btn-primary">
              Call to order
            </a>
            <div className="mt-2 font-display text-lg font-bold">
              {business.phone}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-marigold/90 text-ink border-b-2 border-ink py-4 no-blur-reveal">
        <div className="mx-auto max-w-7xl px-6 text-sm md:text-base font-medium">
          <span className="italic">{menuNote}</span>
        </div>
      </section>

      <section className="bg-paper py-20 no-blur-reveal">
        <div className="mx-auto max-w-7xl px-6 space-y-14">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
                1 · Most asked-for
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
                Start with the dinners.
              </h2>
              <p className="mt-4 text-charcoal/75 max-w-sm">
                Plates come with 2 sides and a drink. Some dishes are made to
                order, so call ahead when you can.
              </p>
            </div>

            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
              {spotlightMains.map((item) => (
                <MenuCard key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border-2 border-ink bg-cream p-6 md:p-8 sticker">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
              <div>
                <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-2">
                  2 · Also in rotation
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-black leading-tight">
                  More mains, quick scan.
                </h3>
              </div>
              <div className="font-hand text-2xl text-charcoal/75">
                menu changes weekly
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rotatingMains.map((item) => (
                <CompactItem key={item.name} item={item} />
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <MenuPanel
              eyebrow="3 · Sides"
              title="Pick two."
              subtitle="Every side is $6."
              items={sides}
            />
            <MenuPanel
              eyebrow="4 · Cornbread & sweets"
              title="Finish sweet."
              items={desserts}
            />
            <MenuPanel
              eyebrow="5 · Drinks"
              title="Wash it down."
              items={drinks}
            />
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-20 no-blur-reveal">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-4">
            Don't see your favorite?
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            We rotate the menu weekly. Call Tye — chances are it's in the rotation.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              Call {business.phone}
            </a>
            <Link href="/catering" className="btn-ghost btn-ghost-light">
              Catering menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function MenuCard({
  item,
}: {
  item: { name: string; price: string; note?: string }
}) {
  return (
    <article className="bg-cream rounded-3xl border-2 border-ink p-6 sticker">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl md:text-3xl font-black leading-tight">
          {item.name}
        </h3>
        <div className="rounded-full bg-tomato px-4 py-2 font-display text-xl font-black text-cream">
          {item.price}
        </div>
      </div>
      {item.note && (
        <div className="mt-4 inline-flex rounded-full bg-butter px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-tomato">
          {item.note}
        </div>
      )}
    </article>
  )
}

function CompactItem({
  item,
}: {
  item: { name: string; price: string; note?: string }
}) {
  return (
    <div className="rounded-2xl border border-ink/15 bg-paper px-4 py-3">
      <div className="flex items-baseline gap-3">
        <div className="font-display text-lg font-bold leading-tight">
          {item.name}
        </div>
        <div className="ml-auto font-display text-lg font-black">
          {item.price}
        </div>
      </div>
      {item.note && (
        <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-tomato">
          {item.note}
        </div>
      )}
    </div>
  )
}

function MenuPanel({
  eyebrow,
  title,
  subtitle,
  items,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  items: { name: string; price: string; note?: string }[]
}) {
  return (
    <section className="rounded-3xl border-2 border-ink bg-cream p-6 sticker no-blur-reveal">
      <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-2">
        {eyebrow}
      </div>
      <h3 className="font-display text-3xl font-black leading-tight">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-charcoal/70">{subtitle}</p>}
      <div className="mt-5 space-y-3">
        {items.map((item) => (
          <CompactItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  )
}
