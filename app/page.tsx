import Hero from '@/components/hero'
import Sobre from '@/components/sobre'
import Cursos from '@/components/cursos'
import Servicos from '@/components/servicos'
import Contato from '@/components/contato'
import Footer from '@/components/footer'
import WhatsAppFloat from '@/components/whatsapp-float'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", background: '#0a0a0a', maxWidth: 430, margin: '0 auto' }}>
      <Hero />
      <Cursos />
      <Servicos />
      <Sobre />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
