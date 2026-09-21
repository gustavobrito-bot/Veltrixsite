import Header from "../header"
import Hero from "../final-cta"
import ClientsStrip from "../clients-strip"
import About from "../differentials"
import Services from "../portfolio"
import PortfolioProjects from "../portfolio-projects"
import Ecosystem from "../ecosystem"
import LaunchOffer from "../avatar"
import Contact from "../contact"
import Footer from "../footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Hero />
        <ClientsStrip />
        <Services />
        <About />
        <PortfolioProjects />
        <Ecosystem />
        <LaunchOffer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
