import { business } from "@/lib/data/business"

export const metadata = {
  title: "Visit & Contact — Soul Tye",
  description:
    "Find Soul Tye at Bridge & York Street in DUMBO, Brooklyn. Open Tuesday–Friday, 11:30 AM – 5 PM. Local delivery and catering available.",
}

const faqs = [
  {
    q: "Where exactly do I find you?",
    a: "On the corner of Bridge Street and York Street in Brooklyn — at the seam between DUMBO and Vinegar Hill. Walking distance from the Brooklyn Bridge and the York St (F) station. Look for the yellow Soul Tye tee.",
  },
  {
    q: "What are your hours?",
    a: "Tuesday through Friday, 11:30 AM – 5:00 PM. Some days we stay open later — follow @soultyellc for live updates.",
  },
  {
    q: "Do you deliver?",
    a: "Yes — we handle our own local delivery. $3 and up depending on distance, during open hours. Call or text 718-415-0129 to place an order.",
  },
  {
    q: "Do you take catering events?",
    a: "We cater most food events — birthdays, baby showers, office lunches, weddings, family reunions. Call Tye to talk through menu, head-count, and timing.",
  },
  {
    q: "Are you on DoorDash / UberEats / Grubhub?",
    a: "No. We deliver ourselves so we can keep the food at the temperature and quality we want.",
  },
  {
    q: "Are some menu items made to order?",
    a: "Yes — lamb chops and the 3 PC whiting fish (Thu/Fri) are made to order. Call ~30 minutes ahead so we can have it hot when you arrive.",
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper border-b-2 border-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              Visit · Order · Reach out
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
              Come find
              <br />
              <span className="text-tomato">the corner</span>.
            </h1>
            <p className="font-hand text-3xl text-charcoal/80 mt-4">
              we'll save you a plate.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <div className="font-display text-xl font-bold">
              {business.hours.days}
            </div>
            <div className="font-display text-lg">{business.hours.time}</div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 md:grid-cols-3">
          <Card
            color="bg-tomato text-cream"
            label="Phone"
            big={business.phone}
            sub="Call or text to order or ask about catering."
            href={business.phoneHref}
            cta="Tap to call"
          />
          <Card
            color="bg-marigold text-ink"
            label="Email"
            big={business.email}
            sub="For catering inquiries, events, and press."
            href={business.emailHref}
            cta="Send a note"
          />
          <Card
            color="bg-forest text-cream"
            label="Instagram"
            big={business.instagramHandle}
            sub="Live menu drops, weekly specials, and reels from the stand."
            href={business.instagram}
            cta="Follow @soultyellc"
            external
          />
        </div>
      </section>

      <section className="bg-paper pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.22em] text-tomato font-semibold mb-3">
              The corner
            </div>
            <h2 className="font-display text-5xl font-black leading-[0.95] tracking-tight">
              {business.location.intersection}
            </h2>
            <p className="mt-2 text-charcoal/80 text-lg">
              {business.location.neighborhood}
            </p>
            <ul className="mt-6 space-y-3 text-charcoal/85">
              {business.location.landmarks.map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <span aria-hidden className="text-tomato">●</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
            <a
              href={business.location.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              Open in Google Maps →
            </a>
          </div>
          <div className="md:col-span-7">
            <div className="rounded-3xl overflow-hidden border-2 border-ink sticker">
              <iframe
                title="Map of Bridge St & York St, Brooklyn"
                src="https://www.google.com/maps?q=Bridge+St+%26+York+St%2C+Brooklyn%2C+NY&output=embed"
                className="w-full aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-xs uppercase tracking-[0.22em] text-marigold font-semibold mb-3">
            FAQ
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-black leading-[0.95] tracking-tight mb-10">
            Good questions.
          </h2>
          <div className="divide-y divide-cream/15 border-y border-cream/15">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="cursor-pointer flex items-start gap-4 list-none">
                  <span className="font-display text-xl font-bold flex-1">
                    {f.q}
                  </span>
                  <span className="text-marigold text-2xl leading-none transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-cream/80 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function Card({
  color,
  label,
  big,
  sub,
  href,
  cta,
  external,
}: {
  color: string
  label: string
  big: string
  sub: string
  href: string
  cta: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`${color} rounded-3xl p-8 border-2 border-ink sticker block hover:-translate-y-1 transition`}
    >
      <div className="text-xs uppercase tracking-[0.22em] opacity-80 font-semibold mb-3">
        {label}
      </div>
      <div className="font-display text-2xl md:text-3xl font-black leading-tight break-words">
        {big}
      </div>
      <p className="mt-3 text-sm opacity-90">{sub}</p>
      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
        {cta} →
      </div>
    </a>
  )
}
