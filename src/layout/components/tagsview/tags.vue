<script setup lang='ts'>
import { ref } from 'vue'
defineProps({
  tabs: {
    type: Array<{ title: string, path: string }>,
    required: true,
  }
})
const activeTab = ref(0)
</script>
<template>
  <div class="tags">
    <div v-for="(key, index) in tabs" :key="key.title" class="tag" :class="{ 'is-active': activeTab === index }">
      <i></i>
      <div class="title">{{ key.title }}</div>
      <div class="close"><svg-icon icon-class="mini-close"></svg-icon></div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.tags {
  display: flex;
  background-color: #ccc;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: fit-content;

  .is-active {
    background-color: white;
    position: relative;
    
    &+.tag>i {
      background-color: transparent;
    }
  }

  .tag {
    position: relative;
    display: flex;
    align-items: center;
    padding: 4px 0;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    cursor: pointer;
    &::before {
      height: 5px;
      width: 10px;
      content: '';
      bottom: 0;
      position: absolute;
    }

    &::after {
      height: 5px;
      width: 10px;
      content: '';
      bottom: 0;
      position: absolute;
    }

    &:hover {
      >i {
        background-color: transparent;
      }

      background-color: #eee;
    }

    &:hover+.tag>i {
      background-color: transparent;
    }

    .title {
      padding: 0 10px;
    }

    .close {
      font-weight: bolder;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 16px;
      width: 16px;
      font-size: 12px;
      border-radius: 16px;
      margin-right: 8px;

      &:hover {
        background-color: #fba2a2;
      }
    }

    i {
      width: 1px;
      height: 100%;
      background-color: black;
    }

    &:first-of-type i {
      display: none;
    }
  }
}</style>