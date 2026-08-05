import type { Lang } from './translations';

export interface CompareTranslations {
  metaTitle: string;
  title: string;
  intro: string;
  note: string;
  headers: [string, string, string, string, string];
  rows: { feature: string; cortex: string; cursor: string; devin: string; zoo: string }[];
  ctaDocs: string;
  ctaMigrate: string;
}

const en: CompareTranslations = {
  metaTitle: 'Compare — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    'Honest positioning (August 2026): Cortex is a Cursor-class edit surface on the OpenCode runtime — your editor, your subscription, your code on your machine. No fork, no Cortex account, no token markup, no Docker.',
  note:
    'Figures change; verify current pricing on each product’s site. Cortex never sells AI tokens — you pay OpenCode (or BYOK) directly.',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: 'Editor',
      cortex: 'Your VS Code / compatible fork',
      cursor: 'Own editor (VS Code fork)',
      devin: 'Cognition desktop / command center',
      zoo: 'VS Code extension (Roo/Cline fork)',
    },
    {
      feature: 'Runtime',
      cortex: 'OpenCode local serve (thin layer)',
      cursor: 'Cursor agents (local + cloud)',
      devin: 'Multi-agent via ACP (Devin/Codex/Claude/OpenCode)',
      zoo: 'In-process agent (~70 deps)',
    },
    {
      feature: 'AI billing',
      cortex: 'Your OpenCode plan / BYOK — no Cortex markup',
      cursor: 'Cursor subscription ($20–200/mo)',
      devin: 'Cognition subscription ($20–200/mo)',
      zoo: 'Zoo Gateway with token markup',
    },
    {
      feature: 'Account',
      cortex: 'OpenCode only (no Cortex signup)',
      cursor: 'Cursor account required',
      devin: 'Cognition account required',
      zoo: 'Zoo account / gateway',
    },
    {
      feature: 'Code stays',
      cortex: 'On your machine',
      cursor: 'Local + optional cloud agents',
      devin: 'Local desktop + cloud agents available',
      zoo: 'Local + gateway path',
    },
    {
      feature: 'Fork / Docker',
      cortex: 'No fork · no Docker required',
      cursor: 'Full editor fork',
      devin: 'Product desktop (not a VS Code fork)',
      zoo: 'Fork of Roo/Cline · often Docker-heavy',
    },
    {
      feature: 'Rules / skills',
      cortex: '.cursor + .cortex rules & skills',
      cursor: '.cursor/rules & skills',
      devin: 'Product-specific policies',
      zoo: 'Roo/Cline rules / modes',
    },
    {
      feature: 'UI languages',
      cortex: '7 (en, es, pt, fr, de, ja, zh)',
      cursor: 'Product UI locales',
      devin: 'Product UI locales',
      zoo: '~18 locales',
    },
    {
      feature: 'Embeddings',
      cortex: 'Local hash or MiniLM (optional)',
      cursor: 'Proprietary index',
      devin: 'Product context stack',
      zoo: 'Qdrant + API embeddings',
    },
  ],
  ctaDocs: 'Read the docs',
  ctaMigrate: 'Migrate from Cursor / Copilot / Roo',
};

