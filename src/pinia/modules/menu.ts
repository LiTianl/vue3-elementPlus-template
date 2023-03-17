import { defineStore } from 'pinia'
import {ref} from 'vue'
import router, { constanRouters, asyncRouters } from '../../router'

export const userMenu = defineStore('userMenu', () => {

  const menus = ref(constanRouters)

  const createMenu = async (roles:string) => {
    // if (roles) {
    //   // 清空动态路由
    //   asyncRouters.forEach((item: { name: string }) => {
    //     router.removeRoute(item.name)
    //   })
    // }

    // if (asyncRouters){
    //   menus.value.concat(...asyncRouters)
    // }
  }

  return {
    menus,
    createMenu
  }
})