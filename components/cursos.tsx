'use client'

import { useRef } from 'react'

const cursos = [
  {
    tag: 'VIP',
    titulo: 'Curso VIP Presencial',
    desc: 'Formação intensiva e personalizada com acompanhamento individual da Yagna.',
    imagem: '/images/cursos/vip-sistema-russo.jpeg',
  },
  {
    tag: 'PRESENCIAL',
    titulo: 'Manicure Clássica + Terapia Podal',
    desc: 'Domine as técnicas tradicionais com base sólida e profissional.',
    imagem: '/images/cursos/presencial-manicure-4em1.jpeg',
  },
  {
    tag: 'TÉCNICA',
    titulo: 'Soft Gel sem Lixamento',
    desc: 'Aprenda a técnica que preserva a unha natural com acabamento perfeito.',
    imagem: '/images/cursos/curso-soft-gel.jpeg',
  }
]

export default function Cursos() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="cursos"
      style={{
        background: '#1A1A1A',
        padding: '64px 0',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32, padding: '0 24px' }}>
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: '#C4948A',
            marginBottom: 12,
            fontFamily: 'Georgia, serif',
          }}
        >
          FORMAÇÃO
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '1.9rem',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#E8D5CC',
            marginBottom: 16,
          }}
        >
          Cursos & Mentorias
        </h2>
        <div
          style={{
            width: 40,
            height: 1,
            background: '#C4948A',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Carousel container */}
      <div style={{ position: 'relative' }}>
        {/* Left arrow */}
        <button
          onClick={scrollLeft}
          style={{
            position: 'absolute',
            left: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#D4A99A',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={scrollRight}
          style={{
            position: 'absolute',
            right: 8,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 44,
            height: 44,
            borderRadius: '50%',
            background: '#D4A99A',
            border: 'none',
            cursor: 'pointer',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Carousel */}
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '0 60px',
          }}
        >
          {cursos.map((curso, i) => (
            <a
              key={i}
              href="https://wa.me/5534999999999"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexShrink: 0,
                width: '82%',
                maxWidth: 320,
                background: '#252525',
                borderRadius: 20,
                overflow: 'hidden',
                scrollSnapAlign: 'start',
                textDecoration: 'none',
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 240,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={curso.imagem}
                  alt={curso.titulo}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: 20 }}>
                {/* Tag */}
                <span
                  style={{
                    display: 'inline-block',
                    background: 'rgba(212,169,154,0.2)',
                    padding: '6px 12px',
                    borderRadius: 100,
                    fontSize: '0.6rem',
                    letterSpacing: '0.1em',
                    color: '#D4A99A',
                    marginBottom: 12,
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {curso.tag}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: '#E8D5CC',
                    marginBottom: 8,
                  }}
                >
                  {curso.titulo}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(232,213,204,0.5)',
                    lineHeight: 1.6,
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {curso.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
