import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { LEGAL } from "../lib/site"
import { SiteFooter } from "./closing"

type LegalPageProps = {
  title: string
  intro: string
  children: React.ReactNode
}

/** Layout compartilhado das páginas jurídicas (privacidade, termos, reembolso). */
export default function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <>
      <header className="bg-navy font-body text-white">
        <nav aria-label="Principal" className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-6">
          <Link href="/" className="flex items-center" aria-label="Veltrix Tecnologia – página inicial">
            <Image src="/veltrix-logo-transparent.png" alt="" width={160} height={90} priority className="h-[72px] w-auto" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-[15px] font-medium transition-colors hover:bg-white/20"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Voltar ao site
          </Link>
        </nav>
      </header>

      <main id="conteudo" tabIndex={-1} className="bg-paper font-body text-ink focus:outline-none">
        <article className="legal-prose mx-auto max-w-[760px] px-5 py-16 sm:px-6 lg:py-20">
          <p className="font-code text-[13px] tracking-[0.12em] text-accent-strong">
            ÚLTIMA ATUALIZAÇÃO: {LEGAL.updatedAt.toUpperCase()}
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2.1rem,4.4vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            {title}
          </h1>
          <p className="mt-5 text-[18px] leading-relaxed text-[#3a4256]">{intro}</p>
          <div className="mt-10">{children}</div>
        </article>
      </main>

      <SiteFooter />
    </>
  )
}
