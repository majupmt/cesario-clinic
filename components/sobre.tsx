'use client'

import Image from 'next/image'

const badges = ['MANICURE RUSSA', 'PODAL RUSSO', 'LENS®', 'EDUCADORA']

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Inner container */}
      <div
        style={{
          background: '#F8F6F3',
          borderRadius: 16,
          overflow: 'hidden',
          padding: '40px 24px',
          margin: 24,
          width: 'calc(100% - 48px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.45em',
            color: 'rgba(26,26,26,0.4)',
            marginBottom: 16,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          CONHEÇA
        </p>

        {/* Título */}
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            fontWeight: 400,
            color: '#1a1a1a',
            marginBottom: 32,
            lineHeight: 1.15,
          }}
        >
          Quem é
          <br />
          <em>Yagna Menezzes</em>
        </h2>

        {/* Foto */}
        <div
          style={{
            width: 280,
            height: 280,
            borderRadius: '50%',
            overflow: 'hidden',
            position: 'relative',
            border: '1px solid rgba(26,26,26,0.1)',
            margin: '0 auto 32px',
            flexShrink: 0,
          }}
        >
          <Image
            src="/images/yagna-sorriso.jpeg"
            alt="Yagna Menezzes"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Parágrafos */}
        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgba(26,26,26,0.6)',
            lineHeight: 1.95,
            marginBottom: 20,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            maxWidth: 380,
          }}
        >
          Empreendedora, educadora e especialista em tratamentos de unhas e terapia podal,
          reconhecida por sua atuação técnica de alto padrão e por sua missão de transformar
          a vida de mulheres através da profissão.
        </p>
        <p
          style={{
            fontSize: '0.95rem',
            color: 'rgba(26,26,26,0.6)',
            lineHeight: 1.95,
            marginBottom: 40,
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            maxWidth: 380,
          }}
        >
          Referência em procedimentos que priorizam saúde, naturalidade e resultado duradouro,
          sempre respeitando a individualidade de cada cliente e profissional.
        </p>

        {/* Badges */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          {badges.map((badge) => (
            <span
              key={badge}
              style={{
                border: '1px solid rgba(26,26,26,0.2)',
                padding: '8px 18px',
                borderRadius: 100,
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                color: '#1a1a1a',
                fontFamily: "'Inter', sans-serif",
                background: 'transparent',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
