---
title: 探索同时支持Vue2&3的组件
desc: 探索同时支持Vue2&3的组件的实现并且发布一个npm库
date: "2023-4-17 14:50"
update: "2023-4-19 13:16"
---

[[toc]]

## 序

[vueuse](https://vueuse.org)最近发布了他们的`10`版本，这是一个vue社区十分受欢迎的库，它最大的特性是同时支持了vue2和vue3，这个特性可以让我们不用担心项目从vue2升级到vue3时太困难，因为一般的vue组件库都是只支持一个版本，你要升级vue版本时要先寻找替代品，这个特性可以让我们不用关心vue版本，我现在经常在项目中使用它，体验非常好，无论是`开发时`（完整的类型，无论到哪都能使用到IDE的智能提示，这是非常舒服的）还是`打包时`（它的tree-shaking做得太牛逼了，有时间看看怎么实现的）

## 🧐

vueuse的同时支持vue2&3这个特性是基于[vue-demi](https://github.com/vueuse/vue-demi)的，vue-demi的作者和vueuse的作者是同一个人，大佬[antfu](https://github.com/antfu)，vue-demi的仓库有这么一段话

+ <=2.6: exports from vue + @vue/composition-api with plugin auto installing.
+ 2.7: exports from vue (Composition API is built-in in Vue 2.7).
+ \>=3.0: exports from vue, with polyfill of Vue 2's set and del API.

大概意思是这个包导出的API会根据vue版本重定向到不同的包，从而达到使用同一个API兼容不同vue版本，非常巧妙的设计

注意几个关键词`composition-api`和`2.7`，关注过vue3的朋友应该都知道`composition-api`是vue3新推出的一种写vue应用的API风格，个人感觉，这个让开发者更像在写原生JS而不是在写vue，`2.7`版本是vue2最后的一个版本，让开发者用`composition-api`的方式写vue2应用，vue3和2.7都是自带compsition-api的，而2.7之前的vue2版本就需要这个[composition-api](https://github.com/vuejs/composition-api)包来做兼容，那就明白了，同时兼容这几个vue版本就是使用compsition-api，而这件事就是vue-demi要做的

## vue-demi源码浅析

我把源码的流程看了一遍

当安装这个库时会自动执行脚本，脚本会把包导出的文件改写成对应的vue版本的文件，包里自带了各版本用到的文件，执行脚本把对应版本的文件复制到了包的导出文件，如下

![dir](/a50688f2ba9827cbaf4133f10d41ffa1.png)
```js
// postinstall
const { switchVersion, loadModule } = require('./utils')

const Vue = loadModule('vue')

if (!Vue || typeof Vue.version !== 'string') {
  console.warn('[vue-demi] Vue is not found. Please run "npm install vue" to install.')
}
else if (Vue.version.startsWith('2.7.')) {
  switchVersion(2.7)
}
else if (Vue.version.startsWith('2.')) {
  switchVersion(2)
}
else if (Vue.version.startsWith('3.')) {
  switchVersion(3)
}
else {
  console.warn(`[vue-demi] Vue version v${Vue.version} is not suppported.`)
}
```
```js
// utils
const fs = require('fs')
const path = require('path')

const dir = path.resolve(__dirname, '..', 'lib')

function loadModule(name) {
  try {
    return require(name)
  } catch (e) {
    return undefined
  }
}

function copy(name, version, vue) {
  vue = vue || 'vue'
  const src = path.join(dir, `v${version}`, name)
  const dest = path.join(dir, name)
  let content = fs.readFileSync(src, 'utf-8')
  content = content.replace(/'vue'/g, `'${vue}'`)
  // unlink for pnpm, #92
  try {
    fs.unlinkSync(dest)
  } catch (error) { }
  fs.writeFileSync(dest, content, 'utf-8')
}

function updateVue2API() {
  const ignoreList = ['version', 'default']
  const VCA = loadModule('@vue/composition-api')
  if (!VCA) {
    console.warn('[vue-demi] Composition API plugin is not found. Please run "npm install @vue/composition-api" to install.')
    return
  }

  const exports = Object.keys(VCA).filter(i => !ignoreList.includes(i))

  const esmPath = path.join(dir, 'index.mjs')
  let content = fs.readFileSync(esmPath, 'utf-8')

  content = content.replace(
    /\/\*\*VCA-EXPORTS\*\*\/[\s\S]+\/\*\*VCA-EXPORTS\*\*\//m,
`/**VCA-EXPORTS**/
export { ${exports.join(', ')} } from '@vue/composition-api/dist/vue-composition-api.mjs'
/**VCA-EXPORTS**/`
    )

  fs.writeFileSync(esmPath, content, 'utf-8')
  
}

function switchVersion(version, vue) {
  copy('index.cjs', version, vue)
  copy('index.mjs', version, vue)
  copy('index.d.ts', version, vue)

  if (version === 2)
    updateVue2API()
}


module.exports.loadModule = loadModule
module.exports.switchVersion = switchVersion
```