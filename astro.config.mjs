import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import { presetWind } from 'unocss'
import toc from 'remark-toc'
import collapse from 'remark-collapse'

export default defineConfig({
  output: 'static',
  integrations: [
    unocss({
      injectReset: false,
      presets: [
        presetWind(),
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [
      toc,
      [
        collapse,
        {
          test: 'Table of contents',
        },
      ],
    ],
  },
})
