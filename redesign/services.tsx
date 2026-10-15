import { WHATSAPP_URL } from "../lib/site"

type Offer = {
  tag: string
  title: string
  text: string
  items: string[]
  featured?: boolean
}

const offers: Offer[] = [
  {
    tag: "/ site",
    title: "Site que vira cliente",
    text: "Página rápida, bonita no celular e pensada para levar a pessoa até o WhatsApp ou o pedido.",
    items: ["Texto escrito por nós", "Google Meu Negócio e SEO local", "Domínio e hospedagem configurados"],
  },
  {
    tag: "/ cardápio",
    title: "Cardápio digital com 3D/AR",
    text: "QR Code na mesa, pedido direto no WhatsApp e o prato aparecendo em 3D na frente do cliente.",
    items: ["Categorias, fotos e preços organizados", "Pratos em 3D, sem baixar app", "QR Codes prontos para imprimir"],
    featured: true,
  },
  {
    tag: "/ dados",
    title: "Painéis e automação",
    text: "Um painel simples mostrando o que vende, quando vende e onde você está perdendo venda.",
    items: ["Dashboard de vendas e pedidos", "Respostas automáticas no WhatsApp", "Integração com planilhas e sistemas"],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="mx-auto flex max-w-[1240px] flex-col gap-14 px-5 py-24 font-body text-ink sm:px-6 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[680px] flex-col gap-4">
          <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">01 — O QUE ENTREGAMOS</span>
          <h2 className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Três coisas, bem feitas. Nada de pacote genérico.
          </h2>
        </div>
        <p className="m-0 max-w-[380px] text-[17px] leading-relaxed text-slate">
          Cada entrega tem escopo, prazo e preço definidos antes de começar. Você sabe exatamente o que vai receber.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((o) => (
          <article
            key={o.title}
            className={`flex flex-col gap-5 rounded-3xl p-8 ${
              o.featured ? "bg-navy text-white" : "border border-line bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-code text-[13px] ${o.featured ? "text-white/70" : "text-slate"}`}>{o.tag}</span>
              {o.featured && (
                <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-navy">Exclusivo Veltrix</span>
              )}
            </div>
            <h3 className="m-0 font-heading text-[28px] font-bold leading-tight">{o.title}</h3>
            <p className={`m-0 text-base leading-relaxed ${o.featured ? "text-white/75" : "text-slate"}`}>{o.text}</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px]">
              {o.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span className={`font-bold ${o.featured ? "text-accent-light" : "text-accent-strong"}`} aria-hidden="true">
                    +
                  </span>
                  {it}
                </li>
              ))}
            </ul>
            <div
              className={`mt-auto flex items-center justify-between border-t pt-5 ${
                o.featured ? "border-white/15" : "border-line"
              }`}
            >
              <span className={`text-sm ${o.featured ? "text-white/70" : "text-slate"}`}>Orçamento sob medida</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-[15px] font-semibold underline-offset-4 hover:underline ${
                  o.featured ? "text-accent-light" : "text-accent-strong"
                }`}
              >
                Pedir orçamento →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
