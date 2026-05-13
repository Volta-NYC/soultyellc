import Link from "next/link"
import { business } from "@/lib/data/business"

export const metadata = {
  title: "Story — Meet Chef Tye",
  description:
    "After 13 years in retail, Tyeisha Odom turned a pandemic pause into a Brooklyn food stand. This is her story.",
}

const quotes = [
  "I like to cook. I like the results.",
  "I want to be able to not just give good food back — I want to help my community, because I love my community and I love my people.",
  "I want to continue being my own boss. That's my goal. And I want to continue creating a menu that is unique from anybody else's.",
]

export default function StoryPage() {
  return (
    <>
      <section className="bg-paper border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              The Story
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              Meet
              <br />
              <span className="text-tomato">Chef Tye.</span>
            </h1>
            <p className="font-hand text-3xl text-charcoal/80 mt-4">
              cook · neighbor · own boss
            </p>
          </div>
          <div className="md:col-span-4">
            <div className="bg-cream border-2 border-ink rounded-3xl p-6 sticker -rotate-2">
              <div className="text-xs uppercase tracking-[0.18em] text-tomato font-semibold mb-2">
                The short version
              </div>
              <p className="font-display text-lg leading-snug font-bold">
                Born and raised in Brooklyn. Started Soul Tye in 2021. Cooks
                every plate herself. Hires from her own block.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-3xl px-6 prose-lg">
          <div className="space-y-8 text-lg leading-relaxed text-charcoal/90">
            <p className="text-2xl font-display font-bold leading-tight text-ink">
              For thirteen years, Tyeisha Odom worked retail. And for thirteen
              years, she felt like she was supposed to be doing something else.
            </p>
            <p>
              When the pandemic hit in 2020, she got the pause she didn't know she
              needed. She'd loved cooking since her grandmother taught her — and
              she'd kept teaching herself, picking up techniques on YouTube and in
              her own kitchen. By 2021, she had a name, a license, and a corner.
            </p>
            <p>
              Today you'll find her at <strong>Bridge & York Street</strong> in
              Brooklyn — the seam where DUMBO meets Vinegar Hill, a few blocks
              from where she was raised. She sets up in front of the Farragut
              Houses she grew up around. Tourists wandering off the Brooklyn
              Bridge end up at her stand by accident. Neighbors come on purpose.
            </p>
            <p>
              Tye basically cooks everything herself. Her assistants — David,
              Jayshawn, and Niguel — are all from the neighborhood. That's on
              purpose. The food is soul food, but the kitchen is also African,
              Latino, Caribbean — wherever a flavor she loves comes from.
            </p>
            <p>
              The menu changes every week. The mission doesn't:
              <strong> hand-cooked food, served with love, served to her people.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-6">
            In her own words
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {quotes.map((q, i) => (
              <blockquote
                key={i}
                className={`rounded-3xl border-2 ${
                  i === 1 ? "bg-marigold text-ink border-ink" : "border-cream/15"
                } p-8`}
              >
                <div className="font-display text-7xl leading-none opacity-30 mb-2">
                  ”
                </div>
                <p className="font-display text-xl leading-snug font-bold">
                  {q}
                </p>
              </blockquote>
            ))}
          </div>
          <div className="mt-8 text-xs text-cream/55">
            Quotes from {business.press.outlet}, {business.press.date}.
          </div>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              The team
            </div>
            <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight">
              Hired from the block.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {business.team.map((m, i) => (
              <div
                key={m.name}
                className={`rounded-3xl border-2 border-ink p-6 sticker ${
                  ["bg-tomato text-cream", "bg-marigold text-ink", "bg-forest text-cream", "bg-peach text-ink"][i % 4]
                }`}
              >
                <div className="h-24 w-24 rounded-full bg-cream/90 border-2 border-ink flex items-center justify-center font-display font-black text-3xl text-ink">
                  {m.name
                    .replace(/[^A-Za-z ]/g, "")
                    .split(" ")
                    .map((w) => w[0])
                    .filter(Boolean)
                    .slice(0, 2)
                    .join("")}
                </div>
                <div className="font-display font-bold text-2xl mt-4 leading-tight">
                  {m.name}
                </div>
                <div className="text-sm opacity-80 mt-1">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-marigold text-ink py-20 border-y-2 border-ink">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
            Press
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            “Soul Tye, the corner food stand changing taste buds and lives.”
          </h2>
          <p className="mt-4">
            — {business.press.author}, {business.press.outlet}, {business.press.date}
          </p>
          <a
            href={business.press.href}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-6 btn-primary"
          >
            Read the feature →
          </a>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black leading-tight">
            Come taste it.
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/menu" className="btn-primary">
              See the menu →
            </Link>
            <Link href="/contact" className="btn-ghost">
              Find the stand
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
