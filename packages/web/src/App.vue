<!--
 * @Description: 
 * @Autor: zengbotao@myhexin.com
 * @Date: 2024-03-09 17:05:09
 * @LastEditTime: 2024-03-09 17:38:55
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue';
import { getUser } from "@zbt/api"
import Button from "@zbt/button"
onMounted(() => {
  console.log(getUser)
  getUser('22')
})
</script>

<template>
  <div>
    <Button></Button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
