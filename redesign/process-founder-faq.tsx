import { Plus } from "lucide-react"

const steps = [
  { title: "Conversa", text: "Entendemos seu negócio, seu cliente e o que precisa vender mais." },
  { title: "Proposta fechada", text: "Escopo, prazo e preço por escrito. Sem surpresa no meio do caminho." },
  { title: "Construção", text: "Você acompanha uma prévia online e aprova cada etapa." },
  { title: "No ar + suporte", text: "Publicamos, mostramos como atualizar e seguimos por perto depois da entrega." },
]

const faqs = [
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Depende do tamanho do projeto. Na proposta você recebe o prazo exato de cada etapa antes de fechar.",
  },
  {
    q: "Eu consigo mudar preço e cardápio sozinho?",
    a: "Sim. Na entrega mostramos como atualizar itens, fotos e preços sem depender da gente.",
  },
  {
    q: "Tem mensalidade?",
    a: "A criação é combinada à parte. Custos recorrentes, como domínio, hospedagem ou manutenção, ficam explicados na proposta antes de você decidir.",
  },
  {
    q: "O cliente precisa baixar aplicativo para ver o prato em 3D?",
    a: "Não. Abre direto no navegador do celular, pelo QR Code da mesa.",
  },
]

export function Process() {
  return (
    <section id="processo" className="mx-auto flex max-w-[1240px] flex-col gap-14 px-5 py-24 font-body text-ink sm:px-6 lg:py-28">
      <div className="flex max-w-[720px] flex-col gap-4">
        <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">03 — COMO TRABALHAMOS</span>
        <h2 className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          Do primeiro “oi” ao site no ar, em quatro passos.
        </h2>
      </div>
      <ol className="m-0 grid list-none gap-y-8 border-t-2 border-navy p-0 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col gap-3 pr-6 pt-7">
            <span className="font-code text-sm text-accent-strong">0{i + 1}</span>
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
      <div className="flex flex-wrap items-center gap-10 rounded-[32px] border border-line bg-white p-7 sm:p-10">
        <div
          aria-hidden="true"
          className="flex aspect-square w-full max-w-[220px] flex-[0_1_220px] items-center justify-center rounded-3xl bg-navy font-heading text-[72px] font-bold text-accent"
        >
          GB
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
            <li className="rounded-full bg-paper px-3.5 py-2">Marketing · São Judas</li>
            <li className="rounded-full bg-paper px-3.5 py-2">Trade marketing &amp; dados</li>
            <li className="rounded-full bg-paper px-3.5 py-2">Next.js · React Native · Cloud</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto flex max-w-[1240px] flex-wrap gap-12 px-5 pb-24 font-body text-ink sm:px-6 lg:pb-28">
      <div className="flex flex-[1_1_320px] flex-col gap-4">
        <span className="font-code text-[13px] tracking-[0.12em] text-accent-strong">05 — DÚVIDAS</span>
        <h2 className="m-0 font-heading text-[clamp(2rem,3.6vw,3.2rem)] font-bold leading-[1.08] tracking-[-0.02em]">
          Antes de chamar no WhatsApp.
        </h2>
      </div>
      <div className="flex min-w-0 flex-[999_1_560px] flex-col border-t border-[#d5d9e0]">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b border-[#d5d9e0] py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
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
