# 功能特性

## 回复、气泡与 TTS 时序

支持对以下 5 个字段进行协同渲染：
*   `display_text`: 显示文本
*   `voice_text`: 语音文本
*   `voice_language`: 语音语言
*   `mood`: 情绪
*   `tts_style`: TTS 风格

## 多语言语音

支持配置 GPT-SoVITS 的 `reference_audios`：
```json
{
  "reference_audios": {
    "zh": "path/to/zh.wav",
    "ja": "path/to/ja.wav"
  }
}
```
已从旧字段迁移，内置翻译服务池。

## 屏幕视觉

提供三种屏幕视觉模式，保障隐私：

| 模式 | 说明 |
|------|------|
| disabled | 禁用屏幕捕获 |
| inherit | 继承全局配置 |
| relay | 转发给其他 Agent 处理 |

## Companion MCP

内置 4 个工具，通过 127.0.0.1、Bearer Token、HTTPS 和 mTLS 保障安全：

| 工具名称 | 功能说明 |
|----------|----------|
| meapet.say | 让桌宠说话 |
| meapet.express | 更改表情 |
| meapet.get_state | 获取当前状态 |
| meapet.capture_screen | 捕获屏幕内容 |

::: tip Agent Link
支持无缝对接 Agent Link。
:::

## 本地缓存与隐私

*   **Timeline Retention**: 设定时间线保留期限
*   **Session Isolation**: 会话隔离机制
*   **Data Locations**: 数据保存在本地特定目录
*   **Logging Policy**: 严格的日志记录策略

## 自定义角色与立绘

*   `SYSTEM_PROMPT`: 角色系统提示词
*   `EXPRESSION_MAP`: 表情映射
*   `sprites naming`: 精灵图命名规范
*   `Live2D config`: Live2D 配置支持
*   `window_mask`: 窗口遮罩设置
*   `placement_anchor`: 放置锚点

::: info 下一步
[系统架构](./architecture) | [常见问题](./faq)
:::
