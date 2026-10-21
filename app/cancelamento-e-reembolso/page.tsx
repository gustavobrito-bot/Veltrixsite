import type { Metadata } from "next"
import LegalPage from "../../redesign/legal-page"
import { CONTACT_EMAIL, WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "../../lib/site"

export const metadata: Metadata = {
  title: "Cancelamento e Reembolso — Veltrix",
  description: "Direito de arrependimento, cancelamento, reembolso e garantia dos serviços da Veltrix.",
  alternates: { canonical: "/cancelamento-e-reembolso" },
}

export default function CancelamentoPage() {
  return (
    <LegalPage
      title="Cancelamento e Reembolso"
      intro="Cada projeto da Veltrix é orçado depois de entendermos o que o negócio precisa, e as condições de pagamento ficam na proposta. Esta política define as regras que valem para todos os projetos. Se a proposta trouxer uma condição mais favorável ao cliente, vale a da proposta."
    >
      <h2>1. Direito de arrependimento (7 dias)</h2>
      <p>
        Como a contratação acontece a distância (WhatsApp, e-mail ou internet), você pode desistir em até{" "}
        <strong>7 dias corridos</strong> a partir do aceite da proposta ou da assinatura do contrato, sem precisar
        explicar o motivo (art. 49 do Código de Defesa do Consumidor).
      </p>
      <p>
        Nesse caso, devolvemos <strong>todo o valor pago</strong>, de imediato, atualizado monetariamente, pelo mesmo
        meio de pagamento usado ou por outro que você indicar.
      </p>

      <h2>2. Cancelamento pelo cliente depois de 7 dias</h2>
      <ul>
        <li>
          Você paga apenas o que já foi <strong>efetivamente feito</strong> até a data do pedido de cancelamento,
          proporcional às etapas do projeto descritas na proposta.
        </li>
        <li>Se você já pagou mais do que isso, devolvemos a diferença em até 10 dias úteis.</li>
        <li>Entregamos o material das etapas pagas.</li>
        <li>Não cobramos multa, salvo se a proposta aprovada previr outra condição, informada antes da contratação.</li>
      </ul>

      <h2>3. Cancelamento pela Veltrix</h2>
      <p>
        Se a Veltrix não puder continuar o projeto, avisaremos com antecedência, entregaremos tudo o que já foi feito e
        devolveremos integralmente os valores referentes às etapas não executadas, em até 10 dias úteis.
      </p>

      <h2>4. Serviços mensais (hospedagem, suporte, anúncios)</h2>
      <ul>
        <li>Podem ser cancelados a qualquer momento, com efeito a partir do próximo ciclo de cobrança.</li>
        <li>O período já pago continua ativo até o fim.</li>
        <li>
          Se a proposta oferecer desconto em troca de prazo mínimo, essa condição será informada por escrito antes da
          contratação.
        </li>
      </ul>

      <h2>5. Custos pagos a terceiros</h2>
      <p>
        Fora do prazo de arrependimento, valores já pagos a terceiros em nome do cliente, como registro de domínio,
        verba de anúncio já veiculada ou licenças, não são devolvidos pela Veltrix, porque já foram usados. O que foi
        contratado em nome do cliente (por exemplo, o domínio) continua sendo dele.
      </p>

      <h2>6. Garantia</h2>
      <p>
        Se algo entregue apresentar defeito ou não funcionar como combinado na proposta, avise em até{" "}
        <strong>90 dias</strong> após a entrega (art. 26 do Código de Defesa do Consumidor). Corrigimos sem custo.
        Se a correção não for possível, você pode escolher entre refazer o serviço, abatimento proporcional do preço ou
        devolução do valor pago (art. 20 do CDC).
      </p>
      <p>
        A garantia não cobre mudanças feitas por terceiros, novos pedidos fora do escopo ou falhas de serviços de
        terceiros (como WhatsApp, Instagram, Google ou hospedagem) que não tenham sido causadas pela Veltrix.
      </p>

      <h2>7. Como pedir</h2>
      <p>Envie seu pedido de cancelamento, reembolso ou garantia por um destes canais:</p>
      <ul>
        <li>
          WhatsApp:{" "}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {WHATSAPP_NUMBER_DISPLAY}
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </li>
        {CONTACT_EMAIL && (
          <li>
            E-mail: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
        )}
      </ul>
      <p>Confirmamos o recebimento do pedido pelo mesmo canal e seguimos os prazos desta política.</p>
    </LegalPage>
  )
}
