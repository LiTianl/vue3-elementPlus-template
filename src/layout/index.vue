<script setup lang="ts">
import AppMain from './components/AppMain.vue'
import sidebar from './components/sidebar/index.vue'
import navbar from './components/navbar/index.vue'
import tagsview from './components/tagsview/index.vue'
import { provide } from 'vue'
import { storeToRefs } from 'pinia'
import { settings } from '../pinia/modules'

const settingsStore = settings()
const { collapse} = storeToRefs(settingsStore)

provide('collapse', collapse)
provide('changeCollapse', settingsStore.changeCollapse)
</script>

<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="main-container">
      <div class="flexd-header" :class="collapse ? 'collapse' : ''">
        <navbar />
        <tagsview />
      </div>
      <div id="main">
        <AppMain />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  height: 100%;
}

.main-container {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: 88px;

  .flexd-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - 210px);
    background-color: #fff;
    transition: width .3s;

    &.collapse {
      width: calc(100% - 64px);
    }
  }

  #main {
    padding: 8px;
  }
}
</style>