<script setup lang='ts'>
import { ref } from 'vue'
import tags from './tags.vue'
const dynamicTags = ref([{title: 'tags1', path: '/'}, {title: 'tags1', path: '/'}, {title: 'tags1', path: '/'}, {title: 'tags1', path: '/'}, {title: 'tags1', path: '/'}, {title: 'tags1', path: '/'}, {title: 'tags1', path: '/'}])
</script>
<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="tags-body">
        <tags :tabs="dynamicTags"/>
      </div>
    </el-scrollbar>
  </div>
</template>
<style scoped lang='scss'>
.tags-view {
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 0 2px 0 rgba(0, 0, 0, 0.04);
  width: 100%;
  .el-scrollbar{
    width: 100%;
  }
  .tags-body{
    padding: 4px 15px 0 15px;
    background-color: #ccf5fa;
  }
}
</style>