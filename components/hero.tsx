'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Container: foto + card */}
      <div
        style={{
          width: 'calc(100% - 48px)',
          margin: '24px auto',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >

      {/* Photo */}
      <div
        style={{
          width: '100%',
          height: 420,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <Image
          src="/images/yagna-pose.jpeg"
          alt="Yagna Cesario"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          priority
        />
      </div>

      {/* Card */}
      <div
        style={{
          background: '#F8F6F3',
          borderTop: '1px solid rgba(26,26,26,0.06)',
          padding: '32px 24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
        }}
      >
        {/* Decoration: lines + star */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 20,
          }}
        >
          <div style={{ width: 40, height: 1, background: 'rgba(26,26,26,0.15)' }} />
          <span style={{ color: 'rgba(26,26,26,0.25)', fontSize: '0.7rem' }}>✦</span>
          <div style={{ width: 40, height: 1, background: 'rgba(26,26,26,0.15)' }} />
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2.8rem',
            fontWeight: 700,
            color: '#1a1a1a',
            letterSpacing: '0.08em',
            lineHeight: 1.0,
            margin: 0,
          }}
        >
          YAGNA
          <br />
          CESARIO
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 40,
            height: 1,
            background: 'rgba(26,26,26,0.15)',
            margin: '20px auto',
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            color: 'rgba(26,26,26,0.5)',
            margin: '0 0 8px 0',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
          }}
        >
          EXPERT · MANICURE RUSSA
        </p>
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(26,26,26,0.35)',
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
          }}
        >
          ALTO PADRÃO
        </p>

        {/* Scroll indicator */}
        <div style={{ marginTop: 28 }}>
          <div
            style={{
              width: 20,
              height: 32,
              borderRadius: 10,
              border: '1.5px solid rgba(26,26,26,0.2)',
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              padding: 4,
            }}
          >
            <div
              style={{
                width: 3,
                height: 8,
                borderRadius: 2,
                background: 'rgba(26,26,26,0.3)',
              }}
            />
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}
