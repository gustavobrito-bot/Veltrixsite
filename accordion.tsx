"use client"

import { motion } from "motion/react"

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "INSTALE",
      desc: "Um comando instala o agente Omnius em qualquer lugar — cloud ou on-prem.",
    },
    {
      num: "02",
      title: "DESCUBRA",
      desc: "Visibilidade completa e instantânea de toda sua infraestrutura.",
    },
    {
      num: "03",
      title: "AUTOMATIZE",
      desc: "Defina políticas — Omnius cuida do resto de forma inteligente.",
    },
    {
      num: "04",
      title: "EVOLUA",
      desc: "Otimização contínua alimentada por machine learning.",
    },
  ]

  return (
    <section id="how" className="py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
          >
            <span className="w-8 h-[1px] bg-accent" />
            PROCESSO
            <span className="w-8 h-[1px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight"
          >
            Do Zero ao <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Herói</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="group bg-accent/10 hover:bg-accent/20 border border-accent/20 hover:border-accent/40 rounded-[4px] p-8 h-full flex flex-col transition-all cursor-pointer">
                <div className="font-display text-[60px] leading-none text-accent mb-4 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="font-display text-xl mb-3 tracking-wide">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
