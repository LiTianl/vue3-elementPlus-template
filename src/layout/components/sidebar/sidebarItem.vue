<script setup lang='ts'>
import { ref } from 'vue'
import itemView from './item.vue'
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})

const onlyOne = ref()

// 只有一个子菜单, children有可能不存在 需要给默认值
const hasOneShowingChild = (children: Array<{ hidden: boolean }> = [], parent: Record<string, any>) => {
  //过滤子菜单
  const showings = children.filter((item: { hidden: boolean; }) => {
    //如果存在hidden属性
    if (item.hidden) {
      return false
    } else {
      onlyOne.value = item
      return true
    }
  })

  if (showings.length === 1) {
    return true
  }

  // 如果 没有children
  if (showings.length === 0) {
    onlyOne.value = { ...parent, noShowingChildren: true }
    console.log(onlyOne.value)
    return true
  }

  return false
}

</script>
<template>
  <!-- 如果存在hidden，则不显示该菜单 -->
  <div v-if="!item.hidden">
    <!-- 如果不存在child -->
    <template v-if="hasOneShowingChild(item.children, item) && (!onlyOne.children || onlyOne.noShowingChildren)">
      <el-menu-item :index="onlyOne.path">
        <item-view :title="onlyOne.meta.title" :icon="onlyOne.meta.icon"/>
      </el-menu-item>
    </template>
    <template v-else>
      <!-- 如果多级菜单中 不存在meta对象，则以单级菜单显示 -->
      <template v-if="!item.meta">
        <sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
      </template>
      <el-sub-menu v-else>
        <template #title>
          <item-view  :title="item.meta.title" :icon="item.meta.icon"/>
        </template>
        <sidebar-item v-for="child in item.children" :key="child.path" :item="child" />
      </el-sub-menu>
    </template>

  </div>
</template>
<style scoped lang='scss'></style>