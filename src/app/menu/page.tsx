import Link from "next/link"
import { menu, menuNote } from "@/lib/data/menu"
import { business } from "@/lib/data/business"

export const metadata = {
  title: "Menu — Soul Tye",
  description:
    "A rotating weekly menu of Brooklyn soul food: lamb chops, salmon, wings, famous mac, cornbread, and more.",
}

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
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {menu.map((cat, idx) => (
            <div key={cat.id} className="grid gap-10 md:grid-cols-12">
              <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
                <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
                  {idx + 1} · Section
                </div>
                <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <p className="mt-4 text-charcoal/75 max-w-sm">{cat.subtitle}</p>
                )}
              </div>

              <div className="md:col-span-8">
                <ul className="divide-y divide-ink/10 bg-cream rounded-3xl border-2 border-ink overflow-hidden sticker">
                  {cat.items.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-baseline gap-4 px-6 py-5 hover:bg-butter/40 transition ${
                        item.featured ? "bg-butter/30" : ""
                      }`}
                    >
                      <div className="flex-1">
                        <div className="font-display text-lg font-bold flex items-center gap-2">
                          {item.featured && (
                            <span
                              className="text-tomato"
                              aria-label="signature dish"
                              title="Signature"
                            >
                              ★
                            </span>
                          )}
                          {item.name}
                        </div>
                        {item.note && (
                          <div className="text-xs uppercase tracking-wider text-tomato mt-0.5 font-semibold">
                            {item.note}
                          </div>
                        )}
                      </div>
                      <div className="font-display font-black text-xl">
                        {item.price}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
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
            <Link href="/catering" className="btn-ghost border-cream text-cream hover:bg-cream hover:text-ink">
              Catering menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
