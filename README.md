# Cortex

AI coding agent for VS Code — like Cursor, but in your editor.

**[Documentation](https://daniquir.github.io/cortex)** · **[Extension](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)** · **[Agent Source](https://github.com/daniquir/cortex-agent)**

## What is Cortex?

Cortex is a VS Code extension that connects to [OpenCode](https://github.com/opencode-ai/opencode) to provide:

- **Multi-provider AI** — OpenAI, Anthropic, Google, xAI, and more
- **Context-aware coding** — lexical + semantic search over your codebase
- **Plan & Build workflow** — analyze first, then implement step by step
- **Inline diffs** — accept/reject AI suggestions directly in the editor
- **Chat sidebar** — full conversation history with tool usage timeline

## Install

```bash
code --install-extension daniquir.cortex
```

Or search "Cortex" in the VS Code Marketplace.

## Development

This repo contains the documentation site (Astro). The extension source code is in [cortex-agent](https://github.com/daniquir/cortex-agent).

```bash
npm install
npm run dev    # local dev server
npm run build  # production build
```

## License

MIT
