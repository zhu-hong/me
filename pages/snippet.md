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

### canvas2image

```dart
import 'dart:ui' as ui;
import 'package:image_gallery_saver/image_gallery_saver.dart';
import 'package:qr_flutter/qr_flutter.dart';

void canvas2image() async {
  // 以这个给二维码图片加白边后保存到相册为例
  final qr = await QrPainter(
    gapless: true,
    data: 'qrcode content',
    version: QrVersions.auto,
    emptyColor: Colors.white,
    color: Colors.black,
  ).toImage(800);

  final PictureRecorder pictureRecorder = PictureRecorder();

  final canvas = Canvas(pictureRecorder);
  canvas.drawRect(Offset.zero & Size(850, 850), Paint()..isAntiAlias = true..style = PaintingStyle.fill..color = Colors.white);
  canvas.drawImage(qr, Offset(25, 25), Paint());

  final pic = await pictureRecorder.endRecording().toImage(850, 850);
  final bytes = await pic.toByteData(format: ui.ImageByteFormat.png);

  ImageGallerySaver.saveImage(Uint8List.view(bytes.buffer));
}
```


### 输入限制

```dart
FilteringTextInputFormatter.deny(RegExp('[ ]')) // 不能输入空格
FilteringTextInputFormatter(RegExp('[0-9.]'), allow: true) // 只能输入数字和小数点

DigitFilter(digit: 2) // 小数点后只能有两位
class DigitFilter extends TextInputFormatter {
  static const defaultDouble = 0.001;

  // 允许的小数位数，-1代表不限制位数
  int digit;

  DigitFilter({this.digit = -1});
  static double strToFloat(String str, [double defaultValue = defaultDouble]) {
    try {
      return double.parse(str);
    } catch (e) {
      return defaultValue;
    }
  }

  // 获取目前的小数位数
  static int getValueDigit(String value) {
    if (value.contains(".")) {
      return value.split(".")[1].length;
    } else {
      return -1;
    }
  }

  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    String value = newValue.text;
    int selectionIndex = newValue.selection.end;
    if (value == ".") {
      value = "0.";
      selectionIndex++;
    } else if (value == "-") {
      value = "-";
      selectionIndex++;
    } else if (value != "" && value != defaultDouble.toString() && strToFloat(value, defaultDouble) == defaultDouble || getValueDigit(value) > digit) {
      value = oldValue.text;
      selectionIndex = oldValue.selection.end;
    }

    return TextEditingValue(
      text: value,
      selection: TextSelection.collapsed(offset: selectionIndex),
    );
  }
}
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

## svg圆环进度

```html
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <circle cx="200" cy="200" r="190" fill="none" stroke="#efefef" stroke-width="20" />
  <circle
    cx="200"
    cy="200"
    r="190"
    fill="none"
    stroke="#0b58d2"
    stroke-width="20"
    stroke-linecap="round"
    :stroke-dasharray="`${Math.PI * 190 * 2 * range / 100} ${Math.ceil(Math.PI * 380)}`"
    transform="matrix(0,-1,1,0,0,400)"
  />
</svg>
```

## 检查package.json哪些包能更新

```sh
pnpm outdated
```
