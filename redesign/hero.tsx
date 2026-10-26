import { ArrowRight, Check } from "lucide-react"
import { WHATSAPP_URL } from "../lib/site"
import ReserveAnimation from "./reserve-animation"

const promises = ["Resposta em até 24h", "Proposta com preço fechado", "Atendimento direto com quem constrói"]

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy font-body text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"
      />
      <div className="relative mx-auto flex max-w-[1240px] flex-wrap items-center gap-14 px-5 pb-24 pt-14 sm:px-6 lg:pt-20">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-7">
          <span className="font-code text-[13px] tracking-[0.12em] text-accent-light">ESTÚDIO DIGITAL · SÃO PAULO</span>
          <h1 className="m-0 font-heading text-[clamp(2.5rem,5.4vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Sites e cardápios digitais que fazem o cliente <span className="text-accent">pedir</span>.
          </h1>
          <p className="m-0 max-w-[560px] text-[18px] leading-relaxed text-white/80 sm:text-[19px]">
            A Veltrix cria a presença digital de bares, restaurantes e comércios de São Paulo: site rápido, cardápio com
            pedido direto no WhatsApp e painéis para você ver o que realmente vende.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-4 text-base font-semibold text-navy transition-colors hover:bg-accent-light"
            >
              Quero um orçamento
              <ArrowRight className="size-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#cases"
              className="rounded-full bg-white/10 px-6 py-4 text-base font-medium text-white transition-colors hover:bg-white/20"
            >
              Ver projetos no ar
            </a>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 pt-3 text-sm text-white/75">
            {promises.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Check className="size-4 text-accent-light" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Ilustração animada: reserva no celular → site do restaurante */}
        <div className="relative flex min-w-0 flex-[1_1_400px] justify-center">
          <ReserveAnimation />
        </div>
      </div>
    </section>
  )
}
