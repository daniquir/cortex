# Cortex

A experiência agentic do Cursor e Windsurf — no seu próprio VS Code, com a sua assinatura OpenCode.

**[Documentação](https://daniquir.github.io/cortex)** · **[Extensão](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## O que é Cortex?

Cortex é uma extensão do VS Code que integra o [OpenCode](https://opencode.ai) como runtime agentic dentro do seu editor:

- **Workflow agentic completo** — Plan → Build com checklists, o mesmo flow do Cursor Agent
- **Seus modelos OpenCode** — escolha qualquer modelo disponível na sua assinatura OpenCode
- **Contexto inteligente** — busca léxica + semântica no seu codebase
- **Diffs inline** — aceitar/rejeitar sugestões com preview de diferenças
- **Chat lateral** — histórico completo com timeline de uso de ferramentas
- **Seu editor** — VS Code ou qualquer fork compatível; a cobrança do OpenCode fica fora do Cortex

## Instalação

Na [Marketplace do VS Code](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) ou [Open VSX](https://open-vsx.org/):

```bash
code --install-extension cortex-labs.cortex-agent
# ou
ovsx install cortex-labs.cortex-agent
```

Ou busque **Cortex Agent** nas Extensões.

## Desenvolvimento

Este repositório contém o site de documentação (Astro).

```bash
npm install
npm run dev    # servidor de desenvolvimento local
npm run build  # build de produção
```

## Licença

MIT
