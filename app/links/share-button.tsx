"use client"

import { useState } from "react"
import { Check, Share2 } from "lucide-react"

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: "Veltrix Tecnologia", url })
        return
      }
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // compartilhamento cancelado: nada a fazer
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
    >
      {copied ? <Check className="size-4" aria-hidden="true" /> : <Share2 className="size-4" aria-hidden="true" />}
      {copied ? "Link copiado" : "Compartilhar"}
    </button>
  )
}
