"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Angel Luxe",
    category: "DESENVOLVIMENTO",
    description: "Plataforma de e-commerce premium para brand de moda de luxo. Design sofisticado com experiência de compra intuitiva e integração com sistemas de gestão de estoque.",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e565e479?w=600&h=400&fit=crop",
    tags: ["E-commerce", "Next.js", "Stripe", "Design"],
    link: "#"
  },
  {
    id: 2,
    title: "Adega da Mooca",
    category: "DESENVOLVIMENTO",
    description: "Site e catálogo digital para vinícola artesanal. Showcasing de produtos com sistema de recomendação de vinhos e integração com delivery partners.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2cab2debf?w=600&h=400&fit=crop",
    tags: ["Website", "React", "CMS", "Branding"],
    link: "#"
  }
]

export default function PortfolioProjects() {
  return (
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
            Portfólio <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Selecionado</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-[600px] mx-auto text-base leading-relaxed mb-8"
          >
            Conheça alguns dos projetos que transformaram marcas e geraram resultados reais para nossos clientes.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="#"
            className="inline-flex items-center gap-2 text-accent hover:text-orange-500 transition-colors font-semibold text-sm tracking-wide"
          >
            Ver todos os projetos
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
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
              className="group cursor-pointer overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-80 md:h-96 overflow-hidden rounded-xl mb-6 bg-secondary border border-white/5">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                
                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-accent rounded-full flex items-center justify-center"
                  >
                    <ArrowUpRight className="w-7 h-7 text-white" />
                  </motion.div>
                </motion.div>

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
                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-accent hover:text-orange-500 transition-colors font-semibold text-sm"
                >
                  Ver Projeto
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