const es: CompareTranslations = {
  metaTitle: 'Comparativa — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    'Posicionamiento honesto (agosto 2026): Cortex es una superficie de edición clase Cursor sobre el runtime OpenCode — tu editor, tu suscripción, tu código en tu máquina. Sin fork, sin cuenta Cortex, sin markup de tokens, sin Docker.',
  note:
    'Las cifras cambian; verifica precios en cada sitio. Cortex no vende tokens de IA — pagas OpenCode (o BYOK) directamente.',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: 'Editor',
      cortex: 'Tu VS Code / fork compatible',
      cursor: 'Editor propio (fork de VS Code)',
      devin: 'Desktop / command center de Cognition',
      zoo: 'Extensión VS Code (fork de Roo/Cline)',
    },
    {
      feature: 'Runtime',
      cortex: 'OpenCode serve local (capa fina)',
      cursor: 'Agentes Cursor (local + cloud)',
      devin: 'Multi-agente vía ACP (Devin/Codex/Claude/OpenCode)',
      zoo: 'Agente in-process (~70 deps)',
    },
    {
      feature: 'Facturación IA',
      cortex: 'Tu plan OpenCode / BYOK — sin markup Cortex',
      cursor: 'Suscripción Cursor ($20–200/mes)',
      devin: 'Suscripción Cognition ($20–200/mes)',
      zoo: 'Zoo Gateway con markup de tokens',
    },
    {
      feature: 'Cuenta',
      cortex: 'Solo OpenCode (sin registro Cortex)',
      cursor: 'Cuenta Cursor requerida',
      devin: 'Cuenta Cognition requerida',
      zoo: 'Cuenta Zoo / gateway',
    },
    {
      feature: 'El código queda',
      cortex: 'En tu máquina',
      cursor: 'Local + agentes cloud opcionales',
      devin: 'Desktop local + agentes cloud',
      zoo: 'Local + ruta gateway',
    },
    {
      feature: 'Fork / Docker',
      cortex: 'Sin fork · sin Docker obligatorio',
      cursor: 'Fork completo del editor',
      devin: 'Desktop de producto (no fork VS Code)',
      zoo: 'Fork de Roo/Cline · a menudo con Docker',
    },
    {
      feature: 'Rules / skills',
      cortex: 'Rules y skills .cursor + .cortex',
      cursor: '.cursor/rules y skills',
      devin: 'Políticas del producto',
      zoo: 'Rules / modes de Roo/Cline',
    },
    {
      feature: 'Idiomas UI',
      cortex: '7 (en, es, pt, fr, de, ja, zh)',
      cursor: 'Locales del producto',
      devin: 'Locales del producto',
      zoo: '~18 locales',
    },
    {
      feature: 'Embeddings',
      cortex: 'Hash o MiniLM local (opcional)',
      cursor: 'Índice propietario',
      devin: 'Stack de contexto del producto',
      zoo: 'Qdrant + embeddings por API',
    },
  ],
  ctaDocs: 'Leer la documentación',
  ctaMigrate: 'Migrar desde Cursor / Copilot / Roo',
};

const pt: CompareTranslations = {
  metaTitle: 'Comparativo — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    'Posicionamento honesto (agosto 2026): Cortex é uma superfície de edição classe Cursor sobre o runtime OpenCode — o seu editor, a sua subscrição, o seu código na sua máquina. Sem fork, sem conta Cortex, sem markup de tokens, sem Docker.',
  note:
    'Os números mudam; confirme preços em cada site. A Cortex não vende tokens de IA — paga OpenCode (ou BYOK) diretamente.',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: 'Editor',
      cortex: 'O seu VS Code / fork compatível',
      cursor: 'Editor próprio (fork do VS Code)',
      devin: 'Desktop / command center da Cognition',
      zoo: 'Extensão VS Code (fork Roo/Cline)',
    },
    {
      feature: 'Runtime',
      cortex: 'OpenCode serve local (camada fina)',
      cursor: 'Agentes Cursor (local + cloud)',
      devin: 'Multi-agente via ACP (Devin/Codex/Claude/OpenCode)',
      zoo: 'Agente in-process (~70 deps)',
    },
    {
      feature: 'Faturação IA',
      cortex: 'O seu plano OpenCode / BYOK — sem markup Cortex',
      cursor: 'Subscrição Cursor ($20–200/mês)',
      devin: 'Subscrição Cognition ($20–200/mês)',
      zoo: 'Zoo Gateway com markup de tokens',
    },
    {
      feature: 'Conta',
      cortex: 'Só OpenCode (sem registo Cortex)',
      cursor: 'Conta Cursor obrigatória',
      devin: 'Conta Cognition obrigatória',
      zoo: 'Conta Zoo / gateway',
    },
    {
      feature: 'O código fica',
      cortex: 'Na sua máquina',
      cursor: 'Local + agentes cloud opcionais',
      devin: 'Desktop local + agentes cloud',
      zoo: 'Local + caminho gateway',
    },
    {
      feature: 'Fork / Docker',
      cortex: 'Sem fork · sem Docker obrigatório',
      cursor: 'Fork completo do editor',
      devin: 'Desktop de produto (não fork VS Code)',
      zoo: 'Fork de Roo/Cline · muitas vezes com Docker',
    },
    {
      feature: 'Rules / skills',
      cortex: 'Rules e skills .cursor + .cortex',
      cursor: '.cursor/rules e skills',
      devin: 'Políticas do produto',
      zoo: 'Rules / modes Roo/Cline',
    },
    {
      feature: 'Idiomas UI',
      cortex: '7 (en, es, pt, fr, de, ja, zh)',
      cursor: 'Locales do produto',
      devin: 'Locales do produto',
      zoo: '~18 locales',
    },
    {
      feature: 'Embeddings',
      cortex: 'Hash ou MiniLM local (opcional)',
      cursor: 'Índice proprietário',
      devin: 'Stack de contexto do produto',
      zoo: 'Qdrant + embeddings por API',
    },
  ],
  ctaDocs: 'Ler a documentação',
  ctaMigrate: 'Migrar do Cursor / Copilot / Roo',
};

