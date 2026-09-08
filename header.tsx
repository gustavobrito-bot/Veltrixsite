"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { WHATSAPP_URL } from "./lib/site"

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || isOpen ? "border-b border-white/8 bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav aria-label="Principal" className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <a href="#hero" className="flex items-center" aria-label="Veltrix Tecnologia – início">
          <Image
            src="/veltrix-logo.png"
            alt="Veltrix Tecnologia"
            width={160}
            height={90}
            className="logo-blend h-9 w-auto sm:h-10"
            priority
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom ml-3 px-5 py-2.5 text-xs"
          >
            Conversar
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground md:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-white/8 md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-white/5"
                >
                  {item.label}
                  <ArrowUpRight className="size-4 text-muted" />
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom mt-3 w-full"
                onClick={() => setIsOpen(false)}
              >
                Conversar com o time
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
