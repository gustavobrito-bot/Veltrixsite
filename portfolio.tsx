"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Palette, Globe, Share2, Bot, BarChart3, Layers, ChevronDown, Check } from "lucide-react"
import SectionHeading from "./section-heading"

const services = [
  {
    icon: Palette,
    name: "Branding & Identidade",
    desc: "Construção de marcas memoráveis com identidade visual estratégica e posicionamento diferenciado.",
    details: ["Logotipo & símbolo", "Manual de identidade", "Tipografia exclusiva", "Estudo de cores"],
  },
  {
    icon: Globe,
    name: "Desenvolvimento Web",
    desc: "Sites institucionais e landing pages premium, modernos e responsivos que convertem.",
    details: ["Sites institucionais", "Landing pages", "E-commerce premium", "Otimização SEO"],
  },
  {
    icon: Share2,
    name: "Social Media",
    desc: "Gestão estratégica de redes sociais com conteúdo que engaja e posiciona sua marca.",
    details: ["Planejamento mensal", "Design de ativos", "Edição de reels", "Gestão de anúncios"],
  },
  {
    icon: Bot,
    name: "IA & Automação",
    desc: "Soluções com IA integrada e sistemas que automatizam processos e escalam operações.",
    details: ["Chatbots inteligentes", "Automação de CRM", "Processos internos", "Análise preditiva"],
  },
  {
    icon: BarChart3,
    name: "Dashboards & BI",
    desc: "Painéis personalizados para visualizar dados e tomar decisões estratégicas.",
    details: ["Visualização de KPIs", "Integração de APIs", "Relatórios em tempo real", "Mineração de dados"],
  },
  {
    icon: Layers,
    name: "Design Estratégico",
    desc: "Design com propósito: cada elemento pensado para comunicar, converter e criar valor.",
    details: ["UX research", "UI design de interfaces", "Prototipagem de alta fidelidade", "Design systems"],
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative bg-card/40 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          label="O que fazemos"
          title={
            <>
              Nossas <span className="text-accent">soluções</span>
            </>
          }
          description="Cada solução é desenvolvida com estratégia, design premium e tecnologia de ponta para gerar resultados reais."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            const isActive = activeIndex === i
            const panelId = `service-panel-${i}`

            return (
              <motion.li
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.06 }}
                className={`surface group relative flex flex-col overflow-hidden transition-colors duration-300 ${
                  isActive ? "border-accent/40" : "hover:border-white/15"
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  className="flex w-full flex-col items-start gap-5 p-6 text-left sm:p-7"
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <span
                      className={`flex size-12 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-accent/40 bg-accent text-white shadow-[0_10px_30px_-10px_rgba(255,87,34,0.8)]"
                          : "border-white/10 bg-background/60 text-accent"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <ChevronDown
                      className={`mt-3 size-4 text-muted transition-transform duration-300 ${isActive ? "rotate-180 text-accent" : ""}`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
                      {service.name}
                    </h3>
                    <p className="text-pretty text-[14px] leading-relaxed text-muted">{service.desc}</p>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <ul className="grid gap-2 border-t border-white/8 px-6 pb-6 pt-5 sm:px-7">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2.5 text-[13px] text-foreground/85">
                            <Check className="size-3.5 shrink-0 text-accent" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
