'use client'

import { useRef } from 'react'
import Image from 'next/image'

const cursos = [
  {
    tag: 'VIP',
    titulo: 'Curso VIP Presencial',
    desc: 'Formação intensiva e personalizada com acompanhamento individual da Yagna.',
    // placeholder até a foto oficial do Curso VIP ser enviada — vip-sistema-russo.jpeg não existe em public/images/cursos
    imagem: '/images/cursos/curso-expert-nails.jpeg',
  },
  {
    tag: 'PRESENCIAL',
    titulo: 'Manicure 4 em 1',
    desc: 'Método russo + tratamento para unhas naturais',
    imagem: '/images/cursos/presencial-manicure-4em1.jpeg',
  },
  {
    tag: 'TÉCNICA',
    titulo: 'Soft Gel sem Lixamento',
    desc: 'Aprenda a técnica que preserva a unha natural com acabamento perfeito.',
    imagem: '/images/cursos/curso-soft-gel.png',
  },
]

export default function Cursos() {
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <section
      id="cursos"
      style={{
        background: '#0a0a0a',
        padding: '64px 0',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48, padding: '0 40px' }}>
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: 16,
            fontFamily: "var(--font-inter), sans-serif",
          }}
        >
          FORMAÇÃO
        </p>
        <h2
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: 'clamp(1.9rem, 4vw, 2.8rem)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: '#ffffff',
            marginBottom: 20,
          }}
        >
          Cursos & Mentorias
        </h2>
        <div
          style={{
            width: 40,
            height: 1,
            background: 'rgba(255,255,255,0.15)',
            margin: '0 auto',
          }}
        />
      </div>

      {/* Carousel */}
      <div>
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            gap: 16,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '0 24px',
          }}
        >
          {cursos.map((curso, i) => (
            <a
              key={i}
              href="https://wa.me/559984446966"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(0,0,0,0.45)] active:scale-[0.98]"
              style={{
                flexShrink: 0,
                width: '82%',
                maxWidth: 340,
                background: '#141414',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                overflow: 'hidden',
                scrollSnapAlign: 'start',
                textDecoration: 'none',
              }}
            >
              {/* Image */}
              <div
                style={{
                  height: 260,
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <Image
                  src={curso.imagem}
                  alt={curso.titulo}
                  fill
                  className="transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '20px 24px 28px' }}>
                {/* Tag */}
                <p
                  style={{
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 12,
                    fontFamily: "var(--font-inter), sans-serif",
                  }}
                >
                  {curso.tag}
                </p>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {curso.titulo}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.7,
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 300,
                  }}
                >
                  {curso.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Navigation arrows */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            marginTop: 32,
          }}
        >
          <button
            onClick={scrollLeft}
            aria-label="Curso anterior"
            className="transition-transform duration-200 hover:scale-110 active:scale-90"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={scrollRight}
            aria-label="Próximo curso"
            className="transition-transform duration-200 hover:scale-110 active:scale-90"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
