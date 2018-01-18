import Vue from 'vue'
import Router from 'vue-router'
//页面，按需动态加载
//首页
const Home=resolve =>require(['../pages/Home/Home.vue'],resolve)
//闪动超市
const Category=resolve =>require(['../pages/Category/Category.vue'],resolve)
//购物车
const Cart=resolve =>require(['../pages/Cart/Cart.vue'],resolve)
//我的菜虫
const Mine=resolve =>require(['../pages/Mine/Mine.vue'],resolve)
//百科
const Baike=resolve =>require(['../pages/Baike/Baike.vue'],resolve)
//商品列表
const product=resolve=>require(['../pages/product/product.vue'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path:'/Category',
      component:Category
    },
    {
      path:'/Mine',
      component:Mine
    },
    {
      path:'/Cart',
      component:Cart
    },
    {
      path:'/Baike',
      component:Baike
    },
    {
      path:'/Product/:id',
      component:product
    }
  ]
})
