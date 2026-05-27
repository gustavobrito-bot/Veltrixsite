"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowLeft, ExternalLink, Calendar, Tag, Clock, CheckCircle2 } from "lucide-react"

const projects = [
  {
    id: "1",
    title: "TechFlow Rebrand",
    category: "BRANDING",
    client: "TechFlow Inc.",
    year: "2024",
    duration: "3 meses",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&h=900&auto=format&fit=crop",
    description: "Redesenhamos completamente a identidade visual da TechFlow, uma startup de tecnologia em rápido crescimento. O projeto incluiu a criação de um novo logotipo, sistema de cores, tipografia e guidelines completas de marca.",
    challenge: "A TechFlow precisava de uma identidade que refletisse sua inovação tecnológica enquanto mantinha uma aparência profissional e confiável para seus clientes enterprise.",
    solution: "Desenvolvemos uma identidade visual moderna com formas geométricas dinâmicas que representam fluxo de dados e conectividade. A paleta de cores combina tons de azul tecnológico com acentos vibrantes de laranja para destacar a energia da marca.",
    results: [
      "Aumento de 150% no reconhecimento de marca",
      "Engajamento nas redes sociais cresceu 200%",
      "Taxa de conversão do site aumentou 45%",
      "Feedback positivo de 98% dos stakeholders",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&h=600&auto=format&fit=crop",
    ],
    services: ["Identidade Visual", "Logo Design", "Brand Guidelines", "Material Gráfico"],
  },
  {
    id: "2",
    title: "Lumnia Website",
    category: "DESENVOLVIMENTO",
    client: "Lumnia Digital",
    year: "2024",
    duration: "2 meses",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&h=900&auto=format&fit=crop",
    description: "Criamos um site institucional premium para a Lumnia Digital, com foco em animações sofisticadas, performance otimizada e uma experiência de usuário excepcional que reflete a qualidade dos serviços da empresa.",
    challenge: "A Lumnia precisava de um site que se destacasse no mercado competitivo de agências digitais, demonstrando suas capacidades técnicas através da própria experiência do site.",
    solution: "Desenvolvemos um site com animações personalizadas, micro-interações elegantes e um design minimalista que carrega rapidamente. Utilizamos Next.js para garantir SEO otimizado e performance excepcional.",
    results: [
      "Tempo de carregamento abaixo de 2 segundos",
      "Score de 98 no Google PageSpeed",
      "Aumento de 180% em leads qualificados",
      "Redução de 40% na taxa de rejeição",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522542550221-31fd8575f5a1?q=80&w=800&h=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&h=600&auto=format&fit=crop",
    ],
    services: ["Web Design", "Desenvolvimento Front-end", "Animações", "SEO"],
  },
  {
    id: "3",
    title: "NEXO Dashboard",
    category: "UI/UX",
    client: "NEXO Analytics",
    year: "2024",
    duration: "4 meses",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900&auto=format&fit=crop",
    description: "Projetamos e desenvolvemos um dashboard analítico completo para a NEXO, permitindo que seus clientes visualizem dados complexos de forma intuitiva e tomem decisões baseadas em insights claros.",
    challenge: "A NEXO precisava transformar grandes volumes de dados em visualizações compreensíveis, mantendo a interface limpa e não sobrecarregando os usuários com informações.",
    solution: "Criamos um sistema de design modular com componentes reutilizáveis, hierarquia visual clara e visualizações de dados interativas. O dashboard adapta-se a diferentes níveis de usuários.",
    results: [
      "Redução de 60% no tempo de análise de dados",
      "Satisfação do usuário de 4.8/5 estrelas",
      "Adoção de 95% entre os clientes",
      "Aumento de 70% na retenção de usuários",
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
    heroImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1600&h=900&auto=format&fit=crop",
    description: "Desenvolvemos uma estratégia completa de social media para a Innova Retail, incluindo criação de conteúdo, design de posts, gestão de campanhas e análise de métricas para maximizar o engajamento.",
    challenge: "A Innova tinha presença fraca nas redes sociais e precisava construir uma comunidade engajada enquanto aumentava as vendas através dos canais digitais.",
    solution: "Criamos uma estratégia de conteúdo baseada em storytelling, com calendário editorial estruturado, templates de design consistentes e campanhas segmentadas para diferentes públicos.",
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

export default function ProjectPage() {
  const params = useParams()
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-white mb-4">Projeto não encontrado</h1>
          <Link href="/" className="text-accent hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link
            href="/#portfolio"
            className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm font-medium"
          >
            <ArrowLeft size={18} />
            Voltar ao Portfólio
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/veltrix-logo.png"
              alt="Veltrix Tecnologia"
              width={80}
              height={32}
              className="h-8 w-auto mix-blend-screen brightness-110"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-[1400px] mx-auto">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block bg-accent/20 border border-accent/30 text-accent text-[10px] tracking-[2px] font-bold px-4 py-2 rounded-[2px] mb-6"
              >
                {project.category}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-[clamp(36px,6vw,72px)] text-white leading-none tracking-tight mb-6"
              >
                {project.title}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap gap-6 text-white/60 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-accent" />
                  {project.client}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-accent" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-accent" />
                  {project.duration}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl text-white mb-6">Sobre o Projeto</h2>
                <p className="text-white/70 text-lg leading-relaxed">{project.description}</p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl text-white mb-6">O Desafio</h2>
                <p className="text-white/70 leading-relaxed">{project.challenge}</p>
              </motion.div>

              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl text-white mb-6">Nossa Solução</h2>
                <p className="text-white/70 leading-relaxed">{project.solution}</p>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl text-white mb-6">Galeria</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.gallery.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg group"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} - Imagem ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card border border-white/5 p-8 rounded-lg"
              >
                <h3 className="font-display text-lg text-white mb-6">Serviços Realizados</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service) => (
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
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 p-8 rounded-lg"
              >
                <h3 className="font-display text-lg text-white mb-6">Resultados</h3>
                <ul className="space-y-4">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                      <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-white/5 p-8 rounded-lg text-center"
              >
                <h3 className="font-display text-lg text-white mb-4">Gostou do que viu?</h3>
                <p className="text-white/60 text-sm mb-6">
                  Vamos criar algo incrível para sua marca também.
                </p>
                <a
                  href="https://wa.me/5511983182274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-[2px] text-sm font-bold tracking-wide hover:shadow-[0_0_30px_rgba(255,87,34,0.4)] transition-all"
                >
                  Falar com a Veltrix
                  <ExternalLink size={16} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(32px,4vw,48px)] text-white mb-6"
          >
            Pronto para <span className="text-accent">transformar</span> sua marca?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 mb-10 max-w-xl mx-auto"
          >
            Entre em contato e vamos discutir como podemos elevar sua presença digital ao próximo nível.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="https://wa.me/5511983182274"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              Iniciar Projeto
            </a>
            <Link href="/#portfolio" className="btn-secondary-custom">
              Ver Mais Projetos
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            © 2025 <span className="text-accent">Veltrix Tecnologia</span>. Todos os direitos reservados.
          </div>
          <Link href="/" className="text-white/40 hover:text-accent text-sm transition-colors">
            Voltar ao site principal
          </Link>
        </div>
      </footer>
    </div>
  )
}
