"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import { Star } from "lucide-react"

const clients = ["Angel Luxe", "Adega da Mooca"]

const stats = [
  { prefix: "+ ", value: 2, suffix: "", label: "Projetos entregues" },
  { prefix: "", value: 100, suffix: "%", label: "Satisfação" },
  { prefix: "", value: 5, suffix: "", label: "Avaliação média", star: true },
  { prefix: "", value: 24, suffix: "h", label: "Tempo de resposta" },
]

function Counter({ target, active }: { target: number; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1400
    const start = performance.now()
    let frame: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target])

  return <>{count}</>
}

export default function ClientsStrip() {
  const ref = useRef<HTMLDListElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section aria-labelledby="clients-title" className="py-16 sm:py-20">
      <div className="container-x flex flex-col items-center gap-10">
        <h3 id="clients-title" className="text-[15px] font-medium uppercase tracking-[0.08em] text-foreground">
          Clientes parceiros
        </h3>

        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {clients.map((client, i) => (
            <motion.li
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="font-display text-2xl font-bold tracking-tight text-muted/70 transition-colors hover:text-foreground sm:text-3xl"
            >
              {client}
            </motion.li>
          ))}
        </ul>

        <dl
          ref={ref}
          className="mt-6 grid w-full grid-cols-2 gap-y-10 border-t border-border pt-12 text-center md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <dd className="order-1 flex items-center gap-1 font-display text-4xl font-semibold leading-none text-accent sm:text-5xl">
                {stat.prefix}
                <Counter target={stat.value} active={inView} />
                {stat.suffix}
                {stat.star && <Star className="size-6 fill-accent text-accent sm:size-8" aria-label="estrelas" />}
              </dd>
              <dt className="order-2 text-[12px] font-semibold uppercase tracking-[0.06em] text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
