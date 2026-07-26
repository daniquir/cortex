# Cortex

VS Code での AI エージェント開発 — Cursor/Windsurf と同じエクスペリエンス、エディタを切り替えずに。

**[ドキュメント](https://daniquir.github.io/cortex)** · **[エクステンション](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## Cortex とは？

Cortex は [OpenCode](https://github.com/opencode-ai/opencode) に接続する VS Code 拡張機能で、以下を提供します：

- **完全なエージェントワークフロー** — チェックリストを使った計画 → 構築、Cursor Agent と同じフロー
- **マルチプロバイダー** — OpenAI、Anthropic、Google、xAI、OpenRouter など
- **スマートコンテキスト** — コードベースに対する語義的 + 意味的検索
- **インライン差分** — 差分プレビュー付きで提案を承認/拒否
- **チャットサイドバー** — ツール使用タイムライン付きの完全な履歴
- **オープンソース** — OpenCode バックエンド、ベンダーロックインなし

## インストール

```bash
code --install-extension daniquir.cortex
```

または VS Code Marketplace で「Cortex」を検索してください。

## 開発

このリポジトリはドキュメントサイト（Astro）を含んでいます。

```bash
npm install
npm run dev    # ローカル開発サーバー
npm run build  # プロダクションビルド
```

## ライセンス

MIT
