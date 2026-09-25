# MeaPet 桌面端项目介绍

MeaPet 是一款以 Windows 为主要平台、兼容 Linux 的 PyQt5 透明桌面宠物。它将角色立绘、AI 对话、语音合成、屏幕视觉、SQLite 记忆和好感度整合在一个桌面前端中，支持 Live2D 和 PNG 两种渲染方式。

## 当前功能

| 功能 | 说明 |
|------|------|
| 回复后端 | 直连模型 API 或 Agent；同时只启用一种，不自动回退 |
| 直连协议 | 通过 HTTP 流式传输支持 Ollama Chat、OpenAI Chat/Responses、Anthropic Messages |
| Agent | 通过 WebSocket 支持 Hermes TUI Gateway、OpenClaw Gateway v4 或自定义 Agent Link v1 |
| 显示 | 未启用 TTS 时流式显示文本气泡；启用 TTS 时等待音频生成，再同步显示气泡并播放 |
| 多段回复 | 每段回复分别包含气泡、情绪、朗读文本、语言和 TTS 风格 |
| 语音 | 支持 MiMo 云端 TTS、本地 GPT-SoVITS、本地 VITS；GPT-SoVITS 支持按语言配置参考音频 |
| 视觉 | 可禁用、继承主模型，或通过独立视觉模型中继 |
| 反向控制 | 通过 Companion MCP 或同一 Agent Link 连接共享前端工具 |
| 本地数据 | SQLite 记忆、好感度，以及按后端和会话隔离的对话时间线 |
| 渲染 | Live2D 动态模型与 PNG 差分立绘，可在运行时切换 |


## 设计理念

项目的核心设计理念是**清晰的职责边界**：将底层的数据处理、模型交互等逻辑与界面展示层分离，保持系统的高扩展性和稳定性。

## 技术栈

- **Python**: 3.10+
- **UI 框架**: PyQt5
- **数据库**: SQLite
- **动画渲染**: Live2D

::: info 下一步
- 了解移动版，请访问 [移动端文档](/mobile/)
- 想要尝试运行？请查看 [快速开始](./quickstart.md)
- 需要打包或部署？请阅读 [下载安装](./download.md)
- 探索更多特性，请查看 [功能详解](./features.md)
:::