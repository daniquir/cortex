export type Lang = 'en' | 'es' | 'pt' | 'fr' | 'de' | 'ja' | 'zh';

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
];

export const defaultLang: Lang = 'en';

interface Translations {
  // Layout
  lang: string;
  metaDesc: string;
  navDocs: string;
  navChangelog: string;
  // Hero
  badge: string;
  tagline: string;
  ctaInstall: string;
  ctaDocs: string;
  sub: string;
  // Features
  featuresTitle: string;
  features: { title: string; desc: string }[];
  // WhyCortex
  compareTitle: string;
  compareSubtitle: string;
  compareNote: string;
  compareRows: { feature: string; cortex: string; cursor: string; windsurf: string }[];
  // Install
  installTitle: string;
  installSteps: { strong: string; p: string }[];
  // Footer
  footer: string;
}

const translations: Record<Lang, Translations> = {
  en: {
    lang: 'en',
    metaDesc: 'Cortex — Agentic AI coding in VS Code',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Built from scratch for VS Code',
    tagline: 'Agentic AI coding right in VS Code. The same assisted programming experience as Cursor and Windsurf — but without switching editors, and with the freedom to choose your AI provider.',
    ctaInstall: 'Install from Marketplace',
    ctaDocs: 'Read the docs',
    sub: 'Works with OpenAI, Anthropic, Google, xAI, OpenRouter and more. You control which model touches your code.',
    featuresTitle: 'What makes Cortex different?',
    features: [
      { title: 'Complete agentic workflow', desc: 'Plan → Build: analyzes your code, proposes a plan with checklist, and executes step by step. The same flow as Cursor Agent, now in your VS Code.' },
      { title: 'Multi-provider, multi-model', desc: 'Connect OpenAI, Anthropic, Google, xAI, OpenRouter and more. Switch models on the fly with no lock-in. You decide which AI touches your code.' },
      { title: 'Smart context', desc: 'Lexical + semantic search over your codebase. The agent sees exactly what matters — it doesn\'t scan the entire repo.' },
      { title: 'Inline diffs', desc: 'Accept or reject every AI suggestion directly in the editor with diff preview. Full control over what changes.' },
      { title: 'Full chat sidebar', desc: 'Conversation history, tool usage timeline, markdown streaming. Everything you need for a continuous flow.' },
      { title: 'Built on OpenCode', desc: 'Built from scratch on OpenCode, the open-source coding agent backend. Extensible, transparent, yours.' },
    ],
    compareTitle: 'Cortex vs the rest',
    compareSubtitle: 'Same agentic power, more freedom.',
    compareNote: 'Cortex is a VS Code extension, not a fork. No need to migrate your editor or your settings. Built from scratch on OpenCode to replicate the Cursor/Windsurf agentic flow with an open stack.',
    compareRows: [
      { feature: 'Editor', cortex: 'Your current VS Code', cursor: 'Own editor (VS Code fork)', windsurf: 'Own editor (VS Code fork)' },
      { feature: 'AI Provider', cortex: 'Multi-provider (you choose)', cursor: 'OpenAI (mainly)', windsurf: 'Multi-provider' },
      { feature: 'Open source', cortex: 'Yes — OpenCode backend', cursor: 'No', windsurf: 'No' },
      { feature: 'License cost', cortex: 'Free (you pay your API key)', cursor: 'Limited free + $20/mo Pro', windsurf: 'Limited free + $15/mo Pro' },
      { feature: 'Agentic workflow', cortex: 'Plan → Build with checklists', cursor: 'Agent mode with tools', windsurf: 'Cascade with tools' },
      { feature: 'Code control', cortex: 'Inline diff, accept/reject', cursor: 'Inline diff, accept/reject', windsurf: 'Inline diff, accept/reject' },
      { feature: 'Project context', cortex: 'Lexical + semantic search', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Get started in 3 steps',
    installSteps: [
      { strong: 'Install the extension', p: 'Search "Cortex" in VS Code Extensions, or install from the Marketplace.' },
      { strong: 'Connect your AI provider', p: 'Open the Cortex sidebar → "Open OpenCode" → connect your provider (OpenAI, Anthropic, Google, etc.) with your API key.' },
      { strong: 'Start coding with AI', p: 'Ask questions, generate code, refactor — Cortex analyzes, plans, and executes. You approve every change.' },
    ],
    footer: 'Built with ❤️ by',
  },
  es: {
    lang: 'es',
    metaDesc: 'Cortex — Agentic AI coding en VS Code',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Desarrollado desde cero para VS Code',
    tagline: 'Agentic AI coding directo en VS Code. Misma experiencia de programación asistida que Cursor y Windsurf, pero sin cambiar de editor — y con la libertad de elegir tu proveedor de IA.',
    ctaInstall: 'Instalar desde Marketplace',
    ctaDocs: 'Leer la documentación',
    sub: 'Funciona con OpenAI, Anthropic, Google, xAI, OpenRouter y más. Tú controlas qué modelo usa tu código.',
    featuresTitle: '¿Qué hace a Cortex diferente?',
    features: [
      { title: 'Agentic workflow completo', desc: 'Plan → Build: analiza tu código, propone un plan con checklist, y ejecuta paso a paso. El mismo flow de Cursor Agent, ahora en tu VS Code.' },
      { title: 'Multi-proveedor, multi-modelo', desc: 'Conecta OpenAI, Anthropic, Google, xAI, OpenRouter y más. Cambia de modelo al vuelo sin.lock-in. Tú decides qué IA toca tu código.' },
      { title: 'Contexto inteligente', desc: 'Búsqueda léxica + semántica sobre tu codebase. El agente ve exactamente lo que importa, no escanea el repo entero.' },
      { title: 'Ediciones inline con diff', desc: 'Acepta o rechaza cada sugerencia de IA directamente en el editor con preview de diffs. Control total sobre lo que cambia.' },
      { title: 'Chat lateral completo', desc: 'Historial de conversación, timeline de uso de herramientas, streaming de markdown. Todo lo que necesitas para flujo continuo.' },
      { title: 'Built on OpenCode', desc: 'Desarrollado desde cero sobre OpenCode, el backend open-source de agentes de código. Extensible, transparente, tuyo.' },
    ],
    compareTitle: 'Cortex vs los demás',
    compareSubtitle: 'Misma potencia agentic, más libertad.',
    compareNote: 'Cortex es una extensión de VS Code, no un fork. No necesitas migrar tu editor ni tu configuración. Construido desde cero sobre OpenCode para replicar el flow agentico de Cursor/Windsurf con stack abierto.',
    compareRows: [
      { feature: 'Editor', cortex: 'Tu VS Code actual', cursor: 'Editor propio (fork de VS Code)', windsurf: 'Editor propio (fork de VS Code)' },
      { feature: 'Proveedor de IA', cortex: 'Multi-proveedor (tú eliges)', cursor: 'OpenAI (principalmente)', windsurf: 'Multi-proveedor' },
      { feature: 'Open source', cortex: 'Sí — backend OpenCode', cursor: 'No', windsurf: 'No' },
      { feature: 'Costo de licencia', cortex: 'Gratis (pagas tu API key)', cursor: 'Plan free limitado + $20/mes Pro', windsurf: 'Plan free limitado + $15/mes Pro' },
      { feature: 'Agentic workflow', cortex: 'Plan → Build con checklists', cursor: 'Agent mode con tools', windsurf: 'Cascade con tools' },
      { feature: 'Control del código', cortex: 'Diff inline, aceptar/rechazar', cursor: 'Diff inline, aceptar/rechazar', windsurf: 'Diff inline, aceptar/rechazar' },
      { feature: 'Contexto del proyecto', cortex: 'Búsqueda léxica + semántica', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Empieza en 3 pasos',
    installSteps: [
      { strong: 'Instala la extensión', p: 'Busca "Cortex" en Extensiones de VS Code, o instala desde la Marketplace.' },
      { strong: 'Conecta tu proveedor de IA', p: 'Abre el sidebar de Cortex → "Abrir OpenCode" → conecta tu proveedor (OpenAI, Anthropic, Google, etc.) con tu API key.' },
      { strong: 'Empieza a codear con IA', p: 'Pregunta, genera código, refactorea — Cortex analiza, planifica y ejecuta. Tú apruebas cada cambio.' },
    ],
    footer: 'Built with ❤️ by',
  },
  pt: {
    lang: 'pt',
    metaDesc: 'Cortex — Agentic AI coding no VS Code',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Desenvolvido do zero para VS Code',
    tagline: 'Agentic AI coding direto no VS Code. A mesma experiência de programação assistida do Cursor e Windsurf — mas sem trocar de editor, e com a liberdade de escolher seu provedor de IA.',
    ctaInstall: 'Instalar da Marketplace',
    ctaDocs: 'Ler a documentação',
    sub: 'Funciona com OpenAI, Anthropic, Google, xAI, OpenRouter e mais. Você controla qual modelo toca no seu código.',
    featuresTitle: 'O que torna o Cortex diferente?',
    features: [
      { title: 'Workflow agentic completo', desc: 'Plan → Build: analisa seu código, propõe um plano com checklist e executa passo a passo. O mesmo flow do Cursor Agent, agora no seu VS Code.' },
      { title: 'Multi-provedor, multi-modelo', desc: 'Conecte OpenAI, Anthropic, Google, xAI, OpenRouter e mais. Troque de modelo sem.lock-in. Você decide qual IA toca no seu código.' },
      { title: 'Contexto inteligente', desc: 'Busca léxica + semântica no seu codebase. O agente vê exatamente o que importa — não escaneia o repo inteiro.' },
      { title: 'Diffs inline', desc: 'Aceite ou rejeite cada sugestão de IA diretamente no editor com preview de diffs. Controle total sobre o que muda.' },
      { title: 'Chat lateral completo', desc: 'Histórico de conversas, timeline de uso de ferramentas, streaming de markdown. Tudo que você precisa para fluxo contínuo.' },
      { title: 'Built on OpenCode', desc: 'Desenvolvido do zero sobre OpenCode, o backend open-source de agentes de código. Extensível, transparente, seu.' },
    ],
    compareTitle: 'Cortex vs os demais',
    compareSubtitle: 'Mesma potência agentic, mais liberdade.',
    compareNote: 'O Cortex é uma extensão do VS Code, não um fork. Não precisa migrar seu editor ou configurações. Desenvolvido do zero sobre OpenCode para replicar o flow agentic do Cursor/Windsurf com stack aberta.',
    compareRows: [
      { feature: 'Editor', cortex: 'Seu VS Code atual', cursor: 'Editor próprio (fork do VS Code)', windsurf: 'Editor próprio (fork do VS Code)' },
      { feature: 'Provedor de IA', cortex: 'Multi-provedor (você escolhe)', cursor: 'OpenAI (principalmente)', windsurf: 'Multi-provedor' },
      { feature: 'Open source', cortex: 'Sim — backend OpenCode', cursor: 'Não', windsurf: 'Não' },
      { feature: 'Custo da licença', cortex: 'Grátis (você paga sua API key)', cursor: 'Free limitado + $20/mês Pro', windsurf: 'Free limitado + $15/mês Pro' },
      { feature: 'Workflow agentic', cortex: 'Plan → Build com checklists', cursor: 'Agent mode com tools', windsurf: 'Cascade com tools' },
      { feature: 'Controle do código', cortex: 'Diff inline, aceitar/rejeitar', cursor: 'Diff inline, aceitar/rejeitar', windsurf: 'Diff inline, aceitar/rejeitar' },
      { feature: 'Contexto do projeto', cortex: 'Busca léxica + semântica', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Comece em 3 passos',
    installSteps: [
      { strong: 'Instale a extensão', p: 'Busque "Cortex" nas Extensões do VS Code, ou instale da Marketplace.' },
      { strong: 'Conecte seu provedor de IA', p: 'Abra a sidebar do Cortex → "Abrir OpenCode" → conecte seu provedor (OpenAI, Anthropic, Google, etc.) com sua API key.' },
      { strong: 'Comece a programar com IA', p: 'Pergunte, gere código, refatore — Cortex analisa, planeja e executa. Você aprova cada mudança.' },
    ],
    footer: 'Built with ❤️ by',
  },
  fr: {
    lang: 'fr',
    metaDesc: 'Cortex — Agentic AI coding dans VS Code',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Développé from scratch pour VS Code',
    tagline: 'Agentic AI coding directement dans VS Code. La même expérience de programmation assistée que Cursor et Windsurf — mais sans changer d\'éditeur, et avec la liberté de choisir votre fournisseur d\'IA.',
    ctaInstall: 'Installer depuis la Marketplace',
    ctaDocs: 'Lire la documentation',
    sub: 'Compatible avec OpenAI, Anthropic, Google, xAI, OpenRouter et plus. Vous contrôlez quel modèle touche votre code.',
    featuresTitle: 'Ce qui rend Cortex différent',
    features: [
      { title: 'Workflow agentic complet', desc: 'Plan → Build : analyse votre code, propose un plan avec checklist, et exécute étape par étape. Le même flow que Cursor Agent, maintenant dans votre VS Code.' },
      { title: 'Multi-fournisseur, multi-modèle', desc: 'Connectez OpenAI, Anthropic, Google, xAI, OpenRouter et plus. Changez de modèle sans.lock-in. Vous décidez quelle IA touche votre code.' },
      { title: 'Contexte intelligent', desc: 'Recherche lexicale + sémantique sur votre codebase. L\'agent voit exactement ce qui compte — il ne scanne pas tout le repo.' },
      { title: 'Diffs inline', desc: 'Acceptez ou rejetez chaque suggestion d\'IA directement dans l\'éditeur avec aperçu des diffs. Contrôle total sur ce qui change.' },
      { title: 'Chat latéral complet', desc: 'Historique des conversations, timeline d\'utilisation des outils, streaming markdown. Tout ce dont vous avez besoin pour un flux continu.' },
      { title: 'Built on OpenCode', desc: 'Développé from scratch sur OpenCode, le backend open-source d\'agents de code. Extensible, transparent, à vous.' },
    ],
    compareTitle: 'Cortex vs les autres',
    compareSubtitle: 'Même puissance agentic, plus de liberté.',
    compareNote: 'Cortex est une extension VS Code, pas un fork. Pas besoin de migrer votre éditeur ou vos paramètres. Développé from scratch sur OpenCode pour reproduire le flow agentic de Cursor/Windsurf avec une stack ouverte.',
    compareRows: [
      { feature: 'Éditeur', cortex: 'Votre VS Code actuel', cursor: 'Éditeur propre (fork de VS Code)', windsurf: 'Éditeur propre (fork de VS Code)' },
      { feature: 'Fournisseur d\'IA', cortex: 'Multi-fournisseur (vous choisissez)', cursor: 'OpenAI (principalement)', windsurf: 'Multi-fournisseur' },
      { feature: 'Open source', cortex: 'Oui — backend OpenCode', cursor: 'Non', windsurf: 'Non' },
      { feature: 'Coût de licence', cortex: 'Gratuit (vous payez votre clé API)', cursor: 'Free limité + $20/mois Pro', windsurf: 'Free limité + $15/mois Pro' },
      { feature: 'Workflow agentic', cortex: 'Plan → Build avec checklists', cursor: 'Agent mode avec tools', windsurf: 'Cascade avec tools' },
      { feature: 'Contrôle du code', cortex: 'Diff inline, accepter/rejeter', cursor: 'Diff inline, accepter/rejeter', windsurf: 'Diff inline, accepter/rejeter' },
      { feature: 'Contexte du projet', cortex: 'Recherche lexicale + sémantique', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Commencez en 3 étapes',
    installSteps: [
      { strong: 'Installez l\'extension', p: 'Recherchez "Cortex" dans les extensions VS Code, ou installez depuis la Marketplace.' },
      { strong: 'Connectez votre fournisseur d\'IA', p: 'Ouvrez la barre latérale Cortex → "Ouvrir OpenCode" → connectez votre fournisseur (OpenAI, Anthropic, Google, etc.) avec votre clé API.' },
      { strong: 'Commencez à coder avec l\'IA', p: 'Posez des questions, générez du code, refactorez — Cortex analyse, planifie et exécute. Vous approuvez chaque changement.' },
    ],
    footer: 'Built with ❤️ by',
  },
  de: {
    lang: 'de',
    metaDesc: 'Cortex — Agentic AI Coding in VS Code',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Von Grund auf für VS Code entwickelt',
    tagline: 'Agentic AI Coding direkt in VS Code. Das gleiche assisted Programming-Erlebnis wie Cursor und Windsurf — aber ohne Editor zu wechseln, und mit der Freiheit, Ihren KI-Anbieter zu wählen.',
    ctaInstall: 'Vom Marketplace installieren',
    ctaDocs: 'Dokumentation lesen',
    sub: 'Funktioniert mit OpenAI, Anthropic, Google, xAI, OpenRouter und mehr. Sie kontrollieren, welches Modell Ihren Code berührt.',
    featuresTitle: 'Was Cortex anders macht',
    features: [
      { title: 'Vollständiger Agentic Workflow', desc: 'Plan → Build: Analysiert Ihren Code, schlägt einen Plan mit Checklist vor und führt Schritt für Schritt aus. Der gleiche Flow wie Cursor Agent, jetzt in Ihrem VS Code.' },
      { title: 'Multi-Anbieter, Multi-Modell', desc: 'Verbinden Sie OpenAI, Anthropic, Google, xAI, OpenRouter und mehr. Wechseln Sie ohne Lock-in das Modell. Sie entscheiden, welche KI Ihren Code berührt.' },
      { title: 'Intelligenter Kontext', desc: 'Lexikalische + semantische Suche über Ihre Codebase. Der Agent sieht genau, was wichtig ist — er scannt nicht das gesamte Repo.' },
      { title: 'Inline-Diffs', desc: 'Akzeptieren oder lehnen Sie jeden KI-Vorschlag direkt im Editor mit Diff-Vorschau ab. Volle Kontrolle über Änderungen.' },
      { title: 'Vollständiger Chat-Sidebar', desc: 'Unterhaltungsverlauf, Tool-Nutzungs-Timeline, Markdown-Streaming. Alles für einen kontinuierlichen Flow.' },
      { title: 'Built on OpenCode', desc: 'Von Grund auf auf OpenCode entwickelt, dem Open-Source Coding-Agent-Backend. Erweiterbar, transparent, Ihres.' },
    ],
    compareTitle: 'Cortex vs die anderen',
    compareSubtitle: 'Gleiche Agentic-Leistung, mehr Freiheit.',
    compareNote: 'Cortex ist eine VS Code-Erweiterung, kein Fork. Keine Notwendigkeit, Ihren Editor oder Ihre Einstellungen zu migrieren. Von Grund auf auf OpenCode entwickelt, um den Agentic-Flow von Cursor/Windsurf mit einem offenen Stack zu replizieren.',
    compareRows: [
      { feature: 'Editor', cortex: 'Ihr aktuelles VS Code', cursor: 'Eigener Editor (VS Code Fork)', windsurf: 'Eigener Editor (VS Code Fork)' },
      { feature: 'KI-Anbieter', cortex: 'Multi-Anbieter (Sie wählen)', cursor: 'OpenAI (hauptsächlich)', windsurf: 'Multi-Anbieter' },
      { feature: 'Open Source', cortex: 'Ja — OpenCode Backend', cursor: 'Nein', windsurf: 'Nein' },
      { feature: 'Lizenzkosten', cortex: 'Kostenlos (Sie zahlen Ihren API-Key)', cursor: 'Begrenzt kostenlos + $20/Monat Pro', windsurf: 'Begrenzt kostenlos + $15/Monat Pro' },
      { feature: 'Agentic Workflow', cortex: 'Plan → Build mit Checklisten', cursor: 'Agent Mode mit Tools', windsurf: 'Cascade mit Tools' },
      { feature: 'Code-Kontrolle', cortex: 'Inline-Diff, akzeptieren/ablehnen', cursor: 'Inline-Diff, akzeptieren/ablehnen', windsurf: 'Inline-Diff, akzeptieren/ablehnen' },
      { feature: 'Projektkontext', cortex: 'Lexikalische + semantische Suche', cursor: '@mentions + Codebase-Index', windsurf: '@mentions + Context Flows' },
    ],
    installTitle: 'In 3 Schritten starten',
    installSteps: [
      { strong: 'Erweiterung installieren', p: 'Suchen Sie "Cortex" in den VS Code-Erweiterungen, oder installieren Sie vom Marketplace.' },
      { strong: 'KI-Anbieter verbinden', p: 'Öffnen Sie die Cortex-Sidebar → "Open OpenCode" → verbinden Sie Ihren Anbieter (OpenAI, Anthropic, Google, etc.) mit Ihrem API-Key.' },
      { strong: 'Anfangen mit KI zu coden', p: 'Fragen stellen, Code generieren, refactoren — Cortex analysiert, plant und führt aus. Sie genehmigen jede Änderung.' },
    ],
    footer: 'Built with ❤️ by',
  },
  ja: {
    lang: 'ja',
    metaDesc: 'Cortex — VS CodeでアジェンティックAIコーディング',
    navDocs: 'ドキュメント',
    navChangelog: '変更履歴',
    badge: 'VS Codeのためにゼロから構築',
    tagline: 'VS Codeで直接アジェンティックAIコーディング。CursorやWindsurfと同じアシストプログラミング体験を、エディタを変更せずに — AIプロバイダーを選択する自由も。',
    ctaInstall: 'Marketplaceからインストール',
    ctaDocs: 'ドキュメントを読む',
    sub: 'OpenAI、Anthropic、Google、xAI、OpenRouterなどに対応。どのモデルがコードに触れるかはあなたが決めます。',
    featuresTitle: 'Cortexが異なる理由',
    features: [
      { title: '完全なアジェンティックワークフロー', desc: 'Plan → Build：コードを分析し、チェックリスト付きの計画を提案し、ステップバイステップで実行。Cursor Agentと同じフローがVS Codeで。' },
      { title: 'マルチプロバイダー、マルチモデル', desc: 'OpenAI、Anthropic、Google、xAI、OpenRouterなどに接続。ロックインなしでモデルを切り替え。どのAIがコードに触れるかはあなた次第。' },
      { title: 'スマートコンテキスト', desc: 'コードベースに対するレキシカル＋セマンティック検索。エージェントは重要なものを正確に見ます — リポジトリ全体をスキャンしません。' },
      { title: 'インラインdiff', desc: 'エディタ内で直接各AI提案をdiffプレビュー付きで承認/却下。変更内容を完全にコントロール。' },
      { title: '充実したチャットサイドバー', desc: '会話履歴、ツール使用タイムライン、Markdownストリーミング。シームレスなフローに必要なすべて。' },
      { title: 'OpenCode上に構築', desc: 'オープンソースのコーディングエージェントバックエンドOpenCodeをゼロから構築。拡張可能、透明、あなたのもの。' },
    ],
    compareTitle: 'Cortex vs 他社製品',
    compareSubtitle: '同じアジェンティックパワー、より多くの自由。',
    compareNote: 'CortexはVS Codeの拡張機能であり、フォークではありません。エディタや設定を移行する必要はありません。オープンスタックでCursor/Windsurfのアジェンティックフローを再現するために、OpenCodeをゼロから構築。',
    compareRows: [
      { feature: 'エディタ', cortex: '現在のVS Code', cursor: '独自エディタ（VS Codeフォーク）', windsurf: '独自エディタ（VS Codeフォーク）' },
      { feature: 'AIプロバイダー', cortex: 'マルチプロバイダー（選択可）', cursor: 'OpenAI（主に）', windsurf: 'マルチプロバイダー' },
      { feature: 'オープンソース', cortex: 'はい — OpenCodeバックエンド', cursor: 'いいえ', windsurf: 'いいえ' },
      { feature: 'ライセンス費用', cortex: '無料（APIキーは自己負担）', cursor: '無料制限付き + $20/月 Pro', windsurf: '無料制限付き + $15/月 Pro' },
      { feature: 'アジェンティックワークフロー', cortex: 'Plan → Build + チェックリスト', cursor: 'Agent mode + tools', windsurf: 'Cascade + tools' },
      { feature: 'コードコントロール', cortex: 'インラインdiff、承認/却下', cursor: 'インラインdiff、承認/却下', windsurf: 'インラインdiff、承認/却下' },
      { feature: 'プロジェクトコンテキスト', cortex: 'レキシカル＋セマンティック検索', cursor: '@mentions + コードベースインデックス', windsurf: '@mentions + Context Flows' },
    ],
    installTitle: '3ステップで始めましょう',
    installSteps: [
      { strong: '拡張機能をインストール', p: 'VS Codeの拡張機能で「Cortex」を検索するか、Marketplaceからインストール。' },
      { strong: 'AIプロバイダーを接続', p: 'Cortexサイドバーを開く → 「Open OpenCode」→ プロバイダー（OpenAI、Anthropic、Googleなど）をAPIキーで接続。' },
      { strong: 'AIでコーディングを開始', p: '質問、コード生成、リファクタリング — Cortexが分析、計画、実行。変更はすべて承認制。' },
    ],
    footer: 'Built with ❤️ by',
  },
  zh: {
    lang: 'zh',
    metaDesc: 'Cortex — 在VS Code中进行代理式AI编程',
    navDocs: '文档',
    navChangelog: '更新日志',
    badge: '为VS Code从零构建',
    tagline: '在VS Code中直接进行代理式AI编程。与Cursor和Windsurf相同的辅助编程体验——无需更换编辑器，并可自由选择AI提供商。',
    ctaInstall: '从Marketplace安装',
    ctaDocs: '阅读文档',
    sub: '支持OpenAI、Anthropic、Google、xAI、OpenRouter等。由你决定哪个模型触及你的代码。',
    featuresTitle: 'Cortex的不同之处',
    features: [
      { title: '完整的代理式工作流', desc: 'Plan → Build：分析你的代码，提出带清单的计划，并逐步执行。与Cursor Agent相同的流程，现在就在你的VS Code中。' },
      { title: '多提供商、多模型', desc: '连接OpenAI、Anthropic、Google、xAI、OpenRouter等。无锁定地切换模型。由你决定哪个AI触及你的代码。' },
      { title: '智能上下文', desc: '对代码库进行词法+语义搜索。代理精确看到重要的内容——不会扫描整个仓库。' },
      { title: '内联差异', desc: '在编辑器中直接接受或拒绝每个AI建议，带差异预览。完全控制更改内容。' },
      { title: '完整的聊天侧边栏', desc: '对话历史、工具使用时间线、Markdown流式传输。连续流所需的一切。' },
      { title: '基于OpenCode构建', desc: '从零开始基于OpenCode构建，开源编码代理后端。可扩展、透明、属于你。' },
    ],
    compareTitle: 'Cortex与其他产品对比',
    compareSubtitle: '同样的代理式能力，更多的自由。',
    compareNote: 'Cortex是VS Code扩展，不是分支。无需迁移编辑器或设置。基于OpenCode从零构建，以开源技术栈复制Cursor/Windsurf的代理式流程。',
    compareRows: [
      { feature: '编辑器', cortex: '你当前的VS Code', cursor: '自有编辑器（VS Code分支）', windsurf: '自有编辑器（VS Code分支）' },
      { feature: 'AI提供商', cortex: '多提供商（你选择）', cursor: 'OpenAI（主要）', windsurf: '多提供商' },
      { feature: '开源', cortex: '是 — OpenCode后端', cursor: '否', windsurf: '否' },
      { feature: '许可证费用', cortex: '免费（你支付API密钥）', cursor: '受限免费 + $20/月 Pro', windsurf: '受限免费 + $15/月 Pro' },
      { feature: '代理式工作流', cortex: 'Plan → Build + 清单', cursor: 'Agent mode + tools', windsurf: 'Cascade + tools' },
      { feature: '代码控制', cortex: '内联差异、接受/拒绝', cursor: '内联差异、接受/拒绝', windsurf: '内联差异、接受/拒绝' },
      { feature: '项目上下文', cortex: '词法+语义搜索', cursor: '@mentions + 代码库索引', windsurf: '@mentions + Context Flows' },
    ],
    installTitle: '3步开始',
    installSteps: [
      { strong: '安装扩展', p: '在VS Code扩展中搜索"Cortex"，或从Marketplace安装。' },
      { strong: '连接AI提供商', p: '打开Cortex侧边栏 → "Open OpenCode" → 用API密钥连接提供商（OpenAI、Anthropic、Google等）。' },
      { strong: '开始AI编程', p: '提问、生成代码、重构——Cortex分析、计划、执行。每次更改都需你批准。' },
    ],
    footer: 'Built with ❤️ by',
  },
};

export function getT(lang: Lang): Translations {
  return translations[lang] ?? translations[defaultLang];
}

export { getDocs } from './docs';
export { getChangelog } from './changelog';
