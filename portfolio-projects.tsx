"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, X, Calendar, Clock, User, Check, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Angel Luxe",
    category: "DESENVOLVIMENTO",
    client: "Angélica",
    year: "2025",
    duration: "2 meses",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-702j2U0xH5gq70mIbZuAP4icEu3P1E.png",
    description: "Plataforma de e-commerce premium para brand de moda de luxo. Design sofisticado com experiência de compra intuitiva e integração com sistemas de gestão de estoque.",
    about: "Desenvolvimento de um site de vendas moderno e estratégico para nossa cliente Angélica, com foco em fortalecer sua presença digital, transmitir mais profissionalismo e aumentar suas oportunidades de venda online.",
    challenge: "A cliente não possuía um site próprio, o que limitava sua autoridade no mercado e dificultava a conversão de novos clientes através da Internet. Além disso, sua comunicação visual não transmitia toda a qualidade e valor da marca.",
    solution: "Criamos uma solução digital completa, desenvolvendo um site moderno, responsivo e pensado para converter. Também trabalhamos toda a identidade visual da marca e implementamos automações para otimizar processos e melhorar o atendimento ao cliente.",
    services: ["Identidade Visual", "Desenvolvimento de Site", "Automação de Processos", "Estratégia Digital"],
    results: [
      "Presença digital mais forte e profissional",
      "Estrutura preparada para escalar vendas",
      "Maior autoridade e credibilidade no mercado",
      "Experiência do cliente significativamente melhorada"
    ],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-702j2U0xH5gq70mIbZuAP4icEu3P1E.png"
    ],
    tags: ["E-commerce", "Next.js", "Stripe", "Design"],
    link: "#"
  },
  {
    id: 2,
    title: "Adega da Mooca",
    category: "DESENVOLVIMENTO",
    client: "Adega da Mooca",
    year: "2025",
    duration: "1 mês",
    heroImage: "/placeholder.svg?height=400&width=600&text=Adega+da+Mooca",
    description: "Site e catálogo digital para vinícola artesanal. Showcasing de produtos com sistema de recomendação de vinhos e integração com delivery partners.",
    about: "Criação de um site elegante para a Adega da Mooca, focando em apresentar o catálogo de vinhos de forma sofisticada e facilitar o processo de compra para os clientes.",
    challenge: "A adega não tinha presença digital e perdia vendas para concorrentes que ofereciam compra online. Os clientes não conseguiam ver o catálogo completo sem visitar a loja física.",
    solution: "Desenvolvemos um site com catálogo digital completo, sistema de recomendação baseado em preferências e integração com parceiros de delivery para entregas rápidas.",
    services: ["Design de Interface", "Desenvolvimento Web", "Sistema de Catálogo", "Integração de APIs"],
    results: [
      "Aumento de 150% nas vendas online",
      "Catálogo digital com mais de 200 rótulos",
      "Integração com 3 parceiros de delivery",
      "Redução de 40% no tempo de atendimento"
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Adega+da+Mooca"
    ],
    tags: ["Website", "React", "CMS", "Branding"],
    link: "#"
  }
]

export default function PortfolioProjects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      )
    }
  }

  return (
    <>
      <section id="portfolio" className="py-[120px] bg-background">
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
              NOSSOS TRABALHOS
              <span className="w-8 h-[1px] bg-accent" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight mb-6"
            >
              Portfólio <span className="text-accent">Selecionado</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 max-w-[600px] mx-auto text-base leading-relaxed"
            >
              Conheça alguns dos projetos que transformaram marcas e geraram resultados reais para nossos clientes.
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => openModal(project)}
                className="group cursor-pointer overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-80 md:h-96 overflow-hidden rounded-xl mb-6 bg-secondary border border-white/5">
                  <motion.img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <ArrowUpRight className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-accent/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="font-mono text-[9px] tracking-[2px] text-white uppercase font-semibold">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-[11px] text-accent uppercase tracking-[1px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="inline-flex items-center gap-2 text-accent hover:text-orange-500 transition-colors font-semibold text-sm">
                    Ver Projeto
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl mx-4 my-8 bg-background border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Hero Image */}
              <div className="relative h-64 md:h-96 overflow-hidden">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                
                {/* Project Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] text-white/80 uppercase tracking-[2px]">
                      Site Exclusivo
                    </span>
                    <span className="px-3 py-1 bg-accent/90 rounded-full text-[10px] text-white uppercase tracking-[2px]">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {selectedProject.client}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {selectedProject.year}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {selectedProject.duration}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* Main Content - 2 columns */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Sobre o Projeto */}
                  <div>
                    <h3 className="font-display text-xl text-white mb-4 flex items-center gap-2">
                      <span className="text-accent">{">"}</span>
                      Sobre o Projeto
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {selectedProject.about}
                    </p>
                  </div>

                  {/* O Desafio e Nossa Solucao */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-card border border-white/5 p-6 rounded-xl">
                      <h4 className="font-display text-lg text-white mb-3">O Desafio</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div className="bg-card border border-white/5 p-6 rounded-xl">
                      <h4 className="font-display text-lg text-white mb-3">Nossa Solução</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Galeria */}
                  <div>
                    <h3 className="font-display text-xl text-white mb-4">Galeria</h3>
                    <div className="relative">
                      <div className="aspect-video rounded-xl overflow-hidden bg-secondary border border-white/5">
                        <img
                          src={selectedProject.gallery[currentImageIndex]}
                          alt={`${selectedProject.title} - Imagem ${currentImageIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                          >
                            <ChevronLeft className="w-5 h-5 text-white" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                          >
                            <ChevronRight className="w-5 h-5 text-white" />
                          </button>
                        </>
                      )}
                    </div>
                    {/* Thumbnails */}
                    {selectedProject.gallery.length > 1 && (
                      <div className="flex gap-2 mt-4">
                        {selectedProject.gallery.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-colors ${
                              idx === currentImageIndex ? "border-accent" : "border-transparent"
                            }`}
                          >
                            <img src={img} alt="" className="w-full h-full object-cover" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Sidebar - 1 column */}
                <div className="space-y-6">
                  {/* Servicos */}
                  <div className="bg-card border border-white/5 p-6 rounded-xl">
                    <h4 className="font-display text-lg text-white mb-4">Serviços</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-2 bg-secondary border border-white/10 rounded-lg text-[12px] text-white/70"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resultados */}
                  <div className="bg-card border border-white/5 p-6 rounded-xl">
                    <h4 className="font-display text-lg text-white mb-4">Resultados</h4>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-accent" />
                          </div>
                          <span className="text-white/60 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 p-6 rounded-xl">
                    <h4 className="font-display text-lg text-white mb-2">Gostou do que viu?</h4>
                    <p className="text-white/50 text-sm mb-4">
                      Vamos criar algo incrível para sua marca.
                    </p>
                    <a
                      href="https://wa.me/5511983182274"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary-custom w-full justify-center text-[11px]"
                    >
                      Falar com a Veltrix
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