const fr: CompareTranslations = {
  metaTitle: 'Comparatif — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    'Positionnement honnête (août 2026) : Cortex est une surface d’édition classe Cursor sur le runtime OpenCode — votre éditeur, votre abonnement, votre code sur votre machine. Pas de fork, pas de compte Cortex, pas de markup de tokens, pas de Docker.',
  note:
    'Les chiffres évoluent ; vérifiez les tarifs sur chaque site. Cortex ne vend pas de tokens IA — vous payez OpenCode (ou BYOK) directement.',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: 'Éditeur',
      cortex: 'Votre VS Code / fork compatible',
      cursor: 'Éditeur propre (fork VS Code)',
      devin: 'Desktop / command center Cognition',
      zoo: 'Extension VS Code (fork Roo/Cline)',
    },
    {
      feature: 'Runtime',
      cortex: 'OpenCode serve local (couche fine)',
      cursor: 'Agents Cursor (local + cloud)',
      devin: 'Multi-agent via ACP (Devin/Codex/Claude/OpenCode)',
      zoo: 'Agent in-process (~70 deps)',
    },
    {
      feature: 'Facturation IA',
      cortex: 'Votre plan OpenCode / BYOK — sans markup Cortex',
      cursor: 'Abonnement Cursor ($20–200/mois)',
      devin: 'Abonnement Cognition ($20–200/mois)',
      zoo: 'Zoo Gateway avec markup de tokens',
    },
    {
      feature: 'Compte',
      cortex: 'OpenCode seulement (pas d’inscription Cortex)',
      cursor: 'Compte Cursor requis',
      devin: 'Compte Cognition requis',
      zoo: 'Compte Zoo / gateway',
    },
    {
      feature: 'Le code reste',
      cortex: 'Sur votre machine',
      cursor: 'Local + agents cloud optionnels',
      devin: 'Desktop local + agents cloud',
      zoo: 'Local + chemin gateway',
    },
    {
      feature: 'Fork / Docker',
      cortex: 'Pas de fork · Docker non requis',
      cursor: 'Fork complet de l’éditeur',
      devin: 'Desktop produit (pas un fork VS Code)',
      zoo: 'Fork Roo/Cline · souvent Docker',
    },
    {
      feature: 'Rules / skills',
      cortex: 'Rules et skills .cursor + .cortex',
      cursor: '.cursor/rules et skills',
      devin: 'Politiques du produit',
      zoo: 'Rules / modes Roo/Cline',
    },
    {
      feature: 'Langues UI',
      cortex: '7 (en, es, pt, fr, de, ja, zh)',
      cursor: 'Locales du produit',
      devin: 'Locales du produit',
      zoo: '~18 locales',
    },
    {
      feature: 'Embeddings',
      cortex: 'Hash ou MiniLM local (optionnel)',
      cursor: 'Index propriétaire',
      devin: 'Stack de contexte du produit',
      zoo: 'Qdrant + embeddings API',
    },
  ],
  ctaDocs: 'Lire la documentation',
  ctaMigrate: 'Migrer depuis Cursor / Copilot / Roo',
};

