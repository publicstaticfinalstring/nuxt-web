<template>

  <div style="display: flex;flex-direction: column;align-items: center">
    <div>我是首页</div>
    <Image :src="test_img" alt="img"/>
    <Image :src="test_img" alt="img"/>
  </div>


</template>

<script setup lang="ts">
import test_img from "assets/test_img.png"

</script>

<style scoped>

</style>