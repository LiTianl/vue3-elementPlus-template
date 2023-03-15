<script setup lang='ts'>
import breadcrumb from './breadcrumb.vue'
</script>
<template>
  <div class="navbar">
    <div class="hamburger-container">
      <svg-icon icon-class="close-menu"/>
    </div>
    <breadcrumb/>
    <div class="right-menu">

    </div>
  </div>
</template>
<style scoped lang='scss'>
.navbar{
  display: flex;
  align-items: center;
}
.el-breadcrumb{
  flex: 1;
}
</style>