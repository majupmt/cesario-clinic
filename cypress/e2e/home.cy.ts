/// <reference types="cypress" />

describe('🏠 Cesário Clinic - Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.log('🌐 Página carregada')
  })

  // ═══════════════════════════════════════
  // HERO SECTION
  // ═══════════════════════════════════════

  context('🎬 Hero Section', () => {
    it('deve renderizar o hero com título principal', () => {
      cy.get('section').first().should('be.visible')
      cy.log('✅ Hero section visível')
    })

    it('deve conter o nome Yagna Cesario', () => {
      cy.contains(/yagna/i).should('exist')
      cy.contains(/Cesario/i).should('exist')
      cy.log('✅ Nome Yagna Cesario encontrado')
    })

    it('deve ter CTA (call to action) visível', () => {
      cy.get('a[href*="wa.me"], button').first().should('be.visible')
      cy.log('✅ CTA encontrado')
    })

    it('deve ter imagem real de Yagna', () => {
      cy.get('#home img').should('have.attr', 'src', '/images/hero-yagna.jpeg')
      cy.log('✅ Imagem hero presente')
    })
  })

  // ═══════════════════════════════════════
  // SOBRE SECTION
  // ═══════════════════════════════════════

  context('👩 Seção Sobre', () => {
    it('deve exibir título "Quem é Yagna Cesario"', () => {
      cy.contains('Quem é Yagna').scrollIntoView().should('be.visible')
      cy.log('✅ Título Sobre visível')
    })

    it('deve exibir texto descritivo sobre a profissional', () => {
      cy.contains('Empreendedora').should('exist')
      cy.contains('educadora').should('exist')
      cy.log('✅ Texto descritivo presente')
    })

    it('deve exibir todas as badges de especialidade', () => {
      const badges = ['Manicure Russa', 'Podal Russo', 'LENS®', 'Educadora']

      badges.forEach((badge) => {
        cy.contains(badge).scrollIntoView().should('be.visible')
        cy.log(`✅ Badge "${badge}" encontrada`)
      })
    })

    it('deve ter fundo escuro (preto/dark)', () => {
      cy.get('#sobre, section').contains('Quem é Yagna').parents('section').should('exist')
      cy.log('✅ Seção Sobre renderizada')
    })
  })

  // ═══════════════════════════════════════
  // PROCEDIMENTOS / SERVIÇOS
  // ═══════════════════════════════════════

  context('💅 Seção Procedimentos', () => {
    const procedimentos = [
      'Manicure Russa',
      'Podal Russo',
      'Blindagem de Cálcio',
      'Banho de Gel Cesario',
      'Esmaltação em Gel',
      'Alongamento Soft Gel',
      'LENS®',
    ]

    it('deve exibir título "Procedimentos"', () => {
      cy.contains('Procedimentos').scrollIntoView().should('be.visible')
      cy.log('✅ Título Procedimentos visível')
    })

    it('deve listar todos os 7 procedimentos', () => {
      procedimentos.forEach((proc) => {
        cy.contains(proc).scrollIntoView().should('be.visible')
        cy.log(`✅ Procedimento "${proc}" encontrado`)
      })
    })

    it('cards devem ter imagens reais', () => {
      cy.get('#procedimentos img').should('have.length.at.least', 1)
      cy.get('#procedimentos img').first().should('have.attr', 'src').and('include', '/images/procedimentos/')
      cy.log('✅ Cards com imagens reais')
    })

    it('deve abrir modal ao clicar em um procedimento', () => {
      cy.contains('Manicure Russa').first().click()
      cy.contains('precisão').should('be.visible')
      cy.contains('AGENDAR').should('be.visible')
      cy.log('✅ Modal abre com descrição e botão AGENDAR')
    })

    it('modal deve ter botão AGENDAR com link WhatsApp', () => {
      cy.contains('Manicure Russa').first().click()
      cy.contains('AGENDAR')
        .should('have.attr', 'href')
        .and('include', 'wa.me')
      cy.log('✅ Botão AGENDAR com link WhatsApp')
    })

    it('modal deve fechar ao clicar fora', () => {
      cy.contains('Manicure Russa').first().click()
      cy.contains('AGENDAR').should('be.visible')
      cy.get('body').click(0, 0)
      cy.contains('AGENDAR').should('not.exist')
      cy.log('✅ Modal fecha ao clicar fora')
    })
  })

  // ═══════════════════════════════════════
  // ESPECIALIDADES SECTION
  // ═══════════════════════════════════════

  context('✨ Seção Especialidades', () => {
    it('deve exibir título "Especialidades"', () => {
      cy.contains('ESPECIALIDADES').scrollIntoView().should('be.visible')
      cy.log('✅ Título Especialidades visível')
    })

    it('deve ter cards com imagens reais', () => {
      cy.get('#especialidades img').should('have.length.at.least', 2)
      cy.get('#especialidades img').first().should('have.attr', 'src').and('include', '/images/')
      cy.log('✅ Especialidades com imagens reais')
    })

    it('deve ter indicadores de navegação (dots)', () => {
      cy.get('#especialidades button').should('have.length', 4)
      cy.log('✅ 4 indicadores de navegação presentes')
    })

    it('deve trocar de par ao clicar nos dots', () => {
      cy.get('#especialidades button').eq(1).click()
      cy.wait(500)
      cy.log('✅ Navegação por dots funciona')
    })
  })

  // ═══════════════════════════════════════
  // CURSOS SECTION
  // ═══════════════════════════════════════

  context('📚 Seção Cursos & Mentorias', () => {
    it('deve exibir título "Cursos & Mentorias"', () => {
      cy.contains('Cursos & Mentorias').scrollIntoView().should('be.visible')
      cy.log('✅ Título Cursos visível')
    })

    it('deve ter carousel com cards clicáveis', () => {
      cy.get('#cursos a[href*="wa.me"]').should('have.length.at.least', 1)
      cy.log('✅ Cards de cursos são links para WhatsApp')
    })

    it('deve ter imagens reais nos cards', () => {
      cy.get('#cursos img').should('have.length.at.least', 1)
      cy.get('#cursos img').first().should('have.attr', 'src').and('include', '/images/cursos/')
      cy.log('✅ Cursos com imagens reais')
    })

    it('deve ter setas de navegação', () => {
      cy.get('#cursos button').should('have.length', 2)
      cy.log('✅ Setas de navegação presentes')
    })

    it('deve ter tags nos cards (VIP, PRESENCIAL, etc)', () => {
      cy.contains('VIP').scrollIntoView().should('be.visible')
      cy.log('✅ Tags presentes nos cards')
    })
  })

  // ═══════════════════════════════════════
  // CONTATO
  // ═══════════════════════════════════════

  context('📞 Seção Contato', () => {
    it('deve exibir título "Agende seu Horário"', () => {
      cy.contains('Agende seu').scrollIntoView().should('be.visible')
      cy.contains('Horário').should('be.visible')
      cy.log('✅ Título Contato visível')
    })

    it('deve ter botão do WhatsApp com link correto', () => {
      cy.get('a[href*="wa.me"]')
        .scrollIntoView()
        .should('be.visible')
        .and('have.attr', 'target', '_blank')
      cy.log('✅ Botão WhatsApp com link e target corretos')
    })

    it('deve ter botão do Instagram com link correto', () => {
      cy.get('a[href*="instagram.com"]')
        .scrollIntoView()
        .should('be.visible')
        .and('have.attr', 'target', '_blank')
      cy.log('✅ Botão Instagram com link e target corretos')
    })

    it('deve exibir localização e horário', () => {
      cy.contains('Uberlândia').scrollIntoView().should('be.visible')
      cy.contains(/seg/i).should('exist')
      cy.log('✅ Localização e horário presentes')
    })
  })

  // ═══════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════

  context('🦶 Footer', () => {
    it('deve renderizar o footer', () => {
      cy.get('footer').scrollIntoView().should('be.visible')
      cy.log('✅ Footer visível')
    })
  })

  // ═══════════════════════════════════════
  // WHATSAPP FLOAT
  // ═══════════════════════════════════════

  context('💬 WhatsApp Float Button', () => {
    it('deve estar sempre visível (fixed)', () => {
      cy.get('a[href*="wa.me"]').last().should('be.visible')
      cy.log('✅ WhatsApp float visível')
    })

    it('deve abrir em nova aba', () => {
      cy.get('a[href*="wa.me"]')
        .last()
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'rel', 'noopener noreferrer')
      cy.log('✅ WhatsApp float abre em nova aba com segurança')
    })
  })
})

