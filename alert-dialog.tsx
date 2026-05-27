"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Diferenciais", href: "#differentials" },
    { name: "Portfólio", href: "#testimonials" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-12 transition-all duration-500 ${
        isScrolled ? "py-3 mt-2 max-w-[1300px] mx-auto" : "bg-background/60 backdrop-blur-md py-5"
      }`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl px-8 py-3 rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            : ""
        }`}
      >
        <Link href="/" className="flex items-center no-underline group md:w-48">
          <div className="flex items-center gap-3">
            <Image
              src="/veltrix-logo.png"
              alt="Veltrix Tecnologia"
              width={100}
              height={40}
              className="h-10 w-auto transition-transform group-hover:scale-105 mix-blend-screen brightness-110"
            />
          </div>
        </Link>

        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/60 no-underline text-[11px] tracking-[2px] font-bold uppercase transition-all hover:text-accent relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center md:w-48 justify-end gap-3">
          <motion.a
            href="https://wa.me/5511983182274"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-accent to-[#E85A0A] text-white px-6 py-2.5 rounded-[2px] text-[10px] tracking-[2px] font-extrabold uppercase no-underline transition-all hover:shadow-[0_0_40px_rgba(255,87,34,0.6)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar Agora
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/70 no-underline text-sm font-bold uppercase tracking-[2px] py-3 border-b border-white/5 last:border-0 hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                href="https://wa.me/5511983182274"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-br from-accent to-[#E85A0A] text-white py-4 rounded-[2px] text-[11px] tracking-[2px] font-extrabold uppercase no-underline mt-4"
              >
                Falar Agora
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
