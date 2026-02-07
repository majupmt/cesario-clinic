'use client'

import { useState } from 'react'

const procedimentos = [
  {
    nome: 'Manicure Russa',
    desc: 'Técnica de alta precisão com instrumentos esterilizados, proporcionando cutículas perfeitamente limpas e acabamento impecável.',
    imagem: '/images/procedimentos/manicure-modelo.jpeg',
  },
  {
    nome: 'Podal Russo',
    desc: 'Procedimento especializado nos pés com técnica russa, garantindo saúde, conforto e estética podal de excelência.',
    imagem: '/images/procedimentos/whatsapp-image-1.jpeg',
  },
  {
    nome: 'Blindagem de Cálcio',
    desc: 'Tratamento fortalecedor que cria camada protetora sobre a unha natural, prevenindo quebras e descamações.',
    imagem: '/images/procedimentos/yagna-blindagem-calcio.jpeg',
  },
  {
    nome: 'Banho de Gel Cesario',
    desc: 'Método exclusivo que fortalece, protege e uniformiza a unha natural sem espessura excessiva.',
    imagem: '/images/procedimentos/yagna-tesouras-mao.jpeg',
  },
  {
    nome: 'Esmaltação em Gel',
    desc: 'Brilho intenso, secagem imediata e longa durabilidade sem comprometer a saúde da unha natural.',
    imagem: '/images/yagna-ela.jpeg',
  },
  {
    nome: 'Alongamento Soft Gel',
    desc: 'Tips de gel pré-moldadas garantindo leveza, resistência e naturalidade para unhas longas e confortáveis.',
    imagem: '/images/procedimentos/alongamento-soft-gel.jpeg',
  },
  {
    nome: 'LENS®',
    desc: 'Método exclusivo criado por Yagna Cesario, fundamentado na leitura personalizada da anatomia da unha.',
    imagem: '/images/procedimentos/whatsapp-image-2.jpeg',
  },
]

export default function Servicos() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProc, setSelectedProc] = useState<typeof procedimentos[0] | null>(null)

  const openModal = (proc: typeof procedimentos[0]) => {
    setSelectedProc(proc)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProc(null)
  }

  return (
    <>
      <section
        id="procedimentos"
        style={{
          background: '#FAF5F2',
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
            TRATAMENTOS
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '2rem',
              fontWeight: 700,
              color: '#1A1A1A',
            }}
          >
            Procedimentos
          </h2>
        </div>

        {/* Carousel (touch scroll, no arrows) */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '0 20px',
          }}
        >
          {procedimentos.map((proc, i) => (
            <div
              key={i}
              onClick={() => openModal(proc)}
              style={{
                flexShrink: 0,
                width: '46%',
                maxWidth: 180,
                scrollSnapAlign: 'start',
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              {/* Title above card */}
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '0.8rem',
                  color: '#1A1A1A',
                  marginBottom: 8,
                  fontWeight: 600,
                }}
              >
                {proc.nome}
              </p>

              {/* Card */}
              <div
                style={{
                  height: 280,
                  borderRadius: 16,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={proc.imagem}
                  alt={proc.nome}
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
                    padding: '24px 12px',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
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
                    {proc.nome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedProc && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: 20,
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: 'white',
              borderRadius: 20,
              maxWidth: 380,
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.1)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div
              style={{
                height: 200,
                overflow: 'hidden',
              }}
            >
              <img
                src={selectedProc.imagem}
                alt={selectedProc.nome}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: 24 }}>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.3rem',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  marginBottom: 12,
                }}
              >
                {selectedProc.nome}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'rgba(26,26,26,0.6)',
                  lineHeight: 1.7,
                  marginBottom: 24,
                  fontFamily: 'Georgia, serif',
                }}
              >
                {selectedProc.desc}
              </p>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/5534999999999"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px 24px',
                  background: '#25D366',
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: 100,
                  textDecoration: 'none',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  fontFamily: 'Georgia, serif',
                }}
              >
                AGENDAR
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
