"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contato", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/5">
      <nav className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center"
        >
          <Image
            src="/veltrix-logo.png"
            alt="Veltrix Tecnologia"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white/70 hover:text-accent transition-colors text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511983182274"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-custom text-sm"
          >
            Conversar
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white/70 hover:text-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511983182274"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-custom text-sm w-full text-center"
              >
                Conversar
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  )
}
