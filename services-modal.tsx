"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { X, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"

interface ServicesModalProps {
  isOpen: boolean
  onClose: () => void
}

const services = [
  {
    title: "Consultoria Estratégica",
    description: "Analisamos o cenário atual da sua empresa e identificamos oportunidades de crescimento, otimização de processos e desenvolvimento de estratégias alinhadas aos seus objetivos.",
    icon: "📊"
  },
  {
    title: "Marketing e Posicionamento de Marca",
    description: "Desenvolvemos estratégias para fortalecer a presença da sua marca, aumentar sua relevância no mercado e criar conexões mais fortes com seu público-alvo.",
    icon: "🎯"
  },
  {
    title: "Planejamento e Gestão de Projetos",
    description: "Estruturamos projetos com foco em organização, produtividade e alcance de resultados, acompanhando cada etapa para garantir eficiência e qualidade na execução.",
    icon: "📋"
  },
  {
    title: "Desenvolvimento de Negócios",
    description: "Auxiliamos empresas na identificação de novas oportunidades de mercado, expansão comercial e criação de estratégias para aumentar competitividade e faturamento.",
    icon: "🚀"
  },
  {
    title: "Gestão de Relacionamento com Clientes",
    description: "Implementamos ações e processos que fortalecem o relacionamento com clientes, aumentam a satisfação e contribuem para a fidelização.",
    icon: "🤝"
  },
  {
    title: "Soluções Personalizadas",
    description: "Cada empresa possui necessidades específicas. Desenvolvemos soluções sob medida para atender desafios e objetivos particulares, sempre com foco em gerar valor e resultados consistentes.",
    icon: "⚙️"
  }
]

export default function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-card border border-white/10 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="relative h-64 bg-gradient-to-br from-accent/10 to-background flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative z-10 text-center">
            <Image
              src="/veltrix-logo.png"
              alt="Veltrix Tecnologia"
              width={180}
              height={54}
              className="h-16 w-auto mx-auto mb-4"
            />
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">
              Nossos Serviços
            </h2>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="overflow-y-auto p-8 md:p-12 max-h-[calc(90vh-256px)]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 mb-8 text-center leading-relaxed max-w-2xl mx-auto"
          >
            Na Veltrix, oferecemos soluções estratégicas voltadas para o crescimento, fortalecimento e posicionamento de negócios. Nosso foco é entregar resultados por meio de planejamento, inovação e execução eficiente.
          </motion.p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 hover:border-accent/50 hover:bg-white/10 transition-all group"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/5 border border-white/10 p-8 text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Qual serviço faz mais sentido para sua empresa?
            </h3>
            <p className="text-white/60 mb-6">
              Vamos conversar para entender seus desafios e encontrar a melhor solução.
            </p>
            <a
              href="https://wa.me/5511983182274?text=Olá!%20Vim%20pelo%20site%20da%20Veltrix%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20entender%20qual%20solução%20faz%20mais%20sentido%20para%20minha%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom text-xs inline-flex items-center gap-2 group"
            >
              Fale com um Especialista
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </motion.div>
    </motion.div>
  )
}
