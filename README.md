# Cesário Clinic

Site institucional da **Yagna Cesario** - Expert em Manicure Russa e procedimentos de alto padrão.

## Tecnologias

- **Next.js 16** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Cypress** - Testes e2e

## Estrutura

```
components/
├── hero.tsx           # Hero com foto e card de apresentação
├── sobre.tsx          # Seção "Quem é Yagna Cesario"
├── cursos.tsx         # Carrossel de Cursos & Mentorias
├── especialidades.tsx # Grid rotativo de especialidades
├── servicos.tsx       # Procedimentos com modal
├── contato.tsx        # Botões WhatsApp e Instagram
├── footer.tsx         # Rodapé
└── whatsapp-float.tsx # Botão flutuante WhatsApp
```

## Funcionalidades

- Layout mobile-first (430px)
- Carrosséis com scroll-snap
- Especialidades com rotação automática (4s)
- Modal de procedimentos com botão "Agendar"
- Links diretos para WhatsApp
- Paleta: preto (#1A1A1A) + nude/blush (#E8D5CC, #D4A99A)

## Rodando localmente

```bash
# Instalar dependências
bun install

# Rodar em desenvolvimento
bun run dev

# Build de produção
bun run build

# Testes Cypress
bun run cypress:open
```

## Acesso na rede local

```bash
bunx next dev --hostname 0.0.0.0 --port 3000
```

Acesse de outro dispositivo: `http://SEU-IP:3000`

## Deploy

O projeto pode ser deployado na [Vercel](https://vercel.com) com configuração zero.

---

Desenvolvido por **Maria Júlia**
