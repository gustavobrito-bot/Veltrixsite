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
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          title={
            <>
              Impulsione sua marca com <br className="hidden sm:block" />
              nossas soluções personalizadas
            </>
          }
          description="Cada solução é desenvolvida com estratégia, design premium e tecnologia de ponta para gerar resultados reais."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                className={`surface group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  isActive ? "border-accent/50" : "hover:border-accent/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  className="flex w-full flex-col items-start gap-5 p-7 text-left"
                >
                  <div className="flex w-full items-start justify-between gap-4">
                    <span
                      className={`flex size-14 items-center justify-center rounded-full transition-colors duration-300 ${
                        isActive ? "bg-accent text-white" : "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white"
                      }`}
                    >
                      <Icon className="size-6" />
                    </span>
                    <ChevronDown
                      className={`mt-4 size-4 text-muted transition-transform duration-300 ${isActive ? "rotate-180 text-accent" : ""}`}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
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
                      <ul className="grid gap-2 border-t border-border px-7 pb-7 pt-5">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2.5 text-[13px] text-foreground/80">
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
