import Image from "next/image"
import Link from "next/link"
import { business } from "@/lib/data/business"

export const metadata = {
  title: "Catering — Soul Tye",
  description:
    "Soul Tye caters most food events — birthdays, baby showers, office lunches, weddings, and family reunions. Hand-prepared soul food, served in branded foil pans.",
}

const eventTypes = [
  { title: "Birthdays", note: "Family-style spreads" },
  { title: "Baby showers", note: "Photogenic foil pans" },
  { title: "Office lunches", note: "Delivered & set up" },
  { title: "Family reunions", note: "Feeds a crowd" },
  { title: "Holiday tables", note: "Sides built for it" },
  { title: "Pop-ups & events", note: "Vendor-ready" },
]

const cateringFavorites = [
  { title: "Half-pan Famous Mac", note: "Crowd favorite", image: "/photos/soultye_famous_mac.jpg" },
  { title: "Lemon Pepper Wings", note: "Hand-seasoned", image: "/photos/soultye_lemon_pepper_wings.png" },
  { title: "Whiting & Cheese Grits", note: "Soul food, straight up", image: "/photos/soultye_whiting_cheese_grits.jpg" },
  { title: "Turkey Wings, Coconut Rice", note: "Plated for a crowd", image: "/photos/soultye_turkeywings_coconut_rice_beans.png" },
]

const process = [
  {
    n: "1",
    title: "Tell us about it",
    body: "Call or text Tye with the date, head-count, and any dishes you have in mind. We'll talk through what works.",
  },
  {
    n: "2",
    title: "Custom menu & quote",
    body: "We send back a menu shaped around your event and a clear total. No mystery line-items.",
  },
  {
    n: "3",
    title: "We cook from scratch",
    body: "Everything is hand-prepared by Tye the night before and the morning of. Foil pans, branded stickers, the works.",
  },
  {
    n: "4",
    title: "Delivery & setup",
    body: "We bring it to you and set up so it's ready to serve. You handle the photos.",
  },
]

export default function CateringPage() {
  return (
    <>
      <section className="bg-tomato text-cream border-b-2 border-ink relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full border-[3px] border-cream" />
          <div className="absolute -bottom-32 -right-10 h-[28rem] w-[28rem] rounded-full border-[3px] border-cream" />
        </div>
        <div className="relative mx-auto max-w-[92rem] px-6 py-24 grid gap-10 xl:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-3">
              Catering by Soul Tye
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              We cater
              <br />
              most food
              <br />
              <span className="text-marigold">events.</span>
            </h1>
            <p className="font-hand text-3xl text-cream/90 mt-4">
              hand-cooked. delivered. set up.
            </p>
            <p className="mt-6 text-lg max-w-xl text-cream/95">
              Tye personally cooks every catering order. You get the same soul
              food that brings the corner stand a line — just plated for a room.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3 font-semibold hover:bg-marigold transition"
              >
                Call {business.phone}
              </a>
              <a
                href={`mailto:${business.email}?subject=Catering inquiry`}
                className="btn-ghost border-cream text-cream hover:bg-cream hover:text-ink"
              >
                Email a request
              </a>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative">
              <div className="bg-cream rounded-3xl border-2 border-ink p-5 md:p-7 sticker -rotate-2">
                <div className="grid grid-cols-2 gap-4 md:gap-5">
                  {cateringFavorites.map((f) => (
                    <div key={f.title} className="text-center">
                      <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-ink">
                        <Image
                          src={f.image}
                          alt={f.title}
                          fill
                          sizes="(min-width: 1280px) 300px, (min-width: 768px) 24vw, 40vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="font-display font-bold text-ink text-sm mt-2">
                        {f.title}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-tomato">
                        {f.note}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center font-hand text-2xl text-ink">
                  the catering tray
                </div>
              </div>
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-marigold border-[3px] border-ink flex items-center justify-center text-ink font-display font-black text-center leading-tight sticker rotate-12">
                <span>
                  Foil
                  <br />
                  pans
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              Events we cater
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight max-w-3xl">
              If folks gather and they need a plate — we got it.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventTypes.map((e, i) => (
              <div
                key={e.title}
                className="bg-cream border-2 border-ink rounded-3xl p-6 sticker hover:-translate-y-1 transition"
              >
                <div className="font-display text-sm font-bold text-tomato tracking-[0.18em]">
                  {i + 1}
                </div>
                <div className="font-display text-2xl font-black mt-3">
                  {e.title}
                </div>
                <div className="text-sm text-charcoal/70 mt-1">{e.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-3">
              How it works
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
              Four steps. No surprises.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div
                key={p.n}
                className="rounded-3xl border-2 border-cream/15 p-6 hover:border-marigold/60 transition"
              >
                <div className="font-display font-black text-5xl text-marigold leading-none">
                  {p.n}
                </div>
                <div className="font-display font-bold text-xl mt-4">
                  {p.title}
                </div>
                <p className="text-cream/75 text-sm mt-2 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-5xl px-6">
          <blockquote className="bg-forest text-cream rounded-3xl p-10 md:p-14 border-2 border-ink sticker">
            <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-4">
              From a recent catering client
            </div>
            <p className="font-display text-3xl md:text-5xl font-bold leading-tight">
              “Everyone absolutely loved it. I'm doing a write up on the event this coming week…”
            </p>
            <div className="mt-6 text-cream/75">— Real text. Real event.</div>
          </blockquote>
        </div>
      </section>

      <section className="bg-marigold text-ink py-20 border-y-2 border-ink">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-5xl md:text-6xl font-black leading-tight">
            Got a date in mind?
          </h2>
          <p className="font-hand text-2xl mt-3">let's plate it up.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={business.phoneHref} className="btn-primary">
              Call {business.phone}
            </a>
            <a
              href={`mailto:${business.email}?subject=Catering inquiry`}
              className="btn-ghost"
            >
              {business.email}
            </a>
            <Link href="/menu" className="btn-ghost">
              See the menu
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
