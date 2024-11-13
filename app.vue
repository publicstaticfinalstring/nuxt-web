<template>
  <!-- 所有页面共享的标记，例如导航栏 -->
  <div class="topContainer">
    <div class="topTools">
      <Image :src="logo" alt="logo"
             width="134" height="44"
             @click="doGoHome()"
      />
      <div>
        <Button v-for="(item,index) in topMenu" :label="item.label" :key="index"
                variant="text"
                style="font-size: 1.4rem"
                @click="onMenuClick(item)"
        />
      </div>
    </div>
  </div>
  <div style="margin-top:4rem;min-height: 60VH">
    <NuxtPage/>
  </div>

  <div>
    <Footer/>
  </div>
</template>
<script setup lang="ts">
import logo from "./assets/logo.svg"

let router = useRouter();

let topMenu = reactive([
  {label: '首页', "path": "/"},
  {label: '下载', "path": "/download"},
  {label: '注册/登录', "path": "/"},
])

let doGoHome = () => {
  // 跳转到首页
  router.push("/")
}

let onMenuClick = (item: any) => {
  router.push(item.path)
}


let toggleDarkMode = () => {
  document.documentElement.classList.toggle('my-app-dark');
}
</script>

<style scoped>
.topContainer {
  background: #ffffff;
  height: 4rem;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}

.topTools {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 80%;
  margin: auto
}
</style>