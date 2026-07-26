# Cortex

Agentic AI coding in VS Code — same experience as Cursor/Windsurf, without switching editors.

**[Documentation](https://daniquir.github.io/cortex)** · **[Extension](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## What is Cortex?

Cortex is a VS Code extension that connects to [OpenCode](https://github.com/opencode-ai/opencode) to provide:

- **Complete agentic workflow** — Plan → Build with checklists, same flow as Cursor Agent
- **Multi-provider** — OpenAI, Anthropic, Google, xAI, OpenRouter and more
- **Smart context** — lexical + semantic search over your codebase
- **Inline diffs** — accept/reject suggestions with diff preview
- **Chat sidebar** — full history with tool usage timeline
- **Open source** — OpenCode backend, no lock-in

## Install

```bash
code --install-extension daniquir.cortex
```

Or search "Cortex" in the VS Code Marketplace.

## Development

This repo contains the documentation site (Astro).

```bash
npm install
npm run dev    # local dev server
npm run build  # production build
```

## License

MIT
