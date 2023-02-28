---
title: 代码片段
desc: 记录不想忘记的代码片段
date: 2023-2-28 21:19
update: 2023-2-28 22:44
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

> 来源 [聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css-zh)

<SvgInCanvas />