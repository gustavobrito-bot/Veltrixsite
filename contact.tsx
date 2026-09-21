"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, MessageCircle, MapPin, Clock } from "lucide-react"
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

export default function Contact() {
  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="container-x flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center gap-8 overflow-hidden rounded-[28px] bg-secondary px-6 py-14 text-center sm:px-12 sm:py-20"
        >
          <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative flex flex-col items-center gap-4">
            <h2 className="font-display max-w-[24ch] text-balance text-[clamp(1.6rem,4.5vw,2.5rem)] font-semibold leading-[1.2] tracking-tight text-white">
              Fale com nossos especialistas e garanta a melhor estratégia para sua marca!
            </h2>
            <p className="max-w-[560px] text-pretty text-[15px] leading-relaxed text-white/75 sm:text-base">
              Agende uma conversa gratuita com nosso time e descubra como podemos elevar sua presença digital ao próximo
              nível. Sem compromisso. Resposta em até 24 horas.
            </p>
          </div>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom group relative">
            Entrar em contato
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => {
            const content = (
              <>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <channel.icon className="size-5" />
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">{channel.label}</span>
                  <span className="break-all text-[14px] font-medium text-foreground transition-colors group-hover:text-accent">
                    {channel.value}
                  </span>
                </span>
              </>
            )
            return (
              <motion.li
                key={channel.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? "_blank" : undefined}
                    rel={channel.external ? "noopener noreferrer" : undefined}
                    className="surface group flex items-center gap-4 p-4 transition-colors hover:border-accent/30"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="surface group flex items-center gap-4 p-4">{content}</div>
                )}
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
