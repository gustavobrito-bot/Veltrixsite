import type { Metadata, Viewport } from "next"
import { Space_Grotesk } from "next/font/google"
import "../globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Veltrix Tecnologia - Startup Premium de Tecnologia",
  description: "Branding, tecnologia e performance para empresas que querem crescer e se posicionar acima da média.",
  keywords: "tecnologia, branding, desenvolvimento web, IA, startup",
  authors: [{ name: "Veltrix Tecnologia" }],
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a1628",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
