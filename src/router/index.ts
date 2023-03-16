import {createRouter, createWebHashHistory} from 'vue-router'
import { error, home, user } from './modules'

export const constanRouters = [...home, ...user]

export const asyncRouters = []

const router = createRouter({
  history: createWebHashHistory(),
  routes: constanRouters
})

export default router