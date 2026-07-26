# Cortex

Programação com IA agêntica no VS Code — a mesma experiência do Cursor/Windsurf, sem trocar de editor.

**[Documentação](https://daniquir.github.io/cortex)** · **[Extensão](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## O que é Cortex?

Cortex é uma extensão do VS Code que se conecta ao [OpenCode](https://github.com/opencode-ai/opencode) para oferecer:

- **Fluxo agêntico completo** — Planejar → Construir com checklists, o mesmo fluxo do Cursor Agent
- **Multi-provedor** — OpenAI, Anthropic, Google, xAI, OpenRouter e mais
- **Contexto inteligente** — busca léxica + semântica no seu código-fonte
- **Diffs inline** — aceitar/rejeitar sugestões com visualização de diferenças
- **Barra lateral de chat** — histórico completo com linha do tempo de uso de ferramentas
- **Código aberto** — backend do OpenCode, sem lock-in

## Instalação

```bash
code --install-extension daniquir.cortex
```

Ou busque "Cortex" no VS Code Marketplace.

## Desenvolvimento

Este repositório contém o site de documentação (Astro).

```bash
npm install
npm run dev    # servidor de desenvolvimento local
npm run build  # build de produção
```

## Licença

MIT
