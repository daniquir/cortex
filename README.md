# Cortex

The Cursor and Windsurf agent experience — in your own VS Code, powered by your OpenCode subscription.

**[Documentation](https://daniquir.github.io/cortex)** · **[Extension](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## What is Cortex?

Cortex is a VS Code extension that integrates [OpenCode](https://opencode.ai) as the agentic runtime inside your editor:

- **Complete agentic workflow** — Plan → Build with checklists, same flow as Cursor Agent
- **Your OpenCode models** — pick any model available on your OpenCode subscription
- **Smart context** — lexical + semantic search over your codebase
- **Inline diffs** — accept/reject suggestions with diff preview
- **Chat as a right editor panel** — history, tool timeline, parallel tabs; works with or without a project folder (home directory for general questions)
- **OpenCode themes + notifications** — desktop themes in chat, optional notifications and sounds
- **Your editor** — VS Code or any compatible fork; OpenCode billing stays outside Cortex

## Install

From the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) or [Open VSX](https://open-vsx.org/):

```bash
code --install-extension cortex-labs.cortex-agent
# or
ovsx install cortex-labs.cortex-agent
```

Or search **Cortex Agent** in Extensions. First run: install the OpenCode CLI, paste your API key in onboarding or Connect (saved to OpenCode’s local auth even before the server is up).

## Development

This repo contains the documentation site (Astro).

```bash
npm install
npm run dev    # local dev server
npm run build  # production build
```

## License

The **Cortex Agent** VS Code extension is proprietary software. Source code is not open source and is not licensed for public redistribution.

This repository hosts the public website and documentation only.
