<template>

  <div style="display: flex;flex-direction: column;align-items: center">
    <div>我是首页</div>
    <Image :src="test_image2" alt="img"/>
    <Image src="/test_img.png" alt="img"/>
  </div>


</template>

<script setup lang="ts">
import test_image2 from "public/test_img.png"

</script>

<style scoped>

</style>