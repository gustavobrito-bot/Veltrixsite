export const WHATSAPP_NUMBER_DISPLAY = "+55 11 98318-2274"

export const WHATSAPP_URL =
  "https://wa.me/5511983182274?text=Olá!%20Vim%20pelo%20site%20da%20Veltrix%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20entender%20qual%20solução%20faz%20mais%20sentido%20para%20minha%20empresa."

/** Link de WhatsApp com mensagem pronta para pedidos sobre dados pessoais (LGPD). */
export const WHATSAPP_PRIVACY_URL =
  "https://wa.me/5511983182274?text=Olá!%20Quero%20fazer%20uma%20solicitação%20sobre%20meus%20dados%20pessoais%20(LGPD)."

/**
 * E-mail de contato exibido no site e nas políticas.
 * Deixe vazio ("") enquanto não houver um e-mail ativo: o site esconde o e-mail
 * e usa o WhatsApp como canal oficial.
 */
export const CONTACT_EMAIL = ""

export const INSTAGRAM_URL = "https://instagram.com/veltrixtecnologia"

/**
 * Identificação legal do responsável pelo site.
 * Hoje a Veltrix não tem CNPJ: o serviço é prestado por pessoa física.
 * Quando abrir o CNPJ, preencha `cnpj` e `legalName` (razão social) e o site
 * passa a exibir esses dados automaticamente no rodapé e nas políticas.
 */
export const LEGAL = {
  brand: "Veltrix Tecnologia",
  /** Nome completo do responsável (pessoa física) ou razão social (quando houver CNPJ). */
  legalName: "Gustavo Brito",
  /** Ex.: "00.000.000/0001-00". Vazio = sem CNPJ. */
  cnpj: "",
  city: "São Paulo/SP",
  /** Data da última atualização das políticas. */
  updatedAt: "20 de outubro de 2026",
} as const

export const HAS_CNPJ = LEGAL.cnpj.trim().length > 0

/** Frase única de identificação usada no rodapé e nas políticas. */
export const LEGAL_IDENTIFICATION = HAS_CNPJ
  ? `${LEGAL.brand} — ${LEGAL.legalName}, CNPJ ${LEGAL.cnpj}, ${LEGAL.city}`
  : `${LEGAL.brand} é o nome comercial usado por ${LEGAL.legalName}, prestador de serviços pessoa física, ${LEGAL.city}`
