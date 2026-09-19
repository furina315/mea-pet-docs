# 快速开始

## 环境与要求

| 项目 | 要求 |
|------|------|
| 系统版本 | Android 8.0+ |
| 聊天后端 | OpenAI 兼容 API |
| 依赖项 | Live2D Cubism Core (开发需下载) |
| 编译环境 | JDK 21+ / Android SDK 36+ / Gradle |

## 方式一：从 Releases 下载（推荐）

最快捷的方式是直接从 GitHub Releases 页面下载编译好的 APK 并安装。

## 方式二：手动编译

如果你希望自行修改代码或进行贡献，请按照以下步骤编译：

1.  克隆仓库：
    ```bash
    git clone https://github.com/llz121517/mea-pet-mobile.git
    ```
2.  下载 Live2D Cubism Core：
    请前往官方网站下载适用于 Android 的 Core `.aar` 文件，并放置到指定目录（详情见下载说明）。
3.  编译并安装：
    ```bash
    ./gradlew assembleDebug
    adb install -r app/build/outputs/apk/debug/app-debug.apk
    ```

::: info 下一步
[配置指南](./config) | [下载与安装](./download)
:::
