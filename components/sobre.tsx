'use client'

const badges = ['MANICURE RUSSA', 'PODAL RUSSO', 'LENS®', 'EDUCADORA']

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{
        background: '#FBF3EE',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      {/* Label */}
      <p
        style={{
          fontSize: '0.6rem',
          letterSpacing: '0.35em',
          color: '#C4948A',
          marginBottom: 16,
          fontFamily: 'Georgia, serif',
        }}
      >
        CONHEÇA
      </p>

      {/* Heading */}
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1A1A1A',
          marginBottom: 24,
          lineHeight: 1.2,
        }}
      >
        Quem é Yagna
        <br />
        Menezzes
      </h2>

      {/* Paragraphs */}
      <p
        style={{
          fontSize: '0.95rem',
          color: 'rgba(26,26,26,0.55)',
          lineHeight: 1.85,
          marginBottom: 20,
          fontFamily: 'Georgia, serif',
        }}
      >
        Empreendedora, educadora e especialista em tratamentos de unhas e terapia podal,
        reconhecida por sua atuação técnica de alto padrão e por sua missão de transformar
        a vida de mulheres através da profissão.
      </p>
      <p
        style={{
          fontSize: '0.95rem',
          color: 'rgba(26,26,26,0.55)',
          lineHeight: 1.85,
          marginBottom: 32,
          fontFamily: 'Georgia, serif',
        }}
      >
        Referência em procedimentos que priorizam saúde, naturalidade e resultado duradouro,
        sempre respeitando a individualidade de cada cliente e profissional.
      </p>

      {/* Badges */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
        }}
      >
        {badges.map((badge) => (
          <span
            key={badge}
            style={{
              background: 'rgba(212,169,154,0.2)',
              padding: '10px 18px',
              borderRadius: 100,
              fontSize: '0.65rem',
              letterSpacing: '0.12em',
              color: '#1A1A1A',
              fontFamily: 'Georgia, serif',
            }}
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  )
}
