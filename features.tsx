"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Mail, Phone, Send, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    email: "",
    tipoProjeto: "",
    mensagem: "",
  })

  const whatsappNumber = "5511983182274"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*Nova mensagem do site Veltrix*

*Nome:* ${formData.nome}
*Empresa:* ${formData.empresa || "Nao informada"}
*E-mail:* ${formData.email}
*Tipo de Projeto:* ${formData.tipoProjeto || "Nao selecionado"}

*Mensagem:*
${formData.mensagem}`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: <Phone size={18} />,
      label: "TELEFONE",
      value: "(11) 98318-2274",
      href: "https://wa.me/5511983182274",
    },
    {
      icon: <Mail size={18} />,
      label: "E-MAIL",
      value: "contato@veltrix.com.br",
      href: "mailto:contato@veltrix.com.br",
    },
    {
      icon: <Instagram size={18} />,
      label: "INSTAGRAM",
      value: "@veltrixtecnologia",
      href: "https://www.instagram.com/veltrixtecnologia",
    },
  ]

  return (
    <section id="contact" className="py-[120px] bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase">
              <span className="w-8 h-[1px] bg-accent" />
              CONTATO
            </div>
            <h2 className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight mb-6">
              Vamos <span className="text-stroke-accent">Conversar?</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Entre em contato e descubra como a Veltrix pode transformar sua marca e presenca digital.
            </p>

            <div className="flex flex-col gap-2">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4 py-5 border-b border-white/6 group">
                  <div className="w-11 h-11 bg-accent/10 border border-accent/20 rounded-[4px] flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] tracking-[2px] text-accent mb-1">{info.label}</div>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white no-underline text-base transition-colors hover:text-accent"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/6 p-10"
          >
            <div className="font-mono text-[10px] tracking-[3px] text-accent mb-7 uppercase">FORMULARIO DE CONTATO</div>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[2px] text-white/40 font-mono">NOME</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="w-full bg-white/4 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent focus:bg-accent/5 transition-all rounded-[2px]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] tracking-[2px] text-white/40 font-mono">EMPRESA</label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    placeholder="Nome da empresa"
                    className="w-full bg-white/4 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent focus:bg-accent/5 transition-all rounded-[2px]"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] tracking-[2px] text-white/40 font-mono">E-MAIL</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full bg-white/4 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent focus:bg-accent/5 transition-all rounded-[2px]"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] tracking-[2px] text-white/40 font-mono">TIPO DE PROJETO</label>
                <select 
                  name="tipoProjeto"
                  value={formData.tipoProjeto}
                  onChange={handleChange}
                  className="w-full bg-white/4 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent focus:bg-accent/5 transition-all rounded-[2px] appearance-none cursor-pointer"
                >
                  <option value="" className="bg-card">
                    Selecione...
                  </option>
                  <option value="Branding & Identidade Visual" className="bg-card">Branding & Identidade Visual</option>
                  <option value="Criacao de Site ou Landing Page" className="bg-card">Criacao de Site ou Landing Page</option>
                  <option value="Social Media & Marketing" className="bg-card">Social Media & Marketing</option>
                  <option value="IA & Automacao" className="bg-card">IA & Automacao</option>
                  <option value="Dashboard ou Sistema" className="bg-card">Dashboard ou Sistema</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] tracking-[2px] text-white/40 font-mono">MENSAGEM</label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Conte sobre seu projeto ou desafio..."
                  required
                  className="w-full bg-white/4 border border-white/10 p-3.5 text-white text-sm outline-none focus:border-accent focus:bg-accent/5 transition-all rounded-[2px] min-h-[120px] resize-y"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-br from-accent to-[#D4580E] text-white py-4 font-bold text-xs tracking-[2px] uppercase transition-all hover:shadow-[0_0_50px_rgba(255,87,34,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
              >
                ENVIAR VIA WHATSAPP{" "}
                <Send size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
