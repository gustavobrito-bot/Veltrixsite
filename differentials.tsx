"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { Sparkles, Zap, Target, Award, Users, TrendingUp } from "lucide-react"

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const stats = [
    { icon: Award, number: 2, suffix: "+", label: "Projetos Entregues" },
    { icon: Users, number: 2, suffix: "+", label: "Clientes Atendidos" },
    { icon: TrendingUp, number: 100, suffix: "%", label: "Taxa de Satisfação" },
  ]

  const features = [
    { icon: Target, title: "Estratégia", desc: "Cada projeto começa com análise profunda do mercado e objetivos." },
    { icon: Sparkles, title: "Criatividade", desc: "Design inovador que destaca sua marca da concorrência." },
    { icon: Zap, title: "Performance", desc: "Soluções otimizadas para resultados mensuráveis." },
  ]

  const mvv = [
    { label: "MISSÃO", text: "Elevar marcas através da tecnologia, branding e performance." },
    { label: "VISÃO", text: "Ser referência em transformação digital e construção de marcas." },
    { label: "VALORES", tags: ["Inovação", "Criatividade", "Estratégia", "Excelência", "Performance", "Transparência"] },
  ]

  return (
    <section id="about" className="py-[140px] bg-secondary/30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Side - Animated Visual */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main container with glow */}
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-3xl blur-3xl" />
              
              {/* Animated rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-accent/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border border-accent/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] border border-dashed border-accent/15 rounded-full"
                />
              </div>

              {/* Center logo with pulse */}
              <div className="relative z-10 flex items-center justify-center py-20">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 40px rgba(255, 87, 34, 0.2)",
                      "0 0 80px rgba(255, 87, 34, 0.4)",
                      "0 0 40px rgba(255, 87, 34, 0.2)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative bg-gradient-to-br from-card to-background p-8 md:p-12 rounded-3xl border border-accent/20"
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    style={{ willChange: "transform" }}
                  >
                    <Image
                      src="/veltrix-logo.png"
                      alt="Veltrix Tecnologia"
                      width={200}
                      height={200}
                      className="w-32 h-auto md:w-48"
                    />
                  </motion.div>
                  
                  {/* Sparkle effects */}
                  <motion.div
                    animate={{ opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    style={{ willChange: "opacity, transform" }}
                    className="absolute -top-2 -right-2"
                  >
                    <Sparkles className="w-6 h-6 text-accent" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                style={{ willChange: "transform" }}
                className="absolute top-8 left-2 md:-left-4 bg-card/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 tracking-wider">TECNOLOGIA</div>
                    <div className="text-sm font-bold text-white">De Ponta</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, 10, 0] }}
                transition={{ 
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                  opacity: { duration: 0.5 }
                }}
                style={{ willChange: "transform" }}
                className="absolute top-20 right-2 md:-right-4 bg-card/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 tracking-wider">CRESCIMENTO</div>
                    <div className="text-sm font-bold text-green-400">Contínuo</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{ 
                  y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                  opacity: { duration: 0.5 }
                }}
                style={{ willChange: "transform" }}
                className="absolute bottom-16 left-2 md:left-4 bg-card/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 tracking-wider">QUALIDADE</div>
                    <div className="text-sm font-bold text-blue-400">Premium</div>
                  </div>
                </div>
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.3 }}
                className="absolute -bottom-4 right-8 md:right-16 bg-gradient-to-br from-accent to-[#D4580E] p-5 rounded-2xl text-center shadow-[0_0_50px_rgba(255,87,34,0.4)]"
              >
                <div className="font-display text-3xl md:text-4xl text-white leading-none">100%</div>
                <div className="text-[9px] tracking-[2px] text-white/80 font-medium mt-1">DIGITAL</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 60 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 font-mono text-[10px] tracking-[4px] text-accent mb-4 uppercase">
              <span className="w-8 h-[1px] bg-accent" />
              QUEM SOMOS
            </div>
            <h2 className="font-display text-[clamp(36px,5vw,64px)] leading-[1.1] tracking-tight mb-6">
              Transformamos Ideias em{" "}
              <span className="text-transparent [-webkit-text-stroke:1px_var(--accent)]">Experiências</span>{" "}
              <span className="text-accent">Digitais.</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8">
              A <span className="text-white font-semibold">Veltrix Tecnologia</span> nasceu da paixão por criar soluções digitais que realmente fazem diferença. Unimos estratégia, design de alto nível e tecnologia de ponta para construir marcas que se destacam no mercado.
            </p>

            {/* Mini features */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div className="text-xs font-bold text-white mb-1">{feature.title}</div>
                  <div className="text-[10px] text-white/40 leading-tight hidden md:block">{feature.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* MVV Cards */}
            <div className="flex flex-col gap-4">
              {mvv.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="bg-background/50 border border-white/5 border-l-4 border-l-accent p-5 rounded-r-lg transition-all hover:bg-accent/5 hover:border-accent/20"
                >
                  <div className="font-mono text-[10px] tracking-[3px] text-accent mb-2">{item.label}</div>
                  {item.text && <div className="text-sm text-white/70 leading-relaxed">{item.text}</div>}
                  {item.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-[2px] text-[10px] text-accent tracking-wider hover:bg-accent/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-6 bg-gradient-to-r from-card via-card/80 to-card border border-white/5 rounded-2xl p-8 md:p-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <stat.icon className="w-5 h-5 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="font-display text-3xl md:text-5xl text-accent leading-none mb-2 group-hover:scale-110 transition-transform origin-center">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] md:text-xs text-white/40 tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
