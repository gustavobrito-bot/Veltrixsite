"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { ArrowUpRight, X, Calendar, Clock, User, Check, ChevronLeft, ChevronRight } from "lucide-react"
import SectionHeading from "./section-heading"
import { WHATSAPP_URL } from "./lib/site"

const projects = [
  {
    id: 1,
    title: "Angel Luxe",
    category: "E-commerce",
    client: "Angélica",
    year: "2025",
    duration: "2 meses",
    heroImage: "/images/angel-luxe-hero.png",
    description:
      "Plataforma de e-commerce premium para marca de moda de luxo, com experiência de compra intuitiva e integração com gestão de estoque.",
    about:
      "Desenvolvimento de um site de vendas moderno e estratégico para nossa cliente Angélica, com foco em fortalecer sua presença digital, transmitir mais profissionalismo e aumentar suas oportunidades de venda online.",
    challenge:
      "A cliente não possuía um site próprio, o que limitava sua autoridade no mercado e dificultava a conversão de novos clientes pela internet. Além disso, sua comunicação visual não transmitia toda a qualidade e o valor da marca.",
    solution:
      "Criamos uma solução digital completa: um site moderno, responsivo e pensado para converter. Também trabalhamos toda a identidade visual da marca e implementamos automações para otimizar processos e melhorar o atendimento.",
    services: ["Identidade visual", "Desenvolvimento de site", "Automação de processos", "Estratégia digital"],
    results: [
      "Presença digital mais forte e profissional",
      "Estrutura preparada para escalar vendas",
      "Maior autoridade e credibilidade no mercado",
      "Experiência do cliente significativamente melhorada",
    ],
    gallery: ["/images/angel-luxe-hero.png", "/images/angel-luxe-categorias.png", "/images/angel-luxe-produto.png"],
    tags: ["E-commerce", "Next.js", "Stripe", "Design"],
  },
  {
    id: 2,
    title: "Adega da Mooca",
    category: "Website",
    client: "Adega da Mooca",
    year: "2025",
    duration: "1 mês",
    heroImage: "/images/adega-produtos.png",
    description:
      "Plataforma digital completa para adega e conveniência, com cardápio online, pedidos via WhatsApp e delivery integrado para a região da Mooca.",
    about:
      "Criação da presença digital completa da Adega da Mooca, facilitando pedidos online, apresentando o catálogo de bebidas e conectando o negócio com clientes da região de forma prática.",
    challenge:
      "A adega não tinha presença digital estruturada e perdia vendas para concorrentes que ofereciam pedidos online. Os clientes precisavam ligar ou ir pessoalmente para ver os produtos disponíveis.",
    solution:
      "Desenvolvemos um site completo com cardápio digital interativo, pedidos via WhatsApp, integração com delivery, página de localização com Google Maps e identidade visual renovada.",
    services: ["Identidade visual", "Desenvolvimento web", "Cardápio digital", "Integração WhatsApp"],
    results: [
      "Cardápio online com 21 produtos organizados por categoria",
      "Sistema de pedidos via WhatsApp integrado",
      "Página de localização com mapa e endereço completo",
      "Presença digital profissional e conversora",
    ],
    gallery: ["/images/adega-produtos.png", "/images/adega-modal.png", "/images/adega-localizacao.png"],
    tags: ["Website", "React", "CMS", "Branding"],
  },
]

type Project = (typeof projects)[number]

