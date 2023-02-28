declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  export default DefineComponent<{}>
}

export declare interface Post {
  path: string
  title: string
  date: string
  desc?: string
}