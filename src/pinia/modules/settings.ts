import { defineStore } from 'pinia'

export const settings = defineStore('settings', {
  state: () => ({
    collapse: false
  }),
  actions: {
    changeCollapse(){
      this.collapse = !this.collapse
      console.log(this.collapse)
    }
  }
})