import type { Metadata } from "next"
import Link from "next/link"
import LegalPage from "../../redesign/legal-page"
import {
  CONTACT_EMAIL,
  HAS_CNPJ,
  LEGAL,
  LEGAL_IDENTIFICATION,
  WHATSAPP_NUMBER_DISPLAY,
  WHATSAPP_PRIVACY_URL,
} from "../../lib/site"

export const metadata: Metadata = {
  title: "Política de Privacidade — Veltrix",
  description: "Como a Veltrix trata dados pessoais, de acordo com a LGPD (Lei 13.709/2018).",
  alternates: { canonical: "/privacidade" },
}

function PrivacyChannel() {
  return (
    <ul>
      <li>
        WhatsApp:{" "}
        <a href={WHATSAPP_PRIVACY_URL} target="_blank" rel="noopener noreferrer">
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
  )
}

export default function PrivacidadePage() {
  return (
    <LegalPage
      title="Política de Privacidade"
      intro="Esta política explica, em linguagem direta, quais dados pessoais a Veltrix trata quando você visita este site ou fala com a gente, para que usamos, com quem compartilhamos e como você exerce seus direitos pela Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018)."
    >
      <h2>1. Quem é o responsável pelos seus dados</h2>
      <p>
        {LEGAL_IDENTIFICATION}. Para a LGPD, {HAS_CNPJ ? "a empresa" : LEGAL.legalName} é o <strong>controlador</strong>{" "}
        dos dados tratados neste site e no atendimento comercial da Veltrix.
      </p>
      <p>
        Por ser agente de tratamento de pequeno porte (Resolução CD/ANPD nº 2/2022), a Veltrix não é obrigada a indicar
        um encarregado de dados, mas mantém um canal direto para qualquer assunto sobre privacidade. O responsável por
        esse atendimento é {LEGAL.legalName}:
      </p>
      <PrivacyChannel />

      <h2>2. Quais dados tratamos e por quê</h2>
      <p>
        Este site <strong>não tem formulário, cadastro, login nem área de pagamento</strong>. Os dados tratados são
        poucos e ficam limitados ao necessário:
      </p>
      <h3>a) Navegação no site</h3>
      <p>
        Ao acessar o site, a empresa de hospedagem (Vercel) registra automaticamente dados técnicos de acesso, como
        endereço IP, data e hora, página acessada, navegador e sistema operacional. Esses registros servem para manter o
        site no ar, seguro e protegido contra abusos.
      </p>
      <p>
        <strong>Base legal:</strong> legítimo interesse (art. 7º, IX, da LGPD) em manter o site funcionando e seguro.
      </p>
      <h3>b) Medição de audiência (somente se você aceitar)</h3>
      <p>
        Se você clicar em “Aceitar” no aviso de privacidade, ativamos o Vercel Web Analytics, uma medição de audiência{" "}
        <strong>que não usa cookies</strong>. Ela mostra para a Veltrix números agregados, como páginas mais vistas, de
        onde veio a visita (por exemplo, Instagram ou Google), país e tipo de dispositivo. Não usamos esses dados para
        identificar você nem para publicidade.
      </p>
      <p>
        <strong>Base legal:</strong> consentimento (art. 7º, I, da LGPD). Se você recusar, nada disso é carregado, e
        você pode mudar de ideia quando quiser.
      </p>
      <h3>c) Conversas pelo WhatsApp, Instagram ou e-mail</h3>
      <p>
        Quando você entra em contato, recebemos os dados que você mesmo envia: nome, telefone, perfil, nome e dados do
        seu negócio e o conteúdo das mensagens. Usamos esses dados apenas para responder, entender o projeto e preparar
        a proposta.
      </p>
      <p>
        <strong>Base legal:</strong> procedimentos preliminares relacionados a um contrato, a pedido do titular (art.
        7º, V, da LGPD).
      </p>
      <h3>d) Clientes</h3>
      <p>
        Quando o projeto é contratado, tratamos os dados necessários para executar o contrato, emitir recibos ou notas,
        cobrar e cumprir obrigações legais e fiscais.
      </p>
      <p>
        <strong>Base legal:</strong> execução de contrato e cumprimento de obrigação legal (art. 7º, V e II, da LGPD).
      </p>
      <p>
        <strong>Não vendemos, não alugamos e não usamos seus dados para publicidade.</strong> Não tratamos dados
        sensíveis e o site não é direcionado a menores de 18 anos.
      </p>

      <h2 id="cookies">3. Cookies e armazenamento no navegador</h2>
      <p>
        O site <strong>não usa cookies de publicidade nem de rastreamento</strong> (como Google Analytics ou Meta
        Pixel). Usamos somente:
      </p>
      <ul>
        <li>
          <strong>Necessário:</strong> um registro no seu próprio navegador (armazenamento local) que guarda a sua
          escolha no aviso de privacidade, para não perguntar de novo a cada visita.
        </li>
        <li>
          <strong>Opcional:</strong> a medição de audiência descrita no item 2(b), sem cookies, carregada só depois do
          seu “Aceitar”.
        </li>
      </ul>
      <p>
        Para mudar sua escolha, use o link “Preferências de cookies”, no rodapé de qualquer página. As fontes do site
        são servidas pelo nosso próprio domínio, sem chamadas a serviços de terceiros.
      </p>
      <p>
        Ao clicar em links para WhatsApp ou Instagram, você sai deste site e passa a usar serviços da Meta, que seguem
        a política de privacidade da própria Meta.
      </p>

      <h2>4. Com quem compartilhamos</h2>
      <p>Compartilhamos dados apenas com fornecedores necessários para operar, sempre no limite do necessário:</p>
      <ul>
        <li>
          <strong>Vercel</strong> — hospedagem do site e medição de audiência (quando autorizada).
        </li>
        <li>
          <strong>Meta (WhatsApp e Instagram)</strong> — canais de atendimento que você escolhe usar.
        </li>
        <li>
          <strong>Ferramentas de trabalho</strong> — por exemplo, e-mail e armazenamento em nuvem usados para guardar
          propostas e contratos.
        </li>
        <li>
          <strong>Autoridades</strong> — quando houver obrigação legal ou ordem judicial.
        </li>
      </ul>
      <p>
        Alguns desses fornecedores guardam dados em servidores fora do Brasil, como nos Estados Unidos. Essas
        transferências seguem o art. 33 da LGPD, com fornecedores que adotam garantias contratuais de proteção de dados.
      </p>

      <h2>5. Por quanto tempo guardamos</h2>
      <ul>
        <li>
          <strong>Registros técnicos de acesso:</strong> pelo prazo definido pela hospedagem, em regra curto, para fins
          de segurança.
        </li>
        <li>
          <strong>Conversas que não viraram contrato:</strong> até 12 meses após o último contato. Depois disso,
          apagamos ou anonimizamos.
        </li>
        <li>
          <strong>Dados de clientes:</strong> durante o contrato e, depois dele, pelo prazo necessário para cumprir
          obrigações legais e fiscais e para defesa em eventual processo, em regra até 5 anos.
        </li>
      </ul>
      <p>Você pode pedir a exclusão antes desses prazos, salvo quando a lei exigir que o dado seja mantido.</p>

      <h2>6. Seus direitos</h2>
      <p>Pelo art. 18 da LGPD, você pode, a qualquer momento e de graça:</p>
      <ul>
        <li>confirmar se tratamos seus dados e acessar esses dados;</li>
        <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
        <li>pedir anonimização, bloqueio ou exclusão de dados desnecessários ou tratados em desacordo com a LGPD;</li>
        <li>pedir a portabilidade dos dados;</li>
        <li>saber com quem compartilhamos seus dados;</li>
        <li>retirar o consentimento e pedir a exclusão dos dados tratados com base nele;</li>
        <li>se opor a um tratamento feito com base em legítimo interesse.</li>
      </ul>
      <p>
        Faça o pedido pelo canal abaixo. Respondemos em até 15 dias. Se não ficar satisfeito, você também pode
        reclamar na Autoridade Nacional de Proteção de Dados (ANPD), em gov.br/anpd.
      </p>
      <PrivacyChannel />

      <h2>7. Segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais compatíveis com o tamanho da operação: conexão criptografada
        (HTTPS), acesso às contas e ferramentas restrito e protegido por senha e verificação em duas etapas sempre que
        disponível. Nenhum sistema é 100% imune a incidentes; se acontecer algum incidente que possa causar risco ou
        dano relevante, avisaremos os titulares afetados e a ANPD, como manda a LGPD.
      </p>

      <h2>8. Projetos que a Veltrix cria para clientes</h2>
      <p>
        Nos sites, cardápios e sistemas que criamos para nossos clientes, quem decide sobre os dados dos clientes finais
        (por exemplo, reservas ou pedidos) é o próprio estabelecimento, que é o controlador. Nesses casos, a Veltrix
        atua como <strong>operadora</strong>, tratando os dados apenas conforme as instruções do cliente e o contrato.
        Detalhes estão nos <Link href="/termos">Termos de Serviço</Link>.
      </p>

      <h2>9. Mudanças nesta política</h2>
      <p>
        Podemos atualizar esta política para refletir mudanças no site, nos serviços ou na lei. A data da última
        atualização fica sempre no topo da página. Mudanças relevantes também serão avisadas no próprio site.
      </p>
    </LegalPage>
  )
}
