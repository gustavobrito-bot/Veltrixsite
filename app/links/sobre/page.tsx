import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BarChart3, Globe, UtensilsCrossed } from "lucide-react"
import { BackBar, StickyCta } from "../_ui"
import { Reveal } from "../reveal"

export const metadata: Metadata = {
  title: "Conheça a Veltrix",
  description: "Quem atende é quem constrói. Conheça a Veltrix e o Gustavo, fundador.",
}

const what = [
  { icon: Globe, title: "Sites que viram cliente", text: "Rápidos no celular, aparecem no Google e levam até o WhatsApp." },
  { icon: UtensilsCrossed, title: "Cardápio digital", text: "QR Code na mesa, pedido e reserva direto no WhatsApp." },
  { icon: BarChart3, title: "Painéis e automação", text: "Ver o que vende, quando vende e onde está perdendo venda." },
]

export default function Sobre() {
  return (
    <main className="min-h-dvh bg-[#fff6f1] pb-32 font-body text-ink">
      <BackBar dark={false} />

      <section className="relative overflow-hidden bg-accent px-4 pb-24 pt-12 text-navy">
        <div aria-hidden="true" className="absolute -right-24 -top-24 size-80 rounded-full bg-white/15" />
        <div className="relative mx-auto max-w-[560px]">
          <span className="font-code text-xs tracking-[0.14em]">CONHEÇA A VELTRIX</span>
          <h1 className="m-0 mt-3 font-heading text-[44px] font-bold leading-[0.98] tracking-[-0.03em]">
            Quem atende é quem constrói.
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[560px] px-4">
        <div className="-mt-16 flex items-end gap-4">
          <div className="relative size-32 shrink-0 overflow-hidden rounded-3xl bg-navy ring-4 ring-[#fff6f1]">
            <Image src="/images/gustavo-brito.png" alt="Gustavo Brito, fundador da Veltrix" fill sizes="128px" className="object-cover" priority />
          </div>
          <div className="pb-2">
            <div className="font-heading text-[22px] font-bold">Gustavo Brito</div>
            <div className="text-sm text-slate">Fundador da Veltrix</div>
          </div>
        </div>

        <Reveal>
          <p className="m-0 mt-8 text-[18px] leading-relaxed text-[#3a4256]">
            Formado em Marketing, vim do trade marketing e de dados para a indústria, e programo os projetos de ponta a
            ponta. Você fala direto comigo, do orçamento à entrega.
          </p>
          <ul className="m-0 mt-5 flex list-none flex-wrap gap-2 p-0 text-[13px] font-medium">
            <li className="rounded-full bg-white px-3.5 py-2">Marketing · São Judas</li>
            <li className="rounded-full bg-white px-3.5 py-2">Trade marketing &amp; dados</li>
            <li className="rounded-full bg-white px-3.5 py-2">Next.js · React Native · Cloud</li>
          </ul>
        </Reveal>

        <section className="mt-14">
          <h2 className="m-0 font-heading text-[26px] font-bold">O que a Veltrix faz</h2>
          <div className="mt-5 flex flex-col gap-3">
            {what.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="flex gap-4 rounded-2xl bg-white p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="font-semibold">{title}</div>
                    <div className="mt-1 text-[15px] leading-relaxed text-slate">{text}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Link
          href="/"
          className="mt-8 flex items-center justify-between rounded-2xl border-2 border-navy px-5 py-4 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
        >
          Ver o site completo
          <ArrowUpRight className="size-5" aria-hidden="true" />
        </Link>
      </div>

      <StickyCta label="Falar com o Gustavo" message="Oi, Gustavo! Vim pelo Instagram e quero conhecer melhor a Veltrix." />
    </main>
  )
}
