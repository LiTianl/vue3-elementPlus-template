<script setup lang='ts'>
import { ref } from 'vue'
const dynamicTags = ref(['Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 3', 'Tag 1', 'Tag 2', 'Tag 31'])

const handleClose = (tag: string) => {
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1)
}
</script>
<template>
  <div class="tags-view">
    <el-scrollbar>
      <div class="tags-body">
        <el-tag v-for="tag in dynamicTags" type="info" :key="tag" class="mx-1" closable :disable-transitions="false"
          @close="handleClose(tag)">
          {{ tag }}
        </el-tag>
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
  .tags-body {
    display: flex;
    margin: 4px 15px;
    .el-tag {
      margin: 0 2px;
      cursor: pointer;
    }
  }
}
</style>