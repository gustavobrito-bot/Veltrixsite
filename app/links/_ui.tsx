import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

export function waLink(message: string) {
  return `https://wa.me/5511983182274?text=${encodeURIComponent(message)}`
}

/** Barra fixa no topo com volta para /links. */
export function BackBar({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={`sticky top-0 z-30 border-b backdrop-blur-md ${
        dark ? "border-white/10 bg-navy/80 text-white" : "border-ink/10 bg-paper/85 text-ink"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[560px] items-center justify-between px-4">
        <Link href="/links" className="inline-flex items-center gap-2 text-[15px] font-medium">
          <ArrowLeft className="size-4" aria-hidden="true" /> Links
        </Link>
        <span className="font-heading text-[15px] font-bold tracking-[-0.01em]">Veltrix</span>
      </div>
    </div>
  )
}

/** Botão de WhatsApp preso ao rodapé, com mensagem própria de cada página. */
export function StickyCta({ label, message }: { label: string; message: string }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 bg-gradient-to-t from-black/40 to-transparent px-4 pb-[max(16px,env(safe-area-inset-bottom))] pt-6">
      <a
        href={waLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto flex min-h-14 max-w-[528px] items-center justify-center gap-2.5 rounded-2xl bg-accent px-5 text-[17px] font-semibold text-navy shadow-[0_18px_40px_-14px_rgba(255,87,34,0.9)] transition-colors hover:bg-accent-light"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        {label}
      </a>
    </div>
  )
}
