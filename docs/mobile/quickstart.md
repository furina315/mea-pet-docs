# 快速开始

## 环境与要求

| 项目 | 要求 |
|------|------|
| 系统版本 | Android 8.0+ |
| 聊天后端 | OpenAI 兼容 API |
| 依赖项 | Live2D Cubism Core (开发需下载) |
| 编译环境 | JDK 21+ / Android SDK 36+ / Gradle |

## 方式一：从 Releases 下载（推荐）

访问 [GitHub Releases](https://github.com/llz121517/mea-pet-mobile/releases/latest) 页面下载编译好的 APK 并安装。

## 方式二：手动编译

如果你希望自行修改代码或进行贡献，请按照以下步骤编译：

1.  克隆仓库：
    ```bash
    git clone https://github.com/llz121517/mea-pet-mobile.git
    ```
2.  下载 Live2D Cubism Core：
    [Live2D 官方下载页](https://www.live2d.com/download/cubism-sdk/download-java/) 下载 **Cubism 5 Java SDK**
3. 解压后找到 `Core/android/Live2DCubismCore.aar`并将 `Live2DCubismCore.aar` 复制到本项目的 `app/libs/` 目录
4.  编译并安装：
    ```bash
    ./gradlew assembleDebug
    adb install -r app/build/outputs/apk/debug/app-debug.apk
    ```

::: info 下一步
[配置说明](./config)
:::
