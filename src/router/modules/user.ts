import type { RouteRecordRaw } from 'vue-router'
export const user = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
    meta: { title: 'login' }
  }
] as RouteRecordRaw[]