#!/bin/bash

# ═══════════════════════════════════════════════════
#   CESÁRIO CLINIC
# ═══════════════════════════════════════════════════

LINE="───────────────────────────────────────────────"

header() {
  clear
  echo ""
  echo "  ╔═══════════════════════════════════════╗"
  echo "  ║         CESÁRIO CLINIC                ║"
  echo "  ╚═══════════════════════════════════════╝"
  echo ""
}

info()    { echo "  ▸ $1"; }
success() { echo "  ✔  $1"; }
label()   { echo "  $LINE"; echo "  $1"; echo "  $LINE"; }

case "$1" in
  dev)
    header
    label "DEV SERVER"
    info  "Iniciando Next.js em http://localhost:3000"
    echo ""
    cd ~/cesario-clinic && bun run dev
    ;;

  test)
    header
    label "CYPRESS — MODO VISUAL"
    info  "Abrindo Cypress GUI..."
    echo ""
    cd ~/cesario-clinic && bunx cypress open
    ;;

  test:run)
    header
    label "CYPRESS — HEADLESS"
    info  "Rodando cypress/e2e/home.cy.ts"
    echo ""
    cd ~/cesario-clinic && bunx cypress run --spec "cypress/e2e/home.cy.ts" 2>&1 \
      | grep -E "(passing|failing|pending|✓|✗|×|Spec|Tests|Duration|  [0-9]+\))"
    echo ""
    ;;

  clean)
    header
    label "COMANDOS DISPONÍVEIS"
    info  "./run.sh dev        → Inicia o servidor de desenvolvimento"
    info  "./run.sh test       → Abre Cypress GUI"
    info  "./run.sh test:run   → Roda testes headless no terminal"
    info  "./run.sh clean      → Exibe esta tela"
    echo ""
    ;;

  *)
    echo ""
    echo "  Uso: ./run.sh {dev|test|test:run|clean}"
    echo ""
    ;;
esac
