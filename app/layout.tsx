import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"
import "../globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Veltrix Tecnologia — Branding, Tecnologia e Performance",
  description:
    "Transformamos marcas em experiências digitais. Branding, desenvolvimento web, IA e performance para empresas que querem crescer e se posicionar acima da média.",
  keywords: ["tecnologia", "branding", "desenvolvimento web", "IA", "startup", "São Paulo"],
  authors: [{ name: "Veltrix Tecnologia" }],
  icons: { icon: "/icon.svg" },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#070e1c",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} scroll-smooth bg-background`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  )
}
