"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

interface SectionHeadingProps {
  label: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
}

export default function SectionHeading({ label, title, description, align = "center" }: SectionHeadingProps) {
  const centered = align === "center"

  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-label"
      >
        {label}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className="font-display text-balance text-[clamp(1.9rem,6.5vw,3.5rem)] font-bold leading-[1.05] tracking-tight text-foreground"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className="max-w-[560px] text-pretty text-[15px] leading-relaxed text-muted sm:text-base"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
