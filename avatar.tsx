"use client"

import { motion } from "motion/react"
import { MessageSquare, Star, ArrowRight } from "lucide-react"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-secondary/30 overflow-hidden border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
        >
          <span className="w-8 h-[1px] bg-accent" />
          PORTFÓLIO & CLIENTES
          <span className="w-8 h-[1px] bg-accent" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl tracking-tight text-white mb-6"
        >
          Seja o Primeiro a <span className="text-accent">Transformar</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/50 max-w-[540px] mx-auto text-base leading-relaxed"
        >
          Estamos iniciando nossa jornada e abrindo vagas para os primeiros clientes com condições especiais de lançamento.
        </motion.p>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Star className="w-6 h-6 text-accent" />,
              title: "Preço de Lançamento",
              desc: "Primeiros clientes têm acesso a condições exclusivas e preços especiais que não estarão disponíveis depois.",
            },
            {
              icon: <MessageSquare className="w-6 h-6 text-accent" />,
              title: "Atenção Total",
              desc: "Por sermos novos, cada projeto recebe dedicação máxima. Você não é mais um número — é nossa vitrine.",
            },
            {
              icon: <ArrowRight className="w-6 h-6 text-accent" />,
              title: "Resultado Garantido",
              desc: "Trabalhamos até o resultado ser exatamente o que você esperava. Sua satisfação constrói nossa reputação.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-white/6 p-8 rounded-[4px] group hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-[4px] flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all">
                {card.icon}
              </div>
              <h3 className="font-display text-xl text-white mb-3 group-hover:text-accent transition-colors">
                {card.title}
              </h3>
              <p className="text-white/50 text-[14px] leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5511983182274?text=Olá!%20Vim%20pelo%20site%20da%20Veltrix%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20entender%20qual%20solução%20faz%20mais%20sentido%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom inline-flex items-center gap-2 group"
          >
            Garantir Condição de Lançamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
