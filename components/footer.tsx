'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#1A1A1A',
        padding: '40px 24px',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <p
        style={{
          fontSize: '0.9rem',
          letterSpacing: '0.3em',
          color: '#E8D5CC',
          marginBottom: 16,
          fontFamily: 'Georgia, serif',
        }}
      >
        CESARIO CLINIC
      </p>

      {/* Copyright */}
      <p
        style={{
          fontSize: '0.7rem',
          color: 'rgba(232,213,204,0.4)',
          marginBottom: 8,
          fontFamily: 'Georgia, serif',
        }}
      >
        © 2025 Cesário Clinic · Todos os direitos reservados
      </p>

      {/* Developer credit */}
      <p
        style={{
          fontSize: '0.65rem',
          color: 'rgba(232,213,204,0.3)',
          fontFamily: 'Georgia, serif',
        }}
      >
        Desenvolvido por Maria Júlia
      </p>
    </footer>
  )
}
