import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  // store就是我们的数据中心，掌管所有的state状态
  store,
  render: h => h(App)
}).$mount('#app')
