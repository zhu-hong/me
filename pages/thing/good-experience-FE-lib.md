---
title: 编写一个小而美的前端库
desc: 记录从零开始编写一个使用体验好的前端库
date: "2023-4-17 14:50"
---

[[toc]]

## 序

什么是体验好的库，抛开功能不说，我认为体验好需要做到以下几点

+ 类型安全
+ 符合自觉
+ 函数即文档

我举个例子[pinia](https://pinia.vuejs.org)，我认为这是一个体验趋近😍完美的库，除了热更新问题（不知道现在有没有解决）

## 功能

我打算做一个关于二维码的VUE lib，工作中数次和二维码打交道，也算比较熟悉了

+ 提供组件直接渲染（svg or canvas）
+ 提供函数供自定义渲染
+ 支持VUE2/3

## 实现

+ 二维码生成算法使用[QR-Code-generator](https://github.com/nayuki/QR-Code-generator)，今天刚在GitHub发现的
+ 使用[vue-demi](https://github.com/vueuse/vue-demi)同时兼容VUE2/3

## 初始化

### npm

```sh
md qr
cd qr
npm init -y --scope=@<你的npm用户名> # 包名会是@<你的npm用户名>/qr，这样看起来逼格高点🌝
```

修改生成的package.json如下

```json
{
  "name": "@zhu-hong/qr",
  "version": "1.0.0",
  // 这个库的描述
  "description": "support Vue2&3 QR code library",
  // 别人在npm搜这些关键词就可能会搜到你的库
  "keywords": [
    "qr",
    "qrcode",
    "vue qr",
    "vue qrcode"
  ],
  "scripts": {
  },
  // 打包tree-shaking，表示完全无副作用
  "sideEffects": false,
  "author": {
    "name": "zhu-hong",
    "email": "zhxhyy@qq.com"
  },
  // npm取这个字段做仓库跳转
  "homepage": "https://github.com/zhu-hong/qr",
  "bugs": {
    "url": "https://github.com/zhu-hong/qr/issues",
    "email": "zhxhyy@qq.com"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/zhu-hong/qr.git"
  },
  "license": "MIT"
}
```

### 添加依赖

+ 使用`TS`编写项目，因为这样可以很方便得生成`dts`文件
+ 开发调试使用`vite`
+ 打包使用[unbuild](https://github.com/unjs/unbuild)，可以无需任何配置打包`TS`，并且生成`dts`文件，基于[rollup](https://rollupjs.org)

```sh
pnpm add vue vue-demi unbuild vite -D # 加上 -D 的包，开发者安装你这个库时，不会同时安装这些库
```

### 配置vue-demi

[vue-demi usage](https://github.com/vueuse/vue-demi#usage)

### 配置开发环境

这里不详述了

## 编码

```ts

```
