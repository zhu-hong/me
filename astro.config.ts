import { defineConfig } from 'astro/config'
import unocss from 'unocss/astro'
import { presetWind } from 'unocss'
import toc from 'remark-toc'
import collapse from 'remark-collapse'
import mdx from '@astrojs/mdx'

export default defineConfig({
  output: 'static',
  integrations: [
    mdx({
      remarkPlugins: [
        toc,
        [
          collapse,
          {
            test: 'Table of contents',
          },
        ],
      ],
    }),
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
