"use client"

import type { ReactNode } from "react"
import { motion } from "motion/react"

interface SectionHeadingProps {
  label?: string
  title: ReactNode
  description?: string
  align?: "left" | "center"
  tone?: "dark" | "light"
}

export default function SectionHeading({ label, title, description, align = "center", tone = "dark" }: SectionHeadingProps) {
  const centered = align === "center"
  const onLight = tone === "light"

  return (
    <div className={`flex flex-col gap-4 ${centered ? "items-center text-center" : "items-start text-left"}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-label"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.08 }}
        className={`font-display text-balance text-[clamp(1.75rem,5.5vw,2.75rem)] font-semibold leading-[1.15] tracking-tight ${
          onLight ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16 }}
          className={`max-w-[600px] text-pretty text-[15px] leading-relaxed sm:text-base ${onLight ? "text-white/75" : "text-muted"}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
