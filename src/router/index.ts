import {createRouter, createWebHashHistory} from 'vue-router'
import { error, home, user } from './modules'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...home,
    ...user,
    ...error
  ]
})

export default router