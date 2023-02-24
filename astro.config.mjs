import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import { presetWind } from 'unocss'
import toc from 'remark-toc'
import collapse from 'remark-collapse'
import netlify from '@astrojs/netlify'

export default defineConfig({
  output: 'server',
  adapter: netlify(),
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
