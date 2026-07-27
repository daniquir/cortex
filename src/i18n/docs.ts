import type { Lang } from './translations';

export interface DocsTranslations {
  docsMetaTitle: string;
  docsTitle: string;
  docsSubtitle: string;
  docsCards: { title: string; desc: string; path: string }[];

  installMetaTitle: string;
  installTitle: string;
  installFromMarketplace: string;
  installMarketplaceSteps: string[];
  installFromVsix: string;
  installFirstRun: string;
  installFirstRunSteps: { before?: string; strong?: string; after?: string }[];
  installRequirements: string;
  installReqItems: string[];

  configMetaTitle: string;
  configTitle: string;
  configSettings: string;
  configSettingsIntro: string;
  configTableHeaders: [string, string, string];
  configRows: { setting: string; default: string; desc: string }[];
  configProviders: string;
  configProvidersIntro: string;
  configProviderItems: { name: string; desc: string }[];
  configContext: string;
  configContextIntro: string;
  configContextItems: { name: string; desc: string }[];

  archMetaTitle: string;
  archTitle: string;
  archHowTitle: string;
  archHowBefore: string;
  archHowAfter: string;
  archComponents: string;
  archComponentItems: { name: string; desc: string }[];
  archWorkflow: string;
  archWorkflowSteps: { name: string; desc: string }[];
}

