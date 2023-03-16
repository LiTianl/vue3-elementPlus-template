import { defineStore } from 'pinia'
import { userInfo } from '@/api'
import { ref } from 'vue'
export const userAccount = defineStore('userAccount', () => {
  const user_info = ref(null)

  const clearUserInfo = () => {
    user_info.value = null
  }

  const getUserInfo = async () => {
    const { status, data } = await userInfo()
    if (status === 200) {
      user_info.value = data
      return Promise.resolve(data)
    }
  }


  return { user_info, clearUserInfo, getUserInfo }
})