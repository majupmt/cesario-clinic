#!/bin/bash

# ═══════════════════════════════════════
# Cesário Clinic - Scripts Úteis
# ═══════════════════════════════════════

case "$1" in
  dev)
    # Limpa terminal e inicia Next.js
    clear
    echo "🚀 Iniciando Cesário Clinic..."
    echo "═══════════════════════════════"
    cd ~/cesario-clinic && npm run dev
    ;;

  test)
    # Limpa terminal e abre Cypress GUI
    clear
    echo "🧪 Abrindo Cypress..."
    echo "═══════════════════════════════"
    cd ~/cesario-clinic && npx cypress open
    ;;

  test:run)
    # Limpa terminal e roda testes headless (terminal)
    clear
    echo "🧪 Rodando testes headless..."
    echo "═══════════════════════════════"
    cd ~/cesario-clinic && npx cypress run --spec "cypress/e2e/home.cy.ts" 2>&1 | grep -E "(✓|✗|passing|failing|✅|⚠️|❌|Spec|Tests|Duration)"
    ;;

  clean)
    # Limpa terminal
    clear
    echo "🧹 Terminal limpo!"
    echo "═══════════════════════════════"
    echo "Comandos disponíveis:"
    echo "  ./run.sh dev       → Inicia o projeto"
    echo "  ./run.sh test      → Abre Cypress GUI"
    echo "  ./run.sh test:run  → Roda testes no terminal (limpo)"
    echo "  ./run.sh clean     → Limpa terminal"
    echo "═══════════════════════════════"
    ;;

  *)
    echo "Uso: ./run.sh {dev|test|test:run|clean}"
    ;;
esac
