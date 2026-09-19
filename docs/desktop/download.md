# 下载安装

## 环境要求

- 推荐 **Python 3.10+** (建议 3.12)。

## 源码运行

你可以通过 Git 克隆仓库并在本地运行：

```bash
git clone https://github.com/suan-11/mea-pet-public.git
cd mea-pet-public
```

详细运行步骤请参考 [快速开始](./quickstart.md)。

## Windows 打包版本

本项目支持使用 PyInstaller 打包成单目录（onedir）的可执行程序。

### 便携版目录结构

打包后的目录结构包含主要的库文件与用户数据：

| 目录/文件 | 说明 |
| --- | --- |
| `_internal/` | 包含运行时的依赖和打包后的库文件 |
| `MeaPet.exe` | 启动程序 |
| `config.json` | 配置文件（运行后生成） |
| `data/` | 用户数据，包括 SQLite 数据库 |
| `logs/` | 运行日志 |

### 支持的 TTS 引擎

打包版本默认集成了多种 TTS 引擎以满足不同的语音合成需求：
- **VITS**
- **MiMo**
- **GPT-SoVITS**

::: danger 安全提示
在分发或公开你的应用前，请**绝不要**将包含 API Key 的 `config.json` 文件一并发布。确保 `config.json` 被加入到 `.gitignore` 中。
:::

::: info 关于 mea-pet 依赖
某些特性可能需要安装私有的 `mea-pet` wheel 包。
:::

## 下一步

安装完成后，请查看 [快速开始](./quickstart.md) 来运行和配置你的桌宠。
