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
      <main className="bg-paper">
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
