import { defineStore } from 'pinia'
import { ref } from 'vue'
export const tags = defineStore('tags', () => {
  const tagList = ref([{title: 'Dashboard', path: '/dashboard', icon: 'dashboard'}])

  const addTag = ({path, title, icon}) => {
    if (tagList.value.some(item => item.path === path)) return false
    tagList.value.push({title: title||'未命名', path: path, icon: icon})
  }

  const removeTag = (path: string) => {
    tagList.value = tagList.value.filter(item => item.path !== path)
  }

  return {
    tagList,
    addTag,
    removeTag
  }
  
})