"use client"

import { useMemo, useState } from "react"
import { Check, Flame, Minus, Plus, Search, ShoppingBag, X } from "lucide-react"

type Item = { id: string; cat: string; name: string; desc: string; price: number; tone: string }

const CATS = ["Petiscos", "Na brasa", "Drinks"] as const

const ITEMS: Item[] = [
  { id: "p1", cat: "Petiscos", name: "Pão de alho da casa", desc: "Na brasa, com manteiga de ervas.", price: 24, tone: "from-[#f6c58a] to-[#d9813b]" },
  { id: "p2", cat: "Petiscos", name: "Linguiça artesanal", desc: "Com vinagrete e farofa.", price: 38, tone: "from-[#d9764a] to-[#8f3a1c]" },
  { id: "p3", cat: "Petiscos", name: "Mandioca frita", desc: "Crocante, com maionese verde.", price: 29, tone: "from-[#f3dc9a] to-[#c9a14a]" },
  { id: "b1", cat: "Na brasa", name: "Picanha na brasa", desc: "400 g, arroz, farofa e vinagrete.", price: 129, tone: "from-[#c7563a] to-[#6e2412]" },
  { id: "b2", cat: "Na brasa", name: "Costela 12 horas", desc: "Desfiando, com mandioca.", price: 98, tone: "from-[#b5643f] to-[#5c2a17]" },
  { id: "b3", cat: "Na brasa", name: "Frango com ervas", desc: "Coxa e sobrecoxa, legumes.", price: 64, tone: "from-[#e2a65a] to-[#9a5a22]" },
  { id: "d1", cat: "Drinks", name: "Caipirinha da casa", desc: "Limão, cachaça artesanal.", price: 26, tone: "from-[#d6ef9a] to-[#7fae3a]" },
  { id: "d2", cat: "Drinks", name: "Chope gelado", desc: "Pilsen, 400 ml.", price: 16, tone: "from-[#ffe08a] to-[#e0a92a]" },
  { id: "d3", cat: "Drinks", name: "Soda italiana", desc: "Maçã verde ou frutas vermelhas.", price: 18, tone: "from-[#ffb3c1] to-[#e5536f]" },
]

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

export function MenuDemo() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("Petiscos")
  const [q, setQ] = useState("")
  const [cart, setCart] = useState<Record<string, number>>({})
  const [open, setOpen] = useState(false)

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase()
    return term ? ITEMS.filter((i) => (i.name + i.desc).toLowerCase().includes(term)) : ITEMS.filter((i) => i.cat === cat)
  }, [cat, q])

  const lines = ITEMS.filter((i) => cart[i.id])
  const count = lines.reduce((s, i) => s + cart[i.id], 0)
  const total = lines.reduce((s, i) => s + cart[i.id] * i.price, 0)

  const add = (id: string, d: number) =>
    setCart((c) => {
      const n = Math.max(0, (c[id] ?? 0) + d)
      const next = { ...c, [id]: n }
      if (!n) delete next[id]
      return next
    })

  return (
    <div className="relative mx-auto w-full max-w-[360px] rounded-[44px] bg-black p-3 shadow-[0_40px_80px_-30px_rgba(15,29,58,0.55)]">
      <div className="relative h-[640px] overflow-hidden rounded-[34px] bg-[#fbf7f2] text-ink">
        {/* topo do restaurante */}
        <div className="bg-[#2a1610] px-5 pb-4 pt-6 text-white">
          <div className="flex items-center gap-2 text-sm font-semibold text-[#ffb08a]">
            <Flame className="size-4" aria-hidden="true" /> Brasa &amp; Co.
          </div>
          <div className="mt-1 font-heading text-[22px] font-bold">Cardápio · Mesa 07</div>
          <label className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm">
            <Search className="size-4 opacity-70" aria-hidden="true" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar: picanha, chope…"
              className="w-full bg-transparent text-white placeholder:text-white/50 focus:outline-none"
              aria-label="Buscar no cardápio"
            />
          </label>
        </div>

        {!q && (
          <div className="flex gap-2 border-b border-ink/10 bg-white px-4 py-3" role="tablist">
            {CATS.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors ${
                  cat === c ? "bg-[#2a1610] text-white" : "bg-[#f1e9df] text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        <ul className="m-0 flex h-[420px] list-none flex-col gap-1 overflow-y-auto p-0 px-4 pb-24 pt-2">
          {shown.length === 0 && <li className="py-10 text-center text-sm text-slate">Nada encontrado.</li>}
          {shown.map((i) => (
            <li key={i.id} className="flex items-center gap-3 border-b border-ink/5 py-3">
              <div className={`size-14 shrink-0 rounded-xl bg-gradient-to-br ${i.tone}`} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <div className="text-[15px] font-semibold leading-tight">{i.name}</div>
                <div className="truncate text-xs text-slate">{i.desc}</div>
                <div className="mt-1 text-sm font-bold">{brl(i.price)}</div>
              </div>
              {cart[i.id] ? (
                <div className="flex items-center gap-2">
                  <button onClick={() => add(i.id, -1)} aria-label={`Tirar ${i.name}`} className="flex size-8 items-center justify-center rounded-full bg-[#f1e9df]">
                    <Minus className="size-4" />
                  </button>
                  <span className="w-4 text-center text-sm font-bold">{cart[i.id]}</span>
                  <button onClick={() => add(i.id, 1)} aria-label={`Adicionar ${i.name}`} className="flex size-8 items-center justify-center rounded-full bg-[#2a1610] text-white">
                    <Plus className="size-4" />
                  </button>
                </div>
              ) : (
                <button onClick={() => add(i.id, 1)} aria-label={`Adicionar ${i.name}`} className="flex size-9 items-center justify-center rounded-full bg-[#2a1610] text-white">
                  <Plus className="size-4" />
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* barra do carrinho */}
        <div
          className="absolute inset-x-3 bottom-3 transition-transform duration-300"
          style={{ transform: count ? "none" : "translateY(140%)" }}
        >
          <button
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-between rounded-2xl bg-[#1f8a4c] px-4 py-3.5 text-white shadow-lg"
          >
            <span className="flex items-center gap-2 text-sm font-semibold">
              <ShoppingBag className="size-4" aria-hidden="true" /> {count} {count === 1 ? "item" : "itens"}
            </span>
            <span className="text-sm font-bold">Pedir no WhatsApp · {brl(total)}</span>
          </button>
        </div>

        {/* prévia da mensagem */}
        {open && (
          <div className="absolute inset-0 flex items-end bg-black/50" onClick={() => setOpen(false)}>
            <div className="w-full rounded-t-3xl bg-[#0b141a] p-4 pb-6 text-[#e9edef]" onClick={(e) => e.stopPropagation()}>
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-semibold">Mensagem que chega no WhatsApp do restaurante</span>
                <button onClick={() => setOpen(false)} aria-label="Fechar">
                  <X className="size-5" />
                </button>
              </div>
              <div className="ml-auto max-w-[88%] whitespace-pre-line rounded-2xl rounded-br-sm bg-[#005c4b] px-3.5 py-3 text-[13px] leading-relaxed">
                {`🧾 Pedido · Mesa 07\n${lines.map((i) => `${cart[i.id]}x ${i.name} — ${brl(cart[i.id] * i.price)}`).join("\n")}\n\nTotal: ${brl(total)}`}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 text-xs text-white/70">
                <Check className="size-4 text-[#25d366]" aria-hidden="true" />
                Sem app, sem cadastro. O pedido chega pronto, é só confirmar.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
