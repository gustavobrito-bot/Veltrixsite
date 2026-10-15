import type { Metadata, Viewport } from "next"
import { Poppins, Bricolage_Grotesque, Instrument_Sans, IBM_Plex_Mono } from "next/font/google"
import "../globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
})

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
  display: "swap",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Veltrix — Sites e cardápios digitais para bares, restaurantes e comércio em SP",
  description:
    "Sites rápidos, cardápio digital com pedido no WhatsApp e painéis de vendas para bares, restaurantes e comércios de São Paulo.",
  keywords: [
    "cardápio digital",
    "site para restaurante",
    "site para bar",
    "cardápio com QR Code",
    "pedido pelo WhatsApp",
    "São Paulo",
  ],
  authors: [{ name: "Veltrix Tecnologia" }],
  icons: { icon: "/icon.svg" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0f1d3a",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${bricolage.variable} ${instrument.variable} ${plexMono.variable} scroll-smooth bg-background`}
    >
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
