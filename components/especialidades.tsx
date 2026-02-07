'use client'

import { useState, useEffect } from 'react'

const pares = [
  {
    items: ['Podal Russo', 'Manicure Russa'],
    imagens: [
      '/images/especialidades/podal-russo-demo-melhor.jpeg',
      '/images/especialidades/ela-e-podal-russo.jpeg',
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

  // Auto-rotation every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % pares.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const parAtual = pares[activeIndex]

  return (
    <section
      id="especialidades"
      style={{
        background: '#EACDC3',
        padding: '64px 20px',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <p
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.35em',
            color: '#C4948A',
            marginBottom: 12,
            fontFamily: 'Georgia, serif',
          }}
        >
          NOSSOS SERVIÇOS
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: '2rem',
            fontWeight: 700,
            color: '#1A1A1A',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          ESPECIALIDADES
        </h2>
      </div>

      {/* Grid 2 columns */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12,
          maxWidth: 400,
          margin: '0 auto',
        }}
      >
        {parAtual.items.map((item, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            {/* Title above card */}
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '0.75rem',
                color: '#1A1A1A',
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              {item}
            </p>

            {/* Card with image */}
            <div
              style={{
                height: 200,
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src={parAtual.imagens[i]}
                alt={item}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              {/* Dark overlay at bottom with name */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px 12px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                }}
              >
                <p
                  style={{
                    color: 'white',
                    fontSize: '0.75rem',
                    fontFamily: 'Georgia, serif',
                    textAlign: 'center',
                  }}
                >
                  {item}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicators */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 8,
          marginTop: 24,
        }}
      >
        {pares.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: activeIndex === i ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: activeIndex === i ? '#1A1A1A' : 'rgba(26,26,26,0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}
