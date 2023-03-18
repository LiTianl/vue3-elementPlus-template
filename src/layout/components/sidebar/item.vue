<template>
  <svg-icon v-if="icon" :icon-class="icon" class-name="el-icon" />
  <span v-if="title">{{ title }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
.el-icon{
  font-size: 18px;
  margin-right: 5px;
}
</style>