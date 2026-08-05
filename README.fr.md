# Cortex

L'expérience agentic de Cursor et Windsurf — dans votre propre VS Code, alimentée par votre abonnement OpenCode.

**[Documentation](https://daniquir.github.io/cortex)** · **[Extension](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## Qu'est-ce que Cortex ?

Cortex est une extension VS Code qui intègre [OpenCode](https://opencode.ai) comme runtime agentic dans votre éditeur :

- **Workflow agentic complet** — Plan → Build avec checklists, le même flow que Cursor Agent
- **Vos modèles OpenCode** — choisissez n'importe quel modèle disponible sur votre abonnement OpenCode
- **Contexte intelligent** — recherche lexicale + sémantique sur votre codebase
- **Diffs inline** — accepter/rejeter les suggestions avec aperçu des différences
- **Chat en panneau d'éditeur à droite** — historique, chronologie des outils, onglets parallèles ; fonctionne avec ou sans dossier de projet (home pour les questions générales)
- **Thèmes OpenCode + notifications** — thèmes Desktop dans le chat, notifications et sons optionnels
- **Votre éditeur** — VS Code ou tout fork compatible ; la facturation OpenCode reste hors de Cortex

## Installation

Depuis la [Marketplace VS Code](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) ou [Open VSX](https://open-vsx.org/) :

```bash
code --install-extension cortex-labs.cortex-agent
# ou
ovsx install cortex-labs.cortex-agent
```

Ou recherchez **Cortex Agent** dans les Extensions. Premier lancement : installez la CLI OpenCode, collez votre API key dans l'onboarding ou Connect (enregistrée dans l'auth locale d'OpenCode même si le serveur n'est pas encore prêt).

## Développement

Ce dépôt contient le site de documentation (Astro).

```bash
npm install
npm run dev    # serveur de développement local
npm run build  # build de production
```

## Licence

L'extension VS Code **Cortex Agent** est un logiciel propriétaire. Le code source n'est pas open source et n'est pas licencié pour une redistribution publique.

Ce dépôt héberge uniquement le site web et la documentation publics.
