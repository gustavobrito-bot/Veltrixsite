import type { Metadata } from "next"
import Link from "next/link"
import LegalPage from "../../redesign/legal-page"
import { CONTACT_EMAIL, LEGAL, LEGAL_IDENTIFICATION, WHATSAPP_NUMBER_DISPLAY, WHATSAPP_URL } from "../../lib/site"

export const metadata: Metadata = {
  title: "Termos de Serviço — Veltrix",
  description: "Regras de uso do site e condições gerais de contratação dos serviços da Veltrix.",
  alternates: { canonical: "/termos" },
}

export default function TermosPage() {
  return (
    <LegalPage
      title="Termos de Serviço"
      intro="Estes termos explicam as regras de uso deste site e as condições gerais para contratar os serviços da Veltrix. As condições específicas de cada projeto (escopo, prazo, preço e forma de pagamento) ficam sempre na proposta escrita."
    >
      <h2>1. Quem somos</h2>
      <p>
        {LEGAL_IDENTIFICATION}. Contato: WhatsApp{" "}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          {WHATSAPP_NUMBER_DISPLAY}
          <span className="sr-only"> (abre em nova aba)</span>
        </a>
        {CONTACT_EMAIL ? (
          <>
            {" "}e e-mail <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </>
        ) : null}
        .
      </p>

      <h2>2. Uso do site</h2>
      <p>
        O site apresenta os serviços da Veltrix. Você pode navegar livremente, sem cadastro. Não é permitido usar o site
        para atividades ilegais, tentar invadir ou sobrecarregar o servidor, nem copiar o conteúdo para uso comercial
        sem autorização.
      </p>

      <h2>3. Informações do site e proposta</h2>
      <p>
        As descrições de serviços no site são gerais. Cada projeto é diferente, por isso escopo, prazo, preço, forma de
        pagamento e custos recorrentes (como domínio, hospedagem ou suporte) são definidos{" "}
        <strong>por escrito na proposta</strong>, depois de entendermos o que o seu negócio precisa. A contratação só
        acontece quando você aprova a proposta.
      </p>
      <p>
        Os projetos mostrados na seção “O que já construímos” foram desenvolvidos pela Veltrix e servem de exemplo do
        nosso trabalho. Quando um projeto não está publicado pelo cliente, isso é informado no próprio site.
      </p>

      <h2>4. Como funciona a contratação</h2>
      <ul>
        <li>
          <strong>Proposta:</strong> enviamos escopo, etapas, prazo e preço. Valores e condições valem pelo prazo de
          validade indicado na proposta.
        </li>
        <li>
          <strong>Aprovação:</strong> o aceite pode ser feito por assinatura de contrato ou por confirmação escrita
          (por exemplo, no WhatsApp ou e-mail).
        </li>
        <li>
          <strong>Construção:</strong> você acompanha uma prévia e aprova cada etapa. Pedidos fora do escopo aprovado
          são orçados à parte, antes de serem feitos.
        </li>
        <li>
          <strong>Entrega e suporte:</strong> o que está incluído no suporte após a entrega, e por quanto tempo, fica
          definido na proposta.
        </li>
      </ul>

      <h2>5. O que o cliente precisa fornecer</h2>
      <p>
        Para o projeto andar, o cliente envia as informações e os materiais do negócio (textos, cardápio, preços,
        fotos, logotipo, acessos). Ao enviar, o cliente declara que tem o direito de usar esses materiais — por exemplo,
        que as fotos são próprias, licenciadas ou autorizadas — e que as informações (preços, horários, promoções) são
        verdadeiras. Fotos de bancos gratuitos ou pagos usadas pela Veltrix seguem a licença de cada banco.
      </p>

      <h2>6. Propriedade intelectual</h2>
      <ul>
        <li>
          O conteúdo deste site (textos, layout e marca Veltrix) pertence a {LEGAL.legalName}/{LEGAL.brand} e é
          protegido pela Lei de Direitos Autorais (Lei 9.610/1998).
        </li>
        <li>
          Depois do pagamento integral, o cliente pode usar livremente o site ou material entregue para o seu negócio.
          As condições de transferência de código, contas e domínio ficam na proposta.
        </li>
        <li>
          A Veltrix pode mostrar o projeto no portfólio, salvo se o cliente pedir para não mostrar.
        </li>
        <li>
          WhatsApp e Instagram são marcas da Meta; Google é marca da Google LLC; demais marcas citadas pertencem aos
          respectivos titulares. A menção serve só para indicar a integração com esses serviços.
        </li>
      </ul>

      <h2>7. Serviços de terceiros</h2>
      <p>
        Os projetos usam serviços de terceiros, como hospedagem, registro de domínio, WhatsApp, Instagram, Google e
        plataformas de anúncio. Esses serviços têm regras, preços e disponibilidade próprios, definidos por cada
        empresa. A Veltrix não controla mudanças de política, bloqueios ou instabilidades desses serviços, mas ajuda o
        cliente a resolver o que estiver ao seu alcance.
      </p>
      <p>
        Em campanhas de anúncio, a Veltrix trabalha para melhorar os resultados, mas não garante número de vendas,
        clientes ou posição no Google, porque isso depende de fatores fora do nosso controle.
      </p>

      <h2>8. Dados pessoais nos projetos dos clientes</h2>
      <p>
        Quando um sistema criado pela Veltrix coleta dados dos clientes finais do estabelecimento (como reservas ou
        pedidos), o estabelecimento é o <strong>controlador</strong> desses dados e a Veltrix é a{" "}
        <strong>operadora</strong>. Nessa condição, a Veltrix: trata os dados só para prestar o serviço e conforme as
        instruções do cliente; não usa esses dados para fins próprios; mantém medidas de segurança; e avisa o cliente
        sobre qualquer incidente de segurança. O tratamento dos dados do próprio site segue a{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>9. Cancelamento, reembolso e garantia</h2>
      <p>
        As regras de arrependimento, cancelamento, reembolso e garantia estão na{" "}
        <Link href="/cancelamento-e-reembolso">Política de Cancelamento e Reembolso</Link>.
      </p>

      <h2>10. Responsabilidade</h2>
      <p>
        A Veltrix responde pelos serviços que presta, nos termos da lei. Nada nestes termos afasta direitos garantidos
        pelo Código de Defesa do Consumidor quando ele se aplicar.
      </p>

      <h2>11. Alterações</h2>
      <p>
        Estes termos podem ser atualizados. A versão em vigor é sempre a publicada nesta página, com a data no topo.
        Contratos já assinados seguem as condições da proposta aprovada.
      </p>

      <h2>12. Lei aplicável e foro</h2>
      <p>
        Estes termos seguem as leis brasileiras. Fica eleito o foro da comarca de São Paulo/SP, ressalvado o direito do
        consumidor de propor ação no foro do seu domicílio.
      </p>
    </LegalPage>
  )
}
