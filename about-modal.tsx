"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { X, ArrowRight } from "lucide-react"
import { useState } from "react"

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
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
        {/* Header com hero */}
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
              Sobre Nós
            </h2>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="overflow-y-auto p-8 md:p-12 space-y-6 max-h-[calc(90vh-256px)]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6 text-white/70 leading-relaxed"
          >
            <p>
              A Veltrix nasceu com o propósito de transformar desafios em oportunidades por meio de estratégias inteligentes, inovação e foco em resultados.
            </p>

            <p>
              Acreditamos que cada negócio possui um potencial único de crescimento. Por isso, trabalhamos lado a lado com nossos clientes para desenvolver soluções que gerem valor real, fortaleçam marcas e impulsionem resultados sustentáveis.
            </p>

            <p>
              Nossa atuação é baseada em três pilares fundamentais: compromisso, excelência e evolução contínua. Buscamos entender profundamente as necessidades de cada cliente para entregar soluções personalizadas, eficientes e alinhadas aos objetivos de negócio.
            </p>

            <p>
              Mais do que prestar serviços, a Veltrix constrói parcerias duradouras, pautadas pela transparência, confiança e dedicação. Nosso objetivo é ser um agente de crescimento para empresas que desejam se destacar em mercados cada vez mais competitivos.
            </p>

            <p>
              Na Veltrix, acreditamos que grandes resultados são construídos com estratégia, execução e visão de futuro.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-8 border-t border-white/10"
          >
            <p className="text-white/50 mb-4">
              Pronto para começar uma parceria que gera resultados?
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
