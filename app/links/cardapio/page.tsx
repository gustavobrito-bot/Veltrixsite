import type { Metadata } from "next"
import { CalendarCheck, PencilLine, QrCode } from "lucide-react"
import { BackBar, StickyCta } from "../_ui"
import { Reveal } from "../reveal"
import { MenuDemo } from "./demo"

export const metadata: Metadata = {
  title: "Experimente um cardápio digital — Veltrix",
  description: "Teste na hora um cardápio digital com pedido direto no WhatsApp.",
}

const extras = [
  { icon: QrCode, title: "QR Code na mesa", text: "O cliente aponta a câmera e o cardápio abre. Sem baixar aplicativo." },
  { icon: CalendarCheck, title: "Reservas com confirmação", text: "Escolhe dia e horário, e a confirmação chega pelo WhatsApp." },
  { icon: PencilLine, title: "Preço sempre certo", text: "Mudou um preço? Nosso time de suporte atualiza pra você." },
]

export default function Cardapio() {
  return (
    <main className="min-h-dvh bg-paper pb-32 font-body text-ink">
      <BackBar dark={false} />
      <div className="mx-auto max-w-[560px] px-4">
        <header className="pb-8 pt-10 text-center">
          <span className="font-code text-xs tracking-[0.14em] text-accent-strong">EXPERIMENTE AGORA</span>
          <h1 className="m-0 mt-3 font-heading text-[38px] font-bold leading-[1.04] tracking-[-0.03em]">
            Faça um pedido de <span className="text-accent-strong">mentirinha</span>.
          </h1>
          <p className="m-0 mt-4 text-[17px] leading-relaxed text-slate">
            Navegue, busque e adicione itens. No fim, veja a mensagem que chegaria no WhatsApp do restaurante.
          </p>
        </header>

        <MenuDemo />
        <p className="m-0 mt-3 text-center font-code text-[11px] tracking-[0.1em] text-slate">
          DEMONSTRAÇÃO · RESTAURANTE FICTÍCIO · NENHUM PEDIDO É ENVIADO
        </p>

        <section className="mt-14 flex flex-col gap-4">
          <h2 className="m-0 font-heading text-[26px] font-bold">E ainda tem mais</h2>
          {extras.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="flex gap-4 rounded-2xl bg-white p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/12 text-accent-strong">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="mt-1 text-[15px] leading-relaxed text-slate">{text}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </section>
      </div>
      <StickyCta label="Quero no meu restaurante" message="Oi! Vim pelo Instagram, testei o cardápio digital e quero um para o meu negócio." />
    </main>
  )
}
