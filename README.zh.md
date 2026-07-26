# Cortex

在 VS Code 中使用 AI 智能体编程 — 与 Cursor/Windsurf 相同的体验，无需切换编辑器。

**[文档](https://daniquir.github.io/cortex)** · **[扩展](https://marketplace.visualstudio.com/items?itemName=daniquir.cortex)**

## 什么是 Cortex？

Cortex 是一个 VS Code 扩展，连接 [OpenCode](https://github.com/opencode-ai/opencode) 提供以下功能：

- **完整的智能体工作流** — 计划 → 构建并使用检查清单，与 Cursor Agent 相同的流程
- **多供应商支持** — OpenAI、Anthropic、Google、xAI、OpenRouter 等
- **智能上下文** — 对代码库进行词法 + 语义搜索
- **行内差异对比** — 接受/拒绝建议并预览差异
- **聊天侧边栏** — 带工具使用时间线的完整历史记录
- **开源** — OpenCode 后端，无供应商锁定

## 安装

```bash
code --install-extension daniquir.cortex
```

或在 VS Code Marketplace 中搜索 "Cortex"。

## 开发

本仓库包含文档网站（Astro）。

```bash
npm install
npm run dev    # 本地开发服务器
npm run build  # 生产构建
```

## 许可证

MIT
