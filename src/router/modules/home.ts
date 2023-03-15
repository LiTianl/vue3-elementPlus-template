import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'
export const home = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home/index.vue'),
        meta: { title: 'home' },
      }
    ]
  }
] as RouteRecordRaw[]