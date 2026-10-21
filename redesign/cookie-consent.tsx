"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Analytics } from "@vercel/analytics/next"

/**
 * Consentimento de cookies / medição (LGPD).
 *
 * - O site não usa cookies de publicidade nem de rastreamento.
 * - A única coisa opcional é a medição de audiência (Vercel Web Analytics, sem cookies),
 *   que SÓ é carregada depois que o visitante clica em "Aceitar".
 * - A escolha fica salva no navegador do visitante (armazenamento necessário).
 * - "Recusar" tem o mesmo destaque que "Aceitar", e a escolha pode ser alterada
 *   a qualquer momento pelo link "Preferências de cookies" no rodapé.
 *
 * Se no futuro entrar Google Analytics, Meta Pixel ou Google Tag, eles devem ser
 * carregados no mesmo ponto do <Analytics />, ou seja, só com consentimento.
 */

const STORAGE_KEY = "veltrix-consent-v1"
const OPEN_EVENT = "veltrix:abrir-preferencias-cookies"

type Consent = { analytics: boolean; date: string }

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return typeof parsed?.analytics === "boolean" ? parsed : null
  } catch {
    return null
  }
}

function saveConsent(consent: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
  } catch {
    // Navegação privada ou armazenamento bloqueado: a escolha vale só para esta visita.
  }
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent | null>(null)
  const [open, setOpen] = useState(false)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const openedByUser = useRef(false)

  useEffect(() => {
    const saved = readConsent()
    setConsent(saved)
    if (!saved) setOpen(true)

    const handleOpen = () => {
      openedByUser.current = true
      setOpen(true)
    }
    window.addEventListener(OPEN_EVENT, handleOpen)
    return () => window.removeEventListener(OPEN_EVENT, handleOpen)
  }, [])

  // Quando o visitante abre as preferências pelo rodapé, o foco vai para o banner (teclado/leitor de tela).
  useEffect(() => {
    if (open && openedByUser.current) {
      titleRef.current?.focus()
      openedByUser.current = false
    }
  }, [open])

  const choose = useCallback(
    (analytics: boolean) => {
      const hadAnalytics = consent?.analytics === true
      const next = { analytics, date: new Date().toISOString() }
      saveConsent(next)
      setConsent(next)
      setOpen(false)
      // Revogação: recarrega para garantir que o script de medição já carregado seja removido.
      if (hadAnalytics && !analytics) window.location.reload()
    },
    [consent],
  )

  return (
    <>
      {consent?.analytics && <Analytics />}

      {open && (
        <div
          role="region"
          aria-labelledby="cookies-titulo"
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 font-body sm:px-6 sm:pb-6"
        >
          <div className="mx-auto flex max-w-[960px] flex-col gap-4 rounded-2xl bg-white p-5 text-ink shadow-[0_20px_60px_-15px_rgba(11,18,32,0.45)] ring-1 ring-black/5 sm:p-6 md:flex-row md:items-end md:gap-8">
            <div className="flex flex-col gap-2">
              <h2
                id="cookies-titulo"
                ref={titleRef}
                tabIndex={-1}
                className="m-0 font-heading text-lg font-bold focus:outline-none"
              >
                Privacidade e cookies
              </h2>
              <p className="m-0 text-[15px] leading-relaxed text-[#3a4256]">
                Usamos só o armazenamento necessário para o site funcionar. Com sua permissão, ativamos também uma
                medição de audiência <strong>sem cookies</strong>, que mostra de forma agregada quais páginas são
                visitadas. Você pode mudar sua escolha quando quiser em “Preferências de cookies”, no rodapé.{" "}
                <Link href="/privacidade#cookies" className="font-semibold text-accent-strong underline underline-offset-4">
                  Saiba mais
                </Link>
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <button
                type="button"
                onClick={() => choose(false)}
                className="min-h-11 flex-1 rounded-full border-2 border-navy px-6 py-2.5 text-[15px] font-semibold text-navy transition-colors hover:bg-navy hover:text-white md:flex-none"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => choose(true)}
                className="min-h-11 flex-1 rounded-full border-2 border-navy bg-navy px-6 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink md:flex-none"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/** Botão do rodapé que reabre o banner de preferências. */
export function CookiePreferencesButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={`cursor-pointer bg-transparent p-0 text-inherit ${className}`}
    >
      Preferências de cookies
    </button>
  )
}
