import type { Metadata } from "next"
import type { CSSProperties } from "react"
import Image from "next/image"
import { ArrowUpRight, Briefcase, Globe, Layers, MessageCircle, Route } from "lucide-react"
import { ShareButton } from "./share-button"
import a from "./links.module.css"

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
  const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties
  return (
    <main className="relative min-h-dvh overflow-hidden bg-navy font-body text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]"
      />
      <div aria-hidden="true" className={`${a.orb} ${a.orbA}`} />
      <div aria-hidden="true" className={`${a.orb} ${a.orbB}`} />

      <div className="relative mx-auto flex w-full max-w-[480px] flex-col items-center px-4 pb-12 pt-14">
        <div className={a.rise} style={d(0)}>
          <div className={a.avatar}>
            <Image
              src="/images/veltrix-avatar.png"
              alt="Logo da Veltrix"
              width={112}
              height={112}
              priority
              className="size-28 rounded-full border-[3px] border-navy"
            />
          </div>
        </div>

        <h1 className={`${a.rise} m-0 mt-5 font-heading text-[30px] font-bold tracking-[-0.02em]`} style={d(120)}>
          Veltrix Tecnologia
        </h1>
        <p className={`${a.rise} m-0 mt-2 text-center text-[17px] leading-snug text-white/80`} style={d(200)}>
          Sites e cardápios digitais para bares e restaurantes de São Paulo.
        </p>
        <span
          className={`${a.rise} mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[13px] text-white/85`}
          style={d(280)}
        >
          <span className={a.dot} aria-hidden="true" /> Atendimento pelo WhatsApp
        </span>

        <nav aria-label="Links da Veltrix" className="mt-8 flex w-full flex-col gap-3.5">
          <a
            href={BIO_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={d(380)}
            className={`${a.rise} ${a.btn} ${a.cta} group flex min-h-16 items-center gap-4 rounded-2xl bg-accent px-5 py-4 font-semibold text-navy hover:bg-accent-light`}
          >
            <MessageCircle className={`${a.icon} size-6 shrink-0`} aria-hidden="true" />
            <span className="flex-1 text-center text-[17px]">Demonstração grátis</span>
            <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>

          {links.map(({ href, label, icon: Icon }, i) => (
            <a
              key={href}
              href={href}
              style={d(470 + i * 90)}
              className={`${a.rise} ${a.btn} group flex min-h-16 items-center gap-4 rounded-2xl bg-white px-5 py-4 font-semibold text-ink hover:bg-paper`}
            >
              <Icon className={`${a.icon} size-6 shrink-0 text-accent-strong`} aria-hidden="true" />
              <span className="flex-1 text-center text-[17px]">{label}</span>
              <ArrowUpRight className="size-5 shrink-0 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className={a.rise} style={d(900)}>
          <ShareButton />
        </div>
      </div>
    </main>
  )
}
