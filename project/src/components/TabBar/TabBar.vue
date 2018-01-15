<template>
  <div class="tabBar">
      <router-link tag="a" to="/">
        <span></span>首页
      </router-link>
      <router-link tag="a" to="/Category">
        <span></span>分类
      </router-link>
      <router-link class="mine" tag="a" to="/Mine">
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
<style lang="less" scoped>
    .tabBar{
        position: absolute;
        bottom:1px;
        height: 47px;
        left: 0;
        right:0;
        display: flex;
        background:#eee;
        a{
          flex: 1;
          padding-top:32px;
          font-size: 14px;
        }
        a.mine{
          flex: 1.8
        }
    }
</style>
