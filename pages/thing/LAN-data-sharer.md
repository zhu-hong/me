---
title: 我做了个局域网共享数据应用
date: "2023-5-27 15:36"
---

## 为什么要做这个呢?

我经常有怎么一个需求,就是把电脑上的文件传到手机上或者把手机上的文件传到电脑上,大多数人应该是使用以下某种方式
+ 使用微信或者QQ这种同步了桌面端和移动端的应用
+ 蓝牙
+ 使用数据线连接手机电脑

大多数人应该都会选择第一种,确实挺方便的,但是说出来你们可能不信,我的电脑没有装这两个东西,因为我觉得这两个就是流氓广告软件,我只在公司的电脑上装了,自己的电脑能不装我就没装

所以为什么不自己写一个呢!!!😎其实我早就想做这个东西了,因为之前看到了[方老师](https://github.com/FrankFang)的[synk](https://github.com/FrankFang/synk)项目,非常心动啊,正好趁此机会学习学习`golang`和`react`

现在终于做出来了,仓库地址是[goseph](https://github.com/zhu-hong/goseph),下面是一张应用截图

![demo](https://github.com/zhu-hong/goseph/raw/master/shortcut.png)

## 项目架构

我的想法是使用[wails](https://github.com/wailsapp/wails)在桌面端启动一个应用,`wails`(基于golang)是一个类似于`tauri`的库,能把你的前端代码打包成一个应用,在启动这个应用的同时,使用[gin](https://github.com/gin-gonic/gin)将前端代码代理在局域网上并且提供`HTTP`和`WebSocket`服务,这样在局域网内就都能使用到这个网页,通过`websocket`服务将每个网页发送的数据(文字,文件...)广播给局域网所有的使用者,所以交互方式做成了聊天的形式,这种交互确实方便简单快捷

## 实现的功能与解决的难题

+ 超大文件上传
+ 断点续传
+ websocket广播
+ 前端并发请求控制
+ 分片上传的进度统计