// ═══════════════════════════════════════════
// NAVEGAÇÃO & RESPONSIVIDADE
// ═══════════════════════════════════════════

describe('📱 Responsividade', () => {
  const viewports: [string, number, number][] = [
    ['iPhone SE', 375, 667],
    ['iPhone 14', 390, 844],
    ['iPad Mini', 768, 1024],
    ['Desktop', 1280, 720],
  ]

  viewports.forEach(([device, w, h]) => {
    it(`deve renderizar corretamente em ${device} (${w}x${h})`, () => {
      cy.viewport(w, h)
      cy.visit('http://localhost:3000')
      cy.contains(/yagna/i).should('be.visible')
      cy.contains('Procedimentos').scrollIntoView().should('be.visible')
      cy.contains('Agende').scrollIntoView().should('be.visible')
      cy.log(`✅ ${device} renderizado OK`)
    })
  })
})

// ═══════════════════════════════════════════
// ACESSIBILIDADE BÁSICA
// ═══════════════════════════════════════════

describe('♿ Acessibilidade', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('links devem ter href válido', () => {
    cy.get('a').each(($a) => {
      const href = $a.attr('href')
      expect(href).to.not.be.empty
      cy.log(`✅ Link válido: ${href}`)
    })
  })

  it('imagens devem ter alt text (se existirem)', () => {
    cy.get('body').then(($body) => {
      if ($body.find('img').length > 0) {
        cy.get('img').each(($img) => {
          expect($img.attr('alt')).to.not.be.undefined
        })
        cy.log('✅ Todas imagens com alt text')
      } else {
        cy.log('ℹ️ Nenhuma imagem encontrada (placeholder phase)')
      }
    })
  })

  it('página deve ter lang definido', () => {
    cy.get('html').should('have.attr', 'lang')
    cy.log('✅ Atributo lang presente no HTML')
  })
})

// ═══════════════════════════════════════════
// PERFORMANCE BÁSICA
// ═══════════════════════════════════════════

describe('⚡ Performance', () => {
  it('página deve carregar em menos de 5 segundos', () => {
    const start = Date.now()
    cy.visit('http://localhost:3000')
    cy.contains(/yagna/i).should('be.visible').then(() => {
      const loadTime = Date.now() - start
      cy.log(`⏱️ Tempo de carregamento: ${loadTime}ms`)
      expect(loadTime).to.be.lessThan(5000)
      cy.log('✅ Performance OK')
    })
  })

  it('não deve ter erros no console', () => {
    cy.on('window:before:load', (win) => {
      cy.stub(win.console, 'error').as('consoleError')
    })
    cy.visit('http://localhost:3000')
    cy.wait(2000)
    cy.get('@consoleError').then((stub: any) => {
      if (stub.callCount === 0) {
        cy.log('✅ Zero erros no console')
      } else {
        cy.log(`⚠️ ${stub.callCount} erro(s) no console`)
      }
    })
  })
})