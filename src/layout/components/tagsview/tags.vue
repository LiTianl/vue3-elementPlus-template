<script setup lang='ts'>
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  tabs: {
    type: Array<{ title: string, path: string }>,
    required: true,
  },
  active: {
    type: String,
    default: ''
  }
})

const isActive = (tag: { title?: string; path: string; }) => {
  return tag.path === props.active
}

const servlet = (item: { path: string; }) => {
  router.push({path: item.path})
}

</script>
<template>
  <div class="tags">
    <div v-for="(key, index) in tabs" :key="key.title" class="tag" :class="isActive(key) ? 'is-active' : ''" >
      <i></i>
      <div class="title" @click="servlet(key)">{{ key.title }}</div>
      <div v-if="index > 0" class="close" @click="$emit('close-tag', key.path)">
        <svg-icon icon-class="mini-close"></svg-icon>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
.tags {
  display: flex;
  border-radius: 8px;
  width: fit-content;
  margin-bottom: 2px;

  .is-active {
    background-color: white !important;
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 10px;
      height: 10px;
    }

    &::before {
      left: -10px;
      background: radial-gradient(circle at 0% 0%, transparent 10px, white 10px) !important;
    }

    &::after {
      right: -10px;
      background: radial-gradient(circle at 100% 0%, transparent 10px, white 10px) !important;
    }

    &.tag>i {
      background-color: transparent;
    }

    &+.tag>i {
      background-color: transparent;
    }
  }

  .tag {
    display: flex;
    position: relative;
    align-items: center;
    cursor: pointer;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    &:hover {
      >i {
        background-color: transparent;
      }

      background-color: #ffffff6d;

      &::before,
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 10px;
        height: 10px;
      }

      &::before {
        left: -10px;
        background: radial-gradient(circle at 0% 0%, transparent 10px, #ffffff6d 10px);
      }

      &::after {
        right: -10px;
        background: radial-gradient(circle at 100% 0%, transparent 10px, #ffffff6d 10px);
      }

    }

    &:hover+.tag>i {
      background-color: transparent;
    }

    .title {
      padding: 4px 10px;
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
      height: 60%;
      background-color: #a8abb2;
      transition: all .3s;
    }

    &:first-of-type i {
      display: none;
    }
  }
}
</style>