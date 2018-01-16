<template>
  <div class="tabBar">
      <router-link tag="a" to="/">
        <span class="iconfont icon-home "></span>首页
      </router-link>
      <router-link tag="a" to="/Category" >
        <span class="iconfont icon-category"></span>分类
      </router-link>
      <router-link class="mine" tag="a" to="/Mine">
        <span class="iconfont icon-mine"></span>我的菜虫
      </router-link>
      <router-link tag="a" to="/Cart" >
        <span class="iconfont icon-cart"  ></span>购物车
      </router-link>
      <router-link tag="a" to="/Baike">
        <span class="iconfont icon-baike"></span>百科
      </router-link>
  </div>
</template>
<script>
import './icon/iconfont.css'
export default {
    data(){
      return{
        activeNav:0
      }
    }
}
</script>
<style lang="less" scoped>
    .tabBar{
        position: fixed;
        bottom:0px;
        height: 47px;
        left: 0;
        right:0;
        display: flex;
        background:rgb(230,230,230);
        a{
          flex: 1;
          font-size: 14px;
          .iconfont{
            width:32px;
            height: 32px;
            display: block;
            margin:0 auto;
            line-height: 32px;
            font-size:18px;
          }
        }
        a.mine{
          flex: 1.8
        }
    }
    .router-link-exact-active{
      span{
        color:rgb(121,206,53);
      }
    }
</style>
