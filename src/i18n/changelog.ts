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
        version: 'v0.1.0',
        date: 'Jul 27, 2026',
        items: [
          'Sidebar chat with OpenCode integration',
          'Local workspace indexing (auto/manual)',
          'Lexical retrieval (TF·IDF + path boost) with hash embeddings (optional MiniLM)',
          'Symbol-aware chunking (LSP DocumentSymbol)',
          'Context preview in UI',
          'Streaming replies via OpenCode SSE',
          'Session history browser and undo turn',
          'Keep / Undo / Review per changed file (diff before/after)',
          'Permission / question approval UI',
          'Ghost-text autocomplete via a fast no-tools OpenCode complete agent',
          'Manual autocomplete trigger (Ctrl/Cmd+Alt+\\) and Inline Edit (Ctrl/Cmd+Shift+I)',
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
        version: 'v0.1.0',
        date: '27 jul 2026',
        items: [
          'Chat lateral con integración de OpenCode',
          'Indexación local del workspace (auto/manual)',
          'Recuperación léxica (TF·IDF + path boost) con embeddings hash (MiniLM opcional)',
          'Chunking por símbolos (LSP DocumentSymbol)',
          'Vista previa de contexto en la UI',
          'Respuestas en streaming vía OpenCode SSE',
          'Historial de sesiones y deshacer turno',
          'Keep / Undo / Review por archivo cambiado (diff antes/después)',
          'UI de permisos / preguntas',
          'Autocompletado ghost-text con agente OpenCode complete sin tools',
          'Disparo manual de autocomplete (Ctrl/Cmd+Alt+\\) e Inline Edit (Ctrl/Cmd+Shift+I)',
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
        version: 'v0.1.0',
        date: '27 jul 2026',
        items: [
          'Chat lateral com integração OpenCode',
          'Indexação local do workspace (auto/manual)',
          'Recuperação léxica (TF·IDF + path boost) com embeddings hash (MiniLM opcional)',
          'Chunking por símbolos (LSP DocumentSymbol)',
          'Pré-visualização de contexto na UI',
          'Respostas em streaming via OpenCode SSE',
          'Histórico de sessões e desfazer turno',
          'Keep / Undo / Review por arquivo alterado (diff antes/depois)',
          'UI de permissões / perguntas',
          'Autocompletar ghost-text com agente OpenCode complete sem tools',
          'Disparo manual de autocomplete (Ctrl/Cmd+Alt+\\) e Inline Edit (Ctrl/Cmd+Shift+I)',
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
        version: 'v0.1.0',
        date: '27 juil. 2026',
        items: [
          'Chat latéral avec intégration OpenCode',
          'Indexation locale du workspace (auto/manuel)',
          'Récupération lexicale (TF·IDF + path boost) avec embeddings hash (MiniLM optionnel)',
          'Découpage par symboles (LSP DocumentSymbol)',
          'Aperçu du contexte dans l\'UI',
          'Réponses en streaming via OpenCode SSE',
          'Historique des sessions et annulation de tour',
          'Keep / Undo / Review par fichier modifié (diff avant/après)',
          'UI de permissions / questions',
          'Autocomplétion ghost-text via l\'agent OpenCode complete sans tools',
          'Déclenchement manuel de l\'autocomplete (Ctrl/Cmd+Alt+\\) et Inline Edit (Ctrl/Cmd+Shift+I)',
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
        version: 'v0.1.0',
        date: '27. Jul 2026',
        items: [
          'Sidebar-Chat mit OpenCode-Integration',
          'Lokale Workspace-Indexierung (auto/manuell)',
          'Lexikalische Retrieval (TF·IDF + Path-Boost) mit Hash-Embeddings (optional MiniLM)',
          'Symbolbewusstes Chunking (LSP DocumentSymbol)',
          'Kontextvorschau in der UI',
          'Streaming-Antworten über OpenCode SSE',
          'Session-Verlauf und Turn rückgängig machen',
          'Keep / Undo / Review pro geänderter Datei (Diff vorher/nachher)',
          'Permission- / Question-UI',
          'Ghost-Text-Autocomplete über schnellen OpenCode-complete-Agent ohne Tools',
          'Manueller Autocomplete-Trigger (Ctrl/Cmd+Alt+\\) und Inline Edit (Ctrl/Cmd+Shift+I)',
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
        version: 'v0.1.0',
        date: '2026年7月27日',
        items: [
          'OpenCode統合のサイドバーチャット',
          'ローカルワークスペースインデックス（自動/手動）',
          'レキシカル検索（TF·IDF + パスブースト）とhash埋め込み（任意のMiniLM）',
          'シンボル対応チャンキング（LSP DocumentSymbol）',
          'UIでのコンテキストプレビュー',
          'OpenCode SSEによるストリーミング応答',
          'セッション履歴とターンの取り消し',
          '変更ファイルごとの Keep / Undo / Review（前後diff）',
          '権限 / 質問 UI',
          'ツールなしの高速 OpenCode complete エージェントによるゴーストテキスト補完',
          '手動オートコンプリート起動（Ctrl/Cmd+Alt+\\）と Inline Edit（Ctrl/Cmd+Shift+I）',
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
        version: 'v0.1.0',
        date: '2026年7月27日',
        items: [
          '集成 OpenCode 的侧边栏聊天',
          '本地工作区索引（自动/手动）',
          '词法检索（TF·IDF + 路径加权）与 hash 嵌入（可选 MiniLM）',
          '符号感知分块（LSP DocumentSymbol）',
          'UI 中的上下文预览',
          '通过 OpenCode SSE 流式回复',
          '会话历史与回合撤销',
          '按变更文件 Keep / Undo / Review（前后 diff）',
          '权限 / 提问 UI',
          '通过无工具的快速 OpenCode complete 代理提供幽灵文本补全',
          '手动触发自动补全（Ctrl/Cmd+Alt+\\）与 Inline Edit（Ctrl/Cmd+Shift+I）',
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
