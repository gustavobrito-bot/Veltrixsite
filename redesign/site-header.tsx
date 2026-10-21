"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Menu, X, Instagram } from "lucide-react"
import { WHATSAPP_URL, INSTAGRAM_URL } from "../lib/site"

const navItems = [
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#cases" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "Dúvidas", href: "#faq" },
]

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Esc fecha o menu mobile e devolve o foco ao botão (navegação por teclado).
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 bg-navy/95 font-body text-white backdrop-blur-xl">
      <nav aria-label="Principal" className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-6">
        <a href="#inicio" className="flex items-center" aria-label="Veltrix Tecnologia – início">
          <Image
            src="/veltrix-logo-transparent.png"
            alt=""
            width={160}
            height={90}
            priority
            className="h-[72px] w-auto"
          />
        </a>

        <div className="hidden items-center gap-7 text-[15px] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-white/80 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Veltrix (abre em nova aba)"
            className="flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
          >
            <Instagram className="size-5" aria-hidden="true" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent px-5 py-3 font-semibold text-navy transition-colors hover:bg-accent-light"
          >
            Orçamento no WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex size-11 items-center justify-center rounded-full bg-white/10 md:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      {open && (
        <div id="menu-mobile" className="px-5 pb-6 md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-lg text-white/90"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-3.5 text-lg text-white/90"
              >
                <Instagram className="size-5" aria-hidden="true" />
                @veltrixtecnologia
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex justify-center rounded-full bg-accent px-5 py-4 font-semibold text-navy"
          >
            Orçamento no WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      )}
    </header>
  )
}
