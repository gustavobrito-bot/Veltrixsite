import Header from "../header"
import Hero from "../final-cta"
import About from "../differentials"
import Services from "../portfolio"
import PortfolioProjects from "../portfolio-projects"
import LaunchOffer from "../avatar"
import Contact from "../contact"
import Footer from "../footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <Hero />
        <About />
        <Services />
        <PortfolioProjects />
        <LaunchOffer />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
