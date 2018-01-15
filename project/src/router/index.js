import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Category from '@/pages/Category/Category'
import Mine from '@/pages/Mine/Mine'
import Cart from '@/pages/Cart/Cart'
import Baike from '@/pages/Baike/Baike'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path:'/Baike',
      name:'Baike',
      component:Baike
    },
    {
      path:'/Cart',
      name:'Cart',
      component:Cart
    }
  ]
})
