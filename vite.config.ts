import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import unocss from 'unocss/vite'
import { presetWind } from 'unocss'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import fs from 'fs-extra'
import matter from 'gray-matter'
import markdown from 'vite-plugin-vue-markdown'
import shiki from 'markdown-it-shiki'
import anchor from 'markdown-it-anchor'
import link from 'markdown-it-link-attributes'
// @ts-expect-error missing types
import toc from 'markdown-it-table-of-contents'
import { slugify } from './src/scripts/slugify'
import components from 'unplugin-vue-components/vite'
import nested from 'postcss-nested'

export default defineConfig({
  resolve: {
    alias: [
      { find: '~/', replacement: `${resolve(__dirname, 'src')}/` },
    ],
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      'dayjs',
      'dayjs/plugin/localizedFormat',
    ],
  },
  plugins: [
    unocss({
      presets: [
        presetWind({
          preflight: false,
        }),
      ],
    }),

    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    pages({
      extensions: ['vue', 'md'],
      pagesDir: 'pages',
      extendRoute(route) {
        const path = resolve(__dirname, route.component.slice(1))

        if (path.endsWith('.md')) {
          const md = fs.readFileSync(path, 'utf-8')
          const { data } = matter(md)
          route.meta = Object.assign(route.meta || {}, { frontmatter: data })
        }

        return route
      },
    }),

    markdown({
      wrapperComponent: 'post',
      wrapperClasses: 'prose',
      headEnabled: true,
      markdownItOptions: {
        quotes: '""\'\'',
      },
      markdownItSetup(md) {
        md.use(shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        })

        md.use(anchor, {
          slugify,
          permalink: anchor.permalink.linkInsideHeader({
            symbol: '#',
            renderAttrs: () => ({ 'aria-hidden': 'true' }),
          }),
        })

        md.use(link, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })

        md.use(toc, {
          includeLevel: [1, 2, 3],
          slugify,
        })
      },
    }),

    components({
      extensions: ['vue', 'md'],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        nested(),
      ],
    },
  },
})