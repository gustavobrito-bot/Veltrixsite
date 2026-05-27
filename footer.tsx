"use client"

import { motion } from "motion/react"

const clients = [
  { name: "TechFlow", logo: "TECHFLOW" },
  { name: "Lumnia", logo: "LUMNIA" },
  { name: "Innova", logo: "INNOVA" },
  { name: "NEXO", logo: "NEXO" },
  { name: "Blue Sky", logo: "BLUE SKY" },
  { name: "Vertex", logo: "VERTEX" },
  { name: "Quantum", logo: "QUANTUM" },
  { name: "Pulse", logo: "PULSE" },
]

const doubleClients = [...clients, ...clients]

export default function ClientsMarquee() {
  return (
    <section className="py-16 border-y border-white/5 overflow-hidden bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-mono text-[10px] tracking-[4px] text-white/30 uppercase"
        >
          Empresas que confiam na Veltrix
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 whitespace-nowrap"
          animate={{ x: [0, -960] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubleClients.map((client, i) => (
            <div
              key={i}
              className="flex items-center justify-center min-w-[120px] group"
            >
              <span className="font-display text-2xl tracking-[4px] text-white/20 group-hover:text-accent/60 transition-colors duration-500">
                {client.logo}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
