"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, MessageCircle, MapPin, Clock, Check } from "lucide-react"
import SectionHeading from "./section-heading"
import { WHATSAPP_URL, CONTACT_EMAIL } from "./lib/site"

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 11 98318-2274",
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
  { icon: Clock, label: "Horário", value: "Seg – Sex: 9h às 18h" },
]

const reasons = [
  "Atendimento personalizado e dedicado",
  "Projetos com foco em resultados reais",
  "Tecnologia de ponta e design premium",
]

export default function Contact() {
  return (
    <section id="contato" className="relative bg-card/40 py-24 sm:py-32">
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          label="Contato"
          title={
            <>
              Vamos <span className="text-accent">conversar?</span>
            </>
          }
          description="Pronto para transformar sua marca? Entre em contato e vamos discutir como podemos ajudar."
        />

        <div className="grid gap-4 lg:grid-cols-5">
          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface grid gap-2 p-4 sm:grid-cols-2 sm:p-5 lg:col-span-2 lg:grid-cols-1"
          >
            {channels.map((channel) => {
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <channel.icon className="size-5" />
                  </span>
                  <span className="flex min-w-0 flex-col gap-0.5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">{channel.label}</span>
                    <span className="truncate text-[15px] font-medium text-foreground transition-colors group-hover:text-accent">
                      {channel.value}
                    </span>
                  </span>
                </>
              )
              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-white/[0.04]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4 rounded-xl p-3">{content}</div>
                  )}
                </li>
              )
            })}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/20 via-card to-card p-6 sm:p-10 lg:col-span-3"
          >
            <div aria-hidden className="absolute -right-20 -top-20 size-64 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex flex-col gap-3">
              <h3 className="font-display text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
                Pronto para transformar sua marca?
              </h3>
              <p className="text-pretty text-[15px] leading-relaxed text-muted sm:text-base">
                Agende uma conversa gratuita com nosso time e descubra como podemos elevar sua presença digital ao próximo
                nível. Sem compromisso.
              </p>
            </div>

            <div className="relative flex flex-col gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom group w-full sm:w-fit">
                Agendar conversa gratuita
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-xs text-muted">Resposta em até 24 horas</span>
            </div>

            <ul className="relative flex flex-col gap-2.5 border-t border-white/10 pt-6">
              {reasons.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-foreground/85">
                  <Check className="size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
