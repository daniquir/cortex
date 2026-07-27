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
        version: 'v0.1.0-beta.1',
        date: 'Jul 26, 2026',
        items: [
          'Sidebar chat with OpenCode integration',
          'Local workspace indexing (auto/manual)',
          'Lexical retrieval (TF·IDF + path boost)',
          'Context preview in UI',
          'Streaming replies via OpenCode SSE',
          'Session undo turn',
          'Keep / Undo / Review per changed file (diff before/after)',
          'Pluggable hash embeddings (default) with optional MiniLM',
          'Symbol-aware chunking (LSP DocumentSymbol)',
          '@-mention support for files, folders, terminals, and agents',
          '/slash commands (agent switch, provider connect, help)',
          'Beta expiration system with warning notifications',
        ],
      },
    ],
  },
  es: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.1.0-beta.1',
        date: '26 jul 2026',
        items: [
          'Chat lateral con integración de OpenCode',
          'Indexación local del workspace (auto/manual)',
          'Recuperación léxica (TF·IDF + path boost)',
          'Vista previa de contexto en la UI',
          'Respuestas en streaming vía OpenCode SSE',
          'Deshacer turno de sesión',
          'Keep / Undo / Review por archivo cambiado (diff antes/después)',
          'Embeddings hash enchufables (por defecto) con MiniLM opcional',
          'Chunking por símbolos (LSP DocumentSymbol)',
          'Soporte @-mention para archivos, carpetas, terminales y agentes',
          'Comandos /slash (cambio de agente, conectar proveedor, ayuda)',
          'Sistema de expiración beta con notificaciones de aviso',
        ],
      },
    ],
  },
  pt: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.1.0-beta.1',
        date: '26 jul 2026',
        items: [
          'Chat lateral com integração OpenCode',
          'Indexação local do workspace (auto/manual)',
          'Recuperação léxica (TF·IDF + path boost)',
          'Pré-visualização de contexto na UI',
          'Respostas em streaming via OpenCode SSE',
          'Desfazer turno da sessão',
          'Keep / Undo / Review por arquivo alterado (diff antes/depois)',
          'Embeddings hash plugáveis (padrão) com MiniLM opcional',
          'Chunking por símbolos (LSP DocumentSymbol)',
          'Suporte a @-mention para arquivos, pastas, terminais e agentes',
          'Comandos /slash (troca de agente, conectar provedor, ajuda)',
          'Sistema de expiração beta com notificações de aviso',
        ],
      },
    ],
  },
  fr: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.1.0-beta.1',
        date: '26 juil. 2026',
        items: [
          'Chat latéral avec intégration OpenCode',
          'Indexation locale du workspace (auto/manuel)',
          'Récupération lexicale (TF·IDF + path boost)',
          'Aperçu du contexte dans l\'UI',
          'Réponses en streaming via OpenCode SSE',
          'Annulation du tour de session',
          'Keep / Undo / Review par fichier modifié (diff avant/après)',
          'Embeddings hash enfichables (par défaut) avec MiniLM optionnel',
          'Découpage par symboles (LSP DocumentSymbol)',
          'Support @-mention pour fichiers, dossiers, terminaux et agents',
          'Commandes /slash (changement d\'agent, connexion fournisseur, aide)',
          'Système d\'expiration beta avec notifications d\'avertissement',
        ],
      },
    ],
  },
  de: {
    metaTitle: 'Changelog — Cortex',
    title: 'Changelog',
    entries: [
      {
        version: 'v0.1.0-beta.1',
        date: '26. Jul 2026',
        items: [
          'Sidebar-Chat mit OpenCode-Integration',
          'Lokale Workspace-Indexierung (auto/manuell)',
          'Lexikalische Retrieval (TF·IDF + Path-Boost)',
          'Kontextvorschau in der UI',
          'Streaming-Antworten über OpenCode SSE',
          'Session-Turn rückgängig machen',
          'Keep / Undo / Review pro geänderter Datei (Diff vorher/nachher)',
          'Austauschbare Hash-Embeddings (Standard) mit optionalem MiniLM',
          'Symbolbewusstes Chunking (LSP DocumentSymbol)',
          '@-Mention-Unterstützung für Dateien, Ordner, Terminals und Agents',
          '/slash-Befehle (Agent wechseln, Provider verbinden, Hilfe)',
          'Beta-Ablaufsystem mit Warnbenachrichtigungen',
        ],
      },
    ],
  },
  ja: {
    metaTitle: '変更履歴 — Cortex',
    title: '変更履歴',
    entries: [
      {
        version: 'v0.1.0-beta.1',
        date: '2026年7月26日',
        items: [
          'OpenCode統合のサイドバーチャット',
          'ローカルワークスペースインデックス（自動/手動）',
          'レキシカル検索（TF·IDF + パスブースト）',
          'UIでのコンテキストプレビュー',
          'OpenCode SSEによるストリーミング応答',
          'セッションターンの取り消し',
          '変更ファイルごとの Keep / Undo / Review（前後diff）',
          '差し替え可能なhash埋め込み（デフォルト）と任意のMiniLM',
          'シンボル対応チャンキング（LSP DocumentSymbol）',
          'ファイル、フォルダ、ターミナル、エージェントの@-mention対応',
          '/slashコマンド（エージェント切替、プロバイダー接続、ヘルプ）',
          '警告通知付きベータ期限切れシステム',
        ],
      },
    ],
  },
  zh: {
    metaTitle: '更新日志 — Cortex',
    title: '更新日志',
    entries: [
      {
        version: 'v0.1.0-beta.1',
        date: '2026年7月26日',
        items: [
          '集成 OpenCode 的侧边栏聊天',
          '本地工作区索引（自动/手动）',
          '词法检索（TF·IDF + 路径加权）',
          'UI 中的上下文预览',
          '通过 OpenCode SSE 流式回复',
          '会话回合撤销',
          '按变更文件 Keep / Undo / Review（前后 diff）',
          '可插拔 hash 嵌入（默认）与可选 MiniLM',
          '符号感知分块（LSP DocumentSymbol）',
          '支持文件、文件夹、终端与代理的 @-mention',
          '/slash 命令（切换代理、连接提供商、帮助）',
          '带警告通知的 Beta 过期系统',
        ],
      },
    ],
  },
};

export function getChangelog(lang: Lang): ChangelogTranslations {
  return changelogTranslations[lang] ?? changelogTranslations.en;
}
