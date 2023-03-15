<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import sidebar from './components/sidebar/index.vue'
import navbar from './components/navbar/index.vue'
import tagsview from './components/tagsview/index.vue'
</script>

<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="main-container">
      <div class="flexd-header">
        <navbar/>
        <tagsview/>
      </div>
      <AppMain />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  height: 100%;
}
.main-container{
  display: flex;
  flex: 1;
  flex-direction: column;
}
</style>