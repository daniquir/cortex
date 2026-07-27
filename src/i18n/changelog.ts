import type { Lang } from './translations';

export interface ChangelogTranslations {
  metaTitle: string;
  title: string;
  entries: { version: string; date: string; items: string[] }[];
}

export const changelogTranslations: Record<Lang, ChangelogTranslations> = {
  en: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.3',
        date: 'Jul 2026',
        items: [
          'Plan → Build workflow (Cursor-like)',
          'Saved plans with checklists',
          'Multi-provider auth via OpenCode',
          'Inline diff acceptance',
          'Semantic + lexical context search',
        ],
      },
      {
        version: 'v0.2',
        date: 'Jun 2026',
        items: [
          'Chat sidebar with streaming',
          'Tool usage timeline',
          'Context blocks (@mentions)',
        ],
      },
      {
        version: 'v0.1',
        date: 'May 2026',
        items: [
          'Initial release',
          'Basic chat with OpenCode',
          'Multi-provider support',
        ],
      },
    ],
  },
  es: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.3',
        date: 'Jul 2026',
        items: [
          'Workflow Plan → Build (estilo Cursor)',
          'Planes guardados con checklists',
          'Auth multi-proveedor vía OpenCode',
          'Aceptación de diffs inline',
          'Búsqueda de contexto semántica + léxica',
        ],
      },
      {
        version: 'v0.2',
        date: 'Jun 2026',
        items: [
          'Chat lateral con streaming',
          'Timeline de uso de herramientas',
          'Bloques de contexto (@mentions)',
        ],
      },
      {
        version: 'v0.1',
        date: 'May 2026',
        items: [
          'Lanzamiento inicial',
          'Chat básico con OpenCode',
          'Soporte multi-proveedor',
        ],
      },
    ],
  },
  pt: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.3',
        date: 'Jul 2026',
        items: [
          'Workflow Plan → Build (estilo Cursor)',
          'Planos salvos com checklists',
          'Auth multi-provedor via OpenCode',
          'Aceitação de diffs inline',
          'Busca de contexto semântica + léxica',
        ],
      },
      {
        version: 'v0.2',
        date: 'Jun 2026',
        items: [
          'Chat lateral com streaming',
          'Timeline de uso de ferramentas',
          'Blocos de contexto (@mentions)',
        ],
      },
      {
        version: 'v0.1',
        date: 'May 2026',
        items: [
          'Lançamento inicial',
          'Chat básico com OpenCode',
          'Suporte multi-provedor',
        ],
      },
    ],
  },
  fr: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.3',
        date: 'Jul 2026',
        items: [
          'Workflow Plan → Build (style Cursor)',
          'Plans sauvegardés avec checklists',
          'Auth multi-fournisseur via OpenCode',
          'Acceptation des diffs inline',
          'Recherche de contexte sémantique + lexicale',
        ],
      },
      {
        version: 'v0.2',
        date: 'Jun 2026',
        items: [
          'Chat latéral avec streaming',
          'Timeline d\'utilisation des outils',
          'Blocs de contexte (@mentions)',
        ],
      },
      {
        version: 'v0.1',
        date: 'May 2026',
        items: [
          'Version initiale',
          'Chat basique avec OpenCode',
          'Support multi-fournisseur',
        ],
      },
    ],
  },
  de: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.3',
        date: 'Jul 2026',
        items: [
          'Plan → Build Workflow (Cursor-ähnlich)',
          'Gespeicherte Pläne mit Checklisten',
          'Multi-Anbieter-Auth über OpenCode',
          'Inline-Diff-Annahme',
          'Semantische + lexikalische Kontextsuche',
        ],
      },
      {
        version: 'v0.2',
        date: 'Jun 2026',
        items: [
          'Chat-Sidebar mit Streaming',
          'Tool-Nutzungs-Timeline',
          'Kontextblöcke (@mentions)',
        ],
      },
      {
        version: 'v0.1',
        date: 'May 2026',
        items: [
          'Erstveröffentlichung',
          'Basis-Chat mit OpenCode',
          'Multi-Anbieter-Unterstützung',
        ],
      },
    ],
  },
  ja: {
    metaTitle: '変更履歴 — Cortex',
    title: '変更履歴',
    entries: [
      {
        version: 'v0.3',
        date: '2026年7月',
        items: [
          'Plan → Build ワークフロー（Cursor風）',
          'チェックリスト付き保存プラン',
          'OpenCode経由のマルチプロバイダー認証',
          'インラインdiffの承認',
          'セマンティック＋レキシカルコンテキスト検索',
        ],
      },
      {
        version: 'v0.2',
        date: '2026年6月',
        items: [
          'ストリーミング対応チャットサイドバー',
          'ツール使用タイムライン',
          'コンテキストブロック（@mentions）',
        ],
      },
      {
        version: 'v0.1',
        date: '2026年5月',
        items: [
          '初回リリース',
          'OpenCodeによる基本チャット',
          'マルチプロバイダー対応',
        ],
      },
    ],
  },
  zh: {
    metaTitle: '更新日志 — Cortex',
    title: '更新日志',
    entries: [
      {
        version: 'v0.3',
        date: '2026年7月',
        items: [
          'Plan → Build 工作流（类似 Cursor）',
          '带清单的已保存计划',
          '通过 OpenCode 的多提供商认证',
          '内联差异接受',
          '语义 + 词法上下文搜索',
        ],
      },
      {
        version: 'v0.2',
        date: '2026年6月',
        items: [
          '带流式传输的聊天侧边栏',
          '工具使用时间线',
          '上下文块（@mentions）',
        ],
      },
      {
        version: 'v0.1',
        date: '2026年5月',
        items: [
          '首次发布',
          '基于 OpenCode 的基础聊天',
          '多提供商支持',
        ],
      },
    ],
  },
};

export function getChangelog(lang: Lang): ChangelogTranslations {
  return changelogTranslations[lang] ?? changelogTranslations.en;
}
