"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "motion/react"
import { ArrowRight, Play } from "lucide-react"

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
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

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const fullText = "STARTUP DE TECNOLOGIA PREMIUM"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayText(fullText.substring(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { number: 2, suffix: "+", label: "PROJETOS" },
    { number: 100, suffix: "%", label: "SATISFAÇÃO" },
    { number: 5, suffix: "★", label: "AVALIAÇÃO" },
  ]

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-[120px] px-6 md:px-12 pb-12"
    >
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0 flex items-center justify-center"
        style={{ x: mousePosition.x * 0.5, y: mousePosition.y * 0.5 }}
      >
        <img
          src="/images/black-hole-gif.gif"
          alt="Black hole animation"
          className="w-auto h-3/4 object-contain opacity-60"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/60" />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(255,87,34,0.06)_0%,transparent_60%),radial-gradient(ellipse_50%_80%_at_20%_80%,rgba(10,22,40,0.8)_0%,transparent_50%)] z-[1]"
        style={{ x: mousePosition.x * -1, y: mousePosition.y * -1 }}
      />

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,87,34,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,87,34,0.3)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,87,34,0.08)_0%,transparent_70%)] pointer-events-none"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2.5 bg-accent/10 border border-accent/30 px-3 py-1 sm:px-4 sm:py-1.5 rounded-[2px] font-mono text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-accent mb-6 sm:mb-8"
          >
            <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
            {displayText}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.95] tracking-tight mb-6 sm:mb-7"
          >
            <span className="text-white">TRANSFORMAMOS</span>
            <br />
            <span className="text-white">MARCAS EM</span>
            <br />
            <span className="text-accent drop-shadow-[0_0_40px_rgba(255,87,34,0.4)]">EXPERIÊNCIAS</span>
            <br />
            <span className="text-white">DIGITAIS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/70 text-sm sm:text-base leading-relaxed max-w-[480px] mb-8 sm:mb-12"
          >
            Branding, tecnologia e performance para empresas que querem crescer e se posicionar acima da média.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10 sm:mb-12"
          >
            <a 
              href="https://wa.me/5511983182274" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom text-[10px] sm:text-[11px] flex items-center gap-2 group"
            >
              Falar com Nosso Time
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="btn-secondary-custom text-[10px] sm:text-[11px]">
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 sm:gap-10"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="font-display text-3xl sm:text-4xl text-accent leading-none group-hover:scale-110 transition-transform origin-left">
                  <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-[9px] sm:text-[10px] text-white/40 tracking-[1.5px] sm:tracking-[2px] mt-1 sm:mt-1.5 font-medium group-hover:text-white/60 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative lg:block mt-8 lg:mt-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-transparent to-transparent rounded-3xl blur-3xl animate-pulse" />
          <Image
            src="/veltrix-logo-transparent.png"
            alt="Veltrix Tecnologia"
            width={500}
            height={300}
            className="w-full max-w-md lg:max-w-lg drop-shadow-[0_0_60px_rgba(255,87,34,0.4)] animate-float relative z-10"
          />
        </motion.div>
      </div>
    </section>
  )
}
