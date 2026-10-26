"use client"

import { useEffect, useRef, useState } from "react"
import { FileCheck2, Hammer, MessageCircle, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Conversa",
    text: "Você chama no WhatsApp e conta como funciona o seu negócio. A gente entende o que está travando suas vendas.",
    visual: (
      <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-[#005c4b] px-3.5 py-2.5 text-sm text-white">
        Oi! Quero um cardápio digital pro meu bar 🍻
      </div>
    ),
  },
  {
    icon: FileCheck2,
    title: "Proposta fechada",
    text: "Escopo, prazo e preço por escrito, antes de começar. Sem surpresa no meio do caminho.",
    visual: (
      <div className="flex flex-col gap-2 rounded-xl bg-white p-4 text-ink">
        {["Escopo", "Prazo", "Preço"].map((t) => (
          <div key={t} className="flex items-center justify-between text-sm">
            <span className="font-semibold">{t}</span>
            <span className="h-2 w-24 rounded-full bg-paper" />
          </div>
        ))}
      </div>
    ),
  },
  {
    icon: Hammer,
    title: "Construção",
    text: "Você acompanha uma prévia online e aprova cada etapa antes de ir pro ar.",
    visual: (
      <div className="rounded-xl bg-white/10 p-4">
        <div className="mb-2 flex justify-between font-code text-[11px] text-white/70">
          <span>PRÉVIA</span>
          <span>EM APROVAÇÃO</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/15">
          <div className="h-full w-3/4 rounded-full bg-accent" />
        </div>
      </div>
    ),
  },
  {
    icon: Rocket,
    title: "No ar + suporte",
    text: "Publicamos e nosso time de suporte cuida das atualizações depois da entrega.",
    visual: (
      <div className="flex items-center gap-3 rounded-xl bg-[#1f8a4c] px-4 py-3 text-sm font-semibold text-white">
        <span className="size-2.5 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.3)]" /> Seu site está no ar
      </div>
    ),
  },
]

export function Timeline() {
  const ref = useRef<HTMLOListElement>(null)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(-1)

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const mid = window.innerHeight * 0.6
      const p = Math.min(1, Math.max(0, (mid - r.top) / r.height))
      setProgress(p)
      const items = Array.from(el.children) as HTMLElement[]
      setActive(items.filter((li) => li.getBoundingClientRect().top < mid).length - 1)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  return (
    <div className="relative">
      <div className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-white/10" aria-hidden="true">
        <div className="w-full bg-accent transition-[height] duration-150" style={{ height: `${progress * 100}%` }} />
      </div>
      <ol ref={ref} className="m-0 flex list-none flex-col gap-14 p-0">
        {steps.map(({ icon: Icon, title, text, visual }, i) => {
          const on = i <= active
          return (
            <li
              key={title}
              className="relative pl-16 transition-all duration-500"
              style={{ opacity: on ? 1 : 0.35, transform: on ? "none" : "translateX(12px)" }}
            >
              <span
                className={`absolute left-0 top-0 flex size-12 items-center justify-center rounded-full border-2 transition-colors duration-500 ${
                  on ? "border-accent bg-accent text-navy" : "border-white/20 bg-navy text-white/60"
                }`}
              >
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-code text-xs tracking-[0.12em] text-accent-light">PASSO 0{i + 1}</span>
              <h2 className="m-0 mt-1 font-heading text-[28px] font-bold">{title}</h2>
              <p className="m-0 mt-2 text-[16px] leading-relaxed text-white/75">{text}</p>
              <div className="mt-5">{visual}</div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
