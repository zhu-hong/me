import '~/styles/reset.css'
import '~/styles/style.css'
import 'uno.css'

import autoRoutes from 'pages-generated'
import NProgress from 'nprogress'
import { ViteSSG } from 'vite-ssg'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js'
import App from '~/App.vue'

import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const routes = autoRoutes.map((i) => {
  return {
    ...i,
    alias: i.path.endsWith('/') ? `${i.path}index.html` : `${i.path}.html`,
  }
})

const scrollBehavior = (_to: any, _from: any, savedPosition: any) => {
  if (savedPosition) return savedPosition

  return { top: 0 }
}

export const createApp = ViteSSG(
  App,
  { routes, scrollBehavior },
  ({ router, isClient }) => {
    dayjs.extend(LocalizedFormat)

    if (isClient) {
      router.beforeEach(() => {
        NProgress.start()
      })
      router.afterEach(() => {
        NProgress.done()
      })
    }
  },
)
