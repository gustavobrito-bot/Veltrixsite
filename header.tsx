"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { WHATSAPP_URL } from "./lib/site"

const navItems = [
  { label: "Quem somos", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Cases", href: "#portfolio" },
  { label: "Soluções", href: "#ecosystem" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const solid = scrolled || isOpen

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,padding] duration-300 ${
        solid ? "bg-secondary/95 shadow-[0_10px_30px_-20px_rgba(15,29,58,0.6)] backdrop-blur-xl" : "bg-transparent pt-3 sm:pt-5 lg:pt-6"
      }`}
    >
      <nav aria-label="Principal" className="container-x flex h-16 items-center justify-between sm:h-[72px]">
        <a href="#hero" className="flex items-center" aria-label="Veltrix Tecnologia – início">
          <Image
            src="/veltrix-logo.png"
            alt="Veltrix Tecnologia"
            width={160}
            height={90}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 text-[15px] font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom ml-3 px-6 py-2.5 text-xs"
          >
            Contato
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>

        <button
          type="button"
          className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur md:hidden"
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
            className="overflow-hidden border-t border-white/10 bg-secondary md:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  {item.label}
                  <ArrowUpRight className="size-4 text-white/60" />
                </motion.a>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom mt-3 w-full"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