export default function PortfolioProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project: Project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeModal = () => setSelectedProject(null)

  useEffect(() => {
    if (!selectedProject) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener("keydown", onKey)
    }
  }, [selectedProject])

  const step = (dir: 1 | -1) => {
    if (!selectedProject) return
    const total = selectedProject.gallery.length
    setCurrentImageIndex((prev) => (prev + dir + total) % total)
  }

  return (
    <>
      <section id="portfolio" className="relative py-24 sm:py-32">
        <div className="container-x flex flex-col gap-14">
          <SectionHeading
            label="Nossos trabalhos"
            title={
              <>
                Portfólio <span className="text-accent">selecionado</span>
              </>
            }
            description="Conheça alguns dos projetos que transformaram marcas e geraram resultados reais para nossos clientes."
          />

          <ul className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {projects.map((project, index) => (
              <motion.li
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  type="button"
                  onClick={() => openModal(project)}
                  className="group flex w-full flex-col gap-5 text-left"
                  aria-label={`Ver detalhes do projeto ${project.title}`}
                >
                  <div className="surface relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground backdrop-blur">
                      {project.category}
                    </span>
                    <span className="absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-accent text-white opacity-90 shadow-[0_10px_30px_-10px_rgba(255,87,34,0.9)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:opacity-100">
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-pretty text-[14px] leading-relaxed text-muted sm:text-[15px]">
                      {project.description}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-foreground/75"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/90 p-3 backdrop-blur-sm sm:p-6"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: "spring", damping: 26, stiffness: 240 }}
              onClick={(e) => e.stopPropagation()}
              className="relative my-auto w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl"
            >
              <button
                type="button"
                onClick={closeModal}
                aria-label="Fechar"
                className="absolute right-3 top-3 z-20 flex size-10 items-center justify-center rounded-full border border-white/15 bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-accent sm:right-5 sm:top-5"
              >
                <X className="size-5" />
              </button>

              <div className="relative aspect-[16/10] w-full sm:aspect-[21/9]">
                <Image
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5 sm:p-8">
                  <span className="w-fit rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                    {selectedProject.category}
                  </span>
                  <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                    {selectedProject.title}
                  </h2>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted sm:text-sm">
                    <li className="flex items-center gap-1.5">
                      <User className="size-3.5" /> {selectedProject.client}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Calendar className="size-3.5" /> {selectedProject.year}
                    </li>
                    <li className="flex items-center gap-1.5">
                      <Clock className="size-3.5" /> {selectedProject.duration}
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-3">
                <div className="flex flex-col gap-8 lg:col-span-2">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">Sobre o projeto</h3>
                    <p className="text-pretty text-[14px] leading-relaxed text-muted sm:text-[15px]">
                      {selectedProject.about}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-2 rounded-xl border border-white/8 bg-background/50 p-5">
                      <h4 className="text-sm font-bold text-foreground">O desafio</h4>
                      <p className="text-[13px] leading-relaxed text-muted">{selectedProject.challenge}</p>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl border border-accent/25 bg-accent/5 p-5">
                      <h4 className="text-sm font-bold text-foreground">Nossa solução</h4>
                      <p className="text-[13px] leading-relaxed text-muted">{selectedProject.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h3 className="font-display text-lg font-bold text-foreground sm:text-xl">Galeria</h3>
                    <div className="relative">
                      <div className="relative aspect-video overflow-hidden rounded-xl border border-white/8 bg-background">
                        <Image
                          src={selectedProject.gallery[currentImageIndex]}
                          alt={`${selectedProject.title} – imagem ${currentImageIndex + 1}`}
                          fill
                          sizes="(min-width: 1024px) 680px, 100vw"
                          className="object-cover object-top"
                        />
                      </div>
                      {selectedProject.gallery.length > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={() => step(-1)}
                            aria-label="Imagem anterior"
                            className="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-accent"
                          >
                            <ChevronLeft className="size-5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => step(1)}
                            aria-label="Próxima imagem"
                            className="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition-colors hover:bg-accent"
                          >
                            <ChevronRight className="size-5" />
                          </button>
                        </>
                      )}
                    </div>
                    {selectedProject.gallery.length > 1 && (
                      <div className="flex gap-2">
                        {selectedProject.gallery.map((img, idx) => (
                          <button
                            key={img}
                            type="button"
                            onClick={() => setCurrentImageIndex(idx)}
                            aria-label={`Ver imagem ${idx + 1}`}
                            aria-current={idx === currentImageIndex}
                            className={`relative h-12 w-16 overflow-hidden rounded-lg border-2 transition-colors ${
                              idx === currentImageIndex ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image src={img} alt="" fill sizes="64px" className="object-cover object-top" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <aside className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 rounded-xl border border-white/8 bg-background/50 p-5">
                    <h4 className="text-sm font-bold text-foreground">Serviços</h4>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 rounded-xl border border-white/8 bg-background/50 p-5">
                    <h4 className="text-sm font-bold text-foreground">Resultados</h4>
                    <ul className="flex flex-col gap-2.5">
                      {selectedProject.results.map((result) => (
                        <li key={result} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-muted">
                          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                            <Check className="size-2.5" />
                          </span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/20 to-accent/5 p-5">
                    <h4 className="font-display text-lg font-bold text-foreground">Gostou do que viu?</h4>
                    <p className="text-[13px] leading-relaxed text-muted">Vamos criar algo incrível para sua marca.</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-custom w-full">
                      Falar com a Veltrix
                    </a>
                  </div>
                </aside>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
