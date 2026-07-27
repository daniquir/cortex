# Cortex

Das Agent-Erlebnis von Cursor und Windsurf — in Ihrem eigenen VS Code, mit Ihrem OpenCode-Abo.

**[Dokumentation](https://daniquir.github.io/cortex)** · **[Erweiterung](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## Was ist Cortex?

Cortex ist eine VS Code-Erweiterung, die [OpenCode](https://opencode.ai) als agentischen Runtime in Ihren Editor integriert:

- **Vollständiger Agentic Workflow** — Plan → Build mit Checklisten, derselbe Flow wie Cursor Agent
- **Ihre OpenCode-Modelle** — wählen Sie jedes Modell aus Ihrem OpenCode-Abo
- **Intelligenter Kontext** — lexikalische + semantische Suche über Ihre Codebase
- **Inline-Diffs** — Vorschläge annehmen/ablehnen mit Diff-Vorschau
- **Chat-Sidebar** — vollständiger Verlauf mit Tool-Nutzungs-Timeline
- **Ihr Editor** — VS Code oder jeder kompatible Fork; OpenCode-Abrechnung bleibt außerhalb von Cortex

## Installation

Vom [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) oder [Open VSX](https://open-vsx.org/):

```bash
code --install-extension cortex-labs.cortex-agent
# oder
ovsx install cortex-labs.cortex-agent
```

Oder suchen Sie **Cortex Agent** in den Erweiterungen.

## Entwicklung

Dieses Repository enthält die Dokumentations-Website (Astro).

```bash
npm install
npm run dev    # lokaler Entwicklungsserver
npm run build  # Produktionsbuild
```

## Lizenz

MIT
