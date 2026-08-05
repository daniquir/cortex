# Cortex

Das Agent-Erlebnis von Cursor und Windsurf — in Ihrem eigenen VS Code, mit Ihrem OpenCode-Abo.

**[Dokumentation](https://daniquir.github.io/cortex)** · **[Erweiterung](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## Was ist Cortex?

Cortex ist eine VS Code-Erweiterung, die [OpenCode](https://opencode.ai) als agentischen Runtime in Ihren Editor integriert:

- **Vollständiger Agentic Workflow** — Plan → Build mit Checklisten, derselbe Flow wie Cursor Agent
- **Ihre OpenCode-Modelle** — wählen Sie jedes Modell aus Ihrem OpenCode-Abo
- **Intelligenter Kontext** — lexikalische + semantische Suche über Ihre Codebase
- **Inline-Diffs** — Vorschläge annehmen/ablehnen mit Diff-Vorschau
- **Chat als rechtes Editor-Panel** — Verlauf, Tool-Timeline, parallele Tabs; funktioniert mit oder ohne Projektordner (Home für allgemeine Fragen)
- **OpenCode-Themes + Benachrichtigungen** — Desktop-Themes im Chat, optionale Benachrichtigungen und Töne
- **Ihr Editor** — VS Code oder jeder kompatible Fork; OpenCode-Abrechnung bleibt außerhalb von Cortex

## Installation

Vom [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) oder [Open VSX](https://open-vsx.org/):

```bash
code --install-extension cortex-labs.cortex-agent
# oder
ovsx install cortex-labs.cortex-agent
```

Oder suchen Sie **Cortex Agent** in den Erweiterungen. Beim ersten Start: OpenCode-CLI installieren und API key im Onboarding oder Connect einfügen (wird in der lokalen OpenCode-Auth gespeichert, auch wenn der Server noch nicht bereit ist).

## Entwicklung

Dieses Repository enthält die Dokumentations-Website (Astro).

```bash
npm install
npm run dev    # lokaler Entwicklungsserver
npm run build  # Produktionsbuild
```

## Lizenz

Die VS Code-Erweiterung **Cortex Agent** ist proprietäre Software. Der Quellcode ist nicht Open Source und nicht zur öffentlichen Weitergabe lizenziert.

Dieses Repository hostet nur die öffentliche Website und Dokumentation.
