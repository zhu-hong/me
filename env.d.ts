export declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  export default DefineComponent
}

import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    frontmatter: any
  }
}