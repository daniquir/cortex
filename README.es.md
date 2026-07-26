# Cortex

Programación con IA agéntica en VS Code — la misma experiencia que Cursor/Windsurf, sin cambiar de editor.

**[Documentación](https://daniquir.github.io/cortex)** · **[Extensión](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## ¿Qué es Cortex?

Cortex es una extensión de VS Code que se conecta a [OpenCode](https://github.com/opencode-ai/opencode) para ofrecer:

- **Flujo agéntico completo** — Planificar → Construir con listas de verificación, el mismo flujo que Cursor Agent
- **Multi-proveedor** — OpenAI, Anthropic, Google, xAI, OpenRouter y más
- **Contexto inteligente** — búsqueda léxica + semántica en tu código fuente
- **Diffs en línea** — aceptar/rechazar sugerencias con vista previa de diferencias
- **Barra lateral de chat** — historial completo con línea de tiempo de uso de herramientas
- **Código abierto** — backend de OpenCode, sin bloqueo de proveedor

## Instalación

```bash
code --install-extension daniquir.cortex
```

O busca "Cortex" en el VS Code Marketplace.

## Desarrollo

Este repositorio contiene el sitio de documentación (Astro).

```bash
npm install
npm run dev    # servidor de desarrollo local
npm run build  # compilación de producción
```

## Licencia

MIT
