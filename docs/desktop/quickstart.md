# 快速开始

桌宠需要 `Python 3.10` 或更高版本（项目默认使用 3.12）。由于依赖兼容性限制，使用本地 VITS 时建议使用 `Python 3.10-3.12`。

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
`live2d-py` 是可选依赖；不可用时会回退到 PNG。预编译包可从 [EasyLive2D/live2d-py](https://github.com/EasyLive2D/live2d-py) 获取。
:::

::: info
配置向导在首次运行后，可以通过右键菜单再次打开进行修改。
:::

如果在运行过程中遇到问题，请参考 [常见问题](./faq.md) 页面。

## 基础操作

| 操作 | 效果 |
|------|------|
| 按住左键拖动 | 移动桌宠 |
| 双击 | 打开聊天输入框 |
| 拖动头部区域 | 触发摸头互动 |
| 右键 | 打开设置、时间线、状态、渲染、待机和退出菜单 |
| 点击回复气泡 | 在内容仍处于近期缓存时打开该轮完整回复 |
| `Esc` | 关闭输入框或面板 |

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
