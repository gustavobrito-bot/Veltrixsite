"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight, Sparkles, Code2, TrendingUp, Star } from "lucide-react"
import { WHATSAPP_URL } from "./lib/site"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 1600
    const start = performance.now() + 500
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min(Math.max((now - start) / duration, 0), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { number: 2, suffix: "+", label: "Projetos entregues", star: false },
  { number: 100, suffix: "%", label: "Satisfação", star: false },
  { number: 5, suffix: "", label: "Avaliação média", star: true },
]

const pillars = [
  { icon: Sparkles, label: "Branding" },
  { icon: Code2, label: "Tecnologia" },
  { icon: TrendingUp, label: "Performance" },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32 lg:pb-24"
    >
      <div aria-hidden className="grid-bg absolute inset-0" />
      <div
        aria-hidden
        className="absolute -top-40 right-[-20%] size-[520px] rounded-full bg-accent/25 blur-[140px] sm:right-[-10%] lg:right-[5%] lg:size-[680px]"
      />
      <div
        aria-hidden
        className="absolute bottom-[-30%] left-[-25%] size-[420px] rounded-full bg-secondary blur-[120px]"
      />

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            Startup de tecnologia premium
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.6 }}
            className="mt-6 font-display text-[clamp(1.9rem,9vw,4rem)] font-bold uppercase leading-[0.95] tracking-tight text-foreground lg:text-[clamp(3rem,4.6vw,4.5rem)]"
          >
            Transformamos
            <br />
            marcas em
            <br />
            <span className="text-accent drop-shadow-[0_0_40px_rgba(255,87,34,0.45)]">experiências</span>
            <br />
            digitais.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="mt-6 max-w-[480px] text-pretty text-[15px] leading-relaxed text-muted sm:text-lg"
          >
            Branding, tecnologia e performance para empresas que querem crescer e se posicionar acima da média.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.36, duration: 0.6 }}
            className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom group">
              Falar com nosso time
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-secondary-custom">
              Ver projetos
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 grid w-full grid-cols-3 gap-4 border-t border-white/8 pt-8 sm:max-w-[520px] sm:gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <dd className="order-1 flex items-center gap-1 font-display text-2xl font-bold leading-none text-foreground sm:text-4xl">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                  {stat.star && <Star className="size-4 fill-accent text-accent sm:size-6" aria-label="estrelas" />}
                </dd>
                <dt className="order-2 text-[11px] leading-snug text-muted sm:text-xs">{stat.label}</dt>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="relative w-full"
        >
          <div className="surface relative overflow-hidden p-6 sm:p-8">
            <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div aria-hidden className="absolute -right-16 -top-16 size-48 rounded-full bg-accent/30 blur-3xl" />

            <div className="relative flex items-center justify-center py-6 sm:py-10">
              <div aria-hidden className="absolute size-40 rounded-full border border-accent/20 sm:size-56" />
              <div aria-hidden className="absolute size-56 rounded-full border border-dashed border-white/10 sm:size-72" />
              <Image
                src="/veltrix-logo.png"
                alt="Veltrix Tecnologia"
                width={420}
                height={236}
                priority
                className="logo-blend animate-float relative w-[70%] max-w-[300px] drop-shadow-[0_0_50px_rgba(255,87,34,0.35)]"
              />
            </div>

            <ul className="relative mt-4 grid grid-cols-3 gap-2">
              {pillars.map((pillar) => (
                <li
                  key={pillar.label}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/8 bg-background/60 px-2 py-3 text-center"
                >
                  <pillar.icon className="size-4 text-accent" />
                  <span className="text-[11px] font-semibold tracking-wide text-foreground sm:text-xs">{pillar.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
