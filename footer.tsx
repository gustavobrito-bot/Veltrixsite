"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Instagram, Mail } from "lucide-react"
import AboutModal from "./about-modal"
import ServicesModal from "./services-modal"

export default function Footer() {
  const [showAbout, setShowAbout] = useState(false)
  const [showServices, setShowServices] = useState(false)

  return (
    <>
      <footer className="bg-card border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Logo e descrição */}
            <div className="md:col-span-2">
              <Image
                src="/veltrix-logo.png"
                alt="Veltrix Tecnologia"
                width={160}
                height={48}
                className="h-12 w-auto mb-6"
              />
              <p className="text-white/50 text-sm leading-relaxed max-w-md mb-6">
                Transformamos marcas em experiências digitais premium. Branding, tecnologia e performance para empresas que querem se destacar.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/veltrixtecnologia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
                >
                  <Instagram className="w-4 h-4 text-white/60" />
                </a>
                <a
                  href="mailto:contato@veltrix.com.br"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
                >
                  <Mail className="w-4 h-4 text-white/60" />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h4 className="font-mono text-[10px] tracking-[3px] text-accent mb-6 uppercase">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowAbout(true)}
                    className="text-white/50 text-sm hover:text-accent transition-colors text-left"
                  >
                    Sobre
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowServices(true)}
                    className="text-white/50 text-sm hover:text-accent transition-colors text-left"
                  >
                    Serviços
                  </button>
                </li>
                <li>
                  <a href="#portfolio" className="text-white/50 text-sm hover:text-accent transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-white/50 text-sm hover:text-accent transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div>
              <h4 className="font-mono text-[10px] tracking-[3px] text-accent mb-6 uppercase">Vamos Conversar?</h4>
              <p className="text-white/50 text-sm mb-4">
                Pronto para transformar sua marca?
              </p>
              <a
                href="https://wa.me/5511983182274?text=Olá!%20Vim%20pelo%20site%20da%20Veltrix%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20entender%20qual%20solução%20faz%20mais%20sentido%20para%20minha%20empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom text-[10px] inline-flex items-center gap-2 group"
              >
                Iniciar Projeto
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-xs">
              © 2026 Veltrix Tecnologia. Todos os direitos reservados.
            </p>
            <p className="text-white/30 text-xs">
              Feito com dedicação em São Paulo, Brasil
            </p>
          </div>
        </div>
      </footer>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <ServicesModal isOpen={showServices} onClose={() => setShowServices(false)} />
    </>
  )
}
