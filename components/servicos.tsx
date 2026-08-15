'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const procedimentos = [
  {
    nome: 'Manicure Russa',
    desc: 'Técnica de alta precisão com instrumentos esterilizados, proporcionando cutículas perfeitamente limpas e acabamento impecável.',
    imagem: '/images/procedimentos/yagna-tesouras.jpeg',
  },
  {
    nome: 'Podal Russo',
    desc: 'Procedimento especializado nos pés com técnica russa, garantindo saúde, conforto e estética podal de excelência.',
    imagem: '/images/procedimentos/podal-russo.jpeg',
  },
  {
    nome: 'Blindagem de Cálcio',
    desc: 'Tratamento fortalecedor que cria camada protetora sobre a unha natural, prevenindo quebras e descamações.',
    imagem: '/images/procedimentos/blindagem.jpeg',
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
  const carouselRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  const scrollLeft = () => {
    carouselRef.current?.scrollBy({ left: -220, behavior: 'smooth' })
  }

  const scrollRight = () => {
    carouselRef.current?.scrollBy({ left: 220, behavior: 'smooth' })
  }

  const openModal = (proc: typeof procedimentos[0]) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setSelectedProc(proc)
    requestAnimationFrame(() => setModalOpen(true))
  }

  const closeModal = () => {
    setModalOpen(false)
    closeTimeoutRef.current = setTimeout(() => setSelectedProc(null), 300)
  }

  return (
    <>
      <section
        id="procedimentos"
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
              letterSpacing: '0.45em',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: 16,
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            TRATAMENTOS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#ffffff',
            }}
          >
            Procedimentos
          </h2>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            gap: 14,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '0 40px',
          }}
        >
          {procedimentos.map((proc, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Ver detalhes de ${proc.nome}`}
              onClick={() => openModal(proc)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  openModal(proc)
                }
              }}
              className="group cursor-pointer"
              style={{
                flexShrink: 0,
                width: '46%',
                maxWidth: 200,
                scrollSnapAlign: 'start',
                textAlign: 'center',
              }}
            >
              {/* Title above card */}
              <p
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: '0.78rem',
                  color: '#ffffff',
                  marginBottom: 10,
                  fontWeight: 500,
                }}
              >
                {proc.nome}
              </p>

              {/* Card */}
              <div
                className="transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_18px_34px_rgba(0,0,0,0.45)] group-active:scale-[0.98]"
                style={{
                  height: 280,
                  borderRadius: 12,
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: '#141414',
                }}
              >
                <Image
                  src={proc.imagem}
                  alt={proc.nome}
                  fill
                  className="transition-transform duration-500 ease-out group-hover:scale-105"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '28px 12px',
                    background: 'linear-gradient(transparent, rgba(10,10,10,0.8))',
                  }}
                >
                  <p
                    style={{
                      color: '#ffffff',
                      fontSize: '0.65rem',
                      fontFamily: "var(--font-inter), sans-serif",
                      textAlign: 'center',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {proc.nome}
                  </p>
                </div>
              </div>
            </div>
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
            aria-label="Procedimento anterior"
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
            aria-label="Próximo procedimento"
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

        {/* Badge */}
        <div style={{ textAlign: 'center', marginTop: 24, marginBottom: 8 }}>
          <span
            style={{
              display: 'inline-block',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 100,
              padding: '10px 24px',
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: 'rgba(255,255,255,0.5)',
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            Clique no procedimento e agende!
          </span>
        </div>
      </section>

      {/* Modal */}
      {selectedProc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProc.nome}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10,10,10,0.75)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: 24,
            opacity: modalOpen ? 1 : 0,
            pointerEvents: modalOpen ? 'auto' : 'none',
            transition: 'opacity 280ms ease',
          }}
          onClick={closeModal}
        >
          <div
            className="cc-light-surface"
            style={{
              background: '#ffffff',
              borderRadius: 12,
              border: '1px solid #e0e0e0',
              maxWidth: 400,
              width: '100%',
              overflow: 'hidden',
              position: 'relative',
              transform: modalOpen ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.96)',
              opacity: modalOpen ? 1 : 0,
              transition: 'transform 320ms cubic-bezier(0.2,0.8,0.2,1), opacity 320ms ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              aria-label="Fechar"
              className="transition-transform duration-200 hover:scale-110 active:scale-90"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(10,10,10,0.08)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
              <Image
                src={selectedProc.imagem}
                alt={selectedProc.nome}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Content */}
            <div style={{ padding: '28px 28px 32px' }}>
              <h3
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: '#0a0a0a',
                  marginBottom: 14,
                }}
              >
                {selectedProc.nome}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: '#666',
                  lineHeight: 1.75,
                  marginBottom: 28,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 300,
                }}
              >
                {selectedProc.desc}
              </p>

              {/* WhatsApp button */}
              <a
                href="https://wa.me/559984446966"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.97]"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '14px 32px',
                  background: '#ffffff',
                  color: '#0a0a0a',
                  textAlign: 'center',
                  borderRadius: 10,
                  textDecoration: 'none',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.15em',
                  fontFamily: "var(--font-inter), sans-serif",
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
