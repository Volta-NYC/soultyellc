export type Testimonial = {
  quote: string
  who: string
  context: string
  type: "text" | "press" | "anecdote"
}

export const testimonials: Testimonial[] = [
  {
    quote: "Soooooooo gooood omg.",
    who: "Lamb chops customer",
    context: "After picking up lamb chops, yellow rice & green beans",
    type: "text",
  },
  {
    quote: "Everyone absolutely loved it. I'm doing a write up on the event this coming week…",
    who: "Catering client",
    context: "After Soul Tye catered their event",
    type: "text",
  },
  {
    quote: "I couldn't even get the words out. I'll be ordering again.",
    who: "First-time customer",
    context: "First delivery order",
    type: "text",
  },
  {
    quote:
      "I want to be able to not just give good food back; I want to help my community because I love my community and I love my people.",
    who: "Tye, in NY Amsterdam News",
    context: "On why she does this",
    type: "press",
  },
  {
    quote:
      "A group of 20 sightseers tasted her sweet potato cornbread — then upgraded to full plates of jerk chicken, sautéed green beans and mac & cheese. They almost cleaned her out.",
    who: "NY Amsterdam News",
    context: "A regular Tuesday on Bridge & York",
    type: "anecdote",
  },
]
