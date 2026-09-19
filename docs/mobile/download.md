# 下载与安装

## APK 下载

你可以直接从 GitHub Releases 页面下载最新版本的 APK：
[https://github.com/llz121517/mea-pet-mobile/releases](https://github.com/llz121517/mea-pet-mobile/releases)

## 手动编译与 Core 依赖

如果选择手动编译，你需要手动下载并配置 Live2D Cubism Core。

1.  前往 Live2D 官方网站下载 Cubism Core for Android。
2.  解压下载的压缩包，找到核心 `.aar` 文件。
3.  将 `.aar` 文件放入以下目录结构中：

```text
mea-pet-mobile/
└── app/
    └── libs/
        └── live2dcubismcore.aar
```

配置完成后即可正常执行 Gradle 构建流程。

::: info 下一步
[快速开始](./quickstart) | [配置指南](./config)
:::
