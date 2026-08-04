import "./globals.css"
import { Bricolage_Grotesque, Fraunces, Caveat } from "next/font/google"
import Navbar from "@/lib/components/navbar"
import Footer from "@/lib/components/footer"
import ScrollReveal from "@/lib/components/scroll-reveal"

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
})

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "600", "700"],
  display: "swap",
})

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

export const metadata = {
  title: "Soul Tye — Brooklyn's Corner Soul Food Stand & Caterer",
  description:
    "Hand-cooked soul food on Bridge & York in DUMBO, Brooklyn. Tuesday–Friday, 11:30 AM – 5 PM. Local delivery & full-service catering by Chef Tye.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${hand.variable} ${sans.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  )
}
