<script setup lang='ts'>
import { inject } from 'vue'
import { storeToRefs } from 'pinia'
import { userMenu } from '../../../pinia/modules'
import logo from './logo.vue'
import sidebarItem from './sidebarItem.vue'

const { menus } = storeToRefs(userMenu())
const collapse = inject('collapse')

</script>
<template>
  <div class="left" :class="collapse ? 'collapse' : ''">
    <logo/>
    <el-scrollbar>
      <el-menu default-active="/dashboard" class="el-menu-vertical-demo" :router="true" background-color="#545c64" text-color="#fff"
        :collapse="collapse" >
        <sidebar-item v-for="route in menus" :key="route.path" :item="route" :basePath="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<style scoped lang='scss'>
.left {
  width: 210px;
  display: flex;
  flex-direction: column;
  background-color: #545c64;
  transition: all .3s;

  &.collapse {
    width: 64px;
  }
}

.el-menu-vertical-demo {
  border: none;
}
</style>