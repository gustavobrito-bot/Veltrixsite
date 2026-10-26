import type { Metadata } from "next"
import { BackBar, StickyCta } from "../_ui"
import { Timeline } from "./timeline"

export const metadata: Metadata = {
  title: "Como funciona — Veltrix",
  description: "Do primeiro oi ao site no ar, em quatro passos.",
}

export default function ComoFunciona() {
  return (
    <main className="min-h-dvh bg-navy pb-40 font-body text-white">
      <BackBar />
      <div className="mx-auto max-w-[560px] px-4">
        <header className="pb-12 pt-10">
          <span className="font-code text-xs tracking-[0.14em] text-accent-light">COMO FUNCIONA</span>
          <h1 className="m-0 mt-3 font-heading text-[40px] font-bold leading-[1.02] tracking-[-0.03em]">
            Do primeiro “oi” ao <span className="text-accent">site no ar</span>.
          </h1>
          <p className="m-0 mt-4 text-[17px] leading-relaxed text-white/75">Role a tela e acompanhe cada passo.</p>
        </header>
        <Timeline />
      </div>
      <StickyCta label="Começar pelo passo 1" message="Oi! Vim pelo Instagram, vi como funciona e quero começar pelo passo 1: a conversa." />
    </main>
  )
}
