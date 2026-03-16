'use client'

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '48px 40px',
        textAlign: 'center',
      }}
    >
      {/* Logo */}
      <p
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.35em',
          color: 'rgba(255,255,255,0.7)',
          marginBottom: 16,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
        }}
      >
        CESARIO CLINIC
      </p>

      {/* Divider */}
      <div
        style={{
          width: 32,
          height: 1,
          background: 'rgba(255,255,255,0.12)',
          margin: '0 auto 16px',
        }}
      />

      {/* Copyright */}
      <p
        style={{
          fontSize: '0.65rem',
          color: 'rgba(255,255,255,0.25)',
          marginBottom: 8,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}
      >
        © 2026 Cesário Clinic · Todos os direitos reservados
      </p>

      {/* Developer credit */}
      <p
        style={{
          fontSize: '0.6rem',
          color: 'rgba(255,255,255,0.15)',
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
        }}
      >
        Desenvolvido por Maria Júlia
      </p>
    </footer>
  )
}
