"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { ArrowRight, Instagram, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
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
                href="https://linkedin.com/company/veltrix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <Linkedin className="w-4 h-4 text-white/60" />
              </a>
              <a 
                href="mailto:contato@veltrix.com.br"
                className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all"
              >
                <Mail className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-mono text-[10px] tracking-[3px] text-accent mb-6 uppercase">Navegação</h4>
            <ul className="space-y-3">
              {["Sobre", "Serviços", "Portfolio", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 text-sm hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
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
            © 2024 Veltrix Tecnologia. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Feito com dedicação em São Paulo, Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
