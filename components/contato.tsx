'use client'

export default function Contato() {
  return (
    <section
      id="contato"
      style={{
        background: 'linear-gradient(180deg, #D4A99A 0%, #C4948A 100%)',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1A1A1A',
          marginBottom: 12,
        }}
      >
        Agende seu Horário
      </h2>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '0.85rem',
          color: 'rgba(26,26,26,0.5)',
          marginBottom: 32,
          fontFamily: 'Georgia, serif',
        }}
      >
        Entre em contato e transforme suas unhas
      </p>

      {/* Buttons */}
      <div style={{ maxWidth: 380, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* WhatsApp button */}
        <a
          href="https://wa.me/5534999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            width: '100%',
            padding: '16px 24px',
            background: '#1A1A1A',
            color: 'white',
            borderRadius: 100,
            textDecoration: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            fontFamily: 'Georgia, serif',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.613.613l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.804-6.243-2.152l-.436-.348-2.649.888.888-2.649-.348-.436A9.956 9.956 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
          WHATSAPP
        </a>

        {/* Instagram button */}
        <a
          href="https://instagram.com/yagnacesario"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            width: '100%',
            padding: '16px 24px',
            background: 'rgba(26,26,26,0.12)',
            color: '#1A1A1A',
            borderRadius: 100,
            textDecoration: 'none',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.18em',
            fontFamily: 'Georgia, serif',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          INSTAGRAM
        </a>
      </div>

      {/* Info */}
      <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <p
          style={{
            fontSize: '0.8rem',
            color: 'rgba(26,26,26,0.5)',
            fontFamily: 'Georgia, serif',
          }}
        >
          📍 Uberlândia - MG
        </p>
        <p
          style={{
            fontSize: '0.8rem',
            color: 'rgba(26,26,26,0.5)',
            fontFamily: 'Georgia, serif',
          }}
        >
          🕐 Seg-Sex 9h às 18h · Sáb 9h às 14h
        </p>
      </div>
    </section>
  )
}
