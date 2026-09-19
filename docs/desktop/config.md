# 配置指南

`config.json` 是唯一的户配置文件，`config.example.json` 是模板。

## 极简配置示例

```json
{
  "llm": {
    "provider": "openai",
    "protocol": "openai",
    "api_base": "https://api.openai.com/v1",
    "model": "gpt-4",
    "api_key": "$OPENAI_API_KEY"
  },
  "vision": {
    "mode": "inherit"
  },
  "tts": {
    "provider": "edge"
  },
  "ui": {
    "theme": "light"
  }
}
```

## 密钥与环境变量

环境变量优先级高于 `config.json`，且配置文件支持 `$ENV_VAR` 占位符。

| 环境变量 | 说明 |
|----------|------|
| OPENAI_API_KEY | OpenAI API 密钥 |
| ANTHROPIC_API_KEY | Anthropic API 密钥 |
| MEAPET_TTS_URL | 自定义 TTS 接口地址 |

## 回复后端

### 直连模型 API

支持通过兼容协议直接连接大模型 API。

*   **provider**: 服务商（例如：openai, anthropic）
*   **protocol**: 协议（例如：openai, anthropic）
*   **api_base**: API 地址
*   **model**: 模型名称
*   **api_key**: API 密钥

| 服务商 | API 地址示例 |
|--------|--------------|
| OpenAI | `https://api.openai.com/v1` |
| DeepSeek | `https://api.deepseek.com/v1` |

### Agent 模式

支持通过网关与外部 Agent 连接：
*   **Hermes TUI Gateway**
*   **OpenClaw Gateway v4**
*   **Agent Link v1**

使用 WebSocket 进行连接与会话管理。

::: info 下一步
[功能特性](./features) | [系统架构](./architecture)
:::