const de: CompareTranslations = {
  metaTitle: 'Vergleich — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    'Ehrliche Positionierung (August 2026): Cortex ist eine Cursor-klasse Editing-Oberfläche auf dem OpenCode-Runtime — Ihr Editor, Ihr Abo, Ihr Code auf Ihrer Maschine. Kein Fork, kein Cortex-Konto, kein Token-Markup, kein Docker.',
  note:
    'Zahlen ändern sich; Preise auf den jeweiligen Sites prüfen. Cortex verkauft keine KI-Tokens — Sie zahlen OpenCode (oder BYOK) direkt.',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: 'Editor',
      cortex: 'Ihr VS Code / kompatibler Fork',
      cursor: 'Eigener Editor (VS-Code-Fork)',
      devin: 'Cognition Desktop / Command Center',
      zoo: 'VS-Code-Extension (Roo/Cline-Fork)',
    },
    {
      feature: 'Runtime',
      cortex: 'OpenCode serve lokal (dünne Schicht)',
      cursor: 'Cursor-Agents (lokal + Cloud)',
      devin: 'Multi-Agent via ACP (Devin/Codex/Claude/OpenCode)',
      zoo: 'In-process-Agent (~70 deps)',
    },
    {
      feature: 'KI-Abrechnung',
      cortex: 'Ihr OpenCode-Plan / BYOK — kein Cortex-Markup',
      cursor: 'Cursor-Abo ($20–200/Monat)',
      devin: 'Cognition-Abo ($20–200/Monat)',
      zoo: 'Zoo Gateway mit Token-Markup',
    },
    {
      feature: 'Konto',
      cortex: 'Nur OpenCode (keine Cortex-Anmeldung)',
      cursor: 'Cursor-Konto erforderlich',
      devin: 'Cognition-Konto erforderlich',
      zoo: 'Zoo-Konto / Gateway',
    },
    {
      feature: 'Code bleibt',
      cortex: 'Auf Ihrer Maschine',
      cursor: 'Lokal + optionale Cloud-Agents',
      devin: 'Lokales Desktop + Cloud-Agents',
      zoo: 'Lokal + Gateway-Pfad',
    },
    {
      feature: 'Fork / Docker',
      cortex: 'Kein Fork · kein Docker nötig',
      cursor: 'Vollständiger Editor-Fork',
      devin: 'Produkt-Desktop (kein VS-Code-Fork)',
      zoo: 'Fork von Roo/Cline · oft Docker-lastig',
    },
    {
      feature: 'Rules / skills',
      cortex: '.cursor + .cortex Rules & Skills',
      cursor: '.cursor/rules & skills',
      devin: 'Produkt-Policies',
      zoo: 'Roo/Cline Rules / Modes',
    },
    {
      feature: 'UI-Sprachen',
      cortex: '7 (en, es, pt, fr, de, ja, zh)',
      cursor: 'Produkt-Locales',
      devin: 'Produkt-Locales',
      zoo: '~18 Locales',
    },
    {
      feature: 'Embeddings',
      cortex: 'Lokaler Hash oder MiniLM (optional)',
      cursor: 'Proprietärer Index',
      devin: 'Produkt-Kontext-Stack',
      zoo: 'Qdrant + API-Embeddings',
    },
  ],
  ctaDocs: 'Dokumentation lesen',
  ctaMigrate: 'Migration von Cursor / Copilot / Roo',
};

const ja: CompareTranslations = {
  metaTitle: '比較 — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    '率直な位置づけ（2026年8月）: Cortex は OpenCode ランタイム上の Cursor 級編集サーフェス — あなたのエディタ、あなたのサブスク、あなたのマシン上のコード。フォークなし、Cortex アカウントなし、トークン markup なし、Docker 不要。',
  note:
    '数値は変わります。各製品サイトで料金を確認してください。Cortex は AI トークンを販売しません — OpenCode（または BYOK）に直接支払います。',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: 'エディタ',
      cortex: 'あなたの VS Code / 互換フォーク',
      cursor: '独自エディタ（VS Code フォーク）',
      devin: 'Cognition デスクトップ / コマンドセンター',
      zoo: 'VS Code 拡張（Roo/Cline フォーク）',
    },
    {
      feature: 'ランタイム',
      cortex: 'OpenCode ローカル serve（薄いレイヤ）',
      cursor: 'Cursor エージェント（ローカル + クラウド）',
      devin: 'ACP 経由のマルチエージェント（Devin/Codex/Claude/OpenCode）',
      zoo: 'インプロセスエージェント（~70 deps）',
    },
    {
      feature: 'AI 課金',
      cortex: 'あなたの OpenCode プラン / BYOK — Cortex markup なし',
      cursor: 'Cursor サブスク（$20–200/月）',
      devin: 'Cognition サブスク（$20–200/月）',
      zoo: 'トークン markup 付き Zoo Gateway',
    },
    {
      feature: 'アカウント',
      cortex: 'OpenCode のみ（Cortex 登録なし）',
      cursor: 'Cursor アカウント必須',
      devin: 'Cognition アカウント必須',
      zoo: 'Zoo アカウント / ゲートウェイ',
    },
    {
      feature: 'コードの所在',
      cortex: 'あなたのマシン上',
      cursor: 'ローカル + 任意のクラウドエージェント',
      devin: 'ローカルデスクトップ + クラウドエージェント',
      zoo: 'ローカル + ゲートウェイ経路',
    },
    {
      feature: 'フォーク / Docker',
      cortex: 'フォークなし · Docker 不要',
      cursor: 'エディタ全体のフォーク',
      devin: '製品デスクトップ（VS Code フォークではない）',
      zoo: 'Roo/Cline フォーク · Docker が多い',
    },
    {
      feature: 'Rules / skills',
      cortex: '.cursor + .cortex の rules & skills',
      cursor: '.cursor/rules & skills',
      devin: '製品固有のポリシー',
      zoo: 'Roo/Cline の rules / modes',
    },
    {
      feature: 'UI 言語',
      cortex: '7（en, es, pt, fr, de, ja, zh）',
      cursor: '製品 UI ロケール',
      devin: '製品 UI ロケール',
      zoo: '~18 ロケール',
    },
    {
      feature: 'Embeddings',
      cortex: 'ローカル hash または MiniLM（任意）',
      cursor: '独自インデックス',
      devin: '製品コンテキストスタック',
      zoo: 'Qdrant + API embeddings',
    },
  ],
  ctaDocs: 'ドキュメントを読む',
  ctaMigrate: 'Cursor / Copilot / Roo からの移行',
};

