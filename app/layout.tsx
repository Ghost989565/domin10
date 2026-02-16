import type React from "react"
import type { Metadata, Viewport } from "next"
import { Lora, Manrope, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export const metadata: Metadata = {
  title: "Dominion | Welcome Home Outreach and Community Impact",
  description:
    "Dominion is a community-centered organization building outreach, education, and impact through storytelling, donations, merchandise, and engagement programs.",
}

export const viewport: Viewport = {
  themeColor: "#008080",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.variable} ${lora.variable} ${spaceMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
