import { defineStore } from 'pinia'
import { userInfo, login } from '@/api'
import { ref } from 'vue'
import { setItem, removeItem, getItem } from '@/utils/auto'
export const userAccount = defineStore('userAccount', () => {
  const _token = ref(null)
  const _avatar = ref()
  const _introduction = ref()
  const _name = ref()
  const _roles = ref()

  const clearUserInfo = () => {
    _token.value = null
    _avatar.value = null
    _introduction.value = null
    _name.value = null
    _roles.value = []
    removeItem()
  }

  const log_in = (userInfo: { userName: string, passWord: string }) => {
    return new Promise((resolve, reject) => {
      login(userInfo).then(res => {
        if (res.code === 200) {
          const { token } = res.data
          _token.value = token
          setItem(token)
        }
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }

  const log_out = () => {
    clearUserInfo()
    return true
  }

  const getUserInfo = () => {
    return new Promise((resolve, reject) => {
      userInfo(getItem()).then(res => {
        if (res.code === 200) {
          const {avatar, introduction, name, roles} = res.data
          _avatar.value = avatar
          _introduction.value = introduction
          _name.value = name
          _roles.value = roles
          resolve(res)
        }
        console.log(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  return {_token, _avatar, _name, _roles, _introduction, log_in, log_out, clearUserInfo, getUserInfo }
})