import type { RouteRecordRaw } from 'vue-router'
import layout from '@/layout/index.vue'
export const home = [
  {
    path: '/',
    redirect: '/home',
    component: layout,
    meta: {title: 'abcd'},
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home/index.vue'),
        meta: { title: 'home' },
      }, {
        path: '/test',
        name: 'test',
        component: () => import('@/view/home/index.vue'),
        meta: { title: 'test' },
      }
    ]
  }, {
    path: '/test',
    component: layout,
    children: [
      {
        path: '/test',
        name: 'test',
        component: () => import('@/view/home/index.vue'),
        meta: { title: 'test' },
      }
    ]
  }
] as RouteRecordRaw[]