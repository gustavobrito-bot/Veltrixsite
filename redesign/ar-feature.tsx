import { WHATSAPP_URL } from "../lib/site"

const steps = ["Escaneia o QR da mesa", "Toca em “Ver na mesa”", "Pede pelo WhatsApp"]

export default function ArFeature() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-24 font-body sm:px-6 lg:pb-28">
      <div className="flex flex-wrap items-center gap-12 rounded-[32px] bg-accent px-7 py-12 text-navy sm:px-12 sm:py-14">
        <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-5">
          <span className="font-code text-[13px] tracking-[0.12em]">NOVO NA VELTRIX</span>
          <h2 className="m-0 font-heading text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.02] tracking-[-0.02em]">
            O prato na mesa antes do pedido.
          </h2>
          <p className="m-0 max-w-[520px] text-lg leading-relaxed">
            O cliente aponta a câmera para a mesa e vê o hambúrguer, o drink ou a porção em tamanho real. Sem baixar
            aplicativo.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start rounded-full bg-navy px-6 py-4 font-semibold text-white transition-colors hover:bg-ink"
          >
            Ver a demo no meu celular
          </a>
        </div>
        <ol className="m-0 grid flex-[1_1_400px] list-none grid-cols-3 gap-3 p-0">
          {steps.map((s, i) => (
            <li key={s} className="flex aspect-[3/4] flex-col rounded-[20px] bg-navy p-4 text-white sm:p-5">
              <span className="font-code text-[22px] text-accent-light">{i + 1}</span>
              <span className="mt-auto text-[13px] leading-snug sm:text-sm">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
