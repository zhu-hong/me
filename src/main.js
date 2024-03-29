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

export const createApp = ViteSSG(
  App,
  {
    routes,
    scrollBehavior(_to, _from, savedPosition) {
      if (savedPosition) {
        document.body.scrollTo(savedPosition)
        return savedPosition
      }
      else {
        document.body.scrollTo({
          top: 0,
        })
        return {
          top: 0,
        }
      }
    },
  },
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
