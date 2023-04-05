---
title: Flutter环境搭建
desc: 记录Flutter环境搭建流程
date: "2023-2-24 23:36"
---

[[toc]]

## 资源准备

能不能科学上网不太重要，基本上都有镜像，我此时的Flutter版本为`3.7.4`

- 准备<a target="_blank" href="https://docs.flutter.dev/get-started/install">Flutter SDK</a>*哪里下的无所谓这里还是推荐官网下载`zip`包*
  - 注意解压在<mark>权限较低的文件夹</mark>，不要在例如`Program Files`文件夹下，否则vscode会报个什么错
  - 将`bin`文件夹添加到环境变量
- 配置Flutter相关的代理
  - `FLUTTER_STORAGE_BASE_URL` `https://storage.flutter-io.cn`
  - `PUB_HOSTED_URL` `https://pub.flutter-io.cn`
- 准备`JDK`，关于JDK版本我完全不懂，听说用得最多的好像是`JDK8`，但是我下载用下来失败了，可能是版本太低，然后我下了个`JDK11`可以用，我是在<a href="https://repo.huaweicloud.com/java/jdk/" target="_blank">这里</a>下的，官网下载还得注册账号登录太🥛🖊啦，我选择放弃，同样解压把bin目录添加到环境变量，添加环境变量`JAVA_HOME`不是bin
- <a href="https://developer.android.com/studio" target="_blank">Android Studio</a>，我还是习惯用vscode开发，AS用来管理安卓相关的SDK和Device

## 开始安装

- 运行`doctor`命令，这会帮你下载`Dark SDK`等一些库和工具<br>*Flutter任何命令加上参数 `-v` 可以得到更详细的消息*
```
flutter doctor
```
- 根据提示安装一些东西可能有
  - 在AS中安装`Android SDK`、`commandline-tool`、`platform-tool`、`build-tool`...等，它会推荐你，默认就行
- 到这其实就差不多了

## 可能用得到的

```json
// vscode lunch.json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "dev",
      "request": "launch",
      "type": "dart",
      "program": "./lib/main.dart"
    },
  ]
}
```

切换flutter版本，打开vscode切换到你想要的版本的git tag，然后再运行一遍`flutter doctor`

卡在 *Running Gradle task 'assembleDebug'...* 属于正常现象，你可能得使用科学上网解决

## 尝试一种不用Android Studio的方法
https://www.androiddevtools.cn/
