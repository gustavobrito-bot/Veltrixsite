"use client"

import { motion } from "motion/react"
import { ArrowRight, Check } from "lucide-react"

const plans = [
  {
    name: "Cloud Agent",
    price: "Pay-as-you-grow",
    features: [
      "Todos os tipos de infraestrutura",
      "Cobrança baseada em tokens",
      "Atualizações automáticas",
      "Suporte da comunidade",
      "Dashboard em tempo real",
      "Integrações básicas",
    ],
    highlight: false,
  },
  {
    name: "Enterprise Suite",
    price: "Customizado",
    features: [
      "Control plane privado",
      "SLA de 99.99%",
      "Suporte dedicado 24/7",
      "Integrações customizadas",
      "Treinamento incluído",
      "Account manager exclusivo",
    ],
    highlight: true,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-[120px] bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
          >
            <span className="w-8 h-[1px] bg-accent" />
            PLANOS
            <span className="w-8 h-[1px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight"
          >
            Preços <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Simples</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative ${plan.highlight ? "md:scale-105" : ""}`}
            >
              {plan.highlight && (
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-accent to-accent/60 rounded-[6px] opacity-20 blur-xl group-hover:opacity-30 transition" />
              )}
              <div
                className={`relative p-10 border rounded-[4px] h-full flex flex-col justify-between backdrop-blur-sm transition-all ${
                  plan.highlight ? "border-accent/40 bg-accent/10" : "border-white/10 bg-card/50 hover:bg-card/80"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display text-2xl">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="bg-accent/20 border border-accent/30 px-3 py-1 rounded-[2px] text-[10px] text-accent tracking-[2px] font-bold uppercase">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="text-4xl font-display text-accent mb-8">{plan.price}</p>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex gap-3 text-sm items-start">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-white/80">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="#contact"
                  className={`w-full px-6 py-4 rounded-[2px] font-bold text-[11px] tracking-[2px] uppercase transition-all flex items-center justify-center gap-2 group/btn ${
                    plan.highlight
                      ? "bg-gradient-to-r from-accent to-[#D4580E] text-white hover:shadow-xl hover:shadow-accent/40"
                      : "border border-accent/20 hover:border-accent/40 hover:bg-accent/5 text-white"
                  }`}
                >
                  {plan.highlight ? "Falar com Vendas" : "Começar Trial"}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
