"use client"

import { motion } from "motion/react"
import { Target, PenTool, Cpu, TrendingUp } from "lucide-react"

const differentials = [
  {
    id: "01",
    icon: Target,
    title: "ESTRATÉGIA QUE POSICIONA",
    desc: "Cada decisão de design e tecnologia é fundamentada em estratégia. Não fazemos belo por belo — fazemos belo que funciona, posiciona e converte.",
  },
  {
    id: "02",
    icon: PenTool,
    title: "DESIGN QUE COMUNICA",
    desc: "Criamos visuais que transmitem a essência da sua marca com precisão cirúrgica, gerando percepção de valor e diferenciação no mercado.",
  },
  {
    id: "03",
    icon: Cpu,
    title: "TECNOLOGIA QUE TRANSFORMA",
    desc: "Implementamos as tecnologias mais avançadas — IA, automação, sistemas inteligentes — para criar vantagens competitivas reais e escaláveis.",
  },
  {
    id: "04",
    icon: TrendingUp,
    title: "RESULTADOS QUE IMPULSIONAM",
    desc: "Trabalhamos orientados a dados e métricas. Cada projeto é construído com KPIs claros para gerar crescimento mensurável e constante.",
  },
]

export default function Differentials() {
  return (
    <section id="differentials" className="py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
          >
            <span className="w-8 h-[1px] bg-accent" />
            NOSSOS DIFERENCIAIS
            <span className="w-8 h-[1px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight"
          >
            Por Que A <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Veltrix?</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-white/5 border border-white/5">
          {differentials.map((diff, i) => {
            const Icon = diff.icon
            return (
              <motion.div
                key={diff.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-12 relative overflow-hidden group hover:bg-accent/[0.04] transition-colors duration-400"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent to-transparent origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="font-display text-[80px] leading-none text-accent/10 absolute top-5 right-8 select-none pointer-events-none transition-colors duration-400 group-hover:text-accent/15">
                  {diff.id}
                </div>

                <div className="w-16 h-16 rounded-[4px] border border-accent/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-accent/40 bg-background">
                  <Icon className="w-8 h-8 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-2xl mb-3 tracking-wide">{diff.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-[400px]">{diff.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
