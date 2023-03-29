import { defineStore } from 'pinia'
import { ref } from 'vue'
import { setCookie, getCookie, removeCookie } from '../../utils/auto'

export const tags = defineStore('tags', () => {

  const defaultTags: Array<{ title: string; path: string; icon: string }> = getCookie('menu')

  const tagList = ref(defaultTags || [{ title: 'Dashboard', path: '/dashboard', icon: 'dashboard' }])

  const addTag = ({ path, title, icon }) => {
    if (tagList.value.some(item => item.path === path)) return false
    tagList.value.push({ title: title || '未命名', path: path, icon: icon })
    setCookie('menu', JSON.stringify(tagList.value))
  }

  const removeTag = (path: string) => {
    tagList.value = tagList.value.filter(item => item.path !== path)
    setCookie('menu', JSON.stringify(tagList.value))
  }

  const clearTag = () => {
    tagList.value = [{ title: 'Dashboard', path: '/dashboard', icon: 'dashboard' }]
    removeCookie('menu')
  }

  return {
    tagList,
    addTag,
    removeTag,
    clearTag
  }

})