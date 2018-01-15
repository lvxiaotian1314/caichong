<template>
  <div id="app">
    
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/TabBar/TabBar.vue'
export default {
  name: 'App',
  components:{
    tabBar
  }
}
</script>

<style>
#app {
  position: absolute;
  top:0;
  left: 0;
  bottom:0;
  right:0;
}
</style>
