import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
import store from './store'
// 引入三级联动组件作为全局组件
import TypeNav from '@/components/TypeNav'

Vue.config.productionTip = false
// 全局组件
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  //引入路由(key.value一只，可省略简写)
  router,
  store
}).$mount('#app')
