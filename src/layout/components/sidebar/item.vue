<template>
  <div>
    <svg-icon v-if="icon" :icon-class="icon" />
    <span v-if="title" slot="title">{{ title }}</span>
  </div>
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