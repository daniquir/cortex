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
        version: 'v0.1.1',
        date: 'Jul 27, 2026',
        items: [
          'Open VSX install CTA on the landing and install docs',
          'Marketplace / Open VSX listing points to the public cortex repo (not the private source)',
          'End-user README only; proprietary license (source not open source)',
          'Marketplace gallery icon and banner',
          'Icons for all menu items in the "More" menu (compact, undo, reindex, MCP/skills, remember, rules, plans, background agent, language, OpenCode)',
          'Flag emojis for each language in the language submenu and language button',
        ],
      },
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
        version: 'v0.1.1',
        date: '27 jul 2026',
        items: [
          'CTA de instalación Open VSX en la landing y docs de install',
          'La ficha de Marketplace / Open VSX apunta al repo público cortex (no al código privado)',
          'README solo para usuarios finales; licencia propietaria (el código no es open source)',
          'Icono y banner de la galería del Marketplace',
          'Iconos en todas las opciones del menú "Más" (compactar, deshacer, reindexar, MCP/skills, recordar, reglas, planes, agente en segundo plano, idioma, OpenCode)',
          'Emojis de bandera para cada idioma en el submenu de idiomas y el botón de idioma',
        ],
      },
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
        version: 'v0.1.1',
        date: '27 jul 2026',
        items: [
          'CTA de instalação Open VSX na landing e docs de install',
          'A listagem Marketplace / Open VSX aponta para o repo público cortex (não o código privado)',
          'README só para usuários finais; licença proprietária (código não é open source)',
          'Ícone e banner da galeria do Marketplace',
          'Ícones para todos os itens do menu "Mais" (compactar, desfazer, reindexar, MCP/skills, lembrar, regras, planos, agente em segundo plano, idioma, OpenCode)',
          'Emojis de bandeira para cada idioma no submenu de idiomas e no botão de idioma',
        ],
      },
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
        version: 'v0.1.1',
        date: '27 juil. 2026',
        items: [
          'CTA d\'installation Open VSX sur la landing et les docs d\'install',
          'La fiche Marketplace / Open VSX pointe vers le dépôt public cortex (pas le code privé)',
          'README réservé aux utilisateurs finaux ; licence propriétaire (le code n\'est pas open source)',
          'Icône et bannière de la galerie Marketplace',
          'Icônes pour tous les éléments du menu "Plus" (compacter, annuler, réindexer, MCP/skills, mémoriser, règles, plans, agent en arrière-plan, langue, OpenCode)',
          'Emojis de drapeau pour chaque langue dans le sous-menu langue et le bouton langue',
        ],
      },
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
        version: 'v0.1.1',
        date: '27. Jul 2026',
        items: [
          'Open-VSX-Install-CTA auf Landing und Install-Docs',
          'Marketplace- / Open-VSX-Eintrag verweist auf das öffentliche cortex-Repo (nicht den privaten Code)',
          'README nur für Endnutzer; proprietäre Lizenz (Quellcode nicht Open Source)',
          'Marketplace-Galerie-Icon und Banner',
          'Icons für alle Menüeinträge im "Mehr"-Menü (komprimieren, rückgängig, neu indexieren, MCP/Skills, merken, Regeln, Pläne, Hintergrundagent, Sprache, OpenCode)',
          'Flaggen-Emojis für jede Sprache im Sprachuntermenü und auf der Sprachschaltfläche',
        ],
      },
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
        version: 'v0.1.1',
        date: '2026年7月27日',
        items: [
          'ランディングとインストール docs に Open VSX インストール CTA を追加',
          'Marketplace / Open VSX の掲載先を公開 cortex リポジトリに変更（非公開ソースではない）',
          'エンドユーザー向け README のみ；プロプライエタリライセンス（ソースはオープンソースではない）',
          'Marketplace ギャラリーのアイコンとバナー',
          '「その他」メニューの全アイテムにアイコンを追加（圧縮、取り消し、再インデックス、MCP/skills、記憶、ルール、プラン、バックグラウンドエージェント、言語、OpenCode）',
          '言語サブメニューと言語ボタンに各言語の国旗エモジを追加',
        ],
      },
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
        version: 'v0.1.1',
        date: '2026年7月27日',
        items: [
          '落地页与安装文档增加 Open VSX 安装 CTA',
          'Marketplace / Open VSX 列表指向公开 cortex 仓库（非私有源码）',
          '仅面向最终用户的 README；专有许可（源码非开源）',
          'Marketplace 图库图标与横幅',
          '为"更多"菜单中的所有选项添加图标（压缩、撤销、重新索引、MCP/skills、记忆、规则、计划、后台代理、语言、OpenCode）',
          '在语言子菜单和语言按钮中为每种语言添加国旗表情符号',
        ],
      },
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
