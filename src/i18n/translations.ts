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
  ctaOpenVsx: string;
  ctaDocs: string;
  sub: string;
  heroDemoAlt: string;
  heroDemoPlaceholder: string;
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
    metaDesc: 'Cortex — Agentic AI coding in VS Code with OpenCode',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Early access for VS Code',
    tagline: 'The Cursor and Windsurf agent experience — in your own VS Code, powered by your OpenCode subscription.',
    ctaInstall: 'Install from Marketplace',
    ctaOpenVsx: 'Install from Open VSX',
    ctaDocs: 'Read the docs',
    sub: 'Pick any model available on your OpenCode plan. You keep your editor and your OpenCode billing — Cortex is the IDE layer in between.',
    heroDemoAlt: 'Cortex in VS Code: context-aware code generation with OpenCode',
    heroDemoPlaceholder: 'Product demo coming soon',
    featuresTitle: 'What makes Cortex different?',
    features: [
      { title: 'Complete agentic workflow', desc: 'Plan → Build: analyzes your code, proposes a plan with checklist, and executes step by step. The same flow as Cursor Agent, now in your VS Code.' },
      { title: 'Your OpenCode models', desc: 'Choose among the models included in your OpenCode subscription. Switch on the fly. Cortex does not sell AI access — you manage OpenCode yourself.' },
      { title: 'Smart context', desc: 'Lexical + semantic search over your codebase. The agent sees exactly what matters — it doesn\'t scan the entire repo.' },
      { title: 'Inline diffs', desc: 'Accept or reject every AI suggestion directly in the editor with diff preview. Full control over what changes.' },
      { title: 'Full chat sidebar', desc: 'Conversation history, tool usage timeline, markdown streaming. Everything you need for a continuous flow.' },
      { title: 'OpenCode inside your IDE', desc: 'Uses OpenCode as the agentic runtime integrated into VS Code or any compatible fork. Same assisted programming feel as Cursor or Windsurf — without leaving your editor.' },
    ],
    compareTitle: 'Cortex vs the rest',
    compareSubtitle: 'Lightweight, OpenCode-native, in your VS Code — same agentic power, more freedom.',
    compareNote: 'Cortex is a VS Code extension, not a fork. Keep your editor and settings. It integrates OpenCode so you get a Cursor/Windsurf-like agent experience while you control your own OpenCode subscription.',
    compareRows: [
      { feature: 'Editor', cortex: 'Your VS Code or compatible fork', cursor: 'Own editor (VS Code fork)', windsurf: 'Own editor (VS Code fork)' },
      { feature: 'Footprint', cortex: 'Lightweight VS Code extension', cursor: 'Full fork editor', windsurf: 'Full fork editor' },
      { feature: 'OpenCode', cortex: 'Native OpenCode.ai integration', cursor: 'Not OpenCode', windsurf: 'Not OpenCode' },
      { feature: 'IDE UX', cortex: 'Polished agent UI in your VS Code', cursor: 'Built-in agent UX', windsurf: 'Built-in Cascade UX' },
      { feature: 'AI access', cortex: 'Your OpenCode subscription', cursor: 'Cursor subscription', windsurf: 'Windsurf subscription' },
      { feature: 'Cortex license', cortex: 'Free in early access; later one-time purchase', cursor: 'Subscription', windsurf: 'Subscription' },
      { feature: 'AI billing', cortex: 'OpenCode (external to Cortex)', cursor: 'Included in Cursor plan', windsurf: 'Included in Windsurf plan' },
      { feature: 'Agentic workflow', cortex: 'Plan → Build with checklists', cursor: 'Agent mode with tools', windsurf: 'Cascade with tools' },
      { feature: 'Code control', cortex: 'Inline diff, accept/reject', cursor: 'Inline diff, accept/reject', windsurf: 'Inline diff, accept/reject' },
      { feature: 'Project context', cortex: 'Lexical + semantic search', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Get started in 3 steps',
    installSteps: [
      { strong: 'Install the extension', p: 'Search "Cortex Agent" in Extensions, or install cortex-labs.cortex-agent from the VS Code Marketplace or Open VSX.' },
      { strong: 'Connect OpenCode', p: 'Open the Cortex sidebar and connect your OpenCode account. Models come from your OpenCode subscription — managed outside Cortex.' },
      { strong: 'Start coding with AI', p: 'Ask questions, generate code, refactor — Cortex analyzes, plans, and executes. You approve every change.' },
    ],
    footer: 'Built with ❤️ by',
  },
  es: {
    lang: 'es',
    metaDesc: 'Cortex — Agentic AI coding en VS Code con OpenCode',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Acceso anticipado para VS Code',
    tagline: 'La experiencia agentic de Cursor y Windsurf — en tu propio VS Code, impulsada por tu suscripción de OpenCode.',
    ctaInstall: 'Instalar desde Marketplace',
    ctaOpenVsx: 'Instalar desde Open VSX',
    ctaDocs: 'Leer la documentación',
    sub: 'Elige cualquier modelo disponible en tu plan de OpenCode. Conservas tu editor y tu facturación de OpenCode — Cortex es la capa de IDE en medio.',
    heroDemoAlt: 'Cortex en VS Code: generación de código context-aware con OpenCode',
    heroDemoPlaceholder: 'Demo del producto próximamente',
    featuresTitle: '¿Qué hace a Cortex diferente?',
    features: [
      { title: 'Agentic workflow completo', desc: 'Plan → Build: analiza tu código, propone un plan con checklist, y ejecuta paso a paso. El mismo flow de Cursor Agent, ahora en tu VS Code.' },
      { title: 'Tus modelos de OpenCode', desc: 'Elige entre los modelos incluidos en tu suscripción de OpenCode. Cambia al vuelo. Cortex no vende acceso a IA — tú gestionas OpenCode por tu cuenta.' },
      { title: 'Contexto inteligente', desc: 'Búsqueda léxica + semántica sobre tu codebase. El agente ve exactamente lo que importa, no escanea el repo entero.' },
      { title: 'Ediciones inline con diff', desc: 'Acepta o rechaza cada sugerencia de IA directamente en el editor con preview de diffs. Control total sobre lo que cambia.' },
      { title: 'Chat lateral completo', desc: 'Historial de conversación, timeline de uso de herramientas, streaming de markdown. Todo lo que necesitas para un flujo continuo.' },
      { title: 'OpenCode dentro de tu IDE', desc: 'Usa OpenCode como runtime agentico integrado en VS Code o cualquier fork compatible. La misma sensación de programación asistida que Cursor o Windsurf — sin dejar tu editor.' },
    ],
    compareTitle: 'Cortex vs los demás',
    compareSubtitle: 'Ligero, nativo de OpenCode, en tu VS Code — misma potencia agentic, más libertad.',
    compareNote: 'Cortex es una extensión de VS Code, no un fork. Conserva tu editor y tu configuración. Integra OpenCode para darte una experiencia agentic al estilo Cursor/Windsurf mientras tú controlas tu propia suscripción de OpenCode.',
    compareRows: [
      { feature: 'Editor', cortex: 'Tu VS Code o fork compatible', cursor: 'Editor propio (fork de VS Code)', windsurf: 'Editor propio (fork de VS Code)' },
      { feature: 'Huella', cortex: 'Extensión ligera de VS Code', cursor: 'Editor fork completo', windsurf: 'Editor fork completo' },
      { feature: 'OpenCode', cortex: 'Integración nativa con OpenCode.ai', cursor: 'No es OpenCode', windsurf: 'No es OpenCode' },
      { feature: 'IDE UX', cortex: 'UI agentic pulida en tu VS Code', cursor: 'UX agentic integrada', windsurf: 'UX Cascade integrada' },
      { feature: 'Acceso a IA', cortex: 'Tu suscripción de OpenCode', cursor: 'Suscripción de Cursor', windsurf: 'Suscripción de Windsurf' },
      { feature: 'Licencia Cortex', cortex: 'Gratis en acceso anticipado; luego pago único', cursor: 'Suscripción', windsurf: 'Suscripción' },
      { feature: 'Facturación IA', cortex: 'OpenCode (externo a Cortex)', cursor: 'Incluida en el plan Cursor', windsurf: 'Incluida en el plan Windsurf' },
      { feature: 'Agentic workflow', cortex: 'Plan → Build con checklists', cursor: 'Agent mode con tools', windsurf: 'Cascade con tools' },
      { feature: 'Control del código', cortex: 'Diff inline, aceptar/rechazar', cursor: 'Diff inline, aceptar/rechazar', windsurf: 'Diff inline, aceptar/rechazar' },
      { feature: 'Contexto del proyecto', cortex: 'Búsqueda léxica + semántica', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Empieza en 3 pasos',
    installSteps: [
      { strong: 'Instala la extensión', p: 'Busca "Cortex Agent" en Extensiones, o instala cortex-labs.cortex-agent desde el Marketplace de VS Code o Open VSX.' },
      { strong: 'Conecta OpenCode', p: 'Abre el sidebar de Cortex y conecta tu cuenta de OpenCode. Los modelos vienen de tu suscripción de OpenCode — gestionada fuera de Cortex.' },
      { strong: 'Empieza a codear con IA', p: 'Pregunta, genera código, refactorea — Cortex analiza, planifica y ejecuta. Tú apruebas cada cambio.' },
    ],
    footer: 'Built with ❤️ by',
  },
  pt: {
    lang: 'pt',
    metaDesc: 'Cortex — Agentic AI coding no VS Code com OpenCode',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Acesso antecipado para VS Code',
    tagline: 'A experiência agentic do Cursor e Windsurf — no seu próprio VS Code, com a sua assinatura OpenCode.',
    ctaInstall: 'Instalar da Marketplace',
    ctaOpenVsx: 'Instalar do Open VSX',
    ctaDocs: 'Ler a documentação',
    sub: 'Escolha qualquer modelo disponível no seu plano OpenCode. Você mantém o editor e a cobrança do OpenCode — o Cortex é a camada de IDE no meio.',
    heroDemoAlt: 'Cortex no VS Code: geração de código context-aware com OpenCode',
    heroDemoPlaceholder: 'Demo do produto em breve',
    featuresTitle: 'O que torna o Cortex diferente?',
    features: [
      { title: 'Workflow agentic completo', desc: 'Plan → Build: analisa seu código, propõe um plano com checklist e executa passo a passo. O mesmo flow do Cursor Agent, agora no seu VS Code.' },
      { title: 'Seus modelos OpenCode', desc: 'Escolha entre os modelos incluídos na sua assinatura OpenCode. Troque sob demanda. O Cortex não vende acesso à IA — você gerencia o OpenCode por conta própria.' },
      { title: 'Contexto inteligente', desc: 'Busca léxica + semântica no seu codebase. O agente vê exatamente o que importa — não escaneia o repo inteiro.' },
      { title: 'Diffs inline', desc: 'Aceite ou rejeite cada sugestão de IA diretamente no editor com preview de diffs. Controle total sobre o que muda.' },
      { title: 'Chat lateral completo', desc: 'Histórico de conversas, timeline de uso de ferramentas, streaming de markdown. Tudo que você precisa para fluxo contínuo.' },
      { title: 'OpenCode dentro do seu IDE', desc: 'Usa o OpenCode como runtime agentic integrado ao VS Code ou qualquer fork compatível. A mesma sensação de programação assistida do Cursor ou Windsurf — sem sair do seu editor.' },
    ],
    compareTitle: 'Cortex vs os demais',
    compareSubtitle: 'Leve, nativo do OpenCode, no seu VS Code — mesma potência agentic, mais liberdade.',
    compareNote: 'O Cortex é uma extensão do VS Code, não um fork. Mantenha seu editor e configurações. Integra o OpenCode para oferecer uma experiência agentic no estilo Cursor/Windsurf enquanto você controla sua própria assinatura OpenCode.',
    compareRows: [
      { feature: 'Editor', cortex: 'Seu VS Code ou fork compatível', cursor: 'Editor próprio (fork do VS Code)', windsurf: 'Editor próprio (fork do VS Code)' },
      { feature: 'Pegada', cortex: 'Extensão leve do VS Code', cursor: 'Editor fork completo', windsurf: 'Editor fork completo' },
      { feature: 'OpenCode', cortex: 'Integração nativa com OpenCode.ai', cursor: 'Não é OpenCode', windsurf: 'Não é OpenCode' },
      { feature: 'IDE UX', cortex: 'UI agentic polida no seu VS Code', cursor: 'UX agentic integrada', windsurf: 'UX Cascade integrada' },
      { feature: 'Acesso à IA', cortex: 'Sua assinatura OpenCode', cursor: 'Assinatura Cursor', windsurf: 'Assinatura Windsurf' },
      { feature: 'Licença Cortex', cortex: 'Grátis no acesso antecipado; depois compra única', cursor: 'Assinatura', windsurf: 'Assinatura' },
      { feature: 'Cobrança de IA', cortex: 'OpenCode (externo ao Cortex)', cursor: 'Incluída no plano Cursor', windsurf: 'Incluída no plano Windsurf' },
      { feature: 'Workflow agentic', cortex: 'Plan → Build com checklists', cursor: 'Agent mode com tools', windsurf: 'Cascade com tools' },
      { feature: 'Controle do código', cortex: 'Diff inline, aceitar/rejeitar', cursor: 'Diff inline, aceitar/rejeitar', windsurf: 'Diff inline, aceitar/rejeitar' },
      { feature: 'Contexto do projeto', cortex: 'Busca léxica + semântica', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Comece em 3 passos',
    installSteps: [
      { strong: 'Instale a extensão', p: 'Busque "Cortex Agent" nas Extensões, ou instale cortex-labs.cortex-agent na Marketplace do VS Code ou no Open VSX.' },
      { strong: 'Conecte o OpenCode', p: 'Abra a sidebar do Cortex e conecte sua conta OpenCode. Os modelos vêm da sua assinatura OpenCode — gerenciada fora do Cortex.' },
      { strong: 'Comece a programar com IA', p: 'Pergunte, gere código, refatore — Cortex analisa, planeja e executa. Você aprova cada mudança.' },
    ],
    footer: 'Built with ❤️ by',
  },
  fr: {
    lang: 'fr',
    metaDesc: 'Cortex — Agentic AI coding dans VS Code avec OpenCode',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Accès anticipé pour VS Code',
    tagline: 'L\'expérience agentic de Cursor et Windsurf — dans votre propre VS Code, alimentée par votre abonnement OpenCode.',
    ctaInstall: 'Installer depuis la Marketplace',
    ctaOpenVsx: 'Installer depuis Open VSX',
    ctaDocs: 'Lire la documentation',
    sub: 'Choisissez n\'importe quel modèle disponible sur votre forfait OpenCode. Vous gardez votre éditeur et votre facturation OpenCode — Cortex est la couche IDE au milieu.',
    heroDemoAlt: 'Cortex dans VS Code : génération de code context-aware avec OpenCode',
    heroDemoPlaceholder: 'Démo produit bientôt disponible',
    featuresTitle: 'Ce qui rend Cortex différent',
    features: [
      { title: 'Workflow agentic complet', desc: 'Plan → Build : analyse votre code, propose un plan avec checklist, et exécute étape par étape. Le même flow que Cursor Agent, maintenant dans votre VS Code.' },
      { title: 'Vos modèles OpenCode', desc: 'Choisissez parmi les modèles inclus dans votre abonnement OpenCode. Changez à la volée. Cortex ne vend pas l\'accès à l\'IA — vous gérez OpenCode vous-même.' },
      { title: 'Contexte intelligent', desc: 'Recherche lexicale + sémantique sur votre codebase. L\'agent voit exactement ce qui compte — il ne scanne pas tout le repo.' },
      { title: 'Diffs inline', desc: 'Acceptez ou rejetez chaque suggestion d\'IA directement dans l\'éditeur avec aperçu des diffs. Contrôle total sur ce qui change.' },
      { title: 'Chat latéral complet', desc: 'Historique des conversations, timeline d\'utilisation des outils, streaming markdown. Tout ce dont vous avez besoin pour un flux continu.' },
      { title: 'OpenCode dans votre IDE', desc: 'Utilise OpenCode comme runtime agentic intégré à VS Code ou tout fork compatible. La même sensation de programmation assistée que Cursor ou Windsurf — sans quitter votre éditeur.' },
    ],
    compareTitle: 'Cortex vs les autres',
    compareSubtitle: 'Léger, natif OpenCode, dans votre VS Code — même puissance agentic, plus de liberté.',
    compareNote: 'Cortex est une extension VS Code, pas un fork. Gardez votre éditeur et vos paramètres. Il intègre OpenCode pour offrir une expérience agentic façon Cursor/Windsurf tout en contrôlant votre propre abonnement OpenCode.',
    compareRows: [
      { feature: 'Éditeur', cortex: 'Votre VS Code ou fork compatible', cursor: 'Éditeur propre (fork de VS Code)', windsurf: 'Éditeur propre (fork de VS Code)' },
      { feature: 'Empreinte', cortex: 'Extension VS Code légère', cursor: 'Éditeur fork complet', windsurf: 'Éditeur fork complet' },
      { feature: 'OpenCode', cortex: 'Intégration native OpenCode.ai', cursor: 'Pas OpenCode', windsurf: 'Pas OpenCode' },
      { feature: 'IDE UX', cortex: 'UI agentic soignée dans votre VS Code', cursor: 'UX agentic intégrée', windsurf: 'UX Cascade intégrée' },
      { feature: 'Accès IA', cortex: 'Votre abonnement OpenCode', cursor: 'Abonnement Cursor', windsurf: 'Abonnement Windsurf' },
      { feature: 'Licence Cortex', cortex: 'Gratuit en accès anticipé ; puis achat unique', cursor: 'Abonnement', windsurf: 'Abonnement' },
      { feature: 'Facturation IA', cortex: 'OpenCode (externe à Cortex)', cursor: 'Incluse dans le forfait Cursor', windsurf: 'Incluse dans le forfait Windsurf' },
      { feature: 'Workflow agentic', cortex: 'Plan → Build avec checklists', cursor: 'Agent mode avec tools', windsurf: 'Cascade avec tools' },
      { feature: 'Contrôle du code', cortex: 'Diff inline, accepter/rejeter', cursor: 'Diff inline, accepter/rejeter', windsurf: 'Diff inline, accepter/rejeter' },
      { feature: 'Contexte du projet', cortex: 'Recherche lexicale + sémantique', cursor: '@mentions + codebase index', windsurf: '@mentions + context flows' },
    ],
    installTitle: 'Commencez en 3 étapes',
    installSteps: [
      { strong: 'Installez l\'extension', p: 'Recherchez "Cortex Agent" dans les extensions, ou installez cortex-labs.cortex-agent depuis la Marketplace VS Code ou Open VSX.' },
      { strong: 'Connectez OpenCode', p: 'Ouvrez la barre latérale Cortex et connectez votre compte OpenCode. Les modèles viennent de votre abonnement OpenCode — géré en dehors de Cortex.' },
      { strong: 'Commencez à coder avec l\'IA', p: 'Posez des questions, générez du code, refactorez — Cortex analyse, planifie et exécute. Vous approuvez chaque changement.' },
    ],
    footer: 'Built with ❤️ by',
  },
  de: {
    lang: 'de',
    metaDesc: 'Cortex — Agentic AI Coding in VS Code mit OpenCode',
    navDocs: 'Docs',
    navChangelog: 'Changelog',
    badge: 'Early Access für VS Code',
    tagline: 'Das Agent-Erlebnis von Cursor und Windsurf — in Ihrem eigenen VS Code, mit Ihrem OpenCode-Abo.',
    ctaInstall: 'Vom Marketplace installieren',
    ctaOpenVsx: 'Von Open VSX installieren',
    ctaDocs: 'Dokumentation lesen',
    sub: 'Wählen Sie jedes Modell aus Ihrem OpenCode-Plan. Sie behalten Ihren Editor und Ihre OpenCode-Abrechnung — Cortex ist die IDE-Schicht dazwischen.',
    heroDemoAlt: 'Cortex in VS Code: kontextbewusste Codegenerierung mit OpenCode',
    heroDemoPlaceholder: 'Produktdemo folgt in Kürze',
    featuresTitle: 'Was Cortex anders macht',
    features: [
      { title: 'Vollständiger Agentic Workflow', desc: 'Plan → Build: Analysiert Ihren Code, schlägt einen Plan mit Checklist vor und führt Schritt für Schritt aus. Der gleiche Flow wie Cursor Agent, jetzt in Ihrem VS Code.' },
      { title: 'Ihre OpenCode-Modelle', desc: 'Wählen Sie unter den Modellen Ihres OpenCode-Abos. Wechseln Sie jederzeit. Cortex verkauft keinen KI-Zugang — OpenCode verwalten Sie selbst.' },
      { title: 'Intelligenter Kontext', desc: 'Lexikalische + semantische Suche über Ihre Codebase. Der Agent sieht genau, was wichtig ist — er scannt nicht das gesamte Repo.' },
      { title: 'Inline-Diffs', desc: 'Akzeptieren oder lehnen Sie jeden KI-Vorschlag direkt im Editor mit Diff-Vorschau ab. Volle Kontrolle über Änderungen.' },
      { title: 'Vollständiger Chat-Sidebar', desc: 'Unterhaltungsverlauf, Tool-Nutzungs-Timeline, Markdown-Streaming. Alles für einen kontinuierlichen Flow.' },
      { title: 'OpenCode in Ihrer IDE', desc: 'Nutzt OpenCode als agentischen Runtime integriert in VS Code oder jeden kompatiblen Fork. Das gleiche Assistenz-Gefühl wie Cursor oder Windsurf — ohne den Editor zu wechseln.' },
    ],
    compareTitle: 'Cortex vs die anderen',
    compareSubtitle: 'Leichtgewichtig, OpenCode-nativ, in Ihrem VS Code — gleiche Agentic-Leistung, mehr Freiheit.',
    compareNote: 'Cortex ist eine VS Code-Erweiterung, kein Fork. Behalten Sie Editor und Einstellungen. Es integriert OpenCode für ein Cursor/Windsurf-ähnliches Agent-Erlebnis, während Sie Ihr eigenes OpenCode-Abo steuern.',
    compareRows: [
      { feature: 'Editor', cortex: 'Ihr VS Code oder kompatibler Fork', cursor: 'Eigener Editor (VS Code Fork)', windsurf: 'Eigener Editor (VS Code Fork)' },
      { feature: 'Fußabdruck', cortex: 'Leichtgewichtige VS Code-Erweiterung', cursor: 'Vollständiger Fork-Editor', windsurf: 'Vollständiger Fork-Editor' },
      { feature: 'OpenCode', cortex: 'Native OpenCode.ai-Integration', cursor: 'Nicht OpenCode', windsurf: 'Nicht OpenCode' },
      { feature: 'IDE UX', cortex: 'Polierte Agent-UI in Ihrem VS Code', cursor: 'Eingebaute Agent-UX', windsurf: 'Eingebaute Cascade-UX' },
      { feature: 'KI-Zugang', cortex: 'Ihr OpenCode-Abo', cursor: 'Cursor-Abo', windsurf: 'Windsurf-Abo' },
      { feature: 'Cortex-Lizenz', cortex: 'Kostenlos im Early Access; später Einmalkauf', cursor: 'Abo', windsurf: 'Abo' },
      { feature: 'KI-Abrechnung', cortex: 'OpenCode (außerhalb von Cortex)', cursor: 'Im Cursor-Plan enthalten', windsurf: 'Im Windsurf-Plan enthalten' },
      { feature: 'Agentic Workflow', cortex: 'Plan → Build mit Checklisten', cursor: 'Agent Mode mit Tools', windsurf: 'Cascade mit Tools' },
      { feature: 'Code-Kontrolle', cortex: 'Inline-Diff, akzeptieren/ablehnen', cursor: 'Inline-Diff, akzeptieren/ablehnen', windsurf: 'Inline-Diff, akzeptieren/ablehnen' },
      { feature: 'Projektkontext', cortex: 'Lexikalische + semantische Suche', cursor: '@mentions + Codebase-Index', windsurf: '@mentions + Context Flows' },
    ],
    installTitle: 'In 3 Schritten starten',
    installSteps: [
      { strong: 'Erweiterung installieren', p: 'Suchen Sie "Cortex Agent" in den Erweiterungen, oder installieren Sie cortex-labs.cortex-agent vom VS Code Marketplace oder Open VSX.' },
      { strong: 'OpenCode verbinden', p: 'Öffnen Sie die Cortex-Sidebar und verbinden Sie Ihr OpenCode-Konto. Modelle kommen aus Ihrem OpenCode-Abo — außerhalb von Cortex verwaltet.' },
      { strong: 'Anfangen mit KI zu coden', p: 'Fragen stellen, Code generieren, refactoren — Cortex analysiert, plant und führt aus. Sie genehmigen jede Änderung.' },
    ],
    footer: 'Built with ❤️ by',
  },
  ja: {
    lang: 'ja',
    metaDesc: 'Cortex — OpenCodeでVS CodeにアジェンティックAIコーディング',
    navDocs: 'ドキュメント',
    navChangelog: '変更履歴',
    badge: 'VS Code向け早期アクセス',
    tagline: 'CursorやWindsurfと同じエージェント体験を、自分のVS Codeで — OpenCodeサブスクリプションで動かします。',
    ctaInstall: 'Marketplaceからインストール',
    ctaOpenVsx: 'Open VSXからインストール',
    ctaDocs: 'ドキュメントを読む',
    sub: 'OpenCodeプランで利用可能な任意のモデルを選択。エディタもOpenCodeの課金もあなたのまま — Cortexはその間のIDEレイヤーです。',
    heroDemoAlt: 'VS Code上のCortex：OpenCodeによるコンテキスト対応コード生成',
    heroDemoPlaceholder: '製品デモ準備中',
    featuresTitle: 'Cortexが異なる理由',
    features: [
      { title: '完全なアジェンティックワークフロー', desc: 'Plan → Build：コードを分析し、チェックリスト付きの計画を提案し、ステップバイステップで実行。Cursor Agentと同じフローがVS Codeで。' },
      { title: 'あなたのOpenCodeモデル', desc: 'OpenCodeサブスクリプションに含まれるモデルから選択。その場で切り替え。CortexはAIアクセスを販売しません — OpenCodeは自分で管理します。' },
      { title: 'スマートコンテキスト', desc: 'コードベースに対するレキシカル＋セマンティック検索。エージェントは重要なものを正確に見ます — リポジトリ全体をスキャンしません。' },
      { title: 'インラインdiff', desc: 'エディタ内で直接各AI提案をdiffプレビュー付きで承認/却下。変更内容を完全にコントロール。' },
      { title: '充実したチャットサイドバー', desc: '会話履歴、ツール使用タイムライン、Markdownストリーミング。シームレスなフローに必要なすべて。' },
      { title: 'IDE内のOpenCode', desc: 'VS Codeまたは互換フォークに統合されたアジェンティックランタイムとしてOpenCodeを使用。CursorやWindsurfと同じアシスト感を、エディタを変えずに。' },
    ],
    compareTitle: 'Cortex vs 他社製品',
    compareSubtitle: '軽量、OpenCodeネイティブ、あなたのVS Codeで — 同じアジェンティックパワー、より多くの自由。',
    compareNote: 'CortexはVS Codeの拡張機能であり、フォークではありません。エディタと設定はそのまま。OpenCodeを統合し、Cursor/Windsurf風のエージェント体験を、自分のOpenCodeサブスクリプションで制御できます。',
    compareRows: [
      { feature: 'エディタ', cortex: '現在のVS Codeまたは互換フォーク', cursor: '独自エディタ（VS Codeフォーク）', windsurf: '独自エディタ（VS Codeフォーク）' },
      { feature: 'フットプリント', cortex: '軽量なVS Code拡張機能', cursor: 'フルフォークエディタ', windsurf: 'フルフォークエディタ' },
      { feature: 'OpenCode', cortex: 'OpenCode.aiネイティブ統合', cursor: 'OpenCodeではない', windsurf: 'OpenCodeではない' },
      { feature: 'IDE UX', cortex: 'VS Code内の洗練されたエージェントUI', cursor: '内蔵エージェントUX', windsurf: '内蔵Cascade UX' },
      { feature: 'AIアクセス', cortex: 'あなたのOpenCodeサブスクリプション', cursor: 'Cursorサブスクリプション', windsurf: 'Windsurfサブスクリプション' },
      { feature: 'Cortexライセンス', cortex: '早期アクセスは無料、後に買い切り', cursor: 'サブスクリプション', windsurf: 'サブスクリプション' },
      { feature: 'AI課金', cortex: 'OpenCode（Cortex外）', cursor: 'Cursorプランに含む', windsurf: 'Windsurfプランに含む' },
      { feature: 'アジェンティックワークフロー', cortex: 'Plan → Build + チェックリスト', cursor: 'Agent mode + tools', windsurf: 'Cascade + tools' },
      { feature: 'コードコントロール', cortex: 'インラインdiff、承認/却下', cursor: 'インラインdiff、承認/却下', windsurf: 'インラインdiff、承認/却下' },
      { feature: 'プロジェクトコンテキスト', cortex: 'レキシカル＋セマンティック検索', cursor: '@mentions + コードベースインデックス', windsurf: '@mentions + Context Flows' },
    ],
    installTitle: '3ステップで始めましょう',
    installSteps: [
      { strong: '拡張機能をインストール', p: '拡張機能で「Cortex Agent」を検索するか、VS Code MarketplaceまたはOpen VSXから cortex-labs.cortex-agent をインストール。' },
      { strong: 'OpenCodeを接続', p: 'Cortexサイドバーを開き、OpenCodeアカウントを接続。モデルはOpenCodeサブスクリプションから — Cortex外で管理。' },
      { strong: 'AIでコーディングを開始', p: '質問、コード生成、リファクタリング — Cortexが分析、計画、実行。変更はすべて承認制。' },
    ],
    footer: 'Built with ❤️ by',
  },
  zh: {
    lang: 'zh',
    metaDesc: 'Cortex — 通过 OpenCode 在 VS Code 中进行代理式 AI 编程',
    navDocs: '文档',
    navChangelog: '更新日志',
    badge: 'VS Code 抢先体验',
    tagline: 'Cursor 与 Windsurf 的代理体验——在你自己的 VS Code 中，由你的 OpenCode 订阅驱动。',
    ctaInstall: '从 Marketplace 安装',
    ctaOpenVsx: '从 Open VSX 安装',
    ctaDocs: '阅读文档',
    sub: '选择你 OpenCode 套餐中可用的任意模型。编辑器与 OpenCode 账单仍归你——Cortex 是中间的 IDE 层。',
    heroDemoAlt: 'VS Code 中的 Cortex：基于 OpenCode 的上下文感知代码生成',
    heroDemoPlaceholder: '产品演示即将推出',
    featuresTitle: 'Cortex 的不同之处',
    features: [
      { title: '完整的代理式工作流', desc: 'Plan → Build：分析你的代码，提出带清单的计划，并逐步执行。与 Cursor Agent 相同的流程，现在就在你的 VS Code 中。' },
      { title: '你的 OpenCode 模型', desc: '从 OpenCode 订阅包含的模型中选择，随时切换。Cortex 不出售 AI 访问——由你自行管理 OpenCode。' },
      { title: '智能上下文', desc: '对代码库进行词法 + 语义搜索。代理精确看到重要内容——不会扫描整个仓库。' },
      { title: '内联差异', desc: '在编辑器中直接接受或拒绝每个 AI 建议，带差异预览。完全控制更改内容。' },
      { title: '完整的聊天侧边栏', desc: '对话历史、工具使用时间线、Markdown 流式传输。连续工作流所需的一切。' },
      { title: 'IDE 内的 OpenCode', desc: '将 OpenCode 作为代理运行时集成到 VS Code 或任何兼容分支。与 Cursor 或 Windsurf 相同的辅助编程体验——无需离开你的编辑器。' },
    ],
    compareTitle: 'Cortex 与其他产品对比',
    compareSubtitle: '轻量、OpenCode 原生、在你的 VS Code 中——同样的代理能力，更多的自由。',
    compareNote: 'Cortex 是 VS Code 扩展，不是分支。保留你的编辑器与设置。它集成 OpenCode，提供类似 Cursor/Windsurf 的代理体验，同时由你控制自己的 OpenCode 订阅。',
    compareRows: [
      { feature: '编辑器', cortex: '你的 VS Code 或兼容分支', cursor: '自有编辑器（VS Code 分支）', windsurf: '自有编辑器（VS Code 分支）' },
      { feature: '体积', cortex: '轻量级 VS Code 扩展', cursor: '完整分支编辑器', windsurf: '完整分支编辑器' },
      { feature: 'OpenCode', cortex: '原生 OpenCode.ai 集成', cursor: '非 OpenCode', windsurf: '非 OpenCode' },
      { feature: 'IDE UX', cortex: '在你的 VS Code 中打磨的代理 UI', cursor: '内置代理 UX', windsurf: '内置 Cascade UX' },
      { feature: 'AI 访问', cortex: '你的 OpenCode 订阅', cursor: 'Cursor 订阅', windsurf: 'Windsurf 订阅' },
      { feature: 'Cortex 许可', cortex: '抢先体验免费；之后一次性购买', cursor: '订阅', windsurf: '订阅' },
      { feature: 'AI 账单', cortex: 'OpenCode（独立于 Cortex）', cursor: '包含在 Cursor 套餐中', windsurf: '包含在 Windsurf 套餐中' },
      { feature: '代理式工作流', cortex: 'Plan → Build + 清单', cursor: 'Agent mode + tools', windsurf: 'Cascade + tools' },
      { feature: '代码控制', cortex: '内联差异、接受/拒绝', cursor: '内联差异、接受/拒绝', windsurf: '内联差异、接受/拒绝' },
      { feature: '项目上下文', cortex: '词法 + 语义搜索', cursor: '@mentions + 代码库索引', windsurf: '@mentions + Context Flows' },
    ],
    installTitle: '3 步开始',
    installSteps: [
      { strong: '安装扩展', p: '在扩展中搜索「Cortex Agent」，或从 VS Code Marketplace / Open VSX 安装 cortex-labs.cortex-agent。' },
      { strong: '连接 OpenCode', p: '打开 Cortex 侧边栏并连接你的 OpenCode 账户。模型来自你的 OpenCode 订阅——在 Cortex 之外管理。' },
      { strong: '开始 AI 编程', p: '提问、生成代码、重构——Cortex 分析、计划、执行。每次更改都需你批准。' },
    ],
    footer: 'Built with ❤️ by',
  },
};

export function getT(lang: Lang): Translations {
  return translations[lang] ?? translations[defaultLang];
}

export { getDocs } from './docs';
export { getChangelog } from './changelog';
