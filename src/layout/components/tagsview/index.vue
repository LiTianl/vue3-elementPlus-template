<script setup lang='ts'>
import tags from './tags.vue'
import { tags as tagStore } from '../../../pinia/modules'
import { useRoute, useRouter } from 'vue-router'
const Store = tagStore()
const route = useRoute()
const router = useRouter()

const closeTag = (path: string) => {
  const item = Store.tagList.findIndex(item => item.path === path)
  const Tpage = route.path
  Store.removeTag(path)
  if (Tpage === path) { // 对比当前页面是否是关闭页面
    router.push({ path: Store.tagList[item - 1].path })
  }
}
</script>
<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="tags-body">
        <tags :tabs="Store.tagList" :active="route.path" @close-tag="closeTag" />
      </div>
    </el-scrollbar>
  </div>
</template>
<style scoped lang='scss'>
.tags-view {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 0 2px 0 rgba(0, 0, 0, 0.04);
  width: 100%;

  .el-scrollbar {
    width: 100%;
  }

  .tags-body {
    padding: 4px 15px 0 15px;
    background-color: #ccf5fa;
  }
}
</style>