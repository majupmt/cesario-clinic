'use client'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: '#1A1A1A',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        position: 'relative',
      }}
    >
      {/* Photo area */}
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          height: 340,
          borderRadius: '8px 8px 0 0',
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/hero-yagna.jpeg"
          alt="Yagna Cesario"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Card below photo */}
      <div
        style={{
          width: '100%',
          maxWidth: 380,
          background: '#EACDC3',
          borderRadius: '0 0 24px 24px',
          padding: '32px 24px',
          textAlign: 'center',
        }}
      >
        {/* Decoration: lines + star */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
          <div style={{ width: 40, height: 1, background: 'rgba(26,26,26,0.2)' }} />
          <span style={{ color: 'rgba(26,26,26,0.4)', fontSize: '0.8rem' }}>✦</span>
          <div style={{ width: 40, height: 1, background: 'rgba(26,26,26,0.2)' }} />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#1A1A1A',
            letterSpacing: '0.04em',
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          YAGNA
          <br />
          CESARIO
        </h1>

        {/* Decorative line */}
        <div
          style={{
            width: 40,
            height: 1,
            background: 'rgba(26,26,26,0.25)',
            margin: '20px auto',
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.2em',
            color: '#1A1A1A',
            margin: '0 0 8px 0',
            fontFamily: 'Georgia, serif',
          }}
        >
          EXPERT · MANICURE RUSSA
        </p>
        <p
          style={{
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            color: 'rgba(26,26,26,0.45)',
            margin: 0,
            fontFamily: 'Georgia, serif',
          }}
        >
          ALTO PADRÃO
        </p>

        {/* Dots decoration */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 20 }}>
          <div style={{ width: 20, height: 1, background: 'rgba(26,26,26,0.15)' }} />
          <span style={{ color: 'rgba(26,26,26,0.25)', fontSize: '0.5rem' }}>●</span>
          <div style={{ width: 20, height: 1, background: 'rgba(26,26,26,0.15)' }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div
          style={{
            width: 20,
            height: 32,
            borderRadius: 10,
            border: '2px solid rgba(196,148,138,0.3)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            padding: 4,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              borderRadius: 2,
              background: '#C4948A',
            }}
          />
        </div>
      </div>
    </section>
  )
}
