"use client"

import { motion } from "motion/react"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ricardo Silva",
    role: "CEO, TechFlow",
    content:
      "A Veltrix transformou nossa presença digital. O novo site não é apenas bonito, ele converte 3x mais do que o anterior.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    name: "Amanda Oliveira",
    role: "Diretora de Marketing, Lumnia",
    content:
      "O trabalho de branding superou todas as expectativas. Conseguiram captar a essência da nossa marca com perfeição.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    name: "Bruno Costa",
    role: "Fundador, Innova Retail",
    content:
      "As automações com IA que a Veltrix implementou reduziram nosso tempo de resposta em 70%. Resultados reais.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    name: "Juliana Mendes",
    role: "Product Manager, NEXO",
    content:
      "Equipe extremamente técnica e criativa. O dashboard que construíram é nossa principal ferramenta estratégica hoje.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
  },
  {
    name: "Marcos Paulo",
    role: "Proprietário, Blue Sky",
    content:
      "O suporte e a visão estratégica da Veltrix são diferenciais absurdos. Não é apenas uma agência, é um parceiro.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&h=100&auto=format&fit=crop",
  },
]

const doubleTestimonials = [...testimonials, ...testimonials]

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
          O QUE DIZEM NOSSOS CLIENTES
          <span className="w-8 h-[1px] bg-accent" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl tracking-tight text-white"
        >
          Depoimentos <span className="text-accent">Premium</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-6 whitespace-nowrap py-10"
          animate={{ x: [0, -1920] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubleTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[400px] flex-shrink-0 bg-card p-8 border border-white/5 rounded-[4px] relative group hover:border-accent/30 transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-accent/20 group-hover:text-accent/40 transition-colors">
                <Quote size={40} />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-accent/20">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white tracking-wide">{t.name}</h4>
                  <p className="text-[11px] text-accent uppercase tracking-[1px] font-medium">{t.role}</p>
                </div>
              </div>

              <p className="text-[14px] text-white/50 leading-relaxed italic whitespace-normal">
                &ldquo;{t.content}&rdquo;
              </p>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
