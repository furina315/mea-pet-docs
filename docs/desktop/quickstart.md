# 快速开始

本项目推荐运行环境为 **Python 3.10+** (项目默认 3.12)，如果需要使用 VITS 等功能，建议使用 Python 3.10-3.12。

## 运行桌宠

### Windows
双击 `启动桌宠.bat` 或者手动运行：
```bash
python setup_wizard.py && python pet.py
```

### Linux
```bash
pip install -r linux_requirements.txt
python setup_wizard.py
QT_QPA_PLATFORM=xcb python pet.py
```

::: tip
`live2d-py` 是可选依赖。如果你需要 Live2D 动画支持，需要安装此库。
:::

::: info
配置向导在首次运行后，可以通过右键菜单再次打开进行修改。
:::

如果在运行过程中遇到问题，请参考 [常见问题](./faq.md) 页面。

## 基础操作

| 动作 | 效果 |
| --- | --- |
| 按住左键拖动 | 移动宠物位置 |
| 双击 | 打开聊天窗口 |
| 拖动头部 | 互动摸头等动作 |
| 右键 | 打开快捷菜单 |
| 点击回复气泡 | 关闭当前回复气泡 |
| Esc (焦点在窗口时) | 隐藏当前弹窗 |

::: warning
关闭主窗口只会隐藏桌宠，**请使用托盘菜单退出程序**。
:::

## 开发与验证

我们提供了一系列命令用于开发测试：

```bash
# 运行单元测试
pytest

# 代码格式化和规范检查
ruff check .

# 编译所有 Python 文件以检查基础语法错误
python -m compileall .
```

## 下一步

- [配置说明](./config.md)
- [功能详解](./features.md)
