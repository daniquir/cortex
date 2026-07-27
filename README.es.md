# Cortex

La experiencia agentic de Cursor y Windsurf — en tu propio VS Code, impulsada por tu suscripción de OpenCode.

**[Documentación](https://daniquir.github.io/cortex)** · **[Extensión](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## ¿Qué es Cortex?

Cortex es una extensión de VS Code que integra [OpenCode](https://opencode.ai) como runtime agentico dentro de tu editor:

- **Flujo agentic completo** — Plan → Build con checklists, el mismo flow que Cursor Agent
- **Tus modelos de OpenCode** — elige cualquier modelo disponible en tu suscripción de OpenCode
- **Contexto inteligente** — búsqueda léxica + semántica sobre tu codebase
- **Diffs inline** — aceptar/rechazar sugerencias con preview de diferencias
- **Chat lateral** — historial completo con timeline de uso de herramientas
- **Tu editor** — VS Code o cualquier fork compatible; la facturación de OpenCode queda fuera de Cortex

## Instalación

Desde el [Marketplace de VS Code](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) o [Open VSX](https://open-vsx.org/):

```bash
code --install-extension cortex-labs.cortex-agent
# o
ovsx install cortex-labs.cortex-agent
```

O busca **Cortex Agent** en Extensiones.

## Desarrollo

Este repositorio contiene el sitio de documentación (Astro).

```bash
npm install
npm run dev    # servidor de desarrollo local
npm run build  # compilación de producción
```

## Licencia

La extensión de VS Code **Cortex Agent** es software propietario. El código fuente no es open source y no está licenciado para redistribución pública.

Este repositorio solo aloja el sitio web y la documentación públicos.
