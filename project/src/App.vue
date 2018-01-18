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
    //数据未加载过来，loading
    this.$loading.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    //获取分类数据并存本地
    let that=this;
    //异步转同步，安装babel-polyfill
    this.$http.get(api.host+"/categories").then(res=>{
      that.$store.commit('SAVE_CATEGORIES',res.data);
      //数据加载完毕,关闭loading
      that.$loading.close();
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
