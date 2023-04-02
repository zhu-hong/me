---
title: Snippet
desc: 记录不想忘记的代码片段
date: 2023-2-28 21:19
update: 2023-3-2 14:05
---

[[toc]]

## SVG Path 画圆公式

```html
<!-- CX/Y: 圆心坐标 -->
<!-- R: 圆半径 -->
<path
    d="
      M (CX - R), CY
      a R,R 0 1,0 (R * 2),0
      a R,R 0 1,0 -(R * 2),0
    "
/>
```

## SVG2URI
```ts
// https://bl.ocks.org/jennyknuth/222825e315d45a738ed9d6e04c7a88d0
function encodeSvg(svg: string) {
  return svg.replace('<svg', (~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
    .replace(/"/g, '\'')
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
}

const dataUri = `data:image/svg+xml;utf8,${encodeSvg(svg)}`
```

> 引用 [聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css-zh)

<SvgInCanvas />

## flutter

```sh
flutter pub cache repair # 整理pub包,重新下载所有使用过的版本
flutter pub cache clean # 删除pub包缓存
flutter create --platform=android --org=cn.zhudapao flutter_dev
flutter run --target=./lib/main_staging.dart
flutter build apk
flutter build apk --target-platform android-arm64
flutter run --dart-define-from-file=dev.json # 读取json注入环境变量
```

## 获取某年某月有多少天

```js
/**
 * 问的cahtgpt
 * 月份从1开始
*/
function getDates(year, month) {
  return new Date(year, month, 0).getDate()
}
```

## 卸载任何安卓应用
```sh
adb shell pm uninstall -k --user 0 com.miui.voiceassist # 卸载小爱同学
```
