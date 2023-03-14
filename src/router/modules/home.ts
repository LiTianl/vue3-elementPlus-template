import type { RouteRecordRaw } from 'vue-router'
export const home = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/view/home/index.vue'),
    meta: { title: 'home' }
  }
] as RouteRecordRaw[]