"use client"

import { motion } from "motion/react"
import { BadgePercent, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react"
import SectionHeading from "./section-heading"
import { WHATSAPP_URL } from "./lib/site"

const perks = [
  {
    icon: BadgePercent,
    title: "Preço de lançamento",
    desc: "Os primeiros clientes têm acesso a condições exclusivas e preços especiais que não estarão disponíveis depois.",
  },
  {
    icon: HeartHandshake,
    title: "Atenção total",
    desc: "Por sermos novos, cada projeto recebe dedicação máxima. Você não é mais um número — é nossa vitrine.",
  },
  {
    icon: ShieldCheck,
    title: "Resultado garantido",
    desc: "Trabalhamos até o resultado ser exatamente o que você esperava. Sua satisfação constrói nossa reputação.",
  },
]

export default function LaunchOffer() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div aria-hidden className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="container-x relative flex flex-col gap-14">
        <SectionHeading
          label="Condição de lançamento"
          title={
            <>
              Seja o primeiro a <span className="text-accent">transformar</span>
            </>
          }
          description="Estamos iniciando nossa jornada e abrindo vagas para os primeiros clientes com condições especiais de lançamento."
        />

        <ul className="grid gap-4 md:grid-cols-3">
          {perks.map((perk, i) => (
            <motion.li
              key={perk.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="surface group flex flex-col gap-5 p-6 transition-colors hover:border-accent/30 sm:p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                <perk.icon className="size-6" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">{perk.title}</h3>
                <p className="text-pretty text-[14px] leading-relaxed text-muted">{perk.desc}</p>
              </div>
            </motion.li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom group w-full sm:w-auto">
            Garantir condição de lançamento
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
