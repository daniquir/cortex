# Cortex

CursorやWindsurfと同じエージェント体験を、自分のVS Codeで — OpenCodeサブスクリプションで動かします。

**[ドキュメント](https://daniquir.github.io/cortex)** · **[拡張機能](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## Cortex とは？

Cortex は [OpenCode](https://opencode.ai) をアジェンティックランタイムとしてエディタに統合する VS Code 拡張機能です：

- **完全なアジェンティックワークフロー** — チェックリスト付き Plan → Build、Cursor Agent と同じフロー
- **あなたの OpenCode モデル** — OpenCode サブスクリプションで利用可能な任意のモデルを選択
- **スマートコンテキスト** — コードベースに対するレキシカル＋セマンティック検索
- **インラインdiff** — 差分プレビュー付きで提案を承認/却下
- **右側エディタパネルのチャット** — 履歴、ツールタイムライン、並列タブ；プロジェクトフォルダーの有無どちらでも可（一般的な質問はホーム）
- **OpenCode テーマ + 通知** — チャット内の Desktop テーマ、任意の通知とサウンド
- **あなたのエディタ** — VS Code または互換フォーク；OpenCode の課金は Cortex の外

## インストール

[VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) または [Open VSX](https://open-vsx.org/) から：

```bash
code --install-extension cortex-labs.cortex-agent
# または
ovsx install cortex-labs.cortex-agent
```

または拡張機能で **Cortex Agent** を検索してください。初回起動：OpenCode CLI を入れ、オンボーディングまたは Connect で API key を貼り付け（サーバー未起動でも OpenCode のローカル認証に保存されます）。

## 開発

このリポジトリはドキュメントサイト（Astro）を含んでいます。

```bash
npm install
npm run dev    # ローカル開発サーバー
npm run build  # プロダクションビルド
```

## ライセンス

VS Code拡張機能 **Cortex Agent** はプロプライエタリソフトウェアです。ソースコードはオープンソースではなく、公開再配布のライセンスもありません。

このリポジトリは公開ウェブサイトとドキュメントのみをホストします。
