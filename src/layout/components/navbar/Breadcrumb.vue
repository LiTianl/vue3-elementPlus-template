<script setup lang='ts'>
import { onBeforeMount, watch, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const matched = ref()

const isDashBorad = (route: { name: string; }) => {
  const name = route && route.name
  if (!name) return false
  return name.trim().toLocaleLowerCase() === 'Dashboard'.toLocaleLowerCase()
}

const getBreadcrumb = () => {
  matched.value = route.matched.filter(item => item.meta && item.meta.title)
  if (!isDashBorad(matched.value[0])) {
    matched.value = [{ path: '/dashboard', meta: { title: 'Dashboard' } }].concat(matched.value)
  }
}

watch(route, () => {
  getBreadcrumb()
})

onBeforeMount(() => {
  getBreadcrumb()
})
</script>
<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in matched" :key="item.path"
      :to="item.redirect ? '' : item.path">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style scoped lang="scss">
</style>