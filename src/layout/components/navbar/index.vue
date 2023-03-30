<script setup lang='ts'>
import { inject } from 'vue'
import breadcrumb from './breadcrumb.vue'
import { userAccount, tags } from '../../../pinia/modules'
import { useRouter } from 'vue-router'
const store = userAccount()
const tagsStore = tags()
const router = useRouter()
const collapse = inject('collapse')
const changeCollapse = inject<() => void>('changeCollapse')

const logOut = () => {
  store.log_out()
  tagsStore.clearTag()
  router.push({ path: '/login' })
}
</script>
<template>
  <div class="navbar">
    <div class="hamburger-container" @click="changeCollapse">
      <svg-icon :icon-class="collapse ? 'open-menu' : 'close-menu'" />
    </div>
    <breadcrumb />
    <div class="right-menu">
      <el-dropdown trigger="click">
        <el-avatar :size="40" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item class="dropdown-item">
              <router-link to="/">Dashboard</router-link>
              </el-dropdown-item>
            <el-dropdown-item class="dropdown-item">
              <a target="_blank" href="https://github.com/LiTianl/vue3-elementPlus-template">GitHub</a>
              </el-dropdown-item>
            <el-dropdown-item divided @click="logOut">Log Out</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.navbar {
  display: flex;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
}

.el-breadcrumb {
  flex: 1;
}

.hamburger-container {
  font-size: 30px;
  padding: 5px 10px;
  cursor: pointer;
  transition: background .3s;
  margin-right: 10px;

  &:hover {
    background-color: #e1e1e133;
  }
}

.right-menu {
  padding-right: 55px;
  display: flex;
  align-items: center;

  .el-avatar {
    cursor: pointer;
  }

}

.dropdown-item {
  a {
    color: inherit;
    text-decoration: none;
    display:flex;
    width: 100%;
    margin: -5px -16px;
    padding: 5px 16px;
  }
}
</style>