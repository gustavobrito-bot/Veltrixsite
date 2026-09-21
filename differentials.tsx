"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { Sparkles, Zap, Target, Compass, Eye, Gem } from "lucide-react"
import SectionHeading from "./section-heading"

const features = [
  { icon: Target, title: "Estratégia", desc: "Cada projeto começa com análise profunda do mercado e dos objetivos." },
  { icon: Sparkles, title: "Criatividade", desc: "Design inovador que destaca sua marca da concorrência." },
  { icon: Zap, title: "Performance", desc: "Soluções otimizadas para resultados mensuráveis." },
]

const pillars = [
  { icon: Compass, label: "Missão", text: "Elevar marcas através da tecnologia, branding e performance." },
  { icon: Eye, label: "Visão", text: "Ser referência em transformação digital e construção de marcas." },
  { icon: Gem, label: "Valores", text: "Inovação, criatividade, estratégia, excelência, performance e transparência." },
]

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-x flex flex-col gap-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(15,29,58,0.45)] sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <Image
              src="/images/about-studio.png"
              alt="Equipe da Veltrix revisando uma identidade visual no estúdio"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              label="Quem somos"
              title={
                <>
                  Transformamos ideias em <span className="text-accent">experiências digitais</span>
                </>
              }
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-pretty text-[15px] leading-relaxed text-muted sm:text-lg"
            >
              A <span className="font-semibold text-foreground">Veltrix Tecnologia</span> nasceu da paixão por criar
              soluções digitais que realmente fazem diferença. Unimos estratégia, design de alto nível e tecnologia de
              ponta para construir marcas que se destacam no mercado.
            </motion.p>

            <ul className="flex flex-col gap-3">
              {features.map((feature, i) => (
                <motion.li
                  key={feature.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="surface flex items-start gap-4 p-4 transition-colors hover:border-accent/30"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <feature.icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-[15px] font-semibold text-foreground">{feature.title}</span>
                    <span className="text-[13px] leading-relaxed text-muted">{feature.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.li
              key={pillar.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="surface flex flex-col gap-4 p-7"
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent text-white">
                <pillar.icon className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="section-label">{pillar.label}</span>
                <p className="text-pretty text-[15px] leading-relaxed text-foreground/90">{pillar.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
