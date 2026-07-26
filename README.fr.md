# Cortex

Codage avec IA agentic dans VS Code — la même expérience que Cursor/Windsurf, sans changer d'éditeur.

**[Documentation](https://daniquir.github.io/cortex)** · **[Extension](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## Qu'est-ce que Cortex ?

Cortex est une extension VS Code qui se connecte à [OpenCode](https://github.com/opencode-ai/opencode) pour fournir :

- **Flux agentic complet** — Planifier → Construire avec des checklists, le même flux que Cursor Agent
- **Multi-fournisseur** — OpenAI, Anthropic, Google, xAI, OpenRouter et plus
- **Contexte intelligent** — recherche lexicale + sémantique dans votre code source
- **Diffs en ligne** — accepter/rejeter les suggestions avec aperçu des différences
- **Barre latérale de chat** — historique complet avec chronologie d'utilisation des outils
- **Open source** — backend OpenCode, sans vendor lock-in

## Installation

```bash
code --install-extension daniquir.cortex
```

Ou recherchez « Cortex » dans le VS Code Marketplace.

## Développement

Ce dépôt contient le site de documentation (Astro).

```bash
npm install
npm run dev    # serveur de développement local
npm run build  # build de production
```

## Licence

MIT
