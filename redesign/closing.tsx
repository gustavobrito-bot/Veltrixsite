import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"
import {
  WHATSAPP_URL,
  WHATSAPP_NUMBER_DISPLAY,
  CONTACT_EMAIL,
  INSTAGRAM_URL,
  LEGAL,
  LEGAL_IDENTIFICATION,
} from "../lib/site"
import { CookiePreferencesButton } from "./cookie-consent"

const NEW_TAB = <span className="sr-only"> (abre em nova aba)</span>

export function ProofStrip() {
  return (
    <section aria-label="Projetos desenvolvidos" className="bg-white font-body">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-x-12 gap-y-5 px-5 py-7 sm:px-6">
        <span className="font-code text-xs tracking-[0.12em] text-slate">PROJETOS DESENVOLVIDOS</span>
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
    <>
      <section id="contato" aria-labelledby="contato-titulo" className="bg-navy font-body text-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-end justify-between gap-10 px-5 pb-16 pt-24 sm:px-6 lg:pt-28">
          <h2
            id="contato-titulo"
            className="m-0 max-w-[760px] font-heading text-[clamp(2.3rem,5vw,4.4rem)] font-bold leading-[1.02] tracking-[-0.03em]"
          >
            Bora colocar seu negócio para <span className="text-accent">vender online</span>?
          </h2>
          <div className="flex flex-col items-start gap-3.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-[18px] text-[17px] font-semibold text-navy transition-colors hover:bg-accent-light"
            >
              Chamar no WhatsApp{NEW_TAB}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-8 py-[18px] text-[17px] font-medium text-white transition-colors hover:bg-white/20"
            >
              <Instagram className="size-5" aria-hidden="true" />
              Seguir no Instagram{NEW_TAB}
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

/** Rodapé com contatos, identificação legal e links das políticas. Usado em todas as páginas. */
export function SiteFooter() {
  return (
    <footer className="bg-navy font-body text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 border-t border-white/10 px-5 pb-12 pt-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-6 text-sm text-white/75">
          <Image src="/veltrix-logo-transparent.png" alt="Veltrix Tecnologia" width={160} height={90} className="h-20 w-auto" />
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            WhatsApp {WHATSAPP_NUMBER_DISPLAY}
            {NEW_TAB}
          </a>
          {CONTACT_EMAIL && (
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white">
              {CONTACT_EMAIL}
            </a>
          )}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Instagram className="size-4" aria-hidden="true" />
            @veltrixtecnologia{NEW_TAB}
          </a>
        </div>

        <nav aria-label="Documentos legais">
          <ul className="m-0 flex list-none flex-wrap gap-x-8 gap-y-3 p-0 text-sm text-white/75">
            <li>
              <Link href="/privacidade" className="underline-offset-4 hover:text-white hover:underline">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="underline-offset-4 hover:text-white hover:underline">
                Termos de Serviço
              </Link>
            </li>
            <li>
              <Link href="/cancelamento-e-reembolso" className="underline-offset-4 hover:text-white hover:underline">
                Cancelamento e Reembolso
              </Link>
            </li>
            <li>
              <CookiePreferencesButton className="underline-offset-4 hover:text-white hover:underline" />
            </li>
          </ul>
        </nav>

        <p className="m-0 text-[13px] leading-relaxed text-white/75">
          {LEGAL_IDENTIFICATION}. © 2026 {LEGAL.brand}. Atendimento pelo WhatsApp e Instagram.
        </p>
      </div>
    </footer>
  )
}
