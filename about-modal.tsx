"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { X, ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "./lib/site"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

const paragraphs = [
  "A Veltrix nasceu com o propósito de transformar desafios em oportunidades por meio de estratégias inteligentes, inovação e foco em resultados.",
  "Acreditamos que cada negócio possui um potencial único de crescimento. Por isso, trabalhamos lado a lado com nossos clientes para desenvolver soluções que gerem valor real, fortaleçam marcas e impulsionem resultados sustentáveis.",
  "Nossa atuação é baseada em três pilares fundamentais: compromisso, excelência e evolução contínua. Buscamos entender profundamente as necessidades de cada cliente para entregar soluções personalizadas, eficientes e alinhadas aos objetivos de negócio.",
  "Mais do que prestar serviços, a Veltrix constrói parcerias duradouras, pautadas pela transparência, confiança e dedicação. Nosso objetivo é ser um agente de crescimento para empresas que desejam se destacar em mercados cada vez mais competitivos.",
  "Na Veltrix, acreditamos que grandes resultados são construídos com estratégia, execução e visão de futuro.",
]

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92svh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Fechar"
              className="absolute right-3 top-3 z-20 flex size-10 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-accent sm:right-5 sm:top-5"
            >
              <X className="size-5" />
            </button>

            <div className="relative flex flex-col items-center gap-3 overflow-hidden border-b border-white/8 px-6 py-10 text-center sm:py-12">
              <div aria-hidden className="grid-bg absolute inset-0" />
              <div aria-hidden className="absolute -top-20 left-1/2 size-56 -translate-x-1/2 rounded-full bg-accent/25 blur-3xl" />
              <Image
                src="/veltrix-logo.png"
                alt="Veltrix Tecnologia"
                width={180}
                height={101}
                className="logo-blend relative h-12 w-auto"
              />
              <h2 id="about-modal-title" className="relative font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Sobre nós
              </h2>
            </div>

            <div className="flex flex-col gap-8 overflow-y-auto p-6 sm:p-10">
              <div className="flex flex-col gap-4 text-pretty text-[15px] leading-relaxed text-muted">
                {paragraphs.map((text, i) => (
                  <p key={i} className={i === 0 ? "text-base text-foreground/90 sm:text-lg" : undefined}>
                    {text}
                  </p>
                ))}
              </div>

              <div className="flex flex-col items-start gap-4 border-t border-white/8 pt-6">
                <p className="text-[14px] text-muted">Pronto para começar uma parceria que gera resultados?</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom group w-full sm:w-auto">
                  Fale com um especialista
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
