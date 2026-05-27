"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Palette, Globe, Share2, Bot, BarChart3, Layers, ArrowUpRight, Info } from "lucide-react"

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
            Nossas <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Soluções</span>
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
            return (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="bg-card p-10 relative group cursor-pointer overflow-visible border border-transparent transition-all duration-400 hover:bg-background/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                <div className="absolute top-8 right-8 flex items-center gap-2">
                  <div className="p-1.5 bg-accent/10 rounded-full text-accent opacity-40 group-hover:opacity-100 transition-opacity">
                    <Info size={14} />
                  </div>
                  <div className="text-accent opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="w-14 h-14 bg-background border border-accent/20 rounded-[4px] flex items-center justify-center mb-8 transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(255,87,34,0.2)]">
                  <Icon className="w-7 h-7 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-2xl mb-4 tracking-wide text-white group-hover:text-accent transition-colors">
                  {service.name}
                </h3>
                <p className="text-[14px] text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300 mb-6">
                  {service.desc}
                </p>

                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute left-0 bottom-full mb-4 w-[280px] bg-background border border-accent/30 p-6 z-50 pointer-events-none shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl"
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
