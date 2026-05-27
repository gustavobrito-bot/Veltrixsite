"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/6 pt-16 pb-8 relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/veltrix-logo.png"
                  alt="Veltrix Tecnologia"
                  width={120}
                  height={48}
                  className="h-12 w-auto mix-blend-screen brightness-110"
                />
              </div>
            </div>
            <div className="text-[13px] text-white/40 leading-relaxed mb-6">
              <span className="text-accent font-semibold">Estratégia que posiciona.</span>
              <br />
              <span className="text-accent font-semibold">Tecnologia que transforma.</span>
            </div>
            <p className="text-[11px] text-white/30 leading-relaxed max-w-[220px]">
              Branding, tecnologia e performance para empresas que querem crescer.
            </p>
          </div>

          <div>
            <div className="font-bold text-[13px] tracking-[2px] uppercase text-white mb-6">Serviços</div>
            <ul className="space-y-2.5 list-none p-0">
              {["Branding", "Identidade Visual", "Criação de Sites", "Social Media", "IA & Automação"].map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-white/40 no-underline text-[13px] transition-all hover:text-white hover:pl-2 flex items-center gap-2 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-all">&rsaquo;</span>{" "}
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold text-[13px] tracking-[2px] uppercase text-white mb-6">Empresa</div>
            <ul className="space-y-2.5 list-none p-0">
              {["Quem Somos", "Portfólio", "Diferenciais", "Contato"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === "Quem Somos" ? "about" : link.toLowerCase()}`}
                    className="text-white/40 no-underline text-[13px] transition-all hover:text-white hover:pl-2 flex items-center gap-2 group"
                  >
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-all">&rsaquo;</span>{" "}
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold text-[13px] tracking-[2px] uppercase text-white mb-6">Contato</div>
            <ul className="space-y-2.5 list-none p-0 mb-6">
              <li><a href="https://wa.me/5511983182274" className="text-white/40 no-underline text-[13px] transition-all hover:text-white">(11) 98318-2274</a></li>
              <li><a href="https://www.instagram.com/veltrixtecnologia" target="_blank" rel="noopener noreferrer" className="text-white/40 no-underline text-[13px] transition-all hover:text-white">@veltrixtecnologia</a></li>
              <li><a href="mailto:contato@veltrix.com.br" className="text-white/40 no-underline text-[13px] transition-all hover:text-white">contato@veltrix.com.br</a></li>
            </ul>
            <a 
              href="https://wa.me/5511983182274" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white py-3 px-6 font-bold text-[11px] tracking-[2px] uppercase no-underline transition-all hover:shadow-[0_0_40px_rgba(255,87,34,0.3)] block text-center rounded-[2px]"
            >
              FALAR AGORA
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[12px] text-white/40">
            © 2025 <span className="text-accent">Veltrix Tecnologia</span>. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-[12px] text-white/40">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Estratégia. Design. Tecnologia.
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white/5 border border-white/10 w-10 h-10 flex items-center justify-center rounded-full hover:bg-accent hover:border-accent transition-all duration-300 group"
            >
              <span className="text-white group-hover:scale-110 transition-transform">&uarr;</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
