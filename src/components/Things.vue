<script setup>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import { useRouter } from 'vue-router'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

const router= useRouter()

const things = router.getRoutes()
              .filter((p) => p.path.startsWith('/thing') && !p.path.endsWith('.html') && p.meta.frontmatter.date)
              .map((t) => {
                const cdate = new Date(t.meta.frontmatter.date)
                const now = new Date()
                let date = ''

                if(now.getTime() - cdate.getTime() > 1000 * 60 * 60 * 24 * 7) {
                  if(cdate.getFullYear() === now.getFullYear()) {
                    date = dayjs(cdate).format('MM-DD')
                  } else {
                    date = dayjs(cdate).format('YY-MM-DD')
                  }
                } else {
                  date = dayjs(t.meta.frontmatter.date).fromNow()
                }

                return {
                  path: t.path,
                  title: t.meta.frontmatter.title,
                  date,
                }
              })

console.log(things)
</script>

<template>
  <div v-for="t of things" :key="t.path" class="flex items-center mt-6">
    <a :href="t.path">{{ t.title }}</a>
    <span class="opacity-80 ml-4">{{ t.date }}</span>
  </div>
</template>