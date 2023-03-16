---
title: Web Serial API
desc: 探索Web Serial API的简易使用，web网站与硬件设备交互
date: 2023-3-15 14:56
---

[[toc]]

## 序言

最近做web开发有这么一个需求，需要获取扫码盒子扫描到的内容进行业务处理，于是接触到了`Web Serial API`，在这里简单得记录下使用方法

## Web Serial API简介

Web Serial API 提供了一种让网站读取和写入串行设备的方式。这些设备可以通过串口连接，也可以是模拟串口的 USB 或蓝牙设备

理解一下这段话就知道可以利用这个API让web网站与硬件设备来进行交互，就是兼容性不太好，`Chrome 89`开始支持

## 注意事项

此API只有在`https`和`localhost`下有用

## 连接硬件

连接硬件的操作必须由用户发起，将此函数绑定在元素的click事件上

```js
// 判断一下兼容性
async function listen() {
  if(!("serial" in navigator)) return;

  // 请求连接
  const port = await navigator.serial.requestPort()

  // 指定一个正的、非零的值，表示串行通信应该建立的波特率。
  await this.port.open({ baudRate: 9600 })

  
}
```
