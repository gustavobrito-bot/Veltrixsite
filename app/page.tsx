"use client"

import Header from "../header"
import Hero from "../final-cta"
import Differentials from "../differentials"
import Portfolio from "../portfolio"
import Avatar from "../avatar"
import Contact from "../contact"
import Footer from "../footer"

export default function Home() {
  return (
    <main className="bg-background">
      <Header />
      <Hero />
      <Differentials />
      <Portfolio />
      <Avatar />
      <Contact />
      <Footer />
    </main>
  )
}