export const docsTranslations: Record<Lang, DocsTranslations> = {
  en: {
    docsMetaTitle: 'Docs — Cortex',
    docsTitle: 'Documentation',
    docsSubtitle: 'Everything you need to get started with Cortex.',
    docsCards: [
      { title: 'Installation', desc: 'How to install and set up Cortex in VS Code.', path: 'docs/install/' },
      { title: 'Configuration', desc: 'Settings, providers, and customization options.', path: 'docs/config/' },
      { title: 'Architecture', desc: 'How Cortex works under the hood.', path: 'docs/architecture/' },
    ],

    installMetaTitle: 'Installation — Cortex',
    installTitle: 'Installation',
    installFromMarketplace: 'From Marketplace',
    installMarketplaceSteps: [
      'Open VS Code',
      'Go to Extensions (Ctrl+Shift+X)',
      'Search for Cortex',
      'Click Install',
    ],
    installFromVsix: 'From VSIX',
    installFirstRun: 'First Run',
    installFirstRunSteps: [
      { before: 'Open the Cortex sidebar (click the lightning icon)' },
      { before: 'Click ', strong: 'Open OpenCode', after: ' to connect your AI provider' },
      { before: 'Select a provider and authenticate' },
      { before: 'Start chatting!' },
    ],
    installRequirements: 'Requirements',
    installReqItems: [
      'VS Code 1.85+',
      'An AI provider API key (OpenAI, Anthropic, etc.)',
    ],

    configMetaTitle: 'Configuration — Cortex',
    configTitle: 'Configuration',
    configSettings: 'Settings',
    configSettingsIntro: 'Cortex reads its configuration from config.json in your workspace root.',
    configTableHeaders: ['Setting', 'Default', 'Description'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: 'Default agent mode: plan, build, or ask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'Path to the OpenCode binary' },
      { setting: 'opencodePort', default: '4096', desc: 'Port for the OpenCode server' },
    ],
    configProviders: 'Providers',
    configProvidersIntro: 'Cortex connects to AI providers through OpenCode. Supported providers:',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o, GPT-4.1, o3, etc.' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4, Opus 4, etc.' },
      { name: 'Google', desc: 'Gemini 2.5 Pro, Flash, etc.' },
      { name: 'xAI', desc: 'Grok models' },
      { name: 'OpenRouter', desc: '200+ models via proxy' },
    ],
    configContext: 'Context Sources',
    configContextIntro: 'Cortex automatically gathers context from:',
    configContextItems: [
      { name: 'Active file', desc: 'the file you\'re editing' },
      { name: 'Selection', desc: 'highlighted text' },
      { name: 'Lexical search', desc: 'keyword matching across the project' },
      { name: 'Semantic search', desc: 'MiniLM embeddings for related code' },
      { name: 'Rules', desc: '.cortex/rules files' },
    ],

    archMetaTitle: 'Architecture — Cortex',
    archTitle: 'Architecture',
    archHowTitle: 'How Cortex Works',
    archHowBefore: 'Cortex is a VS Code extension that connects to ',
    archHowAfter: ', an AI coding agent running as a local server. The extension provides a chat sidebar, inline code suggestions, and tool-based workflows.',
    archComponents: 'Components',
    archComponentItems: [
      { name: 'SidebarProvider', desc: 'manages the chat panel lifecycle, message routing, and plan/build modes' },
      { name: 'OpenCode Client', desc: 'HTTP client to communicate with the OpenCode server' },
      { name: 'Context Service', desc: 'gathers relevant code context via lexical + semantic search' },
      { name: 'Inline Completion', desc: 'provides ghost-text suggestions in the editor' },
      { name: 'Plan Store', desc: 'manages saved plans with checklists for the Plan→Build workflow' },
    ],
    archWorkflow: 'Plan → Build Workflow',
    archWorkflowSteps: [
      { name: 'Plan mode', desc: 'Cortex analyzes your request and creates a structured plan with checklist' },
      { name: 'Approval', desc: 'You review and approve the plan' },
      { name: 'Build mode', desc: 'Cortex implements changes step by step, updating the checklist' },
    ],
  },

  es: {
    docsMetaTitle: 'Docs — Cortex',
    docsTitle: 'Documentación',
    docsSubtitle: 'Todo lo que necesitas para empezar con Cortex.',
    docsCards: [
      { title: 'Instalación', desc: 'Cómo instalar y configurar Cortex en VS Code.', path: 'docs/install/' },
      { title: 'Configuración', desc: 'Ajustes, proveedores y opciones de personalización.', path: 'docs/config/' },
      { title: 'Arquitectura', desc: 'Cómo funciona Cortex por dentro.', path: 'docs/architecture/' },
    ],

    installMetaTitle: 'Instalación — Cortex',
    installTitle: 'Instalación',
    installFromMarketplace: 'Desde Marketplace',
    installMarketplaceSteps: [
      'Abre VS Code',
      'Ve a Extensiones (Ctrl+Shift+X)',
      'Busca Cortex',
      'Haz clic en Instalar',
    ],
    installFromVsix: 'Desde VSIX',
    installFirstRun: 'Primer uso',
    installFirstRunSteps: [
      { before: 'Abre el sidebar de Cortex (icono del rayo)' },
      { before: 'Haz clic en ', strong: 'Abrir OpenCode', after: ' para conectar tu proveedor de IA' },
      { before: 'Selecciona un proveedor y autentícate' },
      { before: '¡Empieza a chatear!' },
    ],
    installRequirements: 'Requisitos',
    installReqItems: [
      'VS Code 1.85+',
      'Una API key de un proveedor de IA (OpenAI, Anthropic, etc.)',
    ],

    configMetaTitle: 'Configuración — Cortex',
    configTitle: 'Configuración',
    configSettings: 'Ajustes',
    configSettingsIntro: 'Cortex lee su configuración desde config.json en la raíz del workspace.',
    configTableHeaders: ['Ajuste', 'Por defecto', 'Descripción'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: 'Modo de agente por defecto: plan, build o ask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'Ruta al binario de OpenCode' },
      { setting: 'opencodePort', default: '4096', desc: 'Puerto del servidor OpenCode' },
    ],
    configProviders: 'Proveedores',
    configProvidersIntro: 'Cortex se conecta a proveedores de IA a través de OpenCode. Proveedores soportados:',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o, GPT-4.1, o3, etc.' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4, Opus 4, etc.' },
      { name: 'Google', desc: 'Gemini 2.5 Pro, Flash, etc.' },
      { name: 'xAI', desc: 'Modelos Grok' },
      { name: 'OpenRouter', desc: 'Más de 200 modelos vía proxy' },
    ],
    configContext: 'Fuentes de contexto',
    configContextIntro: 'Cortex recoge contexto automáticamente de:',
    configContextItems: [
      { name: 'Archivo activo', desc: 'el archivo que estás editando' },
      { name: 'Selección', desc: 'texto resaltado' },
      { name: 'Búsqueda léxica', desc: 'coincidencias por palabras clave en el proyecto' },
      { name: 'Búsqueda semántica', desc: 'embeddings MiniLM para código relacionado' },
      { name: 'Rules', desc: 'archivos en .cortex/rules' },
    ],

    archMetaTitle: 'Arquitectura — Cortex',
    archTitle: 'Arquitectura',
    archHowTitle: 'Cómo funciona Cortex',
    archHowBefore: 'Cortex es una extensión de VS Code que se conecta a ',
    archHowAfter: ', un agente de coding con IA que corre como servidor local. La extensión ofrece un chat lateral, sugerencias inline y workflows basados en tools.',
    archComponents: 'Componentes',
    archComponentItems: [
      { name: 'SidebarProvider', desc: 'gestiona el ciclo de vida del panel de chat, el enrutado de mensajes y los modos plan/build' },
      { name: 'OpenCode Client', desc: 'cliente HTTP para hablar con el servidor OpenCode' },
      { name: 'Context Service', desc: 'obtiene contexto relevante vía búsqueda léxica + semántica' },
      { name: 'Inline Completion', desc: 'proporciona sugerencias ghost-text en el editor' },
      { name: 'Plan Store', desc: 'gestiona planes guardados con checklists para el workflow Plan→Build' },
    ],
    archWorkflow: 'Workflow Plan → Build',
    archWorkflowSteps: [
      { name: 'Modo Plan', desc: 'Cortex analiza tu petición y crea un plan estructurado con checklist' },
      { name: 'Aprobación', desc: 'Revisas y apruebas el plan' },
      { name: 'Modo Build', desc: 'Cortex implementa los cambios paso a paso, actualizando el checklist' },
    ],
  },

  pt: {
    docsMetaTitle: 'Docs — Cortex',
    docsTitle: 'Documentação',
    docsSubtitle: 'Tudo o que você precisa para começar com o Cortex.',
    docsCards: [
      { title: 'Instalação', desc: 'Como instalar e configurar o Cortex no VS Code.', path: 'docs/install/' },
      { title: 'Configuração', desc: 'Ajustes, provedores e opções de personalização.', path: 'docs/config/' },
      { title: 'Arquitetura', desc: 'Como o Cortex funciona por baixo dos panos.', path: 'docs/architecture/' },
    ],

    installMetaTitle: 'Instalação — Cortex',
    installTitle: 'Instalação',
    installFromMarketplace: 'Da Marketplace',
    installMarketplaceSteps: [
      'Abra o VS Code',
      'Vá em Extensões (Ctrl+Shift+X)',
      'Pesquise por Cortex',
      'Clique em Instalar',
    ],
    installFromVsix: 'Do VSIX',
    installFirstRun: 'Primeira execução',
    installFirstRunSteps: [
      { before: 'Abra a sidebar do Cortex (ícone do raio)' },
      { before: 'Clique em ', strong: 'Abrir OpenCode', after: ' para conectar seu provedor de IA' },
      { before: 'Selecione um provedor e autentique-se' },
      { before: 'Comece a conversar!' },
    ],
    installRequirements: 'Requisitos',
    installReqItems: [
      'VS Code 1.85+',
      'Uma API key de um provedor de IA (OpenAI, Anthropic, etc.)',
    ],

    configMetaTitle: 'Configuração — Cortex',
    configTitle: 'Configuração',
    configSettings: 'Ajustes',
    configSettingsIntro: 'O Cortex lê a configuração de config.json na raiz do workspace.',
    configTableHeaders: ['Ajuste', 'Padrão', 'Descrição'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: 'Modo de agente padrão: plan, build ou ask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'Caminho para o binário OpenCode' },
      { setting: 'opencodePort', default: '4096', desc: 'Porta do servidor OpenCode' },
    ],
    configProviders: 'Provedores',
    configProvidersIntro: 'O Cortex conecta-se a provedores de IA via OpenCode. Provedores suportados:',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o, GPT-4.1, o3, etc.' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4, Opus 4, etc.' },
      { name: 'Google', desc: 'Gemini 2.5 Pro, Flash, etc.' },
      { name: 'xAI', desc: 'Modelos Grok' },
      { name: 'OpenRouter', desc: 'Mais de 200 modelos via proxy' },
    ],
    configContext: 'Fontes de contexto',
    configContextIntro: 'O Cortex coleta contexto automaticamente de:',
    configContextItems: [
      { name: 'Arquivo ativo', desc: 'o arquivo que você está editando' },
      { name: 'Seleção', desc: 'texto destacado' },
      { name: 'Busca léxica', desc: 'correspondência por palavras-chave no projeto' },
      { name: 'Busca semântica', desc: 'embeddings MiniLM para código relacionado' },
      { name: 'Rules', desc: 'arquivos em .cortex/rules' },
    ],

    archMetaTitle: 'Arquitetura — Cortex',
    archTitle: 'Arquitetura',
    archHowTitle: 'Como o Cortex funciona',
    archHowBefore: 'O Cortex é uma extensão do VS Code que se conecta ao ',
    archHowAfter: ', um agente de coding com IA que roda como servidor local. A extensão oferece chat lateral, sugestões inline e workflows baseados em tools.',
    archComponents: 'Componentes',
    archComponentItems: [
      { name: 'SidebarProvider', desc: 'gerencia o ciclo de vida do painel de chat, roteamento de mensagens e modos plan/build' },
      { name: 'OpenCode Client', desc: 'cliente HTTP para comunicar com o servidor OpenCode' },
      { name: 'Context Service', desc: 'obtém contexto relevante via busca léxica + semântica' },
      { name: 'Inline Completion', desc: 'fornece sugestões ghost-text no editor' },
      { name: 'Plan Store', desc: 'gerencia planos salvos com checklists para o workflow Plan→Build' },
    ],
    archWorkflow: 'Workflow Plan → Build',
    archWorkflowSteps: [
      { name: 'Modo Plan', desc: 'O Cortex analisa seu pedido e cria um plano estruturado com checklist' },
      { name: 'Aprovação', desc: 'Você revisa e aprova o plano' },
      { name: 'Modo Build', desc: 'O Cortex implementa as mudanças passo a passo, atualizando o checklist' },
    ],
  },

  fr: {
    docsMetaTitle: 'Docs — Cortex',
    docsTitle: 'Documentation',
    docsSubtitle: 'Tout ce qu\'il faut pour démarrer avec Cortex.',
    docsCards: [
      { title: 'Installation', desc: 'Comment installer et configurer Cortex dans VS Code.', path: 'docs/install/' },
      { title: 'Configuration', desc: 'Réglages, fournisseurs et options de personnalisation.', path: 'docs/config/' },
      { title: 'Architecture', desc: 'Comment Cortex fonctionne en interne.', path: 'docs/architecture/' },
    ],

    installMetaTitle: 'Installation — Cortex',
    installTitle: 'Installation',
    installFromMarketplace: 'Depuis la Marketplace',
    installMarketplaceSteps: [
      'Ouvrez VS Code',
      'Allez dans Extensions (Ctrl+Shift+X)',
      'Recherchez Cortex',
      'Cliquez sur Installer',
    ],
    installFromVsix: 'Depuis un VSIX',
    installFirstRun: 'Premier lancement',
    installFirstRunSteps: [
      { before: 'Ouvrez la barre latérale Cortex (icône éclair)' },
      { before: 'Cliquez sur ', strong: 'Ouvrir OpenCode', after: ' pour connecter votre fournisseur d\'IA' },
      { before: 'Sélectionnez un fournisseur et authentifiez-vous' },
      { before: 'Commencez à discuter !' },
    ],
    installRequirements: 'Prérequis',
    installReqItems: [
      'VS Code 1.85+',
      'Une clé API d\'un fournisseur d\'IA (OpenAI, Anthropic, etc.)',
    ],

    configMetaTitle: 'Configuration — Cortex',
    configTitle: 'Configuration',
    configSettings: 'Réglages',
    configSettingsIntro: 'Cortex lit sa configuration depuis config.json à la racine du workspace.',
    configTableHeaders: ['Réglage', 'Défaut', 'Description'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: 'Mode agent par défaut : plan, build ou ask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'Chemin vers le binaire OpenCode' },
      { setting: 'opencodePort', default: '4096', desc: 'Port du serveur OpenCode' },
    ],
    configProviders: 'Fournisseurs',
    configProvidersIntro: 'Cortex se connecte aux fournisseurs d\'IA via OpenCode. Fournisseurs pris en charge :',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o, GPT-4.1, o3, etc.' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4, Opus 4, etc.' },
      { name: 'Google', desc: 'Gemini 2.5 Pro, Flash, etc.' },
      { name: 'xAI', desc: 'Modèles Grok' },
      { name: 'OpenRouter', desc: '200+ modèles via proxy' },
    ],
    configContext: 'Sources de contexte',
    configContextIntro: 'Cortex collecte automatiquement le contexte depuis :',
    configContextItems: [
      { name: 'Fichier actif', desc: 'le fichier que vous éditez' },
      { name: 'Sélection', desc: 'texte surligné' },
      { name: 'Recherche lexicale', desc: 'correspondance par mots-clés dans le projet' },
      { name: 'Recherche sémantique', desc: 'embeddings MiniLM pour le code lié' },
      { name: 'Rules', desc: 'fichiers .cortex/rules' },
    ],

    archMetaTitle: 'Architecture — Cortex',
    archTitle: 'Architecture',
    archHowTitle: 'Comment fonctionne Cortex',
    archHowBefore: 'Cortex est une extension VS Code qui se connecte à ',
    archHowAfter: ', un agent de coding IA exécuté en serveur local. L\'extension fournit un chat latéral, des suggestions inline et des workflows basés sur des tools.',
    archComponents: 'Composants',
    archComponentItems: [
      { name: 'SidebarProvider', desc: 'gère le cycle de vie du panneau de chat, le routage des messages et les modes plan/build' },
      { name: 'OpenCode Client', desc: 'client HTTP pour communiquer avec le serveur OpenCode' },
      { name: 'Context Service', desc: 'récupère le contexte pertinent via recherche lexicale + sémantique' },
      { name: 'Inline Completion', desc: 'fournit des suggestions ghost-text dans l\'éditeur' },
      { name: 'Plan Store', desc: 'gère les plans sauvegardés avec checklists pour le workflow Plan→Build' },
    ],
    archWorkflow: 'Workflow Plan → Build',
    archWorkflowSteps: [
      { name: 'Mode Plan', desc: 'Cortex analyse votre demande et crée un plan structuré avec checklist' },
      { name: 'Approbation', desc: 'Vous révisez et approuvez le plan' },
      { name: 'Mode Build', desc: 'Cortex implémente les changements étape par étape, en mettant à jour la checklist' },
    ],
  },

  de: {
    docsMetaTitle: 'Docs — Cortex',
    docsTitle: 'Dokumentation',
    docsSubtitle: 'Alles, was Sie brauchen, um mit Cortex zu starten.',
    docsCards: [
      { title: 'Installation', desc: 'So installieren und richten Sie Cortex in VS Code ein.', path: 'docs/install/' },
      { title: 'Konfiguration', desc: 'Einstellungen, Anbieter und Anpassungsoptionen.', path: 'docs/config/' },
      { title: 'Architektur', desc: 'Wie Cortex unter der Haube funktioniert.', path: 'docs/architecture/' },
    ],

    installMetaTitle: 'Installation — Cortex',
    installTitle: 'Installation',
    installFromMarketplace: 'Vom Marketplace',
    installMarketplaceSteps: [
      'Öffnen Sie VS Code',
      'Gehen Sie zu Erweiterungen (Ctrl+Shift+X)',
      'Suchen Sie nach Cortex',
      'Klicken Sie auf Installieren',
    ],
    installFromVsix: 'Aus VSIX',
    installFirstRun: 'Erster Start',
    installFirstRunSteps: [
      { before: 'Öffnen Sie die Cortex-Sidebar (Blitz-Symbol)' },
      { before: 'Klicken Sie auf ', strong: 'OpenCode öffnen', after: ', um Ihren KI-Anbieter zu verbinden' },
      { before: 'Wählen Sie einen Anbieter und authentifizieren Sie sich' },
      { before: 'Starten Sie den Chat!' },
    ],
    installRequirements: 'Voraussetzungen',
    installReqItems: [
      'VS Code 1.85+',
      'Ein API-Key eines KI-Anbieters (OpenAI, Anthropic, etc.)',
    ],

    configMetaTitle: 'Konfiguration — Cortex',
    configTitle: 'Konfiguration',
    configSettings: 'Einstellungen',
    configSettingsIntro: 'Cortex liest seine Konfiguration aus config.json im Workspace-Root.',
    configTableHeaders: ['Einstellung', 'Standard', 'Beschreibung'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: 'Standard-Agent-Modus: plan, build oder ask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'Pfad zur OpenCode-Binary' },
      { setting: 'opencodePort', default: '4096', desc: 'Port für den OpenCode-Server' },
    ],
    configProviders: 'Anbieter',
    configProvidersIntro: 'Cortex verbindet sich über OpenCode mit KI-Anbietern. Unterstützte Anbieter:',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o, GPT-4.1, o3, etc.' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4, Opus 4, etc.' },
      { name: 'Google', desc: 'Gemini 2.5 Pro, Flash, etc.' },
      { name: 'xAI', desc: 'Grok-Modelle' },
      { name: 'OpenRouter', desc: '200+ Modelle über Proxy' },
    ],
    configContext: 'Kontextquellen',
    configContextIntro: 'Cortex sammelt Kontext automatisch aus:',
    configContextItems: [
      { name: 'Aktive Datei', desc: 'die Datei, die Sie bearbeiten' },
      { name: 'Auswahl', desc: 'hervorgehobener Text' },
      { name: 'Lexikalische Suche', desc: 'Keyword-Matching im Projekt' },
      { name: 'Semantische Suche', desc: 'MiniLM-Embeddings für verwandten Code' },
      { name: 'Rules', desc: '.cortex/rules-Dateien' },
    ],

    archMetaTitle: 'Architektur — Cortex',
    archTitle: 'Architektur',
    archHowTitle: 'So funktioniert Cortex',
    archHowBefore: 'Cortex ist eine VS Code-Erweiterung, die sich mit ',
    archHowAfter: ' verbindet — einem KI-Coding-Agenten als lokaler Server. Die Erweiterung bietet eine Chat-Sidebar, Inline-Vorschläge und toolbasierte Workflows.',
    archComponents: 'Komponenten',
    archComponentItems: [
      { name: 'SidebarProvider', desc: 'verwaltet den Lebenszyklus des Chat-Panels, Message-Routing und Plan/Build-Modi' },
      { name: 'OpenCode Client', desc: 'HTTP-Client zur Kommunikation mit dem OpenCode-Server' },
      { name: 'Context Service', desc: 'sammelt relevanten Code-Kontext über lexikalische + semantische Suche' },
      { name: 'Inline Completion', desc: 'liefert Ghost-Text-Vorschläge im Editor' },
      { name: 'Plan Store', desc: 'verwaltet gespeicherte Pläne mit Checklisten für den Plan→Build-Workflow' },
    ],
    archWorkflow: 'Plan → Build Workflow',
    archWorkflowSteps: [
      { name: 'Plan-Modus', desc: 'Cortex analysiert Ihre Anfrage und erstellt einen strukturierten Plan mit Checklist' },
      { name: 'Freigabe', desc: 'Sie prüfen und genehmigen den Plan' },
      { name: 'Build-Modus', desc: 'Cortex setzt Änderungen Schritt für Schritt um und aktualisiert die Checklist' },
    ],
  },

  ja: {
    docsMetaTitle: 'ドキュメント — Cortex',
    docsTitle: 'ドキュメント',
    docsSubtitle: 'Cortexを始めるために必要なすべて。',
    docsCards: [
      { title: 'インストール', desc: 'VS CodeでCortexをインストール・設定する方法。', path: 'docs/install/' },
      { title: '設定', desc: '設定、プロバイダー、カスタマイズオプション。', path: 'docs/config/' },
      { title: 'アーキテクチャ', desc: 'Cortexの内部の仕組み。', path: 'docs/architecture/' },
    ],

    installMetaTitle: 'インストール — Cortex',
    installTitle: 'インストール',
    installFromMarketplace: 'Marketplaceから',
    installMarketplaceSteps: [
      'VS Codeを開く',
      '拡張機能へ移動（Ctrl+Shift+X）',
      'Cortexを検索',
      'インストールをクリック',
    ],
    installFromVsix: 'VSIXから',
    installFirstRun: '初回起動',
    installFirstRunSteps: [
      { before: 'Cortexサイドバーを開く（稲妻アイコン）' },
      { before: '', strong: 'Open OpenCode', after: 'をクリックしてAIプロバイダーを接続' },
      { before: 'プロバイダーを選択して認証' },
      { before: 'チャットを開始！' },
    ],
    installRequirements: '要件',
    installReqItems: [
      'VS Code 1.85+',
      'AIプロバイダーのAPIキー（OpenAI、Anthropicなど）',
    ],

    configMetaTitle: '設定 — Cortex',
    configTitle: '設定',
    configSettings: '設定項目',
    configSettingsIntro: 'Cortexはワークスペースルートのconfig.jsonから設定を読み取ります。',
    configTableHeaders: ['設定', 'デフォルト', '説明'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: 'デフォルトのエージェントモード：plan、build、またはask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'OpenCodeバイナリへのパス' },
      { setting: 'opencodePort', default: '4096', desc: 'OpenCodeサーバーのポート' },
    ],
    configProviders: 'プロバイダー',
    configProvidersIntro: 'CortexはOpenCode経由でAIプロバイダーに接続します。対応プロバイダー：',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o、GPT-4.1、o3など' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4、Opus 4など' },
      { name: 'Google', desc: 'Gemini 2.5 Pro、Flashなど' },
      { name: 'xAI', desc: 'Grokモデル' },
      { name: 'OpenRouter', desc: 'プロキシ経由で200以上のモデル' },
    ],
    configContext: 'コンテキストソース',
    configContextIntro: 'Cortexは次から自動的にコンテキストを収集します：',
    configContextItems: [
      { name: 'アクティブファイル', desc: '編集中のファイル' },
      { name: '選択範囲', desc: 'ハイライトされたテキスト' },
      { name: 'レキシカル検索', desc: 'プロジェクト全体のキーワードマッチ' },
      { name: 'セマンティック検索', desc: '関連コード向けMiniLM埋め込み' },
      { name: 'Rules', desc: '.cortex/rulesファイル' },
    ],

    archMetaTitle: 'アーキテクチャ — Cortex',
    archTitle: 'アーキテクチャ',
    archHowTitle: 'Cortexの仕組み',
    archHowBefore: 'Cortexは、ローカルサーバーとして動作するAIコーディングエージェント',
    archHowAfter: 'に接続するVS Code拡張機能です。チャットサイドバー、インライン提案、ツールベースのワークフローを提供します。',
    archComponents: 'コンポーネント',
    archComponentItems: [
      { name: 'SidebarProvider', desc: 'チャットパネルのライフサイクル、メッセージルーティング、plan/buildモードを管理' },
      { name: 'OpenCode Client', desc: 'OpenCodeサーバーと通信するHTTPクライアント' },
      { name: 'Context Service', desc: 'レキシカル＋セマンティック検索で関連コードコンテキストを収集' },
      { name: 'Inline Completion', desc: 'エディタ内のゴーストテキスト提案を提供' },
      { name: 'Plan Store', desc: 'Plan→Buildワークフロー用のチェックリスト付き保存プランを管理' },
    ],
    archWorkflow: 'Plan → Build ワークフロー',
    archWorkflowSteps: [
      { name: 'Planモード', desc: 'Cortexがリクエストを分析し、チェックリスト付きの構造化プランを作成' },
      { name: '承認', desc: 'プランを確認して承認' },
      { name: 'Buildモード', desc: 'Cortexがチェックリストを更新しながら変更を段階的に実装' },
    ],
  },

  zh: {
    docsMetaTitle: '文档 — Cortex',
    docsTitle: '文档',
    docsSubtitle: '开始使用 Cortex 所需的一切。',
    docsCards: [
      { title: '安装', desc: '如何在 VS Code 中安装和设置 Cortex。', path: 'docs/install/' },
      { title: '配置', desc: '设置、提供商和自定义选项。', path: 'docs/config/' },
      { title: '架构', desc: 'Cortex 的内部工作原理。', path: 'docs/architecture/' },
    ],

    installMetaTitle: '安装 — Cortex',
    installTitle: '安装',
    installFromMarketplace: '从 Marketplace',
    installMarketplaceSteps: [
      '打开 VS Code',
      '转到扩展（Ctrl+Shift+X）',
      '搜索 Cortex',
      '点击安装',
    ],
    installFromVsix: '从 VSIX',
    installFirstRun: '首次运行',
    installFirstRunSteps: [
      { before: '打开 Cortex 侧边栏（闪电图标）' },
      { before: '点击', strong: '打开 OpenCode', after: '以连接你的 AI 提供商' },
      { before: '选择提供商并完成身份验证' },
      { before: '开始聊天！' },
    ],
    installRequirements: '要求',
    installReqItems: [
      'VS Code 1.85+',
      'AI 提供商 API 密钥（OpenAI、Anthropic 等）',
    ],

    configMetaTitle: '配置 — Cortex',
    configTitle: '配置',
    configSettings: '设置',
    configSettingsIntro: 'Cortex 从工作区根目录的 config.json 读取配置。',
    configTableHeaders: ['设置', '默认值', '说明'],
    configRows: [
      { setting: 'agent', default: '"build"', desc: '默认代理模式：plan、build 或 ask' },
      { setting: 'opencodeBinary', default: '"opencode"', desc: 'OpenCode 二进制文件路径' },
      { setting: 'opencodePort', default: '4096', desc: 'OpenCode 服务器端口' },
    ],
    configProviders: '提供商',
    configProvidersIntro: 'Cortex 通过 OpenCode 连接 AI 提供商。支持的提供商：',
    configProviderItems: [
      { name: 'OpenAI', desc: 'GPT-4o、GPT-4.1、o3 等' },
      { name: 'Anthropic', desc: 'Claude Sonnet 4、Opus 4 等' },
      { name: 'Google', desc: 'Gemini 2.5 Pro、Flash 等' },
      { name: 'xAI', desc: 'Grok 模型' },
      { name: 'OpenRouter', desc: '通过代理访问 200+ 模型' },
    ],
    configContext: '上下文来源',
    configContextIntro: 'Cortex 自动从以下来源收集上下文：',
    configContextItems: [
      { name: '活动文件', desc: '你正在编辑的文件' },
      { name: '选区', desc: '高亮文本' },
      { name: '词法搜索', desc: '项目中的关键词匹配' },
      { name: '语义搜索', desc: '用于相关代码的 MiniLM 嵌入' },
      { name: 'Rules', desc: '.cortex/rules 文件' },
    ],

    archMetaTitle: '架构 — Cortex',
    archTitle: '架构',
    archHowTitle: 'Cortex 如何工作',
    archHowBefore: 'Cortex 是一个连接 ',
    archHowAfter: ' 的 VS Code 扩展。OpenCode 是作为本地服务器运行的 AI 编程代理。扩展提供聊天侧边栏、内联代码建议和基于工具的工作流。',
    archComponents: '组件',
    archComponentItems: [
      { name: 'SidebarProvider', desc: '管理聊天面板生命周期、消息路由和 plan/build 模式' },
      { name: 'OpenCode Client', desc: '与 OpenCode 服务器通信的 HTTP 客户端' },
      { name: 'Context Service', desc: '通过词法 + 语义搜索收集相关代码上下文' },
      { name: 'Inline Completion', desc: '在编辑器中提供幽灵文本建议' },
      { name: 'Plan Store', desc: '管理带清单的已保存计划，用于 Plan→Build 工作流' },
    ],
    archWorkflow: 'Plan → Build 工作流',
    archWorkflowSteps: [
      { name: 'Plan 模式', desc: 'Cortex 分析你的请求并创建带清单的结构化计划' },
      { name: '批准', desc: '你审阅并批准计划' },
      { name: 'Build 模式', desc: 'Cortex 逐步实现更改并更新清单' },
    ],
  },
};

export function getDocs(lang: Lang): DocsTranslations {
  return docsTranslations[lang] ?? docsTranslations.en;
}
