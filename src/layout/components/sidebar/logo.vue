<script setup lang='ts'>
import { inject } from 'vue'
const collapse = inject('collapse')
</script>
<template>
  <router-link to='/' class="logo" >
    <div class="icon">
      <svg-icon icon-class="Vector" />
    </div>
    <div class="title" :class="collapse ? 'collapse' : ''">
      Vue Template
    </div>
  </router-link>
</template>
<style scoped lang='scss'>
.logo{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: #2b2f3a;
  text-decoration: none;
  .icon{
    svg{
      width:32px;
      height:32px;
    }
  }
  .title{
    font-weight: 700;
    color: white;
    padding: 0 15px;
    white-space: nowrap;
  }
  .title.collapse{
    display: none
  }
}

</style>