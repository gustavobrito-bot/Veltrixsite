import Image from "next/image"

type Case = {
  name: string
  tags: string[]
  image: string
  imageAlt: string
  challenge: string
  solution: string
}

const cases: Case[] = [
  {
    name: "Adega da Mooca",
    tags: ["Adega e conveniência", "Mooca, SP"],
    image: "/images/adega-produtos.png",
    imageAlt: "Página de produtos do site da Adega da Mooca, com filtros por categoria e botão de pedido",
    challenge: "Pedidos chegavam soltos no WhatsApp, sem cardápio organizado e sem preço claro.",
    solution: "Site com cardápio online filtrável, carrinho e pedido direto pelo WhatsApp, com área de entrega da região.",
  },
  {
    name: "Angel Luxe",
    tags: ["Importados de luxo", "E-commerce"],
    image: "/images/angel-luxe-hero.png",
    imageAlt: "Página inicial da loja Angel Luxe, com curadoria de perfumes e maquiagem importados",
    challenge: "Uma curadoria premium de perfumes, bolsas e calçados vendida só por conversa, sem vitrine própria.",
    solution: "Loja online com identidade de luxo, vitrine por categorias e atendimento de consultoria integrado.",
  },
]

export default function Cases() {
  return (
    <section id="cases" className="bg-white font-body text-ink">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-14 px-5 py-24 sm:px-6 lg:py-28">
        <div className="flex max-w-[720px] flex-col gap-4">
          <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">02 — PROJETOS NO AR</span>
          <h2 className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
            O que já construímos.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {cases.map((c, i) => (
            <article
              key={c.name}
              className={`flex flex-wrap items-stretch gap-10 rounded-[28px] bg-paper p-4 sm:p-6 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative min-h-[260px] flex-[1_1_420px] overflow-hidden rounded-[20px] bg-white sm:min-h-[320px]">
                <Image src={c.image} alt={c.imageAlt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-top" />
              </div>
              <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5 px-2 py-4">
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="m-0 font-heading text-[34px] font-bold">{c.name}</h3>
                <dl className="m-0 flex flex-col gap-4 text-base leading-relaxed">
                  <div>
                    <dt className="font-code text-xs tracking-[0.1em] text-slate">DESAFIO</dt>
                    <dd className="m-0 mt-1">{c.challenge}</dd>
                  </div>
                  <div>
                    <dt className="font-code text-xs tracking-[0.1em] text-slate">O QUE FIZEMOS</dt>
                    <dd className="m-0 mt-1">{c.solution}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
