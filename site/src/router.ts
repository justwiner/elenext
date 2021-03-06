import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/button',
          name: 'button',
          component: async () =>
            import('/@docs/Button/__docs__/Button.zh-CN.md')
        },
        {
          path: '/layout',
          name: 'layout',
          component: async () => import('/@docs/Layout/__docs__/Layout.md')
        },
        {
          path: '/container',
          name: 'container',
          component: async () =>
            import('/@docs/Container/__docs__/Container.zh-CN.md')
        },
        {
          path: '/icon',
          name: 'icon',
          component: async () => import('/@docs/Icon/__docs__/Icon.md')
        },
        {
          path: '/menu',
          name: 'menu',
          component: async () => import('./demo/menu.vue')
        },
        {
          path: '/popover',
          name: 'popover',
          component: async () => import('./demo/popover.vue')
        }
      ]
    }
  ]
})
