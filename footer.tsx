"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Instagram, Mail } from "lucide-react"
import AboutModal from "./about-modal"
import ServicesModal from "./services-modal"
import { WHATSAPP_URL, CONTACT_EMAIL, INSTAGRAM_URL } from "./lib/site"

export default function Footer() {
  const [showAbout, setShowAbout] = useState(false)
  const [showServices, setShowServices] = useState(false)

  return (
    <>
      <footer className="bg-secondary text-white">
        <div className="container-x flex flex-col gap-12 py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div className="flex flex-col items-start gap-5">
              <Image src="/veltrix-logo.png" alt="Veltrix Tecnologia" width={180} height={101} className="h-20 w-auto" />
              <p className="max-w-sm text-pretty text-[14px] leading-relaxed text-white/70">
                Transformamos marcas em experiências digitais premium. Branding, tecnologia e performance para empresas
                que querem se destacar.
              </p>
            </div>

            <nav aria-label="Rodapé" className="flex flex-col gap-4">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">Navegação</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    onClick={() => setShowAbout(true)}
                    className="text-[14px] text-white/70 transition-colors hover:text-accent"
                  >
                    Quem somos
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setShowServices(true)}
                    className="text-[14px] text-white/70 transition-colors hover:text-accent"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <a href="#portfolio" className="text-[14px] text-white/70 transition-colors hover:text-accent">
                    Cases
                  </a>
                </li>
                <li>
                  <a href="#ecosystem" className="text-[14px] text-white/70 transition-colors hover:text-accent">
                    Soluções
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">Contato</h4>
              <p className="text-[14px] text-white/70">Para mais informações, entre em contato com a gente</p>
              <ul className="flex flex-col gap-2 text-[14px]">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-white/85 transition-colors hover:text-accent">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors hover:text-accent"
                  >
                    +55 11 98318-2274
                  </a>
                </li>
                <li className="text-white/70">São Paulo, Brasil</li>
              </ul>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">Redes sociais</h4>
              <p className="text-[14px] text-white/70">Acompanhe todas as novidades</p>
              <div className="flex flex-col gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:border-accent hover:bg-accent"
                >
                  <Instagram className="size-4" />
                  Instagram
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:border-accent hover:bg-accent"
                >
                  <Mail className="size-4" />
                  E-mail
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Veltrix Tecnologia. Todos os direitos reservados.</p>
            <p>Feito com dedicação em São Paulo, Brasil</p>
          </div>
        </div>
      </footer>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <ServicesModal isOpen={showServices} onClose={() => setShowServices(false)} />
    </>
  )
}
