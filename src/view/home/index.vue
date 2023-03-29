<script setup lang='ts'>
import { login } from '../../api/user'
import { userAccount } from '../../pinia/modules'
import { storeToRefs } from 'pinia'
const store = userAccount()
const {_introduction} = storeToRefs(store)
</script>
<template>
  <div>
    <h1>{{_introduction}}</h1> 
  </div>
</template>
<style scoped lang='scss'>
</style>