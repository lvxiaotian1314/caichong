// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入轮播图
import { Swipe, SwipeItem ,Lazyload,Indicator} from 'mint-ui';
//引入store
import store from './store'
//引入axios
import axios from 'axios'

//轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入通用的css
import "@/styles/index.less"
//引入更新rem的js
import "@/styles/reset.js"


//使用图片懒加载
Vue.use(Lazyload)

Vue.config.productionTip = false;
Vue.prototype.$loading=Indicator
Vue.prototype.$http=axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
