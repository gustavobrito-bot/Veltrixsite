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
    title: "Cardápio digital",
    text: "QR Code na mesa, cardápio sempre atualizado e o pedido chegando direto no seu WhatsApp.",
    items: ["Categorias, fotos e preços organizados", "Pedido direto no WhatsApp, sem app", "QR Codes prontos para imprimir"],
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
    <section id="servicos" aria-labelledby="servicos-titulo" className="mx-auto flex max-w-[1240px] flex-col gap-14 px-5 py-24 font-body text-ink sm:px-6 lg:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div className="flex max-w-[680px] flex-col gap-4">
          <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">01 — O QUE ENTREGAMOS</span>
          <h2 id="servicos-titulo" className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            Três coisas, bem feitas. Nada de pacote genérico.
          </h2>
        </div>
        <p className="m-0 max-w-[380px] text-[17px] leading-relaxed text-slate">
          Cada entrega tem escopo, prazo e preço definidos antes de começar. Você sabe exatamente o que vai receber.
        </p>
      </div>

      <div className="grid gap-x-12 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((o) => (
          <article
            key={o.title}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center justify-between">
              <span className={`font-code text-[13px] text-slate`}>{o.tag}</span>
              {o.featured && (
                <span className="rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-navy">Destaque</span>
              )}
            </div>
            <h3 className="m-0 font-heading text-[28px] font-bold leading-tight">{o.title}</h3>
            <p className={`m-0 text-base leading-relaxed text-slate`}>{o.text}</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[15px]">
              {o.items.map((it) => (
                <li key={it} className="flex gap-2.5">
                  <span className={`font-bold text-accent-strong`} aria-hidden="true">
                    +
                  </span>
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between pt-5">
              <span className={`text-sm text-slate`}>Orçamento sob medida</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`whitespace-nowrap text-[15px] font-semibold underline-offset-4 hover:underline text-accent-strong`}
              >
                Pedir orçamento <span aria-hidden="true">→</span>
                <span className="sr-only"> de {o.title} pelo WhatsApp (abre em nova aba)</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
