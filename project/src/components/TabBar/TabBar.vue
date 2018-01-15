<template>
  <div class="tabBar">
      <router-link tag="a" to="/">
        <span></span>首页
      </router-link>
      <router-link tag="a" to="/Category">
        <span></span>分类
      </router-link>
      <router-link tag="a" to="/Mine">
        <span></span>我的菜虫
      </router-link>
      <router-link tag="a" to="/Cart">
        <span></span>购物车
      </router-link>
      <router-link tag="a" to="/Baike">
        <span></span>百科
      </router-link>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
    .tabBar{
        position: absolute;
        bottom:0;
        height: 4.7rem;
        left: 0;
        right:0;
        display: flex;
    }
    .tabBar>a{
        flex:1;
    }
</style>
