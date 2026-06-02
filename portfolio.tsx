"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Palette, Globe, Share2, Bot, BarChart3, Layers, ArrowUpRight, Info, ChevronDown } from "lucide-react"

const services = [
  {
    icon: Palette,
    name: "Branding & Identidade",
    desc: "Construção de marcas memoráveis com identidade visual estratégica e posicionamento diferenciado.",
    details: ["Logotipo & Símbolo", "Manual de Identidade", "Tipografia Exclusiva", "Estudo de Cores"],
  },
  {
    icon: Globe,
    name: "Desenvolvimento Web",
    desc: "Sites institucionais e Landing Pages premium, modernos e responsivos que convertem.",
    details: ["Sites Institucionais", "Landing Pages", "E-commerce Premium", "Otimização SEO"],
  },
  {
    icon: Share2,
    name: "Social Media",
    desc: "Gestão estratégica de redes sociais com conteúdo que engaja e posiciona sua marca.",
    details: ["Planejamento Mensal", "Design de Ativos", "Edição de Reels", "Gestão de Anúncios"],
  },
  {
    icon: Bot,
    name: "IA & Automação",
    desc: "Soluções com IA integrada e sistemas que automatizam processos e escalam operações.",
    details: ["Chatbots Inteligentes", "Automação de CRM", "Processos Internos", "Análise Preditiva"],
  },
  {
    icon: BarChart3,
    name: "Dashboards & BI",
    desc: "Painéis de controle personalizados para visualizar dados e tomar decisões estratégicas.",
    details: ["Visualização de KPIs", "Integração de APIs", "Relatórios em Tempo Real", "Mineração de Dados"],
  },
  {
    icon: Layers,
    name: "Design Estratégico",
    desc: "Design com propósito: cada elemento pensado para comunicar, converter e criar valor.",
    details: ["UX Research", "UI Design de Interfaces", "Prototipagem Alta Fiel", "Design Systems"],
  },
]

export default function Features() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i)
  }

  return (
    <section id="services" className="py-[120px] bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
          >
            <span className="w-8 h-[1px] bg-accent" />
            O QUE FAZEMOS
            <span className="w-8 h-[1px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight mb-6"
          >
            Nossas <span className="text-accent">Soluções</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-[600px] mx-auto text-base leading-relaxed"
          >
            Cada solução é desenvolvida com estratégia, design premium e tecnologia de ponta para gerar resultados reais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5 border border-white/5">
          {services.map((service, i) => {
            const Icon = service.icon
            const isActive = activeIndex === i

            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                // Desktop: hover. Mobile: click/tap via onClick
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) setActiveIndex(i)
                }}
                onMouseLeave={() => {
                  if (window.matchMedia("(hover: hover)").matches) setActiveIndex(null)
                }}
                onClick={() => {
                  if (!window.matchMedia("(hover: hover)").matches) toggle(i)
                }}
                className={`bg-card p-8 md:p-10 relative group cursor-pointer border border-transparent transition-all duration-400 ${isActive ? "bg-background/40" : ""}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent transition-opacity duration-400 ${isActive ? "opacity-100" : "opacity-0"}`} />

                {/* Desktop info icon / Mobile chevron */}
                <div className="absolute top-6 right-6 flex items-center gap-2">
                  <div className={`p-1.5 bg-accent/10 rounded-full text-accent transition-opacity hidden md:block ${isActive ? "opacity-100" : "opacity-40"}`}>
                    <Info size={14} />
                  </div>
                  <div className={`text-accent transition-all duration-300 hidden md:block ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
                    <ArrowUpRight size={18} />
                  </div>
                  {/* Mobile chevron */}
                  <div className={`md:hidden text-accent transition-transform duration-300 ${isActive ? "rotate-180" : "rotate-0"}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>

                <div className={`w-14 h-14 bg-background border rounded-[4px] flex items-center justify-center mb-6 md:mb-8 transition-all duration-300 ${isActive ? "border-accent/40 shadow-[0_0_20px_rgba(255,87,34,0.2)]" : "border-accent/20"}`}>
                  <Icon className={`w-7 h-7 text-accent transition-opacity ${isActive ? "opacity-100" : "opacity-60"}`} />
                </div>

                <h3 className={`font-display text-xl md:text-2xl mb-3 md:mb-4 tracking-wide transition-colors ${isActive ? "text-accent" : "text-white"}`}>
                  {service.name}
                </h3>
                <p className={`text-[14px] leading-relaxed transition-colors duration-300 mb-4 ${isActive ? "text-white/60" : "text-white/40"}`}>
                  {service.desc}
                </p>

                {/* Details — inline on mobile, tooltip on desktop */}
                <AnimatePresence>
                  {isActive && (
                    <>
                      {/* Mobile: inline expand */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden"
                      >
                        <div className="border-t border-accent/20 pt-4 mt-2">
                          <div className="font-mono text-[9px] tracking-[3px] text-accent mb-3 uppercase">
                            DETALHES DA SOLUÇÃO
                          </div>
                          <ul className="space-y-2">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-[12px] text-white/80 font-medium tracking-wide">
                                <div className="w-1 h-1 bg-accent rounded-full flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>

                      {/* Desktop: floating tooltip */}
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="hidden md:block absolute left-0 bottom-full mb-4 w-[260px] bg-background border border-accent/30 p-6 z-50 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl"
                      >
                        <div className="font-mono text-[9px] tracking-[3px] text-accent mb-4 uppercase">
                          DETALHES DA SOLUÇÃO
                        </div>
                        <ul className="space-y-3">
                          {service.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-3 text-[11px] text-white/80 font-medium tracking-wide"
                            >
                              <div className="w-1 h-1 bg-accent rounded-full" />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                        <div className="absolute -bottom-2 left-10 w-4 h-4 bg-background border-r border-b border-accent/30 rotate-45" />
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
