"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL } from "./lib/site"

export default function Hero() {
  return (
    <section id="hero" className="px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8 lg:pt-6">
      <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[28px] shadow-[0_30px_60px_-30px_rgba(15,29,58,0.45)] sm:min-h-[640px] lg:min-h-[calc(100svh-1.5rem)]">
        <Image
          src="/images/hero-team.png"
          alt="Equipe da Veltrix revisando um projeto digital em um escritório moderno"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%]"
        />
        <div aria-hidden className="absolute inset-0 bg-secondary/45" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-secondary/85 via-secondary/20 to-secondary/50" />

        <div className="relative flex w-full flex-col items-center gap-6 px-6 pb-16 pt-28 text-center sm:px-10 sm:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display max-w-[16ch] text-balance text-[clamp(1.9rem,7vw,3.9rem)] font-semibold uppercase leading-[1.08] tracking-[0.02em] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
          >
            Transformamos marcas em experiências digitais
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.6 }}
            className="rounded-full border border-white/20 bg-white/15 px-6 py-2.5 text-pretty text-[14px] font-medium text-white backdrop-blur-md sm:text-lg"
          >
            Branding, tecnologia e performance para empresas que querem crescer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom group">
              Falar com nosso time
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#portfolio" className="btn-outline-light">
              Ver projetos
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
