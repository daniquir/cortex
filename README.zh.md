# Cortex

Cursor 与 Windsurf 的代理体验——在你自己的 VS Code 中，由你的 OpenCode 订阅驱动。

**[文档](https://daniquir.github.io/cortex)** · **[扩展](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent)**

## 什么是 Cortex？

Cortex 是一个将 [OpenCode](https://opencode.ai) 作为代理运行时集成到编辑器中的 VS Code 扩展：

- **完整的代理式工作流** — 带清单的 Plan → Build，与 Cursor Agent 相同的流程
- **你的 OpenCode 模型** — 选择 OpenCode 订阅中可用的任意模型
- **智能上下文** — 对代码库进行词法 + 语义搜索
- **内联差异** — 接受/拒绝建议并预览差异
- **右侧编辑器面板中的聊天** — 历史记录、工具时间线、并行标签
- **你的编辑器** — VS Code 或任何兼容分支；OpenCode 账单独立于 Cortex

## 安装

从 [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=cortex-labs.cortex-agent) 或 [Open VSX](https://open-vsx.org/)：

```bash
code --install-extension cortex-labs.cortex-agent
# 或
ovsx install cortex-labs.cortex-agent
```

或在扩展中搜索 **Cortex Agent**。

## 开发

本仓库包含文档网站（Astro）。

```bash
npm install
npm run dev    # 本地开发服务器
npm run build  # 生产构建
```

## 许可证

VS Code 扩展 **Cortex Agent** 为专有软件。源代码非开源，亦未授权公开再分发。

本仓库仅托管公开网站与文档。
