# 系统架构

## 项目结构

```text
├── pet.py               # 入口文件
├── meapet/              # 核心源码目录
│   ├── agent/           # Agent 连接逻辑
│   ├── direct/          # 直连模型逻辑
│   ├── conversation/    # 对话管理
│   ├── control/         # 状态与控制
│   ├── chat/            # 聊天 UI 逻辑
│   ├── desktop/         # 桌面窗口管理
│   ├── memory/          # 本地记忆系统
│   ├── tts/             # 语音合成系统
│   ├── vision/          # 屏幕视觉处理
│   ├── watcher/         # 状态监控
│   ├── config/          # 配置加载与管理
│   ├── wizard/          # 初始化向导
│   └── tests/           # 测试用例
└── design-system/       # 设计系统参考
```

## 开发与验证指令

```bash
# 安装依赖
pip install -r requirements.txt

# 运行桌宠
python pet.py

# 运行测试
pytest meapet/tests/
```

::: info 下一步
[配置指南](./config) | [常见问题](./faq)
:::
