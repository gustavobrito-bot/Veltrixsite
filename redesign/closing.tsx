import Image from "next/image"
import { WHATSAPP_URL, CONTACT_EMAIL, INSTAGRAM_URL } from "../lib/site"

export function ProofStrip() {
  return (
    <section className="border-b border-line bg-white font-body">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-12 gap-y-5 px-5 py-7 sm:px-6">
        <span className="font-code text-xs tracking-[0.12em] text-slate">PROJETOS NO AR</span>
        <ul className="m-0 flex list-none flex-wrap items-center gap-x-12 gap-y-3 p-0 font-heading text-2xl font-bold text-navy">
          <li>Adega da Mooca</li>
          <li>Angel Luxe</li>
        </ul>
        <span className="text-sm text-slate">Next.js · Vercel · WhatsApp · IA</span>
      </div>
    </section>
  )
}

export function ClosingCta() {
  return (
    <footer id="contato" className="bg-navy font-body text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-16 px-5 pb-14 pt-24 sm:px-6 lg:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <h2 className="m-0 max-w-[760px] font-heading text-[clamp(2.3rem,5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
            Bora colocar seu negócio para <span className="text-accent">vender online</span>?
          </h2>
          <div className="flex flex-col items-start gap-3.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-[18px] text-[17px] font-semibold text-navy transition-colors hover:bg-accent-light"
            >
              Chamar no WhatsApp
            </a>
            <span className="text-sm text-white/75">Condição especial de lançamento para os primeiros clientes.</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 border-t border-white/15 pt-8 text-sm text-white/75">
          <Image src="/veltrix-logo-transparent.png" alt="Veltrix Tecnologia" width={160} height={90} className="h-20 w-auto" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            +55 11 98318-2274
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
            {CONTACT_EMAIL}
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            @veltrixtecnologia
          </a>
          <span>São Paulo · © 2026 Veltrix Tecnologia</span>
        </div>
      </div>
    </footer>
  )
}