const zh: CompareTranslations = {
  metaTitle: '对比 — Cortex',
  title: 'Cortex vs Cursor vs Devin vs Zoo/Roo',
  intro:
    '诚实定位（2026 年 8 月）：Cortex 是建立在 OpenCode 运行时上的 Cursor 级编辑界面 — 你的编辑器、你的订阅、你机器上的代码。无 fork、无 Cortex 账号、无 token 加价、无需 Docker。',
  note:
    '数据会变化；请在各产品官网核对价格。Cortex 不出售 AI token — 你直接向 OpenCode（或 BYOK）付费。',
  headers: ['', 'Cortex', 'Cursor', 'Devin Desktop', 'Zoo / Roo'],
  rows: [
    {
      feature: '编辑器',
      cortex: '你的 VS Code / 兼容 fork',
      cursor: '自有编辑器（VS Code fork）',
      devin: 'Cognition 桌面 / 指挥中心',
      zoo: 'VS Code 扩展（Roo/Cline fork）',
    },
    {
      feature: '运行时',
      cortex: '本地 OpenCode serve（薄层）',
      cursor: 'Cursor 代理（本地 + 云）',
      devin: '经 ACP 的多代理（Devin/Codex/Claude/OpenCode）',
      zoo: '进程内代理（约 70 个依赖）',
    },
    {
      feature: 'AI 计费',
      cortex: '你的 OpenCode 方案 / BYOK — 无 Cortex 加价',
      cursor: 'Cursor 订阅（$20–200/月）',
      devin: 'Cognition 订阅（$20–200/月）',
      zoo: '带 token 加价的 Zoo Gateway',
    },
    {
      feature: '账号',
      cortex: '仅需 OpenCode（无需 Cortex 注册）',
      cursor: '需要 Cursor 账号',
      devin: '需要 Cognition 账号',
      zoo: 'Zoo 账号 / 网关',
    },
    {
      feature: '代码所在',
      cortex: '在你的机器上',
      cursor: '本地 + 可选云代理',
      devin: '本地桌面 + 云代理',
      zoo: '本地 + 网关路径',
    },
    {
      feature: 'Fork / Docker',
      cortex: '无 fork · 无需 Docker',
      cursor: '完整编辑器 fork',
      devin: '产品桌面（非 VS Code fork）',
      zoo: 'Roo/Cline fork · 常依赖 Docker',
    },
    {
      feature: 'Rules / skills',
      cortex: '.cursor + .cortex 规则与 skills',
      cursor: '.cursor/rules 与 skills',
      devin: '产品策略',
      zoo: 'Roo/Cline rules / modes',
    },
    {
      feature: '界面语言',
      cortex: '7 种（en, es, pt, fr, de, ja, zh）',
      cursor: '产品界面语言',
      devin: '产品界面语言',
      zoo: '约 18 种语言',
    },
    {
      feature: 'Embeddings',
      cortex: '本地 hash 或 MiniLM（可选）',
      cursor: '专有索引',
      devin: '产品上下文栈',
      zoo: 'Qdrant + API embeddings',
    },
  ],
  ctaDocs: '阅读文档',
  ctaMigrate: '从 Cursor / Copilot / Roo 迁移',
};

export const compareTranslations: Record<Lang, CompareTranslations> = {
  en,
  es,
  pt,
  fr,
  de,
  ja,
  zh,
};

export function getCompare(lang: Lang): CompareTranslations {
  return compareTranslations[lang] ?? compareTranslations.en;
}
