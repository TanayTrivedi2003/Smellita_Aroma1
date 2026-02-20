import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Smelita Aroma - Luxury Perfumes & Attars | Spread the Soulful Smell",
  description:
    "Discover premium Indian perfumes and traditional attars. Experience the luxury of Royal Oud, Mystic Rose, and Saffron Soul. Handcrafted fragrances for the discerning.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo-amit.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-amit.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/logo-amit.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <WhatsAppFloat />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
