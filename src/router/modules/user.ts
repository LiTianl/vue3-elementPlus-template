export const user = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/login/index.vue'),
    meta: { title: 'login' },
    hidden: true
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/view/login/index.vue'),
    meta: { title: 'register' },
    hidden: true
  }
]