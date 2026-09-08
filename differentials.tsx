"use client"

import { motion } from "motion/react"
import { Sparkles, Zap, Target, Award, Users, TrendingUp, Compass, Eye, Gem } from "lucide-react"
import SectionHeading from "./section-heading"

const stats = [
  { icon: Award, value: "2+", label: "Projetos entregues" },
  { icon: Users, value: "2+", label: "Clientes atendidos" },
  { icon: TrendingUp, value: "100%", label: "Taxa de satisfação" },
]

const features = [
  { icon: Target, title: "Estratégia", desc: "Cada projeto começa com análise profunda do mercado e dos objetivos." },
  { icon: Sparkles, title: "Criatividade", desc: "Design inovador que destaca sua marca da concorrência." },
  { icon: Zap, title: "Performance", desc: "Soluções otimizadas para resultados mensuráveis." },
]

const values = ["Inovação", "Criatividade", "Estratégia", "Excelência", "Performance", "Transparência"]

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              align="left"
              label="Quem somos"
              title={
                <>
                  Transformamos ideias em <span className="text-accent">experiências digitais.</span>
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
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-accent/30 hover:bg-accent/5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <feature.icon className="size-5" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold text-foreground">{feature.title}</span>
                    <span className="text-[13px] leading-relaxed text-muted">{feature.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="surface flex flex-col gap-4 p-6 sm:col-span-2 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-[0_10px_30px_-10px_rgba(255,87,34,0.8)]">
                <Compass className="size-6" />
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="section-label">Missão</span>
                <p className="text-pretty text-base font-medium leading-relaxed text-foreground sm:text-lg">
                  Elevar marcas através da tecnologia, branding e performance.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="surface flex flex-col gap-4 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="size-5" />
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="section-label">Visão</span>
                <p className="text-pretty text-[15px] leading-relaxed text-foreground/90">
                  Ser referência em transformação digital e construção de marcas.
                </p>
              </div>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="surface flex flex-col gap-4 p-6"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Gem className="size-5" />
              </span>
              <div className="flex flex-col gap-3">
                <span className="section-label">Valores</span>
                <ul className="flex flex-wrap gap-2">
                  {values.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>

            <motion.dl
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24 }}
              className="relative grid grid-cols-3 gap-3 overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/15 via-card to-card p-5 sm:col-span-2 sm:p-8"
            >
              <div aria-hidden className="absolute -right-10 -top-10 size-40 rounded-full bg-accent/25 blur-3xl" />
              {stats.map((stat) => (
                <div key={stat.label} className="relative flex flex-col gap-2">
                  <stat.icon className="size-4 text-accent" />
                  <dd className="order-1 font-display text-2xl font-bold leading-none text-foreground sm:text-4xl">
                    {stat.value}
                  </dd>
                  <dt className="order-2 text-[11px] leading-snug text-muted sm:text-xs">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </div>
      </div>
    </section>
  )
}
