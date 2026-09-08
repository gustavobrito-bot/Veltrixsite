"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Instagram, Mail } from "lucide-react"
import AboutModal from "./about-modal"
import ServicesModal from "./services-modal"
import { WHATSAPP_URL, CONTACT_EMAIL, INSTAGRAM_URL } from "./lib/site"

export default function Footer() {
  const [showAbout, setShowAbout] = useState(false)
  const [showServices, setShowServices] = useState(false)

  return (
    <>
      <footer className="border-t border-white/8 bg-background">
        <div className="container-x flex flex-col gap-12 py-14 sm:py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="flex flex-col items-start gap-5">
              <Image
                src="/veltrix-logo.png"
                alt="Veltrix Tecnologia"
                width={180}
                height={101}
                className="logo-blend h-11 w-auto"
              />
              <p className="max-w-md text-pretty text-[14px] leading-relaxed text-muted">
                Transformamos marcas em experiências digitais premium. Branding, tecnologia e performance para empresas
                que querem se destacar.
              </p>
              <div className="flex gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Veltrix"
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                >
                  <Instagram className="size-4" />
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  aria-label="Enviar e-mail para a Veltrix"
                  className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-muted transition-colors hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
                >
                  <Mail className="size-4" />
                </a>
              </div>
            </div>

            <nav aria-label="Rodapé" className="flex flex-col gap-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Navegação</h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <button
                    type="button"
                    onClick={() => setShowAbout(true)}
                    className="text-[14px] text-muted transition-colors hover:text-foreground"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setShowServices(true)}
                    className="text-[14px] text-muted transition-colors hover:text-foreground"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <a href="#portfolio" className="text-[14px] text-muted transition-colors hover:text-foreground">
                    Portfólio
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-[14px] text-muted transition-colors hover:text-foreground">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex flex-col items-start gap-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">Vamos conversar?</h4>
              <p className="text-[14px] text-muted">Pronto para transformar sua marca?</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom group px-5 py-3 text-xs"
              >
                Iniciar projeto
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t border-white/8 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
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
