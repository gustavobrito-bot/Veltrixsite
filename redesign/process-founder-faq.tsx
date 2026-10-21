import Image from "next/image"
import { Plus } from "lucide-react"

const steps = [
  { title: "Conversa", text: "Entendemos seu negócio, seu cliente e o que precisa vender mais." },
  { title: "Proposta fechada", text: "Escopo, prazo e preço por escrito. Sem surpresa no meio do caminho." },
  { title: "Construção", text: "Você acompanha uma prévia online e aprova cada etapa." },
  { title: "No ar + suporte", text: "Publicamos e nosso time de suporte cuida das atualizações combinadas na proposta." },
]

const faqs = [
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Depende do tamanho do projeto. Na proposta você recebe o prazo exato de cada etapa antes de fechar.",
  },
  {
    q: "Eu consigo mudar preço e cardápio sozinho?",
    a: "Você não precisa se preocupar com isso: temos um time de suporte especializado que faz as atualizações de preços, itens e fotos do seu cardápio, conforme o plano de suporte combinado na proposta.",
  },
  {
    q: "Tem mensalidade?",
    a: "A criação é combinada à parte. Custos recorrentes, como domínio, hospedagem ou manutenção, ficam explicados na proposta antes de você decidir.",
  },
  {
    q: "Já tenho Instagram. Preciso mesmo de site?",
    a: "O Instagram mostra, mas o site e o cardápio ajudam a fechar o pedido: podem aparecer nas buscas do Google, abrem rápido no celular e levam o cliente direto ao seu WhatsApp.",
  },
]

export function Process() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="mx-auto flex max-w-[1240px] flex-col gap-14 px-5 py-24 font-body text-ink sm:px-6 lg:py-28">
      <div className="flex max-w-[720px] flex-col gap-4">
        <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">03 — COMO TRABALHAMOS</span>
        <h2 id="processo-titulo" className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          Do primeiro “oi” ao site no ar, em quatro passos.
        </h2>
      </div>
      <ol className="m-0 grid list-none gap-x-10 gap-y-10 p-0 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-3">
            <span className="font-code text-sm text-accent-strong" aria-hidden="true">0{i + 1}</span>
            <strong className="font-heading text-[22px]">{s.title}</strong>
            <span className="text-[15px] leading-relaxed text-slate">{s.text}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Founder() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-24 font-body text-ink sm:px-6 lg:pb-28">
      <div className="flex flex-wrap items-center gap-10">
        <div className="relative aspect-square w-full max-w-[260px] flex-[0_1_260px] overflow-hidden rounded-3xl bg-navy">
          <Image
            src="/images/gustavo-brito.png"
            alt="Gustavo Brito, fundador da Veltrix"
            fill
            sizes="260px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-5">
          <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">04 — QUEM FAZ</span>
          <h2 className="m-0 font-heading text-[clamp(1.8rem,3vw,2.6rem)] font-bold leading-[1.12] tracking-[-0.02em]">
            Quem atende é quem constrói.
          </h2>
          <p className="m-0 text-[17px] leading-relaxed text-[#3a4256]">
            Sou o Gustavo, fundador da Veltrix. Formado em Marketing, vim do trade marketing e de dados para a indústria, e
            programo os projetos de ponta a ponta. Você fala direto comigo, do orçamento à entrega.
          </p>
          <ul className="m-0 flex list-none flex-wrap gap-2.5 p-0 text-[13px] font-medium">
            <li className="rounded-full bg-white px-3.5 py-2">Marketing · São Judas</li>
            <li className="rounded-full bg-white px-3.5 py-2">Trade marketing &amp; dados</li>
            <li className="rounded-full bg-white px-3.5 py-2">Next.js · React Native · Cloud</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-titulo" className="mx-auto flex max-w-[1240px] flex-wrap gap-12 px-5 pb-24 font-body text-ink sm:px-6 lg:pb-28">
      <div className="flex flex-[1_1_320px] flex-col gap-4">
        <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">05 — DÚVIDAS</span>
        <h2 id="faq-titulo" className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          Antes de chamar no WhatsApp.
        </h2>
      </div>
      <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-2">
        {faqs.map((f) => (
          <details key={f.q} className="group py-4">
            <summary className="flex min-h-11 cursor-pointer list-none rounded-md items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
              {f.q}
              <Plus className="size-6 shrink-0 text-accent-strong transition-transform group-open:rotate-45" aria-hidden="true" />
            </summary>
            <p className="m-0 mt-3 text-base leading-relaxed text-slate">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
