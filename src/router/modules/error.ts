export const error = [
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/view/error/404.vue'),
    meta: { title: '404' },
    hidden: true,
  }
]