import { defineStore } from 'pinia'
import router, { constanRouters, asyncRouters } from '../../router'

export const userMenu = defineStore('userMenu', () => {

  const createMenu = () => {


    
    // 清空动态路由
    asyncRouters.forEach((item: { name: string }) => {
      router.removeRoute(item.name)
    })


  }

  return {
    createMenu
  }
})