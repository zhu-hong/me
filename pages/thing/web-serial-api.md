---
title: Web Serial API
desc: 探索Web Serial API的简易使用，web网站与硬件设备交互
date: 2023-3-15 14:56
update: 2023-3-23 11:18
---

[[toc]]

## 序言

最近做web开发有这么一个需求，需要获取扫码盒子扫描到的内容进行业务处理，于是接触到了`Web Serial API`，在这里简单得记录下使用方法

## Web Serial API简介

Web Serial API 提供了一种让网站读取和写入串行设备的方式。这些设备可以通过串口连接，也可以是模拟串口的 USB 或蓝牙设备

理解一下这段话就知道可以利用这个API让web网站与硬件设备来进行交互，就是兼容性不太好，`Chrome 89`开始支持

## 注意事项⚠️

连接硬件的操作必须由用户发起，将此函数绑定在元素的click事件上

此API只有在`https`或`localhost`下有用，不安全的环境下`navigator.serial`为`undefined`

## 代码


```js
let reader = null
let port = null
let conned = false

const connBtn = document.getElementById('conn')
const disconnBtn = document.getElementById('disconn')

connBtn.addEventListener('click', bindlisten)
disconnBtn.addEventListener('click', unlisten)

navigator.serial.addEventListener('disconnect', unlisten)

function bindlisten() {
  if(conned) return

  listen()
}

async function listen() {
  if(!("serial" in navigator)) return

  if(!port) {
    // 请求连接
    port = await navigator.serial.requestPort()
  }
  
  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/SerialPort/open#parameters
   * 建立一个通信通道，配置见链接，可以关注一下`bufferSize`
   */
  await port.open({ baudRate: 9600 })
  conned = true

  // 读取设备发来的信息
  reader = port.readable.getReader()

  while (port.readable) {
    const { value, done } = await reader.read()
    if (done) {
      reader.releaseLock()
      break
    }

    let string = ''
    for (let i = 0; i < value.length; i++) {
      string += String.fromCharCode(value[i])
    }
    console.log(string)

    // 释放串口 避免buffersize溢出导致读取的数据分两次读取导致断层 未找到释放buffer的方法
    await reader.cancel()
    await port.close()
    listen()
    break
  }
}

async function unlisten() {
  if(port === null) return

  await reader.cancel()
  await port.close()
  port = null
  reader = null

  conned = false
}
```
