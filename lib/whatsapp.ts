const WHATSAPP_NUMBER = '559984446966'

export function whatsappLink(message?: string) {
  if (!message) return `https://wa.me/${WHATSAPP_NUMBER}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
