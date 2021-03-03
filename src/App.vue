<template>
  <div id="app">
     <keep-alive include="register3,register2,register4">
    <router-view></router-view>
     </keep-alive>
  </div>
</template>
<script>
import $router from '@/router/index'
export default {
  
}
</script>
<style lang="scss">
</style>
