"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Sparkles, Code2, TrendingUp } from "lucide-react"

const pillars = [
  { icon: Sparkles, label: "Branding", desc: "Identidade visual e posicionamento que criam autoridade." },
  { icon: Code2, label: "Tecnologia", desc: "Sites, sistemas, IA e automações que escalam sua operação." },
  { icon: TrendingUp, label: "Performance", desc: "Dados, dashboards e estratégia para crescer com previsibilidade." },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="flex flex-col items-start gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-balance text-[clamp(2rem,5.5vw,3rem)] font-medium leading-[1.15] tracking-tight text-foreground"
          >
            Descubra o <span className="font-semibold text-accent">ecossistema Veltrix</span> para elevar sua marca
          </motion.h2>

          <ul className="flex flex-col gap-4">
            {pillars.map((pillar, i) => (
              <motion.li
                key={pillar.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 + i * 0.08 }}
                className="flex items-start gap-4"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <pillar.icon className="size-4" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-foreground">{pillar.label}</span>
                  <span className="text-[13px] leading-relaxed text-muted">{pillar.desc}</span>
                </div>
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="#services"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.36 }}
            className="btn-primary-custom px-6 py-3 text-xs"
          >
            Veja mais
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] w-full"
        >
          <Image
            src="/images/ecosystem-devices.png"
            alt="Notebook e smartphone exibindo um dashboard desenvolvido pela Veltrix"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_45%,transparent_100%)]"
          />
        </motion.div>
      </div>
    </section>
  )
}
