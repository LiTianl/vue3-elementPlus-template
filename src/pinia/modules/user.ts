import { defineStore } from 'pinia'
import { userInfo } from '@/api'

export const userAccount = defineStore('userAccount', {
  state: () => ({
    user_info: null
  }),
  actions: {
    clearUserInfo() {
      this.user_info = null
    },
    async getUserInfo() {
      const { status, data } = await userInfo()
      if (status === 200) {
        this.user_info = data
        return Promise.resolve(data)
      }
    }
  }
})