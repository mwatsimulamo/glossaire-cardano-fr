import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import HomeSections from './components/HomeSections.vue'
import GlossaryPageClass from './components/GlossaryPageClass.vue'
import CategoryBrowse from './components/CategoryBrowse.vue'
import SidebarExtras from './components/SidebarExtras.vue'
import CustomNotFound from './components/CustomNotFound.vue'
import SiteFooter from './components/SiteFooter.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h(SidebarExtras),
      'doc-before': () =>
        h('div', null, [h(GlossaryPageClass), h(CategoryBrowse)]),
      'not-found': () => h(CustomNotFound),
      'layout-bottom': () => h(SiteFooter)
    }),
  enhanceApp({ app }) {
    app.component('HomeSections', HomeSections)
  }
} satisfies Theme
