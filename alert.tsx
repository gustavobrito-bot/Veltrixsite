"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, ExternalLink, X, Calendar, Tag, Clock, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    id: "1",
    title: "Angel Luxe",
    category: "DESENVOLVIMENTO",
    client: "Angélica",
    year: "2025",
    duration: "2 meses",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bRLsAKIO0zuonwCN9RnfsjlgsxmdK5.png",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bRLsAKIO0zuonwCN9RnfsjlgsxmdK5.png",
    description: "Site de vendas moderno e estratégico para importados de luxo",
    fullDescription: "Desenvolvimento de um site de vendas moderno e estratégico para nossa cliente Angélica, com foco em fortalecer sua presença digital, transmitir mais profissionalismo e aumentar suas oportunidades de venda online.",
    challenge: "A cliente ainda não possuía um site próprio, o que limitava sua autoridade no mercado e dificultava a conversão de novos clientes através da internet. Além disso, sua comunicação visual não transmitia toda a qualidade e valor da marca.",
    solution: "Criamos uma estrutura digital completa, desenvolvendo um site moderno, responsivo e pensado para conversão. Também trabalhamos toda a identidade visual da marca e implementamos automações para otimizar processos e melhorar o atendimento ao cliente.",
    results: [
      "Presença digital mais forte e profissional",
      "Estrutura preparada para escalar vendas",
      "Maior autoridade e credibilidade no mercado",
      "Experiência do cliente significativamente melhorada",
    ],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bRLsAKIO0zuonwCN9RnfsjlgsxmdK5.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VMiRe7cDcDby0bXCAFwgcnwIxFjKeT.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KbfoyoBzZcPoKdz7KarVsxf40oqthg.png",
    ],
    services: ["Identidade Visual", "Desenvolvimento de Site", "Automação de Processos", "Estrutura Estratégica Digital"],
  },
  {
    id: "2",
    title: "Adega da Mooca",
    category: "DESENVOLVIMENTO",
    client: "Adega da Mooca",
    year: "2026",
    duration: "3 meses",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RiFxV0TQ5KhLm1KySTVMcdiEuYT01e.png",
    heroImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RiFxV0TQ5KhLm1KySTVMcdiEuYT01e.png",
    description: "Cardápio digital moderno para adega e conveniência",
    fullDescription: "Desenvolvimento de um cardápio digital moderno e funcional para a Adega da Mooca, com foco em facilitar os pedidos, melhorar a experiência do cliente e modernizar a presença digital da adega.",
    challenge: "A Adega da Mooca ainda não possuía um sistema digital estruturado para apresentação dos produtos e realização de pedidos, o que dificultava a organização, a praticidade no atendimento e as oportunidades de aumentar as vendas online.",
    solution: "Criamos um cardápio digital intuitivo, visualmente atrativo e de fácil navegação, permitindo que os clientes visualizem os produtos de forma rápida e organizada. Também desenvolvemos uma identidade visual alinhada com o estilo da marca e estruturamos automações para otimizar o atendimento e os pedidos.",
    results: [
      "Mais praticidade no atendimento",
      "Aumento significativo nas vendas",
      "Melhor experiência para os clientes",
      "Presença digital moderna e profissional",
    ],
    gallery: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RiFxV0TQ5KhLm1KySTVMcdiEuYT01e.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jKd1W0XjgodtCdknfA6pjo9FN9XiUB.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-M9eipPNTWeVcv7HeJdttgR4YxVkMwj.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-T5xodiCo4XZDyXUqs0LspW98d0YIxg.png",
    ],
    services: ["Cardápio Digital", "Identidade Visual", "Automação de Atendimento", "Estruturação Digital da Marca"],
  },
  {
    id: "3",
    title: "NEXO Dashboard",
    category: "UI/UX",
    client: "NEXO Analytics",
    year: "2024",
    duration: "4 meses",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&h=400&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900&auto=format&fit=crop",
    description: "Dashboard analítico com visualização de dados",
    fullDescription: "Projetamos e desenvolvemos um dashboard analítico completo para a NEXO, permitindo que seus clientes visualizem dados complexos de forma intuitiva.",
    challenge: "A NEXO precisava transformar grandes volumes de dados em visualizações compreensíveis, mantendo a interface limpa e não sobrecarregando os usuários.",
    solution: "Criamos um sistema de design modular com componentes reutilizáveis, hierarquia visual clara e visualizações de dados interativas.",
    results: [
      "Redução de 60% no tempo de análise",
      "Satisfação do usuário de 4.8/5 estrelas",
      "Adoção de 95% entre os clientes",
      "Aumento de 70% na retenção",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=600&auto=format&fit=crop",
    ],
    services: ["UX Research", "UI Design", "Prototipagem", "Design System"],
  },
  {
    id: "4",
    title: "Innova Social",
    category: "SOCIAL MEDIA",
    client: "Innova Retail",
    year: "2024",
    duration: "6 meses",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&h=400&auto=format&fit=crop",
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&h=900&auto=format&fit=crop",
    description: "Estratégia e design para redes sociais",
    fullDescription: "Desenvolvemos uma estratégia completa de social media para a Innova Retail, incluindo criação de conteúdo, design de posts e gestão de campanhas.",
    challenge: "A Innova tinha presença fraca nas redes sociais e precisava construir uma comunidade engajada enquanto aumentava as vendas.",
    solution: "Criamos uma estratégia de conteúdo baseada em storytelling, com calendário editorial estruturado e templates de design consistentes.",
    results: [
      "Crescimento de 400% em seguidores",
      "Engajamento médio de 8.5%",
      "Aumento de 250% em vendas via social",
      "ROI de 320% em campanhas pagas",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&h=600&auto=format&fit=crop",
    ],
    services: ["Estratégia de Conteúdo", "Design de Posts", "Gestão de Ads", "Análise de Métricas"],
  },
]

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0)

  // Lock body scroll when modal is open and handle ESC key
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
      
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") setSelectedProject(null)
        if (e.key === "ArrowLeft") handlePrevProject()
        if (e.key === "ArrowRight") handleNextProject()
      }
      window.addEventListener("keydown", handleEsc)
      return () => {
        document.body.style.overflow = "unset"
        window.removeEventListener("keydown", handleEsc)
      }
    } else {
      document.body.style.overflow = "unset"
    }
  }, [selectedProject])

  const handleNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const nextIndex = (currentIndex + 1) % projects.length
    setSelectedProject(projects[nextIndex])
    setCurrentGalleryIndex(0)
  }

  const handlePrevProject = () => {
    if (!selectedProject) return
    const currentIndex = projects.findIndex(p => p.id === selectedProject.id)
    const prevIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
    setSelectedProject(projects[prevIndex])
    setCurrentGalleryIndex(0)
  }

  return (
    <>
      <section id="portfolio" className="py-[120px] bg-background">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase"
              >
                <span className="w-8 h-[1px] bg-accent" />
                NOSSOS TRABALHOS
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-[clamp(40px,5vw,72px)] leading-none tracking-tight"
              >
                Portfólio <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Selecionado</span>
              </motion.h2>
            </div>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#contact"
              className="flex items-center gap-2 text-accent text-sm font-bold tracking-wide group"
            >
              Ver todos os projetos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => {
                  setSelectedProject(project)
                  setCurrentGalleryIndex(0)
                }}
                className="group relative aspect-[3/2] overflow-hidden cursor-pointer"
              >
                {/* Glow border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[4px]" />
                
                <div className="absolute inset-0 bg-card rounded-[4px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Category tag */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-[9px] tracking-[2px] font-bold px-3 py-1.5 rounded-[2px]">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-display text-3xl text-white mb-2 tracking-wide">
                      {project.title}
                    </h3>
                    
                    <AnimatePresence>
                      {hoveredId === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                        >
                          <p className="text-white/60 text-sm mb-4">{project.description}</p>
                          <div className="flex items-center gap-2 text-accent text-xs font-bold tracking-wide">
                            Ver projeto completo <ExternalLink size={14} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-20 h-20 bg-accent/20 rotate-45 group-hover:bg-accent/40 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[1200px] mx-4 my-8 bg-background border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-white/60 hover:text-white hover:border-accent/50 transition-all"
              >
                <X size={20} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevProject}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-white/60 hover:text-white hover:border-accent/50 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextProject}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/10 rounded-full text-white/60 hover:text-white hover:border-accent/50 transition-all"
              >
                <ChevronRight size={24} />
              </button>

              {/* Hero Image */}
              <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
                <Image
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Hero Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block bg-accent/20 border border-accent/30 text-accent text-[10px] tracking-[2px] font-bold px-4 py-2 rounded-[2px] mb-4"
                  >
                    {selectedProject.category}
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="font-display text-[clamp(28px,5vw,48px)] text-white leading-none tracking-tight mb-4"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-4 md:gap-6 text-white/60 text-sm"
                  >
                    <div className="flex items-center gap-2">
                      <Tag size={14} className="text-accent" />
                      {selectedProject.client}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-accent" />
                      {selectedProject.year}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-accent" />
                      {selectedProject.duration}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="grid lg:grid-cols-3 gap-10">
                  {/* Main Content */}
                  <div className="lg:col-span-2 space-y-10">
                    {/* Description */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="font-display text-xl text-white mb-4">Sobre o Projeto</h3>
                      <p className="text-white/70 leading-relaxed">{selectedProject.fullDescription}</p>
                    </motion.div>

                    {/* Challenge & Solution */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="font-display text-xl text-white mb-4">O Desafio</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{selectedProject.challenge}</p>
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="font-display text-xl text-white mb-4">Nossa Solução</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{selectedProject.solution}</p>
                      </motion.div>
                    </div>

                    {/* Gallery */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <h3 className="font-display text-xl text-white mb-4">Galeria</h3>
                      <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-4">
                        <Image
                          src={selectedProject.gallery[currentGalleryIndex]}
                          alt={`${selectedProject.title} - Imagem ${currentGalleryIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex gap-2">
                        {selectedProject.gallery.map((img, i) => (
                          <button
                            key={i}
                            onClick={() => setCurrentGalleryIndex(i)}
                            className={`relative w-20 h-14 rounded overflow-hidden border-2 transition-all ${
                              i === currentGalleryIndex ? "border-accent" : "border-transparent opacity-50 hover:opacity-100"
                            }`}
                          >
                            <Image src={img} alt="" fill className="object-cover" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Services */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-card border border-white/5 p-6 rounded-xl"
                    >
                      <h3 className="font-display text-lg text-white mb-4">Serviços</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.services.map((service) => (
                          <span
                            key={service}
                            className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-[2px]"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Results */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-6 rounded-xl"
                    >
                      <h3 className="font-display text-lg text-white mb-4">Resultados</h3>
                      <ul className="space-y-3">
                        {selectedProject.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                            <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="bg-card border border-white/5 p-6 rounded-xl text-center"
                    >
                      <h3 className="font-display text-lg text-white mb-3">Gostou do que viu?</h3>
                      <p className="text-white/60 text-sm mb-4">
                        Vamos criar algo incrível para sua marca.
                      </p>
                      <a
                        href="https://wa.me/5511983182274"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full bg-accent text-white px-6 py-3 rounded-[2px] text-sm font-bold tracking-wide hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] transition-all"
                      >
                        Falar com a Veltrix
                        <ExternalLink size={16} />
                      </a>
                    </motion.div>
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
