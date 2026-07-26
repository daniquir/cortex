# Cortex

KI-gestützte Agentic-Programmierung in VS Code — dasselbe Erlebnis wie Cursor/Windsurf, ohne den Editor zu wechseln.

**[Dokumentation](https://daniquir.github.io/cortex)** · **[Erweiterung](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## Was ist Cortex?

Cortex ist eine VS Code-Erweiterung, die sich mit [OpenCode](https://github.com/opencode-ai/opencode) verbindet und bietet:

- **Vollständiger agentic Workflow** — Planen → Bauen mit Checklisten, derselbe Ablauf wie Cursor Agent
- **Multi-Anbieter** — OpenAI, Anthropic, Google, xAI, OpenRouter und mehr
- **Intelligenter Kontext** — lexikalische + semantische Suche im Quellcode
- **Inline-Diffs** — Vorschläge annehmen/ablehnen mit Diff-Vorschau
- **Chat-Seitenleiste** — vollständiger Verlauf mit Zeitleiste der Werkzeugnutzung
- **Open Source** — OpenCode-Backend, kein Vendor Lock-in

## Installation

```bash
code --install-extension daniquir.cortex
```

Oder suchen Sie nach „Cortex" im VS Code Marketplace.

## Entwicklung

Dieses Repository enthält die Dokumentations-Website (Astro).

```bash
npm install
npm run dev    lokaler Entwicklungsserver
npm run build  Produktionsbuild
```

## Lizenz

MIT
