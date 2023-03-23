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
flutter pub cache repair # 整理pub包
flutter create --platform=android flutter_dev # 创建指定平台的应用程序
flutter run --target=./lib/main_staging.dart -v # 运行指定入口文件
flutter build apk # 打包apk
```