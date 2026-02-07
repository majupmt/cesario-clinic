import Hero from '@/components/hero'
import Sobre from '@/components/sobre'
import Cursos from '@/components/cursos'
import Especialidades from '@/components/especialidades'
import Servicos from '@/components/servicos'
import Contato from '@/components/contato'
import Footer from '@/components/footer'
import WhatsAppFloat from '@/components/whatsapp-float'

export default function Home() {
  return (
    <main className="min-h-screen" style={{ fontFamily: "Georgia, serif", maxWidth: 430, margin: "0 auto", background: "#0D0D0D" }}>
      <Hero />
      <Sobre />
      <Cursos />
      <Especialidades />
      <Servicos />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
