'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const pares = [
  {
    items: ['Podal Russo', 'Manicure Russa'],
    imagens: [
      '/images/especialidades/podal-russo.jpeg',
      '/images/especialidades/manicure-russa.png',
    ],
  },
  {
    items: ['Blindagem de Cálcio', 'Banho de Gel'],
    imagens: [
      '/images/especialidades/podal-russo-oleos.jpeg',
      '/images/especialidades/yagna-podal.jpeg',
    ],
  },
  {
    items: ['Esmaltação em Gel', 'Alongamento Soft Gel'],
    imagens: [
      '/images/especialidades/podal-equipamentos.jpeg',
      '/images/procedimentos/alongamento-soft-gel.jpeg',
    ],
  },
  {
    items: ['LENS®', 'Educação'],
    imagens: [
      '/images/especialidades/podal-russo.jpeg',
      '/images/yagna-segunda-melhor.jpeg',
    ],
  },
]

export default function Especialidades() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pares.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const parAtual = pares[activeIndex]
  const prev = () => setActiveIndex((p) => (p - 1 + pares.length) % pares.length)
  const next = () => setActiveIndex((p) => (p + 1) % pares.length)

  return (
    <section
      id="especialidades"
      style={{
        background: '#111111',
        padding: '64px 24px',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.3em',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: 16,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          NOSSOS SERVIÇOS
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          ESPECIALIDADES
        </h2>
      </div>

      {/* Grid 2 columns */}
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div
          className="md:grid-cols-4"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}
        >
          {parAtual.items.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              {/* Title above card */}
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '0.78rem',
                  color: '#ffffff',
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                {item}
              </p>

              {/* Card */}
              <div
                style={{
                  height: 240,
                  borderRadius: 12,
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: '#141414',
                }}
              >
                <Image
                  src={parAtual.imagens[i]}
                  alt={item}
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 12px',
                    background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)',
                  }}
                >
                  <p
                    style={{
                      color: '#ffffff',
                      fontSize: '0.65rem',
                      fontFamily: "'Inter', sans-serif",
                      textAlign: 'center',
                      letterSpacing: '0.12em',
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation: arrows + dots */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 16,
            marginTop: 32,
          }}
        >
          <button
            onClick={prev}
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

          <div style={{ display: 'flex', gap: 8 }}>
            {pares.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: activeIndex === i ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: activeIndex === i ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
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
