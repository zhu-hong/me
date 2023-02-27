---
title: "代码片段"
description: "一些实用代码片段"
pubDate: "2023-2-27 20:17"

setup: |
  import SvgInCanvas from '../../components/SvgInCanvas.astro'
---

## Table of contents

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
<SvgInCanvas></SvgInCanvas>