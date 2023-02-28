<script setup>
import { nextTick, ref, shallowReactive } from 'vue'

function encodeSvg(svg) {
  return svg.replace('<svg', (~svg.indexOf('xmlns') ? '<svg' : '<svg xmlns="http://www.w3.org/2000/svg"'))
    .replace(/"/g, '\'')
    .replace(/%/g, '%25')
    .replace(/#/g, '%23')
    .replace(/{/g, '%7B')
    .replace(/}/g, '%7D')
    .replace(/</g, '%3C')
    .replace(/>/g, '%3E')
}

const size = shallowReactive({
  w: 0,
  h: 0,
})

/**
 * @type { { value: HTMLCanvasElement } }
 */
const canvas = ref(null)

function onChange(e) {
  const file = e.target.files[0]

  if(!file) return

  const fr = new FileReader()
  console.log(file)

  fr.readAsText(file)

  fr.addEventListener('load', (e) => {
    const img = new Image()
    img.src = `data:image/svg+xml;utf8,${encodeSvg(e.target.result)}`
    
    img.addEventListener('load', async () => {
      size.w = img.width
      size.h = img.height
      canvas.value.width = img.width
      canvas.value.height = img.height
      
      await nextTick()

      const ctx = canvas.value.getContext('2d')
      ctx.drawImage(img,0,0,canvas.value.width,canvas.value.height)
    })
  })
}
</script>

<template>
  <p>这样能很方便得将SVG画在Canvas上，这样就能下载成常见的图片格式，试一试</p>
  <input type="file" name="uld" title="试试" @change="onChange" accept=".svg">
  <canvas ref="canvas" :width="size.w" :height="size.h" class="mx-auto"></canvas>
</template>