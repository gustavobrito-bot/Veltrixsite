import type { Metadata } from "next"
import Image from "next/image"
import { BackBar, StickyCta } from "../_ui"
import { Reveal } from "../reveal"

export const metadata: Metadata = {
  title: "Projetos no ar — Veltrix",
  description: "Cardápios digitais, reservas e sites que a Veltrix colocou no ar.",
}

type Shot = { src: string; alt: string; label: string }

const mizzica: Shot[] = [
  { src: "/images/mizzica-tela-inicio.webp", alt: "Página inicial do cardápio da Mizzica", label: "Início" },
  { src: "/images/mizzica-tela-cardapio.webp", alt: "Lista de antipasti no cardápio da Mizzica", label: "Cardápio" },
  { src: "/images/mizzica-tela-reserva.webp", alt: "Escolha do dia e de pessoas na reserva", label: "Reserva" },
  { src: "/images/mizzica-tela-horario.webp", alt: "Escolha do horário da reserva", label: "Horário" },
  { src: "/images/mizzica-tela-painel.webp", alt: "Painel da equipe editando o cardápio", label: "Painel da equipe" },
]

const adega: Shot[] = [
  { src: "/images/adega-produtos.png", alt: "Produtos da Adega da Mooca com filtros", label: "Produtos" },
  { src: "/images/adega-modal.png", alt: "Detalhe de produto com botão de pedido", label: "Pedido" },
  { src: "/images/adega-localizacao.png", alt: "Área de entrega da Adega da Mooca", label: "Entrega" },
]

function PhoneRail({ shots }: { shots: Shot[] }) {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none]">
      {shots.map((s) => (
        <figure key={s.src} className="m-0 flex shrink-0 snap-center flex-col items-center gap-3">
          <div className="w-[230px] rounded-[38px] bg-black p-2.5 shadow-[0_30px_60px_-25px_rgba(255,87,34,0.6)] ring-1 ring-white/15">
            <div className="relative aspect-[390/844] overflow-hidden rounded-[30px]">
              <Image src={s.src} alt={s.alt} fill sizes="230px" className="object-cover object-top" />
            </div>
          </div>
          <figcaption className="font-code text-xs tracking-[0.1em] text-white/60">{s.label.toUpperCase()}</figcaption>
        </figure>
      ))}
    </div>
  )
}

function BrowserRail({ shots }: { shots: Shot[] }) {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none]">
      {shots.map((s) => (
        <figure key={s.src} className="m-0 flex w-[86%] shrink-0 snap-center flex-col gap-3">
          <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-white/15">
            <div className="flex h-7 items-center gap-1.5 bg-[#e8eaee] px-3">
              <span className="size-2 rounded-full bg-[#ff5f57]" />
              <span className="size-2 rounded-full bg-[#febc2e]" />
              <span className="size-2 rounded-full bg-[#28c840]" />
            </div>
            <div className="relative aspect-[16/10]">
              <Image src={s.src} alt={s.alt} fill sizes="90vw" className="object-cover object-top" />
            </div>
          </div>
          <figcaption className="font-code text-xs tracking-[0.1em] text-white/60">{s.label.toUpperCase()}</figcaption>
        </figure>
      ))}
    </div>
  )
}

export default function Projetos() {
  return (
    <main className="min-h-dvh bg-navy pb-32 font-body text-white">
      <BackBar />
      <div className="mx-auto max-w-[560px] px-4">
        <header className="pb-8 pt-10">
          <span className="font-code text-xs tracking-[0.14em] text-accent-light">PROJETOS NO AR</span>
          <h1 className="m-0 mt-3 font-heading text-[40px] font-bold leading-[1.02] tracking-[-0.03em]">
            Arraste e veja o que já <span className="text-accent">construímos</span>.
          </h1>
          <p className="m-0 mt-4 text-[17px] leading-relaxed text-white/75">Telas reais, do jeito que o cliente usa no celular.</p>
        </header>

        <Reveal>
          <section className="border-t border-white/10 py-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="m-0 font-heading text-[28px] font-bold">Mizzica</h2>
                <p className="m-0 mt-1 text-sm text-white/60">Restaurante siciliano · Mooca, SP</p>
              </div>
              <span className="rounded-full bg-accent/15 px-3 py-1.5 text-xs font-semibold text-accent-light">
                Cardápio + reservas
              </span>
            </div>
            <PhoneRail shots={mizzica} />
            <p className="m-0 mt-3 text-[15px] leading-relaxed text-white/75">
              Cardápio digital com busca, reserva com confirmação pelo WhatsApp e um painel onde a equipe muda preços e
              acompanha a lotação do dia.
            </p>
          </section>
        </Reveal>

        <Reveal>
          <section className="border-t border-white/10 py-8">
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="m-0 font-heading text-[28px] font-bold">Adega da Mooca</h2>
                <p className="m-0 mt-1 text-sm text-white/60">Adega e conveniência · Mooca, SP</p>
              </div>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">Site com pedido</span>
            </div>
            <BrowserRail shots={adega} />
            <p className="m-0 mt-3 text-[15px] leading-relaxed text-white/75">
              Cardápio online com filtros, carrinho e pedido direto pelo WhatsApp, com a área de entrega da região.
            </p>
          </section>
        </Reveal>
      </div>
      <StickyCta label="Quero um projeto assim" message="Oi! Vim pelo Instagram, vi os projetos da Veltrix e quero um assim para o meu negócio." />
    </main>
  )
}
