"use client"

import { motion } from "motion/react"
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="contato" className="py-[120px] bg-card">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
          >
            <span className="w-8 h-[1px] bg-accent" />
            CONTATO
            <span className="w-8 h-[1px] bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(36px,5vw,56px)] leading-none tracking-tight mb-6"
          >
            Vamos <span className="text-accent">Conversar?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-xl mx-auto"
          >
            Pronto para transformar sua marca? Entre em contato e vamos discutir como podemos ajudar.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-background/50 border border-white/5 p-8">
              <h3 className="font-display text-xl text-white mb-6">Informacoes de Contato</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5511983182274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-white group-hover:text-accent transition-colors">+55 11 98318-2274</p>
                  </div>
                </a>

                <a 
                  href="mailto:contato@veltrix.com.br"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">E-mail</p>
                    <p className="text-white group-hover:text-accent transition-colors">contato@veltrix.com.br</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Localizacao</p>
                    <p className="text-white">Sao Paulo, Brasil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Horario</p>
                    <p className="text-white">Seg - Sex: 9h as 18h</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-accent/20 p-10 flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl text-white mb-4">
              Pronto para Transformar sua Marca?
            </h3>
            <p className="text-white/60 mb-8 leading-relaxed">
              Agende uma conversa gratuita com nosso time e descubra como podemos elevar sua presenca digital ao proximo nivel. Sem compromisso.
            </p>
            
            <div className="space-y-4">
              <a
                href="https://wa.me/5511983182274"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom w-full justify-center text-sm group"
              >
                Agendar Conversa Gratuita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-center text-white/30 text-xs">
                Resposta em ate 24 horas
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm mb-3">Por que escolher a Veltrix?</p>
              <ul className="space-y-2">
                {[
                  "Atendimento personalizado e dedicado",
                  "Projetos com foco em resultados reais",
                  "Tecnologia de ponta e design premium",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
