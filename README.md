# Cortex

Agentic AI coding en VS Code — misma experiencia que Cursor/Windsurf, pero sin cambiar de editor.

**[Documentación](https://daniquir.github.io/cortex)** · **[Extension](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## ¿Qué es Cortex?

Cortex es una extensión de VS Code que conecta con [OpenCode](https://github.com/opencode-ai/opencode) para ofrecer:

- **Agentic workflow completo** — Plan → Build con checklists, mismo flow de Cursor Agent
- **Multi-proveedor** — OpenAI, Anthropic, Google, xAI, OpenRouter y más
- **Contexto inteligente** — búsqueda léxica + semántica sobre tu codebase
- **Ediciones inline** — acepta/rechaza sugerencias con diff preview
- **Chat lateral** — historial completo con timeline de herramientas
- **Open source** — backend OpenCode, sin.lock-in

## Instalación

```bash
code --install-extension daniquir.cortex
```

O busca "Cortex" en la VS Code Marketplace.

## Desarrollo

Este repo contiene el sitio de documentación (Astro).

```bash
npm install
npm run dev    # servidor de desarrollo local
npm run build  # build de producción
```

## Licencia

MIT
