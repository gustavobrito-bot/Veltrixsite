import type { Metadata } from "next"
import Image from "next/image"
import { ArrowUpRight, Briefcase, Globe, Layers, MessageCircle, Route } from "lucide-react"
import { ShareButton } from "./share-button"

const BIO_WHATSAPP_URL =
  "https://wa.me/5511983182274?text=Oi!%20Vim%20pelo%20Instagram%20e%20quero%20uma%20demonstra%C3%A7%C3%A3o%20da%20Veltrix."

export const metadata: Metadata = {
  title: "Veltrix — Links",
  description: "Sites e cardápios digitais para bares e restaurantes de São Paulo. Peça uma demonstração grátis.",
  openGraph: {
    title: "Veltrix Tecnologia",
    description: "Sites e cardápios digitais para bares e restaurantes de São Paulo.",
    images: ["/images/veltrix-avatar.png"],
  },
}

const links = [
  { href: "/links/cardapio", label: "Experimente um cardápio digital", icon: Layers },
  { href: "/links/projetos", label: "Veja projetos no ar", icon: Briefcase },
  { href: "/links/como-funciona", label: "Como funciona", icon: Route },
  { href: "/links/sobre", label: "Conheça a Veltrix", icon: Globe },
]

export default function LinksPage() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-navy font-body text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-40 size-[520px] rounded-full bg-[radial-gradient(circle,rgba(255,87,34,0.35),transparent_65%)]"
      />

      <div className="relative mx-auto flex w-full max-w-[480px] flex-col items-center px-4 pb-12 pt-14">
        <div className="rounded-full bg-accent/25 p-1.5">
          <Image
            src="/images/veltrix-avatar.png"
            alt="Logo da Veltrix"
            width={112}
            height={112}
            priority
            className="size-28 rounded-full border-[3px] border-accent"
          />
        </div>

        <h1 className="m-0 mt-5 font-heading text-[30px] font-bold tracking-[-0.02em]">Veltrix Tecnologia</h1>
        <p className="m-0 mt-2 text-center text-[17px] leading-snug text-white/80">
          Sites e cardápios digitais para bares e restaurantes de São Paulo.
        </p>

        <nav aria-label="Links da Veltrix" className="mt-9 flex w-full flex-col gap-3.5">
          <a
            href={BIO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-16 items-center gap-4 rounded-2xl bg-accent px-5 py-4 font-semibold text-navy shadow-[0_18px_40px_-16px_rgba(255,87,34,0.8)] transition-colors hover:bg-accent-light"
          >
            <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
            <span className="flex-1 text-center text-[17px]">Demonstração grátis</span>
            <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>

          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="group flex min-h-16 items-center gap-4 rounded-2xl bg-white px-5 py-4 font-semibold text-ink transition-colors hover:bg-paper"
            >
              <Icon className="size-6 shrink-0 text-accent-strong" aria-hidden="true" />
              <span className="flex-1 text-center text-[17px]">{label}</span>
              <ArrowUpRight className="size-5 shrink-0 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <ShareButton />
      </div>
    </main>
  )
}
