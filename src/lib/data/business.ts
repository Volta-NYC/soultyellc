export const business = {
  name: "Soul Tye",
  legalName: "Soul Tye LLC",
  tagline: "Outside Mobile Soul Food Vendor",
  hookLine: "Making nonbelievers, believers.",
  description:
    "Brooklyn's corner soul food stand — hand-cooked daily by Chef Tye, serving plates with imprint.",
  founder: {
    name: "Tyeisha \"Tye\" Odom",
    short: "Chef Tye",
  },
  founded: 2021,
  phone: "718-415-0129",
  phoneHref: "tel:+17184150129",
  email: "Soultyellc@gmail.com",
  emailHref: "mailto:Soultyellc@gmail.com",
  instagram: "https://www.instagram.com/soultyellc/",
  instagramHandle: "@soultyellc",
  location: {
    intersection: "Bridge & York Street",
    neighborhood: "DUMBO / Vinegar Hill, Brooklyn",
    landmarks: [
      "Down the street from the York St F-train",
      "In front of NYCHA's Farragut Houses",
      "Walking distance from the Brooklyn Bridge",
    ],
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Bridge+St+%26+York+St%2C+Brooklyn%2C+NY",
  },
  hours: {
    days: "Tuesday – Friday",
    time: "11:30 AM – 5:00 PM",
    note: "Some days we stay open later — follow @soultyellc for live updates.",
  },
  delivery: {
    fee: "$3 & up",
    window: "11:30 AM – 5:00 PM",
    note: "We handle delivery ourselves. No DoorDash, no UberEats.",
  },
  press: {
    outlet: "New York Amsterdam News",
    title: "Soul Tye, the corner food stand changing taste buds and lives",
    author: "Karen Juanita Carrillo",
    date: "November 14, 2024",
    href: "https://amsterdamnews.com/news/2024/11/14/soul-tye-the-corner-food-stand-changing-taste-buds-and-lives/",
  },
  team: [
    { name: "Tyeisha \"Tye\" Odom", role: "Owner & Chef" },
    { name: "David", role: "Assistant" },
    { name: "Jayshawn", role: "Assistant" },
    { name: "Niguel Miranda", role: "In Training" },
  ],
} as const

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/catering", label: "Catering" },
  { href: "/story", label: "Story" },
  { href: "/contact", label: "Visit" },
] as const
