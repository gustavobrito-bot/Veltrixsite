"use client"

import { motion } from "motion/react"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section id="cta-final" className="py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_50%_50%,rgba(255,87,34,0.1)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,87,34,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,87,34,0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 text-center max-w-[800px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-6 uppercase"
        >
          <span className="w-8 h-[1px] bg-accent" />
          VELTRIX TECNOLOGIA
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-[clamp(42px,6vw,80px)] leading-none tracking-tight mb-8"
        >
          Pronto para <span className="text-accent">Transformar</span> sua Marca?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg mb-14 leading-relaxed"
        >
          Junte-se a centenas de empresas que já transformaram sua presença digital com a Veltrix.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a 
            href="https://wa.me/5511983182274" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom flex items-center gap-2 group"
          >
            FALAR COM NOSSO TIME
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="btn-secondary-custom">
            VER SERVIÇOS
          </a>
        </motion.div>
      </div>
    </section>
  )
}
