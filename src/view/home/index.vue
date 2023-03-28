<script setup lang='ts'>
import { login } from '../../api/user'

const submit = async() => {
  const res = await login({userName: 'admin', passWord: '123456'})
  console.log(res)
}

</script>
<template>
  <div>
    <el-button @click="submit">login</el-button>
  </div>
</template>
<style scoped lang='scss'>
</style>