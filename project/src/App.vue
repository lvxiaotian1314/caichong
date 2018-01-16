<template>
  <div id="app">
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/TabBar/TabBar.vue'
import api from '@/api'
export default {
  created(){
    //获取分类数据并存本地
    let that=this;
    this.$http.get(api.host+"/categories").then(res=>{
      that.$store.commit('SAVE_CATEGORIES',res.data)
    })
  },
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
