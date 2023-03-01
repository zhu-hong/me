---
title: Flutter布局
desc: 学习Flutter布局原理，实现上下固定、中间自适应超出滚动布局
date: "2023-3-1 9:05"
---

[[toc]]

## 布局约束

布局约束在布局中是很常见的概念，因为之前开发的都是web端，在web端布局约束是非常松的，比如你可以在一个`div（100×100）`的中放一个`img（50×50）`而没有任何问题，而在flutter中，你可以试试在`Container（200×200）`在中放一个大小`FlutterLogo（100×100）`的

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    Container(
      color: Colors.blue,
      width: 200,
      height: 200,
      child: const FlutterLogo(size: 100),
    )
  );
}
```
你会发现你给Container和FlutterLogo的size完全没有作用

## Flutter中的布局约束

flutter的布局约束是非常严格的，可以说你给`Widget`的size仅供参考，如果你的size不符合布局约束就完全没有作用，下面看看Flutter官网对它布局约束的描述

> [Understanding constraints | Flutter](https://docs.flutter.dev/development/ui/layout/constraints)<br>
> Constraints go down. Sizes go up. Parent sets position.<br>
> 首先，上层 widget 向下层 widget 传递约束条件；然后，下层 widget 向上层 widget 传递大小信息。最后，上层 widget 决定下层 widget 的位置。

那么就能理解什么为什么会出现说明这种现象了，给`Container`和`FlutterLogo`的size都不符合布局约束所以没作用

## 分析

现在来分析一下上段代码的布局约束，因为`runApp`给的约束是要求和设备尺寸一模一样的，`Container`明显是不符合的，所以size没有采用，那么给`FlutterLogo`的约束自然就是`runApp`的约束了

那么如何解决呢，可以给给`Container`套一个`Column`，因为这样`Column`允许自己的下级比自己小，那么给下级的约束为`BoxConstraints(0.0<=w<=上级约束, 0.0<=h<=Infinity)`，这样`Container`的size是符合约束的，那size就起作用了

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    Column(
      children: [
        // LayoutBuilder可以获取上级的约束
        LayoutBuilder(builder: (BuildContext context, BoxConstraints constraints) {
          debugPrint(constraints.toString());
          return Container(
            color: Colors.blue,
            width: 200,
            height: 200,
            child: Column(
              children: const [
                FlutterLogo(size: 100),
              ],
            ),
          );
        },)
      ],
    )
  );
}
```

## 实现上下固定、中间自适应超出滚动布局

只是一种十分常见的布局，看看在flutter中如何实现

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    Container(
      color: Colors.blue[200],
      child: Column(
        children: [
          Container(
            color: Colors.red[200],
            height: 200,
          ),
          Expanded(
            child: SingleChildScrollView(
              child: Container(),
            ),
          ),
          Container(
            color: Colors.red[200],
            height: 200,
          ),
        ],
      ),
    )
  );
}
```