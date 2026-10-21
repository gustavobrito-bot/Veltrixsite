import SiteHeader from "../redesign/site-header"
import Hero from "../redesign/hero"
import Services from "../redesign/services"
import Cases from "../redesign/cases"
import { Process, Founder, Faq } from "../redesign/process-founder-faq"
import { ProofStrip, ClosingCta } from "../redesign/closing"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="bg-paper focus:outline-none">
        <Hero />
        <ProofStrip />
        <Services />
        <Cases />
        <Process />
        <Founder />
        <Faq />
      </main>
      <ClosingCta />
    </>
  )
}
