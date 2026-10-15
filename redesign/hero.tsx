import { ArrowRight, Check, Box } from "lucide-react"
import { WHATSAPP_URL } from "../lib/site"

const promises = ["Resposta em até 24h", "Proposta com preço fechado", "Atendimento direto com quem constrói"]

const menuItems = [
  { name: "Porção da casa", tone: "bg-[#ffe3d9]" },
  { name: "Hambúrguer artesanal", tone: "bg-[#dde4f3]" },
  { name: "Drink autoral", tone: "bg-[#fff1c9]" },
]

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
              className="rounded-full border border-white/35 px-6 py-[15px] text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10"
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

        {/* Mockup do cardápio digital */}
        <div className="relative flex flex-[1_1_340px] justify-center" aria-hidden="true">
          <div className="w-[300px] rounded-[40px] border border-white/10 bg-ink p-3 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="overflow-hidden rounded-[30px] bg-white text-ink">
              <div className="bg-paper px-[18px] pb-3.5 pt-[22px]">
                <div className="font-code text-[10px] tracking-[0.1em] text-slate">CARDÁPIO · MESA 07</div>
                <div className="mt-1 font-heading text-[22px] font-bold">Seu bar aqui</div>
                <div className="mt-3 flex gap-1.5 text-[11px]">
                  <span className="rounded-full bg-navy px-2.5 py-1.5 font-semibold text-white">Petiscos</span>
                  <span className="rounded-full border border-[#dcdfe5] bg-white px-2.5 py-1.5">Drinks</span>
                  <span className="rounded-full border border-[#dcdfe5] bg-white px-2.5 py-1.5">Chopp</span>
                </div>
              </div>
              <div className="flex flex-col px-[18px] pb-[18px] pt-2">
                {menuItems.map((item, i) => (
                  <div
                    key={item.name}
                    className={`flex items-center gap-3 py-3 ${i < menuItems.length - 1 ? "border-b border-[#eef0f3]" : ""}`}
                  >
                    <div className={`size-[54px] shrink-0 rounded-xl ${item.tone}`} />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold">{item.name}</div>
                      <div className="text-xs text-slate">R$ 00,00</div>
                    </div>
                    <span className="rounded-lg bg-navy px-2 py-1.5 text-[10px] font-semibold text-white">Ver na mesa</span>
                  </div>
                ))}
                <div className="mt-1.5 rounded-[14px] bg-[#1f8a4c] p-3 text-center text-[13px] font-semibold text-white">
                  Pedir pelo WhatsApp · 2 itens
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-7 left-0 hidden max-w-[220px] items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-ink shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] sm:flex">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-accent">
              <Box className="size-[18px] text-navy" />
            </span>
            <span className="text-[13px] leading-snug">
              <strong>Prato em 3D/AR</strong>
              <br />o cliente vê na mesa pela câmera
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
