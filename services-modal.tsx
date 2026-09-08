"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import Image from "next/image"
import { X, ArrowRight, LineChart, Megaphone, ClipboardList, Rocket, Handshake, Settings2 } from "lucide-react"
import { WHATSAPP_URL } from "./lib/site"

interface ServicesModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  {
    icon: LineChart,
    title: "Consultoria Estratégica",
    description:
      "Analisamos o cenário atual da sua empresa e identificamos oportunidades de crescimento, otimização de processos e estratégias alinhadas aos seus objetivos.",
  },
  {
    icon: Megaphone,
    title: "Marketing e Posicionamento",
    description:
      "Desenvolvemos estratégias para fortalecer a presença da sua marca, aumentar sua relevância no mercado e criar conexões mais fortes com seu público.",
  },
  {
    icon: ClipboardList,
    title: "Planejamento e Gestão de Projetos",
    description:
      "Estruturamos projetos com foco em organização, produtividade e resultados, acompanhando cada etapa para garantir eficiência e qualidade.",
  },
  {
    icon: Rocket,
    title: "Desenvolvimento de Negócios",
    description:
      "Auxiliamos na identificação de novas oportunidades de mercado, expansão comercial e estratégias para aumentar competitividade e faturamento.",
  },
  {
    icon: Handshake,
    title: "Relacionamento com Clientes",
    description:
      "Implementamos ações e processos que fortalecem o relacionamento com clientes, aumentam a satisfação e contribuem para a fidelização.",
  },
  {
    icon: Settings2,
    title: "Soluções Personalizadas",
    description:
      "Cada empresa possui necessidades específicas. Desenvolvemos soluções sob medida para atender desafios e objetivos particulares.",
  },
]

export default function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
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
          aria-labelledby="services-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-3 backdrop-blur-sm sm:p-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
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
              <h2 id="services-modal-title" className="relative font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Nossos serviços
              </h2>
            </div>

            <div className="flex flex-col gap-8 overflow-y-auto p-6 sm:p-10">
              <p className="mx-auto max-w-2xl text-pretty text-center text-[15px] leading-relaxed text-muted">
                Na Veltrix, oferecemos soluções estratégicas voltadas para o crescimento, fortalecimento e posicionamento de
                negócios. Nosso foco é entregar resultados por meio de planejamento, inovação e execução eficiente.
              </p>

              <ul className="grid gap-3 sm:grid-cols-2">
                {services.map((service, index) => (
                  <motion.li
                    key={service.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.04 }}
                    className="group flex flex-col gap-3 rounded-xl border border-white/8 bg-background/50 p-5 transition-colors hover:border-accent/30"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <service.icon className="size-5" />
                    </span>
                    <h3 className="text-[15px] font-bold text-foreground">{service.title}</h3>
                    <p className="text-[13px] leading-relaxed text-muted">{service.description}</p>
                  </motion.li>
                ))}
              </ul>

              <div className="flex flex-col items-center gap-4 rounded-xl border border-accent/25 bg-gradient-to-br from-accent/15 to-transparent p-6 text-center sm:p-8">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                  Qual serviço faz mais sentido para sua empresa?
                </h3>
                <p className="text-[14px] text-muted">Vamos conversar para entender seus desafios e encontrar a melhor solução.</p>
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
